__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1981,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 11,
          "end": 20,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 20,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 22,
          "end": 31,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 33,
          "end": 47,
          "argument": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 47,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 39,
              "end": 47,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 52,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 65,
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
          "type": "RestElement",
          "start": 66,
          "end": 80,
          "argument": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 70,
            "end": 80,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 72,
              "end": 80,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 85,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 87,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 99,
        "end": 169,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 167,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 108,
                "end": 167,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 118,
                    "end": 161,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 123,
                        "end": 132,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 124,
                          "end": 132,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 126,
                            "end": 132
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 134,
                        "end": 143,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 135,
                          "end": 143,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 137,
                            "end": 143
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 145,
                        "end": 159,
                        "argument": {
                          "type": "Identifier",
                          "start": 148,
                          "end": 149,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 149,
                          "end": 159,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 151,
                            "end": 159,
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 151,
                              "end": 157
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 239,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 185,
            "end": 237,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 196,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 237,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 200,
                      "end": 206
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 208,
                  "end": 217,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 209,
                    "end": 217,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 211,
                      "end": 217
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 219,
                  "end": 233,
                  "argument": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 223,
                    "end": 233,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 225,
                      "end": 233,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 225,
                        "end": 231
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 235,
                "end": 237,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 241,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 252,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 253,
        "end": 277,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 259,
            "end": 275,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 259,
              "end": 264,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 274,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 266,
                "end": 274,
                "exprName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 279,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 290,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 291,
        "end": 311,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 297,
            "end": 309,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 297,
              "end": 298,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 298,
              "end": 308,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 300,
                "end": 308,
                "exprName": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 317,
          "end": 328,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 328,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 328,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 320,
                "end": 328,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 320,
                  "end": 326
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 334,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 338,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 335,
              "end": 338,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 337,
                "end": 338,
                "typeName": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 338,
                  "name": "A",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 340,
      "end": 349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 348,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 348,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 345,
              "end": 348,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 347,
                "end": 348,
                "typeName": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 350,
      "end": 361,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 360,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 360,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 360,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 357,
                "end": 360,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 357,
                  "end": 358,
                  "typeName": {
                    "type": "Identifier",
                    "start": 357,
                    "end": 358,
                    "name": "A",
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 362,
      "end": 390,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 389,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 389,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 389,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 369,
                "end": 389,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 371,
                    "end": 387,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 372,
                        "end": 383,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 375,
                          "end": 383,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 377,
                            "end": 383
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 384,
                      "end": 387,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 386,
                        "end": 387,
                        "typeName": {
                          "type": "Identifier",
                          "start": 386,
                          "end": 387,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 391,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 401,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 401,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 398,
                "end": 401,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 398,
                  "end": 399,
                  "typeName": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 399,
                    "name": "C",
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 403,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 430,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 430,
            "name": "h",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 430,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 410,
                "end": 430,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 412,
                    "end": 428,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 413,
                        "end": 424,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 416,
                          "end": 424,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 418,
                            "end": 424
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 425,
                      "end": 428,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 427,
                        "end": 428,
                        "typeName": {
                          "type": "Identifier",
                          "start": 427,
                          "end": 428,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 444,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 444,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 437,
              "end": 444,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 439,
                "end": 444,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 439,
                  "end": 442,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 439,
                    "end": 440,
                    "typeName": {
                      "type": "Identifier",
                      "start": 439,
                      "end": 440,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 489,
      "expression": {
        "type": "NewExpression",
        "start": 467,
        "end": 488,
        "callee": {
          "type": "Identifier",
          "start": 471,
          "end": 472,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 473,
            "end": 474,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 476,
            "end": 477,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 479,
            "end": 487,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 490,
      "end": 508,
      "expression": {
        "type": "NewExpression",
        "start": 490,
        "end": 507,
        "callee": {
          "type": "Identifier",
          "start": 494,
          "end": 495,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 496,
            "end": 497,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 499,
            "end": 500,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 502,
            "end": 506,
            "argument": {
              "type": "Identifier",
              "start": 505,
              "end": 506,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 509,
      "end": 537,
      "expression": {
        "type": "NewExpression",
        "start": 509,
        "end": 536,
        "callee": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 515,
            "end": 516,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 518,
            "end": 519,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 521,
            "end": 525,
            "argument": {
              "type": "Identifier",
              "start": 524,
              "end": 525,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 527,
            "end": 535,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 569,
      "end": 588,
      "expression": {
        "type": "NewExpression",
        "start": 569,
        "end": 587,
        "callee": {
          "type": "Identifier",
          "start": 573,
          "end": 575,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 576,
            "end": 580,
            "argument": {
              "type": "Identifier",
              "start": 579,
              "end": 580,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "SpreadElement",
            "start": 582,
            "end": 586,
            "argument": {
              "type": "Identifier",
              "start": 585,
              "end": 586,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 589,
      "end": 613,
      "expression": {
        "type": "NewExpression",
        "start": 589,
        "end": 612,
        "callee": {
          "type": "Identifier",
          "start": 593,
          "end": 594,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 595,
            "end": 596,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 598,
            "end": 599,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 601,
            "end": 605,
            "argument": {
              "type": "Identifier",
              "start": 604,
              "end": 605,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "SpreadElement",
            "start": 607,
            "end": 611,
            "argument": {
              "type": "Identifier",
              "start": 610,
              "end": 611,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 634,
      "end": 658,
      "expression": {
        "type": "CallExpression",
        "start": 634,
        "end": 657,
        "callee": {
          "type": "NewExpression",
          "start": 634,
          "end": 655,
          "callee": {
            "type": "Identifier",
            "start": 638,
            "end": 639,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 640,
              "end": 641,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 643,
              "end": 644,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 646,
              "end": 654,
              "value": "string",
              "raw": "\"string\""
            }
          ],
          "typeArguments": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 659,
      "end": 679,
      "expression": {
        "type": "CallExpression",
        "start": 659,
        "end": 678,
        "callee": {
          "type": "NewExpression",
          "start": 659,
          "end": 676,
          "callee": {
            "type": "Identifier",
            "start": 663,
            "end": 664,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 665,
              "end": 666,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 668,
              "end": 669,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "SpreadElement",
              "start": 671,
              "end": 675,
              "argument": {
                "type": "Identifier",
                "start": 674,
                "end": 675,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "typeArguments": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 680,
      "end": 710,
      "expression": {
        "type": "CallExpression",
        "start": 680,
        "end": 709,
        "callee": {
          "type": "NewExpression",
          "start": 680,
          "end": 707,
          "callee": {
            "type": "Identifier",
            "start": 684,
            "end": 685,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 686,
              "end": 687,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 689,
              "end": 690,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "SpreadElement",
              "start": 692,
              "end": 696,
              "argument": {
                "type": "Identifier",
                "start": 695,
                "end": 696,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            {
              "type": "Literal",
              "start": 698,
              "end": 706,
              "value": "string",
              "raw": "\"string\""
            }
          ],
          "typeArguments": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 742,
      "end": 766,
      "expression": {
        "type": "NewExpression",
        "start": 742,
        "end": 765,
        "callee": {
          "type": "MemberExpression",
          "start": 746,
          "end": 749,
          "object": {
            "type": "Identifier",
            "start": 746,
            "end": 747,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 748,
            "end": 749,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 750,
            "end": 751,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 753,
            "end": 754,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 756,
            "end": 764,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 767,
      "end": 787,
      "expression": {
        "type": "NewExpression",
        "start": 767,
        "end": 786,
        "callee": {
          "type": "MemberExpression",
          "start": 771,
          "end": 774,
          "object": {
            "type": "Identifier",
            "start": 771,
            "end": 772,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 773,
            "end": 774,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 775,
            "end": 776,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 778,
            "end": 779,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 781,
            "end": 785,
            "argument": {
              "type": "Identifier",
              "start": 784,
              "end": 785,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 788,
      "end": 818,
      "expression": {
        "type": "NewExpression",
        "start": 788,
        "end": 817,
        "callee": {
          "type": "MemberExpression",
          "start": 792,
          "end": 795,
          "object": {
            "type": "Identifier",
            "start": 792,
            "end": 793,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 794,
            "end": 795,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 796,
            "end": 797,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 799,
            "end": 800,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 802,
            "end": 806,
            "argument": {
              "type": "Identifier",
              "start": 805,
              "end": 806,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 808,
            "end": 816,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 849,
      "end": 875,
      "expression": {
        "type": "NewExpression",
        "start": 849,
        "end": 874,
        "callee": {
          "type": "MemberExpression",
          "start": 854,
          "end": 857,
          "object": {
            "type": "Identifier",
            "start": 854,
            "end": 855,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 856,
            "end": 857,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 859,
            "end": 860,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 862,
            "end": 863,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 865,
            "end": 873,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 876,
      "end": 898,
      "expression": {
        "type": "NewExpression",
        "start": 876,
        "end": 897,
        "callee": {
          "type": "MemberExpression",
          "start": 881,
          "end": 884,
          "object": {
            "type": "Identifier",
            "start": 881,
            "end": 882,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 883,
            "end": 884,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 886,
            "end": 887,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 889,
            "end": 890,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 892,
            "end": 896,
            "argument": {
              "type": "Identifier",
              "start": 895,
              "end": 896,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 899,
      "end": 931,
      "expression": {
        "type": "NewExpression",
        "start": 899,
        "end": 930,
        "callee": {
          "type": "MemberExpression",
          "start": 904,
          "end": 907,
          "object": {
            "type": "Identifier",
            "start": 904,
            "end": 905,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 906,
            "end": 907,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 909,
            "end": 910,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 912,
            "end": 913,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 915,
            "end": 919,
            "argument": {
              "type": "Identifier",
              "start": 918,
              "end": 919,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 921,
            "end": 929,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 963,
      "end": 990,
      "expression": {
        "type": "NewExpression",
        "start": 963,
        "end": 989,
        "callee": {
          "type": "MemberExpression",
          "start": 967,
          "end": 973,
          "object": {
            "type": "MemberExpression",
            "start": 967,
            "end": 971,
            "object": {
              "type": "Identifier",
              "start": 967,
              "end": 968,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 969,
              "end": 970,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 972,
            "end": 973,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 974,
            "end": 975,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 977,
            "end": 978,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 980,
            "end": 988,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 991,
      "end": 1014,
      "expression": {
        "type": "NewExpression",
        "start": 991,
        "end": 1013,
        "callee": {
          "type": "MemberExpression",
          "start": 995,
          "end": 1001,
          "object": {
            "type": "MemberExpression",
            "start": 995,
            "end": 999,
            "object": {
              "type": "Identifier",
              "start": 995,
              "end": 996,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 997,
              "end": 998,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1000,
            "end": 1001,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1002,
            "end": 1003,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1005,
            "end": 1006,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1008,
            "end": 1012,
            "argument": {
              "type": "Identifier",
              "start": 1011,
              "end": 1012,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1015,
      "end": 1048,
      "expression": {
        "type": "NewExpression",
        "start": 1015,
        "end": 1047,
        "callee": {
          "type": "MemberExpression",
          "start": 1019,
          "end": 1025,
          "object": {
            "type": "MemberExpression",
            "start": 1019,
            "end": 1023,
            "object": {
              "type": "Identifier",
              "start": 1019,
              "end": 1020,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1021,
              "end": 1022,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1024,
            "end": 1025,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1026,
            "end": 1027,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1029,
            "end": 1030,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1032,
            "end": 1036,
            "argument": {
              "type": "Identifier",
              "start": 1035,
              "end": 1036,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1038,
            "end": 1046,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1101,
      "end": 1132,
      "expression": {
        "type": "NewExpression",
        "start": 1101,
        "end": 1131,
        "callee": {
          "type": "MemberExpression",
          "start": 1105,
          "end": 1115,
          "object": {
            "type": "MemberExpression",
            "start": 1105,
            "end": 1113,
            "object": {
              "type": "Identifier",
              "start": 1105,
              "end": 1106,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1107,
              "end": 1112,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1114,
            "end": 1115,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1116,
            "end": 1117,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1119,
            "end": 1120,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1122,
            "end": 1130,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1133,
      "end": 1160,
      "expression": {
        "type": "NewExpression",
        "start": 1133,
        "end": 1159,
        "callee": {
          "type": "MemberExpression",
          "start": 1137,
          "end": 1147,
          "object": {
            "type": "MemberExpression",
            "start": 1137,
            "end": 1145,
            "object": {
              "type": "Identifier",
              "start": 1137,
              "end": 1138,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1139,
              "end": 1144,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1146,
            "end": 1147,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1148,
            "end": 1149,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1151,
            "end": 1152,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1154,
            "end": 1158,
            "argument": {
              "type": "Identifier",
              "start": 1157,
              "end": 1158,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1161,
      "end": 1198,
      "expression": {
        "type": "NewExpression",
        "start": 1161,
        "end": 1197,
        "callee": {
          "type": "MemberExpression",
          "start": 1165,
          "end": 1175,
          "object": {
            "type": "MemberExpression",
            "start": 1165,
            "end": 1173,
            "object": {
              "type": "Identifier",
              "start": 1165,
              "end": 1166,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1167,
              "end": 1172,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1174,
            "end": 1175,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1176,
            "end": 1177,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1179,
            "end": 1180,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1182,
            "end": 1186,
            "argument": {
              "type": "Identifier",
              "start": 1185,
              "end": 1186,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1188,
            "end": 1196,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1220,
      "end": 1242,
      "expression": {
        "type": "NewExpression",
        "start": 1220,
        "end": 1241,
        "callee": {
          "type": "Identifier",
          "start": 1224,
          "end": 1225,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1226,
            "end": 1227,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1229,
            "end": 1230,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1232,
            "end": 1240,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1243,
      "end": 1261,
      "expression": {
        "type": "NewExpression",
        "start": 1243,
        "end": 1260,
        "callee": {
          "type": "Identifier",
          "start": 1247,
          "end": 1248,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1249,
            "end": 1250,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1252,
            "end": 1253,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1255,
            "end": 1259,
            "argument": {
              "type": "Identifier",
              "start": 1258,
              "end": 1259,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1262,
      "end": 1290,
      "expression": {
        "type": "NewExpression",
        "start": 1262,
        "end": 1289,
        "callee": {
          "type": "Identifier",
          "start": 1266,
          "end": 1267,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1268,
            "end": 1269,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1271,
            "end": 1272,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1274,
            "end": 1278,
            "argument": {
              "type": "Identifier",
              "start": 1277,
              "end": 1278,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1280,
            "end": 1288,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1322,
      "end": 1351,
      "expression": {
        "type": "NewExpression",
        "start": 1322,
        "end": 1350,
        "callee": {
          "type": "MemberExpression",
          "start": 1326,
          "end": 1334,
          "object": {
            "type": "Identifier",
            "start": 1326,
            "end": 1327,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1328,
            "end": 1333,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1335,
            "end": 1336,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1338,
            "end": 1339,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1341,
            "end": 1349,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1352,
      "end": 1377,
      "expression": {
        "type": "NewExpression",
        "start": 1352,
        "end": 1376,
        "callee": {
          "type": "MemberExpression",
          "start": 1356,
          "end": 1364,
          "object": {
            "type": "Identifier",
            "start": 1356,
            "end": 1357,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1358,
            "end": 1363,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1365,
            "end": 1366,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1368,
            "end": 1369,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1371,
            "end": 1375,
            "argument": {
              "type": "Identifier",
              "start": 1374,
              "end": 1375,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1378,
      "end": 1413,
      "expression": {
        "type": "NewExpression",
        "start": 1378,
        "end": 1412,
        "callee": {
          "type": "MemberExpression",
          "start": 1382,
          "end": 1390,
          "object": {
            "type": "Identifier",
            "start": 1382,
            "end": 1383,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1384,
            "end": 1389,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1391,
            "end": 1392,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1394,
            "end": 1395,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1397,
            "end": 1401,
            "argument": {
              "type": "Identifier",
              "start": 1400,
              "end": 1401,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1403,
            "end": 1411,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1443,
      "end": 1474,
      "expression": {
        "type": "NewExpression",
        "start": 1443,
        "end": 1473,
        "callee": {
          "type": "MemberExpression",
          "start": 1448,
          "end": 1456,
          "object": {
            "type": "Identifier",
            "start": 1448,
            "end": 1449,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1450,
            "end": 1455,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1458,
            "end": 1459,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1461,
            "end": 1462,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1464,
            "end": 1472,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1475,
      "end": 1502,
      "expression": {
        "type": "NewExpression",
        "start": 1475,
        "end": 1501,
        "callee": {
          "type": "MemberExpression",
          "start": 1480,
          "end": 1488,
          "object": {
            "type": "Identifier",
            "start": 1480,
            "end": 1481,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1482,
            "end": 1487,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1490,
            "end": 1491,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1493,
            "end": 1494,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1496,
            "end": 1500,
            "argument": {
              "type": "Identifier",
              "start": 1499,
              "end": 1500,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1503,
      "end": 1540,
      "expression": {
        "type": "NewExpression",
        "start": 1503,
        "end": 1539,
        "callee": {
          "type": "MemberExpression",
          "start": 1508,
          "end": 1516,
          "object": {
            "type": "Identifier",
            "start": 1508,
            "end": 1509,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1510,
            "end": 1515,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1518,
            "end": 1519,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1521,
            "end": 1522,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1524,
            "end": 1528,
            "argument": {
              "type": "Identifier",
              "start": 1527,
              "end": 1528,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1530,
            "end": 1538,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1571,
      "end": 1603,
      "expression": {
        "type": "NewExpression",
        "start": 1571,
        "end": 1602,
        "callee": {
          "type": "MemberExpression",
          "start": 1575,
          "end": 1586,
          "object": {
            "type": "MemberExpression",
            "start": 1575,
            "end": 1579,
            "object": {
              "type": "Identifier",
              "start": 1575,
              "end": 1576,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1577,
              "end": 1578,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1580,
            "end": 1585,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1587,
            "end": 1588,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1590,
            "end": 1591,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1593,
            "end": 1601,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1604,
      "end": 1632,
      "expression": {
        "type": "NewExpression",
        "start": 1604,
        "end": 1631,
        "callee": {
          "type": "MemberExpression",
          "start": 1608,
          "end": 1619,
          "object": {
            "type": "MemberExpression",
            "start": 1608,
            "end": 1612,
            "object": {
              "type": "Identifier",
              "start": 1608,
              "end": 1609,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1610,
              "end": 1611,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1613,
            "end": 1618,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1620,
            "end": 1621,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1623,
            "end": 1624,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1626,
            "end": 1630,
            "argument": {
              "type": "Identifier",
              "start": 1629,
              "end": 1630,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1633,
      "end": 1671,
      "expression": {
        "type": "NewExpression",
        "start": 1633,
        "end": 1670,
        "callee": {
          "type": "MemberExpression",
          "start": 1637,
          "end": 1648,
          "object": {
            "type": "MemberExpression",
            "start": 1637,
            "end": 1641,
            "object": {
              "type": "Identifier",
              "start": 1637,
              "end": 1638,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1639,
              "end": 1640,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1642,
            "end": 1647,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1649,
            "end": 1650,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1652,
            "end": 1653,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1655,
            "end": 1659,
            "argument": {
              "type": "Identifier",
              "start": 1658,
              "end": 1659,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1661,
            "end": 1669,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1724,
      "end": 1760,
      "expression": {
        "type": "NewExpression",
        "start": 1724,
        "end": 1759,
        "callee": {
          "type": "MemberExpression",
          "start": 1728,
          "end": 1743,
          "object": {
            "type": "MemberExpression",
            "start": 1728,
            "end": 1736,
            "object": {
              "type": "Identifier",
              "start": 1728,
              "end": 1729,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1730,
              "end": 1735,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1737,
            "end": 1742,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1744,
            "end": 1745,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1747,
            "end": 1748,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1750,
            "end": 1758,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1761,
      "end": 1793,
      "expression": {
        "type": "NewExpression",
        "start": 1761,
        "end": 1792,
        "callee": {
          "type": "MemberExpression",
          "start": 1765,
          "end": 1780,
          "object": {
            "type": "MemberExpression",
            "start": 1765,
            "end": 1773,
            "object": {
              "type": "Identifier",
              "start": 1765,
              "end": 1766,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1767,
              "end": 1772,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1774,
            "end": 1779,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1781,
            "end": 1782,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1784,
            "end": 1785,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1787,
            "end": 1791,
            "argument": {
              "type": "Identifier",
              "start": 1790,
              "end": 1791,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1794,
      "end": 1836,
      "expression": {
        "type": "NewExpression",
        "start": 1794,
        "end": 1835,
        "callee": {
          "type": "MemberExpression",
          "start": 1798,
          "end": 1813,
          "object": {
            "type": "MemberExpression",
            "start": 1798,
            "end": 1806,
            "object": {
              "type": "Identifier",
              "start": 1798,
              "end": 1799,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1800,
              "end": 1805,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1807,
            "end": 1812,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1814,
            "end": 1815,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1817,
            "end": 1818,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1820,
            "end": 1824,
            "argument": {
              "type": "Identifier",
              "start": 1823,
              "end": 1824,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1826,
            "end": 1834,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1881,
      "end": 1913,
      "expression": {
        "type": "NewExpression",
        "start": 1881,
        "end": 1912,
        "callee": {
          "type": "MemberExpression",
          "start": 1885,
          "end": 1896,
          "object": {
            "type": "MemberExpression",
            "start": 1885,
            "end": 1893,
            "object": {
              "type": "Identifier",
              "start": 1885,
              "end": 1886,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1887,
              "end": 1892,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1894,
            "end": 1895,
            "value": 1,
            "raw": "1"
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1897,
            "end": 1898,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1900,
            "end": 1901,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1903,
            "end": 1911,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1914,
      "end": 1942,
      "expression": {
        "type": "NewExpression",
        "start": 1914,
        "end": 1941,
        "callee": {
          "type": "MemberExpression",
          "start": 1918,
          "end": 1929,
          "object": {
            "type": "MemberExpression",
            "start": 1918,
            "end": 1926,
            "object": {
              "type": "Identifier",
              "start": 1918,
              "end": 1919,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1920,
              "end": 1925,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1927,
            "end": 1928,
            "value": 1,
            "raw": "1"
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1930,
            "end": 1931,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1933,
            "end": 1934,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1936,
            "end": 1940,
            "argument": {
              "type": "Identifier",
              "start": 1939,
              "end": 1940,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1943,
      "end": 1981,
      "expression": {
        "type": "NewExpression",
        "start": 1943,
        "end": 1980,
        "callee": {
          "type": "MemberExpression",
          "start": 1947,
          "end": 1958,
          "object": {
            "type": "MemberExpression",
            "start": 1947,
            "end": 1955,
            "object": {
              "type": "Identifier",
              "start": 1947,
              "end": 1948,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1949,
              "end": 1954,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1956,
            "end": 1957,
            "value": 1,
            "raw": "1"
          },
          "computed": true,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1959,
            "end": 1960,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1962,
            "end": 1963,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1965,
            "end": 1969,
            "argument": {
              "type": "Identifier",
              "start": 1968,
              "end": 1969,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1971,
            "end": 1979,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
