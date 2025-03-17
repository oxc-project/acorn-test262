__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "T",
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
        "type": "TSIndexedAccessType",
        "start": 13,
        "end": 50,
        "objectType": {
          "type": "TSTupleType",
          "start": 13,
          "end": 47,
          "elementTypes": [
            {
              "type": "TSConditionalType",
              "start": 14,
              "end": 46,
              "checkType": {
                "type": "TSTypeReference",
                "start": 14,
                "end": 15,
                "typeName": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 33,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 35,
                  "name": "C1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 35,
                  "end": 38,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 36,
                      "end": 37,
                      "typeName": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 41,
                "end": 46
              }
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 48,
          "end": 49,
          "literal": {
            "type": "Literal",
            "start": 48,
            "end": 49,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 52,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 59,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 59,
        "end": 62,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 61,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "T",
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
        "type": "TSIndexedAccessType",
        "start": 65,
        "end": 104,
        "objectType": {
          "type": "TSTupleType",
          "start": 65,
          "end": 101,
          "elementTypes": [
            {
              "type": "TSConditionalType",
              "start": 66,
              "end": 100,
              "checkType": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              },
              "trueType": {
                "type": "TSTupleType",
                "start": 85,
                "end": 92,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 86,
                    "end": 91,
                    "typeName": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 88,
                      "name": "C2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 88,
                      "end": 91,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 89,
                          "end": 90,
                          "typeName": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 90,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 95,
                "end": 100
              }
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 102,
          "end": 103,
          "literal": {
            "type": "Literal",
            "start": 102,
            "end": 103,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
