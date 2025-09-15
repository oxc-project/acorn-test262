__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bugs",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 27,
              "end": 32
            },
            "abstract": false,
            "declare": false,
            "start": 19,
            "end": 32
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bug2",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 155
            },
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
                    "start": 164,
                    "end": 170
                  },
                  "start": 163,
                  "end": 170
                },
                "start": 156,
                "end": 170
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 179
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 180,
                      "end": 183
                    },
                    "start": 180,
                    "end": 185
                  },
                  "start": 179,
                  "end": 185
                },
                "value": null,
                "start": 172,
                "end": 185
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 187,
                "end": 193
              },
              "start": 186,
              "end": 193
            },
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 210
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "message",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 212,
                            "end": 219
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "replace",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 220,
                            "end": 227
                          },
                          "optional": false,
                          "computed": false,
                          "start": 212,
                          "end": 227
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "/\\{(\\d+)\\}/g",
                            "regex": {
                              "pattern": "\\{(\\d+)\\}",
                              "flags": "g"
                            },
                            "start": 228,
                            "end": 240
                          },
                          {
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
                                "name": "match",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 251,
                                "end": 256
                              },
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "rest",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 261,
                                  "end": 265
                                },
                                "optional": false,
                                "typeAnnotation": null,
                                "value": null,
                                "start": 258,
                                "end": 265
                              }
                            ],
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
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 279,
                                        "end": 284
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "rest",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 286,
                                          "end": 290
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 291,
                                          "end": 292
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 286,
                                        "end": 293
                                      },
                                      "definite": false,
                                      "start": 279,
                                      "end": 293
                                    }
                                  ],
                                  "declare": false,
                                  "start": 275,
                                  "end": 294
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "operator": "typeof",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "args",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 315,
                                            "end": 319
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 320,
                                            "end": 325
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 315,
                                          "end": 326
                                        },
                                        "prefix": true,
                                        "start": 308,
                                        "end": 326
                                      },
                                      "operator": "!==",
                                      "right": {
                                        "type": "Literal",
                                        "value": "undefined",
                                        "raw": "'undefined'",
                                        "start": 331,
                                        "end": 342
                                      },
                                      "start": 308,
                                      "end": 342
                                    },
                                    "consequent": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "args",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 353,
                                        "end": 357
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 358,
                                        "end": 363
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 353,
                                      "end": 364
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "match",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 375,
                                      "end": 380
                                    },
                                    "start": 308,
                                    "end": 380
                                  },
                                  "start": 301,
                                  "end": 381
                                }
                              ],
                              "start": 267,
                              "end": 387
                            },
                            "expression": false,
                            "start": 242,
                            "end": 387
                          }
                        ],
                        "optional": false,
                        "start": 212,
                        "end": 388
                      },
                      "definite": false,
                      "start": 204,
                      "end": 388
                    }
                  ],
                  "declare": false,
                  "start": 200,
                  "end": 389
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 401,
                    "end": 407
                  },
                  "start": 394,
                  "end": 408
                }
              ],
              "start": 194,
              "end": 412
            },
            "expression": false,
            "start": 142,
            "end": 412
          }
        ],
        "start": 15,
        "end": 414
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 414
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bug3",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 429
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSStringKeyword",
                      "start": 435,
                      "end": 441
                    },
                    "start": 434,
                    "end": 441
                  },
                  "start": 433,
                  "end": 441
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 444,
                  "end": 450
                },
                "start": 442,
                "end": 450
              },
              "start": 432,
              "end": 450
            },
            "start": 431,
            "end": 450
          },
          "start": 430,
          "end": 450
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 462
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 463,
                  "end": 466
                }
              ],
              "optional": false,
              "start": 461,
              "end": 467
            },
            "start": 454,
            "end": 467
          }
        ],
        "start": 452,
        "end": 469
      },
      "expression": false,
      "start": 416,
      "end": 469
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fprime",
        "optional": false,
        "typeAnnotation": null,
        "start": 480,
        "end": 486
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
              "type": "TSStringKeyword",
              "start": 489,
              "end": 495
            },
            "start": 488,
            "end": 495
          },
          "start": 487,
          "end": 495
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 497,
          "end": 503
        },
        "start": 496,
        "end": 503
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 514
            },
            "start": 506,
            "end": 515
          }
        ],
        "start": 504,
        "end": 517
      },
      "expression": false,
      "start": 471,
      "end": 517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bug3",
          "optional": false,
          "typeAnnotation": null,
          "start": 519,
          "end": 523
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fprime",
            "optional": false,
            "typeAnnotation": null,
            "start": 524,
            "end": 530
          }
        ],
        "optional": false,
        "start": 519,
        "end": 531
      },
      "directive": null,
      "start": 519,
      "end": 532
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bug3",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 538
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 550,
                    "end": 556
                  },
                  "start": 549,
                  "end": 556
                },
                "start": 548,
                "end": 556
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 558,
                "end": 564
              },
              "start": 557,
              "end": 564
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 575
                  },
                  "start": 567,
                  "end": 576
                }
              ],
              "start": 565,
              "end": 578
            },
            "expression": false,
            "start": 539,
            "end": 578
          }
        ],
        "optional": false,
        "start": 534,
        "end": 579
      },
      "directive": null,
      "start": 534,
      "end": 580
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 580
}
```
