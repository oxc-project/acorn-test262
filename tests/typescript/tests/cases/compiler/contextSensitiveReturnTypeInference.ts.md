__ESTREE_TEST__:PASS:
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
