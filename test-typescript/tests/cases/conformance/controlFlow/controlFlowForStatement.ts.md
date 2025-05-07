__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 922,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 17,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 141,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 141,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 38,
            "end": 71,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 42,
                "end": 70,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 70,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 45,
                      "end": 70,
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
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 76,
            "end": 139,
            "body": {
              "type": "BlockStatement",
              "start": 102,
              "end": 139,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 112,
                  "end": 114,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "init": {
              "type": "AssignmentExpression",
              "start": 81,
              "end": 87,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 85,
                "end": 87,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            },
            "test": {
              "type": "Identifier",
              "start": 89,
              "end": 93,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "update": {
              "type": "AssignmentExpression",
              "start": 95,
              "end": 100,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 142,
      "end": 277,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 155,
        "end": 277,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 161,
            "end": 194,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 165,
                "end": 193,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 193,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 193,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 168,
                      "end": 193,
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
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 199,
            "end": 275,
            "body": {
              "type": "BlockStatement",
              "start": 231,
              "end": 275,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 241,
                  "end": 243,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 242,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 262,
                  "end": 269,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 262,
                    "end": 268,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 263,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 266,
                      "end": 268,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "AssignmentExpression",
              "start": 204,
              "end": 209,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 208,
                "end": 209,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            },
            "test": {
              "type": "Identifier",
              "start": 211,
              "end": 215,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "update": {
              "type": "AssignmentExpression",
              "start": 217,
              "end": 229,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 221,
                "end": 229,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 222,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 229,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 152,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 278,
      "end": 407,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 291,
        "end": 407,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 297,
            "end": 330,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 301,
                "end": 329,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 329,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 302,
                    "end": 329,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 304,
                      "end": 329,
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
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 335,
            "end": 405,
            "body": {
              "type": "BlockStatement",
              "start": 377,
              "end": 405,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 387,
                  "end": 389,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 387,
                    "end": 388,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "init": {
              "type": "AssignmentExpression",
              "start": 340,
              "end": 345,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 340,
                "end": 341,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 344,
                "end": 345,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            },
            "test": {
              "type": "AssignmentExpression",
              "start": 347,
              "end": 368,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 347,
                "end": 348,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "CallExpression",
                "start": 351,
                "end": 368,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 351,
                  "end": 366,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 352,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 366,
                    "decorators": [],
                    "name": "toExponential",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "start": 370,
              "end": 375,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 370,
                "end": 371,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 374,
                "end": 375,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 288,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 408,
      "end": 538,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 421,
        "end": 538,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 427,
            "end": 460,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 431,
                "end": 459,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 459,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 459,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 434,
                      "end": 459,
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
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 465,
            "end": 536,
            "body": {
              "type": "BlockStatement",
              "start": 508,
              "end": 536,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 518,
                  "end": 520,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 519,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "init": {
              "type": "AssignmentExpression",
              "start": 470,
              "end": 476,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 470,
                "end": 471,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 474,
                "end": 476,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 478,
              "end": 499,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 478,
                "end": 486,
                "argument": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 491,
                "end": 499,
                "raw": "\"string\"",
                "value": "string",
                "regex": null,
                "bigint": null
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "start": 501,
              "end": 506,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 505,
                "end": 506,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 418,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 539,
      "end": 702,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 552,
        "end": 702,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 558,
            "end": 600,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 562,
                "end": 599,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 599,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 599,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 565,
                      "end": 599,
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
                          "start": 593,
                          "end": 599,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 593,
                            "end": 599,
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null
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
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 605,
            "end": 700,
            "body": {
              "type": "BlockStatement",
              "start": 662,
              "end": 700,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 672,
                  "end": 674,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 672,
                    "end": 673,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "init": {
              "type": "AssignmentExpression",
              "start": 610,
              "end": 621,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 610,
                "end": 611,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 614,
                "end": 621,
                "operator": "||",
                "left": {
                  "type": "Literal",
                  "start": 614,
                  "end": 616,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Literal",
                  "start": 620,
                  "end": 621,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 623,
              "end": 644,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 623,
                "end": 631,
                "argument": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 631,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 636,
                "end": 644,
                "raw": "\"string\"",
                "value": "string",
                "regex": null,
                "bigint": null
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "start": 646,
              "end": 660,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 646,
                "end": 647,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 650,
                "end": 660,
                "operator": "||",
                "left": {
                  "type": "Literal",
                  "start": 650,
                  "end": 652,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Literal",
                  "start": 656,
                  "end": 660,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 548,
        "end": 549,
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 703,
      "end": 922,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 716,
        "end": 922,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 722,
            "end": 755,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 726,
                "end": 754,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 726,
                  "end": 754,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 727,
                    "end": 754,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 729,
                      "end": 754,
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
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 760,
            "end": 894,
            "body": {
              "type": "BlockStatement",
              "start": 791,
              "end": 894,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 801,
                  "end": 803,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 801,
                    "end": 802,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 832,
                  "end": 865,
                  "alternate": null,
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 859,
                    "end": 865,
                    "label": null
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 836,
                    "end": 857,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 836,
                      "end": 844,
                      "argument": {
                        "type": "Identifier",
                        "start": 843,
                        "end": 844,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 849,
                      "end": 857,
                      "raw": "\"number\"",
                      "value": "number",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 874,
                  "end": 888,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 874,
                    "end": 887,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 874,
                      "end": 875,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 878,
                      "end": 887,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "init": null,
            "test": {
              "type": "BinaryExpression",
              "start": 767,
              "end": 788,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 767,
                "end": 775,
                "argument": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 775,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 780,
                "end": 788,
                "raw": "\"string\"",
                "value": "string",
                "regex": null,
                "bigint": null
              }
            },
            "update": null
          },
          {
            "type": "ExpressionStatement",
            "start": 899,
            "end": 901,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 899,
              "end": 900,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 712,
        "end": 713,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
