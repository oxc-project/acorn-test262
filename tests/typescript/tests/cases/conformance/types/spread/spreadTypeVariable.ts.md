__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 428,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 36,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 64,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 75,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 96,
          "end": 102,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 129,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 140,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 170,
          "end": 176,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 203,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 214,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 240,
                            "end": 248,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 242,
                              "end": 248
                            }
                          }
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
      "params": [
        {
          "type": "Identifier",
          "start": 258,
          "end": 264,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 291,
      "end": 379,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 302,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 330,
                            "end": 338,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 332,
                              "end": 338
                            }
                          }
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
      "params": [
        {
          "type": "Identifier",
          "start": 348,
          "end": 354,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 381,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 390,
        "end": 392,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
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
      "params": [
        {
          "type": "Identifier",
          "start": 396,
          "end": 402,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
