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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 52,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
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
          "argument": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "z",
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
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 85,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 85,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 65,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 66,
          "end": 80,
          "argument": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "x",
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
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 87,
      "end": 169,
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
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 123,
                        "end": 132,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 124,
                          "end": 132,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 126,
                            "end": 132
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 134,
                        "end": 143,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 135,
                          "end": 143,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 137,
                            "end": 143
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 145,
                        "end": 159,
                        "argument": {
                          "type": "Identifier",
                          "start": 148,
                          "end": 149,
                          "decorators": [],
                          "name": "z",
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
                        }
                      }
                    ]
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 239,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 239,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 185,
            "end": 237,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 196,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 237,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 235,
                "end": 237,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 200,
                      "end": 206
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 208,
                  "end": 217,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 209,
                    "end": 217,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 211,
                      "end": 217
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 219,
                  "end": 233,
                  "argument": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
                    "decorators": [],
                    "name": "z",
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
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 241,
      "end": 277,
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
            "key": {
              "type": "Literal",
              "start": 259,
              "end": 264,
              "raw": "\"a-b\"",
              "value": "a-b"
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 252,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 279,
      "end": 311,
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
            "key": {
              "type": "Literal",
              "start": 297,
              "end": 298,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 290,
        "decorators": [],
        "name": "D",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 328,
            "decorators": [],
            "name": "a",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 338,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 348,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 360,
            "decorators": [],
            "name": "d",
            "optional": false,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 389,
            "decorators": [],
            "name": "e",
            "optional": false,
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
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 375,
                          "end": 383,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 377,
                            "end": 383
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 401,
            "decorators": [],
            "name": "g",
            "optional": false,
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
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 430,
            "decorators": [],
            "name": "h",
            "optional": false,
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
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 416,
                          "end": 424,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 418,
                            "end": 424
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 444,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 489,
      "expression": {
        "type": "NewExpression",
        "start": 467,
        "end": 488,
        "arguments": [
          {
            "type": "Literal",
            "start": 473,
            "end": 474,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 476,
            "end": 477,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 479,
            "end": 487,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 471,
          "end": 472,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 490,
      "end": 508,
      "expression": {
        "type": "NewExpression",
        "start": 490,
        "end": 507,
        "arguments": [
          {
            "type": "Literal",
            "start": 496,
            "end": 497,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 499,
            "end": 500,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 502,
            "end": 506,
            "argument": {
              "type": "Identifier",
              "start": 505,
              "end": 506,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 494,
          "end": 495,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 509,
      "end": 537,
      "expression": {
        "type": "NewExpression",
        "start": 509,
        "end": 536,
        "arguments": [
          {
            "type": "Literal",
            "start": 515,
            "end": 516,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 518,
            "end": 519,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 521,
            "end": 525,
            "argument": {
              "type": "Identifier",
              "start": 524,
              "end": 525,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 527,
            "end": 535,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 569,
      "end": 588,
      "expression": {
        "type": "NewExpression",
        "start": 569,
        "end": 587,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 576,
            "end": 580,
            "argument": {
              "type": "Identifier",
              "start": 579,
              "end": 580,
              "decorators": [],
              "name": "a",
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
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 573,
          "end": 575,
          "decorators": [],
          "name": "f2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 589,
      "end": 613,
      "expression": {
        "type": "NewExpression",
        "start": 589,
        "end": 612,
        "arguments": [
          {
            "type": "Literal",
            "start": 595,
            "end": 596,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 598,
            "end": 599,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 601,
            "end": 605,
            "argument": {
              "type": "Identifier",
              "start": 604,
              "end": 605,
              "decorators": [],
              "name": "a",
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
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 593,
          "end": 594,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 634,
      "end": 658,
      "expression": {
        "type": "CallExpression",
        "start": 634,
        "end": 657,
        "arguments": [],
        "callee": {
          "type": "NewExpression",
          "start": 634,
          "end": 655,
          "arguments": [
            {
              "type": "Literal",
              "start": 640,
              "end": 641,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 643,
              "end": 644,
              "raw": "2",
              "value": 2
            },
            {
              "type": "Literal",
              "start": 646,
              "end": 654,
              "raw": "\"string\"",
              "value": "string"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 638,
            "end": 639,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 659,
      "end": 679,
      "expression": {
        "type": "CallExpression",
        "start": 659,
        "end": 678,
        "arguments": [],
        "callee": {
          "type": "NewExpression",
          "start": 659,
          "end": 676,
          "arguments": [
            {
              "type": "Literal",
              "start": 665,
              "end": 666,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 668,
              "end": 669,
              "raw": "2",
              "value": 2
            },
            {
              "type": "SpreadElement",
              "start": 671,
              "end": 675,
              "argument": {
                "type": "Identifier",
                "start": 674,
                "end": 675,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 663,
            "end": 664,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 680,
      "end": 710,
      "expression": {
        "type": "CallExpression",
        "start": 680,
        "end": 709,
        "arguments": [],
        "callee": {
          "type": "NewExpression",
          "start": 680,
          "end": 707,
          "arguments": [
            {
              "type": "Literal",
              "start": 686,
              "end": 687,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 689,
              "end": 690,
              "raw": "2",
              "value": 2
            },
            {
              "type": "SpreadElement",
              "start": 692,
              "end": 696,
              "argument": {
                "type": "Identifier",
                "start": 695,
                "end": 696,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            {
              "type": "Literal",
              "start": 698,
              "end": 706,
              "raw": "\"string\"",
              "value": "string"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 684,
            "end": 685,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 742,
      "end": 766,
      "expression": {
        "type": "NewExpression",
        "start": 742,
        "end": 765,
        "arguments": [
          {
            "type": "Literal",
            "start": 750,
            "end": 751,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 753,
            "end": 754,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 756,
            "end": 764,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 746,
          "end": 749,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 746,
            "end": 747,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 748,
            "end": 749,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 767,
      "end": 787,
      "expression": {
        "type": "NewExpression",
        "start": 767,
        "end": 786,
        "arguments": [
          {
            "type": "Literal",
            "start": 775,
            "end": 776,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 778,
            "end": 779,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 781,
            "end": 785,
            "argument": {
              "type": "Identifier",
              "start": 784,
              "end": 785,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 771,
          "end": 774,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 771,
            "end": 772,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 773,
            "end": 774,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 788,
      "end": 818,
      "expression": {
        "type": "NewExpression",
        "start": 788,
        "end": 817,
        "arguments": [
          {
            "type": "Literal",
            "start": 796,
            "end": 797,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 799,
            "end": 800,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 802,
            "end": 806,
            "argument": {
              "type": "Identifier",
              "start": 805,
              "end": 806,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 808,
            "end": 816,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 792,
          "end": 795,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 792,
            "end": 793,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 794,
            "end": 795,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 849,
      "end": 875,
      "expression": {
        "type": "NewExpression",
        "start": 849,
        "end": 874,
        "arguments": [
          {
            "type": "Literal",
            "start": 859,
            "end": 860,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 862,
            "end": 863,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 865,
            "end": 873,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 854,
          "end": 857,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 854,
            "end": 855,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 856,
            "end": 857,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 876,
      "end": 898,
      "expression": {
        "type": "NewExpression",
        "start": 876,
        "end": 897,
        "arguments": [
          {
            "type": "Literal",
            "start": 886,
            "end": 887,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 889,
            "end": 890,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 892,
            "end": 896,
            "argument": {
              "type": "Identifier",
              "start": 895,
              "end": 896,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 881,
          "end": 884,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 881,
            "end": 882,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 883,
            "end": 884,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 899,
      "end": 931,
      "expression": {
        "type": "NewExpression",
        "start": 899,
        "end": 930,
        "arguments": [
          {
            "type": "Literal",
            "start": 909,
            "end": 910,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 912,
            "end": 913,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 915,
            "end": 919,
            "argument": {
              "type": "Identifier",
              "start": 918,
              "end": 919,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 921,
            "end": 929,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 904,
          "end": 907,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 904,
            "end": 905,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 906,
            "end": 907,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 963,
      "end": 990,
      "expression": {
        "type": "NewExpression",
        "start": 963,
        "end": 989,
        "arguments": [
          {
            "type": "Literal",
            "start": 974,
            "end": 975,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 977,
            "end": 978,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 980,
            "end": 988,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 967,
          "end": 973,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 967,
            "end": 971,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 967,
              "end": 968,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 969,
              "end": 970,
              "raw": "1",
              "value": 1
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 972,
            "end": 973,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 991,
      "end": 1014,
      "expression": {
        "type": "NewExpression",
        "start": 991,
        "end": 1013,
        "arguments": [
          {
            "type": "Literal",
            "start": 1002,
            "end": 1003,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1005,
            "end": 1006,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1008,
            "end": 1012,
            "argument": {
              "type": "Identifier",
              "start": 1011,
              "end": 1012,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 995,
          "end": 1001,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 995,
            "end": 999,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 995,
              "end": 996,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 997,
              "end": 998,
              "raw": "1",
              "value": 1
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1000,
            "end": 1001,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1015,
      "end": 1048,
      "expression": {
        "type": "NewExpression",
        "start": 1015,
        "end": 1047,
        "arguments": [
          {
            "type": "Literal",
            "start": 1026,
            "end": 1027,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1029,
            "end": 1030,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1032,
            "end": 1036,
            "argument": {
              "type": "Identifier",
              "start": 1035,
              "end": 1036,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1038,
            "end": 1046,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1019,
          "end": 1025,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1019,
            "end": 1023,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1019,
              "end": 1020,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1021,
              "end": 1022,
              "raw": "1",
              "value": 1
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1024,
            "end": 1025,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1101,
      "end": 1132,
      "expression": {
        "type": "NewExpression",
        "start": 1101,
        "end": 1131,
        "arguments": [
          {
            "type": "Literal",
            "start": 1116,
            "end": 1117,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1119,
            "end": 1120,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1122,
            "end": 1130,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1105,
          "end": 1115,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1105,
            "end": 1113,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1105,
              "end": 1106,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1107,
              "end": 1112,
              "raw": "\"a-b\"",
              "value": "a-b"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1114,
            "end": 1115,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1133,
      "end": 1160,
      "expression": {
        "type": "NewExpression",
        "start": 1133,
        "end": 1159,
        "arguments": [
          {
            "type": "Literal",
            "start": 1148,
            "end": 1149,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1151,
            "end": 1152,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1154,
            "end": 1158,
            "argument": {
              "type": "Identifier",
              "start": 1157,
              "end": 1158,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1137,
          "end": 1147,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1137,
            "end": 1145,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1137,
              "end": 1138,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1139,
              "end": 1144,
              "raw": "\"a-b\"",
              "value": "a-b"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1146,
            "end": 1147,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1161,
      "end": 1198,
      "expression": {
        "type": "NewExpression",
        "start": 1161,
        "end": 1197,
        "arguments": [
          {
            "type": "Literal",
            "start": 1176,
            "end": 1177,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1179,
            "end": 1180,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1182,
            "end": 1186,
            "argument": {
              "type": "Identifier",
              "start": 1185,
              "end": 1186,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1188,
            "end": 1196,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1165,
          "end": 1175,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1165,
            "end": 1173,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1165,
              "end": 1166,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1167,
              "end": 1172,
              "raw": "\"a-b\"",
              "value": "a-b"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1174,
            "end": 1175,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1220,
      "end": 1242,
      "expression": {
        "type": "NewExpression",
        "start": 1220,
        "end": 1241,
        "arguments": [
          {
            "type": "Literal",
            "start": 1226,
            "end": 1227,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1229,
            "end": 1230,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1232,
            "end": 1240,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1224,
          "end": 1225,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1243,
      "end": 1261,
      "expression": {
        "type": "NewExpression",
        "start": 1243,
        "end": 1260,
        "arguments": [
          {
            "type": "Literal",
            "start": 1249,
            "end": 1250,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1252,
            "end": 1253,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1255,
            "end": 1259,
            "argument": {
              "type": "Identifier",
              "start": 1258,
              "end": 1259,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1247,
          "end": 1248,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1262,
      "end": 1290,
      "expression": {
        "type": "NewExpression",
        "start": 1262,
        "end": 1289,
        "arguments": [
          {
            "type": "Literal",
            "start": 1268,
            "end": 1269,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1271,
            "end": 1272,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1274,
            "end": 1278,
            "argument": {
              "type": "Identifier",
              "start": 1277,
              "end": 1278,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1280,
            "end": 1288,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1266,
          "end": 1267,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1322,
      "end": 1351,
      "expression": {
        "type": "NewExpression",
        "start": 1322,
        "end": 1350,
        "arguments": [
          {
            "type": "Literal",
            "start": 1335,
            "end": 1336,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1338,
            "end": 1339,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1341,
            "end": 1349,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1326,
          "end": 1334,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1326,
            "end": 1327,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1328,
            "end": 1333,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1352,
      "end": 1377,
      "expression": {
        "type": "NewExpression",
        "start": 1352,
        "end": 1376,
        "arguments": [
          {
            "type": "Literal",
            "start": 1365,
            "end": 1366,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1368,
            "end": 1369,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1371,
            "end": 1375,
            "argument": {
              "type": "Identifier",
              "start": 1374,
              "end": 1375,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1356,
          "end": 1364,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1356,
            "end": 1357,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1358,
            "end": 1363,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1378,
      "end": 1413,
      "expression": {
        "type": "NewExpression",
        "start": 1378,
        "end": 1412,
        "arguments": [
          {
            "type": "Literal",
            "start": 1391,
            "end": 1392,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1394,
            "end": 1395,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1397,
            "end": 1401,
            "argument": {
              "type": "Identifier",
              "start": 1400,
              "end": 1401,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1403,
            "end": 1411,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1382,
          "end": 1390,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1382,
            "end": 1383,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1384,
            "end": 1389,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1443,
      "end": 1474,
      "expression": {
        "type": "NewExpression",
        "start": 1443,
        "end": 1473,
        "arguments": [
          {
            "type": "Literal",
            "start": 1458,
            "end": 1459,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1461,
            "end": 1462,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1464,
            "end": 1472,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1448,
          "end": 1456,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1448,
            "end": 1449,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1450,
            "end": 1455,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1475,
      "end": 1502,
      "expression": {
        "type": "NewExpression",
        "start": 1475,
        "end": 1501,
        "arguments": [
          {
            "type": "Literal",
            "start": 1490,
            "end": 1491,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1493,
            "end": 1494,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1496,
            "end": 1500,
            "argument": {
              "type": "Identifier",
              "start": 1499,
              "end": 1500,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1480,
          "end": 1488,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1480,
            "end": 1481,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1482,
            "end": 1487,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1503,
      "end": 1540,
      "expression": {
        "type": "NewExpression",
        "start": 1503,
        "end": 1539,
        "arguments": [
          {
            "type": "Literal",
            "start": 1518,
            "end": 1519,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1521,
            "end": 1522,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1524,
            "end": 1528,
            "argument": {
              "type": "Identifier",
              "start": 1527,
              "end": 1528,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1530,
            "end": 1538,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1508,
          "end": 1516,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1508,
            "end": 1509,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1510,
            "end": 1515,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1571,
      "end": 1603,
      "expression": {
        "type": "NewExpression",
        "start": 1571,
        "end": 1602,
        "arguments": [
          {
            "type": "Literal",
            "start": 1587,
            "end": 1588,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1590,
            "end": 1591,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1593,
            "end": 1601,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1575,
          "end": 1586,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 1575,
            "end": 1579,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1575,
              "end": 1576,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1577,
              "end": 1578,
              "raw": "1",
              "value": 1
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1580,
            "end": 1585,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1604,
      "end": 1632,
      "expression": {
        "type": "NewExpression",
        "start": 1604,
        "end": 1631,
        "arguments": [
          {
            "type": "Literal",
            "start": 1620,
            "end": 1621,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1623,
            "end": 1624,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1626,
            "end": 1630,
            "argument": {
              "type": "Identifier",
              "start": 1629,
              "end": 1630,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1608,
          "end": 1619,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 1608,
            "end": 1612,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1608,
              "end": 1609,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1610,
              "end": 1611,
              "raw": "1",
              "value": 1
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1613,
            "end": 1618,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1633,
      "end": 1671,
      "expression": {
        "type": "NewExpression",
        "start": 1633,
        "end": 1670,
        "arguments": [
          {
            "type": "Literal",
            "start": 1649,
            "end": 1650,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1652,
            "end": 1653,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1655,
            "end": 1659,
            "argument": {
              "type": "Identifier",
              "start": 1658,
              "end": 1659,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1661,
            "end": 1669,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1637,
          "end": 1648,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 1637,
            "end": 1641,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1637,
              "end": 1638,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1639,
              "end": 1640,
              "raw": "1",
              "value": 1
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1642,
            "end": 1647,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1724,
      "end": 1760,
      "expression": {
        "type": "NewExpression",
        "start": 1724,
        "end": 1759,
        "arguments": [
          {
            "type": "Literal",
            "start": 1744,
            "end": 1745,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1747,
            "end": 1748,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1750,
            "end": 1758,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1728,
          "end": 1743,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 1728,
            "end": 1736,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1728,
              "end": 1729,
              "decorators": [],
              "name": "h",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1730,
              "end": 1735,
              "raw": "\"a-b\"",
              "value": "a-b"
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1737,
            "end": 1742,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1761,
      "end": 1793,
      "expression": {
        "type": "NewExpression",
        "start": 1761,
        "end": 1792,
        "arguments": [
          {
            "type": "Literal",
            "start": 1781,
            "end": 1782,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1784,
            "end": 1785,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1787,
            "end": 1791,
            "argument": {
              "type": "Identifier",
              "start": 1790,
              "end": 1791,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1765,
          "end": 1780,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 1765,
            "end": 1773,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1765,
              "end": 1766,
              "decorators": [],
              "name": "h",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1767,
              "end": 1772,
              "raw": "\"a-b\"",
              "value": "a-b"
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1774,
            "end": 1779,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1794,
      "end": 1836,
      "expression": {
        "type": "NewExpression",
        "start": 1794,
        "end": 1835,
        "arguments": [
          {
            "type": "Literal",
            "start": 1814,
            "end": 1815,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1817,
            "end": 1818,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1820,
            "end": 1824,
            "argument": {
              "type": "Identifier",
              "start": 1823,
              "end": 1824,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1826,
            "end": 1834,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1798,
          "end": 1813,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 1798,
            "end": 1806,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1798,
              "end": 1799,
              "decorators": [],
              "name": "h",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1800,
              "end": 1805,
              "raw": "\"a-b\"",
              "value": "a-b"
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1807,
            "end": 1812,
            "raw": "\"a-b\"",
            "value": "a-b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1881,
      "end": 1913,
      "expression": {
        "type": "NewExpression",
        "start": 1881,
        "end": 1912,
        "arguments": [
          {
            "type": "Literal",
            "start": 1897,
            "end": 1898,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1900,
            "end": 1901,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1903,
            "end": 1911,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1885,
          "end": 1896,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 1885,
            "end": 1893,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1885,
              "end": 1886,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1887,
              "end": 1892,
              "raw": "\"a-b\"",
              "value": "a-b"
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1894,
            "end": 1895,
            "raw": "1",
            "value": 1
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1914,
      "end": 1942,
      "expression": {
        "type": "NewExpression",
        "start": 1914,
        "end": 1941,
        "arguments": [
          {
            "type": "Literal",
            "start": 1930,
            "end": 1931,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1933,
            "end": 1934,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1936,
            "end": 1940,
            "argument": {
              "type": "Identifier",
              "start": 1939,
              "end": 1940,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1918,
          "end": 1929,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 1918,
            "end": 1926,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1918,
              "end": 1919,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1920,
              "end": 1925,
              "raw": "\"a-b\"",
              "value": "a-b"
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1927,
            "end": 1928,
            "raw": "1",
            "value": 1
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1943,
      "end": 1981,
      "expression": {
        "type": "NewExpression",
        "start": 1943,
        "end": 1980,
        "arguments": [
          {
            "type": "Literal",
            "start": 1959,
            "end": 1960,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1962,
            "end": 1963,
            "raw": "2",
            "value": 2
          },
          {
            "type": "SpreadElement",
            "start": 1965,
            "end": 1969,
            "argument": {
              "type": "Identifier",
              "start": 1968,
              "end": 1969,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 1971,
            "end": 1979,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1947,
          "end": 1958,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 1947,
            "end": 1955,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1947,
              "end": 1948,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1949,
              "end": 1954,
              "raw": "\"a-b\"",
              "value": "a-b"
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1956,
            "end": 1957,
            "raw": "1",
            "value": 1
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
