__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1633,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 74,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 74,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 20,
              "end": 74,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 26,
                  "end": 40,
                  "argument": {
                    "type": "TSTypeAssertion",
                    "start": 33,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 34,
                      "end": 37
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 38,
                      "end": 39,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 88,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 157,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 97,
            "end": 123,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 104,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 105,
                "end": 108
              },
              "expression": {
                "type": "Literal",
                "start": 109,
                "end": 122,
                "value": "hello world",
                "raw": "\"hello world\""
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 557,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 557,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 184,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 179,
              "end": 183,
              "value": null,
              "raw": "null"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 217,
            "end": 233,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 220,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "start": 223,
              "end": 232,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 266,
            "end": 349,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 284,
              "decorators": [],
              "name": "tempVar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 284,
              "end": 349,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 287,
                "end": 349,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 297,
                    "end": 311,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 304,
                      "end": 310,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 305,
                        "end": 308
                      },
                      "expression": {
                        "type": "Literal",
                        "start": 309,
                        "end": 310,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 355,
            "end": 453,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 379,
              "decorators": [],
              "name": "returnBarWithCase",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 379,
              "end": 453,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 382,
                "end": 453,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 426,
                    "end": 447,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 433,
                      "end": 446,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 434,
                        "end": 437
                      },
                      "expression": {
                        "type": "MemberExpression",
                        "start": 438,
                        "end": 446,
                        "object": {
                          "type": "ThisExpression",
                          "start": 438,
                          "end": 442
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 446,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 459,
            "end": 555,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 466,
              "end": 483,
              "decorators": [],
              "name": "returnFooWithCase",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 483,
              "end": 555,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 486,
                "end": 555,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 496,
                    "end": 517,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 503,
                      "end": 516,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 504,
                        "end": 507
                      },
                      "expression": {
                        "type": "MemberExpression",
                        "start": 508,
                        "end": 516,
                        "object": {
                          "type": "ThisExpression",
                          "start": 508,
                          "end": 512
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 513,
                          "end": 516,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 559,
      "end": 824,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 565,
        "end": 567,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 568,
        "end": 824,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 574,
            "end": 590,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 574,
              "end": 582,
              "decorators": [],
              "name": "getValue",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 585,
              "end": 589,
              "value": null,
              "raw": "null"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 624,
            "end": 721,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 635,
              "end": 644,
              "decorators": [],
              "name": "castedGet",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 644,
              "end": 721,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 647,
                "end": 721,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 657,
                    "end": 683,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 664,
                      "end": 682,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 665,
                        "end": 668
                      },
                      "expression": {
                        "type": "MemberExpression",
                        "start": 669,
                        "end": 682,
                        "object": {
                          "type": "ThisExpression",
                          "start": 669,
                          "end": 673
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 674,
                          "end": 682,
                          "decorators": [],
                          "name": "getValue",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 727,
            "end": 822,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 738,
              "end": 750,
              "decorators": [],
              "name": "notCastedGet",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 750,
              "end": 822,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 753,
                "end": 822,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 763,
                    "end": 784,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 770,
                      "end": 783,
                      "object": {
                        "type": "ThisExpression",
                        "start": 770,
                        "end": 774
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 775,
                        "end": 783,
                        "decorators": [],
                        "name": "getValue",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 826,
      "end": 905,
      "id": {
        "type": "Identifier",
        "start": 835,
        "end": 845,
        "decorators": [],
        "name": "castedNull",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 848,
        "end": 905,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 854,
            "end": 871,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 861,
              "end": 870,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 862,
                "end": 865
              },
              "expression": {
                "type": "Literal",
                "start": 866,
                "end": 870,
                "value": null,
                "raw": "null"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 907,
      "end": 980,
      "id": {
        "type": "Identifier",
        "start": 916,
        "end": 929,
        "decorators": [],
        "name": "notCastedNull",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 932,
        "end": 980,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 938,
            "end": 950,
            "argument": {
              "type": "Literal",
              "start": 945,
              "end": 949,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 982,
      "end": 1064,
      "id": {
        "type": "Identifier",
        "start": 991,
        "end": 1004,
        "decorators": [],
        "name": "returnTypeBar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1006,
        "end": 1011,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1008,
          "end": 1011
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1012,
        "end": 1064,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1018,
            "end": 1030,
            "argument": {
              "type": "Literal",
              "start": 1025,
              "end": 1029,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1066,
      "end": 1152,
      "id": {
        "type": "Identifier",
        "start": 1075,
        "end": 1087,
        "decorators": [],
        "name": "undefinedBar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1090,
        "end": 1152,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1096,
            "end": 1118,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 1103,
              "end": 1117,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1104,
                "end": 1107
              },
              "expression": {
                "type": "Identifier",
                "start": 1108,
                "end": 1117,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1154,
      "end": 1297,
      "id": {
        "type": "Identifier",
        "start": 1163,
        "end": 1176,
        "decorators": [],
        "name": "multipleRets1",
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
          "start": 1177,
          "end": 1178,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1180,
        "end": 1297,
        "body": [
          {
            "type": "IfStatement",
            "start": 1220,
            "end": 1295,
            "test": {
              "type": "Identifier",
              "start": 1224,
              "end": 1225,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1227,
              "end": 1257,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1237,
                  "end": 1251,
                  "argument": {
                    "type": "TSTypeAssertion",
                    "start": 1244,
                    "end": 1250,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1245,
                      "end": 1248
                    },
                    "expression": {
                      "type": "Literal",
                      "start": 1249,
                      "end": 1250,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1267,
              "end": 1295,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1277,
                  "end": 1289,
                  "argument": {
                    "type": "Literal",
                    "start": 1284,
                    "end": 1288,
                    "value": null,
                    "raw": "null"
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
      "start": 1299,
      "end": 1497,
      "id": {
        "type": "Identifier",
        "start": 1308,
        "end": 1321,
        "decorators": [],
        "name": "multipleRets2",
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
          "start": 1322,
          "end": 1323,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1325,
        "end": 1497,
        "body": [
          {
            "type": "IfStatement",
            "start": 1365,
            "end": 1495,
            "test": {
              "type": "Identifier",
              "start": 1369,
              "end": 1370,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1372,
              "end": 1400,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1382,
                  "end": 1394,
                  "argument": {
                    "type": "Literal",
                    "start": 1389,
                    "end": 1393,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 1410,
              "end": 1495,
              "test": {
                "type": "BinaryExpression",
                "start": 1414,
                "end": 1420,
                "left": {
                  "type": "Identifier",
                  "start": 1414,
                  "end": 1415,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "start": 1419,
                  "end": 1420,
                  "value": 1,
                  "raw": "1"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 1422,
                "end": 1452,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1432,
                    "end": 1446,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 1439,
                      "end": 1445,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1440,
                        "end": 1443
                      },
                      "expression": {
                        "type": "Literal",
                        "start": 1444,
                        "end": 1445,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 1462,
                "end": 1495,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1472,
                    "end": 1489,
                    "argument": {
                      "type": "Identifier",
                      "start": 1479,
                      "end": 1488,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1530,
      "end": 1551,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1534,
          "end": 1550,
          "id": {
            "type": "Identifier",
            "start": 1534,
            "end": 1538,
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1541,
            "end": 1550,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1542,
              "end": 1545
            },
            "expression": {
              "type": "Literal",
              "start": 1546,
              "end": 1550,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1552,
      "end": 1578,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1556,
          "end": 1577,
          "id": {
            "type": "Identifier",
            "start": 1556,
            "end": 1560,
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1563,
            "end": 1577,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1564,
              "end": 1567
            },
            "expression": {
              "type": "Identifier",
              "start": 1568,
              "end": 1577,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1579,
      "end": 1597,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1583,
          "end": 1596,
          "id": {
            "type": "Identifier",
            "start": 1583,
            "end": 1587,
            "decorators": [],
            "name": "bar3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1590,
            "end": 1596,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1591,
              "end": 1594
            },
            "expression": {
              "type": "Literal",
              "start": 1595,
              "end": 1596,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1598,
      "end": 1633,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1602,
          "end": 1632,
          "id": {
            "type": "Identifier",
            "start": 1602,
            "end": 1607,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1610,
            "end": 1632,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1611,
              "end": 1614
            },
            "expression": {
              "type": "ArrayExpression",
              "start": 1615,
              "end": 1632,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1616,
                  "end": 1620,
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Identifier",
                  "start": 1622,
                  "end": 1631,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
