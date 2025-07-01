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
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "generator": false,
      "async": false,
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
                          "start": 45,
                          "end": 51
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 54,
                          "end": 60
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 63,
                          "end": 70
                        }
                      ],
                      "start": 45,
                      "end": 70
                    },
                    "start": 43,
                    "end": 70
                  },
                  "start": 42,
                  "end": 70
                },
                "init": null,
                "definite": false,
                "start": 42,
                "end": 70
              }
            ],
            "declare": false,
            "start": 38,
            "end": 71
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 82
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 85,
                "end": 87
              },
              "start": 81,
              "end": 87
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 93
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 96
              },
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 99,
                "end": 100
              },
              "start": 95,
              "end": 100
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
                    "start": 112,
                    "end": 113
                  },
                  "directive": null,
                  "start": 112,
                  "end": 114
                }
              ],
              "start": 102,
              "end": 139
            },
            "start": 76,
            "end": 139
          }
        ],
        "start": 32,
        "end": 141
      },
      "expression": false,
      "start": 19,
      "end": 141
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 152
      },
      "generator": false,
      "async": false,
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
                          "start": 168,
                          "end": 174
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 177,
                          "end": 183
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 186,
                          "end": 193
                        }
                      ],
                      "start": 168,
                      "end": 193
                    },
                    "start": 166,
                    "end": 193
                  },
                  "start": 165,
                  "end": 193
                },
                "init": null,
                "definite": false,
                "start": 165,
                "end": 193
              }
            ],
            "declare": false,
            "start": 161,
            "end": 194
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 205
              },
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 208,
                "end": 209
              },
              "start": 204,
              "end": 209
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 215
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 218
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 222
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 229
                },
                "optional": false,
                "computed": false,
                "start": 221,
                "end": 229
              },
              "start": 217,
              "end": 229
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
                    "start": 241,
                    "end": 242
                  },
                  "directive": null,
                  "start": 241,
                  "end": 243
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
                      "start": 262,
                      "end": 263
                    },
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 266,
                      "end": 268
                    },
                    "start": 262,
                    "end": 268
                  },
                  "directive": null,
                  "start": 262,
                  "end": 269
                }
              ],
              "start": 231,
              "end": 275
            },
            "start": 199,
            "end": 275
          }
        ],
        "start": 155,
        "end": 277
      },
      "expression": false,
      "start": 142,
      "end": 277
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 288
      },
      "generator": false,
      "async": false,
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
                          "start": 304,
                          "end": 310
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 313,
                          "end": 319
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 322,
                          "end": 329
                        }
                      ],
                      "start": 304,
                      "end": 329
                    },
                    "start": 302,
                    "end": 329
                  },
                  "start": 301,
                  "end": 329
                },
                "init": null,
                "definite": false,
                "start": 301,
                "end": 329
              }
            ],
            "declare": false,
            "start": 297,
            "end": 330
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 341
              },
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 344,
                "end": 345
              },
              "start": 340,
              "end": 345
            },
            "test": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 348
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 352
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toExponential",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 366
                  },
                  "optional": false,
                  "computed": false,
                  "start": 351,
                  "end": 366
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 351,
                "end": 368
              },
              "start": 347,
              "end": 368
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 371
              },
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 374,
                "end": 375
              },
              "start": 370,
              "end": 375
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
                    "start": 387,
                    "end": 388
                  },
                  "directive": null,
                  "start": 387,
                  "end": 389
                }
              ],
              "start": 377,
              "end": 405
            },
            "start": 335,
            "end": 405
          }
        ],
        "start": 291,
        "end": 407
      },
      "expression": false,
      "start": 278,
      "end": 407
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 418
      },
      "generator": false,
      "async": false,
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
                          "start": 434,
                          "end": 440
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 443,
                          "end": 449
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 452,
                          "end": 459
                        }
                      ],
                      "start": 434,
                      "end": 459
                    },
                    "start": 432,
                    "end": 459
                  },
                  "start": 431,
                  "end": 459
                },
                "init": null,
                "definite": false,
                "start": 431,
                "end": 459
              }
            ],
            "declare": false,
            "start": 427,
            "end": 460
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 470,
                "end": 471
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 474,
                "end": 476
              },
              "start": 470,
              "end": 476
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 486
                },
                "prefix": true,
                "start": 478,
                "end": 486
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 491,
                "end": 499
              },
              "start": 478,
              "end": 499
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 502
              },
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 505,
                "end": 506
              },
              "start": 501,
              "end": 506
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
                    "start": 518,
                    "end": 519
                  },
                  "directive": null,
                  "start": 518,
                  "end": 520
                }
              ],
              "start": 508,
              "end": 536
            },
            "start": 465,
            "end": 536
          }
        ],
        "start": 421,
        "end": 538
      },
      "expression": false,
      "start": 408,
      "end": 538
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 549
      },
      "generator": false,
      "async": false,
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
                          "start": 565,
                          "end": 571
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 574,
                          "end": 580
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 583,
                          "end": 590
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 593,
                            "end": 599
                          },
                          "typeArguments": null,
                          "start": 593,
                          "end": 599
                        }
                      ],
                      "start": 565,
                      "end": 599
                    },
                    "start": 563,
                    "end": 599
                  },
                  "start": 562,
                  "end": 599
                },
                "init": null,
                "definite": false,
                "start": 562,
                "end": 599
              }
            ],
            "declare": false,
            "start": 558,
            "end": 600
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 610,
                "end": 611
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 614,
                  "end": 616
                },
                "operator": "||",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 620,
                  "end": 621
                },
                "start": 614,
                "end": 621
              },
              "start": 610,
              "end": 621
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 631
                },
                "prefix": true,
                "start": 623,
                "end": 631
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 636,
                "end": 644
              },
              "start": 623,
              "end": 644
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
                "end": 647
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 650,
                  "end": 652
                },
                "operator": "||",
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 656,
                  "end": 660
                },
                "start": 650,
                "end": 660
              },
              "start": 646,
              "end": 660
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
                    "start": 672,
                    "end": 673
                  },
                  "directive": null,
                  "start": 672,
                  "end": 674
                }
              ],
              "start": 662,
              "end": 700
            },
            "start": 605,
            "end": 700
          }
        ],
        "start": 552,
        "end": 702
      },
      "expression": false,
      "start": 539,
      "end": 702
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 712,
        "end": 713
      },
      "generator": false,
      "async": false,
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
                          "start": 729,
                          "end": 735
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 738,
                          "end": 744
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 747,
                          "end": 754
                        }
                      ],
                      "start": 729,
                      "end": 754
                    },
                    "start": 727,
                    "end": 754
                  },
                  "start": 726,
                  "end": 754
                },
                "init": null,
                "definite": false,
                "start": 726,
                "end": 754
              }
            ],
            "declare": false,
            "start": 722,
            "end": 755
          },
          {
            "type": "ForStatement",
            "init": null,
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 775
                },
                "prefix": true,
                "start": 767,
                "end": 775
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 780,
                "end": 788
              },
              "start": 767,
              "end": 788
            },
            "update": null,
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
                    "start": 801,
                    "end": 802
                  },
                  "directive": null,
                  "start": 801,
                  "end": 803
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 843,
                        "end": 844
                      },
                      "prefix": true,
                      "start": 836,
                      "end": 844
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 849,
                      "end": 857
                    },
                    "start": 836,
                    "end": 857
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 859,
                    "end": 865
                  },
                  "alternate": null,
                  "start": 832,
                  "end": 865
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
                      "start": 874,
                      "end": 875
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 878,
                      "end": 887
                    },
                    "start": 874,
                    "end": 887
                  },
                  "directive": null,
                  "start": 874,
                  "end": 888
                }
              ],
              "start": 791,
              "end": 894
            },
            "start": 760,
            "end": 894
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 899,
              "end": 900
            },
            "directive": null,
            "start": 899,
            "end": 901
          }
        ],
        "start": 716,
        "end": 922
      },
      "expression": false,
      "start": 703,
      "end": 922
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 922
}
```
