__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 871,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 42,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
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
      "start": 44,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 52,
            "end": 53,
            "raw": "2",
            "value": 2
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 55,
      "end": 110,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 65,
        "end": 110,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 71,
            "end": 81,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 75,
                "end": 80,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "raw": "3",
                  "value": 3
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ForStatement",
            "start": 86,
            "end": 108,
            "body": {
              "type": "BlockStatement",
              "start": 105,
              "end": 108,
              "body": []
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 91,
              "end": 100,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 95,
                  "end": 100,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 99,
                    "end": 100,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "test": null,
            "update": null
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 59,
        "end": 63,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 119,
            "end": 136,
            "expression": {
              "type": "Identifier",
              "start": 127,
              "end": 136,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 120,
              "end": 126
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 260,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 225,
        "end": 260,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 231,
            "end": 258,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 235,
                "end": 257,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 239,
                  "end": 257,
                  "raw": "'this is a string'",
                  "value": "this is a string"
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 222,
        "decorators": [],
        "name": "declSpace",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 262,
      "end": 303,
      "body": {
        "type": "TSInterfaceBody",
        "start": 278,
        "end": 303,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 280,
            "end": 290,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 289,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 283,
                "end": 289
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 291,
            "end": 301,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 300,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 294,
                "end": 300
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 277,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 317,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 312,
                "end": 317,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 317,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 319,
      "end": 342,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 341,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 324,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 327,
            "end": 341,
            "properties": [
              {
                "type": "Property",
                "start": 329,
                "end": 333,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 330,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 332,
                  "end": 333,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 335,
                "end": 339,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 338,
                  "end": 339,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 343,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 347,
          "end": 380,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 347,
            "end": 355,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 348,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 350,
                "end": 355,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 355,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 358,
            "end": 380,
            "properties": [
              {
                "type": "Property",
                "start": 360,
                "end": 364,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 361,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 363,
                  "end": 364,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 366,
                "end": 378,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 378,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 382,
      "end": 421,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 420,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 387,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 390,
            "end": 420,
            "properties": [
              {
                "type": "Property",
                "start": 392,
                "end": 396,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 395,
                  "end": 396,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 398,
                "end": 418,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 399,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 401,
                  "end": 418,
                  "expression": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 418,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 402,
                    "end": 408
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 422,
      "end": 472,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 471,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 454,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 427,
              "end": 454,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 429,
                "end": 454,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 431,
                    "end": 441,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 431,
                      "end": 432,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 432,
                      "end": 440,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 434,
                        "end": 440
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 442,
                    "end": 452,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 442,
                      "end": 443,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 443,
                      "end": 451,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 445,
                        "end": 451
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 457,
            "end": 471,
            "properties": [
              {
                "type": "Property",
                "start": 459,
                "end": 463,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 460,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 462,
                  "end": 463,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 465,
                "end": 469,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 466,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 468,
                  "end": 469,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 473,
      "end": 531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 530,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 481,
            "end": 530,
            "expression": {
              "type": "ObjectExpression",
              "start": 508,
              "end": 530,
              "properties": [
                {
                  "type": "Property",
                  "start": 510,
                  "end": 514,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 510,
                    "end": 511,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 513,
                    "end": 514,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "Property",
                  "start": 516,
                  "end": 528,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 517,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 528,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 482,
              "end": 507,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 484,
                  "end": 494,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 485,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 485,
                    "end": 493,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 487,
                      "end": 493
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 495,
                  "end": 505,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 495,
                    "end": 496,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 496,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 498,
                      "end": 504
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 532,
      "end": 548,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 536,
          "end": 547,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 536,
            "end": 547,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 537,
              "end": 547,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 539,
                "end": 547,
                "exprName": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 547,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 550,
      "end": 594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 554,
          "end": 594,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 554,
            "end": 556,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 559,
            "end": 594,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 580,
              "end": 594,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 582,
                  "end": 592,
                  "argument": {
                    "type": "Literal",
                    "start": 589,
                    "end": 591,
                    "raw": "42",
                    "value": 42
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 569,
                "end": 578,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 570,
                  "end": 578,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 572,
                    "end": 578
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 595,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 599,
          "end": 620,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 599,
            "end": 601,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 604,
            "end": 620,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 619,
              "end": 620,
              "raw": "3",
              "value": 3
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 605,
                "end": 614,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 606,
                  "end": 614,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 608,
                    "end": 614
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 622,
      "end": 652,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 626,
          "end": 651,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 651,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 628,
              "end": 651,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 630,
                "end": 651,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 631,
                    "end": 640,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 632,
                      "end": 640,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 634,
                        "end": 640
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 642,
                  "end": 651,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 645,
                    "end": 651
                  }
                },
                "typeParameters": null
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
      "start": 653,
      "end": 685,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 657,
          "end": 684,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 657,
            "end": 684,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 659,
              "end": 684,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 661,
                "end": 684,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 663,
                    "end": 682,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 664,
                        "end": 673,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 665,
                          "end": 673,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 667,
                            "end": 673
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 674,
                      "end": 682,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 676,
                        "end": 682
                      }
                    },
                    "typeParameters": null
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
      "start": 686,
      "end": 724,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 690,
          "end": 723,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 690,
            "end": 692,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 695,
            "end": 723,
            "expression": {
              "type": "Literal",
              "start": 719,
              "end": 723,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 696,
              "end": 717,
              "params": [
                {
                  "type": "Identifier",
                  "start": 697,
                  "end": 706,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 698,
                    "end": 706,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 700,
                      "end": 706
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 708,
                "end": 717,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 711,
                  "end": 717
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 725,
      "end": 743,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 742,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 742,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 731,
              "end": 742,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 733,
                "end": 742,
                "exprName": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 742,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 745,
      "end": 761,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 760,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 760,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 750,
              "end": 760,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 752,
                "end": 760,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 752,
                  "end": 758
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
      "start": 763,
      "end": 781,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 767,
          "end": 781,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 767,
            "end": 768,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 771,
            "end": 781,
            "elements": [
              {
                "type": "Literal",
                "start": 772,
                "end": 775,
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 777,
                "end": 780,
                "raw": "'b'",
                "value": "b"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 782,
      "end": 803,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 786,
          "end": 802,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 786,
            "end": 787,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 790,
            "end": 802,
            "expression": {
              "type": "ArrayExpression",
              "start": 800,
              "end": 802,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 791,
              "end": 799,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 791,
                "end": 797
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 804,
      "end": 825,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 808,
          "end": 824,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 808,
            "end": 819,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 809,
              "end": 819,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 811,
                "end": 819,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 811,
                  "end": 817
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 822,
            "end": 824,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 826,
      "end": 854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 830,
          "end": 853,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 830,
            "end": 831,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 834,
            "end": 853,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 838,
              "end": 843,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 843,
              "end": 851,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 844,
                  "end": 850
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 855,
      "end": 871,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 859,
          "end": 870,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 859,
            "end": 870,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 860,
              "end": 870,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 862,
                "end": 870,
                "exprName": {
                  "type": "Identifier",
                  "start": 869,
                  "end": 870,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
