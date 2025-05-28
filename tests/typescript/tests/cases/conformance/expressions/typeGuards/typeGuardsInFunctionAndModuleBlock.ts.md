__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 51,
  "end": 2376,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 350,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "decorators": [],
        "name": "foo",
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
          "start": 64,
          "end": 92,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 92,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 67,
              "end": 92,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 350,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 100,
            "end": 348,
            "argument": {
              "type": "ConditionalExpression",
              "start": 107,
              "end": 347,
              "test": {
                "type": "BinaryExpression",
                "start": 107,
                "end": 128,
                "left": {
                  "type": "UnaryExpression",
                  "start": 107,
                  "end": 115,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 120,
                  "end": 128,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "alternate": {
                "type": "CallExpression",
                "start": 151,
                "end": 347,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 151,
                  "end": 344,
                  "id": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "decorators": [],
                    "name": "f",
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
                    "start": 164,
                    "end": 344,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 178,
                        "end": 188,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 182,
                            "end": 187,
                            "id": {
                              "type": "Identifier",
                              "start": 182,
                              "end": 183,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 186,
                              "end": 187,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 221,
                        "end": 324,
                        "argument": {
                          "type": "ConditionalExpression",
                          "start": 228,
                          "end": 323,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 228,
                            "end": 250,
                            "left": {
                              "type": "UnaryExpression",
                              "start": 228,
                              "end": 236,
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "start": 235,
                                "end": 236,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "prefix": true
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "start": 241,
                              "end": 250,
                              "value": "boolean",
                              "raw": "\"boolean\""
                            }
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "start": 269,
                            "end": 281,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 269,
                              "end": 279,
                              "object": {
                                "type": "Identifier",
                                "start": 269,
                                "end": 270,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 271,
                                "end": 279,
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "start": 311,
                            "end": 323,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 311,
                              "end": 321,
                              "object": {
                                "type": "Identifier",
                                "start": 311,
                                "end": 312,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 313,
                                "end": 321,
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 351,
      "end": 725,
      "id": {
        "type": "Identifier",
        "start": 360,
        "end": 364,
        "decorators": [],
        "name": "foo2",
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
          "start": 365,
          "end": 393,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 366,
            "end": 393,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 368,
              "end": 393,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 395,
        "end": 725,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 401,
            "end": 681,
            "argument": {
              "type": "ConditionalExpression",
              "start": 408,
              "end": 680,
              "test": {
                "type": "BinaryExpression",
                "start": 408,
                "end": 429,
                "left": {
                  "type": "UnaryExpression",
                  "start": 408,
                  "end": 416,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 421,
                  "end": 429,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "alternate": {
                "type": "CallExpression",
                "start": 452,
                "end": 680,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 452,
                  "end": 676,
                  "id": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
                    "decorators": [],
                    "name": "f",
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
                      "start": 463,
                      "end": 482,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 464,
                        "end": 482,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 466,
                          "end": 482,
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
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 484,
                    "end": 676,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 498,
                        "end": 508,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 502,
                            "end": 507,
                            "id": {
                              "type": "Identifier",
                              "start": 502,
                              "end": 503,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 506,
                              "end": 507,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 553,
                        "end": 656,
                        "argument": {
                          "type": "ConditionalExpression",
                          "start": 560,
                          "end": 655,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 560,
                            "end": 582,
                            "left": {
                              "type": "UnaryExpression",
                              "start": 560,
                              "end": 568,
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "start": 567,
                                "end": 568,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "prefix": true
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "start": 573,
                              "end": 582,
                              "value": "boolean",
                              "raw": "\"boolean\""
                            }
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "start": 601,
                            "end": 613,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 601,
                              "end": 611,
                              "object": {
                                "type": "Identifier",
                                "start": 601,
                                "end": 602,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 603,
                                "end": 611,
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "start": 643,
                            "end": 655,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 643,
                              "end": 653,
                              "object": {
                                "type": "Identifier",
                                "start": 643,
                                "end": 644,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 645,
                                "end": 653,
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 678,
                    "end": 679,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 726,
      "end": 1032,
      "id": {
        "type": "Identifier",
        "start": 735,
        "end": 739,
        "decorators": [],
        "name": "foo3",
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
          "start": 740,
          "end": 768,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 741,
            "end": 768,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 743,
              "end": 768,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 770,
        "end": 1032,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 776,
            "end": 1030,
            "argument": {
              "type": "ConditionalExpression",
              "start": 783,
              "end": 1029,
              "test": {
                "type": "BinaryExpression",
                "start": 783,
                "end": 804,
                "left": {
                  "type": "UnaryExpression",
                  "start": 783,
                  "end": 791,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 790,
                    "end": 791,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 796,
                  "end": 804,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 815,
                "end": 816,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "alternate": {
                "type": "CallExpression",
                "start": 827,
                "end": 1029,
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 828,
                  "end": 1026,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 834,
                    "end": 1026,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 848,
                        "end": 858,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 852,
                            "end": 857,
                            "id": {
                              "type": "Identifier",
                              "start": 852,
                              "end": 853,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 856,
                              "end": 857,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 903,
                        "end": 1006,
                        "argument": {
                          "type": "ConditionalExpression",
                          "start": 910,
                          "end": 1005,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 910,
                            "end": 932,
                            "left": {
                              "type": "UnaryExpression",
                              "start": 910,
                              "end": 918,
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "start": 917,
                                "end": 918,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "prefix": true
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "start": 923,
                              "end": 932,
                              "value": "boolean",
                              "raw": "\"boolean\""
                            }
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "start": 951,
                            "end": 963,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 951,
                              "end": 961,
                              "object": {
                                "type": "Identifier",
                                "start": 951,
                                "end": 952,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 953,
                                "end": 961,
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "start": 993,
                            "end": 1005,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 993,
                              "end": 1003,
                              "object": {
                                "type": "Identifier",
                                "start": 993,
                                "end": 994,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 995,
                                "end": 1003,
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1033,
      "end": 1401,
      "id": {
        "type": "Identifier",
        "start": 1042,
        "end": 1046,
        "decorators": [],
        "name": "foo4",
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
          "start": 1047,
          "end": 1075,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1048,
            "end": 1075,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1050,
              "end": 1075,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1077,
        "end": 1401,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1083,
            "end": 1357,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1090,
              "end": 1356,
              "test": {
                "type": "BinaryExpression",
                "start": 1090,
                "end": 1111,
                "left": {
                  "type": "UnaryExpression",
                  "start": 1090,
                  "end": 1098,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 1097,
                    "end": 1098,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1103,
                  "end": 1111,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 1122,
                "end": 1123,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "alternate": {
                "type": "CallExpression",
                "start": 1134,
                "end": 1356,
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 1135,
                  "end": 1352,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1136,
                      "end": 1155,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1137,
                        "end": 1155,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 1139,
                          "end": 1155,
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
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1160,
                    "end": 1352,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1174,
                        "end": 1184,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1178,
                            "end": 1183,
                            "id": {
                              "type": "Identifier",
                              "start": 1178,
                              "end": 1179,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 1182,
                              "end": 1183,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1229,
                        "end": 1332,
                        "argument": {
                          "type": "ConditionalExpression",
                          "start": 1236,
                          "end": 1331,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 1236,
                            "end": 1258,
                            "left": {
                              "type": "UnaryExpression",
                              "start": 1236,
                              "end": 1244,
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "start": 1243,
                                "end": 1244,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "prefix": true
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "start": 1249,
                              "end": 1258,
                              "value": "boolean",
                              "raw": "\"boolean\""
                            }
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "start": 1277,
                            "end": 1289,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1277,
                              "end": 1287,
                              "object": {
                                "type": "Identifier",
                                "start": 1277,
                                "end": 1278,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1279,
                                "end": 1287,
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "start": 1319,
                            "end": 1331,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1319,
                              "end": 1329,
                              "object": {
                                "type": "Identifier",
                                "start": 1319,
                                "end": 1320,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1321,
                                "end": 1329,
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1354,
                    "end": 1355,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1460,
      "end": 1644,
      "id": {
        "type": "Identifier",
        "start": 1469,
        "end": 1473,
        "decorators": [],
        "name": "foo5",
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
          "start": 1474,
          "end": 1502,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1475,
            "end": 1502,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1477,
              "end": 1502,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1504,
        "end": 1644,
        "body": [
          {
            "type": "IfStatement",
            "start": 1510,
            "end": 1642,
            "test": {
              "type": "BinaryExpression",
              "start": 1514,
              "end": 1535,
              "left": {
                "type": "UnaryExpression",
                "start": 1514,
                "end": 1522,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 1521,
                  "end": 1522,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1527,
                "end": 1535,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1537,
              "end": 1642,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1547,
                  "end": 1557,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1551,
                      "end": 1556,
                      "id": {
                        "type": "Identifier",
                        "start": 1551,
                        "end": 1552,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1555,
                        "end": 1556,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 1577,
                  "end": 1636,
                  "id": {
                    "type": "Identifier",
                    "start": 1586,
                    "end": 1589,
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
                    "start": 1592,
                    "end": 1636,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1606,
                        "end": 1616,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1610,
                            "end": 1615,
                            "id": {
                              "type": "Identifier",
                              "start": 1610,
                              "end": 1611,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 1614,
                              "end": 1615,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      }
                    ]
                  },
                  "expression": false
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
      "type": "TSModuleDeclaration",
      "start": 1645,
      "end": 2008,
      "id": {
        "type": "Identifier",
        "start": 1652,
        "end": 1653,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1654,
        "end": 2008,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1660,
            "end": 1693,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1664,
                "end": 1692,
                "id": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1692,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1665,
                    "end": 1692,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1667,
                      "end": 1692,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1667,
                          "end": 1673
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1676,
                          "end": 1682
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1685,
                          "end": 1692
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 1698,
            "end": 2006,
            "id": {
              "type": "Identifier",
              "start": 1705,
              "end": 1707,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 1708,
              "end": 2006,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1718,
                  "end": 1728,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1722,
                      "end": 1727,
                      "id": {
                        "type": "Identifier",
                        "start": 1722,
                        "end": 1723,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1726,
                        "end": 1727,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1778,
                  "end": 1792,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1782,
                      "end": 1791,
                      "id": {
                        "type": "Identifier",
                        "start": 1782,
                        "end": 1791,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1783,
                          "end": 1791,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1785,
                            "end": 1791
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 1801,
                  "end": 2000,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1805,
                    "end": 1826,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1805,
                      "end": 1813,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 1812,
                        "end": 1813,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1818,
                      "end": 1826,
                      "value": "string",
                      "raw": "\"string\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1828,
                    "end": 1868,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1842,
                        "end": 1847,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1842,
                          "end": 1847,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1842,
                            "end": 1843,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1846,
                            "end": 1847,
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
                    "start": 1874,
                    "end": 2000,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1888,
                        "end": 1980,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1888,
                          "end": 1979,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1888,
                            "end": 1889,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "ConditionalExpression",
                            "start": 1892,
                            "end": 1979,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1892,
                              "end": 1914,
                              "left": {
                                "type": "UnaryExpression",
                                "start": 1892,
                                "end": 1900,
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 1899,
                                  "end": 1900,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 1905,
                                "end": 1914,
                                "value": "boolean",
                                "raw": "\"boolean\""
                              }
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "start": 1929,
                              "end": 1941,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1929,
                                "end": 1939,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1929,
                                  "end": 1930,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1931,
                                  "end": 1939,
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            },
                            "alternate": {
                              "type": "CallExpression",
                              "start": 1967,
                              "end": 1979,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1967,
                                "end": 1977,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1967,
                                  "end": 1968,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1969,
                                  "end": 1977,
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            }
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2009,
      "end": 2376,
      "id": {
        "type": "Identifier",
        "start": 2016,
        "end": 2018,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2019,
        "end": 2376,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2025,
            "end": 2058,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2029,
                "end": 2057,
                "id": {
                  "type": "Identifier",
                  "start": 2029,
                  "end": 2057,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2030,
                    "end": 2057,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2032,
                      "end": 2057,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2032,
                          "end": 2038
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2041,
                          "end": 2047
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 2050,
                          "end": 2057
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 2063,
            "end": 2374,
            "id": {
              "type": "TSQualifiedName",
              "start": 2070,
              "end": 2075,
              "left": {
                "type": "Identifier",
                "start": 2070,
                "end": 2072,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2073,
                "end": 2075,
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 2076,
              "end": 2374,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2086,
                  "end": 2096,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2090,
                      "end": 2095,
                      "id": {
                        "type": "Identifier",
                        "start": 2090,
                        "end": 2091,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2094,
                        "end": 2095,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2146,
                  "end": 2160,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2150,
                      "end": 2159,
                      "id": {
                        "type": "Identifier",
                        "start": 2150,
                        "end": 2159,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2151,
                          "end": 2159,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2153,
                            "end": 2159
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 2169,
                  "end": 2368,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 2173,
                    "end": 2194,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 2173,
                      "end": 2181,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 2180,
                        "end": 2181,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 2186,
                      "end": 2194,
                      "value": "string",
                      "raw": "\"string\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 2196,
                    "end": 2236,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2210,
                        "end": 2215,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 2210,
                          "end": 2215,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 2210,
                            "end": 2211,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2214,
                            "end": 2215,
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
                    "start": 2242,
                    "end": 2368,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2256,
                        "end": 2348,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 2256,
                          "end": 2347,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 2256,
                            "end": 2257,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "ConditionalExpression",
                            "start": 2260,
                            "end": 2347,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 2260,
                              "end": 2282,
                              "left": {
                                "type": "UnaryExpression",
                                "start": 2260,
                                "end": 2268,
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 2267,
                                  "end": 2268,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 2273,
                                "end": 2282,
                                "value": "boolean",
                                "raw": "\"boolean\""
                              }
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "start": 2297,
                              "end": 2309,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2297,
                                "end": 2307,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2297,
                                  "end": 2298,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2299,
                                  "end": 2307,
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            },
                            "alternate": {
                              "type": "CallExpression",
                              "start": 2335,
                              "end": 2347,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2335,
                                "end": 2345,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2335,
                                  "end": 2336,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2337,
                                  "end": 2345,
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            }
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
