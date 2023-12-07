import datetime
from io import BytesIO

from django.shortcuts import render
from django.http import request,response
# from django.contrib.auth.decorators import login_required
# from django.contrib.auth import logout
from django.shortcuts import *
from django.contrib.auth.models import User
# from django.contrib import messages ,auth
from django.template.loader import render_to_string, get_template
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from xhtml2pdf import pisa

from .models import *
from django.shortcuts import render, redirect
from django.contrib import messages
from django.urls import reverse
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode

# library for load ml model
from sklearn.tree import DecisionTreeClassifier
import joblib

from django.shortcuts import render
# from .decision_tree_model import load_decision_tree_model
from .dt import prediction_value

from datetime import date


# libraries for pdf generation
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.platypus import Table, TableStyle, Paragraph
from reportlab.lib import colors

from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Register Times New Roman font
pdfmetrics.registerFont(TTFont('Times-Roman', 'times.ttf'))
pdfmetrics.registerFont(TTFont('Times-Roman-Bold', 'timesbd.ttf'))


# Create your views here.
def home(request):
    return render(request,'home.html')


def registration(request):
    return render(request, 'registration.html')


def dataform(request):
    return render(request, 'dataform.html')


def contact_us(request):
    return render(request,'contact_us.html')


def about_us(request):
    return render(request,'about_us.html')


def FAQ(request):
    fandq = faq.objects.all()
    return render(request,'FAQ.html',{'fandq': fandq})


def load_decision_tree_model():
    model = joblib.load('D:\vasundhara\vasundhara\vasundhara\vasundhara\VA_ML\dt.py ')
    return model


def predict_using_decision_tree(request):
    if request.method == 'POST':
            # Get input values from the POST request
        n = float(request.POST['n'])
        p = float(request.POST['p'])
        k = float(request.POST['k'])
        ph = float(request.POST['ph'])
        humidity = float(request.POST['humidity'])
        rf = float(request.POST['rf'])
        temp = float(request.POST['temperature'])
        output = prediction_value(n=n, p=p, k=k, ph=ph, rf=rf, humidity=humidity, temp=temp)
        d = {'msg': [n, p, k, ph, humidity, rf, temp, output]}
        obj = new_data()
        obj.n = n
        obj.p = p
        obj.k = k
        obj.ph = ph
        obj.humidity = humidity
        obj.rainfall = rf
        obj.label = output
        obj.temprature = temp
        try:
            obj.save()
        except Exception as e:
            print(e)

        return render(request, 'result.html',d)
    

# generate pdf of output


def reportGenerate(request):
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="my_pdf.pdf"'

    # Create a buffer to save PDF content
    buffer = BytesIO()

    pdf = canvas.Canvas(buffer, pagesize=letter)
    pdf.setTitle("Suggested Crop")

    # Headers
    headers = ['N', 'P', 'K', 'ph', 'Humidity', 'RainFall', 'Temperature', 'Suggested Output']

    # Query your model to get the records
    records = new_data.objects.order_by('-id').values_list(
        'n', 'p', 'k', 'ph', 'humidity', 'rainfall', 'temprature', 'label'
    ).first()
    print(records)
    record = list(map(str, records))

    pdf.setFont("Times-Roman-Bold", 20)
    # Initial position
    x_position = 240
    y_position = 750
    pdf.drawString(x_position, y_position, "Vasundhara Analytics")

    # x_position = 240
    x_position = 40
    y_position -= 40
    # Set the font and font size
    pdf.setFont("Times-Roman-Bold", 16)
    current_date = datetime.datetime.now()
    pdf.drawString(x_position, y_position, "Date :"+str(current_date.day)+" / "+str(current_date.month)+" / "+str(current_date.year))

    data = [['N', 'P', 'K', 'PH', 'Humidity', 'Rainfall', 'Temperature', 'Suggested Crop'], [record[0], record[1], record[2], record[3], record[4], record[5], record[6], record[7]]]

    #table style

    style = TableStyle([('BACKGROUND', (0, 0), (-1, 0), colors.grey),
                        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
                        ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
                        ('GRID', (0, 0), (-1, -1), 1, colors.black)])
    # create table

    table = Table(data)
    table.setStyle(style)



    # draw the table on pdf
    x_position = 80
    y_position -= 80
    table.wrapOn(pdf,400, 600)
    table.drawOn(pdf, x_position, y_position)

    # text_width = pdf.stringWidth("Suggested Output Report", "Times-Roman", 17.5)
    # pdf.line(x_position, y_position - 2, x_position + text_width, y_position - 2)
    #
    # pdf.setFont("Times-Roman", 14)
    # x_position = 140
    # y_position -= 30
    # pdf.drawString(x_position, y_position, f"N : {record[0]}")
    #
    # y_position -= 20
    # pdf.drawString(x_position, y_position, f"P : {record[1]}")
    #
    # y_position -= 20 # Move down for the data rows
    # pdf.drawString(x_position, y_position, f"K : {record[2]}")
    #
    # y_position -= 20
    # pdf.drawString(x_position, y_position, f"PH : {record[3]}")
    #
    # y_position -= 20
    # pdf.drawString(x_position, y_position, f"Humidity : {record[4]}")
    #
    # y_position -= 20
    # pdf.drawString(x_position, y_position, f"Rainfall : {record[5]}")
    #
    # y_position -= 20
    # pdf.drawString(x_position, y_position, f"Temperature : {record[6]}")
    #
    # y_position -= 20
    # pdf.drawString(x_position, y_position, f"Suggested Crop : {record[7]}")

    print(record)

    pdf.save()

    # Get the value from the buffer and return the response
    pdf_value = buffer.getvalue()
    buffer.close()
    response.write(pdf_value)

    return response
