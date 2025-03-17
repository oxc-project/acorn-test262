__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 15,
  "end": 150,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 15,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 29,
        "name": "H_inline1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 29,
        "end": 32,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 31,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 35,
        "end": 93,
        "checkType": {
          "type": "TSFunctionType",
          "start": 36,
          "end": 56,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 36,
            "end": 49,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 37,
                "end": 48,
                "name": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 47,
                  "end": 48,
                  "typeName": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
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
            "start": 52,
            "end": 56,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 56,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 67,
          "end": 80,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 70,
            "end": 80,
            "typeAnnotation": {
              "type": "TSInferType",
              "start": 73,
              "end": 80,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 79,
                "end": 80,
                "name": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 84,
          "end": 85,
          "typeName": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 88,
          "end": 93
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 107,
        "name": "Result",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 110,
        "end": 127,
        "typeName": {
          "type": "Identifier",
          "start": 110,
          "end": 119,
          "name": "H_inline1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 119,
          "end": 127,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 120,
              "end": 126
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
