__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "lambda",
              "optional": false,
              "typeAnnotation": null,
              "start": 1,
              "end": 7
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 12
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 13,
                  "end": 15
                },
                "optional": false,
                "computed": false,
                "start": 8,
                "end": 15
              }
            ],
            "optional": false,
            "start": 1,
            "end": 16
          },
          "start": 0,
          "end": 16
        },
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "deco",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 22
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 27
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 30
                },
                "optional": false,
                "computed": false,
                "start": 23,
                "end": 30
              }
            ],
            "optional": false,
            "start": 18,
            "end": 31
          },
          "start": 17,
          "end": 31
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 45
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 57
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 62
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 65
                      },
                      "optional": false,
                      "computed": false,
                      "start": 58,
                      "end": 65
                    }
                  ],
                  "optional": false,
                  "start": 51,
                  "end": 66
                },
                "start": 50,
                "end": 66
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 74
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 75,
                        "end": 79
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 80,
                        "end": 82
                      },
                      "optional": false,
                      "computed": false,
                      "start": 75,
                      "end": 82
                    }
                  ],
                  "optional": false,
                  "start": 70,
                  "end": 83
                },
                "start": 69,
                "end": 83
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              },
              "start": 94,
              "end": 102
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 50,
            "end": 103
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 118
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 128,
                      "end": 134
                    },
                    "start": 126,
                    "end": 134
                  },
                  "start": 119,
                  "end": 134
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 142,
                          "end": 146
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 155
                        },
                        "optional": false,
                        "computed": false,
                        "start": 142,
                        "end": 155
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "message",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 165
                      },
                      "start": 142,
                      "end": 165
                    },
                    "directive": null,
                    "start": 142,
                    "end": 166
                  }
                ],
                "start": 136,
                "end": 170
              },
              "expression": false,
              "start": 118,
              "end": 170
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 107,
            "end": 170
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 181
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 186
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 189
                      },
                      "optional": false,
                      "computed": false,
                      "start": 182,
                      "end": 189
                    }
                  ],
                  "optional": false,
                  "start": 175,
                  "end": 190
                },
                "start": 174,
                "end": 190
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 198
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 203
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 206
                      },
                      "optional": false,
                      "computed": false,
                      "start": 199,
                      "end": 206
                    }
                  ],
                  "optional": false,
                  "start": 194,
                  "end": 207
                },
                "start": 193,
                "end": 207
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 215
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 231,
                        "end": 240
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 243,
                          "end": 247
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 256
                        },
                        "optional": false,
                        "computed": false,
                        "start": 243,
                        "end": 256
                      },
                      "start": 231,
                      "end": 256
                    },
                    "start": 224,
                    "end": 257
                  }
                ],
                "start": 218,
                "end": 261
              },
              "expression": false,
              "start": 215,
              "end": 261
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 174,
            "end": 261
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 272
                },
                "start": 265,
                "end": 272
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "deco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 280
                },
                "start": 275,
                "end": 280
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet1",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 289
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 305,
                        "end": 314
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 317,
                          "end": 321
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 330
                        },
                        "optional": false,
                        "computed": false,
                        "start": 317,
                        "end": 330
                      },
                      "start": 305,
                      "end": 330
                    },
                    "start": 298,
                    "end": 331
                  }
                ],
                "start": 292,
                "end": 335
              },
              "expression": false,
              "start": 289,
              "end": 335
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 265,
            "end": 335
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet2",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 345
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 347,
                          "end": 353
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 354,
                              "end": 358
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 359,
                              "end": 361
                            },
                            "optional": false,
                            "computed": false,
                            "start": 354,
                            "end": 361
                          }
                        ],
                        "optional": false,
                        "start": 347,
                        "end": 362
                      },
                      "start": 346,
                      "end": 362
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "deco",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 364,
                          "end": 368
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 369,
                              "end": 373
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 374,
                              "end": 376
                            },
                            "optional": false,
                            "computed": false,
                            "start": 369,
                            "end": 376
                          }
                        ],
                        "optional": false,
                        "start": 364,
                        "end": 377
                      },
                      "start": 363,
                      "end": 377
                    }
                  ],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 383
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 398,
                        "end": 407
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 410,
                          "end": 414
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 423
                        },
                        "optional": false,
                        "computed": false,
                        "start": 410,
                        "end": 423
                      },
                      "start": 398,
                      "end": 423
                    },
                    "start": 391,
                    "end": 424
                  }
                ],
                "start": 385,
                "end": 428
              },
              "expression": false,
              "start": 345,
              "end": 428
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 339,
            "end": 428
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet3",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 438
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "lambda",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 440,
                        "end": 446
                      },
                      "start": 439,
                      "end": 446
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "deco",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 448,
                        "end": 452
                      },
                      "start": 447,
                      "end": 452
                    }
                  ],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 458
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 473,
                        "end": 482
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 485,
                          "end": 489
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 490,
                          "end": 498
                        },
                        "optional": false,
                        "computed": false,
                        "start": 485,
                        "end": 498
                      },
                      "start": 473,
                      "end": 498
                    },
                    "start": 466,
                    "end": 499
                  }
                ],
                "start": 460,
                "end": 503
              },
              "expression": false,
              "start": 438,
              "end": 503
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 432,
            "end": 503
          }
        ],
        "start": 46,
        "end": 505
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 505
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "deco",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 520
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 524,
            "end": 528
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 530,
                "end": 533
              },
              "start": 530,
              "end": 535
            },
            "start": 528,
            "end": 535
          },
          "value": null,
          "start": 521,
          "end": 535
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 538,
          "end": 541
        },
        "start": 536,
        "end": 541
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 542,
        "end": 544
      },
      "expression": false,
      "start": 507,
      "end": 544
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null,
        "start": 551,
        "end": 555
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "No",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 562
            },
            "initializer": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 565,
              "end": 566
            },
            "computed": false,
            "start": 560,
            "end": 566
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Yes",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 573
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 576,
              "end": 577
            },
            "computed": false,
            "start": 570,
            "end": 577
          }
        ],
        "start": 556,
        "end": 580
      },
      "const": false,
      "declare": false,
      "start": 546,
      "end": 580
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
            "name": "lambda",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 594
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 605
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 607,
                      "end": 610
                    },
                    "start": 607,
                    "end": 612
                  },
                  "start": 605,
                  "end": 612
                },
                "value": null,
                "start": 598,
                "end": 612
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 615,
                "end": 618
              },
              "start": 613,
              "end": 618
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 622,
              "end": 624
            },
            "id": null,
            "generator": false,
            "start": 597,
            "end": 624
          },
          "definite": false,
          "start": 588,
          "end": 624
        }
      ],
      "declare": false,
      "start": 582,
      "end": 625
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "lambda",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 634
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 639
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
                  "end": 642
                },
                "optional": false,
                "computed": false,
                "start": 635,
                "end": 642
              }
            ],
            "optional": false,
            "start": 628,
            "end": 643
          },
          "start": 627,
          "end": 643
        },
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "deco",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 649
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 654
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 657
                },
                "optional": false,
                "computed": false,
                "start": 650,
                "end": 657
              }
            ],
            "optional": false,
            "start": 645,
            "end": 658
          },
          "start": 644,
          "end": 658
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greeter1",
        "optional": false,
        "typeAnnotation": null,
        "start": 665,
        "end": 673
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 679,
                    "end": 685
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 686,
                        "end": 690
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 691,
                        "end": 693
                      },
                      "optional": false,
                      "computed": false,
                      "start": 686,
                      "end": 693
                    }
                  ],
                  "optional": false,
                  "start": 679,
                  "end": 694
                },
                "start": 678,
                "end": 694
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 698,
                    "end": 702
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 703,
                        "end": 707
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 708,
                        "end": 710
                      },
                      "optional": false,
                      "computed": false,
                      "start": 703,
                      "end": 710
                    }
                  ],
                  "optional": false,
                  "start": 698,
                  "end": 711
                },
                "start": 697,
                "end": 711
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 714,
              "end": 722
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 724,
                "end": 730
              },
              "start": 722,
              "end": 730
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 678,
            "end": 731
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 746
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 756,
                      "end": 762
                    },
                    "start": 754,
                    "end": 762
                  },
                  "start": 747,
                  "end": 762
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 770,
                          "end": 774
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 775,
                          "end": 783
                        },
                        "optional": false,
                        "computed": false,
                        "start": 770,
                        "end": 783
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "message",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 786,
                        "end": 793
                      },
                      "start": 770,
                      "end": 793
                    },
                    "directive": null,
                    "start": 770,
                    "end": 794
                  }
                ],
                "start": 764,
                "end": 798
              },
              "expression": false,
              "start": 746,
              "end": 798
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 735,
            "end": 798
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 809
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 814
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 815,
                        "end": 817
                      },
                      "optional": false,
                      "computed": false,
                      "start": 810,
                      "end": 817
                    }
                  ],
                  "optional": false,
                  "start": 803,
                  "end": 818
                },
                "start": 802,
                "end": 818
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 822,
                    "end": 826
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 831
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 832,
                        "end": 834
                      },
                      "optional": false,
                      "computed": false,
                      "start": 827,
                      "end": 834
                    }
                  ],
                  "optional": false,
                  "start": 822,
                  "end": 835
                },
                "start": 821,
                "end": 835
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet",
              "optional": false,
              "typeAnnotation": null,
              "start": 838,
              "end": 843
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 859,
                        "end": 868
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 871,
                          "end": 875
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 876,
                          "end": 884
                        },
                        "optional": false,
                        "computed": false,
                        "start": 871,
                        "end": 884
                      },
                      "start": 859,
                      "end": 884
                    },
                    "start": 852,
                    "end": 885
                  }
                ],
                "start": 846,
                "end": 889
              },
              "expression": false,
              "start": 843,
              "end": 889
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 802,
            "end": 889
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 900
                },
                "start": 893,
                "end": 900
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "deco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 904,
                  "end": 908
                },
                "start": 903,
                "end": 908
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet1",
              "optional": false,
              "typeAnnotation": null,
              "start": 911,
              "end": 917
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 933,
                        "end": 942
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 945,
                          "end": 949
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 950,
                          "end": 958
                        },
                        "optional": false,
                        "computed": false,
                        "start": 945,
                        "end": 958
                      },
                      "start": 933,
                      "end": 958
                    },
                    "start": 926,
                    "end": 959
                  }
                ],
                "start": 920,
                "end": 963
              },
              "expression": false,
              "start": 917,
              "end": 963
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 893,
            "end": 963
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet2",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 973
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 975,
                          "end": 981
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 982,
                              "end": 986
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 987,
                              "end": 989
                            },
                            "optional": false,
                            "computed": false,
                            "start": 982,
                            "end": 989
                          }
                        ],
                        "optional": false,
                        "start": 975,
                        "end": 990
                      },
                      "start": 974,
                      "end": 990
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "deco",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 992,
                          "end": 996
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 997,
                              "end": 1001
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1002,
                              "end": 1004
                            },
                            "optional": false,
                            "computed": false,
                            "start": 997,
                            "end": 1004
                          }
                        ],
                        "optional": false,
                        "start": 992,
                        "end": 1005
                      },
                      "start": 991,
                      "end": 1005
                    }
                  ],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1006,
                  "end": 1011
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 1026,
                        "end": 1035
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1038,
                          "end": 1042
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1043,
                          "end": 1051
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1038,
                        "end": 1051
                      },
                      "start": 1026,
                      "end": 1051
                    },
                    "start": 1019,
                    "end": 1052
                  }
                ],
                "start": 1013,
                "end": 1056
              },
              "expression": false,
              "start": 973,
              "end": 1056
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 967,
            "end": 1056
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1060,
              "end": 1066
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "lambda",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1068,
                        "end": 1074
                      },
                      "start": 1067,
                      "end": 1074
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "deco",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1076,
                        "end": 1080
                      },
                      "start": 1075,
                      "end": 1080
                    }
                  ],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1086
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \"",
                        "start": 1101,
                        "end": 1110
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1113,
                          "end": 1117
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1118,
                          "end": 1126
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1113,
                        "end": 1126
                      },
                      "start": 1101,
                      "end": 1126
                    },
                    "start": 1094,
                    "end": 1127
                  }
                ],
                "start": 1088,
                "end": 1131
              },
              "expression": false,
              "start": 1066,
              "end": 1131
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1060,
            "end": 1131
          }
        ],
        "start": 674,
        "end": 1133
      },
      "abstract": false,
      "declare": false,
      "start": 627,
      "end": 1133
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1133
}
```
