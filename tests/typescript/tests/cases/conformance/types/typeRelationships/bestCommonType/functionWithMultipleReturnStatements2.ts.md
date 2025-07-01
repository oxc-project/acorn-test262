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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 126
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 139,
              "end": 143
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 162,
                    "end": 163
                  },
                  "start": 155,
                  "end": 164
                }
              ],
              "start": 145,
              "end": 170
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
                    "start": 193,
                    "end": 197
                  },
                  "start": 186,
                  "end": 198
                }
              ],
              "start": 176,
              "end": 204
            },
            "start": 135,
            "end": 204
          }
        ],
        "start": 129,
        "end": 206
      },
      "expression": false,
      "start": 115,
      "end": 206
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 219
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 232,
              "end": 236
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 255,
                    "end": 256
                  },
                  "start": 248,
                  "end": 257
                }
              ],
              "start": 238,
              "end": 263
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 273,
                "end": 278
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
                      "start": 297,
                      "end": 301
                    },
                    "start": 290,
                    "end": 302
                  }
                ],
                "start": 280,
                "end": 308
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 331,
                      "end": 332
                    },
                    "start": 324,
                    "end": 333
                  }
                ],
                "start": 314,
                "end": 339
              },
              "start": 269,
              "end": 339
            },
            "start": 228,
            "end": 339
          }
        ],
        "start": 222,
        "end": 341
      },
      "expression": false,
      "start": 208,
      "end": 341
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 352,
        "end": 354
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 384,
                    "end": 385
                  },
                  "start": 377,
                  "end": 386
                }
              ],
              "start": 367,
              "end": 392
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 405
              },
              "body": {
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
                      "start": 424,
                      "end": 433
                    },
                    "start": 417,
                    "end": 434
                  }
                ],
                "start": 407,
                "end": 440
              },
              "start": 397,
              "end": 440
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 470,
                    "end": 471
                  },
                  "start": 463,
                  "end": 472
                }
              ],
              "start": 453,
              "end": 478
            },
            "start": 363,
            "end": 478
          }
        ],
        "start": 357,
        "end": 480
      },
      "expression": false,
      "start": 343,
      "end": 480
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
        "end": 493
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
              "value": 1,
              "raw": "1",
              "start": 509,
              "end": 510
            },
            "start": 502,
            "end": 511
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 533
              },
              "typeArguments": null,
              "arguments": [],
              "start": 523,
              "end": 535
            },
            "start": 516,
            "end": 536
          }
        ],
        "start": 496,
        "end": 538
      },
      "expression": false,
      "start": 482,
      "end": 538
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 551
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 553
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 552,
            "end": 553
          }
        ],
        "start": 551,
        "end": 554
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 559
              },
              "typeArguments": null,
              "start": 558,
              "end": 559
            },
            "start": 556,
            "end": 559
          },
          "start": 555,
          "end": 559
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 571,
              "end": 575
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
                    "start": 594,
                    "end": 595
                  },
                  "start": 587,
                  "end": 596
                }
              ],
              "start": 577,
              "end": 602
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
                    "start": 625,
                    "end": 629
                  },
                  "start": 618,
                  "end": 630
                }
              ],
              "start": 608,
              "end": 636
            },
            "start": 567,
            "end": 636
          }
        ],
        "start": 561,
        "end": 638
      },
      "expression": false,
      "start": 540,
      "end": 638
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 779,
                      "end": 780
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 782,
                        "end": 788
                      },
                      "start": 780,
                      "end": 788
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 779,
                    "end": 789
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 790,
                      "end": 791
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 794,
                        "end": 800
                      },
                      "start": 792,
                      "end": 800
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 790,
                    "end": 800
                  }
                ],
                "start": 777,
                "end": 802
              },
              "start": 775,
              "end": 802
            },
            "start": 774,
            "end": 802
          },
          "init": null,
          "definite": false,
          "start": 774,
          "end": 802
        }
      ],
      "declare": false,
      "start": 770,
      "end": 803
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 813,
                      "end": 814
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 816,
                        "end": 822
                      },
                      "start": 814,
                      "end": 822
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 813,
                    "end": 823
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 824,
                      "end": 825
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 828,
                        "end": 834
                      },
                      "start": 826,
                      "end": 834
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 824,
                    "end": 834
                  }
                ],
                "start": 811,
                "end": 836
              },
              "start": 809,
              "end": 836
            },
            "start": 808,
            "end": 836
          },
          "init": null,
          "definite": false,
          "start": 808,
          "end": 836
        }
      ],
      "declare": false,
      "start": 804,
      "end": 837
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 867,
        "end": 869
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 882,
              "end": 886
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 905,
                    "end": 906
                  },
                  "start": 898,
                  "end": 907
                }
              ],
              "start": 888,
              "end": 913
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 936,
                    "end": 937
                  },
                  "start": 929,
                  "end": 938
                }
              ],
              "start": 919,
              "end": 944
            },
            "start": 878,
            "end": 944
          }
        ],
        "start": 872,
        "end": 946
      },
      "expression": false,
      "start": 858,
      "end": 946
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 977,
        "end": 980
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 993,
              "end": 997
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1016,
                    "end": 1017
                  },
                  "start": 1009,
                  "end": 1018
                }
              ],
              "start": 999,
              "end": 1024
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1047,
                    "end": 1048
                  },
                  "start": 1040,
                  "end": 1049
                }
              ],
              "start": 1030,
              "end": 1055
            },
            "start": 989,
            "end": 1055
          }
        ],
        "start": 983,
        "end": 1057
      },
      "expression": false,
      "start": 968,
      "end": 1057
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1094,
        "end": 1097
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1110,
              "end": 1114
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                            "type": "TSNumberKeyword",
                            "start": 1137,
                            "end": 1143
                          },
                          "start": 1135,
                          "end": 1143
                        },
                        "start": 1134,
                        "end": 1143
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1148,
                      "end": 1151
                    },
                    "id": null,
                    "generator": false,
                    "start": 1133,
                    "end": 1151
                  },
                  "start": 1126,
                  "end": 1151
                }
              ],
              "start": 1116,
              "end": 1157
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1184,
                              "end": 1190
                            },
                            "typeArguments": null,
                            "start": 1184,
                            "end": 1190
                          },
                          "start": 1182,
                          "end": 1190
                        },
                        "start": 1181,
                        "end": 1190
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1195,
                      "end": 1198
                    },
                    "id": null,
                    "generator": false,
                    "start": 1180,
                    "end": 1198
                  },
                  "start": 1173,
                  "end": 1198
                }
              ],
              "start": 1163,
              "end": 1204
            },
            "start": 1106,
            "end": 1204
          }
        ],
        "start": 1100,
        "end": 1206
      },
      "expression": false,
      "start": 1085,
      "end": 1206
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1243,
        "end": 1246
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1259,
              "end": 1263
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1286,
                              "end": 1292
                            },
                            "typeArguments": null,
                            "start": 1286,
                            "end": 1292
                          },
                          "start": 1284,
                          "end": 1292
                        },
                        "start": 1283,
                        "end": 1292
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1297,
                      "end": 1300
                    },
                    "id": null,
                    "generator": false,
                    "start": 1282,
                    "end": 1300
                  },
                  "start": 1275,
                  "end": 1300
                }
              ],
              "start": 1265,
              "end": 1306
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                            "type": "TSNumberKeyword",
                            "start": 1333,
                            "end": 1339
                          },
                          "start": 1331,
                          "end": 1339
                        },
                        "start": 1330,
                        "end": 1339
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1344,
                      "end": 1347
                    },
                    "id": null,
                    "generator": false,
                    "start": 1329,
                    "end": 1347
                  },
                  "start": 1322,
                  "end": 1347
                }
              ],
              "start": 1312,
              "end": 1361
            },
            "start": 1255,
            "end": 1361
          }
        ],
        "start": 1249,
        "end": 1363
      },
      "expression": false,
      "start": 1234,
      "end": 1363
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 115,
  "end": 1363
}
```
