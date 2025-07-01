__ESTREE_TEST__:PASS:
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
