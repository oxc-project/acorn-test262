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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 158,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 158,
        "body": [
          {
            "type": "IfStatement",
            "start": 70,
            "end": 101,
            "alternate": null,
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
            "test": {
              "type": "UnaryExpression",
              "start": 74,
              "end": 76,
              "argument": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 106,
            "end": 156,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 133,
              "end": 156,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 143,
                  "end": 150,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 143,
                    "end": 149,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 146,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 110,
              "end": 131,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 110,
                "end": 118,
                "argument": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
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
                "start": 123,
                "end": 131,
                "raw": "'object'",
                "value": "object",
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
        "start": 49,
        "end": 51,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 160,
      "end": 286,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 184,
        "end": 286,
        "body": [
          {
            "type": "IfStatement",
            "start": 190,
            "end": 229,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 194,
              "end": 204,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 200,
                "end": 204,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 234,
            "end": 284,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 261,
              "end": 284,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 271,
                  "end": 278,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 271,
                    "end": 277,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 274,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 238,
              "end": 259,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 238,
                "end": 246,
                "argument": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
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
                "start": 251,
                "end": 259,
                "raw": "'object'",
                "value": "object",
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
        "start": 169,
        "end": 171,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 288,
      "end": 413,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 312,
        "end": 413,
        "body": [
          {
            "type": "IfStatement",
            "start": 318,
            "end": 356,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 322,
              "end": 331,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 327,
                "end": 331,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 361,
            "end": 411,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 388,
              "end": 411,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 398,
                  "end": 405,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 398,
                    "end": 404,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 398,
                      "end": 401,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 365,
              "end": 386,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 365,
                "end": 373,
                "argument": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
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
                "start": 378,
                "end": 386,
                "raw": "'object'",
                "value": "object",
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
        "start": 297,
        "end": 299,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 415,
      "end": 545,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 439,
        "end": 545,
        "body": [
          {
            "type": "IfStatement",
            "start": 445,
            "end": 488,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 449,
              "end": 463,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 449,
                "end": 450,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 454,
                "end": 463,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 493,
            "end": 543,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 520,
              "end": 543,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 530,
                  "end": 537,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 530,
                    "end": 536,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 533,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 497,
              "end": 518,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 497,
                "end": 505,
                "argument": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 505,
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
                "start": 510,
                "end": 518,
                "raw": "'object'",
                "value": "object",
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
        "start": 424,
        "end": 426,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 547,
      "end": 774,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 571,
        "end": 774,
        "body": [
          {
            "type": "IfStatement",
            "start": 577,
            "end": 717,
            "alternate": {
              "type": "BlockStatement",
              "start": 654,
              "end": 717,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 664,
                  "end": 711,
                  "alternate": null,
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
                  "test": {
                    "type": "BinaryExpression",
                    "start": 668,
                    "end": 678,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 668,
                      "end": 669,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 674,
                      "end": 678,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
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
                  "alternate": null,
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
                  "test": {
                    "type": "UnaryExpression",
                    "start": 603,
                    "end": 605,
                    "argument": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 605,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "!",
                    "prefix": true
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 581,
              "end": 587,
              "argument": {
                "type": "UnaryExpression",
                "start": 582,
                "end": 587,
                "argument": {
                  "type": "Literal",
                  "start": 583,
                  "end": 587,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 722,
            "end": 772,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 749,
              "end": 772,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 759,
                  "end": 766,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 759,
                    "end": 765,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 759,
                      "end": 762,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 726,
              "end": 747,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 726,
                "end": 734,
                "argument": {
                  "type": "Identifier",
                  "start": 733,
                  "end": 734,
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
                "start": 739,
                "end": 747,
                "raw": "'object'",
                "value": "object",
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
        "start": 556,
        "end": 558,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 776,
      "end": 1002,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 800,
        "end": 1002,
        "body": [
          {
            "type": "IfStatement",
            "start": 806,
            "end": 935,
            "alternate": {
              "type": "BlockStatement",
              "start": 850,
              "end": 935,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 860,
                  "end": 862,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 860,
                    "end": 861,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 871,
                  "end": 929,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 898,
                    "end": 929,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 912,
                        "end": 919,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 912,
                          "end": 918,
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
                          "callee": {
                            "type": "Identifier",
                            "start": 912,
                            "end": 915,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 875,
                    "end": 896,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 875,
                      "end": 883,
                      "argument": {
                        "type": "Identifier",
                        "start": 882,
                        "end": 883,
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
                      "start": 888,
                      "end": 896,
                      "raw": "'object'",
                      "value": "object",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 833,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 810,
              "end": 820,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 810,
                "end": 811,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 816,
                "end": 820,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 940,
            "end": 1000,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 967,
              "end": 1000,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 977,
                  "end": 984,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 977,
                    "end": 983,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 977,
                      "end": 980,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 944,
              "end": 965,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 944,
                "end": 952,
                "argument": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 952,
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
                "start": 957,
                "end": 965,
                "raw": "'object'",
                "value": "object",
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
        "start": 785,
        "end": 787,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
