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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Query",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 49,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 47,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 29,
                "end": 33,
                "name": "x",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 46,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 41,
                  "name": "Query",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 71,
        "name": "Enumerator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 75,
        "end": 138,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 81,
            "end": 136,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 82,
                "end": 125,
                "name": "action",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 88,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 90,
                    "end": 125,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 91,
                        "end": 98,
                        "name": "item",
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 100,
                        "end": 113,
                        "name": "index",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 105,
                          "end": 113,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 107,
                            "end": 113
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": false
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
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 140,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 153,
        "name": "from",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 157,
          "end": 167,
          "name": "array",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 153,
        "end": 156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 155,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 168,
        "end": 178,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 170,
          "end": 178,
          "typeName": {
            "type": "Identifier",
            "start": 170,
            "end": 175,
            "name": "Query",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 180,
      "end": 234,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 193,
        "name": "from",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 197,
          "end": 222,
          "name": "enumerator",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 207,
            "end": 222,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 209,
              "end": 222,
              "typeName": {
                "type": "Identifier",
                "start": 209,
                "end": 219,
                "name": "Enumerator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 193,
        "end": 196,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 194,
            "end": 195,
            "name": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 223,
        "end": 233,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 225,
          "end": 233,
          "typeName": {
            "type": "Identifier",
            "start": 225,
            "end": 230,
            "name": "Query",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 235,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 248,
        "name": "from",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 249,
          "end": 257,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 252,
            "end": 257,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 254,
              "end": 257
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
