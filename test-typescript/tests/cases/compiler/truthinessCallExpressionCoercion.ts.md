__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1638,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 246,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 246,
        "body": [
          {
            "type": "IfStatement",
            "start": 111,
            "end": 141,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 125,
              "end": 141,
              "body": []
            },
            "test": {
              "type": "Identifier",
              "start": 115,
              "end": 123,
              "decorators": [],
              "name": "required",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 147,
            "end": 174,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 161,
              "end": 174,
              "body": []
            },
            "test": {
              "type": "Identifier",
              "start": 151,
              "end": 159,
              "decorators": [],
              "name": "optional",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 180,
            "end": 209,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 196,
              "end": 209,
              "body": []
            },
            "test": {
              "type": "UnaryExpression",
              "start": 184,
              "end": 194,
              "argument": {
                "type": "UnaryExpression",
                "start": 185,
                "end": 194,
                "argument": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 194,
                  "decorators": [],
                  "name": "required",
                  "optional": false
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 215,
            "end": 244,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 231,
              "end": 244,
              "body": []
            },
            "test": {
              "type": "CallExpression",
              "start": 219,
              "end": 229,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 219,
                "end": 227,
                "decorators": [],
                "name": "required",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 53,
        "decorators": [],
        "name": "onlyErrorsWhenTestingNonNullableFunctionType",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 77,
          "decorators": [],
          "name": "required",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 77,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 64,
              "end": 77,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 67,
                "end": 77,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 70,
                  "end": 77
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 79,
          "end": 103,
          "decorators": [],
          "name": "optional",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 103,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 90,
              "end": 103,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 93,
                "end": 103,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 96,
                  "end": 103
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 248,
      "end": 716,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 286,
        "end": 716,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 292,
            "end": 339,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 308,
              "end": 339,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 310,
                  "end": 337,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 317,
                    "end": 336,
                    "operator": ">",
                    "left": {
                      "type": "CallExpression",
                      "start": 317,
                      "end": 330,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 317,
                        "end": 328,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 321,
                          "decorators": [],
                          "name": "Math",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 328,
                          "decorators": [],
                          "name": "random",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 333,
                      "end": 336,
                      "raw": "0.5",
                      "value": 0.5
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 301,
              "end": 305,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "params": []
          },
          {
            "type": "IfStatement",
            "start": 345,
            "end": 400,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 355,
              "end": 400,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 374,
                  "end": 394,
                  "expression": {
                    "type": "CallExpression",
                    "start": 374,
                    "end": 393,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 386,
                        "end": 392,
                        "raw": "'test'",
                        "value": "test"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 374,
                      "end": 385,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 381,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 385,
                        "decorators": [],
                        "name": "log",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 349,
              "end": 353,
              "decorators": [],
              "name": "test",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 410,
            "end": 460,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 420,
              "end": 460,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 436,
                  "end": 454,
                  "expression": {
                    "type": "CallExpression",
                    "start": 436,
                    "end": 453,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 448,
                        "end": 452,
                        "decorators": [],
                        "name": "test",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 436,
                      "end": 447,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 443,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 447,
                        "decorators": [],
                        "name": "log",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 414,
              "end": 418,
              "decorators": [],
              "name": "test",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 466,
            "end": 505,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 476,
              "end": 505,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 492,
                  "end": 499,
                  "expression": {
                    "type": "CallExpression",
                    "start": 492,
                    "end": 498,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 496,
                      "decorators": [],
                      "name": "test",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 470,
              "end": 474,
              "decorators": [],
              "name": "test",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 515,
            "end": 607,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 525,
              "end": 607,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 541,
                  "end": 601,
                  "expression": {
                    "type": "CallExpression",
                    "start": 541,
                    "end": 600,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 562,
                        "end": 599,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 568,
                          "end": 599,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 582,
                              "end": 589,
                              "expression": {
                                "type": "CallExpression",
                                "start": 582,
                                "end": 588,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 582,
                                  "end": 586,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false
                                },
                                "optional": false
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 541,
                      "end": 561,
                      "computed": false,
                      "object": {
                        "type": "ArrayExpression",
                        "start": 541,
                        "end": 553,
                        "elements": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 542,
                            "end": 552,
                            "async": false,
                            "body": {
                              "type": "Literal",
                              "start": 548,
                              "end": 552,
                              "raw": "null",
                              "value": null
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": []
                          }
                        ]
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 561,
                        "decorators": [],
                        "name": "forEach",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 519,
              "end": 523,
              "decorators": [],
              "name": "test",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 617,
            "end": 714,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 627,
              "end": 714,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 646,
                  "end": 708,
                  "expression": {
                    "type": "CallExpression",
                    "start": 646,
                    "end": 707,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 667,
                        "end": 706,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 675,
                          "end": 706,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 689,
                              "end": 696,
                              "expression": {
                                "type": "CallExpression",
                                "start": 689,
                                "end": 695,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 689,
                                  "end": 693,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false
                                },
                                "optional": false
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 667,
                            "end": 671,
                            "decorators": [],
                            "name": "test",
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 646,
                      "end": 666,
                      "computed": false,
                      "object": {
                        "type": "ArrayExpression",
                        "start": 646,
                        "end": 658,
                        "elements": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 647,
                            "end": 657,
                            "async": false,
                            "body": {
                              "type": "Literal",
                              "start": 653,
                              "end": 657,
                              "raw": "null",
                              "value": null
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": []
                          }
                        ]
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 659,
                        "end": 666,
                        "decorators": [],
                        "name": "forEach",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 621,
              "end": 625,
              "decorators": [],
              "name": "test",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 283,
        "decorators": [],
        "name": "onlyErrorsWhenUnusedInBody",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 718,
      "end": 925,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 750,
        "end": 925,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 756,
            "end": 833,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 762,
                "end": 833,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 763,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 766,
                  "end": 833,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 776,
                      "end": 827,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 776,
                        "end": 779,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 781,
                        "end": 827,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 795,
                            "end": 817,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 795,
                              "end": 798,
                              "decorators": [],
                              "name": "bar",
                              "optional": false
                            },
                            "kind": "init",
                            "method": true,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 798,
                              "end": 817,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 801,
                                "end": 817,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 803,
                                    "end": 815,
                                    "argument": {
                                      "type": "Literal",
                                      "start": 810,
                                      "end": 814,
                                      "raw": "true",
                                      "value": true
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": []
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 839,
            "end": 870,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 854,
              "end": 870,
              "body": []
            },
            "test": {
              "type": "MemberExpression",
              "start": 843,
              "end": 852,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 843,
                "end": 848,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 843,
                  "end": 844,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 845,
                  "end": 848,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 849,
                "end": 852,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 876,
            "end": 923,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 891,
              "end": 923,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 907,
                  "end": 917,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 907,
                    "end": 916,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 907,
                      "end": 912,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 907,
                        "end": 908,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 909,
                        "end": 912,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 913,
                      "end": 916,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 880,
              "end": 889,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 880,
                "end": 885,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 880,
                  "end": 881,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 882,
                  "end": 885,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 886,
                "end": 889,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 747,
        "decorators": [],
        "name": "checksPropertyAccess",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ClassDeclaration",
      "start": 927,
      "end": 1131,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 937,
        "end": 1131,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 943,
            "end": 971,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 943,
              "end": 954,
              "decorators": [],
              "name": "maybeIsUser",
              "optional": false
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 955,
              "end": 970,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 957,
                "end": 970,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 960,
                  "end": 970,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 963,
                    "end": 970
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 977,
            "end": 1014,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 977,
              "end": 983,
              "decorators": [],
              "name": "isUser",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 983,
              "end": 1014,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 986,
                "end": 1014,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 996,
                    "end": 1008,
                    "argument": {
                      "type": "Literal",
                      "start": 1003,
                      "end": 1007,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
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
            "start": 1020,
            "end": 1129,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1020,
              "end": 1024,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1024,
              "end": 1129,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1027,
                "end": 1129,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1037,
                    "end": 1074,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1054,
                      "end": 1074,
                      "body": []
                    },
                    "test": {
                      "type": "MemberExpression",
                      "start": 1041,
                      "end": 1052,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1041,
                        "end": 1045
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1046,
                        "end": 1052,
                        "decorators": [],
                        "name": "isUser",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 1084,
                    "end": 1123,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1106,
                      "end": 1123,
                      "body": []
                    },
                    "test": {
                      "type": "MemberExpression",
                      "start": 1088,
                      "end": 1104,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1088,
                        "end": 1092
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1093,
                        "end": 1104,
                        "decorators": [],
                        "name": "maybeIsUser",
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 933,
        "end": 936,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1196,
      "end": 1325,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1230,
        "end": 1325,
        "body": [
          {
            "type": "IfStatement",
            "start": 1236,
            "end": 1323,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1259,
              "end": 1323,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1276,
                  "end": 1317,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1276,
                    "end": 1317,
                    "arguments": [
                      {
                        "type": "TemplateLiteral",
                        "start": 1288,
                        "end": 1316,
                        "expressions": [
                          {
                            "type": "MemberExpression",
                            "start": 1303,
                            "end": 1314,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1303,
                              "end": 1308,
                              "decorators": [],
                              "name": "stats",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1309,
                              "end": 1314,
                              "decorators": [],
                              "name": "ctime",
                              "optional": false
                            }
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 1288,
                            "end": 1303,
                            "tail": false,
                            "value": {
                              "cooked": "[Directory] ",
                              "raw": "[Directory] "
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 1314,
                            "end": 1316,
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1276,
                      "end": 1287,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1276,
                        "end": 1283,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1284,
                        "end": 1287,
                        "decorators": [],
                        "name": "log",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 1240,
              "end": 1257,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1240,
                "end": 1245,
                "decorators": [],
                "name": "stats",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1246,
                "end": 1257,
                "decorators": [],
                "name": "isDirectory",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1205,
        "end": 1206,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1207,
          "end": 1228,
          "decorators": [],
          "name": "stats",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1212,
            "end": 1228,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1214,
              "end": 1228,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1223,
                "end": 1228,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1224,
                    "end": 1227
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1214,
                "end": 1223,
                "decorators": [],
                "name": "StatsBase",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1327,
      "end": 1513,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1360,
        "end": 1513,
        "body": [
          {
            "type": "IfStatement",
            "start": 1366,
            "end": 1437,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1391,
              "end": 1437,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1408,
                  "end": 1430,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1408,
                    "end": 1429,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1408,
                      "end": 1427,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 1408,
                        "end": 1415,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1408,
                          "end": 1409,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1410,
                          "end": 1415,
                          "decorators": [],
                          "name": "stats",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1416,
                        "end": 1427,
                        "decorators": [],
                        "name": "isDirectory",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 1370,
              "end": 1389,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1370,
                "end": 1377,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1370,
                  "end": 1371,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1372,
                  "end": 1377,
                  "decorators": [],
                  "name": "stats",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1378,
                "end": 1389,
                "decorators": [],
                "name": "isDirectory",
                "optional": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1442,
            "end": 1511,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1467,
              "end": 1511,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1483,
                  "end": 1505,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1483,
                    "end": 1504,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1483,
                      "end": 1502,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 1483,
                        "end": 1490,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1483,
                          "end": 1484,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1485,
                          "end": 1490,
                          "decorators": [],
                          "name": "stats",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1491,
                        "end": 1502,
                        "decorators": [],
                        "name": "isDirectory",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 1446,
              "end": 1465,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 1446,
                "end": 1453,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1446,
                  "end": 1447,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1448,
                  "end": 1453,
                  "decorators": [],
                  "name": "stats",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1454,
                "end": 1465,
                "decorators": [],
                "name": "isDirectory",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1336,
        "end": 1337,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1338,
          "end": 1347,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1339,
            "end": 1347,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1341,
              "end": 1347,
              "typeName": {
                "type": "Identifier",
                "start": 1341,
                "end": 1347,
                "decorators": [],
                "name": "Nested",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1349,
          "end": 1358,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1350,
            "end": 1358,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1352,
              "end": 1358,
              "typeName": {
                "type": "Identifier",
                "start": 1352,
                "end": 1358,
                "decorators": [],
                "name": "Nested",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1516,
      "end": 1589,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1539,
        "end": 1589,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1545,
            "end": 1568,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1545,
              "end": 1556,
              "decorators": [],
              "name": "isDirectory",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1558,
              "end": 1567,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1560,
                "end": 1567
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1573,
            "end": 1587,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1573,
              "end": 1578,
              "decorators": [],
              "name": "ctime",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1578,
              "end": 1586,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1580,
                "end": 1586
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1526,
        "end": 1535,
        "decorators": [],
        "name": "StatsBase",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1535,
        "end": 1538,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1536,
            "end": 1537,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1536,
              "end": 1537,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1591,
      "end": 1638,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1608,
        "end": 1638,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1614,
            "end": 1636,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1614,
              "end": 1619,
              "decorators": [],
              "name": "stats",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1619,
              "end": 1635,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1621,
                "end": 1635,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1630,
                  "end": 1635,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1631,
                      "end": 1634
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1621,
                  "end": 1630,
                  "decorators": [],
                  "name": "StatsBase",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1601,
        "end": 1607,
        "decorators": [],
        "name": "Nested",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
