__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 115,
  "end": 1363,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 126,
        "decorators": [],
        "name": "f1",
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
        "start": 129,
        "end": 206,
        "body": [
          {
            "type": "IfStatement",
            "start": 135,
            "end": 204,
            "test": {
              "type": "Literal",
              "start": 139,
              "end": 143,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 145,
              "end": 170,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 155,
                  "end": 164,
                  "argument": {
                    "type": "Literal",
                    "start": 162,
                    "end": 163,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 176,
              "end": 204,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 186,
                  "end": 198,
                  "argument": {
                    "type": "Literal",
                    "start": 193,
                    "end": 197,
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
      "start": 208,
      "end": 341,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 219,
        "decorators": [],
        "name": "f2",
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
        "start": 222,
        "end": 341,
        "body": [
          {
            "type": "IfStatement",
            "start": 228,
            "end": 339,
            "test": {
              "type": "Literal",
              "start": 232,
              "end": 236,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 238,
              "end": 263,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 248,
                  "end": 257,
                  "argument": {
                    "type": "Literal",
                    "start": 255,
                    "end": 256,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 269,
              "end": 339,
              "test": {
                "type": "Literal",
                "start": 273,
                "end": 278,
                "value": false,
                "raw": "false"
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 280,
                "end": 308,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 290,
                    "end": 302,
                    "argument": {
                      "type": "Literal",
                      "start": 297,
                      "end": 301,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 314,
                "end": 339,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 324,
                    "end": 333,
                    "argument": {
                      "type": "Literal",
                      "start": 331,
                      "end": 332,
                      "value": 2,
                      "raw": "2"
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
      "type": "FunctionDeclaration",
      "start": 343,
      "end": 480,
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 354,
        "decorators": [],
        "name": "f4",
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
        "start": 357,
        "end": 480,
        "body": [
          {
            "type": "TryStatement",
            "start": 363,
            "end": 478,
            "block": {
              "type": "BlockStatement",
              "start": 367,
              "end": 392,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 377,
                  "end": 386,
                  "argument": {
                    "type": "Literal",
                    "start": 384,
                    "end": 385,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 397,
              "end": 440,
              "param": {
                "type": "Identifier",
                "start": 404,
                "end": 405,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 407,
                "end": 440,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 417,
                    "end": 434,
                    "argument": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 433,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 453,
              "end": 478,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 463,
                  "end": 472,
                  "argument": {
                    "type": "Literal",
                    "start": 470,
                    "end": 471,
                    "value": 1,
                    "raw": "1"
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
      "start": 482,
      "end": 538,
      "id": {
        "type": "Identifier",
        "start": 491,
        "end": 493,
        "decorators": [],
        "name": "f5",
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
        "start": 496,
        "end": 538,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 502,
            "end": 511,
            "argument": {
              "type": "Literal",
              "start": 509,
              "end": 510,
              "value": 1,
              "raw": "1"
            }
          },
          {
            "type": "ReturnStatement",
            "start": 516,
            "end": 536,
            "argument": {
              "type": "NewExpression",
              "start": 523,
              "end": 535,
              "callee": {
                "type": "Identifier",
                "start": 527,
                "end": 533,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 540,
      "end": 638,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 551,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 551,
        "end": 554,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 552,
            "end": 553,
            "name": {
              "type": "Identifier",
              "start": 552,
              "end": 553,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 555,
          "end": 559,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 556,
            "end": 559,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 558,
              "end": 559,
              "typeName": {
                "type": "Identifier",
                "start": 558,
                "end": 559,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 561,
        "end": 638,
        "body": [
          {
            "type": "IfStatement",
            "start": 567,
            "end": 636,
            "test": {
              "type": "Literal",
              "start": 571,
              "end": 575,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 577,
              "end": 602,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 587,
                  "end": 596,
                  "argument": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 595,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 608,
              "end": 636,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 618,
                  "end": 630,
                  "argument": {
                    "type": "Literal",
                    "start": 625,
                    "end": 629,
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
      "type": "VariableDeclaration",
      "start": 770,
      "end": 803,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 802,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 802,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 775,
              "end": 802,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 777,
                "end": 802,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 779,
                    "end": 789,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 779,
                      "end": 780,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 780,
                      "end": 788,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 782,
                        "end": 788
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 790,
                    "end": 800,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 790,
                      "end": 791,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 792,
                      "end": 800,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 794,
                        "end": 800
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "type": "VariableDeclaration",
      "start": 804,
      "end": 837,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 808,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 808,
            "end": 836,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 809,
              "end": 836,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 811,
                "end": 836,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 813,
                    "end": 823,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 813,
                      "end": 814,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 814,
                      "end": 822,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 816,
                        "end": 822
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 824,
                    "end": 834,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 824,
                      "end": 825,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 826,
                      "end": 834,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 828,
                        "end": 834
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "type": "FunctionDeclaration",
      "start": 858,
      "end": 946,
      "id": {
        "type": "Identifier",
        "start": 867,
        "end": 869,
        "decorators": [],
        "name": "f9",
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
        "start": 872,
        "end": 946,
        "body": [
          {
            "type": "IfStatement",
            "start": 878,
            "end": 944,
            "test": {
              "type": "Literal",
              "start": 882,
              "end": 886,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 888,
              "end": 913,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 898,
                  "end": 907,
                  "argument": {
                    "type": "Identifier",
                    "start": 905,
                    "end": 906,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 919,
              "end": 944,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 929,
                  "end": 938,
                  "argument": {
                    "type": "Identifier",
                    "start": 936,
                    "end": 937,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 968,
      "end": 1057,
      "id": {
        "type": "Identifier",
        "start": 977,
        "end": 980,
        "decorators": [],
        "name": "f10",
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
        "start": 983,
        "end": 1057,
        "body": [
          {
            "type": "IfStatement",
            "start": 989,
            "end": 1055,
            "test": {
              "type": "Literal",
              "start": 993,
              "end": 997,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 999,
              "end": 1024,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1009,
                  "end": 1018,
                  "argument": {
                    "type": "Identifier",
                    "start": 1016,
                    "end": 1017,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1030,
              "end": 1055,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1040,
                  "end": 1049,
                  "argument": {
                    "type": "Identifier",
                    "start": 1047,
                    "end": 1048,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 1085,
      "end": 1206,
      "id": {
        "type": "Identifier",
        "start": 1094,
        "end": 1097,
        "decorators": [],
        "name": "f11",
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
        "start": 1100,
        "end": 1206,
        "body": [
          {
            "type": "IfStatement",
            "start": 1106,
            "end": 1204,
            "test": {
              "type": "Literal",
              "start": 1110,
              "end": 1114,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1116,
              "end": 1157,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1126,
                  "end": 1151,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 1133,
                    "end": 1151,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1134,
                        "end": 1143,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1135,
                          "end": 1143,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1137,
                            "end": 1143
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1148,
                      "end": 1151,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1163,
              "end": 1204,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1173,
                  "end": 1198,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 1180,
                    "end": 1198,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1181,
                        "end": 1190,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1182,
                          "end": 1190,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1184,
                            "end": 1190,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1184,
                              "end": 1190,
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1195,
                      "end": 1198,
                      "body": []
                    },
                    "id": null,
                    "generator": false
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
      "start": 1234,
      "end": 1363,
      "id": {
        "type": "Identifier",
        "start": 1243,
        "end": 1246,
        "decorators": [],
        "name": "f12",
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
        "start": 1249,
        "end": 1363,
        "body": [
          {
            "type": "IfStatement",
            "start": 1255,
            "end": 1361,
            "test": {
              "type": "Literal",
              "start": 1259,
              "end": 1263,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1265,
              "end": 1306,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1275,
                  "end": 1300,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 1282,
                    "end": 1300,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1283,
                        "end": 1292,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1284,
                          "end": 1292,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1286,
                            "end": 1292,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1286,
                              "end": 1292,
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1297,
                      "end": 1300,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1312,
              "end": 1361,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1322,
                  "end": 1347,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 1329,
                    "end": 1347,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1330,
                        "end": 1339,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1331,
                          "end": 1339,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1333,
                            "end": 1339
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1344,
                      "end": 1347,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
