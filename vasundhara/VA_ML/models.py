from django.db import models
from django.db.models.deletion import CASCADE

class faq(models.Model):
    id=models.IntegerField(primary_key=True)
    question=models.CharField(max_length=255,default='')
    answer=models.TextField(max_length=500,default='')
    def __str__(self):
        return self.question

class new_data(models.Model):
    n=models.FloatField(max_length=10,default='')
    p=models.FloatField(max_length=10,default='')
    k=models.FloatField(max_length=10,default='')
    ph=models.FloatField(max_length=10,default='')
    rainfall=models.FloatField(max_length=10,default='')
    humidity=models.FloatField(max_length=10,default='')
    temprature=models.FloatField(max_length=10,default='')
    label   = models.CharField(max_length=50,default='')
    def __str__(self):
        return self.label    
    
class contactUs(models.Model):
    name = models.CharField(max_length=50,default='')
    email = models.EmailField(max_length=70,default='',primary_key=True)
    phone = models.ImageField(max_length=10,default=0)
    description = models.TextField(max_length=500,default='')
    def __str__(self):
        return self.name
