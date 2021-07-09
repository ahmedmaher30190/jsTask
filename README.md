# this is js Object list
```javascript
[
  {
    domain:'google.com',
    sup: [
      'info@google.com',
      'suport@google.com',
      'carear@google.com',
      'domain@google.com',
      'director@google.com',
      'sales@google.com',
    ]
  },
  {
    domain:'facebook.com',
    sup: [
      'carear@facebook.com',
      'domain@facebook.com',
      'sales@facebook.com',
    ]
  },
  {
    domain:'whatsapp.com',
    sup: [
      'info@whatsapp.com',
      'suport@whatsapp.com',
      'carear@whatsapp.com',
      'domain@whatsapp.com',
    ]
  },
  {
    domain:'sabelhost.com',
    sup: [
      'info@sabelhost.com',
      'suport@sabelhost.com',
      'carear@sabelhost.com',
      'domain@sabelhost.com',
      'director@sabelhost.com',
      'sales@sabelhost.com',
    ]
  },
]
```
## this is output what i want

```javascript
['info@google.com',
'carear@facebook.com',
'info@whatsapp.com',
'info@sabelhost.com',
'suport@google.com',
'domain@facebook.com',
'suport@whatsapp.com',
'suport@sabelhost.com',
'carear@google.com',
'sales@facebook.com',
'carear@whatsapp.com',
'carear@sabelhost.com',
'domain@google.com',
'domain@whatsapp.com',
'domain@sabelhost.com',
'director@google.com',
'director@sabelhost.com',
'sales@google.com',
'sales@sabelhost.com']
```
