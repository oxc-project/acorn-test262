__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1326,
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
      "start": 20,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
        "name": "len",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 33,
          "end": 42,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 42,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 36,
              "end": 42
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "object": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 59,
                "end": 65,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "start": 70,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 81,
        "name": "f1",
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
                "id": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 122,
                  "name": "x",
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
            "type": "ExpressionStatement",
            "start": 128,
            "end": 135,
            "expression": {
              "type": "AssignmentExpression",
              "start": 128,
              "end": 134,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 132,
                "end": 134,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 140,
            "end": 191,
            "test": {
              "type": "Identifier",
              "start": 147,
              "end": 151,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 153,
              "end": 191,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 163,
                  "end": 174,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 163,
                    "end": 173,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 167,
                      "end": 173,
                      "callee": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 170,
                        "name": "len",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 171,
                          "end": 172,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 183,
                  "end": 185,
                  "expression": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 196,
            "end": 198,
            "expression": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "name": "f2",
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
                "id": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 254,
                  "name": "x",
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
            "type": "ExpressionStatement",
            "start": 260,
            "end": 267,
            "expression": {
              "type": "AssignmentExpression",
              "start": 260,
              "end": 266,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 264,
                "end": 266,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 272,
            "end": 323,
            "test": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 285,
              "end": 323,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 295,
                  "end": 297,
                  "expression": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 306,
                  "end": 317,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 306,
                    "end": 316,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 307,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 310,
                      "end": 316,
                      "callee": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 313,
                        "name": "len",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 314,
                          "end": 315,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 330,
            "expression": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
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
    },
    {
      "type": "TSDeclareFunction",
      "start": 334,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 354,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 355,
          "end": 364,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 356,
            "end": 364,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 358,
              "end": 364
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 365,
        "end": 373,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 367,
          "end": 373
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 375,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 395,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 396,
          "end": 405,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 397,
            "end": 405,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 399,
              "end": 405
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 406,
        "end": 414,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 408,
          "end": 414
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 417,
      "end": 547,
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 428,
        "name": "g1",
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
                "id": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 469,
                  "name": "x",
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
            "type": "ExpressionStatement",
            "start": 475,
            "end": 482,
            "expression": {
              "type": "AssignmentExpression",
              "start": 475,
              "end": 481,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 479,
                "end": 481,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 487,
            "end": 538,
            "test": {
              "type": "Identifier",
              "start": 494,
              "end": 498,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 500,
              "end": 538,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 510,
                  "end": 521,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 510,
                    "end": 520,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 511,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 514,
                      "end": 520,
                      "callee": {
                        "type": "Identifier",
                        "start": 514,
                        "end": 517,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 518,
                          "end": 519,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 530,
                  "end": 532,
                  "expression": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 531,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 543,
            "end": 545,
            "expression": {
              "type": "Identifier",
              "start": 543,
              "end": 544,
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 549,
      "end": 679,
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 560,
        "name": "g2",
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
                "id": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 601,
                  "name": "x",
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
            "type": "ExpressionStatement",
            "start": 607,
            "end": 614,
            "expression": {
              "type": "AssignmentExpression",
              "start": 607,
              "end": 613,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 607,
                "end": 608,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 611,
                "end": 613,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 619,
            "end": 670,
            "test": {
              "type": "Identifier",
              "start": 626,
              "end": 630,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 632,
              "end": 670,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 642,
                  "end": 644,
                  "expression": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 643,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 653,
                  "end": 664,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 653,
                    "end": 663,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 653,
                      "end": 654,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 657,
                      "end": 663,
                      "callee": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 660,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 661,
                          "end": 662,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 675,
            "end": 677,
            "expression": {
              "type": "Identifier",
              "start": 675,
              "end": 676,
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 681,
      "end": 745,
      "id": {
        "type": "Identifier",
        "start": 690,
        "end": 698,
        "name": "asNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 699,
          "end": 717,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "operator": "+",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 741,
                "end": 742,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 718,
        "end": 726,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 720,
          "end": 726
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 747,
      "end": 871,
      "id": {
        "type": "Identifier",
        "start": 756,
        "end": 758,
        "name": "h1",
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
                "id": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 799,
                  "name": "x",
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
            "type": "ExpressionStatement",
            "start": 805,
            "end": 813,
            "expression": {
              "type": "AssignmentExpression",
              "start": 805,
              "end": 812,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 805,
                "end": 806,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 809,
                "end": 812,
                "value": "0",
                "raw": "\"0\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 818,
            "end": 869,
            "test": {
              "type": "Identifier",
              "start": 825,
              "end": 829,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 831,
              "end": 869,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 841,
                  "end": 852,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 841,
                    "end": 851,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 841,
                      "end": 842,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 845,
                      "end": 851,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 845,
                        "end": 847,
                        "operator": "+",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 846,
                          "end": 847,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 850,
                        "end": 851,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 861,
                  "end": 863,
                  "expression": {
                    "type": "Identifier",
                    "start": 861,
                    "end": 862,
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
      "start": 873,
      "end": 1006,
      "id": {
        "type": "Identifier",
        "start": 882,
        "end": 884,
        "name": "h2",
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
                "id": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 925,
                  "name": "x",
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
            "type": "ExpressionStatement",
            "start": 931,
            "end": 939,
            "expression": {
              "type": "AssignmentExpression",
              "start": 931,
              "end": 938,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 931,
                "end": 932,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 935,
                "end": 938,
                "value": "0",
                "raw": "\"0\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 944,
            "end": 1004,
            "test": {
              "type": "Identifier",
              "start": 951,
              "end": 955,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 957,
              "end": 1004,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 967,
                  "end": 987,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 967,
                    "end": 986,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 967,
                      "end": 968,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 971,
                      "end": 986,
                      "left": {
                        "type": "CallExpression",
                        "start": 971,
                        "end": 982,
                        "callee": {
                          "type": "Identifier",
                          "start": 971,
                          "end": 979,
                          "name": "asNumber",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 980,
                            "end": 981,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 985,
                        "end": 986,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 996,
                  "end": 998,
                  "expression": {
                    "type": "Identifier",
                    "start": 996,
                    "end": 997,
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
      "start": 1008,
      "end": 1160,
      "id": {
        "type": "Identifier",
        "start": 1017,
        "end": 1019,
        "name": "h3",
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
                "id": {
                  "type": "Identifier",
                  "start": 1032,
                  "end": 1060,
                  "name": "x",
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
            "type": "ExpressionStatement",
            "start": 1066,
            "end": 1074,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1066,
              "end": 1073,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1066,
                "end": 1067,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1070,
                "end": 1073,
                "value": "0",
                "raw": "\"0\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 1079,
            "end": 1158,
            "test": {
              "type": "Identifier",
              "start": 1086,
              "end": 1090,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 1106,
                        "end": 1107,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1110,
                        "end": 1121,
                        "callee": {
                          "type": "Identifier",
                          "start": 1110,
                          "end": 1118,
                          "name": "asNumber",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1119,
                            "end": 1120,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1131,
                  "end": 1141,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1131,
                    "end": 1140,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1131,
                      "end": 1132,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1135,
                      "end": 1140,
                      "left": {
                        "type": "Identifier",
                        "start": 1135,
                        "end": 1136,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 1139,
                        "end": 1140,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1150,
                  "end": 1152,
                  "expression": {
                    "type": "Identifier",
                    "start": 1150,
                    "end": 1151,
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
      "start": 1162,
      "end": 1325,
      "id": {
        "type": "Identifier",
        "start": 1171,
        "end": 1173,
        "name": "h4",
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
                "id": {
                  "type": "Identifier",
                  "start": 1186,
                  "end": 1214,
                  "name": "x",
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
            "type": "ExpressionStatement",
            "start": 1220,
            "end": 1228,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1220,
              "end": 1227,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1220,
                "end": 1221,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1224,
                "end": 1227,
                "value": "0",
                "raw": "\"0\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 1233,
            "end": 1323,
            "test": {
              "type": "Identifier",
              "start": 1240,
              "end": 1244,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 1246,
              "end": 1323,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1256,
                  "end": 1258,
                  "expression": {
                    "type": "Identifier",
                    "start": 1256,
                    "end": 1257,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
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
                      "id": {
                        "type": "Identifier",
                        "start": 1271,
                        "end": 1272,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1275,
                        "end": 1286,
                        "callee": {
                          "type": "Identifier",
                          "start": 1275,
                          "end": 1283,
                          "name": "asNumber",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1284,
                            "end": 1285,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1296,
                  "end": 1306,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1296,
                    "end": 1305,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1296,
                      "end": 1297,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1300,
                      "end": 1305,
                      "left": {
                        "type": "Identifier",
                        "start": 1300,
                        "end": 1301,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 1304,
                        "end": 1305,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1315,
                  "end": 1317,
                  "expression": {
                    "type": "Identifier",
                    "start": 1315,
                    "end": 1316,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
