__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 34,
                      "end": 37
                    },
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 38,
                      "end": 39
                    },
                    "start": 33,
                    "end": 39
                  },
                  "start": 26,
                  "end": 40
                }
              ],
              "start": 20,
              "end": 74
            },
            "expression": false,
            "start": 8,
            "end": 74
          },
          "definite": false,
          "start": 4,
          "end": 74
        }
      ],
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 88
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 105,
                "end": 108
              },
              "expression": {
                "type": "Literal",
                "value": "hello world",
                "raw": "\"hello world\"",
                "start": 109,
                "end": 122
              },
              "start": 104,
              "end": 122
            },
            "start": 97,
            "end": 123
          }
        ],
        "start": 91,
        "end": 157
      },
      "expression": false,
      "start": 76,
      "end": 157
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 166
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 176
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 179,
              "end": 183
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 173,
            "end": 184
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 220
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 232
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 217,
            "end": 233
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tempVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 284
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 305,
                        "end": 308
                      },
                      "expression": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 309,
                        "end": 310
                      },
                      "start": 304,
                      "end": 310
                    },
                    "start": 297,
                    "end": 311
                  }
                ],
                "start": 287,
                "end": 349
              },
              "expression": false,
              "start": 284,
              "end": 349
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 266,
            "end": 349
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "returnBarWithCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 379
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 434,
                        "end": 437
                      },
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 438,
                          "end": 442
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 446
                        },
                        "optional": false,
                        "computed": false,
                        "start": 438,
                        "end": 446
                      },
                      "start": 433,
                      "end": 446
                    },
                    "start": 426,
                    "end": 447
                  }
                ],
                "start": 382,
                "end": 453
              },
              "expression": false,
              "start": 379,
              "end": 453
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 355,
            "end": 453
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "returnFooWithCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 483
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 504,
                        "end": 507
                      },
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 508,
                          "end": 512
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 513,
                          "end": 516
                        },
                        "optional": false,
                        "computed": false,
                        "start": 508,
                        "end": 516
                      },
                      "start": 503,
                      "end": 516
                    },
                    "start": 496,
                    "end": 517
                  }
                ],
                "start": 486,
                "end": 555
              },
              "expression": false,
              "start": 483,
              "end": 555
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 459,
            "end": 555
          }
        ],
        "start": 167,
        "end": 557
      },
      "abstract": false,
      "declare": false,
      "start": 159,
      "end": 557
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 565,
        "end": 567
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 582
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 585,
              "end": 589
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 574,
            "end": 590
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "castedGet",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 644
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 665,
                        "end": 668
                      },
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 669,
                          "end": 673
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 674,
                          "end": 682
                        },
                        "optional": false,
                        "computed": false,
                        "start": 669,
                        "end": 682
                      },
                      "start": 664,
                      "end": 682
                    },
                    "start": 657,
                    "end": 683
                  }
                ],
                "start": 647,
                "end": 721
              },
              "expression": false,
              "start": 644,
              "end": 721
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 624,
            "end": 721
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "notCastedGet",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 750
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 770,
                        "end": 774
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 775,
                        "end": 783
                      },
                      "optional": false,
                      "computed": false,
                      "start": 770,
                      "end": 783
                    },
                    "start": 763,
                    "end": 784
                  }
                ],
                "start": 753,
                "end": 822
              },
              "expression": false,
              "start": 750,
              "end": 822
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 727,
            "end": 822
          }
        ],
        "start": 568,
        "end": 824
      },
      "abstract": false,
      "declare": false,
      "start": 559,
      "end": 824
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "castedNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 835,
        "end": 845
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 862,
                "end": 865
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 866,
                "end": 870
              },
              "start": 861,
              "end": 870
            },
            "start": 854,
            "end": 871
          }
        ],
        "start": 848,
        "end": 905
      },
      "expression": false,
      "start": 826,
      "end": 905
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notCastedNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 916,
        "end": 929
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 945,
              "end": 949
            },
            "start": 938,
            "end": 950
          }
        ],
        "start": 932,
        "end": 980
      },
      "expression": false,
      "start": 907,
      "end": 980
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnTypeBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 991,
        "end": 1004
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1008,
          "end": 1011
        },
        "start": 1006,
        "end": 1011
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1025,
              "end": 1029
            },
            "start": 1018,
            "end": 1030
          }
        ],
        "start": 1012,
        "end": 1064
      },
      "expression": false,
      "start": 982,
      "end": 1064
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefinedBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1075,
        "end": 1087
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1104,
                "end": 1107
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1117
              },
              "start": 1103,
              "end": 1117
            },
            "start": 1096,
            "end": 1118
          }
        ],
        "start": 1090,
        "end": 1152
      },
      "expression": false,
      "start": 1066,
      "end": 1152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleRets1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1163,
        "end": 1176
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
          "typeAnnotation": null,
          "start": 1177,
          "end": 1178
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1224,
              "end": 1225
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1245,
                      "end": 1248
                    },
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1249,
                      "end": 1250
                    },
                    "start": 1244,
                    "end": 1250
                  },
                  "start": 1237,
                  "end": 1251
                }
              ],
              "start": 1227,
              "end": 1257
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1284,
                    "end": 1288
                  },
                  "start": 1277,
                  "end": 1289
                }
              ],
              "start": 1267,
              "end": 1295
            },
            "start": 1220,
            "end": 1295
          }
        ],
        "start": 1180,
        "end": 1297
      },
      "expression": false,
      "start": 1154,
      "end": 1297
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleRets2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1308,
        "end": 1321
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
          "typeAnnotation": null,
          "start": 1322,
          "end": 1323
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1369,
              "end": 1370
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1389,
                    "end": 1393
                  },
                  "start": 1382,
                  "end": 1394
                }
              ],
              "start": 1372,
              "end": 1400
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1414,
                  "end": 1415
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1419,
                  "end": 1420
                },
                "start": 1414,
                "end": 1420
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1440,
                        "end": 1443
                      },
                      "expression": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1444,
                        "end": 1445
                      },
                      "start": 1439,
                      "end": 1445
                    },
                    "start": 1432,
                    "end": 1446
                  }
                ],
                "start": 1422,
                "end": 1452
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1479,
                      "end": 1488
                    },
                    "start": 1472,
                    "end": 1489
                  }
                ],
                "start": 1462,
                "end": 1495
              },
              "start": 1410,
              "end": 1495
            },
            "start": 1365,
            "end": 1495
          }
        ],
        "start": 1325,
        "end": 1497
      },
      "expression": false,
      "start": 1299,
      "end": 1497
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
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1534,
            "end": 1538
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1542,
              "end": 1545
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1546,
              "end": 1550
            },
            "start": 1541,
            "end": 1550
          },
          "definite": false,
          "start": 1534,
          "end": 1550
        }
      ],
      "declare": false,
      "start": 1530,
      "end": 1551
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
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1556,
            "end": 1560
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1564,
              "end": 1567
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1568,
              "end": 1577
            },
            "start": 1563,
            "end": 1577
          },
          "definite": false,
          "start": 1556,
          "end": 1577
        }
      ],
      "declare": false,
      "start": 1552,
      "end": 1578
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
            "name": "bar3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1583,
            "end": 1587
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1591,
              "end": 1594
            },
            "expression": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1595,
              "end": 1596
            },
            "start": 1590,
            "end": 1596
          },
          "definite": false,
          "start": 1583,
          "end": 1596
        }
      ],
      "declare": false,
      "start": 1579,
      "end": 1597
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
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1602,
            "end": 1607
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1611,
              "end": 1614
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1616,
                  "end": 1620
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1622,
                  "end": 1631
                }
              ],
              "start": 1615,
              "end": 1632
            },
            "start": 1610,
            "end": 1632
          },
          "definite": false,
          "start": 1602,
          "end": 1632
        }
      ],
      "declare": false,
      "start": 1598,
      "end": 1633
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1633
}
```
