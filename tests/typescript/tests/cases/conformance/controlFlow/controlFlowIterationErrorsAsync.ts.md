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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              },
              "start": 8,
              "end": 17
            },
            "start": 4,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "len",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 38
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            },
            "start": 40,
            "end": 48
          },
          "start": 39,
          "end": 48
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 64
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 71
              },
              "optional": false,
              "computed": false,
              "start": 63,
              "end": 71
            },
            "start": 56,
            "end": 72
          }
        ],
        "start": 50,
        "end": 74
      },
      "expression": false,
      "start": 20,
      "end": 74
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 93
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 109,
                          "end": 115
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 118,
                          "end": 124
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 127,
                          "end": 134
                        }
                      ],
                      "start": 109,
                      "end": 134
                    },
                    "start": 107,
                    "end": 134
                  },
                  "start": 106,
                  "end": 134
                },
                "init": null,
                "definite": false,
                "start": 106,
                "end": 134
              }
            ],
            "declare": false,
            "start": 102,
            "end": 135
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 141
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 144,
                "end": 146
              },
              "start": 140,
              "end": 146
            },
            "directive": null,
            "start": 140,
            "end": 147
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 163
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 176
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "len",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 188
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 189,
                            "end": 190
                          }
                        ],
                        "optional": false,
                        "start": 185,
                        "end": 191
                      },
                      "start": 179,
                      "end": 191
                    },
                    "start": 175,
                    "end": 191
                  },
                  "directive": null,
                  "start": 175,
                  "end": 192
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 202
                  },
                  "directive": null,
                  "start": 201,
                  "end": 203
                }
              ],
              "start": 165,
              "end": 209
            },
            "start": 152,
            "end": 209
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
            "directive": null,
            "start": 214,
            "end": 216
          }
        ],
        "start": 96,
        "end": 218
      },
      "expression": false,
      "start": 76,
      "end": 218
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 237
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 253,
                          "end": 259
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 262,
                          "end": 268
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 271,
                          "end": 278
                        }
                      ],
                      "start": 253,
                      "end": 278
                    },
                    "start": 251,
                    "end": 278
                  },
                  "start": 250,
                  "end": 278
                },
                "init": null,
                "definite": false,
                "start": 250,
                "end": 278
              }
            ],
            "declare": false,
            "start": 246,
            "end": 279
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 285
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 288,
                "end": 290
              },
              "start": 284,
              "end": 290
            },
            "directive": null,
            "start": 284,
            "end": 291
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 307
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 320
                  },
                  "directive": null,
                  "start": 319,
                  "end": 321
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 330,
                      "end": 331
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "len",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 340,
                          "end": 343
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 344,
                            "end": 345
                          }
                        ],
                        "optional": false,
                        "start": 340,
                        "end": 346
                      },
                      "start": 334,
                      "end": 346
                    },
                    "start": 330,
                    "end": 346
                  },
                  "directive": null,
                  "start": 330,
                  "end": 347
                }
              ],
              "start": 309,
              "end": 353
            },
            "start": 296,
            "end": 353
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 359
            },
            "directive": null,
            "start": 358,
            "end": 360
          }
        ],
        "start": 240,
        "end": 362
      },
      "expression": false,
      "start": 220,
      "end": 362
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 384
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
              "type": "TSStringKeyword",
              "start": 388,
              "end": 394
            },
            "start": 386,
            "end": 394
          },
          "start": 385,
          "end": 394
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 404
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 405,
                "end": 411
              }
            ],
            "start": 404,
            "end": 412
          },
          "start": 397,
          "end": 412
        },
        "start": 395,
        "end": 412
      },
      "body": null,
      "expression": false,
      "start": 364,
      "end": 413
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 434
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
              "type": "TSNumberKeyword",
              "start": 438,
              "end": 444
            },
            "start": 436,
            "end": 444
          },
          "start": 435,
          "end": 444
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 447,
            "end": 454
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 455,
                "end": 461
              }
            ],
            "start": 454,
            "end": 462
          },
          "start": 447,
          "end": 462
        },
        "start": 445,
        "end": 462
      },
      "body": null,
      "expression": false,
      "start": 414,
      "end": 463
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 480,
        "end": 482
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 498,
                          "end": 504
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 507,
                          "end": 513
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 516,
                          "end": 523
                        }
                      ],
                      "start": 498,
                      "end": 523
                    },
                    "start": 496,
                    "end": 523
                  },
                  "start": 495,
                  "end": 523
                },
                "init": null,
                "definite": false,
                "start": 495,
                "end": 523
              }
            ],
            "declare": false,
            "start": 491,
            "end": 524
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 530
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 533,
                "end": 535
              },
              "start": 529,
              "end": 535
            },
            "directive": null,
            "start": 529,
            "end": 536
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 552
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 564,
                      "end": 565
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 577
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 578,
                            "end": 579
                          }
                        ],
                        "optional": false,
                        "start": 574,
                        "end": 580
                      },
                      "start": 568,
                      "end": 580
                    },
                    "start": 564,
                    "end": 580
                  },
                  "directive": null,
                  "start": 564,
                  "end": 581
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 590,
                    "end": 591
                  },
                  "directive": null,
                  "start": 590,
                  "end": 592
                }
              ],
              "start": 554,
              "end": 598
            },
            "start": 541,
            "end": 598
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 604
            },
            "directive": null,
            "start": 603,
            "end": 605
          }
        ],
        "start": 485,
        "end": 607
      },
      "expression": false,
      "start": 465,
      "end": 607
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 624,
        "end": 626
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 642,
                          "end": 648
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 651,
                          "end": 657
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 660,
                          "end": 667
                        }
                      ],
                      "start": 642,
                      "end": 667
                    },
                    "start": 640,
                    "end": 667
                  },
                  "start": 639,
                  "end": 667
                },
                "init": null,
                "definite": false,
                "start": 639,
                "end": 667
              }
            ],
            "declare": false,
            "start": 635,
            "end": 668
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 673,
                "end": 674
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 677,
                "end": 679
              },
              "start": 673,
              "end": 679
            },
            "directive": null,
            "start": 673,
            "end": 680
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 696
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 708,
                    "end": 709
                  },
                  "directive": null,
                  "start": 708,
                  "end": 710
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 720
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 729,
                          "end": 732
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 733,
                            "end": 734
                          }
                        ],
                        "optional": false,
                        "start": 729,
                        "end": 735
                      },
                      "start": 723,
                      "end": 735
                    },
                    "start": 719,
                    "end": 735
                  },
                  "directive": null,
                  "start": 719,
                  "end": 736
                }
              ],
              "start": 698,
              "end": 742
            },
            "start": 685,
            "end": 742
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 748
            },
            "directive": null,
            "start": 747,
            "end": 749
          }
        ],
        "start": 629,
        "end": 751
      },
      "expression": false,
      "start": 609,
      "end": 751
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 768,
        "end": 776
      },
      "generator": false,
      "async": true,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 780,
                  "end": 786
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 789,
                  "end": 795
                }
              ],
              "start": 780,
              "end": 795
            },
            "start": 778,
            "end": 795
          },
          "start": 777,
          "end": 795
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 798,
            "end": 805
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 806,
                "end": 812
              }
            ],
            "start": 805,
            "end": 813
          },
          "start": 798,
          "end": 813
        },
        "start": 796,
        "end": 813
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 829
              },
              "prefix": true,
              "start": 827,
              "end": 829
            },
            "start": 820,
            "end": 830
          }
        ],
        "start": 814,
        "end": 832
      },
      "expression": false,
      "start": 753,
      "end": 832
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h1",
        "optional": false,
        "typeAnnotation": null,
        "start": 849,
        "end": 851
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 867,
                          "end": 873
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 876,
                          "end": 882
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 885,
                          "end": 892
                        }
                      ],
                      "start": 867,
                      "end": 892
                    },
                    "start": 865,
                    "end": 892
                  },
                  "start": 864,
                  "end": 892
                },
                "init": null,
                "definite": false,
                "start": 864,
                "end": 892
              }
            ],
            "declare": false,
            "start": 860,
            "end": 893
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 898,
                "end": 899
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 902,
                "end": 905
              },
              "start": 898,
              "end": 905
            },
            "directive": null,
            "start": 898,
            "end": 906
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 922
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 934,
                      "end": 935
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 939,
                          "end": 940
                        },
                        "prefix": true,
                        "start": 938,
                        "end": 940
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 943,
                        "end": 944
                      },
                      "start": 938,
                      "end": 944
                    },
                    "start": 934,
                    "end": 944
                  },
                  "directive": null,
                  "start": 934,
                  "end": 945
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 954,
                    "end": 955
                  },
                  "directive": null,
                  "start": 954,
                  "end": 956
                }
              ],
              "start": 924,
              "end": 962
            },
            "start": 911,
            "end": 962
          }
        ],
        "start": 854,
        "end": 964
      },
      "expression": false,
      "start": 834,
      "end": 964
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h2",
        "optional": false,
        "typeAnnotation": null,
        "start": 981,
        "end": 983
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 999,
                          "end": 1005
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1008,
                          "end": 1014
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1017,
                          "end": 1024
                        }
                      ],
                      "start": 999,
                      "end": 1024
                    },
                    "start": 997,
                    "end": 1024
                  },
                  "start": 996,
                  "end": 1024
                },
                "init": null,
                "definite": false,
                "start": 996,
                "end": 1024
              }
            ],
            "declare": false,
            "start": 992,
            "end": 1025
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1030,
                "end": 1031
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1034,
                "end": 1037
              },
              "start": 1030,
              "end": 1037
            },
            "directive": null,
            "start": 1030,
            "end": 1038
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1054
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1066,
                      "end": 1067
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1076,
                            "end": 1084
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1085,
                              "end": 1086
                            }
                          ],
                          "optional": false,
                          "start": 1076,
                          "end": 1087
                        },
                        "start": 1070,
                        "end": 1087
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1090,
                        "end": 1091
                      },
                      "start": 1070,
                      "end": 1091
                    },
                    "start": 1066,
                    "end": 1091
                  },
                  "directive": null,
                  "start": 1066,
                  "end": 1092
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1101,
                    "end": 1102
                  },
                  "directive": null,
                  "start": 1101,
                  "end": 1103
                }
              ],
              "start": 1056,
              "end": 1109
            },
            "start": 1043,
            "end": 1109
          }
        ],
        "start": 986,
        "end": 1111
      },
      "expression": false,
      "start": 966,
      "end": 1111
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1130
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1146,
                          "end": 1152
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1155,
                          "end": 1161
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1164,
                          "end": 1171
                        }
                      ],
                      "start": 1146,
                      "end": 1171
                    },
                    "start": 1144,
                    "end": 1171
                  },
                  "start": 1143,
                  "end": 1171
                },
                "init": null,
                "definite": false,
                "start": 1143,
                "end": 1171
              }
            ],
            "declare": false,
            "start": 1139,
            "end": 1172
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1177,
                "end": 1178
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1181,
                "end": 1184
              },
              "start": 1177,
              "end": 1184
            },
            "directive": null,
            "start": 1177,
            "end": 1185
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1197,
              "end": 1201
            },
            "body": {
              "type": "BlockStatement",
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1217,
                        "end": 1218
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1227,
                            "end": 1235
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1236,
                              "end": 1237
                            }
                          ],
                          "optional": false,
                          "start": 1227,
                          "end": 1238
                        },
                        "start": 1221,
                        "end": 1238
                      },
                      "definite": false,
                      "start": 1217,
                      "end": 1238
                    }
                  ],
                  "declare": false,
                  "start": 1213,
                  "end": 1239
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1248,
                      "end": 1249
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1252,
                        "end": 1253
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1256,
                        "end": 1257
                      },
                      "start": 1252,
                      "end": 1257
                    },
                    "start": 1248,
                    "end": 1257
                  },
                  "directive": null,
                  "start": 1248,
                  "end": 1258
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1267,
                    "end": 1268
                  },
                  "directive": null,
                  "start": 1267,
                  "end": 1269
                }
              ],
              "start": 1203,
              "end": 1275
            },
            "start": 1190,
            "end": 1275
          }
        ],
        "start": 1133,
        "end": 1277
      },
      "expression": false,
      "start": 1113,
      "end": 1277
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1296
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1312,
                          "end": 1318
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1321,
                          "end": 1327
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1330,
                          "end": 1337
                        }
                      ],
                      "start": 1312,
                      "end": 1337
                    },
                    "start": 1310,
                    "end": 1337
                  },
                  "start": 1309,
                  "end": 1337
                },
                "init": null,
                "definite": false,
                "start": 1309,
                "end": 1337
              }
            ],
            "declare": false,
            "start": 1305,
            "end": 1338
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1343,
                "end": 1344
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1347,
                "end": 1350
              },
              "start": 1343,
              "end": 1350
            },
            "directive": null,
            "start": 1343,
            "end": 1351
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1367
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1379,
                    "end": 1380
                  },
                  "directive": null,
                  "start": 1379,
                  "end": 1381
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1394,
                        "end": 1395
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1404,
                            "end": 1412
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1413,
                              "end": 1414
                            }
                          ],
                          "optional": false,
                          "start": 1404,
                          "end": 1415
                        },
                        "start": 1398,
                        "end": 1415
                      },
                      "definite": false,
                      "start": 1394,
                      "end": 1415
                    }
                  ],
                  "declare": false,
                  "start": 1390,
                  "end": 1416
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1425,
                      "end": 1426
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1429,
                        "end": 1430
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1433,
                        "end": 1434
                      },
                      "start": 1429,
                      "end": 1434
                    },
                    "start": 1425,
                    "end": 1434
                  },
                  "directive": null,
                  "start": 1425,
                  "end": 1435
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1444,
                    "end": 1445
                  },
                  "directive": null,
                  "start": 1444,
                  "end": 1446
                }
              ],
              "start": 1369,
              "end": 1452
            },
            "start": 1356,
            "end": 1452
          }
        ],
        "start": 1299,
        "end": 1454
      },
      "expression": false,
      "start": 1279,
      "end": 1454
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "get_things",
        "optional": false,
        "typeAnnotation": null,
        "start": 1488,
        "end": 1498
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1502,
                  "end": 1508
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1511,
                  "end": 1520
                }
              ],
              "start": 1502,
              "end": 1520
            },
            "start": 1500,
            "end": 1520
          },
          "start": 1499,
          "end": 1520
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1536,
                  "end": 1537
                }
              ],
              "start": 1535,
              "end": 1538
            },
            "start": 1528,
            "end": 1539
          }
        ],
        "start": 1522,
        "end": 1541
      },
      "expression": false,
      "start": 1473,
      "end": 1541
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foobar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1558,
        "end": 1564
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "before",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1585,
                          "end": 1591
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1594,
                          "end": 1603
                        }
                      ],
                      "start": 1585,
                      "end": 1603
                    },
                    "start": 1583,
                    "end": 1603
                  },
                  "start": 1577,
                  "end": 1603
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1606,
                  "end": 1615
                },
                "definite": false,
                "start": 1577,
                "end": 1615
              }
            ],
            "declare": false,
            "start": 1573,
            "end": 1616
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1630,
                    "end": 1631
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1634,
                    "end": 1635
                  },
                  "definite": false,
                  "start": 1630,
                  "end": 1635
                }
              ],
              "declare": false,
              "start": 1626,
              "end": 1635
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1637,
                "end": 1638
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1641,
                "end": 1642
              },
              "start": 1637,
              "end": 1642
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1644,
                "end": 1645
              },
              "start": 1644,
              "end": 1647
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "results",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1665,
                        "end": 1672
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "get_things",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1681,
                            "end": 1691
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "before",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1692,
                              "end": 1698
                            }
                          ],
                          "optional": false,
                          "start": 1681,
                          "end": 1699
                        },
                        "start": 1675,
                        "end": 1699
                      },
                      "definite": false,
                      "start": 1665,
                      "end": 1699
                    }
                  ],
                  "declare": false,
                  "start": 1659,
                  "end": 1700
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "before",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1709,
                      "end": 1715
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "results",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1718,
                        "end": 1725
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1726,
                        "end": 1727
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1718,
                      "end": 1728
                    },
                    "start": 1709,
                    "end": 1728
                  },
                  "directive": null,
                  "start": 1709,
                  "end": 1729
                }
              ],
              "start": 1649,
              "end": 1735
            },
            "start": 1621,
            "end": 1735
          }
        ],
        "start": 1567,
        "end": 1737
      },
      "expression": false,
      "start": 1543,
      "end": 1737
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foox",
        "optional": false,
        "typeAnnotation": null,
        "start": 1796,
        "end": 1800
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1804,
                  "end": 1810
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1813,
                  "end": 1822
                }
              ],
              "start": 1804,
              "end": 1822
            },
            "start": 1802,
            "end": 1822
          },
          "start": 1801,
          "end": 1822
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1825,
            "end": 1832
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1833,
                "end": 1839
              }
            ],
            "start": 1832,
            "end": 1840
          },
          "start": 1825,
          "end": 1840
        },
        "start": 1823,
        "end": 1840
      },
      "body": null,
      "expression": false,
      "start": 1779,
      "end": 1840
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": false,
        "async": true,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1867,
                            "end": 1873
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1876,
                            "end": 1885
                          }
                        ],
                        "start": 1867,
                        "end": 1885
                      },
                      "start": 1865,
                      "end": 1885
                    },
                    "start": 1862,
                    "end": 1885
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1888,
                    "end": 1897
                  },
                  "definite": false,
                  "start": 1862,
                  "end": 1897
                }
              ],
              "declare": false,
              "start": 1858,
              "end": 1898
            },
            {
              "type": "DoWhileStatement",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1916,
                          "end": 1919
                        },
                        "init": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foox",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1928,
                              "end": 1932
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1933,
                                "end": 1936
                              }
                            ],
                            "optional": false,
                            "start": 1928,
                            "end": 1937
                          },
                          "start": 1922,
                          "end": 1937
                        },
                        "definite": false,
                        "start": 1916,
                        "end": 1937
                      }
                    ],
                    "declare": false,
                    "start": 1910,
                    "end": 1938
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1943,
                        "end": 1946
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1949,
                        "end": 1952
                      },
                      "start": 1943,
                      "end": 1952
                    },
                    "directive": null,
                    "start": 1943,
                    "end": 1952
                  }
                ],
                "start": 1904,
                "end": 1956
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1964,
                "end": 1967
              },
              "start": 1901,
              "end": 1968
            }
          ],
          "start": 1854,
          "end": 1970
        },
        "id": null,
        "generator": false,
        "start": 1842,
        "end": 1970
      },
      "directive": null,
      "start": 1842,
      "end": 1970
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 2029,
        "end": 2036
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lastId",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2046,
                    "end": 2052
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2054,
                          "end": 2060
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2063,
                          "end": 2072
                        }
                      ],
                      "start": 2054,
                      "end": 2072
                    },
                    "start": 2052,
                    "end": 2072
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2046,
                  "end": 2072
                }
              ],
              "start": 2044,
              "end": 2074
            },
            "start": 2042,
            "end": 2074
          },
          "start": 2037,
          "end": 2074
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2077,
            "end": 2084
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entities",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2087,
                      "end": 2095
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 2097,
                          "end": 2103
                        },
                        "start": 2097,
                        "end": 2105
                      },
                      "start": 2095,
                      "end": 2105
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2087,
                    "end": 2105
                  }
                ],
                "start": 2085,
                "end": 2107
              }
            ],
            "start": 2084,
            "end": 2108
          },
          "start": 2077,
          "end": 2108
        },
        "start": 2075,
        "end": 2108
      },
      "body": null,
      "expression": false,
      "start": 2012,
      "end": 2109
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 2126,
        "end": 2132
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2136,
            "end": 2143
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 2144,
                "end": 2148
              }
            ],
            "start": 2143,
            "end": 2149
          },
          "start": 2136,
          "end": 2149
        },
        "start": 2134,
        "end": 2149
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "lastId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2166,
                          "end": 2172
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2175,
                          "end": 2184
                        }
                      ],
                      "start": 2166,
                      "end": 2184
                    },
                    "start": 2164,
                    "end": 2184
                  },
                  "start": 2158,
                  "end": 2184
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2187,
                  "end": 2196
                },
                "definite": false,
                "start": 2158,
                "end": 2196
              }
            ],
            "declare": false,
            "start": 2154,
            "end": 2197
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2208,
              "end": 2212
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entities",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2228,
                              "end": 2236
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entities",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2228,
                              "end": 2236
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 2228,
                            "end": 2236
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2226,
                        "end": 2238
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myQuery",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2247,
                            "end": 2254
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "lastId",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2265,
                                    "end": 2271
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "lastId",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2265,
                                    "end": 2271
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2265,
                                  "end": 2271
                                }
                              ],
                              "start": 2255,
                              "end": 2278
                            }
                          ],
                          "optional": false,
                          "start": 2247,
                          "end": 2279
                        },
                        "start": 2241,
                        "end": 2279
                      },
                      "definite": false,
                      "start": 2226,
                      "end": 2279
                    }
                  ],
                  "declare": false,
                  "start": 2220,
                  "end": 2280
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "lastId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2286,
                      "end": 2292
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entities",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2295,
                        "end": 2303
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entities",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2304,
                            "end": 2312
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2313,
                            "end": 2319
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2304,
                          "end": 2319
                        },
                        "operator": "-",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2322,
                          "end": 2323
                        },
                        "start": 2304,
                        "end": 2323
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2295,
                      "end": 2324
                    },
                    "start": 2286,
                    "end": 2324
                  },
                  "directive": null,
                  "start": 2286,
                  "end": 2325
                }
              ],
              "start": 2214,
              "end": 2329
            },
            "start": 2201,
            "end": 2329
          }
        ],
        "start": 2150,
        "end": 2332
      },
      "expression": false,
      "start": 2111,
      "end": 2332
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2332
}
```
