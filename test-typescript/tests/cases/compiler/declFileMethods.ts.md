declFileMethods_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2837,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 2423,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 2423,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 16,
          "end": 2423,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 67,
              "end": 87,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 74,
                "end": 77,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 77,
                "end": 87,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 80,
                  "end": 87,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 141,
              "end": 287,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 148,
                "end": 165,
                "decorators": [],
                "name": "fooWithParameters",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 165,
                "end": 287,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 261,
                  "end": 287,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 271,
                      "end": 281,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 275,
                          "end": 280,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 275,
                            "end": 276,
                            "decorators": [],
                            "name": "d",
                            "optional": false
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 279,
                            "end": 280,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 195,
                    "end": 204,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 196,
                      "end": 204,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 198,
                        "end": 204
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 250,
                    "end": 259,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 251,
                      "end": 259,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 253,
                        "end": 259
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 292,
              "end": 394,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 299,
                "end": 320,
                "decorators": [],
                "name": "fooWithRestParameters",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 320,
                "end": 394,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 352,
                  "end": 394,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 362,
                      "end": 388,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 369,
                        "end": 387,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 369,
                          "end": 370,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 373,
                          "end": 387,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 384,
                              "end": 386,
                              "raw": "\"\"",
                              "value": ""
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 373,
                            "end": 383,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 373,
                              "end": 378,
                              "decorators": [],
                              "name": "rests",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 379,
                              "end": 383,
                              "decorators": [],
                              "name": "join",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 321,
                    "end": 330,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 322,
                      "end": 330,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 324,
                        "end": 330
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 332,
                    "end": 350,
                    "argument": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 340,
                      "decorators": [],
                      "name": "rests",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 340,
                      "end": 350,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 342,
                        "end": 350,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 342,
                          "end": 348
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 400,
              "end": 443,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 407,
                "end": 423,
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 423,
                "end": 443,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 424,
                    "end": 433,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 425,
                      "end": 433,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 427,
                        "end": 433
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 434,
                  "end": 442,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 436,
                    "end": 442
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 448,
              "end": 491,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 455,
                "end": 471,
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 471,
                "end": 491,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 472,
                    "end": 481,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 473,
                      "end": 481,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 475,
                        "end": 481
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 482,
                  "end": 490,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 484,
                    "end": 490
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 496,
              "end": 558,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 503,
                "end": 519,
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 519,
                "end": 558,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 533,
                  "end": 558,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 543,
                      "end": 552,
                      "argument": {
                        "type": "Identifier",
                        "start": 550,
                        "end": 551,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 520,
                    "end": 526,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 521,
                      "end": 526,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 523,
                        "end": 526
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 527,
                  "end": 532,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 529,
                    "end": 532
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 617,
              "end": 645,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 625,
                "end": 635,
                "decorators": [],
                "name": "privateFoo",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 635,
                "end": 645,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 638,
                  "end": 645,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 699,
              "end": 853,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 707,
                "end": 731,
                "decorators": [],
                "name": "privateFooWithParameters",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 731,
                "end": 853,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 827,
                  "end": 853,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 837,
                      "end": 847,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 841,
                          "end": 846,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 841,
                            "end": 842,
                            "decorators": [],
                            "name": "d",
                            "optional": false
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 845,
                            "end": 846,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 761,
                    "end": 770,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 762,
                      "end": 770,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 764,
                        "end": 770
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 816,
                    "end": 825,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 817,
                      "end": 825,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 819,
                        "end": 825
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 858,
              "end": 968,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 866,
                "end": 894,
                "decorators": [],
                "name": "privateFooWithRestParameters",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 894,
                "end": 968,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 926,
                  "end": 968,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 936,
                      "end": 962,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 943,
                        "end": 961,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 943,
                          "end": 944,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 947,
                          "end": 961,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 958,
                              "end": 960,
                              "raw": "\"\"",
                              "value": ""
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 947,
                            "end": 957,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 947,
                              "end": 952,
                              "decorators": [],
                              "name": "rests",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 953,
                              "end": 957,
                              "decorators": [],
                              "name": "join",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 895,
                    "end": 904,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 896,
                      "end": 904,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 898,
                        "end": 904
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 906,
                    "end": 924,
                    "argument": {
                      "type": "Identifier",
                      "start": 909,
                      "end": 914,
                      "decorators": [],
                      "name": "rests",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 914,
                      "end": 924,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 916,
                        "end": 924,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 916,
                          "end": 922
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 973,
              "end": 1024,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 981,
                "end": 1004,
                "decorators": [],
                "name": "privateFooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1004,
                "end": 1024,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1005,
                    "end": 1014,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1006,
                      "end": 1014,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1008,
                        "end": 1014
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1015,
                  "end": 1023,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1017,
                    "end": 1023
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1029,
              "end": 1080,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1037,
                "end": 1060,
                "decorators": [],
                "name": "privateFooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1060,
                "end": 1080,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1070,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1062,
                      "end": 1070,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1064,
                        "end": 1070
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1071,
                  "end": 1079,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1073,
                    "end": 1079
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1085,
              "end": 1155,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1093,
                "end": 1116,
                "decorators": [],
                "name": "privateFooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1116,
                "end": 1155,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1130,
                  "end": 1155,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1140,
                      "end": 1149,
                      "argument": {
                        "type": "Identifier",
                        "start": 1147,
                        "end": 1148,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1117,
                    "end": 1123,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1118,
                      "end": 1123,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1120,
                        "end": 1123
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1124,
                  "end": 1129,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1126,
                    "end": 1129
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1214,
              "end": 1240,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1221,
                "end": 1230,
                "decorators": [],
                "name": "staticFoo",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 1230,
                "end": 1240,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1233,
                  "end": 1240,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1294,
              "end": 1446,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1301,
                "end": 1324,
                "decorators": [],
                "name": "staticFooWithParameters",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 1324,
                "end": 1446,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1420,
                  "end": 1446,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 1430,
                      "end": 1440,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1434,
                          "end": 1439,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 1434,
                            "end": 1435,
                            "decorators": [],
                            "name": "d",
                            "optional": false
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 1438,
                            "end": 1439,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1354,
                    "end": 1363,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1355,
                      "end": 1363,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1357,
                        "end": 1363
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1409,
                    "end": 1418,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1410,
                      "end": 1418,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1412,
                        "end": 1418
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1451,
              "end": 1559,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1458,
                "end": 1485,
                "decorators": [],
                "name": "staticFooWithRestParameters",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 1485,
                "end": 1559,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1517,
                  "end": 1559,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1527,
                      "end": 1553,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 1534,
                        "end": 1552,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 1534,
                          "end": 1535,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 1538,
                          "end": 1552,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 1549,
                              "end": 1551,
                              "raw": "\"\"",
                              "value": ""
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1538,
                            "end": 1548,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1538,
                              "end": 1543,
                              "decorators": [],
                              "name": "rests",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1544,
                              "end": 1548,
                              "decorators": [],
                              "name": "join",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1486,
                    "end": 1495,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1487,
                      "end": 1495,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1489,
                        "end": 1495
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 1497,
                    "end": 1515,
                    "argument": {
                      "type": "Identifier",
                      "start": 1500,
                      "end": 1505,
                      "decorators": [],
                      "name": "rests",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1505,
                      "end": 1515,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1507,
                        "end": 1515,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1507,
                          "end": 1513
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1564,
              "end": 1613,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1571,
                "end": 1593,
                "decorators": [],
                "name": "staticFooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1593,
                "end": 1613,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1594,
                    "end": 1603,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1595,
                      "end": 1603,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1597,
                        "end": 1603
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1604,
                  "end": 1612,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1606,
                    "end": 1612
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1618,
              "end": 1667,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1625,
                "end": 1647,
                "decorators": [],
                "name": "staticFooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 1647,
                "end": 1667,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1648,
                    "end": 1657,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1649,
                      "end": 1657,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1651,
                        "end": 1657
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1658,
                  "end": 1666,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1660,
                    "end": 1666
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1672,
              "end": 1740,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1679,
                "end": 1701,
                "decorators": [],
                "name": "staticFooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 1701,
                "end": 1740,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1715,
                  "end": 1740,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1725,
                      "end": 1734,
                      "argument": {
                        "type": "Identifier",
                        "start": 1732,
                        "end": 1733,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1702,
                    "end": 1708,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1703,
                      "end": 1708,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1705,
                        "end": 1708
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1709,
                  "end": 1714,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1711,
                    "end": 1714
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1805,
              "end": 1846,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1820,
                "end": 1836,
                "decorators": [],
                "name": "privateStaticFoo",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 1836,
                "end": 1846,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1839,
                  "end": 1846,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1900,
              "end": 2067,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1915,
                "end": 1945,
                "decorators": [],
                "name": "privateStaticFooWithParameters",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 1945,
                "end": 2067,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2041,
                  "end": 2067,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 2051,
                      "end": 2061,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 2055,
                          "end": 2060,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 2055,
                            "end": 2056,
                            "decorators": [],
                            "name": "d",
                            "optional": false
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 2059,
                            "end": 2060,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1975,
                    "end": 1984,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1976,
                      "end": 1984,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1978,
                        "end": 1984
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2030,
                    "end": 2039,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2031,
                      "end": 2039,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2033,
                        "end": 2039
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2072,
              "end": 2195,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2087,
                "end": 2121,
                "decorators": [],
                "name": "privateStaticFooWithRestParameters",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 2121,
                "end": 2195,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2153,
                  "end": 2195,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2163,
                      "end": 2189,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 2170,
                        "end": 2188,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 2170,
                          "end": 2171,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 2174,
                          "end": 2188,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 2185,
                              "end": 2187,
                              "raw": "\"\"",
                              "value": ""
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2174,
                            "end": 2184,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 2174,
                              "end": 2179,
                              "decorators": [],
                              "name": "rests",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2180,
                              "end": 2184,
                              "decorators": [],
                              "name": "join",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2122,
                    "end": 2131,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2123,
                      "end": 2131,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2125,
                        "end": 2131
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 2133,
                    "end": 2151,
                    "argument": {
                      "type": "Identifier",
                      "start": 2136,
                      "end": 2141,
                      "decorators": [],
                      "name": "rests",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2141,
                      "end": 2151,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2143,
                        "end": 2151,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 2143,
                          "end": 2149
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2200,
              "end": 2264,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2215,
                "end": 2244,
                "decorators": [],
                "name": "privateStaticFooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2244,
                "end": 2264,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2245,
                    "end": 2254,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2246,
                      "end": 2254,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2248,
                        "end": 2254
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2255,
                  "end": 2263,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2257,
                    "end": 2263
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2269,
              "end": 2333,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2284,
                "end": 2313,
                "decorators": [],
                "name": "privateStaticFooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 2313,
                "end": 2333,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2314,
                    "end": 2323,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2315,
                      "end": 2323,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2317,
                        "end": 2323
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2324,
                  "end": 2332,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2326,
                    "end": 2332
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2338,
              "end": 2421,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2353,
                "end": 2382,
                "decorators": [],
                "name": "privateStaticFooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 2382,
                "end": 2421,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2396,
                  "end": 2421,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2406,
                      "end": 2415,
                      "argument": {
                        "type": "Identifier",
                        "start": 2413,
                        "end": 2414,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2383,
                    "end": 2389,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2384,
                      "end": 2389,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2386,
                        "end": 2389
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2390,
                  "end": 2395,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2392,
                    "end": 2395
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 15,
          "decorators": [],
          "name": "c1",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2425,
      "end": 2836,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 2432,
        "end": 2836,
        "body": {
          "type": "TSInterfaceBody",
          "start": 2445,
          "end": 2836,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 2496,
              "end": 2510,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2496,
                "end": 2499,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2501,
                "end": 2509,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2503,
                  "end": 2509
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 2565,
              "end": 2684,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2565,
                "end": 2582,
                "decorators": [],
                "name": "fooWithParameters",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2612,
                  "end": 2621,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2613,
                    "end": 2621,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2615,
                      "end": 2621
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2667,
                  "end": 2676,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2668,
                    "end": 2676,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2670,
                      "end": 2676
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2677,
                "end": 2683,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2679,
                  "end": 2683
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 2690,
              "end": 2751,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2690,
                "end": 2711,
                "decorators": [],
                "name": "fooWithRestParameters",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2712,
                  "end": 2721,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2713,
                    "end": 2721,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2715,
                      "end": 2721
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 2723,
                  "end": 2741,
                  "argument": {
                    "type": "Identifier",
                    "start": 2726,
                    "end": 2731,
                    "decorators": [],
                    "name": "rests",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2731,
                    "end": 2741,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2733,
                      "end": 2741,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2733,
                        "end": 2739
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2742,
                "end": 2750,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2744,
                  "end": 2750
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 2757,
              "end": 2793,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2757,
                "end": 2773,
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2774,
                  "end": 2783,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2775,
                    "end": 2783,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2777,
                      "end": 2783
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2784,
                "end": 2792,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2786,
                  "end": 2792
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 2798,
              "end": 2834,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2798,
                "end": 2814,
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2815,
                  "end": 2824,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2816,
                    "end": 2824,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2818,
                      "end": 2824
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2825,
                "end": 2833,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2827,
                  "end": 2833
                }
              },
              "static": false
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 2442,
          "end": 2444,
          "decorators": [],
          "name": "I1",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
declFileMethods_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2823,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 2416,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 2416,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 80,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 70,
              "end": 80,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 80,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 134,
            "end": 280,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 158,
              "decorators": [],
              "name": "fooWithParameters",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 280,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 254,
                "end": 280,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 264,
                    "end": 274,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 268,
                        "end": 273,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 268,
                          "end": 269,
                          "decorators": [],
                          "name": "d",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 272,
                          "end": 273,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 188,
                  "end": 197,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 191,
                      "end": 197
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 243,
                  "end": 252,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 244,
                    "end": 252,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 246,
                      "end": 252
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 285,
            "end": 387,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 292,
              "end": 313,
              "decorators": [],
              "name": "fooWithRestParameters",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 313,
              "end": 387,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 387,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 355,
                    "end": 381,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 362,
                      "end": 380,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 362,
                        "end": 363,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 366,
                        "end": 380,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 377,
                            "end": 379,
                            "raw": "\"\"",
                            "value": ""
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 366,
                          "end": 376,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 366,
                            "end": 371,
                            "decorators": [],
                            "name": "rests",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 372,
                            "end": 376,
                            "decorators": [],
                            "name": "join",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 314,
                  "end": 323,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 315,
                    "end": 323,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 317,
                      "end": 323
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 325,
                  "end": 343,
                  "argument": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 333,
                    "decorators": [],
                    "name": "rests",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 333,
                    "end": 343,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 335,
                      "end": 343,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 335,
                        "end": 341
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 393,
            "end": 436,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 400,
              "end": 416,
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 416,
              "end": 436,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 417,
                  "end": 426,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 418,
                    "end": 426,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 420,
                      "end": 426
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 427,
                "end": 435,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 429,
                  "end": 435
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 441,
            "end": 484,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 448,
              "end": 464,
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 464,
              "end": 484,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 465,
                  "end": 474,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 466,
                    "end": 474,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 468,
                      "end": 474
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 475,
                "end": 483,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 477,
                  "end": 483
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 489,
            "end": 551,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 496,
              "end": 512,
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 512,
              "end": 551,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 526,
                "end": 551,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 536,
                    "end": 545,
                    "argument": {
                      "type": "Identifier",
                      "start": 543,
                      "end": 544,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 513,
                  "end": 519,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 514,
                    "end": 519,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 516,
                      "end": 519
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 520,
                "end": 525,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 522,
                  "end": 525
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 610,
            "end": 638,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 618,
              "end": 628,
              "decorators": [],
              "name": "privateFoo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 628,
              "end": 638,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 631,
                "end": 638,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 692,
            "end": 846,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 700,
              "end": 724,
              "decorators": [],
              "name": "privateFooWithParameters",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 724,
              "end": 846,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 820,
                "end": 846,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 830,
                    "end": 840,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 834,
                        "end": 839,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 834,
                          "end": 835,
                          "decorators": [],
                          "name": "d",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 838,
                          "end": 839,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 754,
                  "end": 763,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 755,
                    "end": 763,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 757,
                      "end": 763
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 809,
                  "end": 818,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 810,
                    "end": 818,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 812,
                      "end": 818
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 851,
            "end": 961,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 859,
              "end": 887,
              "decorators": [],
              "name": "privateFooWithRestParameters",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 887,
              "end": 961,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 919,
                "end": 961,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 929,
                    "end": 955,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 936,
                      "end": 954,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 936,
                        "end": 937,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 940,
                        "end": 954,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 951,
                            "end": 953,
                            "raw": "\"\"",
                            "value": ""
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 940,
                          "end": 950,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 940,
                            "end": 945,
                            "decorators": [],
                            "name": "rests",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 946,
                            "end": 950,
                            "decorators": [],
                            "name": "join",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 888,
                  "end": 897,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 889,
                    "end": 897,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 891,
                      "end": 897
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 899,
                  "end": 917,
                  "argument": {
                    "type": "Identifier",
                    "start": 902,
                    "end": 907,
                    "decorators": [],
                    "name": "rests",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 907,
                    "end": 917,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 909,
                      "end": 917,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 909,
                        "end": 915
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 966,
            "end": 1017,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 974,
              "end": 997,
              "decorators": [],
              "name": "privateFooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 997,
              "end": 1017,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 998,
                  "end": 1007,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 999,
                    "end": 1007,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1001,
                      "end": 1007
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1008,
                "end": 1016,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1010,
                  "end": 1016
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1022,
            "end": 1073,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1030,
              "end": 1053,
              "decorators": [],
              "name": "privateFooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1053,
              "end": 1073,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1054,
                  "end": 1063,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1055,
                    "end": 1063,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1057,
                      "end": 1063
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1064,
                "end": 1072,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1066,
                  "end": 1072
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1078,
            "end": 1148,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1086,
              "end": 1109,
              "decorators": [],
              "name": "privateFooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1109,
              "end": 1148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1123,
                "end": 1148,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1133,
                    "end": 1142,
                    "argument": {
                      "type": "Identifier",
                      "start": 1140,
                      "end": 1141,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1116,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1111,
                    "end": 1116,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1113,
                      "end": 1116
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1117,
                "end": 1122,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1119,
                  "end": 1122
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1207,
            "end": 1233,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1214,
              "end": 1223,
              "decorators": [],
              "name": "staticFoo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1223,
              "end": 1233,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1226,
                "end": 1233,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1287,
            "end": 1439,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1294,
              "end": 1317,
              "decorators": [],
              "name": "staticFooWithParameters",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1317,
              "end": 1439,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1413,
                "end": 1439,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1423,
                    "end": 1433,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1427,
                        "end": 1432,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1427,
                          "end": 1428,
                          "decorators": [],
                          "name": "d",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1431,
                          "end": 1432,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1347,
                  "end": 1356,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1348,
                    "end": 1356,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1350,
                      "end": 1356
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1402,
                  "end": 1411,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1403,
                    "end": 1411,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1405,
                      "end": 1411
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1444,
            "end": 1552,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1451,
              "end": 1478,
              "decorators": [],
              "name": "staticFooWithRestParameters",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1478,
              "end": 1552,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1510,
                "end": 1552,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1520,
                    "end": 1546,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1527,
                      "end": 1545,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1527,
                        "end": 1528,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 1531,
                        "end": 1545,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1542,
                            "end": 1544,
                            "raw": "\"\"",
                            "value": ""
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1531,
                          "end": 1541,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1531,
                            "end": 1536,
                            "decorators": [],
                            "name": "rests",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1537,
                            "end": 1541,
                            "decorators": [],
                            "name": "join",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1479,
                  "end": 1488,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1480,
                    "end": 1488,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1482,
                      "end": 1488
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1490,
                  "end": 1508,
                  "argument": {
                    "type": "Identifier",
                    "start": 1493,
                    "end": 1498,
                    "decorators": [],
                    "name": "rests",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1498,
                    "end": 1508,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1500,
                      "end": 1508,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 1500,
                        "end": 1506
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1557,
            "end": 1606,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1564,
              "end": 1586,
              "decorators": [],
              "name": "staticFooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1586,
              "end": 1606,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1587,
                  "end": 1596,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1588,
                    "end": 1596,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1590,
                      "end": 1596
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1597,
                "end": 1605,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1599,
                  "end": 1605
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1611,
            "end": 1660,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1618,
              "end": 1640,
              "decorators": [],
              "name": "staticFooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1640,
              "end": 1660,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1641,
                  "end": 1650,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1642,
                    "end": 1650,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1644,
                      "end": 1650
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1651,
                "end": 1659,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1653,
                  "end": 1659
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1665,
            "end": 1733,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1672,
              "end": 1694,
              "decorators": [],
              "name": "staticFooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1694,
              "end": 1733,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1708,
                "end": 1733,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1718,
                    "end": 1727,
                    "argument": {
                      "type": "Identifier",
                      "start": 1725,
                      "end": 1726,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1695,
                  "end": 1701,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1696,
                    "end": 1701,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1698,
                      "end": 1701
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1702,
                "end": 1707,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1704,
                  "end": 1707
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1798,
            "end": 1839,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1813,
              "end": 1829,
              "decorators": [],
              "name": "privateStaticFoo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1829,
              "end": 1839,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1832,
                "end": 1839,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1893,
            "end": 2060,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1908,
              "end": 1938,
              "decorators": [],
              "name": "privateStaticFooWithParameters",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1938,
              "end": 2060,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2034,
                "end": 2060,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2044,
                    "end": 2054,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2048,
                        "end": 2053,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2048,
                          "end": 2049,
                          "decorators": [],
                          "name": "d",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 2052,
                          "end": 2053,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1968,
                  "end": 1977,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1969,
                    "end": 1977,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1971,
                      "end": 1977
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2023,
                  "end": 2032,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2024,
                    "end": 2032,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2026,
                      "end": 2032
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2065,
            "end": 2188,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2080,
              "end": 2114,
              "decorators": [],
              "name": "privateStaticFooWithRestParameters",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2114,
              "end": 2188,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2146,
                "end": 2188,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2156,
                    "end": 2182,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 2163,
                      "end": 2181,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 2163,
                        "end": 2164,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 2167,
                        "end": 2181,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 2178,
                            "end": 2180,
                            "raw": "\"\"",
                            "value": ""
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2167,
                          "end": 2177,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2167,
                            "end": 2172,
                            "decorators": [],
                            "name": "rests",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2173,
                            "end": 2177,
                            "decorators": [],
                            "name": "join",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2115,
                  "end": 2124,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2116,
                    "end": 2124,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2118,
                      "end": 2124
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 2126,
                  "end": 2144,
                  "argument": {
                    "type": "Identifier",
                    "start": 2129,
                    "end": 2134,
                    "decorators": [],
                    "name": "rests",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2134,
                    "end": 2144,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2136,
                      "end": 2144,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2136,
                        "end": 2142
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2193,
            "end": 2257,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2208,
              "end": 2237,
              "decorators": [],
              "name": "privateStaticFooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2237,
              "end": 2257,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2238,
                  "end": 2247,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2239,
                    "end": 2247,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2241,
                      "end": 2247
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2248,
                "end": 2256,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2250,
                  "end": 2256
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2262,
            "end": 2326,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2277,
              "end": 2306,
              "decorators": [],
              "name": "privateStaticFooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2306,
              "end": 2326,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2307,
                  "end": 2316,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2308,
                    "end": 2316,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2310,
                      "end": 2316
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2317,
                "end": 2325,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2319,
                  "end": 2325
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2331,
            "end": 2414,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2346,
              "end": 2375,
              "decorators": [],
              "name": "privateStaticFooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2375,
              "end": 2414,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2389,
                "end": 2414,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2399,
                    "end": 2408,
                    "argument": {
                      "type": "Identifier",
                      "start": 2406,
                      "end": 2407,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2376,
                  "end": 2382,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2377,
                    "end": 2382,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2379,
                      "end": 2382
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2383,
                "end": 2388,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2385,
                  "end": 2388
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "c2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2418,
      "end": 2822,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2431,
        "end": 2822,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2482,
            "end": 2496,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2482,
              "end": 2485,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2487,
              "end": 2495,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2489,
                "end": 2495
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2551,
            "end": 2670,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2551,
              "end": 2568,
              "decorators": [],
              "name": "fooWithParameters",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2598,
                "end": 2607,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2599,
                  "end": 2607,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2601,
                    "end": 2607
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 2653,
                "end": 2662,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2654,
                  "end": 2662,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2656,
                    "end": 2662
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2663,
              "end": 2669,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2665,
                "end": 2669
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2676,
            "end": 2737,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2676,
              "end": 2697,
              "decorators": [],
              "name": "fooWithRestParameters",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2698,
                "end": 2707,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2699,
                  "end": 2707,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2701,
                    "end": 2707
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 2709,
                "end": 2727,
                "argument": {
                  "type": "Identifier",
                  "start": 2712,
                  "end": 2717,
                  "decorators": [],
                  "name": "rests",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2717,
                  "end": 2727,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2719,
                    "end": 2727,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 2719,
                      "end": 2725
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2728,
              "end": 2736,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2730,
                "end": 2736
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2743,
            "end": 2779,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2743,
              "end": 2759,
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2760,
                "end": 2769,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2761,
                  "end": 2769,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2763,
                    "end": 2769
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2770,
              "end": 2778,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2772,
                "end": 2778
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2784,
            "end": 2820,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2784,
              "end": 2800,
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2801,
                "end": 2810,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2802,
                  "end": 2810,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2804,
                    "end": 2810
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2811,
              "end": 2819,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2813,
                "end": 2819
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2428,
        "end": 2430,
        "decorators": [],
        "name": "I2",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
