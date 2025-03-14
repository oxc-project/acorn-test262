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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 350,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 40,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "amount",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 112,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 56,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 56,
              "end": 112,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 88,
                          "end": 92
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 99,
                          "decorators": [],
                          "name": "amount",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 102,
                        "end": 105,
                        "raw": "100",
                        "value": 100
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
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 70,
                        "end": 76
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 348,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "decorators": [],
              "name": "eat",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 127,
              "end": 348,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 168,
                          "end": 172
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 179,
                          "decorators": [],
                          "name": "amount",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 194,
                        "decorators": [],
                        "name": "amountToEat",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 204,
                    "end": 342,
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
                            "raw": "true",
                            "value": true
                          }
                        }
                      ]
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
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 240,
                                "end": 244
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 251,
                                "decorators": [],
                                "name": "amount",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 254,
                              "end": 255,
                              "raw": "0",
                              "value": 0
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 269,
                          "end": 282,
                          "argument": {
                            "type": "Literal",
                            "start": 276,
                            "end": 281,
                            "raw": "false",
                            "value": false
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 208,
                      "end": 224,
                      "operator": "<=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 208,
                        "end": 219,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 208,
                          "end": 212
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 219,
                          "decorators": [],
                          "name": "amount",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 223,
                        "end": 224,
                        "raw": "0",
                        "value": 0
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
                  "start": 128,
                  "end": 147,
                  "decorators": [],
                  "name": "amountToEat",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 141,
                      "end": 147
                    }
                  }
                }
              ],
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
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Food",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 351,
      "end": 467,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 382,
        "end": 467,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 388,
            "end": 465,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 399,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 399,
              "end": 465,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 453,
                          "end": 457,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 447,
                        "end": 452
                      },
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
                  "start": 400,
                  "end": 412,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 404,
                    "end": 412,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 406,
                      "end": 412
                    }
                  }
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
                    "decorators": [],
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 427,
                      "end": 435,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 429,
                        "end": 435
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 357,
        "end": 368,
        "decorators": [],
        "name": "MonsterFood",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 377,
        "end": 381,
        "decorators": [],
        "name": "Food",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 468,
      "end": 623,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 503,
        "end": 623,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 509,
            "end": 538,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 517,
              "end": 528,
              "decorators": [],
              "name": "isDairyFree",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 543,
            "end": 621,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 543,
              "end": 554,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 554,
              "end": 621,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 594,
                          "end": 605,
                          "raw": "\"Ice Cream\"",
                          "value": "Ice Cream"
                        },
                        {
                          "type": "Identifier",
                          "start": 607,
                          "end": 613,
                          "decorators": [],
                          "name": "flavor",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 588,
                        "end": 593
                      },
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
                    "decorators": [],
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 568,
                      "end": 576,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 570,
                        "end": 576
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 482,
        "decorators": [],
        "name": "IceCream",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 491,
        "end": 502,
        "decorators": [],
        "name": "MonsterFood",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 624,
      "end": 770,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 657,
        "end": 770,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 663,
            "end": 768,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 663,
              "end": 674,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 674,
              "end": 768,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 744,
                          "end": 752,
                          "raw": "\"Cookie\"",
                          "value": "Cookie"
                        },
                        {
                          "type": "Identifier",
                          "start": 754,
                          "end": 760,
                          "decorators": [],
                          "name": "flavor",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 738,
                        "end": 743
                      },
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
                    "decorators": [],
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 688,
                      "end": 696,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 690,
                        "end": 696
                      }
                    }
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
                    "decorators": [],
                    "name": "isGlutenFree",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 717,
                      "end": 726,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 719,
                        "end": 726
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 630,
        "end": 636,
        "decorators": [],
        "name": "Cookie",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 645,
        "end": 656,
        "decorators": [],
        "name": "MonsterFood",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 771,
      "end": 887,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 798,
        "end": 887,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 804,
            "end": 885,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 804,
              "end": 815,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 815,
              "end": 885,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 873,
                          "end": 877,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 867,
                        "end": 872
                      },
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
                  "start": 816,
                  "end": 828,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 820,
                    "end": 828,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 822,
                      "end": 828
                    }
                  }
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
                    "decorators": [],
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 847,
                      "end": 855,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 849,
                        "end": 855
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 777,
        "end": 784,
        "decorators": [],
        "name": "PetFood",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 793,
        "end": 797,
        "decorators": [],
        "name": "Food",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 888,
      "end": 1025,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 934,
        "end": 1025,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 940,
            "end": 1023,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 940,
              "end": 951,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 951,
              "end": 1023,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 995,
                          "end": 1003,
                          "raw": "\"Origen\"",
                          "value": "Origen"
                        },
                        {
                          "type": "Identifier",
                          "start": 1005,
                          "end": 1015,
                          "decorators": [],
                          "name": "whereToBuy",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 989,
                        "end": 994
                      },
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
                    "decorators": [],
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 969,
                      "end": 977,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 971,
                        "end": 977
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 894,
        "end": 917,
        "decorators": [],
        "name": "ExpensiveOrganicDogFood",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 926,
        "end": 933,
        "decorators": [],
        "name": "PetFood",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1026,
      "end": 1201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1072,
        "end": 1201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1078,
            "end": 1199,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1078,
              "end": 1089,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1089,
              "end": 1199,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1163,
                          "end": 1179,
                          "raw": "\"Nature's Logic\"",
                          "value": "Nature's Logic"
                        },
                        {
                          "type": "Identifier",
                          "start": 1181,
                          "end": 1191,
                          "decorators": [],
                          "name": "whereToBuy",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 1157,
                        "end": 1162
                      },
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
                    "decorators": [],
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1107,
                      "end": 1115,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1109,
                        "end": 1115
                      }
                    }
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
                    "decorators": [],
                    "name": "containsFish",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1136,
                      "end": 1145,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1138,
                        "end": 1145
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1032,
        "end": 1055,
        "decorators": [],
        "name": "ExpensiveOrganicCatFood",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1064,
        "end": 1071,
        "decorators": [],
        "name": "PetFood",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1202,
      "end": 1245,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1213,
        "end": 1245,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1208,
        "end": 1212,
        "decorators": [],
        "name": "Slug",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1349,
            "end": 1354,
            "decorators": [],
            "name": "foods",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1357,
            "end": 1475,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1361,
              "end": 1475,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 1361,
                "end": 1368,
                "decorators": [],
                "name": "PetFood",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "SequenceExpression",
                "start": 1369,
                "end": 1474,
                "expressions": [
                  {
                    "type": "NewExpression",
                    "start": 1369,
                    "end": 1404,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1382,
                        "end": 1403,
                        "raw": "'Mint chocolate chip'",
                        "value": "Mint chocolate chip"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1373,
                      "end": 1381,
                      "decorators": [],
                      "name": "IceCream",
                      "optional": false
                    }
                  },
                  {
                    "type": "CallExpression",
                    "start": 1407,
                    "end": 1438,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1414,
                        "end": 1430,
                        "raw": "'Chocolate chip'",
                        "value": "Chocolate chip"
                      },
                      {
                        "type": "Literal",
                        "start": 1432,
                        "end": 1437,
                        "raw": "false",
                        "value": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1407,
                      "end": 1413,
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false
                    },
                    "optional": false
                  },
                  {
                    "type": "NewExpression",
                    "start": 1441,
                    "end": 1474,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1452,
                        "end": 1467,
                        "raw": "'Peanut butter'",
                        "value": "Peanut butter"
                      },
                      {
                        "type": "Literal",
                        "start": 1469,
                        "end": 1473,
                        "raw": "true",
                        "value": true
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1445,
                      "end": 1451,
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1481,
            "end": 1502,
            "decorators": [],
            "name": "foods2",
            "optional": false,
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
                    "decorators": [],
                    "name": "MonsterFood",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 1505,
            "end": 1623,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1509,
              "end": 1623,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 1509,
                "end": 1516,
                "decorators": [],
                "name": "PetFood",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "SequenceExpression",
                "start": 1517,
                "end": 1622,
                "expressions": [
                  {
                    "type": "NewExpression",
                    "start": 1517,
                    "end": 1552,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1530,
                        "end": 1551,
                        "raw": "'Mint chocolate chip'",
                        "value": "Mint chocolate chip"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1521,
                      "end": 1529,
                      "decorators": [],
                      "name": "IceCream",
                      "optional": false
                    }
                  },
                  {
                    "type": "CallExpression",
                    "start": 1555,
                    "end": 1586,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1562,
                        "end": 1578,
                        "raw": "'Chocolate chip'",
                        "value": "Chocolate chip"
                      },
                      {
                        "type": "Literal",
                        "start": 1580,
                        "end": 1585,
                        "raw": "false",
                        "value": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1555,
                      "end": 1561,
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false
                    },
                    "optional": false
                  },
                  {
                    "type": "NewExpression",
                    "start": 1589,
                    "end": 1622,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1600,
                        "end": 1615,
                        "raw": "'Peanut butter'",
                        "value": "Peanut butter"
                      },
                      {
                        "type": "Literal",
                        "start": 1617,
                        "end": 1621,
                        "raw": "true",
                        "value": true
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1593,
                      "end": 1599,
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
