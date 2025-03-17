__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 429,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
          "start": 30,
          "end": 36,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 36,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 35,
              "end": 36,
              "typeName": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
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
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 62,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 42,
            "end": 60,
            "argument": {
              "type": "ObjectExpression",
              "start": 49,
              "end": 59,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 51,
                  "end": 57,
                  "argument": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 57,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 22,
              "end": 28
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 64,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 75,
        "name": "f2",
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
          "start": 96,
          "end": 102,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 102,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 101,
              "end": 102,
              "typeName": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
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
      "body": {
        "type": "BlockStatement",
        "start": 104,
        "end": 127,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 108,
            "end": 125,
            "argument": {
              "type": "ObjectExpression",
              "start": 115,
              "end": 125,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 117,
                  "end": 123,
                  "argument": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 123,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 95,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 94,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 86,
              "end": 94,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 129,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 140,
        "name": "f3",
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
          "start": 170,
          "end": 176,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 176,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 176,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
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
      "body": {
        "type": "BlockStatement",
        "start": 178,
        "end": 201,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 182,
            "end": 199,
            "argument": {
              "type": "ObjectExpression",
              "start": 189,
              "end": 199,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 191,
                  "end": 197,
                  "argument": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 197,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 140,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 141,
            "end": 168,
            "name": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 151,
              "end": 168,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 151,
                  "end": 157
                },
                {
                  "type": "TSArrayType",
                  "start": 160,
                  "end": 168,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 160,
                    "end": 166
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 203,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 214,
        "name": "f4",
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
          "start": 258,
          "end": 264,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 264,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 263,
              "end": 264,
              "typeName": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
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
      "body": {
        "type": "BlockStatement",
        "start": 266,
        "end": 289,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 270,
            "end": 287,
            "argument": {
              "type": "ObjectExpression",
              "start": 277,
              "end": 287,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 279,
                  "end": 285,
                  "argument": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 285,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 214,
        "end": 257,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 256,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 225,
              "end": 256,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 225,
                  "end": 231
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 234,
                  "end": 256,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 236,
                      "end": 254,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 237,
                          "end": 248,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 240,
                            "end": 248,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 242,
                              "end": 248
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 249,
                        "end": 254,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 251,
                          "end": 254
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 291,
      "end": 379,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 302,
        "name": "f5",
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
          "start": 348,
          "end": 354,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 351,
            "end": 354,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 353,
              "end": 354,
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
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
      "body": {
        "type": "BlockStatement",
        "start": 356,
        "end": 379,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 360,
            "end": 377,
            "argument": {
              "type": "ObjectExpression",
              "start": 367,
              "end": 377,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 369,
                  "end": 375,
                  "argument": {
                    "type": "Identifier",
                    "start": 372,
                    "end": 375,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 302,
        "end": 347,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 303,
            "end": 346,
            "name": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 313,
              "end": 346,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 313,
                  "end": 321,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 313,
                    "end": 319
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 324,
                  "end": 346,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 326,
                      "end": 344,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 327,
                          "end": 338,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 330,
                            "end": 338,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 332,
                              "end": 338
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 339,
                        "end": 344,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 341,
                          "end": 344
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 381,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 390,
        "end": 392,
        "name": "f6",
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
          "start": 396,
          "end": 402,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 399,
            "end": 402,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 401,
              "end": 402,
              "typeName": {
                "type": "Identifier",
                "start": 401,
                "end": 402,
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
      "body": {
        "type": "BlockStatement",
        "start": 404,
        "end": 427,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 408,
            "end": 425,
            "argument": {
              "type": "ObjectExpression",
              "start": 415,
              "end": 425,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 417,
                  "end": 423,
                  "argument": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 423,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 392,
        "end": 395,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 393,
            "end": 394,
            "name": {
              "type": "Identifier",
              "start": 393,
              "end": 394,
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
