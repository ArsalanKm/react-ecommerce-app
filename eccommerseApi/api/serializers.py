from .models import Category, Item
from rest_framework import serializers


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    items = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='item-detail'
    )

    class Meta:
        model = Category
        fields = ['title', 'routeName', 'items']


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
