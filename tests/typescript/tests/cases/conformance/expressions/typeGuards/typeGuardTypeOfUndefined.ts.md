__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 71,
              "end": 74
            },
            "start": 69,
            "end": 74
          },
          "start": 68,
          "end": 74
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "prefix": true,
                "start": 86,
                "end": 94
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 99,
                "end": 110
              },
              "start": 86,
              "end": 110
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 134
                      },
                      "prefix": true,
                      "start": 126,
                      "end": 134
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 139,
                      "end": 148
                    },
                    "start": 126,
                    "end": 148
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 165
                        },
                        "directive": null,
                        "start": 164,
                        "end": 166
                      }
                    ],
                    "start": 150,
                    "end": 176
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 204,
                          "end": 205
                        },
                        "directive": null,
                        "start": 204,
                        "end": 206
                      }
                    ],
                    "start": 190,
                    "end": 216
                  },
                  "start": 122,
                  "end": 216
                }
              ],
              "start": 112,
              "end": 222
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 243
                  },
                  "directive": null,
                  "start": 242,
                  "end": 244
                }
              ],
              "start": 232,
              "end": 250
            },
            "start": 82,
            "end": 250
          }
        ],
        "start": 76,
        "end": 252
      },
      "expression": false,
      "start": 53,
      "end": 252
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 268
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 272,
              "end": 275
            },
            "start": 270,
            "end": 275
          },
          "start": 269,
          "end": 275
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 295
                },
                "prefix": true,
                "start": 287,
                "end": 295
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 300,
                "end": 311
              },
              "start": 287,
              "end": 311
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 334,
                        "end": 335
                      },
                      "prefix": true,
                      "start": 327,
                      "end": 335
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 340,
                      "end": 349
                    },
                    "start": 327,
                    "end": 349
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 365,
                          "end": 366
                        },
                        "directive": null,
                        "start": 365,
                        "end": 367
                      }
                    ],
                    "start": 351,
                    "end": 377
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 406
                        },
                        "directive": null,
                        "start": 405,
                        "end": 407
                      }
                    ],
                    "start": 391,
                    "end": 417
                  },
                  "start": 323,
                  "end": 417
                }
              ],
              "start": 313,
              "end": 423
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 443,
                    "end": 444
                  },
                  "directive": null,
                  "start": 443,
                  "end": 445
                }
              ],
              "start": 433,
              "end": 451
            },
            "start": 283,
            "end": 451
          }
        ],
        "start": 277,
        "end": 453
      },
      "expression": false,
      "start": 254,
      "end": 453
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 469
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 473,
              "end": 476
            },
            "start": 471,
            "end": 476
          },
          "start": 470,
          "end": 476
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 495,
                    "end": 496
                  },
                  "prefix": true,
                  "start": 488,
                  "end": 496
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "\"undefined\"",
                  "start": 501,
                  "end": 512
                },
                "start": 488,
                "end": 512
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 523,
                    "end": 524
                  },
                  "prefix": true,
                  "start": 516,
                  "end": 524
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 529,
                  "end": 538
                },
                "start": 516,
                "end": 538
              },
              "start": 488,
              "end": 538
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 544,
                    "end": 545
                  },
                  "directive": null,
                  "start": 544,
                  "end": 546
                }
              ],
              "start": 540,
              "end": 552
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 573
                  },
                  "directive": null,
                  "start": 572,
                  "end": 574
                }
              ],
              "start": 562,
              "end": 580
            },
            "start": 484,
            "end": 580
          }
        ],
        "start": 478,
        "end": 582
      },
      "expression": false,
      "start": 455,
      "end": 582
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 598
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 602,
              "end": 605
            },
            "start": 600,
            "end": 605
          },
          "start": 599,
          "end": 605
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 624,
                    "end": 625
                  },
                  "prefix": true,
                  "start": 617,
                  "end": 625
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "\"undefined\"",
                  "start": 630,
                  "end": 641
                },
                "start": 617,
                "end": 641
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 652,
                    "end": 653
                  },
                  "prefix": true,
                  "start": 645,
                  "end": 653
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 658,
                  "end": 667
                },
                "start": 645,
                "end": 667
              },
              "start": 617,
              "end": 667
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 673,
                    "end": 674
                  },
                  "directive": null,
                  "start": 673,
                  "end": 675
                }
              ],
              "start": 669,
              "end": 681
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 701,
                    "end": 702
                  },
                  "directive": null,
                  "start": 701,
                  "end": 703
                }
              ],
              "start": 691,
              "end": 709
            },
            "start": 613,
            "end": 709
          }
        ],
        "start": 607,
        "end": 711
      },
      "expression": false,
      "start": 584,
      "end": 711
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 722,
        "end": 727
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 731,
                  "end": 738
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 741,
                  "end": 745
                }
              ],
              "start": 731,
              "end": 745
            },
            "start": 729,
            "end": 745
          },
          "start": 728,
          "end": 745
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 764,
                  "end": 765
                },
                "prefix": true,
                "start": 757,
                "end": 765
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 770,
                "end": 781
              },
              "start": 757,
              "end": 781
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 804,
                        "end": 805
                      },
                      "prefix": true,
                      "start": 797,
                      "end": 805
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 810,
                      "end": 819
                    },
                    "start": 797,
                    "end": 819
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 835,
                          "end": 836
                        },
                        "directive": null,
                        "start": 835,
                        "end": 837
                      }
                    ],
                    "start": 821,
                    "end": 847
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 875,
                          "end": 876
                        },
                        "directive": null,
                        "start": 875,
                        "end": 877
                      }
                    ],
                    "start": 861,
                    "end": 887
                  },
                  "start": 793,
                  "end": 887
                }
              ],
              "start": 783,
              "end": 893
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 913,
                    "end": 914
                  },
                  "directive": null,
                  "start": 913,
                  "end": 915
                }
              ],
              "start": 903,
              "end": 921
            },
            "start": 753,
            "end": 921
          }
        ],
        "start": 747,
        "end": 923
      },
      "expression": false,
      "start": 713,
      "end": 923
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test6",
        "optional": false,
        "typeAnnotation": null,
        "start": 934,
        "end": 939
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 943,
                  "end": 950
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 953,
                  "end": 957
                }
              ],
              "start": 943,
              "end": 957
            },
            "start": 941,
            "end": 957
          },
          "start": 940,
          "end": 957
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 977
                },
                "prefix": true,
                "start": 969,
                "end": 977
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 982,
                "end": 993
              },
              "start": 969,
              "end": 993
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1016,
                        "end": 1017
                      },
                      "prefix": true,
                      "start": 1009,
                      "end": 1017
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 1022,
                      "end": 1031
                    },
                    "start": 1009,
                    "end": 1031
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1047,
                          "end": 1048
                        },
                        "directive": null,
                        "start": 1047,
                        "end": 1049
                      }
                    ],
                    "start": 1033,
                    "end": 1059
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1087,
                          "end": 1088
                        },
                        "directive": null,
                        "start": 1087,
                        "end": 1089
                      }
                    ],
                    "start": 1073,
                    "end": 1099
                  },
                  "start": 1005,
                  "end": 1099
                }
              ],
              "start": 995,
              "end": 1105
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1125,
                    "end": 1126
                  },
                  "directive": null,
                  "start": 1125,
                  "end": 1127
                }
              ],
              "start": 1115,
              "end": 1133
            },
            "start": 965,
            "end": 1133
          }
        ],
        "start": 959,
        "end": 1135
      },
      "expression": false,
      "start": 925,
      "end": 1135
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1146,
        "end": 1151
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 1155,
                  "end": 1162
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 1165,
                  "end": 1169
                }
              ],
              "start": 1155,
              "end": 1169
            },
            "start": 1153,
            "end": 1169
          },
          "start": 1152,
          "end": 1169
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1188,
                    "end": 1189
                  },
                  "prefix": true,
                  "start": 1181,
                  "end": 1189
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "\"undefined\"",
                  "start": 1194,
                  "end": 1205
                },
                "start": 1181,
                "end": 1205
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1216,
                    "end": 1217
                  },
                  "prefix": true,
                  "start": 1209,
                  "end": 1217
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 1222,
                  "end": 1231
                },
                "start": 1209,
                "end": 1231
              },
              "start": 1181,
              "end": 1231
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1237,
                    "end": 1238
                  },
                  "directive": null,
                  "start": 1237,
                  "end": 1239
                }
              ],
              "start": 1233,
              "end": 1245
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1265,
                    "end": 1266
                  },
                  "directive": null,
                  "start": 1265,
                  "end": 1267
                }
              ],
              "start": 1255,
              "end": 1273
            },
            "start": 1177,
            "end": 1273
          }
        ],
        "start": 1171,
        "end": 1275
      },
      "expression": false,
      "start": 1137,
      "end": 1275
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1286,
        "end": 1291
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 1295,
                  "end": 1302
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 1305,
                  "end": 1309
                }
              ],
              "start": 1295,
              "end": 1309
            },
            "start": 1293,
            "end": 1309
          },
          "start": 1292,
          "end": 1309
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1328,
                    "end": 1329
                  },
                  "prefix": true,
                  "start": 1321,
                  "end": 1329
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "\"undefined\"",
                  "start": 1334,
                  "end": 1345
                },
                "start": 1321,
                "end": 1345
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1356,
                    "end": 1357
                  },
                  "prefix": true,
                  "start": 1349,
                  "end": 1357
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 1362,
                  "end": 1371
                },
                "start": 1349,
                "end": 1371
              },
              "start": 1321,
              "end": 1371
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1377,
                    "end": 1378
                  },
                  "directive": null,
                  "start": 1377,
                  "end": 1379
                }
              ],
              "start": 1373,
              "end": 1385
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1405,
                    "end": 1406
                  },
                  "directive": null,
                  "start": 1405,
                  "end": 1407
                }
              ],
              "start": 1395,
              "end": 1413
            },
            "start": 1317,
            "end": 1413
          }
        ],
        "start": 1311,
        "end": 1415
      },
      "expression": false,
      "start": 1277,
      "end": 1415
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1426,
        "end": 1431
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 1435,
                  "end": 1442
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1445,
                  "end": 1451
                }
              ],
              "start": 1435,
              "end": 1451
            },
            "start": 1433,
            "end": 1451
          },
          "start": 1432,
          "end": 1451
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1470,
                  "end": 1471
                },
                "prefix": true,
                "start": 1463,
                "end": 1471
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 1476,
                "end": 1487
              },
              "start": 1463,
              "end": 1487
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1510,
                        "end": 1511
                      },
                      "prefix": true,
                      "start": 1503,
                      "end": 1511
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 1516,
                      "end": 1525
                    },
                    "start": 1503,
                    "end": 1525
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1541,
                          "end": 1542
                        },
                        "directive": null,
                        "start": 1541,
                        "end": 1543
                      }
                    ],
                    "start": 1527,
                    "end": 1553
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1581,
                          "end": 1582
                        },
                        "directive": null,
                        "start": 1581,
                        "end": 1583
                      }
                    ],
                    "start": 1567,
                    "end": 1593
                  },
                  "start": 1499,
                  "end": 1593
                }
              ],
              "start": 1489,
              "end": 1599
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1619,
                    "end": 1620
                  },
                  "directive": null,
                  "start": 1619,
                  "end": 1621
                }
              ],
              "start": 1609,
              "end": 1627
            },
            "start": 1459,
            "end": 1627
          }
        ],
        "start": 1453,
        "end": 1629
      },
      "expression": false,
      "start": 1417,
      "end": 1629
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1640,
        "end": 1646
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 1650,
                  "end": 1657
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1660,
                  "end": 1666
                }
              ],
              "start": 1650,
              "end": 1666
            },
            "start": 1648,
            "end": 1666
          },
          "start": 1647,
          "end": 1666
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1685,
                  "end": 1686
                },
                "prefix": true,
                "start": 1678,
                "end": 1686
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 1691,
                "end": 1702
              },
              "start": 1678,
              "end": 1702
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1725,
                        "end": 1726
                      },
                      "prefix": true,
                      "start": 1718,
                      "end": 1726
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 1731,
                      "end": 1740
                    },
                    "start": 1718,
                    "end": 1740
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1756,
                          "end": 1757
                        },
                        "directive": null,
                        "start": 1756,
                        "end": 1758
                      }
                    ],
                    "start": 1742,
                    "end": 1768
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1796,
                          "end": 1797
                        },
                        "directive": null,
                        "start": 1796,
                        "end": 1798
                      }
                    ],
                    "start": 1782,
                    "end": 1808
                  },
                  "start": 1714,
                  "end": 1808
                }
              ],
              "start": 1704,
              "end": 1814
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1834,
                    "end": 1835
                  },
                  "directive": null,
                  "start": 1834,
                  "end": 1836
                }
              ],
              "start": 1824,
              "end": 1842
            },
            "start": 1674,
            "end": 1842
          }
        ],
        "start": 1668,
        "end": 1844
      },
      "expression": false,
      "start": 1631,
      "end": 1844
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1855,
        "end": 1861
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 1865,
                  "end": 1872
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1875,
                  "end": 1881
                }
              ],
              "start": 1865,
              "end": 1881
            },
            "start": 1863,
            "end": 1881
          },
          "start": 1862,
          "end": 1881
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1900,
                    "end": 1901
                  },
                  "prefix": true,
                  "start": 1893,
                  "end": 1901
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "\"undefined\"",
                  "start": 1906,
                  "end": 1917
                },
                "start": 1893,
                "end": 1917
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1928,
                    "end": 1929
                  },
                  "prefix": true,
                  "start": 1921,
                  "end": 1929
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 1934,
                  "end": 1943
                },
                "start": 1921,
                "end": 1943
              },
              "start": 1893,
              "end": 1943
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1949,
                    "end": 1950
                  },
                  "directive": null,
                  "start": 1949,
                  "end": 1951
                }
              ],
              "start": 1945,
              "end": 1957
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1977,
                    "end": 1978
                  },
                  "directive": null,
                  "start": 1977,
                  "end": 1979
                }
              ],
              "start": 1967,
              "end": 1985
            },
            "start": 1889,
            "end": 1985
          }
        ],
        "start": 1883,
        "end": 1987
      },
      "expression": false,
      "start": 1846,
      "end": 1987
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1998,
        "end": 2004
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 2008,
                  "end": 2015
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2018,
                  "end": 2024
                }
              ],
              "start": 2008,
              "end": 2024
            },
            "start": 2006,
            "end": 2024
          },
          "start": 2005,
          "end": 2024
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2043,
                    "end": 2044
                  },
                  "prefix": true,
                  "start": 2036,
                  "end": 2044
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "\"undefined\"",
                  "start": 2049,
                  "end": 2060
                },
                "start": 2036,
                "end": 2060
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2071,
                    "end": 2072
                  },
                  "prefix": true,
                  "start": 2064,
                  "end": 2072
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 2077,
                  "end": 2086
                },
                "start": 2064,
                "end": 2086
              },
              "start": 2036,
              "end": 2086
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2092,
                    "end": 2093
                  },
                  "directive": null,
                  "start": 2092,
                  "end": 2094
                }
              ],
              "start": 2088,
              "end": 2100
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2120,
                    "end": 2121
                  },
                  "directive": null,
                  "start": 2120,
                  "end": 2122
                }
              ],
              "start": 2110,
              "end": 2128
            },
            "start": 2032,
            "end": 2128
          }
        ],
        "start": 2026,
        "end": 2130
      },
      "expression": false,
      "start": 1989,
      "end": 2130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2141,
        "end": 2147
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 2151,
                  "end": 2158
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2161,
                  "end": 2167
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 2170,
                  "end": 2174
                }
              ],
              "start": 2151,
              "end": 2174
            },
            "start": 2149,
            "end": 2174
          },
          "start": 2148,
          "end": 2174
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2193,
                  "end": 2194
                },
                "prefix": true,
                "start": 2186,
                "end": 2194
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 2199,
                "end": 2210
              },
              "start": 2186,
              "end": 2210
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2233,
                        "end": 2234
                      },
                      "prefix": true,
                      "start": 2226,
                      "end": 2234
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 2239,
                      "end": 2248
                    },
                    "start": 2226,
                    "end": 2248
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2264,
                          "end": 2265
                        },
                        "directive": null,
                        "start": 2264,
                        "end": 2266
                      }
                    ],
                    "start": 2250,
                    "end": 2276
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2304,
                          "end": 2305
                        },
                        "directive": null,
                        "start": 2304,
                        "end": 2306
                      }
                    ],
                    "start": 2290,
                    "end": 2316
                  },
                  "start": 2222,
                  "end": 2316
                }
              ],
              "start": 2212,
              "end": 2322
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2342,
                    "end": 2343
                  },
                  "directive": null,
                  "start": 2342,
                  "end": 2344
                }
              ],
              "start": 2332,
              "end": 2350
            },
            "start": 2182,
            "end": 2350
          }
        ],
        "start": 2176,
        "end": 2352
      },
      "expression": false,
      "start": 2132,
      "end": 2352
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2363,
        "end": 2369
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 2373,
                  "end": 2380
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2383,
                  "end": 2389
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 2392,
                  "end": 2396
                }
              ],
              "start": 2373,
              "end": 2396
            },
            "start": 2371,
            "end": 2396
          },
          "start": 2370,
          "end": 2396
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2415,
                  "end": 2416
                },
                "prefix": true,
                "start": 2408,
                "end": 2416
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 2421,
                "end": 2432
              },
              "start": 2408,
              "end": 2432
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2455,
                        "end": 2456
                      },
                      "prefix": true,
                      "start": 2448,
                      "end": 2456
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 2461,
                      "end": 2470
                    },
                    "start": 2448,
                    "end": 2470
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2486,
                          "end": 2487
                        },
                        "directive": null,
                        "start": 2486,
                        "end": 2488
                      }
                    ],
                    "start": 2472,
                    "end": 2498
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2526,
                          "end": 2527
                        },
                        "directive": null,
                        "start": 2526,
                        "end": 2528
                      }
                    ],
                    "start": 2512,
                    "end": 2538
                  },
                  "start": 2444,
                  "end": 2538
                }
              ],
              "start": 2434,
              "end": 2544
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2564,
                    "end": 2565
                  },
                  "directive": null,
                  "start": 2564,
                  "end": 2566
                }
              ],
              "start": 2554,
              "end": 2572
            },
            "start": 2404,
            "end": 2572
          }
        ],
        "start": 2398,
        "end": 2574
      },
      "expression": false,
      "start": 2354,
      "end": 2574
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2585,
        "end": 2591
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 2595,
                  "end": 2602
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2605,
                  "end": 2611
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 2614,
                  "end": 2618
                }
              ],
              "start": 2595,
              "end": 2618
            },
            "start": 2593,
            "end": 2618
          },
          "start": 2592,
          "end": 2618
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2637,
                    "end": 2638
                  },
                  "prefix": true,
                  "start": 2630,
                  "end": 2638
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "\"undefined\"",
                  "start": 2643,
                  "end": 2654
                },
                "start": 2630,
                "end": 2654
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2665,
                    "end": 2666
                  },
                  "prefix": true,
                  "start": 2658,
                  "end": 2666
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 2671,
                  "end": 2680
                },
                "start": 2658,
                "end": 2680
              },
              "start": 2630,
              "end": 2680
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2686,
                    "end": 2687
                  },
                  "directive": null,
                  "start": 2686,
                  "end": 2688
                }
              ],
              "start": 2682,
              "end": 2694
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2714,
                    "end": 2715
                  },
                  "directive": null,
                  "start": 2714,
                  "end": 2716
                }
              ],
              "start": 2704,
              "end": 2722
            },
            "start": 2626,
            "end": 2722
          }
        ],
        "start": 2620,
        "end": 2724
      },
      "expression": false,
      "start": 2576,
      "end": 2724
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2735,
        "end": 2741
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 2745,
                  "end": 2752
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2755,
                  "end": 2761
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 2764,
                  "end": 2768
                }
              ],
              "start": 2745,
              "end": 2768
            },
            "start": 2743,
            "end": 2768
          },
          "start": 2742,
          "end": 2768
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2787,
                    "end": 2788
                  },
                  "prefix": true,
                  "start": 2780,
                  "end": 2788
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "\"undefined\"",
                  "start": 2793,
                  "end": 2804
                },
                "start": 2780,
                "end": 2804
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2815,
                    "end": 2816
                  },
                  "prefix": true,
                  "start": 2808,
                  "end": 2816
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 2821,
                  "end": 2830
                },
                "start": 2808,
                "end": 2830
              },
              "start": 2780,
              "end": 2830
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2836,
                    "end": 2837
                  },
                  "directive": null,
                  "start": 2836,
                  "end": 2838
                }
              ],
              "start": 2832,
              "end": 2844
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2864,
                    "end": 2865
                  },
                  "directive": null,
                  "start": 2864,
                  "end": 2866
                }
              ],
              "start": 2854,
              "end": 2872
            },
            "start": 2776,
            "end": 2872
          }
        ],
        "start": 2770,
        "end": 2874
      },
      "expression": false,
      "start": 2726,
      "end": 2874
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 53,
  "end": 2874
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 53,
    "end": 61,
    "range": [
      53,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 62,
    "end": 67,
    "range": [
      62,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 82,
    "end": 84,
    "range": [
      82,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 86,
    "end": 92,
    "range": [
      86,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 95,
    "end": 98,
    "range": [
      95,
      98
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 99,
    "end": 110,
    "range": [
      99,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 122,
    "end": 124,
    "range": [
      122,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 126,
    "end": 132,
    "range": [
      126,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 135,
    "end": 138,
    "range": [
      135,
      138
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 139,
    "end": 148,
    "range": [
      139,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 185,
    "end": 189,
    "range": [
      185,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 227,
    "end": 231,
    "range": [
      227,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 254,
    "end": 262,
    "range": [
      254,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 263,
    "end": 268,
    "range": [
      263,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 272,
    "end": 275,
    "range": [
      272,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 283,
    "end": 285,
    "range": [
      283,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 287,
    "end": 293,
    "range": [
      287,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 296,
    "end": 299,
    "range": [
      296,
      299
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 300,
    "end": 311,
    "range": [
      300,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 323,
    "end": 325,
    "range": [
      323,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 327,
    "end": 333,
    "range": [
      327,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 336,
    "end": 339,
    "range": [
      336,
      339
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 340,
    "end": 349,
    "range": [
      340,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 386,
    "end": 390,
    "range": [
      386,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 428,
    "end": 432,
    "range": [
      428,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 455,
    "end": 463,
    "range": [
      455,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 464,
    "end": 469,
    "range": [
      464,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 473,
    "end": 476,
    "range": [
      473,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 484,
    "end": 486,
    "range": [
      484,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 488,
    "end": 494,
    "range": [
      488,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 497,
    "end": 500,
    "range": [
      497,
      500
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 501,
    "end": 512,
    "range": [
      501,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 513,
    "end": 515,
    "range": [
      513,
      515
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 516,
    "end": 522,
    "range": [
      516,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 525,
    "end": 528,
    "range": [
      525,
      528
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 529,
    "end": 538,
    "range": [
      529,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 557,
    "end": 561,
    "range": [
      557,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 584,
    "end": 592,
    "range": [
      584,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 593,
    "end": 598,
    "range": [
      593,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 602,
    "end": 605,
    "range": [
      602,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 613,
    "end": 615,
    "range": [
      613,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 617,
    "end": 623,
    "range": [
      617,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 626,
    "end": 629,
    "range": [
      626,
      629
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 630,
    "end": 641,
    "range": [
      630,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 642,
    "end": 644,
    "range": [
      642,
      644
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 645,
    "end": 651,
    "range": [
      645,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 654,
    "end": 657,
    "range": [
      654,
      657
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 658,
    "end": 667,
    "range": [
      658,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 686,
    "end": 690,
    "range": [
      686,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 713,
    "end": 721,
    "range": [
      713,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "test5",
    "start": 722,
    "end": 727,
    "range": [
      722,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 731,
    "end": 738,
    "range": [
      731,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 741,
    "end": 745,
    "range": [
      741,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 753,
    "end": 755,
    "range": [
      753,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 757,
    "end": 763,
    "range": [
      757,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 766,
    "end": 769,
    "range": [
      766,
      769
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 770,
    "end": 781,
    "range": [
      770,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 793,
    "end": 795,
    "range": [
      793,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 797,
    "end": 803,
    "range": [
      797,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 806,
    "end": 809,
    "range": [
      806,
      809
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 810,
    "end": 819,
    "range": [
      810,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 856,
    "end": 860,
    "range": [
      856,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 898,
    "end": 902,
    "range": [
      898,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 925,
    "end": 933,
    "range": [
      925,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "test6",
    "start": 934,
    "end": 939,
    "range": [
      934,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 943,
    "end": 950,
    "range": [
      943,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 953,
    "end": 957,
    "range": [
      953,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 965,
    "end": 967,
    "range": [
      965,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 969,
    "end": 975,
    "range": [
      969,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 978,
    "end": 981,
    "range": [
      978,
      981
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 982,
    "end": 993,
    "range": [
      982,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1005,
    "end": 1007,
    "range": [
      1005,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1009,
    "end": 1015,
    "range": [
      1009,
      1015
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1018,
    "end": 1021,
    "range": [
      1018,
      1021
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1022,
    "end": 1031,
    "range": [
      1022,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1068,
    "end": 1072,
    "range": [
      1068,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1110,
    "end": 1114,
    "range": [
      1110,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1137,
    "end": 1145,
    "range": [
      1137,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "test7",
    "start": 1146,
    "end": 1151,
    "range": [
      1146,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1155,
    "end": 1162,
    "range": [
      1155,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1165,
    "end": 1169,
    "range": [
      1165,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1177,
    "end": 1179,
    "range": [
      1177,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1181,
    "end": 1187,
    "range": [
      1181,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1190,
    "end": 1193,
    "range": [
      1190,
      1193
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 1194,
    "end": 1205,
    "range": [
      1194,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1206,
    "end": 1208,
    "range": [
      1206,
      1208
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1209,
    "end": 1215,
    "range": [
      1209,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1218,
    "end": 1221,
    "range": [
      1218,
      1221
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1222,
    "end": 1231,
    "range": [
      1222,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1250,
    "end": 1254,
    "range": [
      1250,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1277,
    "end": 1285,
    "range": [
      1277,
      1285
    ]
  },
  {
    "type": "Identifier",
    "value": "test8",
    "start": 1286,
    "end": 1291,
    "range": [
      1286,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1295,
    "end": 1302,
    "range": [
      1295,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1305,
    "end": 1309,
    "range": [
      1305,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1317,
    "end": 1319,
    "range": [
      1317,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1321,
    "end": 1327,
    "range": [
      1321,
      1327
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1330,
    "end": 1333,
    "range": [
      1330,
      1333
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 1334,
    "end": 1345,
    "range": [
      1334,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1346,
    "end": 1348,
    "range": [
      1346,
      1348
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1349,
    "end": 1355,
    "range": [
      1349,
      1355
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1358,
    "end": 1361,
    "range": [
      1358,
      1361
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1362,
    "end": 1371,
    "range": [
      1362,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1390,
    "end": 1394,
    "range": [
      1390,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1417,
    "end": 1425,
    "range": [
      1417,
      1425
    ]
  },
  {
    "type": "Identifier",
    "value": "test9",
    "start": 1426,
    "end": 1431,
    "range": [
      1426,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1435,
    "end": 1442,
    "range": [
      1435,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1445,
    "end": 1451,
    "range": [
      1445,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1459,
    "end": 1461,
    "range": [
      1459,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1463,
    "end": 1469,
    "range": [
      1463,
      1469
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1472,
    "end": 1475,
    "range": [
      1472,
      1475
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 1476,
    "end": 1487,
    "range": [
      1476,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1499,
    "end": 1501,
    "range": [
      1499,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1503,
    "end": 1509,
    "range": [
      1503,
      1509
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1512,
    "end": 1515,
    "range": [
      1512,
      1515
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1516,
    "end": 1525,
    "range": [
      1516,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1562,
    "end": 1566,
    "range": [
      1562,
      1566
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1604,
    "end": 1608,
    "range": [
      1604,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1631,
    "end": 1639,
    "range": [
      1631,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "test10",
    "start": 1640,
    "end": 1646,
    "range": [
      1640,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1650,
    "end": 1657,
    "range": [
      1650,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1660,
    "end": 1666,
    "range": [
      1660,
      1666
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1674,
    "end": 1676,
    "range": [
      1674,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1678,
    "end": 1684,
    "range": [
      1678,
      1684
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1687,
    "end": 1690,
    "range": [
      1687,
      1690
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 1691,
    "end": 1702,
    "range": [
      1691,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1714,
    "end": 1716,
    "range": [
      1714,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1718,
    "end": 1724,
    "range": [
      1718,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1727,
    "end": 1730,
    "range": [
      1727,
      1730
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1731,
    "end": 1740,
    "range": [
      1731,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1777,
    "end": 1781,
    "range": [
      1777,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1819,
    "end": 1823,
    "range": [
      1819,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1846,
    "end": 1854,
    "range": [
      1846,
      1854
    ]
  },
  {
    "type": "Identifier",
    "value": "test11",
    "start": 1855,
    "end": 1861,
    "range": [
      1855,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1865,
    "end": 1872,
    "range": [
      1865,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1875,
    "end": 1881,
    "range": [
      1875,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1889,
    "end": 1891,
    "range": [
      1889,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1893,
    "end": 1899,
    "range": [
      1893,
      1899
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1902,
    "end": 1905,
    "range": [
      1902,
      1905
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 1906,
    "end": 1917,
    "range": [
      1906,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1918,
    "end": 1920,
    "range": [
      1918,
      1920
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1921,
    "end": 1927,
    "range": [
      1921,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1930,
    "end": 1933,
    "range": [
      1930,
      1933
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1934,
    "end": 1943,
    "range": [
      1934,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1962,
    "end": 1966,
    "range": [
      1962,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1989,
    "end": 1997,
    "range": [
      1989,
      1997
    ]
  },
  {
    "type": "Identifier",
    "value": "test12",
    "start": 1998,
    "end": 2004,
    "range": [
      1998,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2008,
    "end": 2015,
    "range": [
      2008,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2018,
    "end": 2024,
    "range": [
      2018,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2032,
    "end": 2034,
    "range": [
      2032,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2036,
    "end": 2042,
    "range": [
      2036,
      2042
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2045,
    "end": 2048,
    "range": [
      2045,
      2048
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 2049,
    "end": 2060,
    "range": [
      2049,
      2060
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2061,
    "end": 2063,
    "range": [
      2061,
      2063
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2064,
    "end": 2070,
    "range": [
      2064,
      2070
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2073,
    "end": 2076,
    "range": [
      2073,
      2076
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 2077,
    "end": 2086,
    "range": [
      2077,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094,
    "range": [
      2093,
      2094
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2105,
    "end": 2109,
    "range": [
      2105,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2132,
    "end": 2140,
    "range": [
      2132,
      2140
    ]
  },
  {
    "type": "Identifier",
    "value": "test13",
    "start": 2141,
    "end": 2147,
    "range": [
      2141,
      2147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2148,
    "end": 2149,
    "range": [
      2148,
      2149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2151,
    "end": 2158,
    "range": [
      2151,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2161,
    "end": 2167,
    "range": [
      2161,
      2167
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2168,
    "end": 2169,
    "range": [
      2168,
      2169
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2170,
    "end": 2174,
    "range": [
      2170,
      2174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2182,
    "end": 2184,
    "range": [
      2182,
      2184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2186,
    "end": 2192,
    "range": [
      2186,
      2192
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2195,
    "end": 2198,
    "range": [
      2195,
      2198
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 2199,
    "end": 2210,
    "range": [
      2199,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2222,
    "end": 2224,
    "range": [
      2222,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2226,
    "end": 2232,
    "range": [
      2226,
      2232
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2235,
    "end": 2238,
    "range": [
      2235,
      2238
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 2239,
    "end": 2248,
    "range": [
      2239,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2285,
    "end": 2289,
    "range": [
      2285,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2305,
    "end": 2306,
    "range": [
      2305,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2321,
    "end": 2322,
    "range": [
      2321,
      2322
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2327,
    "end": 2331,
    "range": [
      2327,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2354,
    "end": 2362,
    "range": [
      2354,
      2362
    ]
  },
  {
    "type": "Identifier",
    "value": "test14",
    "start": 2363,
    "end": 2369,
    "range": [
      2363,
      2369
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2369,
    "end": 2370,
    "range": [
      2369,
      2370
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2373,
    "end": 2380,
    "range": [
      2373,
      2380
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2381,
    "end": 2382,
    "range": [
      2381,
      2382
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2383,
    "end": 2389,
    "range": [
      2383,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2392,
    "end": 2396,
    "range": [
      2392,
      2396
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2404,
    "end": 2406,
    "range": [
      2404,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2408,
    "end": 2414,
    "range": [
      2408,
      2414
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2417,
    "end": 2420,
    "range": [
      2417,
      2420
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 2421,
    "end": 2432,
    "range": [
      2421,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2444,
    "end": 2446,
    "range": [
      2444,
      2446
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2448,
    "end": 2454,
    "range": [
      2448,
      2454
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2455,
    "end": 2456,
    "range": [
      2455,
      2456
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2457,
    "end": 2460,
    "range": [
      2457,
      2460
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 2461,
    "end": 2470,
    "range": [
      2461,
      2470
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2470,
    "end": 2471,
    "range": [
      2470,
      2471
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2497,
    "end": 2498,
    "range": [
      2497,
      2498
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2507,
    "end": 2511,
    "range": [
      2507,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2549,
    "end": 2553,
    "range": [
      2549,
      2553
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2554,
    "end": 2555,
    "range": [
      2554,
      2555
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2564,
    "end": 2565,
    "range": [
      2564,
      2565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2565,
    "end": 2566,
    "range": [
      2565,
      2566
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2571,
    "end": 2572,
    "range": [
      2571,
      2572
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2573,
    "end": 2574,
    "range": [
      2573,
      2574
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2576,
    "end": 2584,
    "range": [
      2576,
      2584
    ]
  },
  {
    "type": "Identifier",
    "value": "test15",
    "start": 2585,
    "end": 2591,
    "range": [
      2585,
      2591
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2591,
    "end": 2592,
    "range": [
      2591,
      2592
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2593,
    "end": 2594,
    "range": [
      2593,
      2594
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2595,
    "end": 2602,
    "range": [
      2595,
      2602
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2605,
    "end": 2611,
    "range": [
      2605,
      2611
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2612,
    "end": 2613,
    "range": [
      2612,
      2613
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2614,
    "end": 2618,
    "range": [
      2614,
      2618
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2618,
    "end": 2619,
    "range": [
      2618,
      2619
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2620,
    "end": 2621,
    "range": [
      2620,
      2621
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2626,
    "end": 2628,
    "range": [
      2626,
      2628
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2630,
    "end": 2636,
    "range": [
      2630,
      2636
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2637,
    "end": 2638,
    "range": [
      2637,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2639,
    "end": 2642,
    "range": [
      2639,
      2642
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 2643,
    "end": 2654,
    "range": [
      2643,
      2654
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 2655,
    "end": 2657,
    "range": [
      2655,
      2657
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2658,
    "end": 2664,
    "range": [
      2658,
      2664
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2665,
    "end": 2666,
    "range": [
      2665,
      2666
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2667,
    "end": 2670,
    "range": [
      2667,
      2670
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 2671,
    "end": 2680,
    "range": [
      2671,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2682,
    "end": 2683,
    "range": [
      2682,
      2683
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2686,
    "end": 2687,
    "range": [
      2686,
      2687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2687,
    "end": 2688,
    "range": [
      2687,
      2688
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2699,
    "end": 2703,
    "range": [
      2699,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2715,
    "end": 2716,
    "range": [
      2715,
      2716
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2723,
    "end": 2724,
    "range": [
      2723,
      2724
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2726,
    "end": 2734,
    "range": [
      2726,
      2734
    ]
  },
  {
    "type": "Identifier",
    "value": "test16",
    "start": 2735,
    "end": 2741,
    "range": [
      2735,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2745,
    "end": 2752,
    "range": [
      2745,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2755,
    "end": 2761,
    "range": [
      2755,
      2761
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2762,
    "end": 2763,
    "range": [
      2762,
      2763
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2764,
    "end": 2768,
    "range": [
      2764,
      2768
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2776,
    "end": 2778,
    "range": [
      2776,
      2778
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2779,
    "end": 2780,
    "range": [
      2779,
      2780
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2780,
    "end": 2786,
    "range": [
      2780,
      2786
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2787,
    "end": 2788,
    "range": [
      2787,
      2788
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2789,
    "end": 2792,
    "range": [
      2789,
      2792
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 2793,
    "end": 2804,
    "range": [
      2793,
      2804
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2805,
    "end": 2807,
    "range": [
      2805,
      2807
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2808,
    "end": 2814,
    "range": [
      2808,
      2814
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2815,
    "end": 2816,
    "range": [
      2815,
      2816
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2817,
    "end": 2820,
    "range": [
      2817,
      2820
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 2821,
    "end": 2830,
    "range": [
      2821,
      2830
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2830,
    "end": 2831,
    "range": [
      2830,
      2831
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2832,
    "end": 2833,
    "range": [
      2832,
      2833
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2843,
    "end": 2844,
    "range": [
      2843,
      2844
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2849,
    "end": 2853,
    "range": [
      2849,
      2853
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2854,
    "end": 2855,
    "range": [
      2854,
      2855
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2864,
    "end": 2865,
    "range": [
      2864,
      2865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2865,
    "end": 2866,
    "range": [
      2865,
      2866
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2871,
    "end": 2872,
    "range": [
      2871,
      2872
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2873,
    "end": 2874,
    "range": [
      2873,
      2874
    ]
  }
]
```
