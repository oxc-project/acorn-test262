__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1980,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 20,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 20,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            }
          }
        },
        {
          "type": "Identifier",
          "start": 22,
          "end": 31,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            }
          }
        },
        {
          "type": "RestElement",
          "start": 33,
          "end": 47,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 52,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 65,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 66,
          "end": 80,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 84,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 86,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 98,
        "end": 168,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 166,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 107,
                "end": 166,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 117,
                    "end": 160,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 122,
                        "end": 131,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 123,
                          "end": 131,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 125,
                            "end": 131
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 133,
                        "end": 142,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 134,
                          "end": 142,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 136,
                            "end": 142
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 144,
                        "end": 158,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 148,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 148,
                          "end": 158,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 150,
                            "end": 158,
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 150,
                              "end": 156
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
      "start": 170,
      "end": 238,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 178,
        "end": 238,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 184,
            "end": 236,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 195,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 195,
              "end": 236,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 196,
                  "end": 205,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 197,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 199,
                      "end": 205
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 207,
                  "end": 216,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 208,
                    "end": 216,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 210,
                      "end": 216
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 218,
                  "end": 232,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 222,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 222,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 224,
                      "end": 232,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 224,
                        "end": 230
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 234,
                "end": 236,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 240,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 251,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 252,
        "end": 276,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 258,
            "end": 274,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 258,
              "end": 263,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 265,
                "end": 273,
                "exprName": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 278,
      "end": 310,
      "id": {
        "type": "Identifier",
        "start": 288,
        "end": 289,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 290,
        "end": 310,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 296,
            "end": 308,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 296,
              "end": 297,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 307,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 299,
                "end": 307,
                "exprName": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 307,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 312,
      "end": 328,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 327,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 327,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 319,
                "end": 327,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 319,
                  "end": 325
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 338,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 337,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 336,
                "end": 337,
                "typeName": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 337,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 348,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 347,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 347,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 346,
                "end": 347,
                "typeName": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 347,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 360,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 359,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 354,
              "end": 359,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 356,
                "end": 359,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 356,
                  "end": 357,
                  "typeName": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 357,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 389,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 388,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 388,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 368,
                "end": 388,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 370,
                    "end": 386,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 371,
                        "end": 382,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 374,
                          "end": 382,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 376,
                            "end": 382
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 383,
                      "end": 386,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 385,
                        "end": 386,
                        "typeName": {
                          "type": "Identifier",
                          "start": 385,
                          "end": 386,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 390,
      "end": 401,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 394,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 394,
            "end": 400,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 395,
              "end": 400,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 397,
                "end": 400,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 397,
                  "end": 398,
                  "typeName": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 398,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 430,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 429,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 429,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 429,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 409,
                "end": 429,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 411,
                    "end": 427,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 412,
                        "end": 423,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 415,
                          "end": 423,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 417,
                            "end": 423
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 424,
                      "end": 427,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 426,
                        "end": 427,
                        "typeName": {
                          "type": "Identifier",
                          "start": 426,
                          "end": 427,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 431,
      "end": 444,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 443,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 443,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 436,
              "end": 443,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 438,
                "end": 443,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 438,
                  "end": 441,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 438,
                    "end": 439,
                    "typeName": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 439,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 466,
      "end": 488,
      "expression": {
        "type": "NewExpression",
        "start": 466,
        "end": 487,
        "callee": {
          "type": "Identifier",
          "start": 470,
          "end": 471,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 472,
            "end": 473,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 475,
            "end": 476,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 478,
            "end": 486,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 489,
      "end": 507,
      "expression": {
        "type": "NewExpression",
        "start": 489,
        "end": 506,
        "callee": {
          "type": "Identifier",
          "start": 493,
          "end": 494,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 495,
            "end": 496,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 498,
            "end": 499,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 501,
            "end": 505,
            "argument": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 508,
      "end": 536,
      "expression": {
        "type": "NewExpression",
        "start": 508,
        "end": 535,
        "callee": {
          "type": "Identifier",
          "start": 512,
          "end": 513,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 514,
            "end": 515,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 517,
            "end": 518,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 520,
            "end": 524,
            "argument": {
              "type": "Identifier",
              "start": 523,
              "end": 524,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 526,
            "end": 534,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 568,
      "end": 587,
      "expression": {
        "type": "NewExpression",
        "start": 568,
        "end": 586,
        "callee": {
          "type": "Identifier",
          "start": 572,
          "end": 574,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 575,
            "end": 579,
            "argument": {
              "type": "Identifier",
              "start": 578,
              "end": 579,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "SpreadElement",
            "start": 581,
            "end": 585,
            "argument": {
              "type": "Identifier",
              "start": 584,
              "end": 585,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 588,
      "end": 612,
      "expression": {
        "type": "NewExpression",
        "start": 588,
        "end": 611,
        "callee": {
          "type": "Identifier",
          "start": 592,
          "end": 593,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 594,
            "end": 595,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 597,
            "end": 598,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 600,
            "end": 604,
            "argument": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "SpreadElement",
            "start": 606,
            "end": 610,
            "argument": {
              "type": "Identifier",
              "start": 609,
              "end": 610,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 633,
      "end": 657,
      "expression": {
        "type": "CallExpression",
        "start": 633,
        "end": 656,
        "callee": {
          "type": "NewExpression",
          "start": 633,
          "end": 654,
          "callee": {
            "type": "Identifier",
            "start": 637,
            "end": 638,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 639,
              "end": 640,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 642,
              "end": 643,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 645,
              "end": 653,
              "value": "string",
              "raw": "\"string\""
            }
          ]
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 658,
      "end": 678,
      "expression": {
        "type": "CallExpression",
        "start": 658,
        "end": 677,
        "callee": {
          "type": "NewExpression",
          "start": 658,
          "end": 675,
          "callee": {
            "type": "Identifier",
            "start": 662,
            "end": 663,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 664,
              "end": 665,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 667,
              "end": 668,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "SpreadElement",
              "start": 670,
              "end": 674,
              "argument": {
                "type": "Identifier",
                "start": 673,
                "end": 674,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 679,
      "end": 709,
      "expression": {
        "type": "CallExpression",
        "start": 679,
        "end": 708,
        "callee": {
          "type": "NewExpression",
          "start": 679,
          "end": 706,
          "callee": {
            "type": "Identifier",
            "start": 683,
            "end": 684,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 685,
              "end": 686,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 688,
              "end": 689,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "SpreadElement",
              "start": 691,
              "end": 695,
              "argument": {
                "type": "Identifier",
                "start": 694,
                "end": 695,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Literal",
              "start": 697,
              "end": 705,
              "value": "string",
              "raw": "\"string\""
            }
          ]
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 741,
      "end": 765,
      "expression": {
        "type": "NewExpression",
        "start": 741,
        "end": 764,
        "callee": {
          "type": "MemberExpression",
          "start": 745,
          "end": 748,
          "object": {
            "type": "Identifier",
            "start": 745,
            "end": 746,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 747,
            "end": 748,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 749,
            "end": 750,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 752,
            "end": 753,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 755,
            "end": 763,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 766,
      "end": 786,
      "expression": {
        "type": "NewExpression",
        "start": 766,
        "end": 785,
        "callee": {
          "type": "MemberExpression",
          "start": 770,
          "end": 773,
          "object": {
            "type": "Identifier",
            "start": 770,
            "end": 771,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 772,
            "end": 773,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 774,
            "end": 775,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 777,
            "end": 778,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 780,
            "end": 784,
            "argument": {
              "type": "Identifier",
              "start": 783,
              "end": 784,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 787,
      "end": 817,
      "expression": {
        "type": "NewExpression",
        "start": 787,
        "end": 816,
        "callee": {
          "type": "MemberExpression",
          "start": 791,
          "end": 794,
          "object": {
            "type": "Identifier",
            "start": 791,
            "end": 792,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 793,
            "end": 794,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 795,
            "end": 796,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 798,
            "end": 799,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 801,
            "end": 805,
            "argument": {
              "type": "Identifier",
              "start": 804,
              "end": 805,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 807,
            "end": 815,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 848,
      "end": 874,
      "expression": {
        "type": "NewExpression",
        "start": 848,
        "end": 873,
        "callee": {
          "type": "MemberExpression",
          "start": 853,
          "end": 856,
          "object": {
            "type": "Identifier",
            "start": 853,
            "end": 854,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 855,
            "end": 856,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 858,
            "end": 859,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 861,
            "end": 862,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 864,
            "end": 872,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 875,
      "end": 897,
      "expression": {
        "type": "NewExpression",
        "start": 875,
        "end": 896,
        "callee": {
          "type": "MemberExpression",
          "start": 880,
          "end": 883,
          "object": {
            "type": "Identifier",
            "start": 880,
            "end": 881,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 882,
            "end": 883,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 885,
            "end": 886,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 888,
            "end": 889,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 891,
            "end": 895,
            "argument": {
              "type": "Identifier",
              "start": 894,
              "end": 895,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 898,
      "end": 930,
      "expression": {
        "type": "NewExpression",
        "start": 898,
        "end": 929,
        "callee": {
          "type": "MemberExpression",
          "start": 903,
          "end": 906,
          "object": {
            "type": "Identifier",
            "start": 903,
            "end": 904,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 905,
            "end": 906,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 908,
            "end": 909,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 911,
            "end": 912,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 914,
            "end": 918,
            "argument": {
              "type": "Identifier",
              "start": 917,
              "end": 918,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 920,
            "end": 928,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 962,
      "end": 989,
      "expression": {
        "type": "NewExpression",
        "start": 962,
        "end": 988,
        "callee": {
          "type": "MemberExpression",
          "start": 966,
          "end": 972,
          "object": {
            "type": "MemberExpression",
            "start": 966,
            "end": 970,
            "object": {
              "type": "Identifier",
              "start": 966,
              "end": 967,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 968,
              "end": 969,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 971,
            "end": 972,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 973,
            "end": 974,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 976,
            "end": 977,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 979,
            "end": 987,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 990,
      "end": 1013,
      "expression": {
        "type": "NewExpression",
        "start": 990,
        "end": 1012,
        "callee": {
          "type": "MemberExpression",
          "start": 994,
          "end": 1000,
          "object": {
            "type": "MemberExpression",
            "start": 994,
            "end": 998,
            "object": {
              "type": "Identifier",
              "start": 994,
              "end": 995,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 996,
              "end": 997,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 999,
            "end": 1000,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1001,
            "end": 1002,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1004,
            "end": 1005,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1007,
            "end": 1011,
            "argument": {
              "type": "Identifier",
              "start": 1010,
              "end": 1011,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1014,
      "end": 1047,
      "expression": {
        "type": "NewExpression",
        "start": 1014,
        "end": 1046,
        "callee": {
          "type": "MemberExpression",
          "start": 1018,
          "end": 1024,
          "object": {
            "type": "MemberExpression",
            "start": 1018,
            "end": 1022,
            "object": {
              "type": "Identifier",
              "start": 1018,
              "end": 1019,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1020,
              "end": 1021,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 1023,
            "end": 1024,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1025,
            "end": 1026,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1028,
            "end": 1029,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1031,
            "end": 1035,
            "argument": {
              "type": "Identifier",
              "start": 1034,
              "end": 1035,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 1037,
            "end": 1045,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1100,
      "end": 1131,
      "expression": {
        "type": "NewExpression",
        "start": 1100,
        "end": 1130,
        "callee": {
          "type": "MemberExpression",
          "start": 1104,
          "end": 1114,
          "object": {
            "type": "MemberExpression",
            "start": 1104,
            "end": 1112,
            "object": {
              "type": "Identifier",
              "start": 1104,
              "end": 1105,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1106,
              "end": 1111,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 1113,
            "end": 1114,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1115,
            "end": 1116,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1118,
            "end": 1119,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1121,
            "end": 1129,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1132,
      "end": 1159,
      "expression": {
        "type": "NewExpression",
        "start": 1132,
        "end": 1158,
        "callee": {
          "type": "MemberExpression",
          "start": 1136,
          "end": 1146,
          "object": {
            "type": "MemberExpression",
            "start": 1136,
            "end": 1144,
            "object": {
              "type": "Identifier",
              "start": 1136,
              "end": 1137,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1138,
              "end": 1143,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 1145,
            "end": 1146,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1147,
            "end": 1148,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1150,
            "end": 1151,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1153,
            "end": 1157,
            "argument": {
              "type": "Identifier",
              "start": 1156,
              "end": 1157,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1160,
      "end": 1197,
      "expression": {
        "type": "NewExpression",
        "start": 1160,
        "end": 1196,
        "callee": {
          "type": "MemberExpression",
          "start": 1164,
          "end": 1174,
          "object": {
            "type": "MemberExpression",
            "start": 1164,
            "end": 1172,
            "object": {
              "type": "Identifier",
              "start": 1164,
              "end": 1165,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1166,
              "end": 1171,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 1173,
            "end": 1174,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1175,
            "end": 1176,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1178,
            "end": 1179,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1181,
            "end": 1185,
            "argument": {
              "type": "Identifier",
              "start": 1184,
              "end": 1185,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 1187,
            "end": 1195,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1219,
      "end": 1241,
      "expression": {
        "type": "NewExpression",
        "start": 1219,
        "end": 1240,
        "callee": {
          "type": "Identifier",
          "start": 1223,
          "end": 1224,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1225,
            "end": 1226,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1228,
            "end": 1229,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1231,
            "end": 1239,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1242,
      "end": 1260,
      "expression": {
        "type": "NewExpression",
        "start": 1242,
        "end": 1259,
        "callee": {
          "type": "Identifier",
          "start": 1246,
          "end": 1247,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1248,
            "end": 1249,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1251,
            "end": 1252,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1254,
            "end": 1258,
            "argument": {
              "type": "Identifier",
              "start": 1257,
              "end": 1258,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1261,
      "end": 1289,
      "expression": {
        "type": "NewExpression",
        "start": 1261,
        "end": 1288,
        "callee": {
          "type": "Identifier",
          "start": 1265,
          "end": 1266,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1267,
            "end": 1268,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1270,
            "end": 1271,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1273,
            "end": 1277,
            "argument": {
              "type": "Identifier",
              "start": 1276,
              "end": 1277,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 1279,
            "end": 1287,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1321,
      "end": 1350,
      "expression": {
        "type": "NewExpression",
        "start": 1321,
        "end": 1349,
        "callee": {
          "type": "MemberExpression",
          "start": 1325,
          "end": 1333,
          "object": {
            "type": "Identifier",
            "start": 1325,
            "end": 1326,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1327,
            "end": 1332,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1334,
            "end": 1335,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1337,
            "end": 1338,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1340,
            "end": 1348,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1351,
      "end": 1376,
      "expression": {
        "type": "NewExpression",
        "start": 1351,
        "end": 1375,
        "callee": {
          "type": "MemberExpression",
          "start": 1355,
          "end": 1363,
          "object": {
            "type": "Identifier",
            "start": 1355,
            "end": 1356,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1357,
            "end": 1362,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1364,
            "end": 1365,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1367,
            "end": 1368,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1370,
            "end": 1374,
            "argument": {
              "type": "Identifier",
              "start": 1373,
              "end": 1374,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1377,
      "end": 1412,
      "expression": {
        "type": "NewExpression",
        "start": 1377,
        "end": 1411,
        "callee": {
          "type": "MemberExpression",
          "start": 1381,
          "end": 1389,
          "object": {
            "type": "Identifier",
            "start": 1381,
            "end": 1382,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1383,
            "end": 1388,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1390,
            "end": 1391,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1393,
            "end": 1394,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1396,
            "end": 1400,
            "argument": {
              "type": "Identifier",
              "start": 1399,
              "end": 1400,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 1402,
            "end": 1410,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1442,
      "end": 1473,
      "expression": {
        "type": "NewExpression",
        "start": 1442,
        "end": 1472,
        "callee": {
          "type": "MemberExpression",
          "start": 1447,
          "end": 1455,
          "object": {
            "type": "Identifier",
            "start": 1447,
            "end": 1448,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1449,
            "end": 1454,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1457,
            "end": 1458,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1460,
            "end": 1461,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1463,
            "end": 1471,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1474,
      "end": 1501,
      "expression": {
        "type": "NewExpression",
        "start": 1474,
        "end": 1500,
        "callee": {
          "type": "MemberExpression",
          "start": 1479,
          "end": 1487,
          "object": {
            "type": "Identifier",
            "start": 1479,
            "end": 1480,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1481,
            "end": 1486,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1489,
            "end": 1490,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1492,
            "end": 1493,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1495,
            "end": 1499,
            "argument": {
              "type": "Identifier",
              "start": 1498,
              "end": 1499,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1502,
      "end": 1539,
      "expression": {
        "type": "NewExpression",
        "start": 1502,
        "end": 1538,
        "callee": {
          "type": "MemberExpression",
          "start": 1507,
          "end": 1515,
          "object": {
            "type": "Identifier",
            "start": 1507,
            "end": 1508,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1509,
            "end": 1514,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1517,
            "end": 1518,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1520,
            "end": 1521,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1523,
            "end": 1527,
            "argument": {
              "type": "Identifier",
              "start": 1526,
              "end": 1527,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 1529,
            "end": 1537,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1570,
      "end": 1602,
      "expression": {
        "type": "NewExpression",
        "start": 1570,
        "end": 1601,
        "callee": {
          "type": "MemberExpression",
          "start": 1574,
          "end": 1585,
          "object": {
            "type": "MemberExpression",
            "start": 1574,
            "end": 1578,
            "object": {
              "type": "Identifier",
              "start": 1574,
              "end": 1575,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1576,
              "end": 1577,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 1579,
            "end": 1584,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1586,
            "end": 1587,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1589,
            "end": 1590,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1592,
            "end": 1600,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1603,
      "end": 1631,
      "expression": {
        "type": "NewExpression",
        "start": 1603,
        "end": 1630,
        "callee": {
          "type": "MemberExpression",
          "start": 1607,
          "end": 1618,
          "object": {
            "type": "MemberExpression",
            "start": 1607,
            "end": 1611,
            "object": {
              "type": "Identifier",
              "start": 1607,
              "end": 1608,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1609,
              "end": 1610,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 1612,
            "end": 1617,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1619,
            "end": 1620,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1622,
            "end": 1623,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1625,
            "end": 1629,
            "argument": {
              "type": "Identifier",
              "start": 1628,
              "end": 1629,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1632,
      "end": 1670,
      "expression": {
        "type": "NewExpression",
        "start": 1632,
        "end": 1669,
        "callee": {
          "type": "MemberExpression",
          "start": 1636,
          "end": 1647,
          "object": {
            "type": "MemberExpression",
            "start": 1636,
            "end": 1640,
            "object": {
              "type": "Identifier",
              "start": 1636,
              "end": 1637,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1638,
              "end": 1639,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 1641,
            "end": 1646,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1648,
            "end": 1649,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1651,
            "end": 1652,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1654,
            "end": 1658,
            "argument": {
              "type": "Identifier",
              "start": 1657,
              "end": 1658,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 1660,
            "end": 1668,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1723,
      "end": 1759,
      "expression": {
        "type": "NewExpression",
        "start": 1723,
        "end": 1758,
        "callee": {
          "type": "MemberExpression",
          "start": 1727,
          "end": 1742,
          "object": {
            "type": "MemberExpression",
            "start": 1727,
            "end": 1735,
            "object": {
              "type": "Identifier",
              "start": 1727,
              "end": 1728,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1729,
              "end": 1734,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 1736,
            "end": 1741,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1743,
            "end": 1744,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1746,
            "end": 1747,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1749,
            "end": 1757,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1760,
      "end": 1792,
      "expression": {
        "type": "NewExpression",
        "start": 1760,
        "end": 1791,
        "callee": {
          "type": "MemberExpression",
          "start": 1764,
          "end": 1779,
          "object": {
            "type": "MemberExpression",
            "start": 1764,
            "end": 1772,
            "object": {
              "type": "Identifier",
              "start": 1764,
              "end": 1765,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1766,
              "end": 1771,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 1773,
            "end": 1778,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1780,
            "end": 1781,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1783,
            "end": 1784,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1786,
            "end": 1790,
            "argument": {
              "type": "Identifier",
              "start": 1789,
              "end": 1790,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1793,
      "end": 1835,
      "expression": {
        "type": "NewExpression",
        "start": 1793,
        "end": 1834,
        "callee": {
          "type": "MemberExpression",
          "start": 1797,
          "end": 1812,
          "object": {
            "type": "MemberExpression",
            "start": 1797,
            "end": 1805,
            "object": {
              "type": "Identifier",
              "start": 1797,
              "end": 1798,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1799,
              "end": 1804,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 1806,
            "end": 1811,
            "value": "a-b",
            "raw": "\"a-b\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1813,
            "end": 1814,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1816,
            "end": 1817,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1819,
            "end": 1823,
            "argument": {
              "type": "Identifier",
              "start": 1822,
              "end": 1823,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 1825,
            "end": 1833,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1880,
      "end": 1912,
      "expression": {
        "type": "NewExpression",
        "start": 1880,
        "end": 1911,
        "callee": {
          "type": "MemberExpression",
          "start": 1884,
          "end": 1895,
          "object": {
            "type": "MemberExpression",
            "start": 1884,
            "end": 1892,
            "object": {
              "type": "Identifier",
              "start": 1884,
              "end": 1885,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1886,
              "end": 1891,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 1893,
            "end": 1894,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1896,
            "end": 1897,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1899,
            "end": 1900,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1902,
            "end": 1910,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1913,
      "end": 1941,
      "expression": {
        "type": "NewExpression",
        "start": 1913,
        "end": 1940,
        "callee": {
          "type": "MemberExpression",
          "start": 1917,
          "end": 1928,
          "object": {
            "type": "MemberExpression",
            "start": 1917,
            "end": 1925,
            "object": {
              "type": "Identifier",
              "start": 1917,
              "end": 1918,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1919,
              "end": 1924,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 1926,
            "end": 1927,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1929,
            "end": 1930,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1932,
            "end": 1933,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1935,
            "end": 1939,
            "argument": {
              "type": "Identifier",
              "start": 1938,
              "end": 1939,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1942,
      "end": 1980,
      "expression": {
        "type": "NewExpression",
        "start": 1942,
        "end": 1979,
        "callee": {
          "type": "MemberExpression",
          "start": 1946,
          "end": 1957,
          "object": {
            "type": "MemberExpression",
            "start": 1946,
            "end": 1954,
            "object": {
              "type": "Identifier",
              "start": 1946,
              "end": 1947,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1948,
              "end": 1953,
              "value": "a-b",
              "raw": "\"a-b\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 1955,
            "end": 1956,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1958,
            "end": 1959,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1961,
            "end": 1962,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 1964,
            "end": 1968,
            "argument": {
              "type": "Identifier",
              "start": 1967,
              "end": 1968,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 1970,
            "end": 1978,
            "value": "string",
            "raw": "\"string\""
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
