from django.shortcuts import render

from rest_framework import viewsets
from . import serializers
from rest_framework.response import Response
from .models import Category, Item
from .serializers import CategorySerializer, ItemSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
