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
