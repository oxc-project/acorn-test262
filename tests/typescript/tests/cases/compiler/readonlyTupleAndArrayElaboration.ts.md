__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 1390,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 62,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 43,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 46,
            "end": 61,
            "expression": {
              "type": "ArrayExpression",
              "start": 46,
              "end": 52,
              "elements": [
                {
                  "type": "Literal",
                  "start": 47,
                  "end": 48,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 50,
                  "end": 51,
                  "value": 4,
                  "raw": "4"
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 56,
              "end": 61,
              "typeName": {
                "type": "Identifier",
                "start": 56,
                "end": 61,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 64,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 91,
        "decorators": [],
        "name": "distanceFromOrigin",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 92,
          "end": 116,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 116,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 100,
              "end": 116,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 101,
                  "end": 107
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 109,
                  "end": 115
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 160,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 124,
            "end": 158,
            "argument": {
              "type": "CallExpression",
              "start": 131,
              "end": 157,
              "callee": {
                "type": "MemberExpression",
                "start": 131,
                "end": 140,
                "object": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 135,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 140,
                  "decorators": [],
                  "name": "sqrt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 141,
                  "end": 156,
                  "left": {
                    "type": "BinaryExpression",
                    "start": 141,
                    "end": 147,
                    "left": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "start": 146,
                      "end": 147,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "operator": "+",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 150,
                    "end": 156,
                    "left": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "start": 155,
                      "end": 156,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 188,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 187,
        "callee": {
          "type": "Identifier",
          "start": 162,
          "end": 180,
          "decorators": [],
          "name": "distanceFromOrigin",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 181,
            "end": 186,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 190,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 213,
        "decorators": [],
        "name": "arryFn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 214,
          "end": 225,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 225,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 217,
              "end": 225,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 217,
                "end": 223
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 226,
        "end": 232,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 228,
          "end": 232
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 248,
      "expression": {
        "type": "CallExpression",
        "start": 234,
        "end": 247,
        "callee": {
          "type": "Identifier",
          "start": 234,
          "end": 240,
          "decorators": [],
          "name": "arryFn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 241,
            "end": 246,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 250,
      "end": 299,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 274,
        "decorators": [],
        "name": "arryFn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 275,
          "end": 291,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 276,
            "end": 291,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 278,
              "end": 291,
              "typeName": {
                "type": "Identifier",
                "start": 278,
                "end": 283,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 283,
                "end": 291,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 284,
                    "end": 290
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 292,
        "end": 298,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 294,
          "end": 298
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 300,
      "end": 315,
      "expression": {
        "type": "CallExpression",
        "start": 300,
        "end": 314,
        "callee": {
          "type": "Identifier",
          "start": 300,
          "end": 307,
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 308,
            "end": 313,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 317,
      "end": 352,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 351,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 351,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 351,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 334,
                "end": 351,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 343,
                  "end": 351,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 343,
                    "end": 349
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 389,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 388,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 368,
              "end": 388,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 370,
                "end": 388,
                "typeName": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 378,
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 378,
                  "end": 388,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 379,
                      "end": 387,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 379,
                        "end": 385
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 390,
      "end": 429,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 404,
          "end": 428,
          "id": {
            "type": "Identifier",
            "start": 404,
            "end": 428,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 405,
              "end": 428,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 407,
                "end": 428,
                "typeName": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 420,
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 420,
                  "end": 428,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 421,
                      "end": 427
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 431,
      "end": 442,
      "expression": {
        "type": "CallExpression",
        "start": 431,
        "end": 441,
        "callee": {
          "type": "Identifier",
          "start": 431,
          "end": 438,
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 439,
            "end": 440,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 443,
      "end": 454,
      "expression": {
        "type": "CallExpression",
        "start": 443,
        "end": 453,
        "callee": {
          "type": "Identifier",
          "start": 443,
          "end": 450,
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 451,
            "end": 452,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 455,
      "end": 466,
      "expression": {
        "type": "CallExpression",
        "start": 455,
        "end": 465,
        "callee": {
          "type": "Identifier",
          "start": 455,
          "end": 462,
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 463,
            "end": 464,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 468,
      "end": 497,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 474,
          "end": 496,
          "id": {
            "type": "Identifier",
            "start": 474,
            "end": 490,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 490,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 478,
                "end": 490,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 487,
                  "end": 490,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 488,
                      "end": 489,
                      "literal": {
                        "type": "Literal",
                        "start": 488,
                        "end": 489,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 493,
            "end": 496,
            "elements": [
              {
                "type": "Literal",
                "start": 494,
                "end": 495,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 498,
      "end": 525,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 504,
          "end": 524,
          "id": {
            "type": "Identifier",
            "start": 504,
            "end": 519,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 506,
              "end": 519,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 508,
                "end": 519,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 517,
                  "end": 519,
                  "elementTypes": []
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 522,
            "end": 524,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 527,
      "end": 556,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 555,
          "id": {
            "type": "Identifier",
            "start": 533,
            "end": 549,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 535,
              "end": 549,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 537,
                "end": 549,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 546,
                  "end": 549,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 547,
                      "end": 548,
                      "literal": {
                        "type": "Literal",
                        "start": 547,
                        "end": 548,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 552,
            "end": 555,
            "elements": [
              {
                "type": "Literal",
                "start": 553,
                "end": 554,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 557,
      "end": 575,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 563,
          "end": 574,
          "id": {
            "type": "Identifier",
            "start": 563,
            "end": 569,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 565,
              "end": 569,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 567,
                "end": 569,
                "elementTypes": []
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 572,
            "end": 574,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 577,
      "end": 597,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 583,
          "end": 596,
          "id": {
            "type": "Identifier",
            "start": 583,
            "end": 590,
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 585,
              "end": 590,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 587,
                "end": 590,
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "start": 588,
                    "end": 589,
                    "literal": {
                      "type": "Literal",
                      "start": 588,
                      "end": 589,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 593,
            "end": 596,
            "elements": [
              {
                "type": "Literal",
                "start": 594,
                "end": 595,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 598,
      "end": 625,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 604,
          "end": 624,
          "id": {
            "type": "Identifier",
            "start": 604,
            "end": 619,
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 606,
              "end": 619,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 608,
                "end": 619,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 617,
                  "end": 619,
                  "elementTypes": []
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 622,
            "end": 624,
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 627,
      "end": 647,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 633,
          "end": 646,
          "id": {
            "type": "Identifier",
            "start": 633,
            "end": 640,
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 635,
              "end": 640,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 637,
                "end": 640,
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "start": 638,
                    "end": 639,
                    "literal": {
                      "type": "Literal",
                      "start": 638,
                      "end": 639,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 643,
            "end": 646,
            "elements": [
              {
                "type": "Literal",
                "start": 644,
                "end": 645,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 648,
      "end": 666,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 665,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 660,
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 656,
              "end": 660,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 658,
                "end": 660,
                "elementTypes": []
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 663,
            "end": 665,
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 668,
      "end": 702,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 674,
          "end": 701,
          "id": {
            "type": "Identifier",
            "start": 674,
            "end": 695,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 676,
              "end": 695,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 678,
                "end": 695,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 687,
                  "end": 695,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 687,
                    "end": 693
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 698,
            "end": 701,
            "elements": [
              {
                "type": "Literal",
                "start": 699,
                "end": 700,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 703,
      "end": 737,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 709,
          "end": 736,
          "id": {
            "type": "Identifier",
            "start": 709,
            "end": 731,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 711,
              "end": 731,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 713,
                "end": 731,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 722,
                  "end": 731,
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 722,
                    "end": 729
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 734,
            "end": 736,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 739,
      "end": 773,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 745,
          "end": 772,
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 766,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 747,
              "end": 766,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 749,
                "end": 766,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 758,
                  "end": 766,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 758,
                    "end": 764
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 769,
            "end": 772,
            "elements": [
              {
                "type": "Literal",
                "start": 770,
                "end": 771,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 774,
      "end": 799,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 780,
          "end": 798,
          "id": {
            "type": "Identifier",
            "start": 780,
            "end": 793,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 782,
              "end": 793,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 784,
                "end": 793,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 784,
                  "end": 791
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 796,
            "end": 798,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 801,
      "end": 826,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 807,
          "end": 825,
          "id": {
            "type": "Identifier",
            "start": 807,
            "end": 819,
            "decorators": [],
            "name": "a5",
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
                  "type": "TSNumberKeyword",
                  "start": 811,
                  "end": 817
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 822,
            "end": 825,
            "elements": [
              {
                "type": "Literal",
                "start": 823,
                "end": 824,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 827,
      "end": 862,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 833,
          "end": 861,
          "id": {
            "type": "Identifier",
            "start": 833,
            "end": 856,
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 835,
              "end": 856,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 837,
                "end": 856,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 846,
                  "end": 856,
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 846,
                    "end": 853
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 859,
            "end": 861,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 864,
      "end": 889,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 870,
          "end": 888,
          "id": {
            "type": "Identifier",
            "start": 870,
            "end": 882,
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 872,
              "end": 882,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 874,
                "end": 882,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 874,
                  "end": 880
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 885,
            "end": 888,
            "elements": [
              {
                "type": "Literal",
                "start": 886,
                "end": 887,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 890,
      "end": 915,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 896,
          "end": 914,
          "id": {
            "type": "Identifier",
            "start": 896,
            "end": 909,
            "decorators": [],
            "name": "a8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 898,
              "end": 909,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 900,
                "end": 909,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 900,
                  "end": 907
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 912,
            "end": 914,
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 917,
      "end": 947,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 923,
          "end": 946,
          "id": {
            "type": "Identifier",
            "start": 923,
            "end": 940,
            "decorators": [],
            "name": "ta1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 926,
              "end": 940,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 928,
                "end": 940,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 937,
                  "end": 940,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 938,
                      "end": 939,
                      "literal": {
                        "type": "Literal",
                        "start": 938,
                        "end": 939,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 943,
            "end": 946,
            "elements": [
              {
                "type": "Literal",
                "start": 944,
                "end": 945,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 948,
      "end": 984,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 954,
          "end": 983,
          "id": {
            "type": "Identifier",
            "start": 954,
            "end": 977,
            "decorators": [],
            "name": "ta2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 957,
              "end": 977,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 959,
                "end": 977,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 968,
                  "end": 977,
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 968,
                    "end": 975
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 980,
            "end": 983,
            "decorators": [],
            "name": "ta1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 986,
      "end": 1016,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 992,
          "end": 1015,
          "id": {
            "type": "Identifier",
            "start": 992,
            "end": 1009,
            "decorators": [],
            "name": "ta3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 995,
              "end": 1009,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 997,
                "end": 1009,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 1006,
                  "end": 1009,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 1007,
                      "end": 1008,
                      "literal": {
                        "type": "Literal",
                        "start": 1007,
                        "end": 1008,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1012,
            "end": 1015,
            "elements": [
              {
                "type": "Literal",
                "start": 1013,
                "end": 1014,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1017,
      "end": 1043,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1023,
          "end": 1042,
          "id": {
            "type": "Identifier",
            "start": 1023,
            "end": 1036,
            "decorators": [],
            "name": "ta4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1026,
              "end": 1036,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1028,
                "end": 1036,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1028,
                  "end": 1034
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1039,
            "end": 1042,
            "decorators": [],
            "name": "ta3",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1045,
      "end": 1066,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1051,
          "end": 1065,
          "id": {
            "type": "Identifier",
            "start": 1051,
            "end": 1059,
            "decorators": [],
            "name": "ta5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1054,
              "end": 1059,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1056,
                "end": 1059,
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "start": 1057,
                    "end": 1058,
                    "literal": {
                      "type": "Literal",
                      "start": 1057,
                      "end": 1058,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1062,
            "end": 1065,
            "elements": [
              {
                "type": "Literal",
                "start": 1063,
                "end": 1064,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1067,
      "end": 1103,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1073,
          "end": 1102,
          "id": {
            "type": "Identifier",
            "start": 1073,
            "end": 1096,
            "decorators": [],
            "name": "ta6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1076,
              "end": 1096,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 1078,
                "end": 1096,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1087,
                  "end": 1096,
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 1087,
                    "end": 1094
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1099,
            "end": 1102,
            "decorators": [],
            "name": "ta5",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1105,
      "end": 1126,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1111,
          "end": 1125,
          "id": {
            "type": "Identifier",
            "start": 1111,
            "end": 1119,
            "decorators": [],
            "name": "ta7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1114,
              "end": 1119,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1116,
                "end": 1119,
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "start": 1117,
                    "end": 1118,
                    "literal": {
                      "type": "Literal",
                      "start": 1117,
                      "end": 1118,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1122,
            "end": 1125,
            "elements": [
              {
                "type": "Literal",
                "start": 1123,
                "end": 1124,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1127,
      "end": 1154,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1133,
          "end": 1153,
          "id": {
            "type": "Identifier",
            "start": 1133,
            "end": 1147,
            "decorators": [],
            "name": "ta8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1136,
              "end": 1147,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1138,
                "end": 1147,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 1138,
                  "end": 1145
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1150,
            "end": 1153,
            "decorators": [],
            "name": "ta7",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1156,
      "end": 1191,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1162,
          "end": 1190,
          "id": {
            "type": "Identifier",
            "start": 1162,
            "end": 1184,
            "decorators": [],
            "name": "at1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1165,
              "end": 1184,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 1167,
                "end": 1184,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1176,
                  "end": 1184,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 1176,
                    "end": 1182
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1187,
            "end": 1190,
            "elements": [
              {
                "type": "Literal",
                "start": 1188,
                "end": 1189,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1192,
      "end": 1222,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1198,
          "end": 1221,
          "id": {
            "type": "Identifier",
            "start": 1198,
            "end": 1215,
            "decorators": [],
            "name": "at2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1201,
              "end": 1215,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 1203,
                "end": 1215,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 1212,
                  "end": 1215,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 1213,
                      "end": 1214,
                      "literal": {
                        "type": "Literal",
                        "start": 1213,
                        "end": 1214,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1218,
            "end": 1221,
            "decorators": [],
            "name": "at1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1224,
      "end": 1259,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1230,
          "end": 1258,
          "id": {
            "type": "Identifier",
            "start": 1230,
            "end": 1252,
            "decorators": [],
            "name": "at3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1233,
              "end": 1252,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 1235,
                "end": 1252,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1244,
                  "end": 1252,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 1244,
                    "end": 1250
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1255,
            "end": 1258,
            "elements": [
              {
                "type": "Literal",
                "start": 1256,
                "end": 1257,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1260,
      "end": 1281,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1266,
          "end": 1280,
          "id": {
            "type": "Identifier",
            "start": 1266,
            "end": 1274,
            "decorators": [],
            "name": "at4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1269,
              "end": 1274,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1271,
                "end": 1274,
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "start": 1272,
                    "end": 1273,
                    "literal": {
                      "type": "Literal",
                      "start": 1272,
                      "end": 1273,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1277,
            "end": 1280,
            "decorators": [],
            "name": "at3",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1283,
      "end": 1309,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1289,
          "end": 1308,
          "id": {
            "type": "Identifier",
            "start": 1289,
            "end": 1302,
            "decorators": [],
            "name": "at5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1292,
              "end": 1302,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1294,
                "end": 1302,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1294,
                  "end": 1300
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1305,
            "end": 1308,
            "elements": [
              {
                "type": "Literal",
                "start": 1306,
                "end": 1307,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1310,
      "end": 1340,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1316,
          "end": 1339,
          "id": {
            "type": "Identifier",
            "start": 1316,
            "end": 1333,
            "decorators": [],
            "name": "at6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1319,
              "end": 1333,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 1321,
                "end": 1333,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 1330,
                  "end": 1333,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 1331,
                      "end": 1332,
                      "literal": {
                        "type": "Literal",
                        "start": 1331,
                        "end": 1332,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1336,
            "end": 1339,
            "decorators": [],
            "name": "at5",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1342,
      "end": 1368,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1348,
          "end": 1367,
          "id": {
            "type": "Identifier",
            "start": 1348,
            "end": 1361,
            "decorators": [],
            "name": "at7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1351,
              "end": 1361,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1353,
                "end": 1361,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1353,
                  "end": 1359
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1364,
            "end": 1367,
            "elements": [
              {
                "type": "Literal",
                "start": 1365,
                "end": 1366,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1369,
      "end": 1390,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1375,
          "end": 1389,
          "id": {
            "type": "Identifier",
            "start": 1375,
            "end": 1383,
            "decorators": [],
            "name": "at8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1378,
              "end": 1383,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1380,
                "end": 1383,
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "start": 1381,
                    "end": 1382,
                    "literal": {
                      "type": "Literal",
                      "start": 1381,
                      "end": 1382,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1386,
            "end": 1389,
            "decorators": [],
            "name": "at7",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
