__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 66,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 24,
            "end": 45,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 25,
                "end": 34,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 26,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 28,
                    "end": 34
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 37,
                "end": 45,
                "exprName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 53,
            "end": 64,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 53,
              "end": 56,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 54,
                  "end": 55,
                  "name": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 64,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 60,
                "end": 64
              }
            }
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
