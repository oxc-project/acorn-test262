__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IData",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 37
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 47,
                "end": 54
              },
              "start": 45,
              "end": 54
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 54
          }
        ],
        "start": 38,
        "end": 56
      },
      "declare": false,
      "start": 22,
      "end": 56
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 79
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDependencies",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 93
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 93
          }
        ],
        "start": 79,
        "end": 94
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "getter",
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
                  "name": "deps",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TDependencies",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 126
                      },
                      "typeArguments": null,
                      "start": 113,
                      "end": 126
                    },
                    "start": 111,
                    "end": 126
                  },
                  "start": 107,
                  "end": 126
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 139
                      },
                      "typeArguments": null,
                      "start": 134,
                      "end": 139
                    },
                    "start": 132,
                    "end": 139
                  },
                  "start": 128,
                  "end": 139
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 144,
                  "end": 147
                },
                "start": 141,
                "end": 147
              },
              "start": 106,
              "end": 147
            },
            "start": 104,
            "end": 147
          },
          "start": 98,
          "end": 147
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "deps",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDependencies",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 170
              },
              "typeArguments": null,
              "start": 157,
              "end": 170
            },
            "start": 155,
            "end": 170
          },
          "start": 151,
          "end": 170
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 175,
          "end": 178
        },
        "start": 173,
        "end": 178
      },
      "body": null,
      "expression": false,
      "start": 58,
      "end": 178
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
            "name": "DEPS",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 191
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
                  "start": 198,
                  "end": 201
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 203,
                  "end": 204
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 198,
                "end": 204
              }
            ],
            "start": 194,
            "end": 206
          },
          "definite": false,
          "start": 187,
          "end": 206
        }
      ],
      "declare": false,
      "start": 181,
      "end": 206
    },
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
          "start": 208,
          "end": 212
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
                "name": "deps",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 221
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 227
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 242
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "deps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 264,
                              "end": 268
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 269,
                              "end": 272
                            },
                            "optional": false,
                            "computed": false,
                            "start": 264,
                            "end": 272
                          },
                          "start": 257,
                          "end": 272
                        }
                      ],
                      "start": 255,
                      "end": 274
                    },
                    "expression": false,
                    "start": 244,
                    "end": 274
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 239,
                  "end": 274
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 283
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 289
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 290,
                      "end": 293
                    },
                    "optional": false,
                    "computed": false,
                    "start": 285,
                    "end": 293
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 280,
                  "end": 293
                }
              ],
              "start": 233,
              "end": 297
            },
            "id": null,
            "generator": false,
            "start": 216,
            "end": 298
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DEPS",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 306
          }
        ],
        "optional": false,
        "start": 208,
        "end": 308
      },
      "directive": null,
      "start": 208,
      "end": 309
    },
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
          "start": 311,
          "end": 315
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
                "name": "deps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DEPS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 337
                    },
                    "typeArguments": null,
                    "start": 326,
                    "end": 337
                  },
                  "start": 324,
                  "end": 337
                },
                "start": 320,
                "end": 337
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 343
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 358
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "deps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 380,
                              "end": 384
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 385,
                              "end": 388
                            },
                            "optional": false,
                            "computed": false,
                            "start": 380,
                            "end": 388
                          },
                          "start": 373,
                          "end": 388
                        }
                      ],
                      "start": 371,
                      "end": 390
                    },
                    "expression": false,
                    "start": 360,
                    "end": 390
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 355,
                  "end": 390
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 399
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 405
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 409
                    },
                    "optional": false,
                    "computed": false,
                    "start": 401,
                    "end": 409
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 396,
                  "end": 409
                }
              ],
              "start": 349,
              "end": 413
            },
            "id": null,
            "generator": false,
            "start": 319,
            "end": 414
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DEPS",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 422
          }
        ],
        "optional": false,
        "start": 311,
        "end": 424
      },
      "directive": null,
      "start": 311,
      "end": 425
    },
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
          "start": 427,
          "end": 431
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
                "name": "deps",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 440
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 442,
                "end": 446
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 461
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "deps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 469,
                        "end": 473
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 474,
                        "end": 477
                      },
                      "optional": false,
                      "computed": false,
                      "start": 469,
                      "end": 477
                    },
                    "id": null,
                    "generator": false,
                    "start": 463,
                    "end": 477
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 458,
                  "end": 477
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 486
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 488,
                      "end": 492
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 493,
                      "end": 496
                    },
                    "optional": false,
                    "computed": false,
                    "start": 488,
                    "end": 496
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 483,
                  "end": 496
                }
              ],
              "start": 452,
              "end": 500
            },
            "id": null,
            "generator": false,
            "start": 435,
            "end": 501
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DEPS",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 509
          }
        ],
        "optional": false,
        "start": 427,
        "end": 511
      },
      "directive": null,
      "start": 427,
      "end": 512
    },
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
          "start": 514,
          "end": 518
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
                "name": "deps",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 527
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 533
              }
            ],
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
                          "name": "fn1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 562
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
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "deps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 574,
                                    "end": 578
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 579,
                                    "end": 582
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 574,
                                  "end": 582
                                },
                                "start": 567,
                                "end": 582
                              }
                            ],
                            "start": 565,
                            "end": 584
                          },
                          "expression": false,
                          "start": 562,
                          "end": 584
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 559,
                        "end": 584
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 592,
                          "end": 595
                        },
                        "value": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 597,
                            "end": 601
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 602,
                            "end": 605
                          },
                          "optional": false,
                          "computed": false,
                          "start": 597,
                          "end": 605
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 592,
                        "end": 605
                      }
                    ],
                    "start": 551,
                    "end": 611
                  },
                  "start": 544,
                  "end": 611
                }
              ],
              "start": 538,
              "end": 615
            },
            "id": null,
            "generator": false,
            "start": 522,
            "end": 615
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DEPS",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 623
          }
        ],
        "optional": false,
        "start": 514,
        "end": 625
      },
      "directive": null,
      "start": 514,
      "end": 626
    },
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
          "start": 628,
          "end": 632
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
                "name": "deps",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 641
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 653,
                    "end": 656
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "deps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 668,
                              "end": 672
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 673,
                              "end": 676
                            },
                            "optional": false,
                            "computed": false,
                            "start": 668,
                            "end": 676
                          },
                          "start": 661,
                          "end": 676
                        }
                      ],
                      "start": 659,
                      "end": 678
                    },
                    "expression": false,
                    "start": 656,
                    "end": 678
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 653,
                  "end": 678
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 684,
                    "end": 687
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 689,
                    "end": 690
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 684,
                  "end": 690
                }
              ],
              "start": 647,
              "end": 694
            },
            "id": null,
            "generator": false,
            "start": 636,
            "end": 695
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DEPS",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 703
          }
        ],
        "optional": false,
        "start": 628,
        "end": 705
      },
      "directive": null,
      "start": 628,
      "end": 706
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 706
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31,
    "range": [
      22,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "IData",
    "start": 32,
    "end": 37,
    "range": [
      32,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 42,
    "end": 45,
    "range": [
      42,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 47,
    "end": 54,
    "range": [
      47,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 58,
    "end": 65,
    "range": [
      58,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 66,
    "end": 74,
    "range": [
      66,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 75,
    "end": 79,
    "range": [
      75,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "TDependencies",
    "start": 80,
    "end": 93,
    "range": [
      80,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 98,
    "end": 104,
    "range": [
      98,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 107,
    "end": 111,
    "range": [
      107,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "TDependencies",
    "start": 113,
    "end": 126,
    "range": [
      113,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 128,
    "end": 132,
    "range": [
      128,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "IData",
    "start": 134,
    "end": 139,
    "range": [
      134,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 141,
    "end": 143,
    "range": [
      141,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 144,
    "end": 147,
    "range": [
      144,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 151,
    "end": 155,
    "range": [
      151,
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
    "value": "TDependencies",
    "start": 157,
    "end": 170,
    "range": [
      157,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 181,
    "end": 186,
    "range": [
      181,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "DEPS",
    "start": 187,
    "end": 191,
    "range": [
      187,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 198,
    "end": 201,
    "range": [
      198,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 208,
    "end": 212,
    "range": [
      208,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 217,
    "end": 221,
    "range": [
      217,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 223,
    "end": 227,
    "range": [
      223,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 229,
    "end": 231,
    "range": [
      229,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 239,
    "end": 242,
    "range": [
      239,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 244,
    "end": 252,
    "range": [
      244,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 257,
    "end": 263,
    "range": [
      257,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 264,
    "end": 268,
    "range": [
      264,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 269,
    "end": 272,
    "range": [
      269,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 280,
    "end": 283,
    "range": [
      280,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 285,
    "end": 289,
    "range": [
      285,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 290,
    "end": 293,
    "range": [
      290,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "DEPS",
    "start": 302,
    "end": 306,
    "range": [
      302,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 311,
    "end": 315,
    "range": [
      311,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 320,
    "end": 324,
    "range": [
      320,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 326,
    "end": 332,
    "range": [
      326,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "DEPS",
    "start": 333,
    "end": 337,
    "range": [
      333,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 339,
    "end": 343,
    "range": [
      339,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 345,
    "end": 347,
    "range": [
      345,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 355,
    "end": 358,
    "range": [
      355,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 360,
    "end": 368,
    "range": [
      360,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 373,
    "end": 379,
    "range": [
      373,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 380,
    "end": 384,
    "range": [
      380,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 385,
    "end": 388,
    "range": [
      385,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 396,
    "end": 399,
    "range": [
      396,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 401,
    "end": 405,
    "range": [
      401,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 406,
    "end": 409,
    "range": [
      406,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "DEPS",
    "start": 418,
    "end": 422,
    "range": [
      418,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 427,
    "end": 431,
    "range": [
      427,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 436,
    "end": 440,
    "range": [
      436,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 442,
    "end": 446,
    "range": [
      442,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 448,
    "end": 450,
    "range": [
      448,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 458,
    "end": 461,
    "range": [
      458,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 466,
    "end": 468,
    "range": [
      466,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 469,
    "end": 473,
    "range": [
      469,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 474,
    "end": 477,
    "range": [
      474,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 483,
    "end": 486,
    "range": [
      483,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 488,
    "end": 492,
    "range": [
      488,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 493,
    "end": 496,
    "range": [
      493,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "DEPS",
    "start": 505,
    "end": 509,
    "range": [
      505,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 514,
    "end": 518,
    "range": [
      514,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 523,
    "end": 527,
    "range": [
      523,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 529,
    "end": 533,
    "range": [
      529,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 535,
    "end": 537,
    "range": [
      535,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 544,
    "end": 550,
    "range": [
      544,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 559,
    "end": 562,
    "range": [
      559,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 567,
    "end": 573,
    "range": [
      567,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 574,
    "end": 578,
    "range": [
      574,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 579,
    "end": 582,
    "range": [
      579,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 592,
    "end": 595,
    "range": [
      592,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 597,
    "end": 601,
    "range": [
      597,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 602,
    "end": 605,
    "range": [
      602,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "DEPS",
    "start": 619,
    "end": 623,
    "range": [
      619,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 628,
    "end": 632,
    "range": [
      628,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 637,
    "end": 641,
    "range": [
      637,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 643,
    "end": 645,
    "range": [
      643,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 653,
    "end": 656,
    "range": [
      653,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 661,
    "end": 667,
    "range": [
      661,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "deps",
    "start": 668,
    "end": 672,
    "range": [
      668,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 673,
    "end": 676,
    "range": [
      673,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 684,
    "end": 687,
    "range": [
      684,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "DEPS",
    "start": 699,
    "end": 703,
    "range": [
      699,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  }
]
```
