__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 19,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 38,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 142,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 186,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 266,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 278,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 313,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 322,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 335,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 353,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 408,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 427,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 443,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 452,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 465,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 478,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 487,
    "end": 490
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 491,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 539,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 558,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 565,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 574,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 583,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 593,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 614,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 617,
    "end": 619
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 623,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 632,
    "end": 635
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 636,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 653,
    "end": 655
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 656,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 703,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 722,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 738,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 747,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 767,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 776,
    "end": 779
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 780,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 832,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 836,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 845,
    "end": 848
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 849,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 859,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 878,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 921,
    "end": 922
  }
]
```
