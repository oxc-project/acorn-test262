__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 78,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 13,
        "end": 77,
        "checkType": {
          "type": "TSMappedType",
          "start": 14,
          "end": 30,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 21,
            "end": 28,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 27,
              "end": 28,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": false,
          "readonly": null,
          "typeAnnotation": null
        },
        "extendsType": {
          "type": "TSMappedType",
          "start": 41,
          "end": 59,
          "constraint": {
            "type": "TSTypeReference",
            "start": 50,
            "end": 51,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": false,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 54,
            "end": 58,
            "indexType": {
              "type": "TSTypeReference",
              "start": 56,
              "end": 57,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 54,
              "end": 55,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 72,
          "end": 77
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 63,
          "end": 69
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
