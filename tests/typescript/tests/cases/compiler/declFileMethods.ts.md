__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 15
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 77
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
                  "body": [],
                  "start": 80,
                  "end": 87
                },
                "expression": false,
                "start": 77,
                "end": 87
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 67,
              "end": 87
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 165
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 198,
                        "end": 204
                      },
                      "start": 196,
                      "end": 204
                    },
                    "start": 195,
                    "end": 204
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 253,
                        "end": 259
                      },
                      "start": 251,
                      "end": 259
                    },
                    "start": 250,
                    "end": 259
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
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 275,
                            "end": 276
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 279,
                            "end": 280
                          },
                          "definite": false,
                          "start": 275,
                          "end": 280
                        }
                      ],
                      "declare": false,
                      "start": 271,
                      "end": 281
                    }
                  ],
                  "start": 261,
                  "end": 287
                },
                "expression": false,
                "start": 165,
                "end": 287
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 141,
              "end": 287
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithRestParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 320
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 324,
                        "end": 330
                      },
                      "start": 322,
                      "end": 330
                    },
                    "start": 321,
                    "end": 330
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 340
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 342,
                          "end": 348
                        },
                        "start": 342,
                        "end": 350
                      },
                      "start": 340,
                      "end": 350
                    },
                    "value": null,
                    "start": 332,
                    "end": 350
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 370
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rests",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 373,
                              "end": 378
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "join",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 379,
                              "end": 383
                            },
                            "optional": false,
                            "computed": false,
                            "start": 373,
                            "end": 383
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\"",
                              "start": 384,
                              "end": 386
                            }
                          ],
                          "optional": false,
                          "start": 373,
                          "end": 387
                        },
                        "start": 369,
                        "end": 387
                      },
                      "start": 362,
                      "end": 388
                    }
                  ],
                  "start": 352,
                  "end": 394
                },
                "expression": false,
                "start": 320,
                "end": 394
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 292,
              "end": 394
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 423
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "type": "TSStringKeyword",
                        "start": 427,
                        "end": 433
                      },
                      "start": 425,
                      "end": 433
                    },
                    "start": 424,
                    "end": 433
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 436,
                    "end": 442
                  },
                  "start": 434,
                  "end": 442
                },
                "body": null,
                "expression": false,
                "start": 423,
                "end": 443
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 400,
              "end": 443
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 471
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "type": "TSNumberKeyword",
                        "start": 475,
                        "end": 481
                      },
                      "start": 473,
                      "end": 481
                    },
                    "start": 472,
                    "end": 481
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 484,
                    "end": 490
                  },
                  "start": 482,
                  "end": 490
                },
                "body": null,
                "expression": false,
                "start": 471,
                "end": 491
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 448,
              "end": 491
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 519
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 523,
                        "end": 526
                      },
                      "start": 521,
                      "end": 526
                    },
                    "start": 520,
                    "end": 526
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 529,
                    "end": 532
                  },
                  "start": 527,
                  "end": 532
                },
                "body": {
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
                        "start": 550,
                        "end": 551
                      },
                      "start": 543,
                      "end": 552
                    }
                  ],
                  "start": 533,
                  "end": 558
                },
                "expression": false,
                "start": 519,
                "end": 558
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 496,
              "end": 558
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 625,
                "end": 635
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
                  "body": [],
                  "start": 638,
                  "end": 645
                },
                "expression": false,
                "start": 635,
                "end": 645
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 617,
              "end": 645
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFooWithParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 731
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 764,
                        "end": 770
                      },
                      "start": 762,
                      "end": 770
                    },
                    "start": 761,
                    "end": 770
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 819,
                        "end": 825
                      },
                      "start": 817,
                      "end": 825
                    },
                    "start": 816,
                    "end": 825
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
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 841,
                            "end": 842
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 845,
                            "end": 846
                          },
                          "definite": false,
                          "start": 841,
                          "end": 846
                        }
                      ],
                      "declare": false,
                      "start": 837,
                      "end": 847
                    }
                  ],
                  "start": 827,
                  "end": 853
                },
                "expression": false,
                "start": 731,
                "end": 853
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 699,
              "end": 853
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFooWithRestParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 866,
                "end": 894
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 898,
                        "end": 904
                      },
                      "start": 896,
                      "end": 904
                    },
                    "start": 895,
                    "end": 904
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 909,
                      "end": 914
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 916,
                          "end": 922
                        },
                        "start": 916,
                        "end": 924
                      },
                      "start": 914,
                      "end": 924
                    },
                    "value": null,
                    "start": 906,
                    "end": 924
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 943,
                          "end": 944
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rests",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 947,
                              "end": 952
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "join",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 953,
                              "end": 957
                            },
                            "optional": false,
                            "computed": false,
                            "start": 947,
                            "end": 957
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\"",
                              "start": 958,
                              "end": 960
                            }
                          ],
                          "optional": false,
                          "start": 947,
                          "end": 961
                        },
                        "start": 943,
                        "end": 961
                      },
                      "start": 936,
                      "end": 962
                    }
                  ],
                  "start": 926,
                  "end": 968
                },
                "expression": false,
                "start": 894,
                "end": 968
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 858,
              "end": 968
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 981,
                "end": 1004
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "type": "TSStringKeyword",
                        "start": 1008,
                        "end": 1014
                      },
                      "start": 1006,
                      "end": 1014
                    },
                    "start": 1005,
                    "end": 1014
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1017,
                    "end": 1023
                  },
                  "start": 1015,
                  "end": 1023
                },
                "body": null,
                "expression": false,
                "start": 1004,
                "end": 1024
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 973,
              "end": 1024
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 1037,
                "end": 1060
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "type": "TSNumberKeyword",
                        "start": 1064,
                        "end": 1070
                      },
                      "start": 1062,
                      "end": 1070
                    },
                    "start": 1061,
                    "end": 1070
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1073,
                    "end": 1079
                  },
                  "start": 1071,
                  "end": 1079
                },
                "body": null,
                "expression": false,
                "start": 1060,
                "end": 1080
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1029,
              "end": 1080
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1116
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1120,
                        "end": 1123
                      },
                      "start": 1118,
                      "end": 1123
                    },
                    "start": 1117,
                    "end": 1123
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1126,
                    "end": 1129
                  },
                  "start": 1124,
                  "end": 1129
                },
                "body": {
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
                        "start": 1147,
                        "end": 1148
                      },
                      "start": 1140,
                      "end": 1149
                    }
                  ],
                  "start": 1130,
                  "end": 1155
                },
                "expression": false,
                "start": 1116,
                "end": 1155
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1085,
              "end": 1155
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1221,
                "end": 1230
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
                  "body": [],
                  "start": 1233,
                  "end": 1240
                },
                "expression": false,
                "start": 1230,
                "end": 1240
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1214,
              "end": 1240
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticFooWithParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 1301,
                "end": 1324
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1357,
                        "end": 1363
                      },
                      "start": 1355,
                      "end": 1363
                    },
                    "start": 1354,
                    "end": 1363
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1412,
                        "end": 1418
                      },
                      "start": 1410,
                      "end": 1418
                    },
                    "start": 1409,
                    "end": 1418
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
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1434,
                            "end": 1435
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1438,
                            "end": 1439
                          },
                          "definite": false,
                          "start": 1434,
                          "end": 1439
                        }
                      ],
                      "declare": false,
                      "start": 1430,
                      "end": 1440
                    }
                  ],
                  "start": 1420,
                  "end": 1446
                },
                "expression": false,
                "start": 1324,
                "end": 1446
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1294,
              "end": 1446
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticFooWithRestParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 1458,
                "end": 1485
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1489,
                        "end": 1495
                      },
                      "start": 1487,
                      "end": 1495
                    },
                    "start": 1486,
                    "end": 1495
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1500,
                      "end": 1505
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1507,
                          "end": 1513
                        },
                        "start": 1507,
                        "end": 1515
                      },
                      "start": 1505,
                      "end": 1515
                    },
                    "value": null,
                    "start": 1497,
                    "end": 1515
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1534,
                          "end": 1535
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rests",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1538,
                              "end": 1543
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "join",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1544,
                              "end": 1548
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1538,
                            "end": 1548
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\"",
                              "start": 1549,
                              "end": 1551
                            }
                          ],
                          "optional": false,
                          "start": 1538,
                          "end": 1552
                        },
                        "start": 1534,
                        "end": 1552
                      },
                      "start": 1527,
                      "end": 1553
                    }
                  ],
                  "start": 1517,
                  "end": 1559
                },
                "expression": false,
                "start": 1485,
                "end": 1559
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1451,
              "end": 1559
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticFooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 1571,
                "end": 1593
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "type": "TSStringKeyword",
                        "start": 1597,
                        "end": 1603
                      },
                      "start": 1595,
                      "end": 1603
                    },
                    "start": 1594,
                    "end": 1603
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1606,
                    "end": 1612
                  },
                  "start": 1604,
                  "end": 1612
                },
                "body": null,
                "expression": false,
                "start": 1593,
                "end": 1613
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1564,
              "end": 1613
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticFooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 1625,
                "end": 1647
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "type": "TSNumberKeyword",
                        "start": 1651,
                        "end": 1657
                      },
                      "start": 1649,
                      "end": 1657
                    },
                    "start": 1648,
                    "end": 1657
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1660,
                    "end": 1666
                  },
                  "start": 1658,
                  "end": 1666
                },
                "body": null,
                "expression": false,
                "start": 1647,
                "end": 1667
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1618,
              "end": 1667
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticFooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 1679,
                "end": 1701
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1705,
                        "end": 1708
                      },
                      "start": 1703,
                      "end": 1708
                    },
                    "start": 1702,
                    "end": 1708
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1711,
                    "end": 1714
                  },
                  "start": 1709,
                  "end": 1714
                },
                "body": {
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
                        "start": 1732,
                        "end": 1733
                      },
                      "start": 1725,
                      "end": 1734
                    }
                  ],
                  "start": 1715,
                  "end": 1740
                },
                "expression": false,
                "start": 1701,
                "end": 1740
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1672,
              "end": 1740
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1820,
                "end": 1836
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
                  "body": [],
                  "start": 1839,
                  "end": 1846
                },
                "expression": false,
                "start": 1836,
                "end": 1846
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1805,
              "end": 1846
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFooWithParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 1915,
                "end": 1945
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1978,
                        "end": 1984
                      },
                      "start": 1976,
                      "end": 1984
                    },
                    "start": 1975,
                    "end": 1984
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2033,
                        "end": 2039
                      },
                      "start": 2031,
                      "end": 2039
                    },
                    "start": 2030,
                    "end": 2039
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
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2055,
                            "end": 2056
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2059,
                            "end": 2060
                          },
                          "definite": false,
                          "start": 2055,
                          "end": 2060
                        }
                      ],
                      "declare": false,
                      "start": 2051,
                      "end": 2061
                    }
                  ],
                  "start": 2041,
                  "end": 2067
                },
                "expression": false,
                "start": 1945,
                "end": 2067
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1900,
              "end": 2067
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFooWithRestParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 2087,
                "end": 2121
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2125,
                        "end": 2131
                      },
                      "start": 2123,
                      "end": 2131
                    },
                    "start": 2122,
                    "end": 2131
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2136,
                      "end": 2141
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 2143,
                          "end": 2149
                        },
                        "start": 2143,
                        "end": 2151
                      },
                      "start": 2141,
                      "end": 2151
                    },
                    "value": null,
                    "start": 2133,
                    "end": 2151
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2170,
                          "end": 2171
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rests",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2174,
                              "end": 2179
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "join",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2180,
                              "end": 2184
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2174,
                            "end": 2184
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\"",
                              "start": 2185,
                              "end": 2187
                            }
                          ],
                          "optional": false,
                          "start": 2174,
                          "end": 2188
                        },
                        "start": 2170,
                        "end": 2188
                      },
                      "start": 2163,
                      "end": 2189
                    }
                  ],
                  "start": 2153,
                  "end": 2195
                },
                "expression": false,
                "start": 2121,
                "end": 2195
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 2072,
              "end": 2195
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 2215,
                "end": 2244
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "type": "TSStringKeyword",
                        "start": 2248,
                        "end": 2254
                      },
                      "start": 2246,
                      "end": 2254
                    },
                    "start": 2245,
                    "end": 2254
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2257,
                    "end": 2263
                  },
                  "start": 2255,
                  "end": 2263
                },
                "body": null,
                "expression": false,
                "start": 2244,
                "end": 2264
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 2200,
              "end": 2264
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 2284,
                "end": 2313
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "type": "TSNumberKeyword",
                        "start": 2317,
                        "end": 2323
                      },
                      "start": 2315,
                      "end": 2323
                    },
                    "start": 2314,
                    "end": 2323
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2326,
                    "end": 2332
                  },
                  "start": 2324,
                  "end": 2332
                },
                "body": null,
                "expression": false,
                "start": 2313,
                "end": 2333
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 2269,
              "end": 2333
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 2353,
                "end": 2382
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2386,
                        "end": 2389
                      },
                      "start": 2384,
                      "end": 2389
                    },
                    "start": 2383,
                    "end": 2389
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2392,
                    "end": 2395
                  },
                  "start": 2390,
                  "end": 2395
                },
                "body": {
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
                        "start": 2413,
                        "end": 2414
                      },
                      "start": 2406,
                      "end": 2415
                    }
                  ],
                  "start": 2396,
                  "end": 2421
                },
                "expression": false,
                "start": 2382,
                "end": 2421
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 2338,
              "end": 2421
            }
          ],
          "start": 16,
          "end": 2423
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 2423
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 2423
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2442,
          "end": 2444
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2496,
                "end": 2499
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2503,
                  "end": 2509
                },
                "start": 2501,
                "end": 2509
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2496,
              "end": 2510
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 2565,
                "end": 2582
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "type": "TSStringKeyword",
                      "start": 2615,
                      "end": 2621
                    },
                    "start": 2613,
                    "end": 2621
                  },
                  "start": 2612,
                  "end": 2621
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2670,
                      "end": 2676
                    },
                    "start": 2668,
                    "end": 2676
                  },
                  "start": 2667,
                  "end": 2676
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2679,
                  "end": 2683
                },
                "start": 2677,
                "end": 2683
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2565,
              "end": 2684
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithRestParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 2690,
                "end": 2711
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "type": "TSStringKeyword",
                      "start": 2715,
                      "end": 2721
                    },
                    "start": 2713,
                    "end": 2721
                  },
                  "start": 2712,
                  "end": 2721
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2726,
                    "end": 2731
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2733,
                        "end": 2739
                      },
                      "start": 2733,
                      "end": 2741
                    },
                    "start": 2731,
                    "end": 2741
                  },
                  "value": null,
                  "start": 2723,
                  "end": 2741
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2744,
                  "end": 2750
                },
                "start": 2742,
                "end": 2750
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2690,
              "end": 2751
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 2757,
                "end": 2773
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "type": "TSStringKeyword",
                      "start": 2777,
                      "end": 2783
                    },
                    "start": 2775,
                    "end": 2783
                  },
                  "start": 2774,
                  "end": 2783
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2786,
                  "end": 2792
                },
                "start": 2784,
                "end": 2792
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2757,
              "end": 2793
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false,
                "typeAnnotation": null,
                "start": 2798,
                "end": 2814
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "type": "TSNumberKeyword",
                      "start": 2818,
                      "end": 2824
                    },
                    "start": 2816,
                    "end": 2824
                  },
                  "start": 2815,
                  "end": 2824
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2827,
                  "end": 2833
                },
                "start": 2825,
                "end": 2833
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2798,
              "end": 2834
            }
          ],
          "start": 2445,
          "end": 2836
        },
        "declare": false,
        "start": 2432,
        "end": 2836
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2425,
      "end": 2836
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2837
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 70
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
                "body": [],
                "start": 73,
                "end": 80
              },
              "expression": false,
              "start": 70,
              "end": 80
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 60,
            "end": 80
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 158
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 191,
                      "end": 197
                    },
                    "start": 189,
                    "end": 197
                  },
                  "start": 188,
                  "end": 197
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 246,
                      "end": 252
                    },
                    "start": 244,
                    "end": 252
                  },
                  "start": 243,
                  "end": 252
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 268,
                          "end": 269
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 272,
                          "end": 273
                        },
                        "definite": false,
                        "start": 268,
                        "end": 273
                      }
                    ],
                    "declare": false,
                    "start": 264,
                    "end": 274
                  }
                ],
                "start": 254,
                "end": 280
              },
              "expression": false,
              "start": 158,
              "end": 280
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 134,
            "end": 280
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithRestParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 313
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 317,
                      "end": 323
                    },
                    "start": 315,
                    "end": 323
                  },
                  "start": 314,
                  "end": 323
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 333
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 335,
                        "end": 341
                      },
                      "start": 335,
                      "end": 343
                    },
                    "start": 333,
                    "end": 343
                  },
                  "value": null,
                  "start": 325,
                  "end": 343
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 362,
                        "end": 363
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rests",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 366,
                            "end": 371
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 372,
                            "end": 376
                          },
                          "optional": false,
                          "computed": false,
                          "start": 366,
                          "end": 376
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 377,
                            "end": 379
                          }
                        ],
                        "optional": false,
                        "start": 366,
                        "end": 380
                      },
                      "start": 362,
                      "end": 380
                    },
                    "start": 355,
                    "end": 381
                  }
                ],
                "start": 345,
                "end": 387
              },
              "expression": false,
              "start": 313,
              "end": 387
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 285,
            "end": 387
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 416
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSStringKeyword",
                      "start": 420,
                      "end": 426
                    },
                    "start": 418,
                    "end": 426
                  },
                  "start": 417,
                  "end": 426
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 429,
                  "end": 435
                },
                "start": 427,
                "end": 435
              },
              "body": null,
              "expression": false,
              "start": 416,
              "end": 436
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 393,
            "end": 436
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 464
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 468,
                      "end": 474
                    },
                    "start": 466,
                    "end": 474
                  },
                  "start": 465,
                  "end": 474
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 477,
                  "end": 483
                },
                "start": 475,
                "end": 483
              },
              "body": null,
              "expression": false,
              "start": 464,
              "end": 484
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 441,
            "end": 484
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 512
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 516,
                      "end": 519
                    },
                    "start": 514,
                    "end": 519
                  },
                  "start": 513,
                  "end": 519
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 522,
                  "end": 525
                },
                "start": 520,
                "end": 525
              },
              "body": {
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
                      "start": 543,
                      "end": 544
                    },
                    "start": 536,
                    "end": 545
                  }
                ],
                "start": 526,
                "end": 551
              },
              "expression": false,
              "start": 512,
              "end": 551
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 489,
            "end": 551
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 628
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
                "body": [],
                "start": 631,
                "end": 638
              },
              "expression": false,
              "start": 628,
              "end": 638
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 610,
            "end": 638
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFooWithParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 700,
              "end": 724
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 757,
                      "end": 763
                    },
                    "start": 755,
                    "end": 763
                  },
                  "start": 754,
                  "end": 763
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 812,
                      "end": 818
                    },
                    "start": 810,
                    "end": 818
                  },
                  "start": 809,
                  "end": 818
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 834,
                          "end": 835
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 838,
                          "end": 839
                        },
                        "definite": false,
                        "start": 834,
                        "end": 839
                      }
                    ],
                    "declare": false,
                    "start": 830,
                    "end": 840
                  }
                ],
                "start": 820,
                "end": 846
              },
              "expression": false,
              "start": 724,
              "end": 846
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 692,
            "end": 846
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFooWithRestParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 887
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 891,
                      "end": 897
                    },
                    "start": 889,
                    "end": 897
                  },
                  "start": 888,
                  "end": 897
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 902,
                    "end": 907
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 909,
                        "end": 915
                      },
                      "start": 909,
                      "end": 917
                    },
                    "start": 907,
                    "end": 917
                  },
                  "value": null,
                  "start": 899,
                  "end": 917
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 936,
                        "end": 937
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rests",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 940,
                            "end": 945
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 946,
                            "end": 950
                          },
                          "optional": false,
                          "computed": false,
                          "start": 940,
                          "end": 950
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 951,
                            "end": 953
                          }
                        ],
                        "optional": false,
                        "start": 940,
                        "end": 954
                      },
                      "start": 936,
                      "end": 954
                    },
                    "start": 929,
                    "end": 955
                  }
                ],
                "start": 919,
                "end": 961
              },
              "expression": false,
              "start": 887,
              "end": 961
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 851,
            "end": 961
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 974,
              "end": 997
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSStringKeyword",
                      "start": 1001,
                      "end": 1007
                    },
                    "start": 999,
                    "end": 1007
                  },
                  "start": 998,
                  "end": 1007
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1010,
                  "end": 1016
                },
                "start": 1008,
                "end": 1016
              },
              "body": null,
              "expression": false,
              "start": 997,
              "end": 1017
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 966,
            "end": 1017
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1053
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 1057,
                      "end": 1063
                    },
                    "start": 1055,
                    "end": 1063
                  },
                  "start": 1054,
                  "end": 1063
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1066,
                  "end": 1072
                },
                "start": 1064,
                "end": 1072
              },
              "body": null,
              "expression": false,
              "start": 1053,
              "end": 1073
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1022,
            "end": 1073
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 1086,
              "end": 1109
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1113,
                      "end": 1116
                    },
                    "start": 1111,
                    "end": 1116
                  },
                  "start": 1110,
                  "end": 1116
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1119,
                  "end": 1122
                },
                "start": 1117,
                "end": 1122
              },
              "body": {
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
                      "start": 1140,
                      "end": 1141
                    },
                    "start": 1133,
                    "end": 1142
                  }
                ],
                "start": 1123,
                "end": 1148
              },
              "expression": false,
              "start": 1109,
              "end": 1148
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1078,
            "end": 1148
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1223
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
                "body": [],
                "start": 1226,
                "end": 1233
              },
              "expression": false,
              "start": 1223,
              "end": 1233
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1207,
            "end": 1233
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticFooWithParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1317
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1350,
                      "end": 1356
                    },
                    "start": 1348,
                    "end": 1356
                  },
                  "start": 1347,
                  "end": 1356
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1405,
                      "end": 1411
                    },
                    "start": 1403,
                    "end": 1411
                  },
                  "start": 1402,
                  "end": 1411
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1427,
                          "end": 1428
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1431,
                          "end": 1432
                        },
                        "definite": false,
                        "start": 1427,
                        "end": 1432
                      }
                    ],
                    "declare": false,
                    "start": 1423,
                    "end": 1433
                  }
                ],
                "start": 1413,
                "end": 1439
              },
              "expression": false,
              "start": 1317,
              "end": 1439
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1287,
            "end": 1439
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticFooWithRestParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 1451,
              "end": 1478
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1482,
                      "end": 1488
                    },
                    "start": 1480,
                    "end": 1488
                  },
                  "start": 1479,
                  "end": 1488
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1493,
                    "end": 1498
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 1500,
                        "end": 1506
                      },
                      "start": 1500,
                      "end": 1508
                    },
                    "start": 1498,
                    "end": 1508
                  },
                  "value": null,
                  "start": 1490,
                  "end": 1508
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1527,
                        "end": 1528
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rests",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1531,
                            "end": 1536
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1537,
                            "end": 1541
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1531,
                          "end": 1541
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 1542,
                            "end": 1544
                          }
                        ],
                        "optional": false,
                        "start": 1531,
                        "end": 1545
                      },
                      "start": 1527,
                      "end": 1545
                    },
                    "start": 1520,
                    "end": 1546
                  }
                ],
                "start": 1510,
                "end": 1552
              },
              "expression": false,
              "start": 1478,
              "end": 1552
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1444,
            "end": 1552
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticFooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 1564,
              "end": 1586
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSStringKeyword",
                      "start": 1590,
                      "end": 1596
                    },
                    "start": 1588,
                    "end": 1596
                  },
                  "start": 1587,
                  "end": 1596
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1599,
                  "end": 1605
                },
                "start": 1597,
                "end": 1605
              },
              "body": null,
              "expression": false,
              "start": 1586,
              "end": 1606
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1557,
            "end": 1606
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticFooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 1618,
              "end": 1640
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 1644,
                      "end": 1650
                    },
                    "start": 1642,
                    "end": 1650
                  },
                  "start": 1641,
                  "end": 1650
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1653,
                  "end": 1659
                },
                "start": 1651,
                "end": 1659
              },
              "body": null,
              "expression": false,
              "start": 1640,
              "end": 1660
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1611,
            "end": 1660
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticFooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 1672,
              "end": 1694
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1698,
                      "end": 1701
                    },
                    "start": 1696,
                    "end": 1701
                  },
                  "start": 1695,
                  "end": 1701
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1704,
                  "end": 1707
                },
                "start": 1702,
                "end": 1707
              },
              "body": {
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
                      "start": 1725,
                      "end": 1726
                    },
                    "start": 1718,
                    "end": 1727
                  }
                ],
                "start": 1708,
                "end": 1733
              },
              "expression": false,
              "start": 1694,
              "end": 1733
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1665,
            "end": 1733
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1813,
              "end": 1829
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
                "body": [],
                "start": 1832,
                "end": 1839
              },
              "expression": false,
              "start": 1829,
              "end": 1839
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1798,
            "end": 1839
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFooWithParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 1908,
              "end": 1938
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1971,
                      "end": 1977
                    },
                    "start": 1969,
                    "end": 1977
                  },
                  "start": 1968,
                  "end": 1977
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2026,
                      "end": 2032
                    },
                    "start": 2024,
                    "end": 2032
                  },
                  "start": 2023,
                  "end": 2032
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2048,
                          "end": 2049
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2052,
                          "end": 2053
                        },
                        "definite": false,
                        "start": 2048,
                        "end": 2053
                      }
                    ],
                    "declare": false,
                    "start": 2044,
                    "end": 2054
                  }
                ],
                "start": 2034,
                "end": 2060
              },
              "expression": false,
              "start": 1938,
              "end": 2060
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1893,
            "end": 2060
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFooWithRestParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 2080,
              "end": 2114
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2118,
                      "end": 2124
                    },
                    "start": 2116,
                    "end": 2124
                  },
                  "start": 2115,
                  "end": 2124
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2129,
                    "end": 2134
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2136,
                        "end": 2142
                      },
                      "start": 2136,
                      "end": 2144
                    },
                    "start": 2134,
                    "end": 2144
                  },
                  "value": null,
                  "start": 2126,
                  "end": 2144
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2163,
                        "end": 2164
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rests",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2167,
                            "end": 2172
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2173,
                            "end": 2177
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2167,
                          "end": 2177
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 2178,
                            "end": 2180
                          }
                        ],
                        "optional": false,
                        "start": 2167,
                        "end": 2181
                      },
                      "start": 2163,
                      "end": 2181
                    },
                    "start": 2156,
                    "end": 2182
                  }
                ],
                "start": 2146,
                "end": 2188
              },
              "expression": false,
              "start": 2114,
              "end": 2188
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2065,
            "end": 2188
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 2208,
              "end": 2237
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSStringKeyword",
                      "start": 2241,
                      "end": 2247
                    },
                    "start": 2239,
                    "end": 2247
                  },
                  "start": 2238,
                  "end": 2247
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2250,
                  "end": 2256
                },
                "start": 2248,
                "end": 2256
              },
              "body": null,
              "expression": false,
              "start": 2237,
              "end": 2257
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2193,
            "end": 2257
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 2277,
              "end": 2306
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 2310,
                      "end": 2316
                    },
                    "start": 2308,
                    "end": 2316
                  },
                  "start": 2307,
                  "end": 2316
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2319,
                  "end": 2325
                },
                "start": 2317,
                "end": 2325
              },
              "body": null,
              "expression": false,
              "start": 2306,
              "end": 2326
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2262,
            "end": 2326
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 2346,
              "end": 2375
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2379,
                      "end": 2382
                    },
                    "start": 2377,
                    "end": 2382
                  },
                  "start": 2376,
                  "end": 2382
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2385,
                  "end": 2388
                },
                "start": 2383,
                "end": 2388
              },
              "body": {
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
                      "start": 2406,
                      "end": 2407
                    },
                    "start": 2399,
                    "end": 2408
                  }
                ],
                "start": 2389,
                "end": 2414
              },
              "expression": false,
              "start": 2375,
              "end": 2414
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2331,
            "end": 2414
          }
        ],
        "start": 9,
        "end": 2416
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 2416
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2428,
        "end": 2430
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2482,
              "end": 2485
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2489,
                "end": 2495
              },
              "start": 2487,
              "end": 2495
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2482,
            "end": 2496
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 2551,
              "end": 2568
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 2601,
                    "end": 2607
                  },
                  "start": 2599,
                  "end": 2607
                },
                "start": 2598,
                "end": 2607
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2656,
                    "end": 2662
                  },
                  "start": 2654,
                  "end": 2662
                },
                "start": 2653,
                "end": 2662
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2665,
                "end": 2669
              },
              "start": 2663,
              "end": 2669
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2551,
            "end": 2670
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithRestParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 2676,
              "end": 2697
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 2701,
                    "end": 2707
                  },
                  "start": 2699,
                  "end": 2707
                },
                "start": 2698,
                "end": 2707
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rests",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2712,
                  "end": 2717
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 2719,
                      "end": 2725
                    },
                    "start": 2719,
                    "end": 2727
                  },
                  "start": 2717,
                  "end": 2727
                },
                "value": null,
                "start": 2709,
                "end": 2727
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2730,
                "end": 2736
              },
              "start": 2728,
              "end": 2736
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2676,
            "end": 2737
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 2743,
              "end": 2759
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 2763,
                    "end": 2769
                  },
                  "start": 2761,
                  "end": 2769
                },
                "start": 2760,
                "end": 2769
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2772,
                "end": 2778
              },
              "start": 2770,
              "end": 2778
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2743,
            "end": 2779
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false,
              "typeAnnotation": null,
              "start": 2784,
              "end": 2800
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSNumberKeyword",
                    "start": 2804,
                    "end": 2810
                  },
                  "start": 2802,
                  "end": 2810
                },
                "start": 2801,
                "end": 2810
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2813,
                "end": 2819
              },
              "start": 2811,
              "end": 2819
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2784,
            "end": 2820
          }
        ],
        "start": 2431,
        "end": 2822
      },
      "declare": false,
      "start": 2418,
      "end": 2822
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2822
}
```
