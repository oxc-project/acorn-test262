__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyErrorsWhenTestingNonNullableFunctionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "required",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 70,
                  "end": 77
                },
                "start": 67,
                "end": 77
              },
              "start": 64,
              "end": 77
            },
            "start": 62,
            "end": 77
          },
          "start": 54,
          "end": 77
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optional",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 96,
                  "end": 103
                },
                "start": 93,
                "end": 103
              },
              "start": 90,
              "end": 103
            },
            "start": 88,
            "end": 103
          },
          "start": 79,
          "end": 103
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "required",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 123
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 125,
              "end": 141
            },
            "alternate": null,
            "start": 111,
            "end": 141
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 159
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 161,
              "end": 174
            },
            "alternate": null,
            "start": 147,
            "end": 174
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 194
                },
                "prefix": true,
                "start": 185,
                "end": 194
              },
              "prefix": true,
              "start": 184,
              "end": 194
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 196,
              "end": 209
            },
            "alternate": null,
            "start": 180,
            "end": 209
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "required",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 227
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 219,
              "end": 229
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 231,
              "end": 244
            },
            "alternate": null,
            "start": 215,
            "end": 244
          }
        ],
        "start": 105,
        "end": 246
      },
      "expression": false,
      "start": 0,
      "end": 246
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyErrorsWhenUnusedInBody",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 283
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 305
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 317,
                          "end": 321
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 317,
                        "end": 328
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 317,
                      "end": 330
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5",
                      "start": 333,
                      "end": 336
                    },
                    "start": 317,
                    "end": 336
                  },
                  "start": 310,
                  "end": 337
                }
              ],
              "start": 308,
              "end": 339
            },
            "expression": false,
            "start": 292,
            "end": 339
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 353
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 381
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 385
                      },
                      "optional": false,
                      "computed": false,
                      "start": 374,
                      "end": 385
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "'test'",
                        "start": 386,
                        "end": 392
                      }
                    ],
                    "optional": false,
                    "start": 374,
                    "end": 393
                  },
                  "directive": null,
                  "start": 374,
                  "end": 394
                }
              ],
              "start": 355,
              "end": 400
            },
            "alternate": null,
            "start": 345,
            "end": 400
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 418
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 436,
                        "end": 443
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 447
                      },
                      "optional": false,
                      "computed": false,
                      "start": 436,
                      "end": 447
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 448,
                        "end": 452
                      }
                    ],
                    "optional": false,
                    "start": 436,
                    "end": 453
                  },
                  "directive": null,
                  "start": 436,
                  "end": 454
                }
              ],
              "start": 420,
              "end": 460
            },
            "alternate": null,
            "start": 410,
            "end": 460
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 474
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 496
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 492,
                    "end": 498
                  },
                  "directive": null,
                  "start": 492,
                  "end": 499
                }
              ],
              "start": 476,
              "end": 505
            },
            "alternate": null,
            "start": 466,
            "end": 505
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 523
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 548,
                              "end": 552
                            },
                            "id": null,
                            "generator": false,
                            "start": 542,
                            "end": 552
                          }
                        ],
                        "start": 541,
                        "end": 553
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 561
                      },
                      "optional": false,
                      "computed": false,
                      "start": 541,
                      "end": 561
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 582,
                                  "end": 586
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 582,
                                "end": 588
                              },
                              "directive": null,
                              "start": 582,
                              "end": 589
                            }
                          ],
                          "start": 568,
                          "end": 599
                        },
                        "id": null,
                        "generator": false,
                        "start": 562,
                        "end": 599
                      }
                    ],
                    "optional": false,
                    "start": 541,
                    "end": 600
                  },
                  "directive": null,
                  "start": 541,
                  "end": 601
                }
              ],
              "start": 525,
              "end": 607
            },
            "alternate": null,
            "start": 515,
            "end": 607
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 625
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 653,
                              "end": 657
                            },
                            "id": null,
                            "generator": false,
                            "start": 647,
                            "end": 657
                          }
                        ],
                        "start": 646,
                        "end": 658
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 659,
                        "end": 666
                      },
                      "optional": false,
                      "computed": false,
                      "start": 646,
                      "end": 666
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 667,
                            "end": 671
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 689,
                                  "end": 693
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 689,
                                "end": 695
                              },
                              "directive": null,
                              "start": 689,
                              "end": 696
                            }
                          ],
                          "start": 675,
                          "end": 706
                        },
                        "id": null,
                        "generator": false,
                        "start": 667,
                        "end": 706
                      }
                    ],
                    "optional": false,
                    "start": 646,
                    "end": 707
                  },
                  "directive": null,
                  "start": 646,
                  "end": 708
                }
              ],
              "start": 627,
              "end": 714
            },
            "alternate": null,
            "start": 617,
            "end": 714
          }
        ],
        "start": 286,
        "end": 716
      },
      "expression": false,
      "start": 248,
      "end": 716
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checksPropertyAccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 747
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 762,
                  "end": 763
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 776,
                        "end": 779
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 795,
                              "end": 798
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
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 810,
                                      "end": 814
                                    },
                                    "start": 803,
                                    "end": 815
                                  }
                                ],
                                "start": 801,
                                "end": 817
                              },
                              "expression": false,
                              "start": 798,
                              "end": 817
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 795,
                            "end": 817
                          }
                        ],
                        "start": 781,
                        "end": 827
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 776,
                      "end": 827
                    }
                  ],
                  "start": 766,
                  "end": 833
                },
                "definite": false,
                "start": 762,
                "end": 833
              }
            ],
            "declare": false,
            "start": 756,
            "end": 833
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 843,
                  "end": 844
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 845,
                  "end": 848
                },
                "optional": false,
                "computed": false,
                "start": 843,
                "end": 848
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 849,
                "end": 852
              },
              "optional": false,
              "computed": false,
              "start": 843,
              "end": 852
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 854,
              "end": 870
            },
            "alternate": null,
            "start": 839,
            "end": 870
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 880,
                  "end": 881
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 882,
                  "end": 885
                },
                "optional": false,
                "computed": false,
                "start": 880,
                "end": 885
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 886,
                "end": 889
              },
              "optional": false,
              "computed": false,
              "start": 880,
              "end": 889
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 907,
                        "end": 908
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 909,
                        "end": 912
                      },
                      "optional": false,
                      "computed": false,
                      "start": 907,
                      "end": 912
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 913,
                      "end": 916
                    },
                    "optional": false,
                    "computed": false,
                    "start": 907,
                    "end": 916
                  },
                  "directive": null,
                  "start": 907,
                  "end": 917
                }
              ],
              "start": 891,
              "end": 923
            },
            "alternate": null,
            "start": 876,
            "end": 923
          }
        ],
        "start": 750,
        "end": 925
      },
      "expression": false,
      "start": 718,
      "end": 925
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 933,
        "end": 936
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "maybeIsUser",
              "optional": false,
              "typeAnnotation": null,
              "start": 943,
              "end": 954
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 963,
                    "end": 970
                  },
                  "start": 960,
                  "end": 970
                },
                "start": 957,
                "end": 970
              },
              "start": 955,
              "end": 970
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 943,
            "end": 971
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isUser",
              "optional": false,
              "typeAnnotation": null,
              "start": 977,
              "end": 983
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1003,
                      "end": 1007
                    },
                    "start": 996,
                    "end": 1008
                  }
                ],
                "start": 986,
                "end": 1014
              },
              "expression": false,
              "start": 983,
              "end": 1014
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 977,
            "end": 1014
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 1020,
              "end": 1024
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
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1041,
                        "end": 1045
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isUser",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1046,
                        "end": 1052
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1041,
                      "end": 1052
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1054,
                      "end": 1074
                    },
                    "alternate": null,
                    "start": 1037,
                    "end": 1074
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1088,
                        "end": 1092
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maybeIsUser",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1093,
                        "end": 1104
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1088,
                      "end": 1104
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1106,
                      "end": 1123
                    },
                    "alternate": null,
                    "start": 1084,
                    "end": 1123
                  }
                ],
                "start": 1027,
                "end": 1129
              },
              "expression": false,
              "start": 1024,
              "end": 1129
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1020,
            "end": 1129
          }
        ],
        "start": 937,
        "end": 1131
      },
      "abstract": false,
      "declare": false,
      "start": 927,
      "end": 1131
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1205,
        "end": 1206
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stats",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StatsBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1214,
                "end": 1223
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1224,
                    "end": 1227
                  }
                ],
                "start": 1223,
                "end": 1228
              },
              "start": 1214,
              "end": 1228
            },
            "start": 1212,
            "end": 1228
          },
          "start": 1207,
          "end": 1228
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "stats",
                "optional": false,
                "typeAnnotation": null,
                "start": 1240,
                "end": 1245
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isDirectory",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1257
              },
              "optional": false,
              "computed": false,
              "start": 1240,
              "end": 1257
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1276,
                        "end": 1283
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1284,
                        "end": 1287
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1276,
                      "end": 1287
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "[Directory] ",
                              "cooked": "[Directory] "
                            },
                            "tail": false,
                            "start": 1288,
                            "end": 1303
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 1314,
                            "end": 1316
                          }
                        ],
                        "expressions": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "stats",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1303,
                              "end": 1308
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ctime",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1309,
                              "end": 1314
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1303,
                            "end": 1314
                          }
                        ],
                        "start": 1288,
                        "end": 1316
                      }
                    ],
                    "optional": false,
                    "start": 1276,
                    "end": 1317
                  },
                  "directive": null,
                  "start": 1276,
                  "end": 1317
                }
              ],
              "start": 1259,
              "end": 1323
            },
            "alternate": null,
            "start": 1236,
            "end": 1323
          }
        ],
        "start": 1230,
        "end": 1325
      },
      "expression": false,
      "start": 1196,
      "end": 1325
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1336,
        "end": 1337
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 1341,
                "end": 1347
              },
              "typeArguments": null,
              "start": 1341,
              "end": 1347
            },
            "start": 1339,
            "end": 1347
          },
          "start": 1338,
          "end": 1347
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 1352,
                "end": 1358
              },
              "typeArguments": null,
              "start": 1352,
              "end": 1358
            },
            "start": 1350,
            "end": 1358
          },
          "start": 1349,
          "end": 1358
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1370,
                  "end": 1371
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stats",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1372,
                  "end": 1377
                },
                "optional": false,
                "computed": false,
                "start": 1370,
                "end": 1377
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isDirectory",
                "optional": false,
                "typeAnnotation": null,
                "start": 1378,
                "end": 1389
              },
              "optional": false,
              "computed": false,
              "start": 1370,
              "end": 1389
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1408,
                          "end": 1409
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stats",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1410,
                          "end": 1415
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1408,
                        "end": 1415
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isDirectory",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1416,
                        "end": 1427
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1408,
                      "end": 1427
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1408,
                    "end": 1429
                  },
                  "directive": null,
                  "start": 1408,
                  "end": 1430
                }
              ],
              "start": 1391,
              "end": 1437
            },
            "alternate": null,
            "start": 1366,
            "end": 1437
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1446,
                  "end": 1447
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stats",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1448,
                  "end": 1453
                },
                "optional": false,
                "computed": false,
                "start": 1446,
                "end": 1453
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isDirectory",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1465
              },
              "optional": false,
              "computed": false,
              "start": 1446,
              "end": 1465
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1483,
                          "end": 1484
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stats",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1485,
                          "end": 1490
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1483,
                        "end": 1490
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isDirectory",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1491,
                        "end": 1502
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1483,
                      "end": 1502
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1483,
                    "end": 1504
                  },
                  "directive": null,
                  "start": 1483,
                  "end": 1505
                }
              ],
              "start": 1467,
              "end": 1511
            },
            "alternate": null,
            "start": 1442,
            "end": 1511
          }
        ],
        "start": 1360,
        "end": 1513
      },
      "expression": false,
      "start": 1327,
      "end": 1513
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StatsBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1526,
        "end": 1535
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1536,
              "end": 1537
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1536,
            "end": 1537
          }
        ],
        "start": 1535,
        "end": 1538
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isDirectory",
              "optional": false,
              "typeAnnotation": null,
              "start": 1545,
              "end": 1556
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1560,
                "end": 1567
              },
              "start": 1558,
              "end": 1567
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1545,
            "end": 1568
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctime",
              "optional": false,
              "typeAnnotation": null,
              "start": 1573,
              "end": 1578
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1580,
                "end": 1586
              },
              "start": 1578,
              "end": 1586
            },
            "accessibility": null,
            "static": false,
            "start": 1573,
            "end": 1587
          }
        ],
        "start": 1539,
        "end": 1589
      },
      "declare": false,
      "start": 1516,
      "end": 1589
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "typeAnnotation": null,
        "start": 1601,
        "end": 1607
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "stats",
              "optional": false,
              "typeAnnotation": null,
              "start": 1614,
              "end": 1619
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StatsBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1621,
                  "end": 1630
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1631,
                      "end": 1634
                    }
                  ],
                  "start": 1630,
                  "end": 1635
                },
                "start": 1621,
                "end": 1635
              },
              "start": 1619,
              "end": 1635
            },
            "accessibility": null,
            "static": false,
            "start": 1614,
            "end": 1636
          }
        ],
        "start": 1608,
        "end": 1638
      },
      "declare": false,
      "start": 1591,
      "end": 1638
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1638
}
```
