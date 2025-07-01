__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 43
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 47,
                  "end": 48
                },
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 50,
                  "end": 51
                }
              ],
              "start": 46,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 61
              },
              "typeArguments": null,
              "start": 56,
              "end": 61
            },
            "start": 46,
            "end": 61
          },
          "definite": false,
          "start": 38,
          "end": 61
        }
      ],
      "declare": false,
      "start": 34,
      "end": 62
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "distanceFromOrigin",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 91
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 94
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 100,
              "end": 116
            },
            "start": 98,
            "end": 116
          },
          "start": 92,
          "end": 116
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 135
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sqrt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 140
                },
                "optional": false,
                "computed": false,
                "start": 131,
                "end": 140
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 146,
                      "end": 147
                    },
                    "start": 141,
                    "end": 147
                  },
                  "operator": "+",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 151
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 155,
                      "end": 156
                    },
                    "start": 150,
                    "end": 156
                  },
                  "start": 141,
                  "end": 156
                }
              ],
              "optional": false,
              "start": 131,
              "end": 157
            },
            "start": 124,
            "end": 158
          }
        ],
        "start": 118,
        "end": 160
      },
      "expression": false,
      "start": 64,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distanceFromOrigin",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 180
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 186
          }
        ],
        "optional": false,
        "start": 162,
        "end": 187
      },
      "directive": null,
      "start": 162,
      "end": 188
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arryFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 213
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 217,
                "end": 223
              },
              "start": 217,
              "end": 225
            },
            "start": 215,
            "end": 225
          },
          "start": 214,
          "end": 225
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 228,
          "end": 232
        },
        "start": 226,
        "end": 232
      },
      "body": null,
      "expression": false,
      "start": 190,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 240
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 246
          }
        ],
        "optional": false,
        "start": 234,
        "end": 247
      },
      "directive": null,
      "start": 234,
      "end": 248
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arryFn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 274
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 283
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 284,
                    "end": 290
                  }
                ],
                "start": 283,
                "end": 291
              },
              "start": 278,
              "end": 291
            },
            "start": 276,
            "end": 291
          },
          "start": 275,
          "end": 291
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 294,
          "end": 298
        },
        "start": 292,
        "end": 298
      },
      "body": null,
      "expression": false,
      "start": 250,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 307
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 313
          }
        ],
        "optional": false,
        "start": 300,
        "end": 314
      },
      "directive": null,
      "start": 300,
      "end": 315
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 343,
                    "end": 349
                  },
                  "start": 343,
                  "end": 351
                },
                "start": 334,
                "end": 351
              },
              "start": 332,
              "end": 351
            },
            "start": 331,
            "end": 351
          },
          "init": null,
          "definite": false,
          "start": 331,
          "end": 351
        }
      ],
      "declare": true,
      "start": 317,
      "end": 352
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 378
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 379,
                        "end": 385
                      },
                      "start": 379,
                      "end": 387
                    }
                  ],
                  "start": 378,
                  "end": 388
                },
                "start": 370,
                "end": 388
              },
              "start": 368,
              "end": 388
            },
            "start": 367,
            "end": 388
          },
          "init": null,
          "definite": false,
          "start": 367,
          "end": 388
        }
      ],
      "declare": true,
      "start": 353,
      "end": 389
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 420
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 421,
                      "end": 427
                    }
                  ],
                  "start": 420,
                  "end": 428
                },
                "start": 407,
                "end": 428
              },
              "start": 405,
              "end": 428
            },
            "start": 404,
            "end": 428
          },
          "init": null,
          "definite": false,
          "start": 404,
          "end": 428
        }
      ],
      "declare": true,
      "start": 390,
      "end": 429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 438
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 440
          }
        ],
        "optional": false,
        "start": 431,
        "end": 441
      },
      "directive": null,
      "start": 431,
      "end": 442
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 443,
          "end": 450
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 452
          }
        ],
        "optional": false,
        "start": 443,
        "end": 453
      },
      "directive": null,
      "start": 443,
      "end": 454
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "arryFn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 455,
          "end": 462
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 464
          }
        ],
        "optional": false,
        "start": 455,
        "end": 465
      },
      "directive": null,
      "start": 455,
      "end": 466
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 488,
                        "end": 489
                      },
                      "start": 488,
                      "end": 489
                    }
                  ],
                  "start": 487,
                  "end": 490
                },
                "start": 478,
                "end": 490
              },
              "start": 476,
              "end": 490
            },
            "start": 474,
            "end": 490
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 494,
                "end": 495
              }
            ],
            "start": 493,
            "end": 496
          },
          "definite": false,
          "start": 474,
          "end": 496
        }
      ],
      "declare": false,
      "start": 468,
      "end": 497
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "start": 517,
                  "end": 519
                },
                "start": 508,
                "end": 519
              },
              "start": 506,
              "end": 519
            },
            "start": 504,
            "end": 519
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 524
          },
          "definite": false,
          "start": 504,
          "end": 524
        }
      ],
      "declare": false,
      "start": 498,
      "end": 525
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 547,
                        "end": 548
                      },
                      "start": 547,
                      "end": 548
                    }
                  ],
                  "start": 546,
                  "end": 549
                },
                "start": 537,
                "end": 549
              },
              "start": 535,
              "end": 549
            },
            "start": 533,
            "end": 549
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 553,
                "end": 554
              }
            ],
            "start": 552,
            "end": 555
          },
          "definite": false,
          "start": 533,
          "end": 555
        }
      ],
      "declare": false,
      "start": 527,
      "end": 556
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 567,
                "end": 569
              },
              "start": 565,
              "end": 569
            },
            "start": 563,
            "end": 569
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 574
          },
          "definite": false,
          "start": 563,
          "end": 574
        }
      ],
      "declare": false,
      "start": 557,
      "end": 575
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 588,
                      "end": 589
                    },
                    "start": 588,
                    "end": 589
                  }
                ],
                "start": 587,
                "end": 590
              },
              "start": 585,
              "end": 590
            },
            "start": 583,
            "end": 590
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 594,
                "end": 595
              }
            ],
            "start": 593,
            "end": 596
          },
          "definite": false,
          "start": 583,
          "end": 596
        }
      ],
      "declare": false,
      "start": 577,
      "end": 597
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "start": 617,
                  "end": 619
                },
                "start": 608,
                "end": 619
              },
              "start": 606,
              "end": 619
            },
            "start": 604,
            "end": 619
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 622,
            "end": 624
          },
          "definite": false,
          "start": 604,
          "end": 624
        }
      ],
      "declare": false,
      "start": 598,
      "end": 625
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 638,
                      "end": 639
                    },
                    "start": 638,
                    "end": 639
                  }
                ],
                "start": 637,
                "end": 640
              },
              "start": 635,
              "end": 640
            },
            "start": 633,
            "end": 640
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 644,
                "end": 645
              }
            ],
            "start": 643,
            "end": 646
          },
          "definite": false,
          "start": 633,
          "end": 646
        }
      ],
      "declare": false,
      "start": 627,
      "end": 647
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 658,
                "end": 660
              },
              "start": 656,
              "end": 660
            },
            "start": 654,
            "end": 660
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 665
          },
          "definite": false,
          "start": 654,
          "end": 665
        }
      ],
      "declare": false,
      "start": 648,
      "end": 666
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 687,
                    "end": 693
                  },
                  "start": 687,
                  "end": 695
                },
                "start": 678,
                "end": 695
              },
              "start": 676,
              "end": 695
            },
            "start": 674,
            "end": 695
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 699,
                "end": 700
              }
            ],
            "start": 698,
            "end": 701
          },
          "definite": false,
          "start": 674,
          "end": 701
        }
      ],
      "declare": false,
      "start": 668,
      "end": 702
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 722,
                    "end": 729
                  },
                  "start": 722,
                  "end": 731
                },
                "start": 713,
                "end": 731
              },
              "start": 711,
              "end": 731
            },
            "start": 709,
            "end": 731
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 736
          },
          "definite": false,
          "start": 709,
          "end": 736
        }
      ],
      "declare": false,
      "start": 703,
      "end": 737
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 758,
                    "end": 764
                  },
                  "start": 758,
                  "end": 766
                },
                "start": 749,
                "end": 766
              },
              "start": 747,
              "end": 766
            },
            "start": 745,
            "end": 766
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 770,
                "end": 771
              }
            ],
            "start": 769,
            "end": 772
          },
          "definite": false,
          "start": 745,
          "end": 772
        }
      ],
      "declare": false,
      "start": 739,
      "end": 773
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 784,
                  "end": 791
                },
                "start": 784,
                "end": 793
              },
              "start": 782,
              "end": 793
            },
            "start": 780,
            "end": 793
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 796,
            "end": 798
          },
          "definite": false,
          "start": 780,
          "end": 798
        }
      ],
      "declare": false,
      "start": 774,
      "end": 799
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 811,
                  "end": 817
                },
                "start": 811,
                "end": 819
              },
              "start": 809,
              "end": 819
            },
            "start": 807,
            "end": 819
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 823,
                "end": 824
              }
            ],
            "start": 822,
            "end": 825
          },
          "definite": false,
          "start": 807,
          "end": 825
        }
      ],
      "declare": false,
      "start": 801,
      "end": 826
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 846,
                    "end": 853
                  },
                  "start": 846,
                  "end": 856
                },
                "start": 837,
                "end": 856
              },
              "start": 835,
              "end": 856
            },
            "start": 833,
            "end": 856
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 859,
            "end": 861
          },
          "definite": false,
          "start": 833,
          "end": 861
        }
      ],
      "declare": false,
      "start": 827,
      "end": 862
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 874,
                  "end": 880
                },
                "start": 874,
                "end": 882
              },
              "start": 872,
              "end": 882
            },
            "start": 870,
            "end": 882
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 886,
                "end": 887
              }
            ],
            "start": 885,
            "end": 888
          },
          "definite": false,
          "start": 870,
          "end": 888
        }
      ],
      "declare": false,
      "start": 864,
      "end": 889
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 900,
                  "end": 907
                },
                "start": 900,
                "end": 909
              },
              "start": 898,
              "end": 909
            },
            "start": 896,
            "end": 909
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 912,
            "end": 914
          },
          "definite": false,
          "start": 896,
          "end": 914
        }
      ],
      "declare": false,
      "start": 890,
      "end": 915
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 938,
                        "end": 939
                      },
                      "start": 938,
                      "end": 939
                    }
                  ],
                  "start": 937,
                  "end": 940
                },
                "start": 928,
                "end": 940
              },
              "start": 926,
              "end": 940
            },
            "start": 923,
            "end": 940
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 944,
                "end": 945
              }
            ],
            "start": 943,
            "end": 946
          },
          "definite": false,
          "start": 923,
          "end": 946
        }
      ],
      "declare": false,
      "start": 917,
      "end": 947
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 968,
                    "end": 975
                  },
                  "start": 968,
                  "end": 977
                },
                "start": 959,
                "end": 977
              },
              "start": 957,
              "end": 977
            },
            "start": 954,
            "end": 977
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta1",
            "optional": false,
            "typeAnnotation": null,
            "start": 980,
            "end": 983
          },
          "definite": false,
          "start": 954,
          "end": 983
        }
      ],
      "declare": false,
      "start": 948,
      "end": 984
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1007,
                        "end": 1008
                      },
                      "start": 1007,
                      "end": 1008
                    }
                  ],
                  "start": 1006,
                  "end": 1009
                },
                "start": 997,
                "end": 1009
              },
              "start": 995,
              "end": 1009
            },
            "start": 992,
            "end": 1009
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1013,
                "end": 1014
              }
            ],
            "start": 1012,
            "end": 1015
          },
          "definite": false,
          "start": 992,
          "end": 1015
        }
      ],
      "declare": false,
      "start": 986,
      "end": 1016
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1028,
                  "end": 1034
                },
                "start": 1028,
                "end": 1036
              },
              "start": 1026,
              "end": 1036
            },
            "start": 1023,
            "end": 1036
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1039,
            "end": 1042
          },
          "definite": false,
          "start": 1023,
          "end": 1042
        }
      ],
      "declare": false,
      "start": 1017,
      "end": 1043
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1057,
                      "end": 1058
                    },
                    "start": 1057,
                    "end": 1058
                  }
                ],
                "start": 1056,
                "end": 1059
              },
              "start": 1054,
              "end": 1059
            },
            "start": 1051,
            "end": 1059
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1063,
                "end": 1064
              }
            ],
            "start": 1062,
            "end": 1065
          },
          "definite": false,
          "start": 1051,
          "end": 1065
        }
      ],
      "declare": false,
      "start": 1045,
      "end": 1066
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 1087,
                    "end": 1094
                  },
                  "start": 1087,
                  "end": 1096
                },
                "start": 1078,
                "end": 1096
              },
              "start": 1076,
              "end": 1096
            },
            "start": 1073,
            "end": 1096
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1099,
            "end": 1102
          },
          "definite": false,
          "start": 1073,
          "end": 1102
        }
      ],
      "declare": false,
      "start": 1067,
      "end": 1103
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1117,
                      "end": 1118
                    },
                    "start": 1117,
                    "end": 1118
                  }
                ],
                "start": 1116,
                "end": 1119
              },
              "start": 1114,
              "end": 1119
            },
            "start": 1111,
            "end": 1119
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1123,
                "end": 1124
              }
            ],
            "start": 1122,
            "end": 1125
          },
          "definite": false,
          "start": 1111,
          "end": 1125
        }
      ],
      "declare": false,
      "start": 1105,
      "end": 1126
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 1138,
                  "end": 1145
                },
                "start": 1138,
                "end": 1147
              },
              "start": 1136,
              "end": 1147
            },
            "start": 1133,
            "end": 1147
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ta7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1150,
            "end": 1153
          },
          "definite": false,
          "start": 1133,
          "end": 1153
        }
      ],
      "declare": false,
      "start": 1127,
      "end": 1154
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "at1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 1176,
                    "end": 1182
                  },
                  "start": 1176,
                  "end": 1184
                },
                "start": 1167,
                "end": 1184
              },
              "start": 1165,
              "end": 1184
            },
            "start": 1162,
            "end": 1184
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1188,
                "end": 1189
              }
            ],
            "start": 1187,
            "end": 1190
          },
          "definite": false,
          "start": 1162,
          "end": 1190
        }
      ],
      "declare": false,
      "start": 1156,
      "end": 1191
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "at2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1213,
                        "end": 1214
                      },
                      "start": 1213,
                      "end": 1214
                    }
                  ],
                  "start": 1212,
                  "end": 1215
                },
                "start": 1203,
                "end": 1215
              },
              "start": 1201,
              "end": 1215
            },
            "start": 1198,
            "end": 1215
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1218,
            "end": 1221
          },
          "definite": false,
          "start": 1198,
          "end": 1221
        }
      ],
      "declare": false,
      "start": 1192,
      "end": 1222
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "at3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 1244,
                    "end": 1250
                  },
                  "start": 1244,
                  "end": 1252
                },
                "start": 1235,
                "end": 1252
              },
              "start": 1233,
              "end": 1252
            },
            "start": 1230,
            "end": 1252
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1256,
                "end": 1257
              }
            ],
            "start": 1255,
            "end": 1258
          },
          "definite": false,
          "start": 1230,
          "end": 1258
        }
      ],
      "declare": false,
      "start": 1224,
      "end": 1259
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "at4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1272,
                      "end": 1273
                    },
                    "start": 1272,
                    "end": 1273
                  }
                ],
                "start": 1271,
                "end": 1274
              },
              "start": 1269,
              "end": 1274
            },
            "start": 1266,
            "end": 1274
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1277,
            "end": 1280
          },
          "definite": false,
          "start": 1266,
          "end": 1280
        }
      ],
      "declare": false,
      "start": 1260,
      "end": 1281
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "at5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1294,
                  "end": 1300
                },
                "start": 1294,
                "end": 1302
              },
              "start": 1292,
              "end": 1302
            },
            "start": 1289,
            "end": 1302
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1306,
                "end": 1307
              }
            ],
            "start": 1305,
            "end": 1308
          },
          "definite": false,
          "start": 1289,
          "end": 1308
        }
      ],
      "declare": false,
      "start": 1283,
      "end": 1309
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "at6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1331,
                        "end": 1332
                      },
                      "start": 1331,
                      "end": 1332
                    }
                  ],
                  "start": 1330,
                  "end": 1333
                },
                "start": 1321,
                "end": 1333
              },
              "start": 1319,
              "end": 1333
            },
            "start": 1316,
            "end": 1333
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1336,
            "end": 1339
          },
          "definite": false,
          "start": 1316,
          "end": 1339
        }
      ],
      "declare": false,
      "start": 1310,
      "end": 1340
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "at7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1353,
                  "end": 1359
                },
                "start": 1353,
                "end": 1361
              },
              "start": 1351,
              "end": 1361
            },
            "start": 1348,
            "end": 1361
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1365,
                "end": 1366
              }
            ],
            "start": 1364,
            "end": 1367
          },
          "definite": false,
          "start": 1348,
          "end": 1367
        }
      ],
      "declare": false,
      "start": 1342,
      "end": 1368
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "at8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1381,
                      "end": 1382
                    },
                    "start": 1381,
                    "end": 1382
                  }
                ],
                "start": 1380,
                "end": 1383
              },
              "start": 1378,
              "end": 1383
            },
            "start": 1375,
            "end": 1383
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "at7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1386,
            "end": 1389
          },
          "definite": false,
          "start": 1375,
          "end": 1389
        }
      ],
      "declare": false,
      "start": 1369,
      "end": 1390
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 1390
}
```
