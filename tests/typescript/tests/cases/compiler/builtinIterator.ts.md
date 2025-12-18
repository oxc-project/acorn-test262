__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 6,
    "end": 14,
    "range": [
      6,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 17,
    "end": 25,
    "range": [
      17,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 26,
    "end": 30,
    "range": [
      26,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 44,
    "end": 49,
    "range": [
      44,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 50,
    "end": 56,
    "range": [
      50,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 59,
    "end": 67,
    "range": [
      59,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 72,
    "end": 78,
    "range": [
      72,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "filtered",
    "start": 88,
    "end": 96,
    "range": [
      88,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 99,
    "end": 107,
    "range": [
      99,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 108,
    "end": 114,
    "range": [
      108,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 117,
    "end": 119,
    "range": [
      117,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 129,
    "end": 137,
    "range": [
      129,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "isZero",
    "start": 138,
    "end": 144,
    "range": [
      138,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 148,
    "end": 154,
    "range": [
      148,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 159,
    "end": 161,
    "range": [
      159,
      161
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 177,
    "end": 180,
    "range": [
      177,
      180
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 186,
    "end": 191,
    "range": [
      186,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 192,
    "end": 196,
    "range": [
      192,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 199,
    "end": 207,
    "range": [
      199,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 208,
    "end": 214,
    "range": [
      208,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "isZero",
    "start": 215,
    "end": 221,
    "range": [
      215,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 225,
    "end": 230,
    "range": [
      225,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "iteratorFromBare",
    "start": 231,
    "end": 247,
    "range": [
      231,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 250,
    "end": 258,
    "range": [
      250,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 259,
    "end": 263,
    "range": [
      259,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 268,
    "end": 272,
    "range": [
      268,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 281,
    "end": 287,
    "range": [
      281,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 296,
    "end": 300,
    "range": [
      296,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 302,
    "end": 306,
    "range": [
      302,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 307,
    "end": 313,
    "range": [
      307,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Numeric",
    "value": ".5",
    "start": 318,
    "end": 320,
    "range": [
      318,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 328,
    "end": 333,
    "range": [
      328,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "String",
    "value": "\"a string\"",
    "start": 335,
    "end": 345,
    "range": [
      335,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 365,
    "end": 373,
    "range": [
      365,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 375,
    "end": 378,
    "range": [
      375,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 385,
    "end": 390,
    "range": [
      385,
      390
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 397,
    "end": 402,
    "range": [
      397,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "mappedGen",
    "start": 403,
    "end": 412,
    "range": [
      403,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 415,
    "end": 418,
    "range": [
      415,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 421,
    "end": 424,
    "range": [
      421,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 427,
    "end": 429,
    "range": [
      427,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 432,
    "end": 435,
    "range": [
      432,
      435
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "String",
    "value": "\"zero\"",
    "start": 440,
    "end": 446,
    "range": [
      440,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "String",
    "value": "\"other\"",
    "start": 449,
    "end": 456,
    "range": [
      449,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 460,
    "end": 465,
    "range": [
      460,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "mappedValues",
    "start": 466,
    "end": 478,
    "range": [
      466,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 491,
    "end": 497,
    "range": [
      491,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 500,
    "end": 503,
    "range": [
      500,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 506,
    "end": 508,
    "range": [
      506,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 511,
    "end": 514,
    "range": [
      511,
      514
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "String",
    "value": "\"zero\"",
    "start": 519,
    "end": 525,
    "range": [
      519,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "String",
    "value": "\"other\"",
    "start": 528,
    "end": 535,
    "range": [
      528,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 540,
    "end": 545,
    "range": [
      540,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "GoodIterator",
    "start": 546,
    "end": 558,
    "range": [
      546,
      558
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 559,
    "end": 566,
    "range": [
      559,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 567,
    "end": 575,
    "range": [
      567,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 576,
    "end": 582,
    "range": [
      576,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 588,
    "end": 592,
    "range": [
      588,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 601,
    "end": 607,
    "range": [
      601,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 610,
    "end": 614,
    "range": [
      610,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 616,
    "end": 621,
    "range": [
      616,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 623,
    "end": 628,
    "range": [
      623,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 634,
    "end": 636,
    "range": [
      634,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 637,
    "end": 642,
    "range": [
      637,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 666,
    "end": 669,
    "range": [
      666,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 670,
    "end": 678,
    "range": [
      670,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 679,
    "end": 685,
    "range": [
      679,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 691,
    "end": 696,
    "range": [
      691,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 699,
    "end": 706,
    "range": [
      699,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 707,
    "end": 715,
    "range": [
      707,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 716,
    "end": 722,
    "range": [
      716,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 772,
    "end": 777,
    "range": [
      772,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "BadIterator1",
    "start": 778,
    "end": 790,
    "range": [
      778,
      790
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 791,
    "end": 798,
    "range": [
      791,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 799,
    "end": 807,
    "range": [
      799,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 808,
    "end": 814,
    "range": [
      808,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 820,
    "end": 824,
    "range": [
      820,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 833,
    "end": 835,
    "range": [
      833,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 837,
    "end": 841,
    "range": [
      837,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 842,
    "end": 848,
    "range": [
      842,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Numeric",
    "value": ".5",
    "start": 853,
    "end": 855,
    "range": [
      853,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 865,
    "end": 871,
    "range": [
      865,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 874,
    "end": 878,
    "range": [
      874,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 880,
    "end": 885,
    "range": [
      880,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 887,
    "end": 892,
    "range": [
      887,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 898,
    "end": 900,
    "range": [
      898,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 901,
    "end": 906,
    "range": [
      901,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 914,
    "end": 918,
    "range": [
      914,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 927,
    "end": 933,
    "range": [
      927,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 936,
    "end": 940,
    "range": [
      936,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 942,
    "end": 946,
    "range": [
      942,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 948,
    "end": 953,
    "range": [
      948,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "String",
    "value": "\"a string\"",
    "start": 955,
    "end": 965,
    "range": [
      955,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 968,
    "end": 970,
    "range": [
      968,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 971,
    "end": 976,
    "range": [
      971,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 991,
    "end": 996,
    "range": [
      991,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "BadIterator2",
    "start": 997,
    "end": 1009,
    "range": [
      997,
      1009
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1010,
    "end": 1017,
    "range": [
      1010,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 1018,
    "end": 1026,
    "range": [
      1018,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1027,
    "end": 1033,
    "range": [
      1027,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1039,
    "end": 1043,
    "range": [
      1039,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1052,
    "end": 1058,
    "range": [
      1052,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 1061,
    "end": 1065,
    "range": [
      1061,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1067,
    "end": 1072,
    "range": [
      1067,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1074,
    "end": 1079,
    "range": [
      1074,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1093,
    "end": 1098,
    "range": [
      1093,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "BadIterator3",
    "start": 1099,
    "end": 1111,
    "range": [
      1099,
      1111
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1112,
    "end": 1119,
    "range": [
      1112,
      1119
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 1120,
    "end": 1128,
    "range": [
      1120,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1129,
    "end": 1135,
    "range": [
      1129,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1141,
    "end": 1145,
    "range": [
      1141,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1154,
    "end": 1156,
    "range": [
      1154,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1158,
    "end": 1162,
    "range": [
      1158,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1163,
    "end": 1169,
    "range": [
      1163,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Numeric",
    "value": ".5",
    "start": 1174,
    "end": 1176,
    "range": [
      1174,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1186,
    "end": 1192,
    "range": [
      1186,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 1195,
    "end": 1199,
    "range": [
      1195,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1201,
    "end": 1206,
    "range": [
      1201,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1208,
    "end": 1213,
    "range": [
      1208,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1226,
    "end": 1230,
    "range": [
      1226,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1239,
    "end": 1245,
    "range": [
      1239,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 1248,
    "end": 1252,
    "range": [
      1248,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1254,
    "end": 1258,
    "range": [
      1254,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1260,
    "end": 1265,
    "range": [
      1260,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "String",
    "value": "\"a string\"",
    "start": 1267,
    "end": 1277,
    "range": [
      1267,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1294,
    "end": 1301,
    "range": [
      1294,
      1301
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1302,
    "end": 1307,
    "range": [
      1302,
      1307
    ]
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 1308,
    "end": 1310,
    "range": [
      1308,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 1312,
    "end": 1321,
    "range": [
      1312,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1322,
    "end": 1328,
    "range": [
      1322,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1330,
    "end": 1336,
    "range": [
      1330,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1338,
    "end": 1345,
    "range": [
      1338,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1348,
    "end": 1353,
    "range": [
      1348,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "iter1",
    "start": 1354,
    "end": 1359,
    "range": [
      1354,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 1362,
    "end": 1370,
    "range": [
      1362,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1371,
    "end": 1375,
    "range": [
      1371,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 1376,
    "end": 1378,
    "range": [
      1376,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1382,
    "end": 1389,
    "range": [
      1382,
      1389
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1390,
    "end": 1395,
    "range": [
      1390,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "iter2",
    "start": 1396,
    "end": 1401,
    "range": [
      1396,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Identifier",
    "value": "IteratorObject",
    "start": 1403,
    "end": 1417,
    "range": [
      1403,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1418,
    "end": 1424,
    "range": [
      1418,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1427,
    "end": 1432,
    "range": [
      1427,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "iter3",
    "start": 1433,
    "end": 1438,
    "range": [
      1433,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "iter2",
    "start": 1441,
    "end": 1446,
    "range": [
      1441,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "flatMap",
    "start": 1447,
    "end": 1454,
    "range": [
      1447,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1458,
    "end": 1460,
    "range": [
      1458,
      1460
    ]
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 1461,
    "end": 1463,
    "range": [
      1461,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  }
]
```
