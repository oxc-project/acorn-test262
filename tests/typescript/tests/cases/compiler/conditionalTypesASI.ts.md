__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 90,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 43,
        "decorators": [],
        "name": "JSONSchema4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 90,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 48,
            "end": 58,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 58,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 52,
                "end": 58
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 61,
            "end": 88,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 68,
              "decorators": [],
              "name": "extends",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 88,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 71,
                "end": 88,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 71,
                    "end": 77
                  },
                  {
                    "type": "TSArrayType",
                    "start": 80,
                    "end": 88,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 80,
                      "end": 86
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
