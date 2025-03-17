__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 221,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 177,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 40,
        "decorators": [],
        "name": "PromisedTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 90,
        "end": 177,
        "checkType": {
          "type": "TSTypeReference",
          "start": 90,
          "end": 91,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 100,
          "end": 167,
          "params": [
            {
              "type": "Identifier",
              "start": 101,
              "end": 111,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 102,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 104,
                  "end": 111,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 110,
                    "end": 111,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "decorators": [],
                      "name": "H",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            },
            {
              "type": "RestElement",
              "start": 113,
              "end": 129,
              "argument": {
                "type": "Identifier",
                "start": 116,
                "end": 120,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 120,
                "end": 129,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 122,
                  "end": 129,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 128,
                    "end": 129,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 131,
            "end": 167,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 134,
              "end": 167,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 135,
                  "end": 145,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 142,
                    "end": 145,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 143,
                        "end": 144,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "decorators": [],
                          "name": "H",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 142,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 147,
                  "end": 166,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 150,
                    "end": 166,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 163,
                      "end": 166,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 164,
                          "end": 165,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 164,
                            "end": 165,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 163,
                      "decorators": [],
                      "name": "PromisedTuple",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            }
          },
          "typeParameters": null
        },
        "falseType": {
          "type": "TSTupleType",
          "start": 175,
          "end": 177,
          "elementTypes": []
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 170,
          "end": 172,
          "elementTypes": []
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 40,
        "end": 83,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 56,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 51,
              "end": 56,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 51,
                "end": 54
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 58,
            "end": 82,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSFunctionType",
              "start": 62,
              "end": 82,
              "params": [
                {
                  "type": "RestElement",
                  "start": 63,
                  "end": 73,
                  "argument": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 70,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 70,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 72,
                      "end": 73,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "L",
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
                "start": 75,
                "end": 82,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 78,
                  "end": 82
                }
              },
              "typeParameters": null
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "U",
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
      "start": 179,
      "end": 219,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 192,
        "decorators": [],
        "name": "Promised",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 195,
        "end": 219,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 208,
          "end": 219,
          "params": [
            {
              "type": "TSTupleType",
              "start": 209,
              "end": 218,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 210,
                  "end": 211,
                  "literal": {
                    "type": "Literal",
                    "start": 210,
                    "end": 211,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 213,
                  "end": 214,
                  "literal": {
                    "type": "Literal",
                    "start": 213,
                    "end": 214,
                    "raw": "2",
                    "value": 2
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 216,
                  "end": 217,
                  "literal": {
                    "type": "Literal",
                    "start": 216,
                    "end": 217,
                    "raw": "3",
                    "value": 3
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 195,
          "end": 208,
          "decorators": [],
          "name": "PromisedTuple",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
