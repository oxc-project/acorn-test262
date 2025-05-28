__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1755,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 992,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 992,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 121,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 121,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 35,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 37,
                  "end": 49,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 49,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 121,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 82,
                    "end": 103,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 86,
                        "end": 102,
                        "id": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 102,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 95,
                            "end": 102,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 97,
                              "end": 102,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 97,
                                "end": 100
                              }
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "start": 126,
            "end": 234,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 137,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 137,
              "end": 234,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 138,
                  "end": 155,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 147,
                    "end": 155,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 149,
                      "end": 155
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 157,
                  "end": 164,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 164,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 234,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 197,
                    "end": 216,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 201,
                        "end": 215,
                        "id": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 210,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 213,
                          "end": 215,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "start": 239,
            "end": 335,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 246,
              "end": 256,
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 256,
              "end": 335,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 257,
                  "end": 274,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 266,
                    "end": 274,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 268,
                      "end": 274
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 276,
                "end": 335,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 298,
                    "end": 317,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 302,
                        "end": 316,
                        "id": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 311,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 314,
                          "end": 316,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "start": 340,
            "end": 375,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 349,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 349,
              "end": 375,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 350,
                  "end": 359,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 351,
                    "end": 359,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 353,
                      "end": 359
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 361,
                  "end": 373,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 373,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 403,
            "end": 438,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 410,
              "end": 412,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 412,
              "end": 438,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 413,
                  "end": 422,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 414,
                    "end": 422,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 416,
                      "end": 422
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 424,
                  "end": 436,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 436,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 466,
            "end": 556,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 473,
              "end": 475,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 475,
              "end": 556,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 476,
                  "end": 482,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 477,
                    "end": 482,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 479,
                      "end": 482
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 484,
                  "end": 496,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 496,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 498,
                "end": 556,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 517,
                    "end": 538,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 521,
                        "end": 537,
                        "id": {
                          "type": "Identifier",
                          "start": 521,
                          "end": 537,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 530,
                            "end": 537,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 532,
                              "end": 537,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 532,
                                "end": 535
                              }
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "start": 561,
            "end": 600,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 568,
              "end": 571,
              "decorators": [],
              "name": "f41",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 571,
              "end": 600,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 572,
                  "end": 589,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 581,
                    "end": 589,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 583,
                      "end": 589
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 591,
                  "end": 598,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 598,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 628,
            "end": 667,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 635,
              "end": 638,
              "decorators": [],
              "name": "f41",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 638,
              "end": 667,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 639,
                  "end": 656,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 648,
                    "end": 656,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 650,
                      "end": 656
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 658,
                  "end": 665,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 661,
                    "end": 665,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 695,
            "end": 787,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 702,
              "end": 705,
              "decorators": [],
              "name": "f41",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 705,
              "end": 787,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 706,
                  "end": 720,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 715,
                    "end": 720,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 717,
                      "end": 720
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 722,
                  "end": 729,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 729,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 731,
                "end": 787,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 750,
                    "end": 769,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 754,
                        "end": 768,
                        "id": {
                          "type": "Identifier",
                          "start": 754,
                          "end": 768,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 763,
                            "end": 768,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 765,
                              "end": 768
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "start": 792,
            "end": 828,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 799,
              "end": 808,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 808,
              "end": 828,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 809,
                  "end": 826,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 818,
                    "end": 826,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 820,
                      "end": 826
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 845,
            "end": 881,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 852,
              "end": 861,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 861,
              "end": 881,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 862,
                  "end": 879,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 871,
                    "end": 879,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 873,
                      "end": 879
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 898,
            "end": 990,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 905,
              "end": 914,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 914,
              "end": 990,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 915,
                  "end": 929,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 924,
                    "end": 929,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 926,
                      "end": 929
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 931,
                "end": 990,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 953,
                    "end": 972,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 957,
                        "end": 971,
                        "id": {
                          "type": "Identifier",
                          "start": 957,
                          "end": 971,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 966,
                            "end": 971,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 968,
                              "end": 971
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
      "start": 994,
      "end": 1587,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1008,
        "end": 1010,
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1011,
        "end": 1587,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1017,
            "end": 1053,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1024,
              "end": 1027,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1027,
              "end": 1053,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1037,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1029,
                    "end": 1037,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1031,
                      "end": 1037
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1039,
                  "end": 1051,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1042,
                    "end": 1051,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 1084,
            "end": 1124,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1091,
              "end": 1095,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1095,
              "end": 1124,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1113,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1105,
                    "end": 1113,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1107,
                      "end": 1113
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1115,
                  "end": 1122,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1118,
                    "end": 1122,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 1155,
            "end": 1192,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1162,
              "end": 1172,
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1172,
              "end": 1192,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1173,
                  "end": 1190,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1182,
                    "end": 1190,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1184,
                      "end": 1190
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 1224,
            "end": 1259,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1231,
              "end": 1233,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1233,
              "end": 1259,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1234,
                  "end": 1243,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1235,
                    "end": 1243,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1237,
                      "end": 1243
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1245,
                  "end": 1257,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1248,
                    "end": 1257,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 1287,
            "end": 1322,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1294,
              "end": 1296,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1296,
              "end": 1322,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1297,
                  "end": 1306,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1298,
                    "end": 1306,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1300,
                      "end": 1306
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1308,
                  "end": 1320,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1311,
                    "end": 1320,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 1350,
            "end": 1389,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1357,
              "end": 1360,
              "decorators": [],
              "name": "f41",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1360,
              "end": 1389,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1361,
                  "end": 1378,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1370,
                    "end": 1378,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1372,
                      "end": 1378
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1380,
                  "end": 1387,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1383,
                    "end": 1387,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 1417,
            "end": 1456,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1424,
              "end": 1427,
              "decorators": [],
              "name": "f41",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1427,
              "end": 1456,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1428,
                  "end": 1445,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1437,
                    "end": 1445,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1439,
                      "end": 1445
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1447,
                  "end": 1454,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1450,
                    "end": 1454,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 1484,
            "end": 1520,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1491,
              "end": 1500,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1500,
              "end": 1520,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1501,
                  "end": 1518,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1510,
                    "end": 1518,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1512,
                      "end": 1518
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
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
            "start": 1537,
            "end": 1573,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1544,
              "end": 1553,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1553,
              "end": 1573,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1554,
                  "end": 1571,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1563,
                    "end": 1571,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1565,
                      "end": 1571
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 1589,
      "end": 1755,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1595,
        "end": 1597,
        "decorators": [],
        "name": "c3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1598,
        "end": 1755,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1604,
            "end": 1681,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1611,
              "end": 1614,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1614,
              "end": 1681,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1615,
                  "end": 1632,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1618,
                    "end": 1632,
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1634,
                "end": 1681,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1644,
                    "end": 1663,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1648,
                        "end": 1662,
                        "id": {
                          "type": "Identifier",
                          "start": 1648,
                          "end": 1657,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1660,
                          "end": 1662,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "start": 1686,
            "end": 1753,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1693,
              "end": 1703,
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1703,
              "end": 1753,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1706,
                "end": 1753,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1716,
                    "end": 1735,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1720,
                        "end": 1734,
                        "id": {
                          "type": "Identifier",
                          "start": 1720,
                          "end": 1729,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1732,
                          "end": 1734,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
