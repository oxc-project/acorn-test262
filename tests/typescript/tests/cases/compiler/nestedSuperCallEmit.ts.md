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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 74
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 92
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
                  "name": "shouldThrow",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 106,
                      "end": 113
                    },
                    "start": 104,
                    "end": 113
                  },
                  "start": 93,
                  "end": 113
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
                      "name": "shouldThrow",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 140
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 166,
                              "end": 171
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Please retry",
                                "raw": "'Please retry'",
                                "start": 172,
                                "end": 186
                              }
                            ],
                            "start": 162,
                            "end": 187
                          },
                          "start": 156,
                          "end": 188
                        }
                      ],
                      "start": 142,
                      "end": 198
                    },
                    "alternate": {
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
                                "start": 218,
                                "end": 225
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 226,
                                "end": 229
                              },
                              "optional": false,
                              "computed": false,
                              "start": 218,
                              "end": 229
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "OK",
                                "raw": "'OK'",
                                "start": 230,
                                "end": 234
                              }
                            ],
                            "optional": false,
                            "start": 218,
                            "end": 235
                          },
                          "directive": null,
                          "start": 218,
                          "end": 236
                        }
                      ],
                      "start": 204,
                      "end": 246
                    },
                    "start": 125,
                    "end": 246
                  }
                ],
                "start": 115,
                "end": 252
              },
              "expression": false,
              "start": 92,
              "end": 252
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 81,
            "end": 252
          }
        ],
        "start": 75,
        "end": 254
      },
      "abstract": true,
      "declare": false,
      "start": 56,
      "end": 254
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 265
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 277
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 295
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
                    "type": "TryStatement",
                    "block": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 326,
                              "end": 331
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 332,
                                "end": 336
                              }
                            ],
                            "optional": false,
                            "start": 326,
                            "end": 337
                          },
                          "directive": null,
                          "start": 326,
                          "end": 338
                        }
                      ],
                      "start": 312,
                      "end": 348
                    },
                    "handler": {
                      "type": "CatchClause",
                      "param": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 359,
                            "end": 366
                          },
                          "start": 357,
                          "end": 366
                        },
                        "start": 356,
                        "end": 366
                      },
                      "body": {
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
                                  "start": 382,
                                  "end": 389
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 390,
                                  "end": 393
                                },
                                "optional": false,
                                "computed": false,
                                "start": 382,
                                "end": 393
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Literal",
                                    "value": "Error: ",
                                    "raw": "'Error: '",
                                    "start": 394,
                                    "end": 403
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 407,
                                        "end": 408
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Error",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 412,
                                          "end": 417
                                        },
                                        "typeArguments": null,
                                        "start": 412,
                                        "end": 417
                                      },
                                      "start": 407,
                                      "end": 417
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "message",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 419,
                                      "end": 426
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 406,
                                    "end": 426
                                  },
                                  "start": 394,
                                  "end": 426
                                }
                              ],
                              "optional": false,
                              "start": 382,
                              "end": 427
                            },
                            "directive": null,
                            "start": 382,
                            "end": 428
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 462,
                                "end": 467
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 468,
                                  "end": 473
                                }
                              ],
                              "optional": false,
                              "start": 462,
                              "end": 474
                            },
                            "directive": null,
                            "start": 462,
                            "end": 475
                          }
                        ],
                        "start": 368,
                        "end": 485
                      },
                      "start": 349,
                      "end": 485
                    },
                    "finalizer": null,
                    "start": 308,
                    "end": 485
                  }
                ],
                "start": 298,
                "end": 491
              },
              "expression": false,
              "start": 295,
              "end": 491
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 284,
            "end": 491
          }
        ],
        "start": 278,
        "end": 493
      },
      "abstract": false,
      "declare": false,
      "start": 256,
      "end": 493
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 502
        },
        "typeArguments": null,
        "arguments": [],
        "start": 495,
        "end": 504
      },
      "directive": null,
      "start": 495,
      "end": 505
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 505
}
```
