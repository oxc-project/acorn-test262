__ESTREE_TEST__:AST:
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              },
              "start": 168,
              "end": 176
            },
            "start": 165,
            "end": 176
          },
          "init": null,
          "definite": false,
          "start": 165,
          "end": 176
        }
      ],
      "declare": false,
      "start": 161,
      "end": 177
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 188,
                    "end": 194
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 197,
                    "end": 203
                  }
                ],
                "start": 188,
                "end": 203
              },
              "start": 186,
              "end": 203
            },
            "start": 182,
            "end": 203
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 203
        }
      ],
      "declare": false,
      "start": 178,
      "end": 204
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
        "start": 211,
        "end": 213
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 231
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 239,
                          "end": 245
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 248,
                          "end": 254
                        }
                      ],
                      "start": 239,
                      "end": 254
                    },
                    "start": 237,
                    "end": 254
                  },
                  "start": 232,
                  "end": 254
                }
              ],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 313,
                        "end": 316
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 326,
                              "end": 330
                            },
                            "prefix": true,
                            "start": 319,
                            "end": 330
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 335,
                            "end": 343
                          },
                          "start": 319,
                          "end": 343
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 347,
                            "end": 351
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 352,
                            "end": 358
                          },
                          "optional": false,
                          "computed": false,
                          "start": 347,
                          "end": 358
                        },
                        "start": 319,
                        "end": 358
                      },
                      "start": 313,
                      "end": 358
                    },
                    "directive": null,
                    "start": 313,
                    "end": 359
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 434,
                                  "end": 440
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 443,
                                  "end": 449
                                }
                              ],
                              "start": 434,
                              "end": 449
                            },
                            "start": 432,
                            "end": 449
                          },
                          "start": 428,
                          "end": 449
                        },
                        "init": null,
                        "definite": false,
                        "start": 428,
                        "end": 449
                      }
                    ],
                    "declare": false,
                    "start": 424,
                    "end": 450
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 462
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 472,
                              "end": 476
                            },
                            "prefix": true,
                            "start": 465,
                            "end": 476
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 481,
                            "end": 489
                          },
                          "start": 465,
                          "end": 489
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 493,
                            "end": 497
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 498,
                            "end": 504
                          },
                          "optional": false,
                          "computed": false,
                          "start": 493,
                          "end": 504
                        },
                        "start": 465,
                        "end": 504
                      },
                      "start": 459,
                      "end": 504
                    },
                    "directive": null,
                    "start": 459,
                    "end": 505
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 571,
                        "end": 574
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 584,
                              "end": 589
                            },
                            "prefix": true,
                            "start": 577,
                            "end": 589
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 594,
                            "end": 602
                          },
                          "start": 577,
                          "end": 602
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 606,
                            "end": 611
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 612,
                            "end": 618
                          },
                          "optional": false,
                          "computed": false,
                          "start": 606,
                          "end": 618
                        },
                        "start": 577,
                        "end": 618
                      },
                      "start": 571,
                      "end": 618
                    },
                    "directive": null,
                    "start": 571,
                    "end": 619
                  }
                ],
                "start": 256,
                "end": 635
              },
              "expression": false,
              "start": 231,
              "end": 635
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 220,
            "end": 635
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 685
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 693,
                          "end": 699
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 702,
                          "end": 708
                        }
                      ],
                      "start": 693,
                      "end": 708
                    },
                    "start": 691,
                    "end": 708
                  },
                  "start": 686,
                  "end": 708
                }
              ],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 767,
                        "end": 770
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 780,
                              "end": 784
                            },
                            "prefix": true,
                            "start": 773,
                            "end": 784
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 789,
                            "end": 797
                          },
                          "start": 773,
                          "end": 797
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 801,
                            "end": 805
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 806,
                            "end": 812
                          },
                          "optional": false,
                          "computed": false,
                          "start": 801,
                          "end": 812
                        },
                        "start": 773,
                        "end": 812
                      },
                      "start": 767,
                      "end": 812
                    },
                    "directive": null,
                    "start": 767,
                    "end": 813
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 888,
                                  "end": 894
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 897,
                                  "end": 903
                                }
                              ],
                              "start": 888,
                              "end": 903
                            },
                            "start": 886,
                            "end": 903
                          },
                          "start": 882,
                          "end": 903
                        },
                        "init": null,
                        "definite": false,
                        "start": 882,
                        "end": 903
                      }
                    ],
                    "declare": false,
                    "start": 878,
                    "end": 904
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 913,
                        "end": 916
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 926,
                              "end": 930
                            },
                            "prefix": true,
                            "start": 919,
                            "end": 930
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 935,
                            "end": 943
                          },
                          "start": 919,
                          "end": 943
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 947,
                            "end": 951
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 952,
                            "end": 958
                          },
                          "optional": false,
                          "computed": false,
                          "start": 947,
                          "end": 958
                        },
                        "start": 919,
                        "end": 958
                      },
                      "start": 913,
                      "end": 958
                    },
                    "directive": null,
                    "start": 913,
                    "end": 959
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1025,
                        "end": 1028
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1038,
                              "end": 1043
                            },
                            "prefix": true,
                            "start": 1031,
                            "end": 1043
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1048,
                            "end": 1056
                          },
                          "start": 1031,
                          "end": 1056
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1060,
                            "end": 1065
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1066,
                            "end": 1072
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1060,
                          "end": 1072
                        },
                        "start": 1031,
                        "end": 1072
                      },
                      "start": 1025,
                      "end": 1072
                    },
                    "directive": null,
                    "start": 1025,
                    "end": 1073
                  }
                ],
                "start": 710,
                "end": 1089
              },
              "expression": false,
              "start": 685,
              "end": 1089
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 675,
            "end": 1089
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1129,
              "end": 1131
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1139,
                          "end": 1145
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1148,
                          "end": 1154
                        }
                      ],
                      "start": 1139,
                      "end": 1154
                    },
                    "start": 1137,
                    "end": 1154
                  },
                  "start": 1132,
                  "end": 1154
                }
              ],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1213,
                        "end": 1216
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1226,
                              "end": 1230
                            },
                            "prefix": true,
                            "start": 1219,
                            "end": 1230
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1235,
                            "end": 1243
                          },
                          "start": 1219,
                          "end": 1243
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1247,
                            "end": 1251
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1252,
                            "end": 1258
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1247,
                          "end": 1258
                        },
                        "start": 1219,
                        "end": 1258
                      },
                      "start": 1213,
                      "end": 1258
                    },
                    "directive": null,
                    "start": 1213,
                    "end": 1259
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1334,
                                  "end": 1340
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1343,
                                  "end": 1349
                                }
                              ],
                              "start": 1334,
                              "end": 1349
                            },
                            "start": 1332,
                            "end": 1349
                          },
                          "start": 1328,
                          "end": 1349
                        },
                        "init": null,
                        "definite": false,
                        "start": 1328,
                        "end": 1349
                      }
                    ],
                    "declare": false,
                    "start": 1324,
                    "end": 1350
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1359,
                        "end": 1362
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1372,
                              "end": 1376
                            },
                            "prefix": true,
                            "start": 1365,
                            "end": 1376
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1381,
                            "end": 1389
                          },
                          "start": 1365,
                          "end": 1389
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1393,
                            "end": 1397
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1398,
                            "end": 1404
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1393,
                          "end": 1404
                        },
                        "start": 1365,
                        "end": 1404
                      },
                      "start": 1359,
                      "end": 1404
                    },
                    "directive": null,
                    "start": 1359,
                    "end": 1405
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1471,
                        "end": 1474
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1484,
                              "end": 1489
                            },
                            "prefix": true,
                            "start": 1477,
                            "end": 1489
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1494,
                            "end": 1502
                          },
                          "start": 1477,
                          "end": 1502
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1506,
                            "end": 1511
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1512,
                            "end": 1518
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1506,
                          "end": 1518
                        },
                        "start": 1477,
                        "end": 1518
                      },
                      "start": 1471,
                      "end": 1518
                    },
                    "directive": null,
                    "start": 1471,
                    "end": 1519
                  }
                ],
                "start": 1156,
                "end": 1535
              },
              "expression": false,
              "start": 1131,
              "end": 1535
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1129,
            "end": 1535
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1590,
              "end": 1592
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1600,
                          "end": 1606
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1609,
                          "end": 1615
                        }
                      ],
                      "start": 1600,
                      "end": 1615
                    },
                    "start": 1598,
                    "end": 1615
                  },
                  "start": 1593,
                  "end": 1615
                }
              ],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1674,
                        "end": 1677
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1687,
                              "end": 1691
                            },
                            "prefix": true,
                            "start": 1680,
                            "end": 1691
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1696,
                            "end": 1704
                          },
                          "start": 1680,
                          "end": 1704
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1708,
                            "end": 1712
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1713,
                            "end": 1719
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1708,
                          "end": 1719
                        },
                        "start": 1680,
                        "end": 1719
                      },
                      "start": 1674,
                      "end": 1719
                    },
                    "directive": null,
                    "start": 1674,
                    "end": 1720
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1795,
                                  "end": 1801
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1804,
                                  "end": 1810
                                }
                              ],
                              "start": 1795,
                              "end": 1810
                            },
                            "start": 1793,
                            "end": 1810
                          },
                          "start": 1789,
                          "end": 1810
                        },
                        "init": null,
                        "definite": false,
                        "start": 1789,
                        "end": 1810
                      }
                    ],
                    "declare": false,
                    "start": 1785,
                    "end": 1811
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1820,
                        "end": 1823
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1833,
                              "end": 1837
                            },
                            "prefix": true,
                            "start": 1826,
                            "end": 1837
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1842,
                            "end": 1850
                          },
                          "start": 1826,
                          "end": 1850
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1854,
                            "end": 1858
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1859,
                            "end": 1865
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1854,
                          "end": 1865
                        },
                        "start": 1826,
                        "end": 1865
                      },
                      "start": 1820,
                      "end": 1865
                    },
                    "directive": null,
                    "start": 1820,
                    "end": 1866
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1932,
                        "end": 1935
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1945,
                              "end": 1950
                            },
                            "prefix": true,
                            "start": 1938,
                            "end": 1950
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1955,
                            "end": 1963
                          },
                          "start": 1938,
                          "end": 1963
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1967,
                            "end": 1972
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1973,
                            "end": 1979
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1967,
                          "end": 1979
                        },
                        "start": 1938,
                        "end": 1979
                      },
                      "start": 1932,
                      "end": 1979
                    },
                    "directive": null,
                    "start": 1932,
                    "end": 1980
                  }
                ],
                "start": 1617,
                "end": 1996
              },
              "expression": false,
              "start": 1592,
              "end": 1996
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1575,
            "end": 1996
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2043,
              "end": 2045
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2053,
                          "end": 2059
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2062,
                          "end": 2068
                        }
                      ],
                      "start": 2053,
                      "end": 2068
                    },
                    "start": 2051,
                    "end": 2068
                  },
                  "start": 2046,
                  "end": 2068
                }
              ],
              "returnType": null,
              "body": {
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
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2127,
                        "end": 2130
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2140,
                              "end": 2144
                            },
                            "prefix": true,
                            "start": 2133,
                            "end": 2144
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2149,
                            "end": 2157
                          },
                          "start": 2133,
                          "end": 2157
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2161,
                            "end": 2165
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2166,
                            "end": 2172
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2161,
                          "end": 2172
                        },
                        "start": 2133,
                        "end": 2172
                      },
                      "start": 2127,
                      "end": 2172
                    },
                    "directive": null,
                    "start": 2127,
                    "end": 2173
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2248,
                                  "end": 2254
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2257,
                                  "end": 2263
                                }
                              ],
                              "start": 2248,
                              "end": 2263
                            },
                            "start": 2246,
                            "end": 2263
                          },
                          "start": 2242,
                          "end": 2263
                        },
                        "init": null,
                        "definite": false,
                        "start": 2242,
                        "end": 2263
                      }
                    ],
                    "declare": false,
                    "start": 2238,
                    "end": 2264
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2273,
                        "end": 2276
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2286,
                              "end": 2290
                            },
                            "prefix": true,
                            "start": 2279,
                            "end": 2290
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2295,
                            "end": 2303
                          },
                          "start": 2279,
                          "end": 2303
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2307,
                            "end": 2311
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2312,
                            "end": 2318
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2307,
                          "end": 2318
                        },
                        "start": 2279,
                        "end": 2318
                      },
                      "start": 2273,
                      "end": 2318
                    },
                    "directive": null,
                    "start": 2273,
                    "end": 2319
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2385,
                        "end": 2388
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2398,
                              "end": 2403
                            },
                            "prefix": true,
                            "start": 2391,
                            "end": 2403
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2408,
                            "end": 2416
                          },
                          "start": 2391,
                          "end": 2416
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2420,
                            "end": 2425
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2426,
                            "end": 2432
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2420,
                          "end": 2432
                        },
                        "start": 2391,
                        "end": 2432
                      },
                      "start": 2385,
                      "end": 2432
                    },
                    "directive": null,
                    "start": 2385,
                    "end": 2433
                  }
                ],
                "start": 2070,
                "end": 2449
              },
              "expression": false,
              "start": 2045,
              "end": 2449
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2036,
            "end": 2449
          }
        ],
        "start": 214,
        "end": 2451
      },
      "abstract": false,
      "declare": false,
      "start": 205,
      "end": 2451
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 2451
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 161,
    "end": 164,
    "range": [
      161,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 165,
    "end": 168,
    "range": [
      165,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 170,
    "end": 176,
    "range": [
      170,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181,
    "range": [
      178,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 182,
    "end": 186,
    "range": [
      182,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 197,
    "end": 203,
    "range": [
      197,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 205,
    "end": 210,
    "range": [
      205,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 211,
    "end": 213,
    "range": [
      211,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 220,
    "end": 231,
    "range": [
      220,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 232,
    "end": 237,
    "range": [
      232,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 239,
    "end": 245,
    "range": [
      239,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 248,
    "end": 254,
    "range": [
      248,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 313,
    "end": 316,
    "range": [
      313,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 319,
    "end": 325,
    "range": [
      319,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 326,
    "end": 330,
    "range": [
      326,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 331,
    "end": 334,
    "range": [
      331,
      334
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 335,
    "end": 343,
    "range": [
      335,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 344,
    "end": 346,
    "range": [
      344,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 347,
    "end": 351,
    "range": [
      347,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 352,
    "end": 358,
    "range": [
      352,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 424,
    "end": 427,
    "range": [
      424,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 428,
    "end": 432,
    "range": [
      428,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 434,
    "end": 440,
    "range": [
      434,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 443,
    "end": 449,
    "range": [
      443,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 459,
    "end": 462,
    "range": [
      459,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 465,
    "end": 471,
    "range": [
      465,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 472,
    "end": 476,
    "range": [
      472,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 477,
    "end": 480,
    "range": [
      477,
      480
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 481,
    "end": 489,
    "range": [
      481,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 490,
    "end": 492,
    "range": [
      490,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 493,
    "end": 497,
    "range": [
      493,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 498,
    "end": 504,
    "range": [
      498,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 571,
    "end": 574,
    "range": [
      571,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 577,
    "end": 583,
    "range": [
      577,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 584,
    "end": 589,
    "range": [
      584,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 590,
    "end": 593,
    "range": [
      590,
      593
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 594,
    "end": 602,
    "range": [
      594,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 603,
    "end": 605,
    "range": [
      603,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 606,
    "end": 611,
    "range": [
      606,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 612,
    "end": 618,
    "range": [
      612,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 675,
    "end": 682,
    "range": [
      675,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 683,
    "end": 685,
    "range": [
      683,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 686,
    "end": 691,
    "range": [
      686,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 693,
    "end": 699,
    "range": [
      693,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 702,
    "end": 708,
    "range": [
      702,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 767,
    "end": 770,
    "range": [
      767,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 773,
    "end": 779,
    "range": [
      773,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 780,
    "end": 784,
    "range": [
      780,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 785,
    "end": 788,
    "range": [
      785,
      788
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 789,
    "end": 797,
    "range": [
      789,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 798,
    "end": 800,
    "range": [
      798,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 801,
    "end": 805,
    "range": [
      801,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 806,
    "end": 812,
    "range": [
      806,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 878,
    "end": 881,
    "range": [
      878,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 882,
    "end": 886,
    "range": [
      882,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 888,
    "end": 894,
    "range": [
      888,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 897,
    "end": 903,
    "range": [
      897,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 913,
    "end": 916,
    "range": [
      913,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 919,
    "end": 925,
    "range": [
      919,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 926,
    "end": 930,
    "range": [
      926,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 931,
    "end": 934,
    "range": [
      931,
      934
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 935,
    "end": 943,
    "range": [
      935,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 944,
    "end": 946,
    "range": [
      944,
      946
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 947,
    "end": 951,
    "range": [
      947,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 952,
    "end": 958,
    "range": [
      952,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1025,
    "end": 1028,
    "range": [
      1025,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1031,
    "end": 1037,
    "range": [
      1031,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1038,
    "end": 1043,
    "range": [
      1038,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1044,
    "end": 1047,
    "range": [
      1044,
      1047
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1048,
    "end": 1056,
    "range": [
      1048,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1057,
    "end": 1059,
    "range": [
      1057,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1060,
    "end": 1065,
    "range": [
      1060,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1066,
    "end": 1072,
    "range": [
      1066,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1129,
    "end": 1131,
    "range": [
      1129,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1132,
    "end": 1137,
    "range": [
      1132,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1139,
    "end": 1145,
    "range": [
      1139,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1148,
    "end": 1154,
    "range": [
      1148,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1213,
    "end": 1216,
    "range": [
      1213,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1219,
    "end": 1225,
    "range": [
      1219,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1226,
    "end": 1230,
    "range": [
      1226,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1231,
    "end": 1234,
    "range": [
      1231,
      1234
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1235,
    "end": 1243,
    "range": [
      1235,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1244,
    "end": 1246,
    "range": [
      1244,
      1246
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1247,
    "end": 1251,
    "range": [
      1247,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1252,
    "end": 1258,
    "range": [
      1252,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1324,
    "end": 1327,
    "range": [
      1324,
      1327
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1328,
    "end": 1332,
    "range": [
      1328,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1334,
    "end": 1340,
    "range": [
      1334,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1343,
    "end": 1349,
    "range": [
      1343,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1359,
    "end": 1362,
    "range": [
      1359,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1365,
    "end": 1371,
    "range": [
      1365,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1372,
    "end": 1376,
    "range": [
      1372,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1377,
    "end": 1380,
    "range": [
      1377,
      1380
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1381,
    "end": 1389,
    "range": [
      1381,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1390,
    "end": 1392,
    "range": [
      1390,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1393,
    "end": 1397,
    "range": [
      1393,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1398,
    "end": 1404,
    "range": [
      1398,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1471,
    "end": 1474,
    "range": [
      1471,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1477,
    "end": 1483,
    "range": [
      1477,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1484,
    "end": 1489,
    "range": [
      1484,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1490,
    "end": 1493,
    "range": [
      1490,
      1493
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1494,
    "end": 1502,
    "range": [
      1494,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1503,
    "end": 1505,
    "range": [
      1503,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1506,
    "end": 1511,
    "range": [
      1506,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1512,
    "end": 1518,
    "range": [
      1512,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1575,
    "end": 1582,
    "range": [
      1575,
      1582
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1583,
    "end": 1589,
    "range": [
      1583,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1590,
    "end": 1592,
    "range": [
      1590,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1593,
    "end": 1598,
    "range": [
      1593,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1600,
    "end": 1606,
    "range": [
      1600,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1609,
    "end": 1615,
    "range": [
      1609,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1674,
    "end": 1677,
    "range": [
      1674,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1680,
    "end": 1686,
    "range": [
      1680,
      1686
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1687,
    "end": 1691,
    "range": [
      1687,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1692,
    "end": 1695,
    "range": [
      1692,
      1695
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1696,
    "end": 1704,
    "range": [
      1696,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1705,
    "end": 1707,
    "range": [
      1705,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1708,
    "end": 1712,
    "range": [
      1708,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1713,
    "end": 1719,
    "range": [
      1713,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1785,
    "end": 1788,
    "range": [
      1785,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1789,
    "end": 1793,
    "range": [
      1789,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1795,
    "end": 1801,
    "range": [
      1795,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1804,
    "end": 1810,
    "range": [
      1804,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1820,
    "end": 1823,
    "range": [
      1820,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1826,
    "end": 1832,
    "range": [
      1826,
      1832
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1833,
    "end": 1837,
    "range": [
      1833,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1838,
    "end": 1841,
    "range": [
      1838,
      1841
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1842,
    "end": 1850,
    "range": [
      1842,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1851,
    "end": 1853,
    "range": [
      1851,
      1853
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1854,
    "end": 1858,
    "range": [
      1854,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1859,
    "end": 1865,
    "range": [
      1859,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1932,
    "end": 1935,
    "range": [
      1932,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1938,
    "end": 1944,
    "range": [
      1938,
      1944
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1945,
    "end": 1950,
    "range": [
      1945,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1951,
    "end": 1954,
    "range": [
      1951,
      1954
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1955,
    "end": 1963,
    "range": [
      1955,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1964,
    "end": 1966,
    "range": [
      1964,
      1966
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1967,
    "end": 1972,
    "range": [
      1967,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1973,
    "end": 1979,
    "range": [
      1973,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2036,
    "end": 2042,
    "range": [
      2036,
      2042
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2043,
    "end": 2045,
    "range": [
      2043,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2046,
    "end": 2051,
    "range": [
      2046,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2053,
    "end": 2059,
    "range": [
      2053,
      2059
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2062,
    "end": 2068,
    "range": [
      2062,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2127,
    "end": 2130,
    "range": [
      2127,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2133,
    "end": 2139,
    "range": [
      2133,
      2139
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 2140,
    "end": 2144,
    "range": [
      2140,
      2144
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2145,
    "end": 2148,
    "range": [
      2145,
      2148
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2149,
    "end": 2157,
    "range": [
      2149,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2158,
    "end": 2160,
    "range": [
      2158,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 2161,
    "end": 2165,
    "range": [
      2161,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2166,
    "end": 2172,
    "range": [
      2166,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2238,
    "end": 2241,
    "range": [
      2238,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2242,
    "end": 2246,
    "range": [
      2242,
      2246
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2248,
    "end": 2254,
    "range": [
      2248,
      2254
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": ";",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2273,
    "end": 2276,
    "range": [
      2273,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2279,
    "end": 2285,
    "range": [
      2279,
      2285
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2286,
    "end": 2290,
    "range": [
      2286,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2291,
    "end": 2294,
    "range": [
      2291,
      2294
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2295,
    "end": 2303,
    "range": [
      2295,
      2303
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2304,
    "end": 2306,
    "range": [
      2304,
      2306
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2307,
    "end": 2311,
    "range": [
      2307,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2312,
    "end": 2318,
    "range": [
      2312,
      2318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2318,
    "end": 2319,
    "range": [
      2318,
      2319
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2385,
    "end": 2388,
    "range": [
      2385,
      2388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2391,
    "end": 2397,
    "range": [
      2391,
      2397
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2398,
    "end": 2403,
    "range": [
      2398,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2404,
    "end": 2407,
    "range": [
      2404,
      2407
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2408,
    "end": 2416,
    "range": [
      2408,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2417,
    "end": 2419,
    "range": [
      2417,
      2419
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2420,
    "end": 2425,
    "range": [
      2420,
      2425
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2425,
    "end": 2426,
    "range": [
      2425,
      2426
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2426,
    "end": 2432,
    "range": [
      2426,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2448,
    "end": 2449,
    "range": [
      2448,
      2449
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2450,
    "end": 2451,
    "range": [
      2450,
      2451
    ]
  }
]
```
