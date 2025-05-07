__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1325,
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
      "start": 20,
      "end": 68,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 68,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 50,
            "end": 66,
            "argument": {
              "type": "MemberExpression",
              "start": 57,
              "end": 65,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 59,
                "end": 65,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
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
        "start": 29,
        "end": 32,
        "decorators": [],
        "name": "len",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 33,
          "end": 42,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 42,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 36,
              "end": 42
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 200,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 84,
        "end": 200,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 90,
            "end": 123,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 94,
                "end": 122,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 122,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 122,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 97,
                      "end": 122,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 97,
                          "end": 103
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 106,
                          "end": 112
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 115,
                          "end": 122
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
            "type": "ExpressionStatement",
            "start": 128,
            "end": 135,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 128,
              "end": 134,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 132,
                "end": 134,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 140,
            "end": 191,
            "body": {
              "type": "BlockStatement",
              "start": 153,
              "end": 191,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 163,
                  "end": 174,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 163,
                    "end": 173,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 167,
                      "end": 173,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 171,
                          "end": 172,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 170,
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 183,
                  "end": 185,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 147,
              "end": 151,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 196,
            "end": 198,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
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
        "start": 79,
        "end": 81,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 332,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 216,
        "end": 332,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 222,
            "end": 255,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 226,
                "end": 254,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 254,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 229,
                      "end": 254,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 229,
                          "end": 235
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 238,
                          "end": 244
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 247,
                          "end": 254
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
            "type": "ExpressionStatement",
            "start": 260,
            "end": 267,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 260,
              "end": 266,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 264,
                "end": 266,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 272,
            "end": 323,
            "body": {
              "type": "BlockStatement",
              "start": 285,
              "end": 323,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 295,
                  "end": 297,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 306,
                  "end": 317,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 306,
                    "end": 316,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 307,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 310,
                      "end": 316,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 314,
                          "end": 315,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 313,
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 330,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
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
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 334,
      "end": 374,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 354,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 355,
          "end": 364,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 356,
            "end": 364,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 358,
              "end": 364
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 365,
        "end": 373,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 367,
          "end": 373
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 375,
      "end": 415,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 395,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 396,
          "end": 405,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 397,
            "end": 405,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 399,
              "end": 405
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 406,
        "end": 414,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 408,
          "end": 414
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 417,
      "end": 547,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 431,
        "end": 547,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 437,
            "end": 470,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 441,
                "end": 469,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 469,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 442,
                    "end": 469,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 444,
                      "end": 469,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 444,
                          "end": 450
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 453,
                          "end": 459
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 462,
                          "end": 469
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
            "type": "ExpressionStatement",
            "start": 475,
            "end": 482,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 475,
              "end": 481,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 479,
                "end": 481,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 487,
            "end": 538,
            "body": {
              "type": "BlockStatement",
              "start": 500,
              "end": 538,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 510,
                  "end": 521,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 510,
                    "end": 520,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 511,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 514,
                      "end": 520,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 518,
                          "end": 519,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 514,
                        "end": 517,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 530,
                  "end": 532,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 531,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 494,
              "end": 498,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 543,
            "end": 545,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 543,
              "end": 544,
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
        "start": 426,
        "end": 428,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 549,
      "end": 679,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 563,
        "end": 679,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 569,
            "end": 602,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 573,
                "end": 601,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 601,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 574,
                    "end": 601,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 576,
                      "end": 601,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 576,
                          "end": 582
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 585,
                          "end": 591
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 594,
                          "end": 601
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
            "type": "ExpressionStatement",
            "start": 607,
            "end": 614,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 607,
              "end": 613,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 607,
                "end": 608,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 611,
                "end": 613,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 619,
            "end": 670,
            "body": {
              "type": "BlockStatement",
              "start": 632,
              "end": 670,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 642,
                  "end": 644,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 643,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 653,
                  "end": 664,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 653,
                    "end": 663,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 653,
                      "end": 654,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 657,
                      "end": 663,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 661,
                          "end": 662,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 660,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 626,
              "end": 630,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 675,
            "end": 677,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 675,
              "end": 676,
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
        "start": 558,
        "end": 560,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 681,
      "end": 745,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 727,
        "end": 745,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 733,
            "end": 743,
            "argument": {
              "type": "UnaryExpression",
              "start": 740,
              "end": 742,
              "argument": {
                "type": "Identifier",
                "start": 741,
                "end": 742,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 690,
        "end": 698,
        "decorators": [],
        "name": "asNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 699,
          "end": 717,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 700,
            "end": 717,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 702,
              "end": 717,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 702,
                  "end": 708
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 711,
                  "end": 717
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 718,
        "end": 726,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 720,
          "end": 726
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 747,
      "end": 871,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 761,
        "end": 871,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 767,
            "end": 800,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 771,
                "end": 799,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 799,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 772,
                    "end": 799,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 774,
                      "end": 799,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 774,
                          "end": 780
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 783,
                          "end": 789
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 792,
                          "end": 799
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
            "type": "ExpressionStatement",
            "start": 805,
            "end": 813,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 805,
              "end": 812,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 805,
                "end": 806,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 809,
                "end": 812,
                "raw": "\"0\"",
                "value": "0",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 818,
            "end": 869,
            "body": {
              "type": "BlockStatement",
              "start": 831,
              "end": 869,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 841,
                  "end": 852,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 841,
                    "end": 851,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 841,
                      "end": 842,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 845,
                      "end": 851,
                      "operator": "+",
                      "left": {
                        "type": "UnaryExpression",
                        "start": 845,
                        "end": 847,
                        "argument": {
                          "type": "Identifier",
                          "start": 846,
                          "end": 847,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "prefix": true
                      },
                      "right": {
                        "type": "Literal",
                        "start": 850,
                        "end": 851,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 861,
                  "end": 863,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 861,
                    "end": 862,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 825,
              "end": 829,
              "decorators": [],
              "name": "cond",
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
        "start": 756,
        "end": 758,
        "decorators": [],
        "name": "h1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 873,
      "end": 1006,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 887,
        "end": 1006,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 893,
            "end": 926,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 897,
                "end": 925,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 925,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 898,
                    "end": 925,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 900,
                      "end": 925,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 900,
                          "end": 906
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 909,
                          "end": 915
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 918,
                          "end": 925
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
            "type": "ExpressionStatement",
            "start": 931,
            "end": 939,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 931,
              "end": 938,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 931,
                "end": 932,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 935,
                "end": 938,
                "raw": "\"0\"",
                "value": "0",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 944,
            "end": 1004,
            "body": {
              "type": "BlockStatement",
              "start": 957,
              "end": 1004,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 967,
                  "end": 987,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 967,
                    "end": 986,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 967,
                      "end": 968,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 971,
                      "end": 986,
                      "operator": "+",
                      "left": {
                        "type": "CallExpression",
                        "start": 971,
                        "end": 982,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 980,
                            "end": 981,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 971,
                          "end": 979,
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 985,
                        "end": 986,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 996,
                  "end": 998,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 996,
                    "end": 997,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 951,
              "end": 955,
              "decorators": [],
              "name": "cond",
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
        "start": 882,
        "end": 884,
        "decorators": [],
        "name": "h2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1008,
      "end": 1160,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1022,
        "end": 1160,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1028,
            "end": 1061,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1032,
                "end": 1060,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1032,
                  "end": 1060,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1033,
                    "end": 1060,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1035,
                      "end": 1060,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1035,
                          "end": 1041
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1044,
                          "end": 1050
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1053,
                          "end": 1060
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
            "type": "ExpressionStatement",
            "start": 1066,
            "end": 1074,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1066,
              "end": 1073,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1066,
                "end": 1067,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1070,
                "end": 1073,
                "raw": "\"0\"",
                "value": "0",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 1079,
            "end": 1158,
            "body": {
              "type": "BlockStatement",
              "start": 1092,
              "end": 1158,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1102,
                  "end": 1122,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1106,
                      "end": 1121,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1106,
                        "end": 1107,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1110,
                        "end": 1121,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1119,
                            "end": 1120,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1110,
                          "end": 1118,
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1131,
                  "end": 1141,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1131,
                    "end": 1140,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1131,
                      "end": 1132,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1135,
                      "end": 1140,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1135,
                        "end": 1136,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1139,
                        "end": 1140,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1150,
                  "end": 1152,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1150,
                    "end": 1151,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1086,
              "end": 1090,
              "decorators": [],
              "name": "cond",
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
        "start": 1017,
        "end": 1019,
        "decorators": [],
        "name": "h3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1162,
      "end": 1325,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1176,
        "end": 1325,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1182,
            "end": 1215,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1186,
                "end": 1214,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1186,
                  "end": 1214,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1187,
                    "end": 1214,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1189,
                      "end": 1214,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1189,
                          "end": 1195
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1198,
                          "end": 1204
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1207,
                          "end": 1214
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
            "type": "ExpressionStatement",
            "start": 1220,
            "end": 1228,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1220,
              "end": 1227,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1220,
                "end": 1221,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1224,
                "end": 1227,
                "raw": "\"0\"",
                "value": "0",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 1233,
            "end": 1323,
            "body": {
              "type": "BlockStatement",
              "start": 1246,
              "end": 1323,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1256,
                  "end": 1258,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1256,
                    "end": 1257,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1267,
                  "end": 1287,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1271,
                      "end": 1286,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1271,
                        "end": 1272,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1275,
                        "end": 1286,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1284,
                            "end": 1285,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1275,
                          "end": 1283,
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1296,
                  "end": 1306,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1296,
                    "end": 1305,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1296,
                      "end": 1297,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1300,
                      "end": 1305,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1300,
                        "end": 1301,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1304,
                        "end": 1305,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1315,
                  "end": 1317,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1315,
                    "end": 1316,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1240,
              "end": 1244,
              "decorators": [],
              "name": "cond",
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
        "start": 1171,
        "end": 1173,
        "decorators": [],
        "name": "h4",
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
