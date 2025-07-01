__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 25
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 30
              },
              "optional": false,
              "computed": false,
              "start": 17,
              "end": 30
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 32,
                    "end": 33
                  },
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 35,
                    "end": 36
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 38,
                    "end": 39
                  }
                ],
                "start": 31,
                "end": 40
              }
            ],
            "optional": false,
            "start": 17,
            "end": 41
          },
          "definite": false,
          "start": 6,
          "end": 41
        }
      ],
      "declare": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 56
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 67
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 71
              },
              "optional": false,
              "computed": false,
              "start": 59,
              "end": 71
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 78
              }
            ],
            "optional": false,
            "start": 59,
            "end": 79
          },
          "definite": false,
          "start": 50,
          "end": 79
        }
      ],
      "declare": false,
      "start": 44,
      "end": 80
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "filtered",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 96
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 107
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 114
              },
              "optional": false,
              "computed": false,
              "start": 99,
              "end": 114
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 121
                  },
                  "operator": ">",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 124,
                    "end": 125
                  },
                  "start": 120,
                  "end": 125
                },
                "id": null,
                "generator": false,
                "start": 115,
                "end": 125
              }
            ],
            "optional": false,
            "start": 99,
            "end": 126
          },
          "definite": false,
          "start": 88,
          "end": 126
        }
      ],
      "declare": false,
      "start": 82,
      "end": 127
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isZero",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 144
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 148,
              "end": 154
            },
            "start": 146,
            "end": 154
          },
          "start": 145,
          "end": 154
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 162,
                "end": 163
              },
              "start": 162,
              "end": 163
            },
            "start": 162,
            "end": 163
          },
          "start": 157,
          "end": 163
        },
        "start": 155,
        "end": 163
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 181,
                "end": 182
              },
              "start": 175,
              "end": 182
            },
            "start": 168,
            "end": 183
          }
        ],
        "start": 164,
        "end": 185
      },
      "expression": false,
      "start": 129,
      "end": 185
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zero",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 196
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 207
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 214
              },
              "optional": false,
              "computed": false,
              "start": 199,
              "end": 214
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isZero",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 221
              }
            ],
            "optional": false,
            "start": 199,
            "end": 222
          },
          "definite": false,
          "start": 192,
          "end": 222
        }
      ],
      "declare": false,
      "start": 186,
      "end": 223
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "iteratorFromBare",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 247
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 258
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 263
              },
              "optional": false,
              "computed": false,
              "start": 250,
              "end": 263
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 272
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
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 296,
                                    "end": 300
                                  },
                                  "value": {
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
                                          "start": 302,
                                          "end": 306
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "random",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 307,
                                          "end": 313
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 302,
                                        "end": 313
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 302,
                                      "end": 315
                                    },
                                    "operator": "<",
                                    "right": {
                                      "type": "Literal",
                                      "value": 0.5,
                                      "raw": ".5",
                                      "start": 318,
                                      "end": 320
                                    },
                                    "start": 302,
                                    "end": 320
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 296,
                                  "end": 320
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 328,
                                    "end": 333
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "a string",
                                    "raw": "\"a string\"",
                                    "start": 335,
                                    "end": 345
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 328,
                                  "end": 345
                                }
                              ],
                              "start": 288,
                              "end": 352
                            },
                            "start": 281,
                            "end": 353
                          }
                        ],
                        "start": 275,
                        "end": 357
                      },
                      "expression": false,
                      "start": 272,
                      "end": 357
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 268,
                    "end": 357
                  }
                ],
                "start": 264,
                "end": 360
              }
            ],
            "optional": false,
            "start": 250,
            "end": 361
          },
          "definite": false,
          "start": 231,
          "end": 361
        }
      ],
      "declare": false,
      "start": 225,
      "end": 362
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 378
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 391,
                "end": 392
              },
              "start": 385,
              "end": 392
            },
            "directive": null,
            "start": 385,
            "end": 393
          }
        ],
        "start": 381,
        "end": 395
      },
      "expression": false,
      "start": 365,
      "end": 395
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mappedGen",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 412
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "gen",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 418
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 415,
                "end": 420
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 424
              },
              "optional": false,
              "computed": false,
              "start": 415,
              "end": 424
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 426
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 431
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 436,
                      "end": 437
                    },
                    "start": 430,
                    "end": 437
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "zero",
                    "raw": "\"zero\"",
                    "start": 440,
                    "end": 446
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "other",
                    "raw": "\"other\"",
                    "start": 449,
                    "end": 456
                  },
                  "start": 430,
                  "end": 456
                },
                "id": null,
                "generator": false,
                "start": 425,
                "end": 456
              }
            ],
            "optional": false,
            "start": 415,
            "end": 457
          },
          "definite": false,
          "start": 403,
          "end": 457
        }
      ],
      "declare": false,
      "start": 397,
      "end": 458
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mappedValues",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 478
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 482,
                        "end": 483
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 485,
                        "end": 486
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 488,
                        "end": 489
                      }
                    ],
                    "start": 481,
                    "end": 490
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 491,
                    "end": 497
                  },
                  "optional": false,
                  "computed": false,
                  "start": 481,
                  "end": 497
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 481,
                "end": 499
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 503
              },
              "optional": false,
              "computed": false,
              "start": 481,
              "end": 503
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 505
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 509,
                      "end": 510
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 515,
                      "end": 516
                    },
                    "start": 509,
                    "end": 516
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "zero",
                    "raw": "\"zero\"",
                    "start": 519,
                    "end": 525
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "other",
                    "raw": "\"other\"",
                    "start": 528,
                    "end": 535
                  },
                  "start": 509,
                  "end": 535
                },
                "id": null,
                "generator": false,
                "start": 504,
                "end": 535
              }
            ],
            "optional": false,
            "start": 481,
            "end": 536
          },
          "definite": false,
          "start": 466,
          "end": 536
        }
      ],
      "declare": false,
      "start": 460,
      "end": 537
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GoodIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 558
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 575
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 576,
            "end": 582
          }
        ],
        "start": 575,
        "end": 583
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 592
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
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "done",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 610,
                              "end": 614
                            },
                            "value": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 616,
                              "end": 621
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 610,
                            "end": 621
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 623,
                              "end": 628
                            },
                            "value": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 630,
                              "end": 631
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 623,
                            "end": 631
                          }
                        ],
                        "start": 608,
                        "end": 633
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 642
                        },
                        "typeArguments": null,
                        "start": 637,
                        "end": 642
                      },
                      "start": 608,
                      "end": 642
                    },
                    "start": 601,
                    "end": 643
                  }
                ],
                "start": 595,
                "end": 647
              },
              "expression": false,
              "start": 592,
              "end": 647
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 588,
            "end": 647
          }
        ],
        "start": 584,
        "end": 649
      },
      "abstract": false,
      "declare": false,
      "start": 540,
      "end": 649
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Iterator",
          "optional": false,
          "typeAnnotation": null,
          "start": 670,
          "end": 678
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 679,
              "end": 685
            }
          ],
          "start": 678,
          "end": 686
        },
        "arguments": [],
        "start": 666,
        "end": 688
      },
      "directive": null,
      "start": 666,
      "end": 689
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 697,
        "end": 698
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 707,
        "end": 715
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 716,
            "end": 722
          }
        ],
        "start": 715,
        "end": 723
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 724,
        "end": 726
      },
      "abstract": false,
      "declare": false,
      "start": 691,
      "end": 726
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadIterator1",
        "optional": false,
        "typeAnnotation": null,
        "start": 778,
        "end": 790
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 799,
        "end": 807
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 808,
            "end": 814
          }
        ],
        "start": 807,
        "end": 815
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 824
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
                            "start": 837,
                            "end": 841
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 842,
                            "end": 848
                          },
                          "optional": false,
                          "computed": false,
                          "start": 837,
                          "end": 848
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 837,
                        "end": 850
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": ".5",
                        "start": 853,
                        "end": 855
                      },
                      "start": 837,
                      "end": 855
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 874,
                                    "end": 878
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false",
                                    "start": 880,
                                    "end": 885
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 874,
                                  "end": 885
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 887,
                                    "end": 892
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 894,
                                    "end": 895
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 887,
                                  "end": 895
                                }
                              ],
                              "start": 872,
                              "end": 897
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 901,
                                "end": 906
                              },
                              "typeArguments": null,
                              "start": 901,
                              "end": 906
                            },
                            "start": 872,
                            "end": 906
                          },
                          "start": 865,
                          "end": 907
                        }
                      ],
                      "start": 857,
                      "end": 913
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 936,
                                    "end": 940
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 942,
                                    "end": 946
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 936,
                                  "end": 946
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 948,
                                    "end": 953
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "a string",
                                    "raw": "\"a string\"",
                                    "start": 955,
                                    "end": 965
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 948,
                                  "end": 965
                                }
                              ],
                              "start": 934,
                              "end": 967
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 971,
                                "end": 976
                              },
                              "typeArguments": null,
                              "start": 971,
                              "end": 976
                            },
                            "start": 934,
                            "end": 976
                          },
                          "start": 927,
                          "end": 977
                        }
                      ],
                      "start": 919,
                      "end": 983
                    },
                    "start": 833,
                    "end": 983
                  }
                ],
                "start": 827,
                "end": 987
              },
              "expression": false,
              "start": 824,
              "end": 987
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 820,
            "end": 987
          }
        ],
        "start": 816,
        "end": 989
      },
      "abstract": false,
      "declare": false,
      "start": 772,
      "end": 989
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadIterator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 997,
        "end": 1009
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 1018,
        "end": 1026
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 1027,
            "end": 1033
          }
        ],
        "start": 1026,
        "end": 1034
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1039,
              "end": 1043
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
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1061,
                            "end": 1065
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1067,
                            "end": 1072
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1061,
                          "end": 1072
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1074,
                            "end": 1079
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1081,
                            "end": 1082
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1074,
                          "end": 1082
                        }
                      ],
                      "start": 1059,
                      "end": 1084
                    },
                    "start": 1052,
                    "end": 1085
                  }
                ],
                "start": 1046,
                "end": 1089
              },
              "expression": false,
              "start": 1043,
              "end": 1089
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1039,
            "end": 1089
          }
        ],
        "start": 1035,
        "end": 1091
      },
      "abstract": false,
      "declare": false,
      "start": 991,
      "end": 1091
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadIterator3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1099,
        "end": 1111
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 1120,
        "end": 1128
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 1129,
            "end": 1135
          }
        ],
        "start": 1128,
        "end": 1136
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1141,
              "end": 1145
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
                            "start": 1158,
                            "end": 1162
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1163,
                            "end": 1169
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1158,
                          "end": 1169
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1158,
                        "end": 1171
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": ".5",
                        "start": 1174,
                        "end": 1176
                      },
                      "start": 1158,
                      "end": 1176
                    },
                    "consequent": {
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
                                  "name": "done",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1195,
                                  "end": 1199
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 1201,
                                  "end": 1206
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1195,
                                "end": 1206
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1208,
                                  "end": 1213
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 1215,
                                  "end": 1216
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1208,
                                "end": 1216
                              }
                            ],
                            "start": 1193,
                            "end": 1218
                          },
                          "start": 1186,
                          "end": 1219
                        }
                      ],
                      "start": 1178,
                      "end": 1225
                    },
                    "alternate": {
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
                                  "name": "done",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1248,
                                  "end": 1252
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 1254,
                                  "end": 1258
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1248,
                                "end": 1258
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1260,
                                  "end": 1265
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "a string",
                                  "raw": "\"a string\"",
                                  "start": 1267,
                                  "end": 1277
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1260,
                                "end": 1277
                              }
                            ],
                            "start": 1246,
                            "end": 1279
                          },
                          "start": 1239,
                          "end": 1280
                        }
                      ],
                      "start": 1231,
                      "end": 1286
                    },
                    "start": 1154,
                    "end": 1286
                  }
                ],
                "start": 1148,
                "end": 1290
              },
              "expression": false,
              "start": 1145,
              "end": 1290
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1141,
            "end": 1290
          }
        ],
        "start": 1137,
        "end": 1292
      },
      "abstract": false,
      "declare": false,
      "start": 1093,
      "end": 1292
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1312,
                  "end": 1321
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1322,
                      "end": 1328
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1330,
                      "end": 1336
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 1338,
                      "end": 1345
                    }
                  ],
                  "start": 1321,
                  "end": 1346
                },
                "start": 1312,
                "end": 1346
              },
              "start": 1310,
              "end": 1346
            },
            "start": 1308,
            "end": 1346
          },
          "init": null,
          "definite": false,
          "start": 1308,
          "end": 1346
        }
      ],
      "declare": true,
      "start": 1294,
      "end": 1347
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "iter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1354,
            "end": 1359
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 1362,
                "end": 1370
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 1371,
                "end": 1375
              },
              "optional": false,
              "computed": false,
              "start": 1362,
              "end": 1375
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1378
              }
            ],
            "optional": false,
            "start": 1362,
            "end": 1379
          },
          "definite": false,
          "start": 1354,
          "end": 1379
        }
      ],
      "declare": false,
      "start": 1348,
      "end": 1380
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "iter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IteratorObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1403,
                  "end": 1417
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1418,
                      "end": 1424
                    }
                  ],
                  "start": 1417,
                  "end": 1425
                },
                "start": 1403,
                "end": 1425
              },
              "start": 1401,
              "end": 1425
            },
            "start": 1396,
            "end": 1425
          },
          "init": null,
          "definite": false,
          "start": 1396,
          "end": 1425
        }
      ],
      "declare": true,
      "start": 1382,
      "end": 1426
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "iter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1433,
            "end": 1438
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "iter2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1441,
                "end": 1446
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "flatMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1447,
                "end": 1454
              },
              "optional": false,
              "computed": false,
              "start": 1441,
              "end": 1454
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1461,
                  "end": 1463
                },
                "id": null,
                "generator": false,
                "start": 1455,
                "end": 1463
              }
            ],
            "optional": false,
            "start": 1441,
            "end": 1464
          },
          "definite": false,
          "start": 1433,
          "end": 1464
        }
      ],
      "declare": false,
      "start": 1427,
      "end": 1465
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1465
}
```
