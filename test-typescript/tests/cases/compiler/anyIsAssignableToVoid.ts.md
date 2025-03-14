anyIsAssignableToVoid.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 28,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 28,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 26,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 25,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 21,
                "end": 25
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "P",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 30,
      "end": 123,
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 123,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 114,
            "end": 121,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 120,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 117,
                "end": 120
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 50,
          "end": 51,
          "expression": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "P",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "Q",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
