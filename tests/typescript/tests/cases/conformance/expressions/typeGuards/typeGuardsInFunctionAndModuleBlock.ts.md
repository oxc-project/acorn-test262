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
        "start": 60,
        "end": 63
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
                  "start": 67,
                  "end": 73
                },
                {
                  "type": "TSStringKeyword",
                  "start": 76,
                  "end": 82
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 85,
                  "end": 92
                }
              ],
              "start": 67,
              "end": 92
            },
            "start": 65,
            "end": 92
          },
          "start": 64,
          "end": 92
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                    "start": 114,
                    "end": 115
                  },
                  "prefix": true,
                  "start": 107,
                  "end": 115
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 120,
                  "end": 128
                },
                "start": 107,
                "end": 128
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
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
                              "start": 182,
                              "end": 183
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 187
                            },
                            "definite": false,
                            "start": 182,
                            "end": 187
                          }
                        ],
                        "declare": false,
                        "start": 178,
                        "end": 188
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
                                "start": 235,
                                "end": 236
                              },
                              "prefix": true,
                              "start": 228,
                              "end": 236
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "boolean",
                              "raw": "\"boolean\"",
                              "start": 241,
                              "end": 250
                            },
                            "start": 228,
                            "end": 250
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
                                "start": 269,
                                "end": 270
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 271,
                                "end": 279
                              },
                              "optional": false,
                              "computed": false,
                              "start": 269,
                              "end": 279
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 269,
                            "end": 281
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
                                "start": 311,
                                "end": 312
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 313,
                                "end": 321
                              },
                              "optional": false,
                              "computed": false,
                              "start": 311,
                              "end": 321
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 311,
                            "end": 323
                          },
                          "start": 228,
                          "end": 323
                        },
                        "start": 221,
                        "end": 324
                      }
                    ],
                    "start": 164,
                    "end": 344
                  },
                  "expression": false,
                  "start": 151,
                  "end": 344
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 151,
                "end": 347
              },
              "start": 107,
              "end": 347
            },
            "start": 100,
            "end": 348
          }
        ],
        "start": 94,
        "end": 350
      },
      "expression": false,
      "start": 51,
      "end": 350
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 364
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
                  "start": 368,
                  "end": 374
                },
                {
                  "type": "TSStringKeyword",
                  "start": 377,
                  "end": 383
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 386,
                  "end": 393
                }
              ],
              "start": 368,
              "end": 393
            },
            "start": 366,
            "end": 393
          },
          "start": 365,
          "end": 393
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                    "start": 415,
                    "end": 416
                  },
                  "prefix": true,
                  "start": 408,
                  "end": 416
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 421,
                  "end": 429
                },
                "start": 408,
                "end": 429
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 441
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 462
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
                              "type": "TSNumberKeyword",
                              "start": 466,
                              "end": 472
                            },
                            {
                              "type": "TSBooleanKeyword",
                              "start": 475,
                              "end": 482
                            }
                          ],
                          "start": 466,
                          "end": 482
                        },
                        "start": 464,
                        "end": 482
                      },
                      "start": 463,
                      "end": 482
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 502,
                              "end": 503
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 506,
                              "end": 507
                            },
                            "definite": false,
                            "start": 502,
                            "end": 507
                          }
                        ],
                        "declare": false,
                        "start": 498,
                        "end": 508
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
                                "start": 567,
                                "end": 568
                              },
                              "prefix": true,
                              "start": 560,
                              "end": 568
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "boolean",
                              "raw": "\"boolean\"",
                              "start": 573,
                              "end": 582
                            },
                            "start": 560,
                            "end": 582
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
                                "start": 601,
                                "end": 602
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 603,
                                "end": 611
                              },
                              "optional": false,
                              "computed": false,
                              "start": 601,
                              "end": 611
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 601,
                            "end": 613
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
                                "start": 643,
                                "end": 644
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 645,
                                "end": 653
                              },
                              "optional": false,
                              "computed": false,
                              "start": 643,
                              "end": 653
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 643,
                            "end": 655
                          },
                          "start": 560,
                          "end": 655
                        },
                        "start": 553,
                        "end": 656
                      }
                    ],
                    "start": 484,
                    "end": 676
                  },
                  "expression": false,
                  "start": 452,
                  "end": 676
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 679
                  }
                ],
                "optional": false,
                "start": 452,
                "end": 680
              },
              "start": 408,
              "end": 680
            },
            "start": 401,
            "end": 681
          }
        ],
        "start": 395,
        "end": 725
      },
      "expression": false,
      "start": 351,
      "end": 725
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 739
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
                  "start": 743,
                  "end": 749
                },
                {
                  "type": "TSStringKeyword",
                  "start": 752,
                  "end": 758
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 761,
                  "end": 768
                }
              ],
              "start": 743,
              "end": 768
            },
            "start": 741,
            "end": 768
          },
          "start": 740,
          "end": 768
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                    "start": 790,
                    "end": 791
                  },
                  "prefix": true,
                  "start": 783,
                  "end": 791
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 796,
                  "end": 804
                },
                "start": 783,
                "end": 804
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 816
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 852,
                              "end": 853
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 856,
                              "end": 857
                            },
                            "definite": false,
                            "start": 852,
                            "end": 857
                          }
                        ],
                        "declare": false,
                        "start": 848,
                        "end": 858
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
                                "start": 917,
                                "end": 918
                              },
                              "prefix": true,
                              "start": 910,
                              "end": 918
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "boolean",
                              "raw": "\"boolean\"",
                              "start": 923,
                              "end": 932
                            },
                            "start": 910,
                            "end": 932
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
                                "start": 951,
                                "end": 952
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 953,
                                "end": 961
                              },
                              "optional": false,
                              "computed": false,
                              "start": 951,
                              "end": 961
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 951,
                            "end": 963
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
                                "start": 993,
                                "end": 994
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 995,
                                "end": 1003
                              },
                              "optional": false,
                              "computed": false,
                              "start": 993,
                              "end": 1003
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 993,
                            "end": 1005
                          },
                          "start": 910,
                          "end": 1005
                        },
                        "start": 903,
                        "end": 1006
                      }
                    ],
                    "start": 834,
                    "end": 1026
                  },
                  "id": null,
                  "generator": false,
                  "start": 828,
                  "end": 1026
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 827,
                "end": 1029
              },
              "start": 783,
              "end": 1029
            },
            "start": 776,
            "end": 1030
          }
        ],
        "start": 770,
        "end": 1032
      },
      "expression": false,
      "start": 726,
      "end": 1032
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1042,
        "end": 1046
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
                  "start": 1050,
                  "end": 1056
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1059,
                  "end": 1065
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1068,
                  "end": 1075
                }
              ],
              "start": 1050,
              "end": 1075
            },
            "start": 1048,
            "end": 1075
          },
          "start": 1047,
          "end": 1075
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                    "start": 1097,
                    "end": 1098
                  },
                  "prefix": true,
                  "start": 1090,
                  "end": 1098
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1103,
                  "end": 1111
                },
                "start": 1090,
                "end": 1111
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1122,
                "end": 1123
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
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
                              "type": "TSNumberKeyword",
                              "start": 1139,
                              "end": 1145
                            },
                            {
                              "type": "TSBooleanKeyword",
                              "start": 1148,
                              "end": 1155
                            }
                          ],
                          "start": 1139,
                          "end": 1155
                        },
                        "start": 1137,
                        "end": 1155
                      },
                      "start": 1136,
                      "end": 1155
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1178,
                              "end": 1179
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1182,
                              "end": 1183
                            },
                            "definite": false,
                            "start": 1178,
                            "end": 1183
                          }
                        ],
                        "declare": false,
                        "start": 1174,
                        "end": 1184
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
                                "start": 1243,
                                "end": 1244
                              },
                              "prefix": true,
                              "start": 1236,
                              "end": 1244
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "boolean",
                              "raw": "\"boolean\"",
                              "start": 1249,
                              "end": 1258
                            },
                            "start": 1236,
                            "end": 1258
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
                                "start": 1277,
                                "end": 1278
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1279,
                                "end": 1287
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1277,
                              "end": 1287
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1277,
                            "end": 1289
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
                                "start": 1319,
                                "end": 1320
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1321,
                                "end": 1329
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1319,
                              "end": 1329
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1319,
                            "end": 1331
                          },
                          "start": 1236,
                          "end": 1331
                        },
                        "start": 1229,
                        "end": 1332
                      }
                    ],
                    "start": 1160,
                    "end": 1352
                  },
                  "id": null,
                  "generator": false,
                  "start": 1135,
                  "end": 1352
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1354,
                    "end": 1355
                  }
                ],
                "optional": false,
                "start": 1134,
                "end": 1356
              },
              "start": 1090,
              "end": 1356
            },
            "start": 1083,
            "end": 1357
          }
        ],
        "start": 1077,
        "end": 1401
      },
      "expression": false,
      "start": 1033,
      "end": 1401
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1469,
        "end": 1473
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
                  "start": 1477,
                  "end": 1483
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1486,
                  "end": 1492
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1495,
                  "end": 1502
                }
              ],
              "start": 1477,
              "end": 1502
            },
            "start": 1475,
            "end": 1502
          },
          "start": 1474,
          "end": 1502
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
                  "start": 1521,
                  "end": 1522
                },
                "prefix": true,
                "start": 1514,
                "end": 1522
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1527,
                "end": 1535
              },
              "start": 1514,
              "end": 1535
            },
            "consequent": {
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
                        "start": 1551,
                        "end": 1552
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1555,
                        "end": 1556
                      },
                      "definite": false,
                      "start": 1551,
                      "end": 1556
                    }
                  ],
                  "declare": false,
                  "start": 1547,
                  "end": 1557
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1586,
                    "end": 1589
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
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1610,
                              "end": 1611
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1614,
                              "end": 1615
                            },
                            "definite": false,
                            "start": 1610,
                            "end": 1615
                          }
                        ],
                        "declare": false,
                        "start": 1606,
                        "end": 1616
                      }
                    ],
                    "start": 1592,
                    "end": 1636
                  },
                  "expression": false,
                  "start": 1577,
                  "end": 1636
                }
              ],
              "start": 1537,
              "end": 1642
            },
            "alternate": null,
            "start": 1510,
            "end": 1642
          }
        ],
        "start": 1504,
        "end": 1644
      },
      "expression": false,
      "start": 1460,
      "end": 1644
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1655,
        "end": 1656
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1670,
                          "end": 1676
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1679,
                          "end": 1685
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1688,
                          "end": 1695
                        }
                      ],
                      "start": 1670,
                      "end": 1695
                    },
                    "start": 1668,
                    "end": 1695
                  },
                  "start": 1667,
                  "end": 1695
                },
                "init": null,
                "definite": false,
                "start": 1667,
                "end": 1695
              }
            ],
            "declare": false,
            "start": 1663,
            "end": 1696
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1711,
              "end": 1713
            },
            "body": {
              "type": "TSModuleBlock",
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
                        "typeAnnotation": null,
                        "start": 1728,
                        "end": 1729
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1732,
                        "end": 1733
                      },
                      "definite": false,
                      "start": 1728,
                      "end": 1733
                    }
                  ],
                  "declare": false,
                  "start": 1724,
                  "end": 1734
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1791,
                            "end": 1797
                          },
                          "start": 1789,
                          "end": 1797
                        },
                        "start": 1788,
                        "end": 1797
                      },
                      "init": null,
                      "definite": false,
                      "start": 1788,
                      "end": 1797
                    }
                  ],
                  "declare": false,
                  "start": 1784,
                  "end": 1798
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
                        "start": 1818,
                        "end": 1819
                      },
                      "prefix": true,
                      "start": 1811,
                      "end": 1819
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 1824,
                      "end": 1832
                    },
                    "start": 1811,
                    "end": 1832
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
                            "start": 1848,
                            "end": 1849
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1852,
                            "end": 1853
                          },
                          "start": 1848,
                          "end": 1853
                        },
                        "directive": null,
                        "start": 1848,
                        "end": 1853
                      }
                    ],
                    "start": 1834,
                    "end": 1874
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1894,
                            "end": 1895
                          },
                          "right": {
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
                                  "start": 1905,
                                  "end": 1906
                                },
                                "prefix": true,
                                "start": 1898,
                                "end": 1906
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "boolean",
                                "raw": "\"boolean\"",
                                "start": 1911,
                                "end": 1920
                              },
                              "start": 1898,
                              "end": 1920
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
                                  "start": 1935,
                                  "end": 1936
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1937,
                                  "end": 1945
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1935,
                                "end": 1945
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1935,
                              "end": 1947
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
                                  "start": 1973,
                                  "end": 1974
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1975,
                                  "end": 1983
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1973,
                                "end": 1983
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1973,
                              "end": 1985
                            },
                            "start": 1898,
                            "end": 1985
                          },
                          "start": 1894,
                          "end": 1985
                        },
                        "directive": null,
                        "start": 1894,
                        "end": 1986
                      }
                    ],
                    "start": 1880,
                    "end": 2006
                  },
                  "start": 1807,
                  "end": 2006
                }
              ],
              "start": 1714,
              "end": 2012
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1701,
            "end": 2012
          }
        ],
        "start": 1657,
        "end": 2014
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1645,
      "end": 2014
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2025,
        "end": 2027
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2041,
                          "end": 2047
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2050,
                          "end": 2056
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 2059,
                          "end": 2066
                        }
                      ],
                      "start": 2041,
                      "end": 2066
                    },
                    "start": 2039,
                    "end": 2066
                  },
                  "start": 2038,
                  "end": 2066
                },
                "init": null,
                "definite": false,
                "start": 2038,
                "end": 2066
              }
            ],
            "declare": false,
            "start": 2034,
            "end": 2067
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2082,
                "end": 2084
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2085,
                "end": 2087
              },
              "start": 2082,
              "end": 2087
            },
            "body": {
              "type": "TSModuleBlock",
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
                        "typeAnnotation": null,
                        "start": 2102,
                        "end": 2103
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2106,
                        "end": 2107
                      },
                      "definite": false,
                      "start": 2102,
                      "end": 2107
                    }
                  ],
                  "declare": false,
                  "start": 2098,
                  "end": 2108
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2165,
                            "end": 2171
                          },
                          "start": 2163,
                          "end": 2171
                        },
                        "start": 2162,
                        "end": 2171
                      },
                      "init": null,
                      "definite": false,
                      "start": 2162,
                      "end": 2171
                    }
                  ],
                  "declare": false,
                  "start": 2158,
                  "end": 2172
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
                        "start": 2192,
                        "end": 2193
                      },
                      "prefix": true,
                      "start": 2185,
                      "end": 2193
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 2198,
                      "end": 2206
                    },
                    "start": 2185,
                    "end": 2206
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
                            "start": 2222,
                            "end": 2223
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2226,
                            "end": 2227
                          },
                          "start": 2222,
                          "end": 2227
                        },
                        "directive": null,
                        "start": 2222,
                        "end": 2227
                      }
                    ],
                    "start": 2208,
                    "end": 2248
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2268,
                            "end": 2269
                          },
                          "right": {
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
                                  "start": 2279,
                                  "end": 2280
                                },
                                "prefix": true,
                                "start": 2272,
                                "end": 2280
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "boolean",
                                "raw": "\"boolean\"",
                                "start": 2285,
                                "end": 2294
                              },
                              "start": 2272,
                              "end": 2294
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
                                  "start": 2309,
                                  "end": 2310
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2311,
                                  "end": 2319
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2309,
                                "end": 2319
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 2309,
                              "end": 2321
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
                                  "start": 2347,
                                  "end": 2348
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2349,
                                  "end": 2357
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2347,
                                "end": 2357
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 2347,
                              "end": 2359
                            },
                            "start": 2272,
                            "end": 2359
                          },
                          "start": 2268,
                          "end": 2359
                        },
                        "directive": null,
                        "start": 2268,
                        "end": 2360
                      }
                    ],
                    "start": 2254,
                    "end": 2380
                  },
                  "start": 2181,
                  "end": 2380
                }
              ],
              "start": 2088,
              "end": 2386
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 2072,
            "end": 2386
          }
        ],
        "start": 2028,
        "end": 2388
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2015,
      "end": 2388
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 51,
  "end": 2388
}
```
