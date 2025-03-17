__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 923,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 17,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 70,
                  "name": "x",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 76,
            "end": 139,
            "init": {
              "type": "AssignmentExpression",
              "start": 81,
              "end": 87,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 85,
                "end": 87,
                "value": "",
                "raw": "\"\""
              }
            },
            "test": {
              "type": "Identifier",
              "start": 89,
              "end": 93,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "value": 5,
                "raw": "5"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 102,
              "end": 139,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 112,
                  "end": 114,
                  "expression": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 142,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 152,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 193,
                  "name": "x",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 199,
            "end": 275,
            "init": {
              "type": "AssignmentExpression",
              "start": 204,
              "end": 209,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 208,
                "end": 209,
                "value": 5,
                "raw": "5"
              }
            },
            "test": {
              "type": "Identifier",
              "start": 211,
              "end": 215,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 221,
                "end": 229,
                "object": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 222,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 229,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 231,
              "end": 275,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 241,
                  "end": 243,
                  "expression": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 242,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 262,
                  "end": 269,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 262,
                    "end": 268,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 263,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 266,
                      "end": 268,
                      "value": "",
                      "raw": "\"\""
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 278,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 288,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 329,
                  "name": "x",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 335,
            "end": 405,
            "init": {
              "type": "AssignmentExpression",
              "start": 340,
              "end": 345,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 340,
                "end": 341,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 344,
                "end": 345,
                "value": 5,
                "raw": "5"
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 351,
                "end": 368,
                "callee": {
                  "type": "MemberExpression",
                  "start": 351,
                  "end": 366,
                  "object": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 352,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 366,
                    "name": "toExponential",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 374,
                "end": 375,
                "value": 5,
                "raw": "5"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 377,
              "end": 405,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 387,
                  "end": 389,
                  "expression": {
                    "type": "Identifier",
                    "start": 387,
                    "end": 388,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 408,
      "end": 538,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 418,
        "name": "d",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 459,
                  "name": "x",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 465,
            "end": 536,
            "init": {
              "type": "AssignmentExpression",
              "start": 470,
              "end": 476,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 470,
                "end": 471,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 474,
                "end": 476,
                "value": "",
                "raw": "\"\""
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 478,
              "end": 499,
              "left": {
                "type": "UnaryExpression",
                "start": 478,
                "end": 486,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 491,
                "end": 499,
                "value": "string",
                "raw": "\"string\""
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 505,
                "end": 506,
                "value": 5,
                "raw": "5"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 508,
              "end": 536,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 518,
                  "end": 520,
                  "expression": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 519,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 539,
      "end": 702,
      "id": {
        "type": "Identifier",
        "start": 548,
        "end": 549,
        "name": "e",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 599,
                  "name": "x",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 593,
                            "end": 599,
                            "name": "RegExp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 605,
            "end": 700,
            "init": {
              "type": "AssignmentExpression",
              "start": 610,
              "end": 621,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 610,
                "end": 611,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "LogicalExpression",
                "start": 614,
                "end": 621,
                "left": {
                  "type": "Literal",
                  "start": 614,
                  "end": 616,
                  "value": "",
                  "raw": "\"\""
                },
                "operator": "||",
                "right": {
                  "type": "Literal",
                  "start": 620,
                  "end": 621,
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 623,
              "end": 644,
              "left": {
                "type": "UnaryExpression",
                "start": 623,
                "end": 631,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 631,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 636,
                "end": 644,
                "value": "string",
                "raw": "\"string\""
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "LogicalExpression",
                "start": 650,
                "end": 660,
                "left": {
                  "type": "Literal",
                  "start": 650,
                  "end": 652,
                  "value": "",
                  "raw": "\"\""
                },
                "operator": "||",
                "right": {
                  "type": "Literal",
                  "start": 656,
                  "end": 660,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 662,
              "end": 700,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 672,
                  "end": 674,
                  "expression": {
                    "type": "Identifier",
                    "start": 672,
                    "end": 673,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 703,
      "end": 922,
      "id": {
        "type": "Identifier",
        "start": 712,
        "end": 713,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 726,
                  "end": 754,
                  "name": "x",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 760,
            "end": 894,
            "init": null,
            "test": {
              "type": "BinaryExpression",
              "start": 767,
              "end": 788,
              "left": {
                "type": "UnaryExpression",
                "start": 767,
                "end": 775,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 775,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 780,
                "end": 788,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 791,
              "end": 894,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 801,
                  "end": 803,
                  "expression": {
                    "type": "Identifier",
                    "start": 801,
                    "end": 802,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 832,
                  "end": 865,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 836,
                    "end": 857,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 836,
                      "end": 844,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 843,
                        "end": 844,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 849,
                      "end": 857,
                      "value": "number",
                      "raw": "\"number\""
                    }
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 859,
                    "end": 865,
                    "label": null
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 874,
                  "end": 888,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 874,
                    "end": 887,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 874,
                      "end": 875,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 878,
                      "end": 887,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 899,
            "end": 901,
            "expression": {
              "type": "Identifier",
              "start": 899,
              "end": 900,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
