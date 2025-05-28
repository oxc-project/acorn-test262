__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1002,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "obj",
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
          "start": 21,
          "end": 30,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 24,
              "end": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 37,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 33,
          "end": 37
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 51,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 62,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 62,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 55,
              "end": 62
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 158,
        "body": [
          {
            "type": "IfStatement",
            "start": 70,
            "end": 101,
            "test": {
              "type": "UnaryExpression",
              "start": 74,
              "end": 76,
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 78,
              "end": 101,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 88,
                  "end": 95,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 106,
            "end": 156,
            "test": {
              "type": "BinaryExpression",
              "start": 110,
              "end": 131,
              "left": {
                "type": "UnaryExpression",
                "start": 110,
                "end": 118,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 123,
                "end": 131,
                "value": "object",
                "raw": "'object'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 133,
              "end": 156,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 143,
                  "end": 150,
                  "expression": {
                    "type": "CallExpression",
                    "start": 143,
                    "end": 149,
                    "callee": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 146,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 147,
                        "end": 148,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 160,
      "end": 286,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 171,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 172,
          "end": 182,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 182,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 175,
              "end": 182
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 184,
        "end": 286,
        "body": [
          {
            "type": "IfStatement",
            "start": 190,
            "end": 229,
            "test": {
              "type": "BinaryExpression",
              "start": 194,
              "end": 204,
              "left": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 200,
                "end": 204,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 206,
              "end": 229,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 216,
                  "end": 223,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 234,
            "end": 284,
            "test": {
              "type": "BinaryExpression",
              "start": 238,
              "end": 259,
              "left": {
                "type": "UnaryExpression",
                "start": 238,
                "end": 246,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 251,
                "end": 259,
                "value": "object",
                "raw": "'object'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 261,
              "end": 284,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 271,
                  "end": 278,
                  "expression": {
                    "type": "CallExpression",
                    "start": 271,
                    "end": 277,
                    "callee": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 274,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 275,
                        "end": 276,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 288,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 299,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 300,
          "end": 310,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 301,
            "end": 310,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 303,
              "end": 310
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 312,
        "end": 413,
        "body": [
          {
            "type": "IfStatement",
            "start": 318,
            "end": 356,
            "test": {
              "type": "BinaryExpression",
              "start": 322,
              "end": 331,
              "left": {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 327,
                "end": 331,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 333,
              "end": 356,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 343,
                  "end": 350,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 361,
            "end": 411,
            "test": {
              "type": "BinaryExpression",
              "start": 365,
              "end": 386,
              "left": {
                "type": "UnaryExpression",
                "start": 365,
                "end": 373,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 378,
                "end": 386,
                "value": "object",
                "raw": "'object'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 388,
              "end": 411,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 398,
                  "end": 405,
                  "expression": {
                    "type": "CallExpression",
                    "start": 398,
                    "end": 404,
                    "callee": {
                      "type": "Identifier",
                      "start": 398,
                      "end": 401,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 402,
                        "end": 403,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 415,
      "end": 545,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 426,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 427,
          "end": 437,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 428,
            "end": 437,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 430,
              "end": 437
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 439,
        "end": 545,
        "body": [
          {
            "type": "IfStatement",
            "start": 445,
            "end": 488,
            "test": {
              "type": "BinaryExpression",
              "start": 449,
              "end": 463,
              "left": {
                "type": "Identifier",
                "start": 449,
                "end": 450,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 454,
                "end": 463,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 465,
              "end": 488,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 475,
                  "end": 482,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 493,
            "end": 543,
            "test": {
              "type": "BinaryExpression",
              "start": 497,
              "end": 518,
              "left": {
                "type": "UnaryExpression",
                "start": 497,
                "end": 505,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 505,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 510,
                "end": 518,
                "value": "object",
                "raw": "'object'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 520,
              "end": 543,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 530,
                  "end": 537,
                  "expression": {
                    "type": "CallExpression",
                    "start": 530,
                    "end": 536,
                    "callee": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 533,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 534,
                        "end": 535,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 547,
      "end": 774,
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 558,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 559,
          "end": 569,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 560,
            "end": 569,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 562,
              "end": 569
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 571,
        "end": 774,
        "body": [
          {
            "type": "IfStatement",
            "start": 577,
            "end": 717,
            "test": {
              "type": "UnaryExpression",
              "start": 581,
              "end": 587,
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "start": 582,
                "end": 587,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 583,
                  "end": 587,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 589,
              "end": 644,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 599,
                  "end": 638,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 603,
                    "end": 605,
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 605,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 607,
                    "end": 638,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 621,
                        "end": 628,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 654,
              "end": 717,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 664,
                  "end": 711,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 668,
                    "end": 678,
                    "left": {
                      "type": "Identifier",
                      "start": 668,
                      "end": 669,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 674,
                      "end": 678,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 680,
                    "end": 711,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 694,
                        "end": 701,
                        "argument": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 722,
            "end": 772,
            "test": {
              "type": "BinaryExpression",
              "start": 726,
              "end": 747,
              "left": {
                "type": "UnaryExpression",
                "start": 726,
                "end": 734,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 733,
                  "end": 734,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 739,
                "end": 747,
                "value": "object",
                "raw": "'object'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 749,
              "end": 772,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 759,
                  "end": 766,
                  "expression": {
                    "type": "CallExpression",
                    "start": 759,
                    "end": 765,
                    "callee": {
                      "type": "Identifier",
                      "start": 759,
                      "end": 762,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 763,
                        "end": 764,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 776,
      "end": 1002,
      "id": {
        "type": "Identifier",
        "start": 785,
        "end": 787,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 788,
          "end": 798,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 789,
            "end": 798,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 791,
              "end": 798
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 800,
        "end": 1002,
        "body": [
          {
            "type": "IfStatement",
            "start": 806,
            "end": 935,
            "test": {
              "type": "BinaryExpression",
              "start": 810,
              "end": 820,
              "left": {
                "type": "Identifier",
                "start": 810,
                "end": 811,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 816,
                "end": 820,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 822,
              "end": 840,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 832,
                  "end": 834,
                  "expression": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 833,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 850,
              "end": 935,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 860,
                  "end": 862,
                  "expression": {
                    "type": "Identifier",
                    "start": 860,
                    "end": 861,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 871,
                  "end": 929,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 875,
                    "end": 896,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 875,
                      "end": 883,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 882,
                        "end": 883,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 888,
                      "end": 896,
                      "value": "object",
                      "raw": "'object'"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 898,
                    "end": 929,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 912,
                        "end": 919,
                        "expression": {
                          "type": "CallExpression",
                          "start": 912,
                          "end": 918,
                          "callee": {
                            "type": "Identifier",
                            "start": 912,
                            "end": 915,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 916,
                              "end": 917,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 940,
            "end": 1000,
            "test": {
              "type": "BinaryExpression",
              "start": 944,
              "end": 965,
              "left": {
                "type": "UnaryExpression",
                "start": 944,
                "end": 952,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 952,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 957,
                "end": 965,
                "value": "object",
                "raw": "'object'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 967,
              "end": 1000,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 977,
                  "end": 984,
                  "expression": {
                    "type": "CallExpression",
                    "start": 977,
                    "end": 983,
                    "callee": {
                      "type": "Identifier",
                      "start": 977,
                      "end": 980,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 981,
                        "end": 982,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
