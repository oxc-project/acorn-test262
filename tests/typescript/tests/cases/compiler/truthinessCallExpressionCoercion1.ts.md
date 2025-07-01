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
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "required",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 132
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 142
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 146
                  },
                  "optional": false,
                  "computed": false,
                  "start": 135,
                  "end": 146
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "required",
                    "raw": "'required'",
                    "start": 147,
                    "end": 157
                  }
                ],
                "optional": false,
                "start": 135,
                "end": 158
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 170
              },
              "start": 124,
              "end": 170
            },
            "directive": null,
            "start": 124,
            "end": 171
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "optional",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 195
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 205
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 209
                  },
                  "optional": false,
                  "computed": false,
                  "start": 198,
                  "end": 209
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "optional",
                    "raw": "'optional'",
                    "start": 210,
                    "end": 220
                  }
                ],
                "optional": false,
                "start": 198,
                "end": 221
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 233
              },
              "start": 187,
              "end": 233
            },
            "directive": null,
            "start": 187,
            "end": 234
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
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
                    "start": 252,
                    "end": 260
                  },
                  "prefix": true,
                  "start": 251,
                  "end": 260
                },
                "prefix": true,
                "start": 250,
                "end": 260
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 270
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 274
                  },
                  "optional": false,
                  "computed": false,
                  "start": 263,
                  "end": 274
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "not required",
                    "raw": "'not required'",
                    "start": 275,
                    "end": 289
                  }
                ],
                "optional": false,
                "start": 263,
                "end": 290
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 302
              },
              "start": 250,
              "end": 302
            },
            "directive": null,
            "start": 250,
            "end": 303
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 327
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 319,
                "end": 329
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 339
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 343
                  },
                  "optional": false,
                  "computed": false,
                  "start": 332,
                  "end": 343
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "required call",
                    "raw": "'required call'",
                    "start": 344,
                    "end": 359
                  }
                ],
                "optional": false,
                "start": 332,
                "end": 360
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 372
              },
              "start": 319,
              "end": 372
            },
            "directive": null,
            "start": 319,
            "end": 373
          }
        ],
        "start": 105,
        "end": 375
      },
      "expression": false,
      "start": 0,
      "end": 375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyErrorsWhenUnusedInBody",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 412
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
              "start": 430,
              "end": 434
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
                          "start": 446,
                          "end": 450
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 451,
                          "end": 457
                        },
                        "optional": false,
                        "computed": false,
                        "start": 446,
                        "end": 457
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 446,
                      "end": 459
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5",
                      "start": 462,
                      "end": 465
                    },
                    "start": 446,
                    "end": 465
                  },
                  "start": 439,
                  "end": 466
                }
              ],
              "start": 437,
              "end": 468
            },
            "expression": false,
            "start": 421,
            "end": 468
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 491
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 501
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 505
                  },
                  "optional": false,
                  "computed": false,
                  "start": 494,
                  "end": 505
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "test",
                    "raw": "'test'",
                    "start": 506,
                    "end": 512
                  }
                ],
                "optional": false,
                "start": 494,
                "end": 513
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 525
              },
              "start": 487,
              "end": 525
            },
            "directive": null,
            "start": 487,
            "end": 526
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 546
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 556
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 557,
                    "end": 560
                  },
                  "optional": false,
                  "computed": false,
                  "start": 549,
                  "end": 560
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 565
                  }
                ],
                "optional": false,
                "start": 549,
                "end": 566
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 578
              },
              "start": 542,
              "end": 578
            },
            "directive": null,
            "start": 542,
            "end": 579
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 599
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 602,
                  "end": 606
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 602,
                "end": 608
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 620
              },
              "start": 595,
              "end": 620
            },
            "directive": null,
            "start": 595,
            "end": 621
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 641
              },
              "consequent": {
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
                          "start": 659,
                          "end": 663
                        },
                        "id": null,
                        "generator": false,
                        "start": 653,
                        "end": 663
                      }
                    ],
                    "start": 652,
                    "end": 664
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "forEach",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 665,
                    "end": 672
                  },
                  "optional": false,
                  "computed": false,
                  "start": 652,
                  "end": 672
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
                              "start": 681,
                              "end": 685
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 681,
                            "end": 687
                          },
                          "directive": null,
                          "start": 681,
                          "end": 688
                        }
                      ],
                      "start": 679,
                      "end": 690
                    },
                    "id": null,
                    "generator": false,
                    "start": 673,
                    "end": 690
                  }
                ],
                "optional": false,
                "start": 652,
                "end": 691
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 711
              },
              "start": 637,
              "end": 711
            },
            "directive": null,
            "start": 637,
            "end": 712
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 735
              },
              "consequent": {
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
                          "start": 753,
                          "end": 757
                        },
                        "id": null,
                        "generator": false,
                        "start": 747,
                        "end": 757
                      }
                    ],
                    "start": 746,
                    "end": 758
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "forEach",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 766
                  },
                  "optional": false,
                  "computed": false,
                  "start": 746,
                  "end": 766
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
                        "start": 767,
                        "end": 771
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
                              "start": 777,
                              "end": 781
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 777,
                            "end": 783
                          },
                          "directive": null,
                          "start": 777,
                          "end": 783
                        }
                      ],
                      "start": 775,
                      "end": 785
                    },
                    "id": null,
                    "generator": false,
                    "start": 767,
                    "end": 785
                  }
                ],
                "optional": false,
                "start": 746,
                "end": 786
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 797,
                "end": 806
              },
              "start": 731,
              "end": 806
            },
            "directive": null,
            "start": 731,
            "end": 807
          }
        ],
        "start": 415,
        "end": 809
      },
      "expression": false,
      "start": 377,
      "end": 809
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checksPropertyAccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 820,
        "end": 840
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
                  "start": 855,
                  "end": 856
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
                        "start": 869,
                        "end": 872
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
                              "start": 888,
                              "end": 891
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
                                      "start": 903,
                                      "end": 907
                                    },
                                    "start": 896,
                                    "end": 908
                                  }
                                ],
                                "start": 894,
                                "end": 910
                              },
                              "expression": false,
                              "start": 891,
                              "end": 910
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 888,
                            "end": 910
                          }
                        ],
                        "start": 874,
                        "end": 920
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 869,
                      "end": 920
                    }
                  ],
                  "start": 859,
                  "end": 926
                },
                "definite": false,
                "start": 855,
                "end": 926
              }
            ],
            "declare": false,
            "start": 849,
            "end": 926
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
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
                    "start": 945,
                    "end": 946
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 947,
                    "end": 950
                  },
                  "optional": false,
                  "computed": false,
                  "start": 945,
                  "end": 950
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 954
                },
                "optional": false,
                "computed": false,
                "start": 945,
                "end": 954
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 957,
                    "end": 964
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 965,
                    "end": 968
                  },
                  "optional": false,
                  "computed": false,
                  "start": 957,
                  "end": 968
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "x.foo.bar",
                    "raw": "'x.foo.bar'",
                    "start": 969,
                    "end": 980
                  }
                ],
                "optional": false,
                "start": 957,
                "end": 981
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 984,
                "end": 993
              },
              "start": 945,
              "end": 993
            },
            "directive": null,
            "start": 945,
            "end": 994
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
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
                    "start": 1010,
                    "end": 1011
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1012,
                    "end": 1015
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1010,
                  "end": 1015
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1016,
                  "end": 1019
                },
                "optional": false,
                "computed": false,
                "start": 1010,
                "end": 1019
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1022,
                    "end": 1023
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1024,
                    "end": 1027
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1022,
                  "end": 1027
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1028,
                  "end": 1031
                },
                "optional": false,
                "computed": false,
                "start": 1022,
                "end": 1031
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1034,
                "end": 1043
              },
              "start": 1010,
              "end": 1043
            },
            "directive": null,
            "start": 1010,
            "end": 1044
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "chrome",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1054,
                  "end": 1060
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
                        "name": "platformKeys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1073,
                        "end": 1085
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
                              "name": "subtleCrypto",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1101,
                              "end": 1113
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
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "sign",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1163,
                                            "end": 1167
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
                                              "start": 1170,
                                              "end": 1172
                                            },
                                            "expression": false,
                                            "start": 1167,
                                            "end": 1172
                                          },
                                          "method": true,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1163,
                                          "end": 1172
                                        },
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "exportKey",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1194,
                                            "end": 1203
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
                                                    "start": 1215,
                                                    "end": 1219
                                                  },
                                                  "start": 1208,
                                                  "end": 1219
                                                }
                                              ],
                                              "start": 1206,
                                              "end": 1221
                                            },
                                            "expression": false,
                                            "start": 1203,
                                            "end": 1221
                                          },
                                          "method": true,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1194,
                                          "end": 1221
                                        }
                                      ],
                                      "start": 1141,
                                      "end": 1239
                                    },
                                    "start": 1134,
                                    "end": 1239
                                  }
                                ],
                                "start": 1116,
                                "end": 1253
                              },
                              "expression": false,
                              "start": 1113,
                              "end": 1253
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1101,
                            "end": 1253
                          }
                        ],
                        "start": 1087,
                        "end": 1263
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1073,
                      "end": 1263
                    }
                  ],
                  "start": 1063,
                  "end": 1269
                },
                "definite": false,
                "start": 1054,
                "end": 1269
              }
            ],
            "declare": false,
            "start": 1050,
            "end": 1269
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "chrome",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1288,
                      "end": 1294
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "platformKeys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1295,
                      "end": 1307
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1288,
                    "end": 1307
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subtleCrypto",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1320
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1288,
                  "end": 1320
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1288,
                "end": 1322
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exportKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1323,
                "end": 1332
              },
              "optional": false,
              "computed": false,
              "start": 1288,
              "end": 1332
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "chrome",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1344,
                            "end": 1350
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "platformKeys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1351,
                            "end": 1363
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1344,
                          "end": 1363
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "subtleCrypto",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1364,
                          "end": 1376
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1344,
                        "end": 1376
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1344,
                      "end": 1378
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exportKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1379,
                      "end": 1388
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1344,
                    "end": 1388
                  },
                  "directive": null,
                  "start": 1344,
                  "end": 1388
                }
              ],
              "start": 1334,
              "end": 1394
            },
            "alternate": null,
            "start": 1284,
            "end": 1394
          }
        ],
        "start": 843,
        "end": 1396
      },
      "expression": false,
      "start": 811,
      "end": 1396
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
        "start": 1404,
        "end": 1407
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
              "start": 1414,
              "end": 1425
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
                    "start": 1434,
                    "end": 1441
                  },
                  "start": 1431,
                  "end": 1441
                },
                "start": 1428,
                "end": 1441
              },
              "start": 1426,
              "end": 1441
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
            "start": 1414,
            "end": 1442
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
              "start": 1448,
              "end": 1454
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
                      "start": 1474,
                      "end": 1478
                    },
                    "start": 1467,
                    "end": 1479
                  }
                ],
                "start": 1457,
                "end": 1485
              },
              "expression": false,
              "start": 1454,
              "end": 1485
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1448,
            "end": 1485
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
              "start": 1491,
              "end": 1495
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1525,
                          "end": 1529
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isUser",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1530,
                          "end": 1536
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1525,
                        "end": 1536
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1539,
                            "end": 1546
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1547,
                            "end": 1550
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1539,
                          "end": 1550
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "this.isUser",
                            "raw": "'this.isUser'",
                            "start": 1551,
                            "end": 1564
                          }
                        ],
                        "optional": false,
                        "start": 1539,
                        "end": 1565
                      },
                      "alternate": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1568,
                        "end": 1577
                      },
                      "start": 1525,
                      "end": 1577
                    },
                    "directive": null,
                    "start": 1525,
                    "end": 1578
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1602,
                          "end": 1606
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "maybeIsUser",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1607,
                          "end": 1618
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1602,
                        "end": 1618
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1621,
                            "end": 1628
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1629,
                            "end": 1632
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1621,
                          "end": 1632
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "this.maybeIsUser",
                            "raw": "'this.maybeIsUser'",
                            "start": 1633,
                            "end": 1651
                          }
                        ],
                        "optional": false,
                        "start": 1621,
                        "end": 1652
                      },
                      "alternate": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1655,
                        "end": 1664
                      },
                      "start": 1602,
                      "end": 1664
                    },
                    "directive": null,
                    "start": 1602,
                    "end": 1665
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1693,
                        "end": 1697
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isUser",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1698,
                        "end": 1704
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1693,
                      "end": 1704
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
                                "type": "ThisExpression",
                                "start": 1720,
                                "end": 1724
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isUser",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1725,
                                "end": 1731
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1720,
                              "end": 1731
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1720,
                            "end": 1733
                          },
                          "directive": null,
                          "start": 1720,
                          "end": 1734
                        }
                      ],
                      "start": 1706,
                      "end": 1744
                    },
                    "alternate": null,
                    "start": 1689,
                    "end": 1744
                  }
                ],
                "start": 1498,
                "end": 1750
              },
              "expression": false,
              "start": 1495,
              "end": 1750
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1491,
            "end": 1750
          }
        ],
        "start": 1408,
        "end": 1752
      },
      "abstract": false,
      "declare": false,
      "start": 1398,
      "end": 1752
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1752
}
```
