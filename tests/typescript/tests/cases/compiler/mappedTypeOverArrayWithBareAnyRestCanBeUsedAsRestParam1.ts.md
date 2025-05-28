__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 244,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 69,
        "decorators": [],
        "name": "Replace",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 95,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 88,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTupleType",
              "start": 80,
              "end": 88,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 81,
                  "end": 87,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 84,
                    "end": 87
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 93,
            "end": 94,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "B",
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 98,
        "end": 146,
        "key": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 108,
          "end": 115,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 114,
            "end": 115,
            "typeName": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 118,
          "end": 143,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 118,
            "end": 122,
            "objectType": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 119,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 120,
              "end": 121,
              "typeName": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 131,
            "end": 132,
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 135,
            "end": 136,
            "typeName": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 139,
            "end": 143,
            "objectType": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 140,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 141,
              "end": 142,
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 149,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 168,
        "decorators": [],
        "name": "ReplaceParams1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 168,
        "end": 198,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 169,
            "end": 191,
            "name": {
              "type": "Identifier",
              "start": 169,
              "end": 174,
              "decorators": [],
              "name": "ARRAY",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTupleType",
              "start": 183,
              "end": 191,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 184,
                  "end": 190,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 187,
                    "end": 190
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 193,
            "end": 194,
            "name": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 196,
            "end": 197,
            "name": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "B",
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
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 201,
        "end": 243,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 205,
            "end": 234,
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 208,
              "end": 212,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 234,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 214,
                "end": 234,
                "typeName": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 221,
                  "decorators": [],
                  "name": "Replace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 221,
                  "end": 234,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 222,
                      "end": 227,
                      "typeName": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 227,
                        "decorators": [],
                        "name": "ARRAY",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 229,
                      "end": 230,
                      "typeName": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 232,
                      "end": 233,
                      "typeName": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 233,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 237,
          "end": 243,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 240,
            "end": 243
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
