from django.db import models


# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=255)
    routeName = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Item(models.Model):
    name = models.CharField(max_length=255)
    imageUrl = models.CharField(max_length=255)
    price = models.IntegerField(default=0)
    category = models.ForeignKey(Category, related_name='items', on_delete=models.CASCADE ,null=True)

    def __str__(self):
        return self.name
