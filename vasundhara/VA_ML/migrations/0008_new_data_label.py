# Generated by Django 4.2.4 on 2023-10-14 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('VA_ML', '0007_new_data_delete_farmer'),
    ]

    operations = [
        migrations.AddField(
            model_name='new_data',
            name='label',
            field=models.CharField(default='', max_length=50),
        ),
    ]