# view to store farmer data into database

# def addFarmer(request):
#     name = request.POST["name"]
#     email = request.POST['email']
#     phno = request.POST['phno']
#     gender = request.POST['gender']
#     password = request.POST['password']
#     ad1 = request.POST['address1']
#     ad2 = request.POST['address2']
#  # After successful account creation, add a success message
#     messages.success(request, 'Account created successfully!')

#     f=farmer()
#     f.f_name= name
#     f.email_id=email
#     f.password = password
#     f.phnone=phno
#     f.gender=gender
#     f.address = ad1+ad2
#     current_datetime = datetime.datetime.now()
#     f.last_login = current_datetime
#     try:
#         f.save()
#         show_alert = True
#     except Exception as e:
#         pass
#     return render(request,'login.html',{'show_alert':show_alert})

# def loginAuthentication(request):
#     if request.method == 'POST':
#         username = request.POST['email']
#         password = request.POST['password']
#         rm=request.POST['rememberme']
#         far = farmer.objects.filter(email_id=username).filter(password=password)
#         if far.exists():
#             if rm:
#                 response=HttpResponse("cookie example")
#                 response.set_cookie('unac',username)
#                 response.set_cookie('pasc',password)
#                 # return response
#             else:
#                  if 'unac'in request.COOKIES:
#                      response.cookie.clear('unac')
#             return redirect('home')
#     else:
#             return redirect('login')
#     return render(request, 'login.html')


#generae reset password link

# def generate_reset_password_link(user):
#     # Generate a token for password reset
#     token = default_token_generator.make_token(user)
#
#     # Encode the user's ID in base64
#     uid = urlsafe_base64_encode(str(user.id).encode())
#
#     # Build the reset password URL
#     reset_link = reverse('password_reset_confirm', kwargs={'uidb64': uid, 'token': token})
#
#     return reset_link
#
# def send_password_reset_email(request):
#     try:
#         # email ='unnatijajal@gmail.com'
#         # Find the user with the provided email address
#         email = request.POST['email']
#         # Find the user with the provided email address
#         user = farmer.objects.get(email_id=email)
#         # Generate the reset password link with the user object
#         reset_link = generate_reset_password_link(user)
#
#         print(user)
#         # Generate the reset password link
#         for u in user:
#             if u.email_id == email:
#                 e = u
#         # reset_link = generate_reset_password_link(u)
#
#         # Create the subject and text content for the email
#         subject = "Password Reset"
#         text_content = "Click the following link to reset your password: {}".format(reset_link)
#
#         # Render the HTML content using the template
#         html_content = render_to_string('VA_ML/resetpass.html', {'reset_link': reset_link})
#
#         # Send the email
#         recipient_list = [email]
#         send_custom_html_email(request,subject, text_content, html_content, recipient_list)
#         return render(request, 'mailsent.html', {'msg': 'sent successfully!!'})
#     except farmer.DoesNotExist:
#         return render(request, 'mailsent.html', {'msg': 'error'})
#     except Exception as e:
#         return render(request, 'mailsent.html', {'msg': e})

    
def contact_Us(request):
    if request.method == 'POST':
        cu = contactUs()
        name = request.POST['name']
        email = request.POST['email']
        desc = request.POST['content']
        phn = request.POST['phone']
        cu.name = name
        cu.email = email
        cu.phone = phn
        cu.description = desc

        try:
            cu.save()
        except Exception as e:
            print(e)
        return render(request, 'contact_us.html',{'msg':'Sent successfully'})
