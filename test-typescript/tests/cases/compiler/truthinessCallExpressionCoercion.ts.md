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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 53,
        "name": "onlyErrorsWhenTestingNonNullableFunctionType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 77,
          "name": "required",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 77,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 64,
              "end": 77,
              "typeParameters": null,
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 79,
          "end": 103,
          "name": "optional",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 103,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 90,
              "end": 103,
              "typeParameters": null,
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
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 246,
        "body": [
          {
            "type": "IfStatement",
            "start": 111,
            "end": 141,
            "test": {
              "type": "Identifier",
              "start": 115,
              "end": 123,
              "name": "required",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 125,
              "end": 141,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 147,
            "end": 174,
            "test": {
              "type": "Identifier",
              "start": 151,
              "end": 159,
              "name": "optional",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 161,
              "end": 174,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 180,
            "end": 209,
            "test": {
              "type": "UnaryExpression",
              "start": 184,
              "end": 194,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 185,
                "end": 194,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 194,
                  "name": "required",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 196,
              "end": 209,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 215,
            "end": 244,
            "test": {
              "type": "CallExpression",
              "start": 219,
              "end": 229,
              "callee": {
                "type": "Identifier",
                "start": 219,
                "end": 227,
                "name": "required",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 231,
              "end": 244,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 248,
      "end": 716,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 283,
        "name": "onlyErrorsWhenUnusedInBody",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 286,
        "end": 716,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 292,
            "end": 339,
            "id": {
              "type": "Identifier",
              "start": 301,
              "end": 305,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "left": {
                      "type": "CallExpression",
                      "start": 317,
                      "end": 330,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 317,
                        "end": 328,
                        "object": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 321,
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 328,
                          "name": "random",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "start": 333,
                      "end": 336,
                      "value": 0.5,
                      "raw": "0.5"
                    }
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "IfStatement",
            "start": 345,
            "end": 400,
            "test": {
              "type": "Identifier",
              "start": 349,
              "end": 353,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 374,
                      "end": 385,
                      "object": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 381,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 385,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 386,
                        "end": 392,
                        "value": "test",
                        "raw": "'test'"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 410,
            "end": 460,
            "test": {
              "type": "Identifier",
              "start": 414,
              "end": 418,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 436,
                      "end": 447,
                      "object": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 443,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 447,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 448,
                        "end": 452,
                        "name": "test",
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
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 466,
            "end": 505,
            "test": {
              "type": "Identifier",
              "start": 470,
              "end": 474,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "callee": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 496,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 515,
            "end": 607,
            "test": {
              "type": "Identifier",
              "start": 519,
              "end": 523,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 541,
                      "end": 561,
                      "object": {
                        "type": "ArrayExpression",
                        "start": 541,
                        "end": 553,
                        "elements": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 542,
                            "end": 552,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "Literal",
                              "start": 548,
                              "end": 552,
                              "value": null,
                              "raw": "null"
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 561,
                        "name": "forEach",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 562,
                        "end": 599,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "callee": {
                                  "type": "Identifier",
                                  "start": 582,
                                  "end": 586,
                                  "name": "test",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 617,
            "end": 714,
            "test": {
              "type": "Identifier",
              "start": 621,
              "end": 625,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 646,
                      "end": 666,
                      "object": {
                        "type": "ArrayExpression",
                        "start": 646,
                        "end": 658,
                        "elements": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 647,
                            "end": 657,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "Literal",
                              "start": 653,
                              "end": 657,
                              "value": null,
                              "raw": "null"
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 659,
                        "end": 666,
                        "name": "forEach",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 667,
                        "end": 706,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 667,
                            "end": 671,
                            "name": "test",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                                "callee": {
                                  "type": "Identifier",
                                  "start": 689,
                                  "end": 693,
                                  "name": "test",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 718,
      "end": 925,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 747,
        "name": "checksPropertyAccess",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 763,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 776,
                        "end": 779,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 781,
                        "end": 827,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 795,
                            "end": 817,
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 795,
                              "end": 798,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 798,
                              "end": 817,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                                      "value": true,
                                      "raw": "true"
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": null
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 839,
            "end": 870,
            "test": {
              "type": "MemberExpression",
              "start": 843,
              "end": 852,
              "object": {
                "type": "MemberExpression",
                "start": 843,
                "end": 848,
                "object": {
                  "type": "Identifier",
                  "start": 843,
                  "end": 844,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 845,
                  "end": 848,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 849,
                "end": 852,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 854,
              "end": 870,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 876,
            "end": 923,
            "test": {
              "type": "MemberExpression",
              "start": 880,
              "end": 889,
              "object": {
                "type": "MemberExpression",
                "start": 880,
                "end": 885,
                "object": {
                  "type": "Identifier",
                  "start": 880,
                  "end": 881,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 882,
                  "end": 885,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 886,
                "end": 889,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "object": {
                      "type": "MemberExpression",
                      "start": 907,
                      "end": 912,
                      "object": {
                        "type": "Identifier",
                        "start": 907,
                        "end": 908,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 909,
                        "end": 912,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 913,
                      "end": 916,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 927,
      "end": 1131,
      "id": {
        "type": "Identifier",
        "start": 933,
        "end": 936,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 937,
        "end": 1131,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 943,
            "end": 971,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 943,
              "end": 954,
              "name": "maybeIsUser",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 955,
              "end": 970,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 957,
                "end": 970,
                "typeParameters": null,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 977,
            "end": 1014,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 977,
              "end": 983,
              "name": "isUser",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 983,
              "end": 1014,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": true,
                      "raw": "true"
                    }
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
            "start": 1020,
            "end": 1129,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1020,
              "end": 1024,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1024,
              "end": 1129,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1027,
                "end": 1129,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1037,
                    "end": 1074,
                    "test": {
                      "type": "MemberExpression",
                      "start": 1041,
                      "end": 1052,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1041,
                        "end": 1045
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1046,
                        "end": 1052,
                        "name": "isUser",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1054,
                      "end": 1074,
                      "body": []
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 1084,
                    "end": 1123,
                    "test": {
                      "type": "MemberExpression",
                      "start": 1088,
                      "end": 1104,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1088,
                        "end": 1092
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1093,
                        "end": 1104,
                        "name": "maybeIsUser",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1106,
                      "end": 1123,
                      "body": []
                    },
                    "alternate": null
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
      "type": "FunctionDeclaration",
      "start": 1196,
      "end": 1325,
      "id": {
        "type": "Identifier",
        "start": 1205,
        "end": 1206,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1207,
          "end": 1228,
          "name": "stats",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1212,
            "end": 1228,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1214,
              "end": 1228,
              "typeName": {
                "type": "Identifier",
                "start": 1214,
                "end": 1223,
                "name": "StatsBase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1230,
        "end": 1325,
        "body": [
          {
            "type": "IfStatement",
            "start": 1236,
            "end": 1323,
            "test": {
              "type": "MemberExpression",
              "start": 1240,
              "end": 1257,
              "object": {
                "type": "Identifier",
                "start": 1240,
                "end": 1245,
                "name": "stats",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1246,
                "end": 1257,
                "name": "isDirectory",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1276,
                      "end": 1287,
                      "object": {
                        "type": "Identifier",
                        "start": 1276,
                        "end": 1283,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1284,
                        "end": 1287,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
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
                            "object": {
                              "type": "Identifier",
                              "start": 1303,
                              "end": 1308,
                              "name": "stats",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1309,
                              "end": 1314,
                              "name": "ctime",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 1288,
                            "end": 1303,
                            "value": {
                              "cooked": "[Directory] ",
                              "raw": "[Directory] "
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 1314,
                            "end": 1316,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "tail": true
                          }
                        ]
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1327,
      "end": 1513,
      "id": {
        "type": "Identifier",
        "start": 1336,
        "end": 1337,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1338,
          "end": 1347,
          "name": "a",
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
                "name": "Nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1349,
          "end": 1358,
          "name": "b",
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
                "name": "Nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1360,
        "end": 1513,
        "body": [
          {
            "type": "IfStatement",
            "start": 1366,
            "end": 1437,
            "test": {
              "type": "MemberExpression",
              "start": 1370,
              "end": 1389,
              "object": {
                "type": "MemberExpression",
                "start": 1370,
                "end": 1377,
                "object": {
                  "type": "Identifier",
                  "start": 1370,
                  "end": 1371,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1372,
                  "end": 1377,
                  "name": "stats",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1378,
                "end": 1389,
                "name": "isDirectory",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1408,
                      "end": 1427,
                      "object": {
                        "type": "MemberExpression",
                        "start": 1408,
                        "end": 1415,
                        "object": {
                          "type": "Identifier",
                          "start": 1408,
                          "end": 1409,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1410,
                          "end": 1415,
                          "name": "stats",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1416,
                        "end": 1427,
                        "name": "isDirectory",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1442,
            "end": 1511,
            "test": {
              "type": "MemberExpression",
              "start": 1446,
              "end": 1465,
              "object": {
                "type": "MemberExpression",
                "start": 1446,
                "end": 1453,
                "object": {
                  "type": "Identifier",
                  "start": 1446,
                  "end": 1447,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1448,
                  "end": 1453,
                  "name": "stats",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1454,
                "end": 1465,
                "name": "isDirectory",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1483,
                      "end": 1502,
                      "object": {
                        "type": "MemberExpression",
                        "start": 1483,
                        "end": 1490,
                        "object": {
                          "type": "Identifier",
                          "start": 1483,
                          "end": 1484,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1485,
                          "end": 1490,
                          "name": "stats",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1491,
                        "end": 1502,
                        "name": "isDirectory",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1516,
      "end": 1589,
      "id": {
        "type": "Identifier",
        "start": 1526,
        "end": 1535,
        "name": "StatsBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1535,
        "end": 1538,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1536,
            "end": 1537,
            "name": {
              "type": "Identifier",
              "start": 1536,
              "end": 1537,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 1539,
        "end": 1589,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1545,
            "end": 1568,
            "key": {
              "type": "Identifier",
              "start": 1545,
              "end": 1556,
              "name": "isDirectory",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1573,
            "end": 1587,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1573,
              "end": 1578,
              "name": "ctime",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1578,
              "end": 1586,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1580,
                "end": 1586
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1591,
      "end": 1638,
      "id": {
        "type": "Identifier",
        "start": 1601,
        "end": 1607,
        "name": "Nested",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1614,
              "end": 1619,
              "name": "stats",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1619,
              "end": 1635,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1621,
                "end": 1635,
                "typeName": {
                  "type": "Identifier",
                  "start": 1621,
                  "end": 1630,
                  "name": "StatsBase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
