__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1752,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 53,
        "decorators": [],
        "name": "onlyErrorsWhenTestingNonNullableFunctionType",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 375,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 124,
            "end": 171,
            "expression": {
              "type": "ConditionalExpression",
              "start": 124,
              "end": 170,
              "test": {
                "type": "Identifier",
                "start": 124,
                "end": 132,
                "decorators": [],
                "name": "required",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 135,
                "end": 158,
                "callee": {
                  "type": "MemberExpression",
                  "start": 135,
                  "end": 146,
                  "object": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 142,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 146,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 147,
                    "end": 157,
                    "value": "required",
                    "raw": "'required'"
                  }
                ],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 161,
                "end": 170,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 187,
            "end": 234,
            "expression": {
              "type": "ConditionalExpression",
              "start": 187,
              "end": 233,
              "test": {
                "type": "Identifier",
                "start": 187,
                "end": 195,
                "decorators": [],
                "name": "optional",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 198,
                "end": 221,
                "callee": {
                  "type": "MemberExpression",
                  "start": 198,
                  "end": 209,
                  "object": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 205,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 209,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 210,
                    "end": 220,
                    "value": "optional",
                    "raw": "'optional'"
                  }
                ],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 224,
                "end": 233,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 250,
            "end": 303,
            "expression": {
              "type": "ConditionalExpression",
              "start": 250,
              "end": 302,
              "test": {
                "type": "UnaryExpression",
                "start": 250,
                "end": 260,
                "operator": "!",
                "argument": {
                  "type": "UnaryExpression",
                  "start": 251,
                  "end": 260,
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 260,
                    "decorators": [],
                    "name": "required",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "prefix": true
              },
              "consequent": {
                "type": "CallExpression",
                "start": 263,
                "end": 290,
                "callee": {
                  "type": "MemberExpression",
                  "start": 263,
                  "end": 274,
                  "object": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 270,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 274,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 275,
                    "end": 289,
                    "value": "not required",
                    "raw": "'not required'"
                  }
                ],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 293,
                "end": 302,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 319,
            "end": 373,
            "expression": {
              "type": "ConditionalExpression",
              "start": 319,
              "end": 372,
              "test": {
                "type": "CallExpression",
                "start": 319,
                "end": 329,
                "callee": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 327,
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "consequent": {
                "type": "CallExpression",
                "start": 332,
                "end": 360,
                "callee": {
                  "type": "MemberExpression",
                  "start": 332,
                  "end": 343,
                  "object": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 339,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 343,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 344,
                    "end": 359,
                    "value": "required call",
                    "raw": "'required call'"
                  }
                ],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 363,
                "end": 372,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 377,
      "end": 809,
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 412,
        "decorators": [],
        "name": "onlyErrorsWhenUnusedInBody",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 415,
        "end": 809,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 421,
            "end": 468,
            "id": {
              "type": "Identifier",
              "start": 430,
              "end": 434,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 437,
              "end": 468,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 439,
                  "end": 466,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 446,
                    "end": 465,
                    "left": {
                      "type": "CallExpression",
                      "start": 446,
                      "end": 459,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 446,
                        "end": 457,
                        "object": {
                          "type": "Identifier",
                          "start": 446,
                          "end": 450,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 451,
                          "end": 457,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "start": 462,
                      "end": 465,
                      "value": 0.5,
                      "raw": "0.5"
                    }
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 487,
            "end": 526,
            "expression": {
              "type": "ConditionalExpression",
              "start": 487,
              "end": 525,
              "test": {
                "type": "Identifier",
                "start": 487,
                "end": 491,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 494,
                "end": 513,
                "callee": {
                  "type": "MemberExpression",
                  "start": 494,
                  "end": 505,
                  "object": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 501,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 502,
                    "end": 505,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 506,
                    "end": 512,
                    "value": "test",
                    "raw": "'test'"
                  }
                ],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 516,
                "end": 525,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 542,
            "end": 579,
            "expression": {
              "type": "ConditionalExpression",
              "start": 542,
              "end": 578,
              "test": {
                "type": "Identifier",
                "start": 542,
                "end": 546,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 549,
                "end": 566,
                "callee": {
                  "type": "MemberExpression",
                  "start": 549,
                  "end": 560,
                  "object": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 556,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 560,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 561,
                    "end": 565,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 569,
                "end": 578,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 595,
            "end": 621,
            "expression": {
              "type": "ConditionalExpression",
              "start": 595,
              "end": 620,
              "test": {
                "type": "Identifier",
                "start": 595,
                "end": 599,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 602,
                "end": 608,
                "callee": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 606,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 611,
                "end": 620,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 637,
            "end": 712,
            "expression": {
              "type": "ConditionalExpression",
              "start": 637,
              "end": 711,
              "test": {
                "type": "Identifier",
                "start": 637,
                "end": 641,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 652,
                "end": 691,
                "callee": {
                  "type": "MemberExpression",
                  "start": 652,
                  "end": 672,
                  "object": {
                    "type": "ArrayExpression",
                    "start": 652,
                    "end": 664,
                    "elements": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 653,
                        "end": 663,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "start": 659,
                          "end": 663,
                          "value": null,
                          "raw": "null"
                        },
                        "id": null,
                        "generator": false
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 672,
                    "decorators": [],
                    "name": "forEach",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 673,
                    "end": 690,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 679,
                      "end": 690,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 681,
                          "end": 688,
                          "expression": {
                            "type": "CallExpression",
                            "start": 681,
                            "end": 687,
                            "callee": {
                              "type": "Identifier",
                              "start": 681,
                              "end": 685,
                              "decorators": [],
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 702,
                "end": 711,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 731,
            "end": 807,
            "expression": {
              "type": "ConditionalExpression",
              "start": 731,
              "end": 806,
              "test": {
                "type": "Identifier",
                "start": 731,
                "end": 735,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 746,
                "end": 786,
                "callee": {
                  "type": "MemberExpression",
                  "start": 746,
                  "end": 766,
                  "object": {
                    "type": "ArrayExpression",
                    "start": 746,
                    "end": 758,
                    "elements": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 747,
                        "end": 757,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "start": 753,
                          "end": 757,
                          "value": null,
                          "raw": "null"
                        },
                        "id": null,
                        "generator": false
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 766,
                    "decorators": [],
                    "name": "forEach",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 767,
                    "end": 785,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 767,
                        "end": 771,
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 775,
                      "end": 785,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 777,
                          "end": 783,
                          "expression": {
                            "type": "CallExpression",
                            "start": 777,
                            "end": 783,
                            "callee": {
                              "type": "Identifier",
                              "start": 777,
                              "end": 781,
                              "decorators": [],
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 797,
                "end": 806,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 811,
      "end": 1396,
      "id": {
        "type": "Identifier",
        "start": 820,
        "end": 840,
        "decorators": [],
        "name": "checksPropertyAccess",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 843,
        "end": 1396,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 849,
            "end": 926,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 855,
                "end": 926,
                "id": {
                  "type": "Identifier",
                  "start": 855,
                  "end": 856,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 859,
                  "end": 926,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 869,
                      "end": 920,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 869,
                        "end": 872,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 874,
                        "end": 920,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 888,
                            "end": 910,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 888,
                              "end": 891,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 891,
                              "end": 910,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 894,
                                "end": 910,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 896,
                                    "end": 908,
                                    "argument": {
                                      "type": "Literal",
                                      "start": 903,
                                      "end": 907,
                                      "value": true,
                                      "raw": "true"
                                    }
                                  }
                                ]
                              },
                              "expression": false
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 945,
            "end": 994,
            "expression": {
              "type": "ConditionalExpression",
              "start": 945,
              "end": 993,
              "test": {
                "type": "MemberExpression",
                "start": 945,
                "end": 954,
                "object": {
                  "type": "MemberExpression",
                  "start": 945,
                  "end": 950,
                  "object": {
                    "type": "Identifier",
                    "start": 945,
                    "end": 946,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 947,
                    "end": 950,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 954,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "consequent": {
                "type": "CallExpression",
                "start": 957,
                "end": 981,
                "callee": {
                  "type": "MemberExpression",
                  "start": 957,
                  "end": 968,
                  "object": {
                    "type": "Identifier",
                    "start": 957,
                    "end": 964,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 965,
                    "end": 968,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 969,
                    "end": 980,
                    "value": "x.foo.bar",
                    "raw": "'x.foo.bar'"
                  }
                ],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 984,
                "end": 993,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1010,
            "end": 1044,
            "expression": {
              "type": "ConditionalExpression",
              "start": 1010,
              "end": 1043,
              "test": {
                "type": "MemberExpression",
                "start": 1010,
                "end": 1019,
                "object": {
                  "type": "MemberExpression",
                  "start": 1010,
                  "end": 1015,
                  "object": {
                    "type": "Identifier",
                    "start": 1010,
                    "end": 1011,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1012,
                    "end": 1015,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1016,
                  "end": 1019,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 1022,
                "end": 1031,
                "object": {
                  "type": "MemberExpression",
                  "start": 1022,
                  "end": 1027,
                  "object": {
                    "type": "Identifier",
                    "start": 1022,
                    "end": 1023,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1024,
                    "end": 1027,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1031,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 1034,
                "end": 1043,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1050,
            "end": 1269,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1054,
                "end": 1269,
                "id": {
                  "type": "Identifier",
                  "start": 1054,
                  "end": 1060,
                  "decorators": [],
                  "name": "chrome",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1063,
                  "end": 1269,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1073,
                      "end": 1263,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1073,
                        "end": 1085,
                        "decorators": [],
                        "name": "platformKeys",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1087,
                        "end": 1263,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1101,
                            "end": 1253,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1101,
                              "end": 1113,
                              "decorators": [],
                              "name": "subtleCrypto",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 1113,
                              "end": 1253,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 1116,
                                "end": 1253,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 1134,
                                    "end": 1239,
                                    "argument": {
                                      "type": "ObjectExpression",
                                      "start": 1141,
                                      "end": 1239,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 1163,
                                          "end": 1172,
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1163,
                                            "end": 1167,
                                            "decorators": [],
                                            "name": "sign",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "value": {
                                            "type": "FunctionExpression",
                                            "start": 1167,
                                            "end": 1172,
                                            "id": null,
                                            "generator": false,
                                            "async": false,
                                            "declare": false,
                                            "typeParameters": null,
                                            "params": [],
                                            "returnType": null,
                                            "body": {
                                              "type": "BlockStatement",
                                              "start": 1170,
                                              "end": 1172,
                                              "body": []
                                            },
                                            "expression": false
                                          },
                                          "method": true,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false
                                        },
                                        {
                                          "type": "Property",
                                          "start": 1194,
                                          "end": 1221,
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1194,
                                            "end": 1203,
                                            "decorators": [],
                                            "name": "exportKey",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "value": {
                                            "type": "FunctionExpression",
                                            "start": 1203,
                                            "end": 1221,
                                            "id": null,
                                            "generator": false,
                                            "async": false,
                                            "declare": false,
                                            "typeParameters": null,
                                            "params": [],
                                            "returnType": null,
                                            "body": {
                                              "type": "BlockStatement",
                                              "start": 1206,
                                              "end": 1221,
                                              "body": [
                                                {
                                                  "type": "ReturnStatement",
                                                  "start": 1208,
                                                  "end": 1219,
                                                  "argument": {
                                                    "type": "Literal",
                                                    "start": 1215,
                                                    "end": 1219,
                                                    "value": true,
                                                    "raw": "true"
                                                  }
                                                }
                                              ]
                                            },
                                            "expression": false
                                          },
                                          "method": true,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "expression": false
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1284,
            "end": 1394,
            "test": {
              "type": "MemberExpression",
              "start": 1288,
              "end": 1332,
              "object": {
                "type": "CallExpression",
                "start": 1288,
                "end": 1322,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1288,
                  "end": 1320,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1288,
                    "end": 1307,
                    "object": {
                      "type": "Identifier",
                      "start": 1288,
                      "end": 1294,
                      "decorators": [],
                      "name": "chrome",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1295,
                      "end": 1307,
                      "decorators": [],
                      "name": "platformKeys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1308,
                    "end": 1320,
                    "decorators": [],
                    "name": "subtleCrypto",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1323,
                "end": 1332,
                "decorators": [],
                "name": "exportKey",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1334,
              "end": 1394,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1344,
                  "end": 1388,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1344,
                    "end": 1388,
                    "object": {
                      "type": "CallExpression",
                      "start": 1344,
                      "end": 1378,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1344,
                        "end": 1376,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1344,
                          "end": 1363,
                          "object": {
                            "type": "Identifier",
                            "start": 1344,
                            "end": 1350,
                            "decorators": [],
                            "name": "chrome",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1351,
                            "end": 1363,
                            "decorators": [],
                            "name": "platformKeys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1364,
                          "end": 1376,
                          "decorators": [],
                          "name": "subtleCrypto",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1379,
                      "end": 1388,
                      "decorators": [],
                      "name": "exportKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1398,
      "end": 1752,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1404,
        "end": 1407,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1408,
        "end": 1752,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1414,
            "end": 1442,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1414,
              "end": 1425,
              "decorators": [],
              "name": "maybeIsUser",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1426,
              "end": 1441,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1428,
                "end": 1441,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1431,
                  "end": 1441,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1434,
                    "end": 1441
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1448,
            "end": 1485,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1448,
              "end": 1454,
              "decorators": [],
              "name": "isUser",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1454,
              "end": 1485,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1457,
                "end": 1485,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1467,
                    "end": 1479,
                    "argument": {
                      "type": "Literal",
                      "start": 1474,
                      "end": 1478,
                      "value": true,
                      "raw": "true"
                    }
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1491,
            "end": 1750,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1491,
              "end": 1495,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1495,
              "end": 1750,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1498,
                "end": 1750,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1525,
                    "end": 1578,
                    "expression": {
                      "type": "ConditionalExpression",
                      "start": 1525,
                      "end": 1577,
                      "test": {
                        "type": "MemberExpression",
                        "start": 1525,
                        "end": 1536,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1525,
                          "end": 1529
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1530,
                          "end": 1536,
                          "decorators": [],
                          "name": "isUser",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "start": 1539,
                        "end": 1565,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1539,
                          "end": 1550,
                          "object": {
                            "type": "Identifier",
                            "start": 1539,
                            "end": 1546,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1547,
                            "end": 1550,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1551,
                            "end": 1564,
                            "value": "this.isUser",
                            "raw": "'this.isUser'"
                          }
                        ],
                        "optional": false
                      },
                      "alternate": {
                        "type": "Identifier",
                        "start": 1568,
                        "end": 1577,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1602,
                    "end": 1665,
                    "expression": {
                      "type": "ConditionalExpression",
                      "start": 1602,
                      "end": 1664,
                      "test": {
                        "type": "MemberExpression",
                        "start": 1602,
                        "end": 1618,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1602,
                          "end": 1606
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1607,
                          "end": 1618,
                          "decorators": [],
                          "name": "maybeIsUser",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "start": 1621,
                        "end": 1652,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1621,
                          "end": 1632,
                          "object": {
                            "type": "Identifier",
                            "start": 1621,
                            "end": 1628,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1629,
                            "end": 1632,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1633,
                            "end": 1651,
                            "value": "this.maybeIsUser",
                            "raw": "'this.maybeIsUser'"
                          }
                        ],
                        "optional": false
                      },
                      "alternate": {
                        "type": "Identifier",
                        "start": 1655,
                        "end": 1664,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 1689,
                    "end": 1744,
                    "test": {
                      "type": "MemberExpression",
                      "start": 1693,
                      "end": 1704,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1693,
                        "end": 1697
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1698,
                        "end": 1704,
                        "decorators": [],
                        "name": "isUser",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1706,
                      "end": 1744,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1720,
                          "end": 1734,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1720,
                            "end": 1733,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1720,
                              "end": 1731,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1720,
                                "end": 1724
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1725,
                                "end": 1731,
                                "decorators": [],
                                "name": "isUser",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
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
