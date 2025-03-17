__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 245,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 147,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 69,
        "decorators": [],
        "name": "Replace",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 98,
        "end": 146,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 108,
          "end": 115,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 114,
            "end": 115,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 118,
          "end": 143,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 118,
            "end": 122,
            "indexType": {
              "type": "TSTypeReference",
              "start": 120,
              "end": 121,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 119,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 131,
            "end": 132,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 139,
            "end": 143,
            "indexType": {
              "type": "TSTypeReference",
              "start": 141,
              "end": 142,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 140,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 135,
            "end": 136,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
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
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 93,
            "end": 94,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "B",
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
      "start": 149,
      "end": 244,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 168,
        "decorators": [],
        "name": "ReplaceParams1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 201,
        "end": 243,
        "params": [
          {
            "type": "RestElement",
            "start": 205,
            "end": 234,
            "argument": {
              "type": "Identifier",
              "start": 208,
              "end": 212,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 234,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 214,
                "end": 234,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 221,
                  "end": 234,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 222,
                      "end": 227,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 227,
                        "decorators": [],
                        "name": "ARRAY",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 229,
                      "end": 230,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 232,
                      "end": 233,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 233,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 221,
                  "decorators": [],
                  "name": "Replace",
                  "optional": false,
                  "typeAnnotation": null
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
        },
        "typeParameters": null
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
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 169,
              "end": 174,
              "decorators": [],
              "name": "ARRAY",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 193,
            "end": 194,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 196,
            "end": 197,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "B",
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
