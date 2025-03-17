__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 986,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 182,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 180,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 180,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 29,
                  "end": 42,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 36,
                      "end": 42
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 180,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 62,
                    "end": 174,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 66,
                        "end": 174,
                        "id": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 72,
                          "name": "lambda",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 75,
                          "end": 174,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 81,
                            "end": 174,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 95,
                                "end": 112,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 102,
                                  "end": 111,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 102,
                                      "end": 103,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 107,
                                    "end": 111
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 184,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 194,
        "name": "Foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 375,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 201,
            "end": 373,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 212,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 212,
              "end": 373,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 213,
                  "end": 234,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 234,
                    "name": "_this",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 234,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 228,
                        "end": 234
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 236,
                "end": 373,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 255,
                    "end": 367,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 259,
                        "end": 367,
                        "id": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 265,
                          "name": "lambda",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 268,
                          "end": 367,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 274,
                            "end": 367,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 288,
                                "end": 305,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 295,
                                  "end": 304,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 295,
                                      "end": 296,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 300,
                                    "end": 304
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 380,
      "end": 676,
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 390,
        "name": "Foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 391,
        "end": 676,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 397,
            "end": 424,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 397,
              "end": 408,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 408,
              "end": 424,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 409,
                  "end": 422,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 414,
                    "end": 422,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 416,
                      "end": 422
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 455,
            "end": 482,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 455,
              "end": 466,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 466,
              "end": 482,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 467,
                  "end": 480,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 472,
                    "end": 480,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 474,
                      "end": 480
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 513,
            "end": 674,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 513,
              "end": 524,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 524,
              "end": 674,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 525,
                  "end": 535,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 530,
                    "end": 535,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 532,
                      "end": 535
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 537,
                "end": 674,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 556,
                    "end": 668,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 560,
                        "end": 668,
                        "id": {
                          "type": "Identifier",
                          "start": 560,
                          "end": 566,
                          "name": "lambda",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 569,
                          "end": 668,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 575,
                            "end": 668,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 589,
                                "end": 606,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 596,
                                  "end": 605,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 596,
                                      "end": 597,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 601,
                                    "end": 605
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 680,
      "end": 984,
      "id": {
        "type": "Identifier",
        "start": 686,
        "end": 690,
        "name": "Foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 691,
        "end": 984,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 697,
            "end": 724,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 697,
              "end": 708,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 708,
              "end": 724,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 709,
                  "end": 722,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 714,
                    "end": 722,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 716,
                      "end": 722
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 755,
            "end": 782,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 755,
              "end": 766,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 766,
              "end": 782,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 767,
                  "end": 780,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 772,
                    "end": 780,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 774,
                      "end": 780
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 813,
            "end": 982,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 813,
              "end": 824,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 824,
              "end": 982,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 825,
                  "end": 843,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 833,
                    "end": 843,
                    "name": "_this",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 838,
                      "end": 843,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 840,
                        "end": 843
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 845,
                "end": 982,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 864,
                    "end": 976,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 868,
                        "end": 976,
                        "id": {
                          "type": "Identifier",
                          "start": 868,
                          "end": 874,
                          "name": "lambda",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 877,
                          "end": 976,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 883,
                            "end": 976,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 897,
                                "end": 914,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 904,
                                  "end": 913,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 904,
                                      "end": 905,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 909,
                                    "end": 913
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
