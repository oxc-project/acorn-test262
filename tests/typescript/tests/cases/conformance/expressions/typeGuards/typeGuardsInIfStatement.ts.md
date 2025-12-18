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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 328
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 332,
              "end": 347
            },
            "start": 330,
            "end": 347
          },
          "start": 329,
          "end": 347
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "prefix": true,
                "start": 359,
                "end": 367
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 372,
                "end": 380
              },
              "start": 359,
              "end": 380
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 399,
                      "end": 400
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 407
                    },
                    "optional": false,
                    "computed": false,
                    "start": 399,
                    "end": 407
                  },
                  "start": 392,
                  "end": 408
                }
              ],
              "start": 382,
              "end": 424
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 451,
                      "end": 452
                    },
                    "start": 451,
                    "end": 454
                  },
                  "start": 444,
                  "end": 455
                }
              ],
              "start": 434,
              "end": 471
            },
            "start": 355,
            "end": 471
          }
        ],
        "start": 349,
        "end": 473
      },
      "expression": false,
      "start": 316,
      "end": 473
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 487
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 491,
              "end": 506
            },
            "start": 489,
            "end": 506
          },
          "start": 488,
          "end": 506
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 526
                },
                "prefix": true,
                "start": 518,
                "end": 526
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 531,
                "end": 539
              },
              "start": 518,
              "end": 539
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 551,
                      "end": 552
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 555,
                      "end": 557
                    },
                    "start": 551,
                    "end": 557
                  },
                  "directive": null,
                  "start": 551,
                  "end": 558
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 575
                  },
                  "start": 567,
                  "end": 576
                }
              ],
              "start": 541,
              "end": 592
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 619,
                    "end": 620
                  },
                  "start": 612,
                  "end": 621
                }
              ],
              "start": 602,
              "end": 637
            },
            "start": 514,
            "end": 637
          }
        ],
        "start": 508,
        "end": 639
      },
      "expression": false,
      "start": 474,
      "end": 639
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 649,
        "end": 653
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 657,
              "end": 672
            },
            "start": 655,
            "end": 672
          },
          "start": 654,
          "end": 672
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 692
                },
                "prefix": true,
                "start": 684,
                "end": 692
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 697,
                "end": 705
              },
              "start": 684,
              "end": 705
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 717,
                      "end": 718
                    },
                    "right": {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 721,
                      "end": 728
                    },
                    "start": 717,
                    "end": 728
                  },
                  "directive": null,
                  "start": 717,
                  "end": 729
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 745,
                    "end": 746
                  },
                  "start": 738,
                  "end": 747
                }
              ],
              "start": 707,
              "end": 763
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 790,
                    "end": 791
                  },
                  "start": 783,
                  "end": 792
                }
              ],
              "start": 773,
              "end": 808
            },
            "start": 680,
            "end": 808
          }
        ],
        "start": 674,
        "end": 810
      },
      "expression": false,
      "start": 640,
      "end": 810
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 820,
        "end": 824
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 828,
              "end": 843
            },
            "start": 826,
            "end": 843
          },
          "start": 825,
          "end": 843
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 862,
                  "end": 863
                },
                "prefix": true,
                "start": 855,
                "end": 863
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 868,
                "end": 876
              },
              "start": 855,
              "end": 876
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 895,
                    "end": 896
                  },
                  "start": 888,
                  "end": 897
                }
              ],
              "start": 878,
              "end": 913
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 933,
                      "end": 934
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 937,
                      "end": 939
                    },
                    "start": 933,
                    "end": 939
                  },
                  "directive": null,
                  "start": 933,
                  "end": 940
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 956,
                    "end": 957
                  },
                  "start": 949,
                  "end": 958
                }
              ],
              "start": 923,
              "end": 974
            },
            "start": 851,
            "end": 974
          }
        ],
        "start": 845,
        "end": 976
      },
      "expression": false,
      "start": 811,
      "end": 976
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 986,
        "end": 990
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 994,
              "end": 1009
            },
            "start": 992,
            "end": 1009
          },
          "start": 991,
          "end": 1009
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1028,
                  "end": 1029
                },
                "prefix": true,
                "start": 1021,
                "end": 1029
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1034,
                "end": 1042
              },
              "start": 1021,
              "end": 1042
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1061,
                    "end": 1062
                  },
                  "start": 1054,
                  "end": 1063
                }
              ],
              "start": 1044,
              "end": 1079
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1099,
                      "end": 1100
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1103,
                      "end": 1110
                    },
                    "start": 1099,
                    "end": 1110
                  },
                  "directive": null,
                  "start": 1099,
                  "end": 1111
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1127,
                    "end": 1128
                  },
                  "start": 1120,
                  "end": 1129
                }
              ],
              "start": 1089,
              "end": 1145
            },
            "start": 1017,
            "end": 1145
          }
        ],
        "start": 1011,
        "end": 1147
      },
      "expression": false,
      "start": 977,
      "end": 1147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1157,
        "end": 1161
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 1165,
              "end": 1180
            },
            "start": 1163,
            "end": 1180
          },
          "start": 1162,
          "end": 1180
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1199,
                  "end": 1200
                },
                "prefix": true,
                "start": 1192,
                "end": 1200
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1205,
                "end": 1213
              },
              "start": 1192,
              "end": 1213
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1225,
                      "end": 1226
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 1229,
                      "end": 1231
                    },
                    "start": 1225,
                    "end": 1231
                  },
                  "directive": null,
                  "start": 1225,
                  "end": 1232
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1248,
                    "end": 1249
                  },
                  "start": 1241,
                  "end": 1250
                }
              ],
              "start": 1215,
              "end": 1266
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1286,
                      "end": 1287
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1290,
                      "end": 1297
                    },
                    "start": 1286,
                    "end": 1297
                  },
                  "directive": null,
                  "start": 1286,
                  "end": 1298
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1314,
                    "end": 1315
                  },
                  "start": 1307,
                  "end": 1316
                }
              ],
              "start": 1276,
              "end": 1332
            },
            "start": 1188,
            "end": 1332
          }
        ],
        "start": 1182,
        "end": 1334
      },
      "expression": false,
      "start": 1148,
      "end": 1334
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1344,
        "end": 1348
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 1352,
              "end": 1377
            },
            "start": 1350,
            "end": 1377
          },
          "start": 1349,
          "end": 1377
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1396,
                  "end": 1397
                },
                "prefix": true,
                "start": 1389,
                "end": 1397
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1402,
                "end": 1410
              },
              "start": 1389,
              "end": 1410
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1429,
                      "end": 1430
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1435,
                      "end": 1442
                    },
                    "start": 1429,
                    "end": 1442
                  },
                  "start": 1422,
                  "end": 1443
                }
              ],
              "start": 1412,
              "end": 1459
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1480,
                    "end": 1481
                  },
                  "prefix": true,
                  "start": 1473,
                  "end": 1481
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 1486,
                  "end": 1495
                },
                "start": 1473,
                "end": 1495
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1514,
                      "end": 1515
                    },
                    "start": 1507,
                    "end": 1516
                  }
                ],
                "start": 1497,
                "end": 1533
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1560,
                        "end": 1561
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1565,
                        "end": 1567
                      },
                      "start": 1560,
                      "end": 1567
                    },
                    "start": 1553,
                    "end": 1568
                  }
                ],
                "start": 1543,
                "end": 1584
              },
              "start": 1469,
              "end": 1584
            },
            "start": 1385,
            "end": 1584
          }
        ],
        "start": 1379,
        "end": 1586
      },
      "expression": false,
      "start": 1335,
      "end": 1586
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1596,
        "end": 1600
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 1604,
              "end": 1629
            },
            "start": 1602,
            "end": 1629
          },
          "start": 1601,
          "end": 1629
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1648,
                  "end": 1649
                },
                "prefix": true,
                "start": 1641,
                "end": 1649
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1654,
                "end": 1662
              },
              "start": 1641,
              "end": 1662
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1681,
                      "end": 1682
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1687,
                      "end": 1694
                    },
                    "start": 1681,
                    "end": 1694
                  },
                  "start": 1674,
                  "end": 1695
                }
              ],
              "start": 1664,
              "end": 1711
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
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
                            ],
                            "start": 1738,
                            "end": 1754
                          },
                          "start": 1736,
                          "end": 1754
                        },
                        "start": 1735,
                        "end": 1754
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1757,
                        "end": 1758
                      },
                      "definite": false,
                      "start": 1735,
                      "end": 1758
                    }
                  ],
                  "declare": false,
                  "start": 1731,
                  "end": 1759
                },
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1800,
                        "end": 1801
                      },
                      "prefix": true,
                      "start": 1793,
                      "end": 1801
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 1806,
                      "end": 1815
                    },
                    "start": 1793,
                    "end": 1815
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1838,
                          "end": 1839
                        },
                        "start": 1831,
                        "end": 1840
                      }
                    ],
                    "start": 1817,
                    "end": 1861
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1896,
                            "end": 1897
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 1901,
                            "end": 1903
                          },
                          "start": 1896,
                          "end": 1903
                        },
                        "start": 1889,
                        "end": 1904
                      }
                    ],
                    "start": 1875,
                    "end": 1924
                  },
                  "start": 1789,
                  "end": 1924
                }
              ],
              "start": 1721,
              "end": 1930
            },
            "start": 1637,
            "end": 1930
          }
        ],
        "start": 1631,
        "end": 1932
      },
      "expression": false,
      "start": 1587,
      "end": 1932
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1942,
        "end": 1946
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 1950,
              "end": 1965
            },
            "start": 1948,
            "end": 1965
          },
          "start": 1947,
          "end": 1965
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1977,
                  "end": 1978
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1981,
                  "end": 1983
                },
                "definite": false,
                "start": 1977,
                "end": 1983
              }
            ],
            "declare": false,
            "start": 1973,
            "end": 1984
          },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2000,
                  "end": 2001
                },
                "prefix": true,
                "start": 1993,
                "end": 2001
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2006,
                "end": 2014
              },
              "start": 1993,
              "end": 2014
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2125,
                      "end": 2126
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2129,
                        "end": 2130
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2131,
                        "end": 2137
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2129,
                      "end": 2137
                    },
                    "start": 2125,
                    "end": 2137
                  },
                  "directive": null,
                  "start": 2125,
                  "end": 2138
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2155,
                      "end": 2156
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 2161,
                      "end": 2168
                    },
                    "start": 2155,
                    "end": 2168
                  },
                  "start": 2148,
                  "end": 2169
                }
              ],
              "start": 2016,
              "end": 2185
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2212,
                      "end": 2213
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2217,
                      "end": 2219
                    },
                    "start": 2212,
                    "end": 2219
                  },
                  "start": 2205,
                  "end": 2220
                }
              ],
              "start": 2195,
              "end": 2236
            },
            "start": 1989,
            "end": 2236
          }
        ],
        "start": 1967,
        "end": 2238
      },
      "expression": false,
      "start": 1933,
      "end": 2238
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2248,
        "end": 2253
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 2257,
              "end": 2282
            },
            "start": 2255,
            "end": 2282
          },
          "start": 2254,
          "end": 2282
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2389,
                  "end": 2390
                },
                "prefix": true,
                "start": 2382,
                "end": 2390
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2395,
                "end": 2403
              },
              "start": 2382,
              "end": 2403
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2422,
                      "end": 2423
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 2428,
                      "end": 2435
                    },
                    "start": 2422,
                    "end": 2435
                  },
                  "start": 2415,
                  "end": 2436
                }
              ],
              "start": 2405,
              "end": 2452
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
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
                            ],
                            "start": 2479,
                            "end": 2495
                          },
                          "start": 2477,
                          "end": 2495
                        },
                        "start": 2476,
                        "end": 2495
                      },
                      "init": null,
                      "definite": false,
                      "start": 2476,
                      "end": 2495
                    }
                  ],
                  "declare": false,
                  "start": 2472,
                  "end": 2496
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2509,
                        "end": 2510
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2513,
                        "end": 2514
                      },
                      "definite": false,
                      "start": 2509,
                      "end": 2514
                    }
                  ],
                  "declare": false,
                  "start": 2505,
                  "end": 2515
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2558,
                          "end": 2559
                        },
                        "prefix": true,
                        "start": 2551,
                        "end": 2559
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\"",
                        "start": 2564,
                        "end": 2572
                      },
                      "start": 2551,
                      "end": 2572
                    },
                    "consequent": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2587,
                        "end": 2588
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 2593,
                        "end": 2595
                      },
                      "start": 2587,
                      "end": 2595
                    },
                    "alternate": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2620,
                      "end": 2621
                    },
                    "start": 2551,
                    "end": 2621
                  },
                  "start": 2544,
                  "end": 2622
                }
              ],
              "start": 2462,
              "end": 2651
            },
            "start": 2378,
            "end": 2651
          }
        ],
        "start": 2284,
        "end": 2653
      },
      "expression": false,
      "start": 2239,
      "end": 2653
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2663,
        "end": 2668
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 2672,
              "end": 2697
            },
            "start": 2670,
            "end": 2697
          },
          "start": 2669,
          "end": 2697
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2886,
                  "end": 2887
                },
                "prefix": true,
                "start": 2879,
                "end": 2887
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2892,
                "end": 2900
              },
              "start": 2879,
              "end": 2900
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2919,
                    "end": 2920
                  },
                  "start": 2912,
                  "end": 2921
                }
              ],
              "start": 2902,
              "end": 2983
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
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
                            ],
                            "start": 3010,
                            "end": 3034
                          },
                          "start": 3008,
                          "end": 3034
                        },
                        "start": 3007,
                        "end": 3034
                      },
                      "init": null,
                      "definite": false,
                      "start": 3007,
                      "end": 3034
                    }
                  ],
                  "declare": false,
                  "start": 3003,
                  "end": 3035
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3048,
                        "end": 3049
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3052,
                        "end": 3053
                      },
                      "definite": false,
                      "start": 3048,
                      "end": 3053
                    }
                  ],
                  "declare": false,
                  "start": 3044,
                  "end": 3054
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3165,
                          "end": 3166
                        },
                        "prefix": true,
                        "start": 3158,
                        "end": 3166
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\"",
                        "start": 3171,
                        "end": 3179
                      },
                      "start": 3158,
                      "end": 3179
                    },
                    "consequent": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3241,
                        "end": 3242
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 3245,
                          "end": 3247
                        },
                        "operator": "&&",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3251,
                              "end": 3252
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3253,
                              "end": 3261
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3251,
                            "end": 3261
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3251,
                          "end": 3263
                        },
                        "start": 3245,
                        "end": 3263
                      },
                      "start": 3241,
                      "end": 3263
                    },
                    "alternate": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3370,
                        "end": 3371
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3374,
                          "end": 3375
                        },
                        "operator": "&&",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3379,
                              "end": 3380
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3381,
                              "end": 3389
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3379,
                            "end": 3389
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3379,
                          "end": 3391
                        },
                        "start": 3374,
                        "end": 3391
                      },
                      "start": 3370,
                      "end": 3391
                    },
                    "start": 3158,
                    "end": 3434
                  },
                  "start": 3151,
                  "end": 3435
                }
              ],
              "start": 2993,
              "end": 3441
            },
            "start": 2875,
            "end": 3441
          }
        ],
        "start": 2699,
        "end": 3443
      },
      "expression": false,
      "start": 2654,
      "end": 3443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 3453,
        "end": 3458
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 3462,
              "end": 3487
            },
            "start": 3460,
            "end": 3487
          },
          "start": 3459,
          "end": 3487
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3686,
                  "end": 3687
                },
                "prefix": true,
                "start": 3679,
                "end": 3687
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 3692,
                "end": 3700
              },
              "start": 3679,
              "end": 3700
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3719,
                        "end": 3720
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3721,
                        "end": 3729
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3719,
                      "end": 3729
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3719,
                    "end": 3731
                  },
                  "start": 3712,
                  "end": 3732
                }
              ],
              "start": 3702,
              "end": 3794
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3814,
                      "end": 3815
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 3818,
                      "end": 3820
                    },
                    "start": 3814,
                    "end": 3820
                  },
                  "directive": null,
                  "start": 3814,
                  "end": 3821
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3834,
                        "end": 3835
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3838,
                        "end": 3839
                      },
                      "definite": false,
                      "start": 3834,
                      "end": 3839
                    }
                  ],
                  "declare": false,
                  "start": 3830,
                  "end": 3840
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3892,
                          "end": 3893
                        },
                        "prefix": true,
                        "start": 3885,
                        "end": 3893
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\"",
                        "start": 3898,
                        "end": 3906
                      },
                      "start": 3885,
                      "end": 3906
                    },
                    "consequent": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3921,
                          "end": 3922
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3923,
                          "end": 3931
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3921,
                        "end": 3931
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3921,
                      "end": 3933
                    },
                    "alternate": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3958,
                          "end": 3959
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3960,
                          "end": 3968
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3958,
                        "end": 3968
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3958,
                      "end": 3970
                    },
                    "start": 3885,
                    "end": 3970
                  },
                  "start": 3878,
                  "end": 3971
                }
              ],
              "start": 3804,
              "end": 3997
            },
            "start": 3675,
            "end": 3997
          }
        ],
        "start": 3489,
        "end": 3999
      },
      "expression": false,
      "start": 3444,
      "end": 3999
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 316,
  "end": 3999
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 316,
    "end": 324,
    "range": [
      316,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 325,
    "end": 328,
    "range": [
      325,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 332,
    "end": 338,
    "range": [
      332,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 341,
    "end": 347,
    "range": [
      341,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 355,
    "end": 357,
    "range": [
      355,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 359,
    "end": 365,
    "range": [
      359,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 368,
    "end": 371,
    "range": [
      368,
      371
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 372,
    "end": 380,
    "range": [
      372,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 392,
    "end": 398,
    "range": [
      392,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 401,
    "end": 407,
    "range": [
      401,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 429,
    "end": 433,
    "range": [
      429,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 444,
    "end": 450,
    "range": [
      444,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 452,
    "end": 454,
    "range": [
      452,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 474,
    "end": 482,
    "range": [
      474,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 483,
    "end": 487,
    "range": [
      483,
      487
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
    "type": "Identifier",
    "value": "x",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 491,
    "end": 497,
    "range": [
      491,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 500,
    "end": 506,
    "range": [
      500,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 514,
    "end": 516,
    "range": [
      514,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 518,
    "end": 524,
    "range": [
      518,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 527,
    "end": 530,
    "range": [
      527,
      530
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 531,
    "end": 539,
    "range": [
      531,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 555,
    "end": 557,
    "range": [
      555,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 567,
    "end": 573,
    "range": [
      567,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 597,
    "end": 601,
    "range": [
      597,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 612,
    "end": 618,
    "range": [
      612,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 640,
    "end": 648,
    "range": [
      640,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 649,
    "end": 653,
    "range": [
      649,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 657,
    "end": 663,
    "range": [
      657,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 666,
    "end": 672,
    "range": [
      666,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 680,
    "end": 682,
    "range": [
      680,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 684,
    "end": 690,
    "range": [
      684,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 693,
    "end": 696,
    "range": [
      693,
      696
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 697,
    "end": 705,
    "range": [
      697,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 721,
    "end": 728,
    "range": [
      721,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 738,
    "end": 744,
    "range": [
      738,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 768,
    "end": 772,
    "range": [
      768,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 783,
    "end": 789,
    "range": [
      783,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 811,
    "end": 819,
    "range": [
      811,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 820,
    "end": 824,
    "range": [
      820,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 828,
    "end": 834,
    "range": [
      828,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 837,
    "end": 843,
    "range": [
      837,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 851,
    "end": 853,
    "range": [
      851,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 855,
    "end": 861,
    "range": [
      855,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 864,
    "end": 867,
    "range": [
      864,
      867
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 868,
    "end": 876,
    "range": [
      868,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 888,
    "end": 894,
    "range": [
      888,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 918,
    "end": 922,
    "range": [
      918,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 937,
    "end": 939,
    "range": [
      937,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 949,
    "end": 955,
    "range": [
      949,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 977,
    "end": 985,
    "range": [
      977,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 986,
    "end": 990,
    "range": [
      986,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 994,
    "end": 1000,
    "range": [
      994,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1003,
    "end": 1009,
    "range": [
      1003,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1017,
    "end": 1019,
    "range": [
      1017,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1021,
    "end": 1027,
    "range": [
      1021,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1030,
    "end": 1033,
    "range": [
      1030,
      1033
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1034,
    "end": 1042,
    "range": [
      1034,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1054,
    "end": 1060,
    "range": [
      1054,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1084,
    "end": 1088,
    "range": [
      1084,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1103,
    "end": 1110,
    "range": [
      1103,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1120,
    "end": 1126,
    "range": [
      1120,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1148,
    "end": 1156,
    "range": [
      1148,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1157,
    "end": 1161,
    "range": [
      1157,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1165,
    "end": 1171,
    "range": [
      1165,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1174,
    "end": 1180,
    "range": [
      1174,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1188,
    "end": 1190,
    "range": [
      1188,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1192,
    "end": 1198,
    "range": [
      1192,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1201,
    "end": 1204,
    "range": [
      1201,
      1204
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1205,
    "end": 1213,
    "range": [
      1205,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1229,
    "end": 1231,
    "range": [
      1229,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1241,
    "end": 1247,
    "range": [
      1241,
      1247
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1271,
    "end": 1275,
    "range": [
      1271,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1290,
    "end": 1297,
    "range": [
      1290,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1307,
    "end": 1313,
    "range": [
      1307,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1335,
    "end": 1343,
    "range": [
      1335,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1344,
    "end": 1348,
    "range": [
      1344,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1352,
    "end": 1358,
    "range": [
      1352,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1361,
    "end": 1367,
    "range": [
      1361,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1370,
    "end": 1377,
    "range": [
      1370,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1385,
    "end": 1387,
    "range": [
      1385,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1389,
    "end": 1395,
    "range": [
      1389,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1398,
    "end": 1401,
    "range": [
      1398,
      1401
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1402,
    "end": 1410,
    "range": [
      1402,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1422,
    "end": 1428,
    "range": [
      1422,
      1428
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1431,
    "end": 1434,
    "range": [
      1431,
      1434
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1435,
    "end": 1442,
    "range": [
      1435,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1464,
    "end": 1468,
    "range": [
      1464,
      1468
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1469,
    "end": 1471,
    "range": [
      1469,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1473,
    "end": 1479,
    "range": [
      1473,
      1479
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1482,
    "end": 1485,
    "range": [
      1482,
      1485
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1486,
    "end": 1495,
    "range": [
      1486,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1507,
    "end": 1513,
    "range": [
      1507,
      1513
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1538,
    "end": 1542,
    "range": [
      1538,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1553,
    "end": 1559,
    "range": [
      1553,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1562,
    "end": 1564,
    "range": [
      1562,
      1564
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1565,
    "end": 1567,
    "range": [
      1565,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1587,
    "end": 1595,
    "range": [
      1587,
      1595
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1596,
    "end": 1600,
    "range": [
      1596,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1604,
    "end": 1610,
    "range": [
      1604,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1613,
    "end": 1619,
    "range": [
      1613,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1622,
    "end": 1629,
    "range": [
      1622,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1637,
    "end": 1639,
    "range": [
      1637,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1641,
    "end": 1647,
    "range": [
      1641,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1650,
    "end": 1653,
    "range": [
      1650,
      1653
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1654,
    "end": 1662,
    "range": [
      1654,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1674,
    "end": 1680,
    "range": [
      1674,
      1680
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1683,
    "end": 1686,
    "range": [
      1683,
      1686
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1687,
    "end": 1694,
    "range": [
      1687,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1716,
    "end": 1720,
    "range": [
      1716,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1731,
    "end": 1734,
    "range": [
      1731,
      1734
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1738,
    "end": 1744,
    "range": [
      1738,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1747,
    "end": 1754,
    "range": [
      1747,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1789,
    "end": 1791,
    "range": [
      1789,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1793,
    "end": 1799,
    "range": [
      1793,
      1799
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1802,
    "end": 1805,
    "range": [
      1802,
      1805
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1806,
    "end": 1815,
    "range": [
      1806,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1831,
    "end": 1837,
    "range": [
      1831,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1870,
    "end": 1874,
    "range": [
      1870,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1889,
    "end": 1895,
    "range": [
      1889,
      1895
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1898,
    "end": 1900,
    "range": [
      1898,
      1900
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1901,
    "end": 1903,
    "range": [
      1901,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1933,
    "end": 1941,
    "range": [
      1933,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1942,
    "end": 1946,
    "range": [
      1942,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1950,
    "end": 1956,
    "range": [
      1950,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1959,
    "end": 1965,
    "range": [
      1959,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
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
    "type": "Keyword",
    "value": "var",
    "start": 1973,
    "end": 1976,
    "range": [
      1973,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1981,
    "end": 1983,
    "range": [
      1981,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1989,
    "end": 1991,
    "range": [
      1989,
      1991
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1993,
    "end": 1999,
    "range": [
      1993,
      1999
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2002,
    "end": 2005,
    "range": [
      2002,
      2005
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2006,
    "end": 2014,
    "range": [
      2006,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2131,
    "end": 2137,
    "range": [
      2131,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2148,
    "end": 2154,
    "range": [
      2148,
      2154
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2155,
    "end": 2156,
    "range": [
      2155,
      2156
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2157,
    "end": 2160,
    "range": [
      2157,
      2160
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2161,
    "end": 2168,
    "range": [
      2161,
      2168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2168,
    "end": 2169,
    "range": [
      2168,
      2169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2184,
    "end": 2185,
    "range": [
      2184,
      2185
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2190,
    "end": 2194,
    "range": [
      2190,
      2194
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2195,
    "end": 2196,
    "range": [
      2195,
      2196
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2205,
    "end": 2211,
    "range": [
      2205,
      2211
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2214,
    "end": 2216,
    "range": [
      2214,
      2216
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2217,
    "end": 2219,
    "range": [
      2217,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2239,
    "end": 2247,
    "range": [
      2239,
      2247
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2248,
    "end": 2253,
    "range": [
      2248,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2257,
    "end": 2263,
    "range": [
      2257,
      2263
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2266,
    "end": 2272,
    "range": [
      2266,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2275,
    "end": 2282,
    "range": [
      2275,
      2282
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2282,
    "end": 2283,
    "range": [
      2282,
      2283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2284,
    "end": 2285,
    "range": [
      2284,
      2285
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2378,
    "end": 2380,
    "range": [
      2378,
      2380
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2381,
    "end": 2382,
    "range": [
      2381,
      2382
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2382,
    "end": 2388,
    "range": [
      2382,
      2388
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2391,
    "end": 2394,
    "range": [
      2391,
      2394
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2395,
    "end": 2403,
    "range": [
      2395,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2415,
    "end": 2421,
    "range": [
      2415,
      2421
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2424,
    "end": 2427,
    "range": [
      2424,
      2427
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2428,
    "end": 2435,
    "range": [
      2428,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2435,
    "end": 2436,
    "range": [
      2435,
      2436
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2451,
    "end": 2452,
    "range": [
      2451,
      2452
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2457,
    "end": 2461,
    "range": [
      2457,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2472,
    "end": 2475,
    "range": [
      2472,
      2475
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2476,
    "end": 2477,
    "range": [
      2476,
      2477
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2477,
    "end": 2478,
    "range": [
      2477,
      2478
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2479,
    "end": 2486,
    "range": [
      2479,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2489,
    "end": 2495,
    "range": [
      2489,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2495,
    "end": 2496,
    "range": [
      2495,
      2496
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2505,
    "end": 2508,
    "range": [
      2505,
      2508
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2509,
    "end": 2510,
    "range": [
      2509,
      2510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2511,
    "end": 2512,
    "range": [
      2511,
      2512
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2544,
    "end": 2550,
    "range": [
      2544,
      2550
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2551,
    "end": 2557,
    "range": [
      2551,
      2557
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2558,
    "end": 2559,
    "range": [
      2558,
      2559
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2560,
    "end": 2563,
    "range": [
      2560,
      2563
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 2564,
    "end": 2572,
    "range": [
      2564,
      2572
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2589,
    "end": 2592,
    "range": [
      2589,
      2592
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2593,
    "end": 2595,
    "range": [
      2593,
      2595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2618,
    "end": 2619,
    "range": [
      2618,
      2619
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2620,
    "end": 2621,
    "range": [
      2620,
      2621
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2621,
    "end": 2622,
    "range": [
      2621,
      2622
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2650,
    "end": 2651,
    "range": [
      2650,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2654,
    "end": 2662,
    "range": [
      2654,
      2662
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2663,
    "end": 2668,
    "range": [
      2663,
      2668
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2668,
    "end": 2669,
    "range": [
      2668,
      2669
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2669,
    "end": 2670,
    "range": [
      2669,
      2670
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2672,
    "end": 2678,
    "range": [
      2672,
      2678
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2679,
    "end": 2680,
    "range": [
      2679,
      2680
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2681,
    "end": 2687,
    "range": [
      2681,
      2687
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2688,
    "end": 2689,
    "range": [
      2688,
      2689
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2690,
    "end": 2697,
    "range": [
      2690,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2875,
    "end": 2877,
    "range": [
      2875,
      2877
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2879,
    "end": 2885,
    "range": [
      2879,
      2885
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2886,
    "end": 2887,
    "range": [
      2886,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2888,
    "end": 2891,
    "range": [
      2888,
      2891
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2892,
    "end": 2900,
    "range": [
      2892,
      2900
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2912,
    "end": 2918,
    "range": [
      2912,
      2918
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2919,
    "end": 2920,
    "range": [
      2919,
      2920
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2920,
    "end": 2921,
    "range": [
      2920,
      2921
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2982,
    "end": 2983,
    "range": [
      2982,
      2983
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2988,
    "end": 2992,
    "range": [
      2988,
      2992
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2993,
    "end": 2994,
    "range": [
      2993,
      2994
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3003,
    "end": 3006,
    "range": [
      3003,
      3006
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3007,
    "end": 3008,
    "range": [
      3007,
      3008
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3010,
    "end": 3016,
    "range": [
      3010,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3016,
    "end": 3017,
    "range": [
      3016,
      3017
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3018,
    "end": 3025,
    "range": [
      3018,
      3025
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3026,
    "end": 3027,
    "range": [
      3026,
      3027
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3028,
    "end": 3034,
    "range": [
      3028,
      3034
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3034,
    "end": 3035,
    "range": [
      3034,
      3035
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3044,
    "end": 3047,
    "range": [
      3044,
      3047
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3048,
    "end": 3049,
    "range": [
      3048,
      3049
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3052,
    "end": 3053,
    "range": [
      3052,
      3053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3053,
    "end": 3054,
    "range": [
      3053,
      3054
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3151,
    "end": 3157,
    "range": [
      3151,
      3157
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3158,
    "end": 3164,
    "range": [
      3158,
      3164
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3165,
    "end": 3166,
    "range": [
      3165,
      3166
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3167,
    "end": 3170,
    "range": [
      3167,
      3170
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 3171,
    "end": 3179,
    "range": [
      3171,
      3179
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3192,
    "end": 3193,
    "range": [
      3192,
      3193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3194,
    "end": 3195,
    "range": [
      3194,
      3195
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3245,
    "end": 3247,
    "range": [
      3245,
      3247
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3248,
    "end": 3250,
    "range": [
      3248,
      3250
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3251,
    "end": 3252,
    "range": [
      3251,
      3252
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3252,
    "end": 3253,
    "range": [
      3252,
      3253
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 3253,
    "end": 3261,
    "range": [
      3253,
      3261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3262,
    "end": 3263,
    "range": [
      3262,
      3263
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3305,
    "end": 3306,
    "range": [
      3305,
      3306
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3319,
    "end": 3320,
    "range": [
      3319,
      3320
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3321,
    "end": 3322,
    "range": [
      3321,
      3322
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3370,
    "end": 3371,
    "range": [
      3370,
      3371
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3372,
    "end": 3373,
    "range": [
      3372,
      3373
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3374,
    "end": 3375,
    "range": [
      3374,
      3375
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3376,
    "end": 3378,
    "range": [
      3376,
      3378
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3380,
    "end": 3381,
    "range": [
      3380,
      3381
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 3381,
    "end": 3389,
    "range": [
      3381,
      3389
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3389,
    "end": 3390,
    "range": [
      3389,
      3390
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3390,
    "end": 3391,
    "range": [
      3390,
      3391
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3434,
    "end": 3435,
    "range": [
      3434,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3444,
    "end": 3452,
    "range": [
      3444,
      3452
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 3453,
    "end": 3458,
    "range": [
      3453,
      3458
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3458,
    "end": 3459,
    "range": [
      3458,
      3459
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3459,
    "end": 3460,
    "range": [
      3459,
      3460
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3462,
    "end": 3468,
    "range": [
      3462,
      3468
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3471,
    "end": 3477,
    "range": [
      3471,
      3477
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3478,
    "end": 3479,
    "range": [
      3478,
      3479
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3480,
    "end": 3487,
    "range": [
      3480,
      3487
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3487,
    "end": 3488,
    "range": [
      3487,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3675,
    "end": 3677,
    "range": [
      3675,
      3677
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3678,
    "end": 3679,
    "range": [
      3678,
      3679
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3679,
    "end": 3685,
    "range": [
      3679,
      3685
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3686,
    "end": 3687,
    "range": [
      3686,
      3687
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3688,
    "end": 3691,
    "range": [
      3688,
      3691
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 3692,
    "end": 3700,
    "range": [
      3692,
      3700
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3702,
    "end": 3703,
    "range": [
      3702,
      3703
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3712,
    "end": 3718,
    "range": [
      3712,
      3718
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3719,
    "end": 3720,
    "range": [
      3719,
      3720
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3720,
    "end": 3721,
    "range": [
      3720,
      3721
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 3721,
    "end": 3729,
    "range": [
      3721,
      3729
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3729,
    "end": 3730,
    "range": [
      3729,
      3730
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3730,
    "end": 3731,
    "range": [
      3730,
      3731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3731,
    "end": 3732,
    "range": [
      3731,
      3732
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3793,
    "end": 3794,
    "range": [
      3793,
      3794
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3799,
    "end": 3803,
    "range": [
      3799,
      3803
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3804,
    "end": 3805,
    "range": [
      3804,
      3805
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3814,
    "end": 3815,
    "range": [
      3814,
      3815
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3816,
    "end": 3817,
    "range": [
      3816,
      3817
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3818,
    "end": 3820,
    "range": [
      3818,
      3820
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3820,
    "end": 3821,
    "range": [
      3820,
      3821
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3830,
    "end": 3833,
    "range": [
      3830,
      3833
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3834,
    "end": 3835,
    "range": [
      3834,
      3835
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3836,
    "end": 3837,
    "range": [
      3836,
      3837
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3838,
    "end": 3839,
    "range": [
      3838,
      3839
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3839,
    "end": 3840,
    "range": [
      3839,
      3840
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3878,
    "end": 3884,
    "range": [
      3878,
      3884
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3885,
    "end": 3891,
    "range": [
      3885,
      3891
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3892,
    "end": 3893,
    "range": [
      3892,
      3893
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3894,
    "end": 3897,
    "range": [
      3894,
      3897
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 3898,
    "end": 3906,
    "range": [
      3898,
      3906
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3919,
    "end": 3920,
    "range": [
      3919,
      3920
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3921,
    "end": 3922,
    "range": [
      3921,
      3922
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3922,
    "end": 3923,
    "range": [
      3922,
      3923
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 3923,
    "end": 3931,
    "range": [
      3923,
      3931
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3931,
    "end": 3932,
    "range": [
      3931,
      3932
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3932,
    "end": 3933,
    "range": [
      3932,
      3933
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3956,
    "end": 3957,
    "range": [
      3956,
      3957
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3958,
    "end": 3959,
    "range": [
      3958,
      3959
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3959,
    "end": 3960,
    "range": [
      3959,
      3960
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 3960,
    "end": 3968,
    "range": [
      3960,
      3968
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3968,
    "end": 3969,
    "range": [
      3968,
      3969
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3969,
    "end": 3970,
    "range": [
      3969,
      3970
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3970,
    "end": 3971,
    "range": [
      3970,
      3971
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3996,
    "end": 3997,
    "range": [
      3996,
      3997
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3998,
    "end": 3999,
    "range": [
      3998,
      3999
    ]
  }
]
```
