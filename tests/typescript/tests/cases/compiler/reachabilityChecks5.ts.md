__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1648,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f0",
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
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 22,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 16,
          "end": 22
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 44,
        "body": [
          {
            "type": "WhileStatement",
            "start": 29,
            "end": 42,
            "test": {
              "type": "Literal",
              "start": 36,
              "end": 40,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "EmptyStatement",
              "start": 41,
              "end": 42
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 46,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 57,
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
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 60,
        "end": 68,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 62,
          "end": 68
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 108,
        "body": [
          {
            "type": "IfStatement",
            "start": 75,
            "end": 106,
            "test": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 82,
              "end": 106,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 92,
                  "end": 100,
                  "argument": {
                    "type": "Literal",
                    "start": 99,
                    "end": 100,
                    "value": 1,
                    "raw": "1"
                  }
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
      "start": 110,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 121,
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
          "start": 122,
          "end": 123,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 124,
        "end": 132,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 126,
          "end": 132
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 199,
        "body": [
          {
            "type": "WhileStatement",
            "start": 139,
            "end": 183,
            "test": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 149,
              "end": 183,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 159,
                  "end": 177,
                  "argument": {
                    "type": "NewExpression",
                    "start": 165,
                    "end": 176,
                    "callee": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 174,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "start": 188,
            "end": 197,
            "argument": {
              "type": "Literal",
              "start": 195,
              "end": 196,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 201,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 212,
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
          "start": 213,
          "end": 214,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 215,
        "end": 223,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 217,
          "end": 223
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 224,
        "end": 276,
        "body": [
          {
            "type": "WhileStatement",
            "start": 230,
            "end": 274,
            "test": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 240,
              "end": 274,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 250,
                  "end": 268,
                  "argument": {
                    "type": "NewExpression",
                    "start": 256,
                    "end": 267,
                    "callee": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 265,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 278,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 291,
        "decorators": [],
        "name": "f3_1",
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
          "start": 293,
          "end": 294,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 295,
        "end": 303,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 297,
          "end": 303
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 304,
        "end": 352,
        "body": [
          {
            "type": "WhileStatement",
            "start": 310,
            "end": 327,
            "test": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 320,
              "end": 327,
              "body": []
            }
          },
          {
            "type": "ThrowStatement",
            "start": 332,
            "end": 350,
            "argument": {
              "type": "NewExpression",
              "start": 338,
              "end": 349,
              "callee": {
                "type": "Identifier",
                "start": 342,
                "end": 347,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 354,
      "end": 467,
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 365,
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
          "start": 366,
          "end": 367,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 368,
        "end": 376,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 370,
          "end": 376
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 377,
        "end": 467,
        "body": [
          {
            "type": "TryStatement",
            "start": 383,
            "end": 465,
            "block": {
              "type": "BlockStatement",
              "start": 387,
              "end": 443,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 397,
                  "end": 437,
                  "test": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 402,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 404,
                    "end": 437,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 418,
                        "end": 427,
                        "argument": {
                          "type": "Literal",
                          "start": 425,
                          "end": 426,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 448,
              "end": 465,
              "param": {
                "type": "Identifier",
                "start": 455,
                "end": 456,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 458,
                "end": 465,
                "body": []
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 469,
      "end": 600,
      "id": {
        "type": "Identifier",
        "start": 478,
        "end": 480,
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
          "start": 481,
          "end": 482,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 483,
        "end": 491,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 485,
          "end": 491
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 492,
        "end": 600,
        "body": [
          {
            "type": "TryStatement",
            "start": 498,
            "end": 598,
            "block": {
              "type": "BlockStatement",
              "start": 502,
              "end": 558,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 512,
                  "end": 552,
                  "test": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 517,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 519,
                    "end": 552,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 533,
                        "end": 542,
                        "argument": {
                          "type": "Literal",
                          "start": 540,
                          "end": 541,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 563,
              "end": 598,
              "param": {
                "type": "Identifier",
                "start": 570,
                "end": 571,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 573,
                "end": 598,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 583,
                    "end": 592,
                    "argument": {
                      "type": "Literal",
                      "start": 590,
                      "end": 591,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 602,
      "end": 780,
      "id": {
        "type": "Identifier",
        "start": 611,
        "end": 613,
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
          "start": 614,
          "end": 615,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 616,
        "end": 624,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 618,
          "end": 624
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 625,
        "end": 780,
        "body": [
          {
            "type": "TryStatement",
            "start": 631,
            "end": 778,
            "block": {
              "type": "BlockStatement",
              "start": 635,
              "end": 756,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 645,
                  "end": 750,
                  "test": {
                    "type": "Identifier",
                    "start": 649,
                    "end": 650,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 652,
                    "end": 685,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 666,
                        "end": 675,
                        "argument": {
                          "type": "Literal",
                          "start": 673,
                          "end": 674,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 708,
                    "end": 750,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 722,
                        "end": 740,
                        "argument": {
                          "type": "NewExpression",
                          "start": 728,
                          "end": 739,
                          "callee": {
                            "type": "Identifier",
                            "start": 732,
                            "end": 737,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 761,
              "end": 778,
              "param": {
                "type": "Identifier",
                "start": 768,
                "end": 769,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 771,
                "end": 778,
                "body": []
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 782,
      "end": 969,
      "id": {
        "type": "Identifier",
        "start": 791,
        "end": 793,
        "decorators": [],
        "name": "f7",
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
          "start": 794,
          "end": 795,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 796,
        "end": 804,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 798,
          "end": 804
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 805,
        "end": 969,
        "body": [
          {
            "type": "TryStatement",
            "start": 811,
            "end": 967,
            "block": {
              "type": "BlockStatement",
              "start": 815,
              "end": 927,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 825,
                  "end": 921,
                  "test": {
                    "type": "Identifier",
                    "start": 829,
                    "end": 830,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 832,
                    "end": 865,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 846,
                        "end": 855,
                        "argument": {
                          "type": "Literal",
                          "start": 853,
                          "end": 854,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 879,
                    "end": 921,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 893,
                        "end": 911,
                        "argument": {
                          "type": "NewExpression",
                          "start": 899,
                          "end": 910,
                          "callee": {
                            "type": "Identifier",
                            "start": 903,
                            "end": 908,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 932,
              "end": 967,
              "param": {
                "type": "Identifier",
                "start": 939,
                "end": 940,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 942,
                "end": 967,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 952,
                    "end": 961,
                    "argument": {
                      "type": "Literal",
                      "start": 959,
                      "end": 960,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 971,
      "end": 1147,
      "id": {
        "type": "Identifier",
        "start": 980,
        "end": 982,
        "decorators": [],
        "name": "f8",
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
          "start": 983,
          "end": 984,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 985,
        "end": 993,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 987,
          "end": 993
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 994,
        "end": 1147,
        "body": [
          {
            "type": "TryStatement",
            "start": 1000,
            "end": 1145,
            "block": {
              "type": "BlockStatement",
              "start": 1004,
              "end": 1105,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1014,
                  "end": 1099,
                  "test": {
                    "type": "Literal",
                    "start": 1018,
                    "end": 1022,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1024,
                    "end": 1052,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1038,
                        "end": 1042,
                        "expression": {
                          "type": "UpdateExpression",
                          "start": 1038,
                          "end": 1041,
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 1038,
                            "end": 1039,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1066,
                    "end": 1099,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1080,
                        "end": 1089,
                        "argument": {
                          "type": "Literal",
                          "start": 1087,
                          "end": 1088,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1110,
              "end": 1145,
              "param": {
                "type": "Identifier",
                "start": 1117,
                "end": 1118,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 1120,
                "end": 1145,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1130,
                    "end": 1139,
                    "argument": {
                      "type": "Literal",
                      "start": 1137,
                      "end": 1138,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1149,
      "end": 1287,
      "id": {
        "type": "Identifier",
        "start": 1158,
        "end": 1160,
        "decorators": [],
        "name": "f9",
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
          "start": 1161,
          "end": 1162,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1163,
        "end": 1171,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1165,
          "end": 1171
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1172,
        "end": 1287,
        "body": [
          {
            "type": "TryStatement",
            "start": 1178,
            "end": 1285,
            "block": {
              "type": "BlockStatement",
              "start": 1182,
              "end": 1245,
              "body": [
                {
                  "type": "WhileStatement",
                  "start": 1192,
                  "end": 1239,
                  "test": {
                    "type": "Literal",
                    "start": 1199,
                    "end": 1204,
                    "value": false,
                    "raw": "false"
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 1206,
                    "end": 1239,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1220,
                        "end": 1229,
                        "argument": {
                          "type": "Literal",
                          "start": 1227,
                          "end": 1228,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1250,
              "end": 1285,
              "param": {
                "type": "Identifier",
                "start": 1257,
                "end": 1258,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 1260,
                "end": 1285,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1270,
                    "end": 1279,
                    "argument": {
                      "type": "Literal",
                      "start": 1277,
                      "end": 1278,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1289,
      "end": 1426,
      "id": {
        "type": "Identifier",
        "start": 1298,
        "end": 1301,
        "decorators": [],
        "name": "f10",
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
          "start": 1302,
          "end": 1303,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1304,
        "end": 1312,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1306,
          "end": 1312
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1313,
        "end": 1426,
        "body": [
          {
            "type": "TryStatement",
            "start": 1319,
            "end": 1424,
            "block": {
              "type": "BlockStatement",
              "start": 1323,
              "end": 1384,
              "body": [
                {
                  "type": "DoWhileStatement",
                  "start": 1333,
                  "end": 1378,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1336,
                    "end": 1364,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1350,
                        "end": 1354,
                        "expression": {
                          "type": "UpdateExpression",
                          "start": 1350,
                          "end": 1353,
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 1350,
                            "end": 1351,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1372,
                    "end": 1376,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1389,
              "end": 1424,
              "param": {
                "type": "Identifier",
                "start": 1396,
                "end": 1397,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 1399,
                "end": 1424,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1409,
                    "end": 1418,
                    "argument": {
                      "type": "Literal",
                      "start": 1416,
                      "end": 1417,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1428,
      "end": 1648,
      "id": {
        "type": "Identifier",
        "start": 1437,
        "end": 1440,
        "decorators": [],
        "name": "f11",
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
          "start": 1441,
          "end": 1442,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1443,
        "end": 1451,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1445,
          "end": 1451
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1452,
        "end": 1648,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1458,
            "end": 1646,
            "label": {
              "type": "Identifier",
              "start": 1458,
              "end": 1462,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TryStatement",
              "start": 1468,
              "end": 1646,
              "block": {
                "type": "BlockStatement",
                "start": 1472,
                "end": 1606,
                "body": [
                  {
                    "type": "DoWhileStatement",
                    "start": 1482,
                    "end": 1600,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1485,
                      "end": 1586,
                      "body": [
                        {
                          "type": "DoWhileStatement",
                          "start": 1499,
                          "end": 1559,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1502,
                            "end": 1545,
                            "body": [
                              {
                                "type": "BreakStatement",
                                "start": 1520,
                                "end": 1531,
                                "label": {
                                  "type": "Identifier",
                                  "start": 1526,
                                  "end": 1530,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "test": {
                            "type": "Literal",
                            "start": 1553,
                            "end": 1557,
                            "value": true,
                            "raw": "true"
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1572,
                          "end": 1576,
                          "expression": {
                            "type": "UpdateExpression",
                            "start": 1572,
                            "end": 1575,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 1572,
                              "end": 1573,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "test": {
                      "type": "Literal",
                      "start": 1594,
                      "end": 1598,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "handler": {
                "type": "CatchClause",
                "start": 1611,
                "end": 1646,
                "param": {
                  "type": "Identifier",
                  "start": 1618,
                  "end": 1619,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 1621,
                  "end": 1646,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1631,
                      "end": 1640,
                      "argument": {
                        "type": "Literal",
                        "start": 1638,
                        "end": 1639,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              },
              "finalizer": null
            }
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
