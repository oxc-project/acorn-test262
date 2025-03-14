controlFlowNoImplicitAny.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2269,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 25,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 18,
                "end": 25
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 242,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 242,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 105,
            "end": 111,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 109,
                "end": 110,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 116,
            "end": 148,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 126,
              "end": 148,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 136,
                  "end": 142,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 136,
                    "end": 141,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 140,
                      "end": 141,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 120,
              "end": 124,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 153,
            "end": 191,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 163,
              "end": 191,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 173,
                  "end": 185,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 173,
                    "end": 184,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 177,
                      "end": 184,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 157,
              "end": 161,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 196,
            "end": 208,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 202,
                "end": 207,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 313,
      "end": 482,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 327,
        "end": 482,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 333,
            "end": 351,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 337,
                "end": 350,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 338,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 350,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 356,
            "end": 388,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 366,
              "end": 388,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 376,
                  "end": 382,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 376,
                    "end": 381,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 377,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 380,
                      "end": 381,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 360,
              "end": 364,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 393,
            "end": 431,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 403,
              "end": 431,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 413,
                  "end": 425,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 413,
                    "end": 424,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 414,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 417,
                      "end": 424,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 397,
              "end": 401,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 436,
            "end": 448,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 442,
                "end": 447,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 443,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 447,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 324,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 548,
      "end": 707,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 562,
        "end": 707,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 568,
            "end": 581,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 572,
                "end": 580,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 573,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 576,
                  "end": 580,
                  "raw": "null",
                  "value": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 586,
            "end": 618,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 596,
              "end": 618,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 606,
                  "end": 612,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 606,
                    "end": 611,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 606,
                      "end": 607,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 610,
                      "end": 611,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 590,
              "end": 594,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 623,
            "end": 661,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 633,
              "end": 661,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 643,
                  "end": 655,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 643,
                    "end": 654,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 643,
                      "end": 644,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 647,
                      "end": 654,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 627,
              "end": 631,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 666,
            "end": 678,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 672,
                "end": 677,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 673,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 677,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 557,
        "end": 559,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 755,
      "end": 893,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 769,
        "end": 893,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 775,
            "end": 786,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 779,
                "end": 785,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 785,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 780,
                    "end": 785,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 782,
                      "end": 785
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
            "type": "IfStatement",
            "start": 791,
            "end": 823,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 801,
              "end": 823,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 811,
                  "end": 817,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 811,
                    "end": 816,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 811,
                      "end": 812,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 815,
                      "end": 816,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 795,
              "end": 799,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 828,
            "end": 866,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 838,
              "end": 866,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 848,
                  "end": 860,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 848,
                    "end": 859,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 848,
                      "end": 849,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 852,
                      "end": 859,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 832,
              "end": 836,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 871,
            "end": 883,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 877,
                "end": 882,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 877,
                  "end": 878,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 882,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 764,
        "end": 766,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 952,
      "end": 1109,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 966,
        "end": 1109,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 972,
            "end": 978,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 976,
                "end": 977,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 976,
                  "end": 977,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 983,
            "end": 1015,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 993,
              "end": 1015,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1003,
                  "end": 1009,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1003,
                    "end": 1008,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1003,
                      "end": 1004,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1007,
                      "end": 1008,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 987,
              "end": 991,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 1020,
            "end": 1058,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1030,
              "end": 1058,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1040,
                  "end": 1052,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1040,
                    "end": 1051,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1040,
                      "end": 1041,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1044,
                      "end": 1051,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1024,
              "end": 1028,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1063,
            "end": 1075,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1069,
                "end": 1074,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1069,
                  "end": 1070,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1073,
                  "end": 1074,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 961,
        "end": 963,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1180,
      "end": 1349,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1194,
        "end": 1349,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1200,
            "end": 1218,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1204,
                "end": 1217,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1204,
                  "end": 1205,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1208,
                  "end": 1217,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 1223,
            "end": 1255,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1233,
              "end": 1255,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1243,
                  "end": 1249,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1243,
                    "end": 1248,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1243,
                      "end": 1244,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1247,
                      "end": 1248,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1227,
              "end": 1231,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 1260,
            "end": 1298,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1270,
              "end": 1298,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1280,
                  "end": 1292,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1280,
                    "end": 1291,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1280,
                      "end": 1281,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1284,
                      "end": 1291,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1264,
              "end": 1268,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1303,
            "end": 1315,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1309,
                "end": 1314,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1309,
                  "end": 1310,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1313,
                  "end": 1314,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1189,
        "end": 1191,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1415,
      "end": 1574,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1429,
        "end": 1574,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1435,
            "end": 1448,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1439,
                "end": 1447,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1439,
                  "end": 1440,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1443,
                  "end": 1447,
                  "raw": "null",
                  "value": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 1453,
            "end": 1485,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1463,
              "end": 1485,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1473,
                  "end": 1479,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1473,
                    "end": 1478,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1473,
                      "end": 1474,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1477,
                      "end": 1478,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1457,
              "end": 1461,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 1490,
            "end": 1528,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1500,
              "end": 1528,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1510,
                  "end": 1522,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1510,
                    "end": 1521,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1510,
                      "end": 1511,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1514,
                      "end": 1521,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1494,
              "end": 1498,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1533,
            "end": 1545,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1539,
                "end": 1544,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1539,
                  "end": 1540,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1543,
                  "end": 1544,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1424,
        "end": 1426,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1622,
      "end": 1760,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1636,
        "end": 1760,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1642,
            "end": 1653,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1646,
                "end": 1652,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1646,
                  "end": 1652,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1647,
                    "end": 1652,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1649,
                      "end": 1652
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 1658,
            "end": 1690,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1668,
              "end": 1690,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1678,
                  "end": 1684,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1678,
                    "end": 1683,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1678,
                      "end": 1679,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1682,
                      "end": 1683,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1662,
              "end": 1666,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 1695,
            "end": 1733,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1705,
              "end": 1733,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1715,
                  "end": 1727,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1715,
                    "end": 1726,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1715,
                      "end": 1716,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1719,
                      "end": 1726,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1699,
              "end": 1703,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1738,
            "end": 1750,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1744,
                "end": 1749,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1744,
                  "end": 1745,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1748,
                  "end": 1749,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1631,
        "end": 1633,
        "decorators": [],
        "name": "f8",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1801,
      "end": 2012,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1815,
        "end": 2012,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1821,
            "end": 1827,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1825,
                "end": 1826,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1825,
                  "end": 1826,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 1832,
            "end": 1864,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1842,
              "end": 1864,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1852,
                  "end": 1858,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1852,
                    "end": 1857,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1852,
                      "end": 1853,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1856,
                      "end": 1857,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1836,
              "end": 1840,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 1869,
            "end": 1907,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1879,
              "end": 1907,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1889,
                  "end": 1901,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1889,
                    "end": 1900,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1889,
                      "end": 1890,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1893,
                      "end": 1900,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1873,
              "end": 1877,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1912,
            "end": 1924,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1918,
                "end": 1923,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1918,
                  "end": 1919,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1922,
                  "end": 1923,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "FunctionDeclaration",
            "start": 1961,
            "end": 2010,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1974,
              "end": 2010,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1984,
                  "end": 1996,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1990,
                      "end": 1995,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1990,
                        "end": 1991,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1994,
                        "end": 1995,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 1970,
              "end": 1971,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1810,
        "end": 1812,
        "decorators": [],
        "name": "f9",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 2053,
      "end": 2269,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2068,
        "end": 2269,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2074,
            "end": 2080,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2078,
                "end": 2079,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2078,
                  "end": 2079,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 2085,
            "end": 2117,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2095,
              "end": 2117,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2105,
                  "end": 2111,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2105,
                    "end": 2110,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2105,
                      "end": 2106,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2109,
                      "end": 2110,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 2089,
              "end": 2093,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 2122,
            "end": 2160,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2132,
              "end": 2160,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2142,
                  "end": 2154,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2142,
                    "end": 2153,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2142,
                      "end": 2143,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2146,
                      "end": 2153,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 2126,
              "end": 2130,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 2165,
            "end": 2177,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2171,
                "end": 2176,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2171,
                  "end": 2172,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 2175,
                  "end": 2176,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2214,
            "end": 2267,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2220,
                "end": 2266,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2220,
                  "end": 2221,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2224,
                  "end": 2266,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2230,
                    "end": 2266,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 2240,
                        "end": 2252,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2246,
                            "end": 2251,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 2246,
                              "end": 2247,
                              "decorators": [],
                              "name": "z",
                              "optional": false
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 2250,
                              "end": 2251,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2062,
        "end": 2065,
        "decorators": [],
        "name": "f10",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
