__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 316,
  "end": 3999,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 316,
      "end": 473,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 328,
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
          "start": 329,
          "end": 347,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 330,
            "end": 347,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 332,
              "end": 347,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 332,
                  "end": 338
                },
                {
                  "type": "TSStringKeyword",
                  "start": 341,
                  "end": 347
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
        "start": 349,
        "end": 473,
        "body": [
          {
            "type": "IfStatement",
            "start": 355,
            "end": 471,
            "test": {
              "type": "BinaryExpression",
              "start": 359,
              "end": 380,
              "left": {
                "type": "UnaryExpression",
                "start": 359,
                "end": 367,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 372,
                "end": 380,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 382,
              "end": 424,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 392,
                  "end": 408,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 399,
                    "end": 407,
                    "object": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 400,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 407,
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
            "alternate": {
              "type": "BlockStatement",
              "start": 434,
              "end": 471,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 444,
                  "end": 455,
                  "argument": {
                    "type": "UpdateExpression",
                    "start": 451,
                    "end": 454,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 451,
                      "end": 452,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
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
      "start": 474,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 483,
        "end": 487,
        "name": "foo2",
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
          "start": 488,
          "end": 506,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 489,
            "end": 506,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 491,
              "end": 506,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 491,
                  "end": 497
                },
                {
                  "type": "TSStringKeyword",
                  "start": 500,
                  "end": 506
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
        "start": 508,
        "end": 639,
        "body": [
          {
            "type": "IfStatement",
            "start": 514,
            "end": 637,
            "test": {
              "type": "BinaryExpression",
              "start": 518,
              "end": 539,
              "left": {
                "type": "UnaryExpression",
                "start": 518,
                "end": 526,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 526,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 531,
                "end": 539,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 541,
              "end": 592,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 551,
                  "end": 558,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 551,
                    "end": 557,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 552,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 555,
                      "end": 557,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 567,
                  "end": 576,
                  "argument": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 575,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 602,
              "end": 637,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 612,
                  "end": 621,
                  "argument": {
                    "type": "Identifier",
                    "start": 619,
                    "end": 620,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "start": 640,
      "end": 810,
      "id": {
        "type": "Identifier",
        "start": 649,
        "end": 653,
        "name": "foo3",
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
          "start": 654,
          "end": 672,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 655,
            "end": 672,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 657,
              "end": 672,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 657,
                  "end": 663
                },
                {
                  "type": "TSStringKeyword",
                  "start": 666,
                  "end": 672
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
        "start": 674,
        "end": 810,
        "body": [
          {
            "type": "IfStatement",
            "start": 680,
            "end": 808,
            "test": {
              "type": "BinaryExpression",
              "start": 684,
              "end": 705,
              "left": {
                "type": "UnaryExpression",
                "start": 684,
                "end": 692,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 692,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 697,
                "end": 705,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 707,
              "end": 763,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 717,
                  "end": 729,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 717,
                    "end": 728,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 717,
                      "end": 718,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 721,
                      "end": 728,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 738,
                  "end": 747,
                  "argument": {
                    "type": "Identifier",
                    "start": 745,
                    "end": 746,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 773,
              "end": 808,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 783,
                  "end": 792,
                  "argument": {
                    "type": "Identifier",
                    "start": 790,
                    "end": 791,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "start": 811,
      "end": 976,
      "id": {
        "type": "Identifier",
        "start": 820,
        "end": 824,
        "name": "foo4",
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
          "start": 825,
          "end": 843,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 826,
            "end": 843,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 828,
              "end": 843,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 828,
                  "end": 834
                },
                {
                  "type": "TSStringKeyword",
                  "start": 837,
                  "end": 843
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
        "start": 845,
        "end": 976,
        "body": [
          {
            "type": "IfStatement",
            "start": 851,
            "end": 974,
            "test": {
              "type": "BinaryExpression",
              "start": 855,
              "end": 876,
              "left": {
                "type": "UnaryExpression",
                "start": 855,
                "end": 863,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 862,
                  "end": 863,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 868,
                "end": 876,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 878,
              "end": 913,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 888,
                  "end": 897,
                  "argument": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 896,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 923,
              "end": 974,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 933,
                  "end": 940,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 933,
                    "end": 939,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 933,
                      "end": 934,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 937,
                      "end": 939,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 949,
                  "end": 958,
                  "argument": {
                    "type": "Identifier",
                    "start": 956,
                    "end": 957,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "start": 977,
      "end": 1147,
      "id": {
        "type": "Identifier",
        "start": 986,
        "end": 990,
        "name": "foo5",
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
          "start": 991,
          "end": 1009,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 992,
            "end": 1009,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 994,
              "end": 1009,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 994,
                  "end": 1000
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1003,
                  "end": 1009
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
        "start": 1011,
        "end": 1147,
        "body": [
          {
            "type": "IfStatement",
            "start": 1017,
            "end": 1145,
            "test": {
              "type": "BinaryExpression",
              "start": 1021,
              "end": 1042,
              "left": {
                "type": "UnaryExpression",
                "start": 1021,
                "end": 1029,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1029,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1034,
                "end": 1042,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1044,
              "end": 1079,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1054,
                  "end": 1063,
                  "argument": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1062,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1089,
              "end": 1145,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1099,
                  "end": 1111,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1099,
                    "end": 1110,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1099,
                      "end": 1100,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1103,
                      "end": 1110,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 1120,
                  "end": 1129,
                  "argument": {
                    "type": "Identifier",
                    "start": 1127,
                    "end": 1128,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "start": 1148,
      "end": 1334,
      "id": {
        "type": "Identifier",
        "start": 1157,
        "end": 1161,
        "name": "foo6",
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
          "start": 1162,
          "end": 1180,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1163,
            "end": 1180,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1165,
              "end": 1180,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1165,
                  "end": 1171
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1174,
                  "end": 1180
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
        "start": 1182,
        "end": 1334,
        "body": [
          {
            "type": "IfStatement",
            "start": 1188,
            "end": 1332,
            "test": {
              "type": "BinaryExpression",
              "start": 1192,
              "end": 1213,
              "left": {
                "type": "UnaryExpression",
                "start": 1192,
                "end": 1200,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1199,
                  "end": 1200,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1205,
                "end": 1213,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1215,
              "end": 1266,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1225,
                  "end": 1232,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1225,
                    "end": 1231,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1225,
                      "end": 1226,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1229,
                      "end": 1231,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 1241,
                  "end": 1250,
                  "argument": {
                    "type": "Identifier",
                    "start": 1248,
                    "end": 1249,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1276,
              "end": 1332,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1286,
                  "end": 1298,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1286,
                    "end": 1297,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1286,
                      "end": 1287,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1290,
                      "end": 1297,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 1307,
                  "end": 1316,
                  "argument": {
                    "type": "Identifier",
                    "start": 1314,
                    "end": 1315,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "start": 1335,
      "end": 1586,
      "id": {
        "type": "Identifier",
        "start": 1344,
        "end": 1348,
        "name": "foo7",
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
          "start": 1349,
          "end": 1377,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1350,
            "end": 1377,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1352,
              "end": 1377,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1352,
                  "end": 1358
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1361,
                  "end": 1367
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1370,
                  "end": 1377
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
        "start": 1379,
        "end": 1586,
        "body": [
          {
            "type": "IfStatement",
            "start": 1385,
            "end": 1584,
            "test": {
              "type": "BinaryExpression",
              "start": 1389,
              "end": 1410,
              "left": {
                "type": "UnaryExpression",
                "start": 1389,
                "end": 1397,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1396,
                  "end": 1397,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1402,
                "end": 1410,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1412,
              "end": 1459,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1422,
                  "end": 1443,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 1429,
                    "end": 1442,
                    "left": {
                      "type": "Identifier",
                      "start": 1429,
                      "end": 1430,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1435,
                      "end": 1442,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 1469,
              "end": 1584,
              "test": {
                "type": "BinaryExpression",
                "start": 1473,
                "end": 1495,
                "left": {
                  "type": "UnaryExpression",
                  "start": 1473,
                  "end": 1481,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 1480,
                    "end": 1481,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1486,
                  "end": 1495,
                  "value": "boolean",
                  "raw": "\"boolean\""
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 1497,
                "end": 1533,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1507,
                    "end": 1516,
                    "argument": {
                      "type": "Identifier",
                      "start": 1514,
                      "end": 1515,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 1543,
                "end": 1584,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1553,
                    "end": 1568,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1560,
                      "end": 1567,
                      "left": {
                        "type": "Identifier",
                        "start": 1560,
                        "end": 1561,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "start": 1565,
                        "end": 1567,
                        "value": 10,
                        "raw": "10"
                      }
                    }
                  }
                ]
              }
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
      "start": 1587,
      "end": 1932,
      "id": {
        "type": "Identifier",
        "start": 1596,
        "end": 1600,
        "name": "foo8",
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
          "start": 1601,
          "end": 1629,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1602,
            "end": 1629,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1604,
              "end": 1629,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1604,
                  "end": 1610
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1613,
                  "end": 1619
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1622,
                  "end": 1629
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
        "start": 1631,
        "end": 1932,
        "body": [
          {
            "type": "IfStatement",
            "start": 1637,
            "end": 1930,
            "test": {
              "type": "BinaryExpression",
              "start": 1641,
              "end": 1662,
              "left": {
                "type": "UnaryExpression",
                "start": 1641,
                "end": 1649,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1648,
                  "end": 1649,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1654,
                "end": 1662,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1664,
              "end": 1711,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1674,
                  "end": 1695,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 1681,
                    "end": 1694,
                    "left": {
                      "type": "Identifier",
                      "start": 1681,
                      "end": 1682,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1687,
                      "end": 1694,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1721,
              "end": 1930,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1731,
                  "end": 1759,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1735,
                      "end": 1758,
                      "id": {
                        "type": "Identifier",
                        "start": 1735,
                        "end": 1754,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1736,
                          "end": 1754,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 1738,
                            "end": 1754,
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1738,
                                "end": 1744
                              },
                              {
                                "type": "TSBooleanKeyword",
                                "start": 1747,
                                "end": 1754
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1757,
                        "end": 1758,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 1789,
                  "end": 1924,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1793,
                    "end": 1815,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1793,
                      "end": 1801,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 1800,
                        "end": 1801,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1806,
                      "end": 1815,
                      "value": "boolean",
                      "raw": "\"boolean\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1817,
                    "end": 1861,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1831,
                        "end": 1840,
                        "argument": {
                          "type": "Identifier",
                          "start": 1838,
                          "end": 1839,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1875,
                    "end": 1924,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1889,
                        "end": 1904,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 1896,
                          "end": 1903,
                          "left": {
                            "type": "Identifier",
                            "start": 1896,
                            "end": 1897,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "start": 1901,
                            "end": 1903,
                            "value": 10,
                            "raw": "10"
                          }
                        }
                      }
                    ]
                  }
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
      "start": 1933,
      "end": 2238,
      "id": {
        "type": "Identifier",
        "start": 1942,
        "end": 1946,
        "name": "foo9",
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
          "start": 1947,
          "end": 1965,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1948,
            "end": 1965,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1950,
              "end": 1965,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1950,
                  "end": 1956
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1959,
                  "end": 1965
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
        "start": 1967,
        "end": 2238,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1973,
            "end": 1984,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1977,
                "end": 1983,
                "id": {
                  "type": "Identifier",
                  "start": 1977,
                  "end": 1978,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1981,
                  "end": 1983,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1989,
            "end": 2236,
            "test": {
              "type": "BinaryExpression",
              "start": 1993,
              "end": 2014,
              "left": {
                "type": "UnaryExpression",
                "start": 1993,
                "end": 2001,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 2000,
                  "end": 2001,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2006,
                "end": 2014,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2016,
              "end": 2185,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2125,
                  "end": 2138,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2125,
                    "end": 2137,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2125,
                      "end": 2126,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 2129,
                      "end": 2137,
                      "object": {
                        "type": "Identifier",
                        "start": 2129,
                        "end": 2130,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2131,
                        "end": 2137,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 2148,
                  "end": 2169,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 2155,
                    "end": 2168,
                    "left": {
                      "type": "Identifier",
                      "start": 2155,
                      "end": 2156,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 2161,
                      "end": 2168,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2195,
              "end": 2236,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2205,
                  "end": 2220,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 2212,
                    "end": 2219,
                    "left": {
                      "type": "Identifier",
                      "start": 2212,
                      "end": 2213,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 2217,
                      "end": 2219,
                      "value": 10,
                      "raw": "10"
                    }
                  }
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
      "start": 2239,
      "end": 2653,
      "id": {
        "type": "Identifier",
        "start": 2248,
        "end": 2253,
        "name": "foo10",
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
          "start": 2254,
          "end": 2282,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2255,
            "end": 2282,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2257,
              "end": 2282,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2257,
                  "end": 2263
                },
                {
                  "type": "TSStringKeyword",
                  "start": 2266,
                  "end": 2272
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2275,
                  "end": 2282
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
        "start": 2284,
        "end": 2653,
        "body": [
          {
            "type": "IfStatement",
            "start": 2378,
            "end": 2651,
            "test": {
              "type": "BinaryExpression",
              "start": 2382,
              "end": 2403,
              "left": {
                "type": "UnaryExpression",
                "start": 2382,
                "end": 2390,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 2389,
                  "end": 2390,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2395,
                "end": 2403,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2405,
              "end": 2452,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2415,
                  "end": 2436,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 2422,
                    "end": 2435,
                    "left": {
                      "type": "Identifier",
                      "start": 2422,
                      "end": 2423,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 2428,
                      "end": 2435,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2462,
              "end": 2651,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2472,
                  "end": 2496,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2476,
                      "end": 2495,
                      "id": {
                        "type": "Identifier",
                        "start": 2476,
                        "end": 2495,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2477,
                          "end": 2495,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 2479,
                            "end": 2495,
                            "types": [
                              {
                                "type": "TSBooleanKeyword",
                                "start": 2479,
                                "end": 2486
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 2489,
                                "end": 2495
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
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2505,
                  "end": 2515,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2509,
                      "end": 2514,
                      "id": {
                        "type": "Identifier",
                        "start": 2509,
                        "end": 2510,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2513,
                        "end": 2514,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 2544,
                  "end": 2622,
                  "argument": {
                    "type": "ConditionalExpression",
                    "start": 2551,
                    "end": 2621,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 2551,
                      "end": 2572,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 2551,
                        "end": 2559,
                        "operator": "typeof",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 2558,
                          "end": 2559,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 2564,
                        "end": 2572,
                        "value": "number",
                        "raw": "\"number\""
                      }
                    },
                    "consequent": {
                      "type": "BinaryExpression",
                      "start": 2587,
                      "end": 2595,
                      "left": {
                        "type": "Identifier",
                        "start": 2587,
                        "end": 2588,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 2593,
                        "end": 2595,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "alternate": {
                      "type": "Identifier",
                      "start": 2620,
                      "end": 2621,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
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
      "start": 2654,
      "end": 3443,
      "id": {
        "type": "Identifier",
        "start": 2663,
        "end": 2668,
        "name": "foo11",
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
          "start": 2669,
          "end": 2697,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2670,
            "end": 2697,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2672,
              "end": 2697,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2672,
                  "end": 2678
                },
                {
                  "type": "TSStringKeyword",
                  "start": 2681,
                  "end": 2687
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2690,
                  "end": 2697
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
        "start": 2699,
        "end": 3443,
        "body": [
          {
            "type": "IfStatement",
            "start": 2875,
            "end": 3441,
            "test": {
              "type": "BinaryExpression",
              "start": 2879,
              "end": 2900,
              "left": {
                "type": "UnaryExpression",
                "start": 2879,
                "end": 2887,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 2886,
                  "end": 2887,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2892,
                "end": 2900,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2902,
              "end": 2983,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2912,
                  "end": 2921,
                  "argument": {
                    "type": "Identifier",
                    "start": 2919,
                    "end": 2920,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2993,
              "end": 3441,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3003,
                  "end": 3035,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3007,
                      "end": 3034,
                      "id": {
                        "type": "Identifier",
                        "start": 3007,
                        "end": 3034,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3008,
                          "end": 3034,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 3010,
                            "end": 3034,
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 3010,
                                "end": 3016
                              },
                              {
                                "type": "TSBooleanKeyword",
                                "start": 3018,
                                "end": 3025
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 3028,
                                "end": 3034
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
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3044,
                  "end": 3054,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3048,
                      "end": 3053,
                      "id": {
                        "type": "Identifier",
                        "start": 3048,
                        "end": 3049,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 3052,
                        "end": 3053,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 3151,
                  "end": 3435,
                  "argument": {
                    "type": "ConditionalExpression",
                    "start": 3158,
                    "end": 3434,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 3158,
                      "end": 3179,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 3158,
                        "end": 3166,
                        "operator": "typeof",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 3165,
                          "end": 3166,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 3171,
                        "end": 3179,
                        "value": "number",
                        "raw": "\"number\""
                      }
                    },
                    "consequent": {
                      "type": "AssignmentExpression",
                      "start": 3241,
                      "end": 3263,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 3241,
                        "end": 3242,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 3245,
                        "end": 3263,
                        "left": {
                          "type": "Literal",
                          "start": 3245,
                          "end": 3247,
                          "value": 10,
                          "raw": "10"
                        },
                        "operator": "&&",
                        "right": {
                          "type": "CallExpression",
                          "start": 3251,
                          "end": 3263,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3251,
                            "end": 3261,
                            "object": {
                              "type": "Identifier",
                              "start": 3251,
                              "end": 3252,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 3253,
                              "end": 3261,
                              "name": "toString",
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
                      }
                    },
                    "alternate": {
                      "type": "AssignmentExpression",
                      "start": 3370,
                      "end": 3391,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 3370,
                        "end": 3371,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 3374,
                        "end": 3391,
                        "left": {
                          "type": "Identifier",
                          "start": 3374,
                          "end": 3375,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "&&",
                        "right": {
                          "type": "CallExpression",
                          "start": 3379,
                          "end": 3391,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3379,
                            "end": 3389,
                            "object": {
                              "type": "Identifier",
                              "start": 3379,
                              "end": 3380,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 3381,
                              "end": 3389,
                              "name": "toString",
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
                      }
                    }
                  }
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
      "start": 3444,
      "end": 3999,
      "id": {
        "type": "Identifier",
        "start": 3453,
        "end": 3458,
        "name": "foo12",
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
          "start": 3459,
          "end": 3487,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3460,
            "end": 3487,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3462,
              "end": 3487,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 3462,
                  "end": 3468
                },
                {
                  "type": "TSStringKeyword",
                  "start": 3471,
                  "end": 3477
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 3480,
                  "end": 3487
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
        "start": 3489,
        "end": 3999,
        "body": [
          {
            "type": "IfStatement",
            "start": 3675,
            "end": 3997,
            "test": {
              "type": "BinaryExpression",
              "start": 3679,
              "end": 3700,
              "left": {
                "type": "UnaryExpression",
                "start": 3679,
                "end": 3687,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 3686,
                  "end": 3687,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 3692,
                "end": 3700,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3702,
              "end": 3794,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 3712,
                  "end": 3732,
                  "argument": {
                    "type": "CallExpression",
                    "start": 3719,
                    "end": 3731,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3719,
                      "end": 3729,
                      "object": {
                        "type": "Identifier",
                        "start": 3719,
                        "end": 3720,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3721,
                        "end": 3729,
                        "name": "toString",
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
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 3804,
              "end": 3997,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3814,
                  "end": 3821,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 3814,
                    "end": 3820,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 3814,
                      "end": 3815,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 3818,
                      "end": 3820,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3830,
                  "end": 3840,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3834,
                      "end": 3839,
                      "id": {
                        "type": "Identifier",
                        "start": 3834,
                        "end": 3835,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 3838,
                        "end": 3839,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 3878,
                  "end": 3971,
                  "argument": {
                    "type": "ConditionalExpression",
                    "start": 3885,
                    "end": 3970,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 3885,
                      "end": 3906,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 3885,
                        "end": 3893,
                        "operator": "typeof",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 3892,
                          "end": 3893,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 3898,
                        "end": 3906,
                        "value": "number",
                        "raw": "\"number\""
                      }
                    },
                    "consequent": {
                      "type": "CallExpression",
                      "start": 3921,
                      "end": 3933,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3921,
                        "end": 3931,
                        "object": {
                          "type": "Identifier",
                          "start": 3921,
                          "end": 3922,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3923,
                          "end": 3931,
                          "name": "toString",
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
                    },
                    "alternate": {
                      "type": "CallExpression",
                      "start": 3958,
                      "end": 3970,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3958,
                        "end": 3968,
                        "object": {
                          "type": "Identifier",
                          "start": 3958,
                          "end": 3959,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3960,
                          "end": 3968,
                          "name": "toString",
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
                  }
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
