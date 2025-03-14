__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 290,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 49,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 47,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 29,
                "end": 33,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 33,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 32,
                    "end": 33,
                    "typeName": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 33,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 46,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 41,
                  "end": 46,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 42,
                      "end": 45,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 42,
                        "end": 43,
                        "typeName": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 43,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 41,
                  "decorators": [],
                  "name": "Query",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Query",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 138,
      "body": {
        "type": "TSInterfaceBody",
        "start": 75,
        "end": 138,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 81,
            "end": 136,
            "params": [
              {
                "type": "Identifier",
                "start": 82,
                "end": 125,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 88,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 90,
                    "end": 125,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 91,
                        "end": 98,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 95,
                          "end": 98,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 97,
                            "end": 98,
                            "typeName": {
                              "type": "Identifier",
                              "start": 97,
                              "end": 98,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 100,
                        "end": 113,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 105,
                          "end": 113,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 107,
                            "end": 113
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 115,
                      "end": 125,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 118,
                        "end": 125
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 135,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 128,
                "end": 135
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 71,
        "decorators": [],
        "name": "Enumerator",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 140,
      "end": 179,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 153,
        "decorators": [],
        "name": "from",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 157,
          "end": 167,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 167,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 164,
              "end": 167,
              "elementType": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 165,
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 168,
        "end": 178,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 170,
          "end": 178,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 175,
            "end": 178,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 176,
                "end": 177,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 170,
            "end": 175,
            "decorators": [],
            "name": "Query",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 153,
        "end": 156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 155,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 180,
      "end": 234,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 193,
        "decorators": [],
        "name": "from",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 197,
          "end": 222,
          "decorators": [],
          "name": "enumerator",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 207,
            "end": 222,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 209,
              "end": 222,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 219,
                "end": 222,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 220,
                    "end": 221,
                    "typeName": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 221,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 209,
                "end": 219,
                "decorators": [],
                "name": "Enumerator",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 223,
        "end": 233,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 225,
          "end": 233,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 230,
            "end": 233,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 231,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 225,
            "end": 230,
            "decorators": [],
            "name": "Query",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 193,
        "end": 196,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 194,
            "end": 195,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 235,
      "end": 289,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 264,
        "end": 289,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 270,
            "end": 287,
            "argument": {
              "type": "Identifier",
              "start": 277,
              "end": 286,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 248,
        "decorators": [],
        "name": "from",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 249,
          "end": 257,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 252,
            "end": 257,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 254,
              "end": 257
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 258,
        "end": 263,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 260,
          "end": 263
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
