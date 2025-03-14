classImplementsClass7.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 59,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 59,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 55,
          "end": 56,
          "expression": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
