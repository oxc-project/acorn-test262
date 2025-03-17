__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1625,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 350,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Food",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 350,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 40,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "name": "amount",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 112,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 56,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 56,
              "end": 112,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 57,
                  "end": 76,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 76,
                    "name": "name",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 70,
                        "end": 76
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
                "start": 78,
                "end": 112,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 88,
                    "end": 106,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 88,
                      "end": 105,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 88,
                        "end": 99,
                        "object": {
                          "type": "ThisExpression",
                          "start": 88,
                          "end": 92
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 99,
                          "name": "amount",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 102,
                        "end": 105,
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 348,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "name": "eat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 127,
              "end": 348,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 128,
                  "end": 147,
                  "name": "amountToEat",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 141,
                      "end": 147
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 158,
                "end": 348,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 168,
                    "end": 195,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 168,
                      "end": 194,
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 168,
                        "end": 179,
                        "object": {
                          "type": "ThisExpression",
                          "start": 168,
                          "end": 172
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 179,
                          "name": "amount",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 194,
                        "name": "amountToEat",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 204,
                    "end": 342,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 208,
                      "end": 224,
                      "left": {
                        "type": "MemberExpression",
                        "start": 208,
                        "end": 219,
                        "object": {
                          "type": "ThisExpression",
                          "start": 208,
                          "end": 212
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 219,
                          "name": "amount",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "<=",
                      "right": {
                        "type": "Literal",
                        "start": 223,
                        "end": 224,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 226,
                      "end": 292,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 240,
                          "end": 256,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 240,
                            "end": 255,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 240,
                              "end": 251,
                              "object": {
                                "type": "ThisExpression",
                                "start": 240,
                                "end": 244
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 251,
                                "name": "amount",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 254,
                              "end": 255,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 269,
                          "end": 282,
                          "argument": {
                            "type": "Literal",
                            "start": 276,
                            "end": 281,
                            "value": false,
                            "raw": "false"
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 306,
                      "end": 342,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 320,
                          "end": 332,
                          "argument": {
                            "type": "Literal",
                            "start": 327,
                            "end": 331,
                            "value": true,
                            "raw": "true"
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 148,
                "end": 157,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 150,
                  "end": 157
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "start": 351,
      "end": 467,
      "id": {
        "type": "Identifier",
        "start": 357,
        "end": 368,
        "name": "MonsterFood",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 377,
        "end": 381,
        "name": "Food",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 382,
        "end": 467,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 388,
            "end": 465,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 399,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 399,
              "end": 465,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 400,
                  "end": 412,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 404,
                    "end": 412,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 406,
                      "end": 412
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 414,
                  "end": 435,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 435,
                    "name": "flavor",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 427,
                      "end": 435,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 429,
                        "end": 435
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
                "start": 437,
                "end": 465,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 447,
                    "end": 459,
                    "expression": {
                      "type": "CallExpression",
                      "start": 447,
                      "end": 458,
                      "callee": {
                        "type": "Super",
                        "start": 447,
                        "end": 452
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 453,
                          "end": 457,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "start": 468,
      "end": 623,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 482,
        "name": "IceCream",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 491,
        "end": 502,
        "name": "MonsterFood",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 503,
        "end": 623,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 509,
            "end": 538,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 517,
              "end": 528,
              "name": "isDairyFree",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 528,
              "end": 537,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 530,
                "end": 537
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 543,
            "end": 621,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 543,
              "end": 554,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 554,
              "end": 621,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 555,
                  "end": 576,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 576,
                    "name": "flavor",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 568,
                      "end": 576,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 570,
                        "end": 576
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
                "start": 578,
                "end": 621,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 588,
                    "end": 615,
                    "expression": {
                      "type": "CallExpression",
                      "start": 588,
                      "end": 614,
                      "callee": {
                        "type": "Super",
                        "start": 588,
                        "end": 593
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 594,
                          "end": 605,
                          "value": "Ice Cream",
                          "raw": "\"Ice Cream\""
                        },
                        {
                          "type": "Identifier",
                          "start": 607,
                          "end": 613,
                          "name": "flavor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "start": 624,
      "end": 770,
      "id": {
        "type": "Identifier",
        "start": 630,
        "end": 636,
        "name": "Cookie",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 645,
        "end": 656,
        "name": "MonsterFood",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 657,
        "end": 770,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 663,
            "end": 768,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 663,
              "end": 674,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 674,
              "end": 768,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 675,
                  "end": 696,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 682,
                    "end": 696,
                    "name": "flavor",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 688,
                      "end": 696,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 690,
                        "end": 696
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 698,
                  "end": 726,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 705,
                    "end": 726,
                    "name": "isGlutenFree",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 717,
                      "end": 726,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 719,
                        "end": 726
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
                "start": 728,
                "end": 768,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 738,
                    "end": 762,
                    "expression": {
                      "type": "CallExpression",
                      "start": 738,
                      "end": 761,
                      "callee": {
                        "type": "Super",
                        "start": 738,
                        "end": 743
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 744,
                          "end": 752,
                          "value": "Cookie",
                          "raw": "\"Cookie\""
                        },
                        {
                          "type": "Identifier",
                          "start": 754,
                          "end": 760,
                          "name": "flavor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "start": 771,
      "end": 887,
      "id": {
        "type": "Identifier",
        "start": 777,
        "end": 784,
        "name": "PetFood",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 793,
        "end": 797,
        "name": "Food",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 798,
        "end": 887,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 804,
            "end": 885,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 804,
              "end": 815,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 815,
              "end": 885,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 816,
                  "end": 828,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 820,
                    "end": 828,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 822,
                      "end": 828
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 830,
                  "end": 855,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 837,
                    "end": 855,
                    "name": "whereToBuy",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 847,
                      "end": 855,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 849,
                        "end": 855
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
                "start": 857,
                "end": 885,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 867,
                    "end": 879,
                    "expression": {
                      "type": "CallExpression",
                      "start": 867,
                      "end": 878,
                      "callee": {
                        "type": "Super",
                        "start": 867,
                        "end": 872
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 873,
                          "end": 877,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "start": 888,
      "end": 1025,
      "id": {
        "type": "Identifier",
        "start": 894,
        "end": 917,
        "name": "ExpensiveOrganicDogFood",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 926,
        "end": 933,
        "name": "PetFood",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 934,
        "end": 1025,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 940,
            "end": 1023,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 940,
              "end": 951,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 951,
              "end": 1023,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 952,
                  "end": 977,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 959,
                    "end": 977,
                    "name": "whereToBuy",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 969,
                      "end": 977,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 971,
                        "end": 977
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
                "start": 979,
                "end": 1023,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 989,
                    "end": 1017,
                    "expression": {
                      "type": "CallExpression",
                      "start": 989,
                      "end": 1016,
                      "callee": {
                        "type": "Super",
                        "start": 989,
                        "end": 994
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 995,
                          "end": 1003,
                          "value": "Origen",
                          "raw": "\"Origen\""
                        },
                        {
                          "type": "Identifier",
                          "start": 1005,
                          "end": 1015,
                          "name": "whereToBuy",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "start": 1026,
      "end": 1201,
      "id": {
        "type": "Identifier",
        "start": 1032,
        "end": 1055,
        "name": "ExpensiveOrganicCatFood",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1064,
        "end": 1071,
        "name": "PetFood",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1072,
        "end": 1201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1078,
            "end": 1199,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1078,
              "end": 1089,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1089,
              "end": 1199,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 1090,
                  "end": 1115,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1097,
                    "end": 1115,
                    "name": "whereToBuy",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1107,
                      "end": 1115,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1109,
                        "end": 1115
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 1117,
                  "end": 1145,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1124,
                    "end": 1145,
                    "name": "containsFish",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1136,
                      "end": 1145,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1138,
                        "end": 1145
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
                "start": 1147,
                "end": 1199,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1157,
                    "end": 1193,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1157,
                      "end": 1192,
                      "callee": {
                        "type": "Super",
                        "start": 1157,
                        "end": 1162
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1163,
                          "end": 1179,
                          "value": "Nature's Logic",
                          "raw": "\"Nature's Logic\""
                        },
                        {
                          "type": "Identifier",
                          "start": 1181,
                          "end": 1191,
                          "name": "whereToBuy",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "start": 1202,
      "end": 1245,
      "id": {
        "type": "Identifier",
        "start": 1208,
        "end": 1212,
        "name": "Slug",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1213,
        "end": 1245,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1345,
      "end": 1476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1349,
          "end": 1475,
          "id": {
            "type": "Identifier",
            "start": 1349,
            "end": 1354,
            "name": "foods",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1357,
            "end": 1475,
            "callee": {
              "type": "MemberExpression",
              "start": 1361,
              "end": 1475,
              "object": {
                "type": "Identifier",
                "start": 1361,
                "end": 1368,
                "name": "PetFood",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "SequenceExpression",
                "start": 1369,
                "end": 1474,
                "expressions": [
                  {
                    "type": "NewExpression",
                    "start": 1369,
                    "end": 1404,
                    "callee": {
                      "type": "Identifier",
                      "start": 1373,
                      "end": 1381,
                      "name": "IceCream",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1382,
                        "end": 1403,
                        "value": "Mint chocolate chip",
                        "raw": "'Mint chocolate chip'"
                      }
                    ],
                    "typeArguments": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 1407,
                    "end": 1438,
                    "callee": {
                      "type": "Identifier",
                      "start": 1407,
                      "end": 1413,
                      "name": "Cookie",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1414,
                        "end": 1430,
                        "value": "Chocolate chip",
                        "raw": "'Chocolate chip'"
                      },
                      {
                        "type": "Literal",
                        "start": 1432,
                        "end": 1437,
                        "value": false,
                        "raw": "false"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "NewExpression",
                    "start": 1441,
                    "end": 1474,
                    "callee": {
                      "type": "Identifier",
                      "start": 1445,
                      "end": 1451,
                      "name": "Cookie",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1452,
                        "end": 1467,
                        "value": "Peanut butter",
                        "raw": "'Peanut butter'"
                      },
                      {
                        "type": "Literal",
                        "start": 1469,
                        "end": 1473,
                        "value": true,
                        "raw": "true"
                      }
                    ],
                    "typeArguments": null
                  }
                ]
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1477,
      "end": 1624,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1481,
          "end": 1623,
          "id": {
            "type": "Identifier",
            "start": 1481,
            "end": 1502,
            "name": "foods2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1487,
              "end": 1502,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1489,
                "end": 1502,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1489,
                  "end": 1500,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1489,
                    "end": 1500,
                    "name": "MonsterFood",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1505,
            "end": 1623,
            "callee": {
              "type": "MemberExpression",
              "start": 1509,
              "end": 1623,
              "object": {
                "type": "Identifier",
                "start": 1509,
                "end": 1516,
                "name": "PetFood",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "SequenceExpression",
                "start": 1517,
                "end": 1622,
                "expressions": [
                  {
                    "type": "NewExpression",
                    "start": 1517,
                    "end": 1552,
                    "callee": {
                      "type": "Identifier",
                      "start": 1521,
                      "end": 1529,
                      "name": "IceCream",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1530,
                        "end": 1551,
                        "value": "Mint chocolate chip",
                        "raw": "'Mint chocolate chip'"
                      }
                    ],
                    "typeArguments": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 1555,
                    "end": 1586,
                    "callee": {
                      "type": "Identifier",
                      "start": 1555,
                      "end": 1561,
                      "name": "Cookie",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1562,
                        "end": 1578,
                        "value": "Chocolate chip",
                        "raw": "'Chocolate chip'"
                      },
                      {
                        "type": "Literal",
                        "start": 1580,
                        "end": 1585,
                        "value": false,
                        "raw": "false"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "NewExpression",
                    "start": 1589,
                    "end": 1622,
                    "callee": {
                      "type": "Identifier",
                      "start": 1593,
                      "end": 1599,
                      "name": "Cookie",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1600,
                        "end": 1615,
                        "value": "Peanut butter",
                        "raw": "'Peanut butter'"
                      },
                      {
                        "type": "Literal",
                        "start": 1617,
                        "end": 1621,
                        "value": true,
                        "raw": "true"
                      }
                    ],
                    "typeArguments": null
                  }
                ]
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
