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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 13,
        "end": 50,
        "indexType": {
          "type": "TSLiteralType",
          "start": 48,
          "end": 49,
          "literal": {
            "type": "Literal",
            "start": 48,
            "end": 49,
            "raw": "0",
            "value": 0
          }
        },
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 41,
                "end": 46
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 33,
                "end": 38,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 35,
                  "end": 38,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 36,
                      "end": 37,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 35,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ]
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
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 52,
      "end": 105,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 59,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 65,
        "end": 104,
        "indexType": {
          "type": "TSLiteralType",
          "start": 102,
          "end": 103,
          "literal": {
            "type": "Literal",
            "start": 102,
            "end": 103,
            "raw": "0",
            "value": 0
          }
        },
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 95,
                "end": 100
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
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 88,
                      "end": 91,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 89,
                          "end": 90,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 90,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 88,
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          ]
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
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
