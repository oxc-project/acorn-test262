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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              },
              "start": 17,
              "end": 22
            },
            "start": 14,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 22
        }
      ],
      "declare": true,
      "start": 0,
      "end": 23
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
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
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
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 44
                },
                "id": null,
                "generator": false,
                "start": 36,
                "end": 44
              }
            ],
            "optional": false,
            "start": 32,
            "end": 45
          },
          "start": 31,
          "end": 45
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 54
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 55,
        "end": 58
      },
      "abstract": false,
      "declare": false,
      "start": 31,
      "end": 58
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
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 73
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 76
              }
            ],
            "optional": false,
            "start": 70,
            "end": 77
          },
          "start": 69,
          "end": 77
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 86
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 87,
        "end": 90
      },
      "abstract": false,
      "declare": false,
      "start": 69,
      "end": 90
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
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 105
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 115
                  },
                  "id": null,
                  "generator": false,
                  "start": 107,
                  "end": 115
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 106,
                "end": 118
              }
            ],
            "optional": false,
            "start": 102,
            "end": 119
          },
          "start": 101,
          "end": 119
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 128
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 129,
        "end": 132
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 132
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 159
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
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 168
                      },
                      "id": null,
                      "generator": false,
                      "start": 160,
                      "end": 168
                    }
                  ],
                  "optional": false,
                  "start": 156,
                  "end": 169
                },
                "start": 155,
                "end": 169
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 183
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
                "start": 186,
                "end": 188
              },
              "expression": false,
              "start": 183,
              "end": 188
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 155,
            "end": 188
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 197
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
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 206
                      },
                      "id": null,
                      "generator": false,
                      "start": 198,
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 232,
                        "end": 236
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 238
                      },
                      "optional": false,
                      "computed": false,
                      "start": 232,
                      "end": 238
                    },
                    "start": 225,
                    "end": 239
                  }
                ],
                "start": 223,
                "end": 241
              },
              "expression": false,
              "start": 220,
              "end": 241
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 193,
            "end": 241
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 250
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
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 259
                      },
                      "id": null,
                      "generator": false,
                      "start": 251,
                      "end": 259
                    }
                  ],
                  "optional": false,
                  "start": 247,
                  "end": 260
                },
                "start": 246,
                "end": 260
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 277,
                      "end": 280
                    },
                    "start": 275,
                    "end": 280
                  },
                  "start": 274,
                  "end": 280
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 282,
                "end": 284
              },
              "expression": false,
              "start": 273,
              "end": 284
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 246,
            "end": 284
          },
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 293
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
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 302
                      },
                      "id": null,
                      "generator": false,
                      "start": 294,
                      "end": 302
                    }
                  ],
                  "optional": false,
                  "start": 290,
                  "end": 303
                },
                "start": 289,
                "end": 303
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 312
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 314,
                "end": 317
              },
              "start": 312,
              "end": 317
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 289,
            "end": 318
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 327
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
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 334,
                        "end": 336
                      },
                      "id": null,
                      "generator": false,
                      "start": 328,
                      "end": 336
                    }
                  ],
                  "optional": false,
                  "start": 324,
                  "end": 337
                },
                "start": 323,
                "end": 337
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 355
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 357,
                "end": 360
              },
              "start": 355,
              "end": 360
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 323,
            "end": 361
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 371
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
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 378,
                        "end": 380
                      },
                      "id": null,
                      "generator": false,
                      "start": 372,
                      "end": 380
                    }
                  ],
                  "optional": false,
                  "start": 368,
                  "end": 381
                },
                "start": 367,
                "end": 381
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 388
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
                "start": 391,
                "end": 393
              },
              "expression": false,
              "start": 388,
              "end": 393
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 367,
            "end": 393
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 402
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
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 411
                      },
                      "id": null,
                      "generator": false,
                      "start": 403,
                      "end": 411
                    }
                  ],
                  "optional": false,
                  "start": 399,
                  "end": 412
                },
                "start": 398,
                "end": 412
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 418
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 430,
                        "end": 434
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 436
                      },
                      "optional": false,
                      "computed": false,
                      "start": 430,
                      "end": 436
                    },
                    "start": 423,
                    "end": 437
                  }
                ],
                "start": 421,
                "end": 439
              },
              "expression": false,
              "start": 418,
              "end": 439
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 398,
            "end": 439
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 448
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
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 455,
                        "end": 457
                      },
                      "id": null,
                      "generator": false,
                      "start": 449,
                      "end": 457
                    }
                  ],
                  "optional": false,
                  "start": 445,
                  "end": 458
                },
                "start": 444,
                "end": 458
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 468,
                      "end": 471
                    },
                    "start": 466,
                    "end": 471
                  },
                  "start": 465,
                  "end": 471
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 473,
                "end": 475
              },
              "expression": false,
              "start": 464,
              "end": 475
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 444,
            "end": 475
          },
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 481,
                    "end": 484
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
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 493
                      },
                      "id": null,
                      "generator": false,
                      "start": 485,
                      "end": 493
                    }
                  ],
                  "optional": false,
                  "start": 481,
                  "end": 494
                },
                "start": 480,
                "end": 494
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 496
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 498,
                "end": 501
              },
              "start": 496,
              "end": 501
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
            "start": 480,
            "end": 502
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 508,
                    "end": 511
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
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 518,
                        "end": 520
                      },
                      "id": null,
                      "generator": false,
                      "start": 512,
                      "end": 520
                    }
                  ],
                  "optional": false,
                  "start": 508,
                  "end": 521
                },
                "start": 507,
                "end": 521
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 532
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 534,
                "end": 537
              },
              "start": 532,
              "end": 537
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 507,
            "end": 538
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
              "start": 544,
              "end": 555
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
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 557,
                          "end": 560
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
                              "name": "C4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 567,
                              "end": 569
                            },
                            "id": null,
                            "generator": false,
                            "start": 561,
                            "end": 569
                          }
                        ],
                        "optional": false,
                        "start": 557,
                        "end": 570
                      },
                      "start": 556,
                      "end": 570
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 574,
                      "end": 577
                    },
                    "start": 572,
                    "end": 577
                  },
                  "start": 571,
                  "end": 577
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 579,
                "end": 581
              },
              "expression": false,
              "start": 555,
              "end": 581
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 544,
            "end": 581
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 600
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
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 602,
                          "end": 605
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
                              "name": "C4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 612,
                              "end": 614
                            },
                            "id": null,
                            "generator": false,
                            "start": 606,
                            "end": 614
                          }
                        ],
                        "optional": false,
                        "start": 602,
                        "end": 615
                      },
                      "start": 601,
                      "end": 615
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 619,
                      "end": 622
                    },
                    "start": 617,
                    "end": 622
                  },
                  "start": 616,
                  "end": 622
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 624,
                "end": 626
              },
              "expression": false,
              "start": 600,
              "end": 626
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 586,
            "end": 626
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 631,
              "end": 638
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
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 640,
                          "end": 643
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
                              "name": "C4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 650,
                              "end": 652
                            },
                            "id": null,
                            "generator": false,
                            "start": 644,
                            "end": 652
                          }
                        ],
                        "optional": false,
                        "start": 640,
                        "end": 653
                      },
                      "start": 639,
                      "end": 653
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 657,
                      "end": 660
                    },
                    "start": 655,
                    "end": 660
                  },
                  "start": 654,
                  "end": 660
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 662,
                "end": 664
              },
              "expression": false,
              "start": 638,
              "end": 664
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 631,
            "end": 664
          }
        ],
        "start": 149,
        "end": 666
      },
      "abstract": false,
      "declare": false,
      "start": 140,
      "end": 666
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null,
        "start": 683,
        "end": 685
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 693,
                    "end": 696
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 697,
                      "end": 699
                    }
                  ],
                  "optional": false,
                  "start": 693,
                  "end": 700
                },
                "start": 692,
                "end": 700
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 708,
              "end": 714
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
                "start": 717,
                "end": 719
              },
              "expression": false,
              "start": 714,
              "end": 719
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 692,
            "end": 719
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 728
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 729,
                      "end": 731
                    }
                  ],
                  "optional": false,
                  "start": 725,
                  "end": 732
                },
                "start": 724,
                "end": 732
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 745
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 757,
                        "end": 761
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 762,
                        "end": 763
                      },
                      "optional": false,
                      "computed": false,
                      "start": 757,
                      "end": 763
                    },
                    "start": 750,
                    "end": 764
                  }
                ],
                "start": 748,
                "end": 766
              },
              "expression": false,
              "start": 745,
              "end": 766
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 724,
            "end": 766
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 772,
                    "end": 775
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 776,
                      "end": 778
                    }
                  ],
                  "optional": false,
                  "start": 772,
                  "end": 779
                },
                "start": 771,
                "end": 779
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 792
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 796,
                      "end": 799
                    },
                    "start": 794,
                    "end": 799
                  },
                  "start": 793,
                  "end": 799
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 801,
                "end": 803
              },
              "expression": false,
              "start": 792,
              "end": 803
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 771,
            "end": 803
          },
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 812
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 813,
                      "end": 815
                    }
                  ],
                  "optional": false,
                  "start": 809,
                  "end": 816
                },
                "start": 808,
                "end": 816
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 825
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 827,
                "end": 830
              },
              "start": 825,
              "end": 830
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 808,
            "end": 831
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 837,
                    "end": 840
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 841,
                      "end": 843
                    }
                  ],
                  "optional": false,
                  "start": 837,
                  "end": 844
                },
                "start": 836,
                "end": 844
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 862
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 864,
                "end": 867
              },
              "start": 862,
              "end": 867
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 836,
            "end": 868
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 875,
                    "end": 878
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 879,
                      "end": 881
                    }
                  ],
                  "optional": false,
                  "start": 875,
                  "end": 882
                },
                "start": 874,
                "end": 882
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 889
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
                "start": 892,
                "end": 894
              },
              "expression": false,
              "start": 889,
              "end": 894
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 874,
            "end": 894
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 900,
                    "end": 903
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 904,
                      "end": 906
                    }
                  ],
                  "optional": false,
                  "start": 900,
                  "end": 907
                },
                "start": 899,
                "end": 907
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 913
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 925,
                        "end": 929
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 930,
                        "end": 931
                      },
                      "optional": false,
                      "computed": false,
                      "start": 925,
                      "end": 931
                    },
                    "start": 918,
                    "end": 932
                  }
                ],
                "start": 916,
                "end": 934
              },
              "expression": false,
              "start": 913,
              "end": 934
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 899,
            "end": 934
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 940,
                    "end": 943
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 944,
                      "end": 946
                    }
                  ],
                  "optional": false,
                  "start": 940,
                  "end": 947
                },
                "start": 939,
                "end": 947
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 952,
              "end": 953
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 957,
                      "end": 960
                    },
                    "start": 955,
                    "end": 960
                  },
                  "start": 954,
                  "end": 960
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 962,
                "end": 964
              },
              "expression": false,
              "start": 953,
              "end": 964
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 939,
            "end": 964
          },
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 970,
                    "end": 973
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 974,
                      "end": 976
                    }
                  ],
                  "optional": false,
                  "start": 970,
                  "end": 977
                },
                "start": 969,
                "end": 977
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 978,
              "end": 979
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 981,
                "end": 984
              },
              "start": 979,
              "end": 984
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
            "start": 969,
            "end": 985
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 991,
                    "end": 994
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 995,
                      "end": 997
                    }
                  ],
                  "optional": false,
                  "start": 991,
                  "end": 998
                },
                "start": 990,
                "end": 998
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1009
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1011,
                "end": 1014
              },
              "start": 1009,
              "end": 1014
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 990,
            "end": 1015
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
              "start": 1022,
              "end": 1033
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
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1035,
                          "end": 1038
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1039,
                            "end": 1041
                          }
                        ],
                        "optional": false,
                        "start": 1035,
                        "end": 1042
                      },
                      "start": 1034,
                      "end": 1042
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1046,
                      "end": 1049
                    },
                    "start": 1044,
                    "end": 1049
                  },
                  "start": 1043,
                  "end": 1049
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1051,
                "end": 1053
              },
              "expression": false,
              "start": 1033,
              "end": 1053
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1022,
            "end": 1053
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1072
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
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1074,
                          "end": 1077
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1078,
                            "end": 1080
                          }
                        ],
                        "optional": false,
                        "start": 1074,
                        "end": 1081
                      },
                      "start": 1073,
                      "end": 1081
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1085,
                      "end": 1088
                    },
                    "start": 1083,
                    "end": 1088
                  },
                  "start": 1082,
                  "end": 1088
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1090,
                "end": 1092
              },
              "expression": false,
              "start": 1072,
              "end": 1092
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1058,
            "end": 1092
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1097,
              "end": 1104
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
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1106,
                          "end": 1109
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1110,
                            "end": 1112
                          }
                        ],
                        "optional": false,
                        "start": 1106,
                        "end": 1113
                      },
                      "start": 1105,
                      "end": 1113
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1117,
                      "end": 1120
                    },
                    "start": 1115,
                    "end": 1120
                  },
                  "start": 1114,
                  "end": 1120
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1122,
                "end": 1124
              },
              "expression": false,
              "start": 1104,
              "end": 1124
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1097,
            "end": 1124
          }
        ],
        "start": 686,
        "end": 1126
      },
      "abstract": false,
      "declare": false,
      "start": 677,
      "end": 1126
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1143,
        "end": 1145
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1153,
                    "end": 1156
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1164,
                          "end": 1166
                        },
                        "id": null,
                        "generator": false,
                        "start": 1158,
                        "end": 1166
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1157,
                      "end": 1169
                    }
                  ],
                  "optional": false,
                  "start": 1153,
                  "end": 1170
                },
                "start": 1152,
                "end": 1170
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1184
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
                "start": 1187,
                "end": 1189
              },
              "expression": false,
              "start": 1184,
              "end": 1189
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1152,
            "end": 1189
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1195,
                    "end": 1198
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1206,
                          "end": 1208
                        },
                        "id": null,
                        "generator": false,
                        "start": 1200,
                        "end": 1208
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1199,
                      "end": 1211
                    }
                  ],
                  "optional": false,
                  "start": 1195,
                  "end": 1212
                },
                "start": 1194,
                "end": 1212
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 1224,
              "end": 1225
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1237,
                        "end": 1241
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1242,
                        "end": 1243
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1237,
                      "end": 1243
                    },
                    "start": 1230,
                    "end": 1244
                  }
                ],
                "start": 1228,
                "end": 1246
              },
              "expression": false,
              "start": 1225,
              "end": 1246
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1194,
            "end": 1246
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1255
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1263,
                          "end": 1265
                        },
                        "id": null,
                        "generator": false,
                        "start": 1257,
                        "end": 1265
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1256,
                      "end": 1268
                    }
                  ],
                  "optional": false,
                  "start": 1252,
                  "end": 1269
                },
                "start": 1251,
                "end": 1269
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1282
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1286,
                      "end": 1289
                    },
                    "start": 1284,
                    "end": 1289
                  },
                  "start": 1283,
                  "end": 1289
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1291,
                "end": 1293
              },
              "expression": false,
              "start": 1282,
              "end": 1293
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1251,
            "end": 1293
          },
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1299,
                    "end": 1302
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1310,
                          "end": 1312
                        },
                        "id": null,
                        "generator": false,
                        "start": 1304,
                        "end": 1312
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1303,
                      "end": 1315
                    }
                  ],
                  "optional": false,
                  "start": 1299,
                  "end": 1316
                },
                "start": 1298,
                "end": 1316
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1324,
              "end": 1325
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1327,
                "end": 1330
              },
              "start": 1325,
              "end": 1330
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1298,
            "end": 1331
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1337,
                    "end": 1340
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1348,
                          "end": 1350
                        },
                        "id": null,
                        "generator": false,
                        "start": 1342,
                        "end": 1350
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1341,
                      "end": 1353
                    }
                  ],
                  "optional": false,
                  "start": 1337,
                  "end": 1354
                },
                "start": 1336,
                "end": 1354
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1371,
              "end": 1372
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1374,
                "end": 1377
              },
              "start": 1372,
              "end": 1377
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 1336,
            "end": 1378
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1385,
                    "end": 1388
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1396,
                          "end": 1398
                        },
                        "id": null,
                        "generator": false,
                        "start": 1390,
                        "end": 1398
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1389,
                      "end": 1401
                    }
                  ],
                  "optional": false,
                  "start": 1385,
                  "end": 1402
                },
                "start": 1384,
                "end": 1402
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1403,
              "end": 1409
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
                "start": 1412,
                "end": 1414
              },
              "expression": false,
              "start": 1409,
              "end": 1414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1384,
            "end": 1414
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1420,
                    "end": 1423
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1431,
                          "end": 1433
                        },
                        "id": null,
                        "generator": false,
                        "start": 1425,
                        "end": 1433
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1424,
                      "end": 1436
                    }
                  ],
                  "optional": false,
                  "start": 1420,
                  "end": 1437
                },
                "start": 1419,
                "end": 1437
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 1442,
              "end": 1443
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1455,
                        "end": 1459
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1460,
                        "end": 1461
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1455,
                      "end": 1461
                    },
                    "start": 1448,
                    "end": 1462
                  }
                ],
                "start": 1446,
                "end": 1464
              },
              "expression": false,
              "start": 1443,
              "end": 1464
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1419,
            "end": 1464
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1470,
                    "end": 1473
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1481,
                          "end": 1483
                        },
                        "id": null,
                        "generator": false,
                        "start": 1475,
                        "end": 1483
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1474,
                      "end": 1486
                    }
                  ],
                  "optional": false,
                  "start": 1470,
                  "end": 1487
                },
                "start": 1469,
                "end": 1487
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1492,
              "end": 1493
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1497,
                      "end": 1500
                    },
                    "start": 1495,
                    "end": 1500
                  },
                  "start": 1494,
                  "end": 1500
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1502,
                "end": 1504
              },
              "expression": false,
              "start": 1493,
              "end": 1504
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1469,
            "end": 1504
          },
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
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1510,
                    "end": 1513
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1521,
                          "end": 1523
                        },
                        "id": null,
                        "generator": false,
                        "start": 1515,
                        "end": 1523
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1514,
                      "end": 1526
                    }
                  ],
                  "optional": false,
                  "start": 1510,
                  "end": 1527
                },
                "start": 1509,
                "end": 1527
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1528,
              "end": 1529
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1531,
                "end": 1534
              },
              "start": 1529,
              "end": 1534
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
            "start": 1509,
            "end": 1535
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1541,
                    "end": 1544
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1552,
                          "end": 1554
                        },
                        "id": null,
                        "generator": false,
                        "start": 1546,
                        "end": 1554
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1545,
                      "end": 1557
                    }
                  ],
                  "optional": false,
                  "start": 1541,
                  "end": 1558
                },
                "start": 1540,
                "end": 1558
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1568,
              "end": 1569
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1571,
                "end": 1574
              },
              "start": 1569,
              "end": 1574
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 1540,
            "end": 1575
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
              "start": 1582,
              "end": 1593
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
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1595,
                          "end": 1598
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C6",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1606,
                                "end": 1608
                              },
                              "id": null,
                              "generator": false,
                              "start": 1600,
                              "end": 1608
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1599,
                            "end": 1611
                          }
                        ],
                        "optional": false,
                        "start": 1595,
                        "end": 1612
                      },
                      "start": 1594,
                      "end": 1612
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1616,
                      "end": 1619
                    },
                    "start": 1614,
                    "end": 1619
                  },
                  "start": 1613,
                  "end": 1619
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1621,
                "end": 1623
              },
              "expression": false,
              "start": 1593,
              "end": 1623
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1582,
            "end": 1623
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1635,
              "end": 1642
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
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1644,
                          "end": 1647
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C6",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1655,
                                "end": 1657
                              },
                              "id": null,
                              "generator": false,
                              "start": 1649,
                              "end": 1657
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1648,
                            "end": 1660
                          }
                        ],
                        "optional": false,
                        "start": 1644,
                        "end": 1661
                      },
                      "start": 1643,
                      "end": 1661
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1665,
                      "end": 1668
                    },
                    "start": 1663,
                    "end": 1668
                  },
                  "start": 1662,
                  "end": 1668
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1670,
                "end": 1672
              },
              "expression": false,
              "start": 1642,
              "end": 1672
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1628,
            "end": 1672
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1677,
              "end": 1684
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
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1686,
                          "end": 1689
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C6",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1697,
                                "end": 1699
                              },
                              "id": null,
                              "generator": false,
                              "start": 1691,
                              "end": 1699
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1690,
                            "end": 1702
                          }
                        ],
                        "optional": false,
                        "start": 1686,
                        "end": 1703
                      },
                      "start": 1685,
                      "end": 1703
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1707,
                      "end": 1710
                    },
                    "start": 1705,
                    "end": 1710
                  },
                  "start": 1704,
                  "end": 1710
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1712,
                "end": 1714
              },
              "expression": false,
              "start": 1684,
              "end": 1714
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1677,
            "end": 1714
          }
        ],
        "start": 1146,
        "end": 1716
      },
      "abstract": false,
      "declare": false,
      "start": 1137,
      "end": 1716
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1716
}
```
