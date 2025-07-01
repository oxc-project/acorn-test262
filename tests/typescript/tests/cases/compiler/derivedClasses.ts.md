__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Red",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 23
      },
      "superTypeArguments": null,
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
              "name": "shade",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 42
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getHue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 57,
                          "end": 63
                        },
                        "init": {
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 81,
                                      "end": 85
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "hue",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 86,
                                      "end": 89
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 81,
                                    "end": 89
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 81,
                                  "end": 91
                                },
                                "start": 74,
                                "end": 92
                              }
                            ],
                            "start": 72,
                            "end": 94
                          },
                          "id": null,
                          "generator": false,
                          "start": 66,
                          "end": 94
                        },
                        "definite": false,
                        "start": 57,
                        "end": 94
                      }
                    ],
                    "declare": false,
                    "start": 53,
                    "end": 95
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getHue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 114
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 108,
                        "end": 116
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": " red",
                        "raw": "\" red\"",
                        "start": 119,
                        "end": 125
                      },
                      "start": 108,
                      "end": 125
                    },
                    "start": 101,
                    "end": 126
                  }
                ],
                "start": 45,
                "end": 133
              },
              "expression": false,
              "start": 42,
              "end": 133
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 30,
            "end": 133
          }
        ],
        "start": 24,
        "end": 135
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 135
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shade",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 167
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
                      "value": "some shade",
                      "raw": "\"some shade\"",
                      "start": 179,
                      "end": 191
                    },
                    "start": 172,
                    "end": 192
                  }
                ],
                "start": 170,
                "end": 194
              },
              "expression": false,
              "start": 167,
              "end": 194
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 155,
            "end": 194
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hue",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 209
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
                      "value": "some hue",
                      "raw": "\"some hue\"",
                      "start": 221,
                      "end": 231
                    },
                    "start": 214,
                    "end": 232
                  }
                ],
                "start": 212,
                "end": 234
              },
              "expression": false,
              "start": 209,
              "end": 234
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 199,
            "end": 234
          }
        ],
        "start": 149,
        "end": 236
      },
      "abstract": false,
      "declare": false,
      "start": 137,
      "end": 236
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Blue",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 248
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 262
      },
      "superTypeArguments": null,
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
              "name": "shade",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 286
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getHue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 307
                        },
                        "init": {
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 325,
                                      "end": 329
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "hue",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 330,
                                      "end": 333
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 325,
                                    "end": 333
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 325,
                                  "end": 335
                                },
                                "start": 318,
                                "end": 336
                              }
                            ],
                            "start": 316,
                            "end": 338
                          },
                          "id": null,
                          "generator": false,
                          "start": 310,
                          "end": 338
                        },
                        "definite": false,
                        "start": 301,
                        "end": 338
                      }
                    ],
                    "declare": false,
                    "start": 297,
                    "end": 339
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getHue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 352,
                          "end": 358
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 352,
                        "end": 360
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": " blue",
                        "raw": "\" blue\"",
                        "start": 363,
                        "end": 370
                      },
                      "start": 352,
                      "end": 370
                    },
                    "start": 345,
                    "end": 371
                  }
                ],
                "start": 289,
                "end": 378
              },
              "expression": false,
              "start": 286,
              "end": 378
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 274,
            "end": 378
          }
        ],
        "start": 263,
        "end": 380
      },
      "abstract": false,
      "declare": false,
      "start": 238,
      "end": 380
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 387
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 397
            },
            "typeArguments": null,
            "arguments": [],
            "start": 390,
            "end": 399
          },
          "definite": false,
          "start": 386,
          "end": 399
        }
      ],
      "declare": false,
      "start": 382,
      "end": 400
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 406
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 417
            },
            "typeArguments": null,
            "arguments": [],
            "start": 409,
            "end": 419
          },
          "definite": false,
          "start": 405,
          "end": 419
        }
      ],
      "declare": false,
      "start": 401,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 423
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "shade",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 429
          },
          "optional": false,
          "computed": false,
          "start": 422,
          "end": 429
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 422,
        "end": 431
      },
      "directive": null,
      "start": 422,
      "end": 432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 434
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "hue",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 438
          },
          "optional": false,
          "computed": false,
          "start": 433,
          "end": 438
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 433,
        "end": 440
      },
      "directive": null,
      "start": 433,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 443
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "shade",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 449
          },
          "optional": false,
          "computed": false,
          "start": 442,
          "end": 449
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 442,
        "end": 451
      },
      "directive": null,
      "start": 442,
      "end": 452
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 454
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "hue",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 458
          },
          "optional": false,
          "computed": false,
          "start": 453,
          "end": 458
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 453,
        "end": 460
      },
      "directive": null,
      "start": 453,
      "end": 461
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 463
}
```
