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
        "name": "ImmediatelyFix",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 176
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
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 190
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 191,
                  "end": 192
                }
              ],
              "start": 190,
              "end": 193
            },
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 207
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 208,
                            "end": 209
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 208,
                          "end": 209
                        }
                      ],
                      "start": 207,
                      "end": 210
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 218,
                                      "end": 219
                                    },
                                    "typeArguments": null,
                                    "start": 218,
                                    "end": 219
                                  },
                                  "start": 216,
                                  "end": 219
                                },
                                "start": 215,
                                "end": 219
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 224,
                                  "end": 225
                                },
                                "typeArguments": null,
                                "start": 224,
                                "end": 225
                              },
                              "start": 221,
                              "end": 225
                            },
                            "start": 214,
                            "end": 225
                          },
                          "start": 212,
                          "end": 225
                        },
                        "start": 211,
                        "end": 225
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 248,
                              "end": 249
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 250,
                                "end": 254
                              }
                            ],
                            "optional": false,
                            "start": 248,
                            "end": 255
                          },
                          "start": 241,
                          "end": 256
                        }
                      ],
                      "start": 227,
                      "end": 266
                    },
                    "expression": false,
                    "start": 207,
                    "end": 266
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 204,
                  "end": 266
                }
              ],
              "start": 194,
              "end": 272
            },
            "abstract": false,
            "declare": false,
            "start": 183,
            "end": 272
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 283
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 291
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 292,
                        "end": 298
                      }
                    ],
                    "start": 291,
                    "end": 299
                  },
                  "arguments": [],
                  "start": 286,
                  "end": 301
                },
                "definite": false,
                "start": 282,
                "end": 301
              }
            ],
            "declare": false,
            "start": 278,
            "end": 302
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
                  "start": 311,
                  "end": 312
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 316
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 320
                    },
                    "optional": false,
                    "computed": false,
                    "start": 315,
                    "end": 320
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 322,
                              "end": 323
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 322,
                            "end": 323
                          }
                        ],
                        "start": 321,
                        "end": 324
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 328,
                                "end": 329
                              },
                              "typeArguments": null,
                              "start": 328,
                              "end": 329
                            },
                            "start": 326,
                            "end": 329
                          },
                          "start": 325,
                          "end": 329
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 334,
                        "end": 336
                      },
                      "id": null,
                      "generator": false,
                      "start": 321,
                      "end": 336
                    }
                  ],
                  "optional": false,
                  "start": 315,
                  "end": 337
                },
                "definite": false,
                "start": 311,
                "end": 337
              }
            ],
            "declare": false,
            "start": 307,
            "end": 338
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 355
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 358,
                      "end": 359
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 360,
                      "end": 363
                    },
                    "optional": false,
                    "computed": false,
                    "start": 358,
                    "end": 363
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 364,
                        "end": 370
                      }
                    ],
                    "start": 363,
                    "end": 371
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 373,
                              "end": 374
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 373,
                            "end": 374
                          }
                        ],
                        "start": 372,
                        "end": 375
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 379,
                                "end": 380
                              },
                              "typeArguments": null,
                              "start": 379,
                              "end": 380
                            },
                            "start": 377,
                            "end": 380
                          },
                          "start": 376,
                          "end": 380
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 385,
                        "end": 387
                      },
                      "id": null,
                      "generator": false,
                      "start": 372,
                      "end": 387
                    }
                  ],
                  "optional": false,
                  "start": 358,
                  "end": 388
                },
                "definite": false,
                "start": 353,
                "end": 388
              }
            ],
            "declare": false,
            "start": 349,
            "end": 389
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 411
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 414,
                      "end": 415
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 416,
                      "end": 419
                    },
                    "optional": false,
                    "computed": false,
                    "start": 414,
                    "end": 419
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
                          "start": 420,
                          "end": 421
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 425,
                        "end": 427
                      },
                      "id": null,
                      "generator": false,
                      "start": 420,
                      "end": 427
                    }
                  ],
                  "optional": false,
                  "start": 414,
                  "end": 428
                },
                "definite": false,
                "start": 409,
                "end": 428
              }
            ],
            "declare": false,
            "start": 405,
            "end": 429
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 449
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 451
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 450,
                  "end": 451
                }
              ],
              "start": 449,
              "end": 452
            },
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 463,
                    "end": 466
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
                        "name": "x",
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 474,
                                      "end": 475
                                    },
                                    "typeArguments": null,
                                    "start": 474,
                                    "end": 475
                                  },
                                  "start": 472,
                                  "end": 475
                                },
                                "start": 471,
                                "end": 475
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 480,
                                  "end": 481
                                },
                                "typeArguments": null,
                                "start": 480,
                                "end": 481
                              },
                              "start": 477,
                              "end": 481
                            },
                            "start": 470,
                            "end": 481
                          },
                          "start": 468,
                          "end": 481
                        },
                        "start": 467,
                        "end": 481
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 504,
                              "end": 505
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 506,
                                "end": 510
                              }
                            ],
                            "optional": false,
                            "start": 504,
                            "end": 511
                          },
                          "start": 497,
                          "end": 512
                        }
                      ],
                      "start": 483,
                      "end": 522
                    },
                    "expression": false,
                    "start": 466,
                    "end": 522
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 463,
                  "end": 522
                }
              ],
              "start": 453,
              "end": 528
            },
            "abstract": false,
            "declare": false,
            "start": 441,
            "end": 528
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 538,
                  "end": 540
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 549
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 550,
                        "end": 556
                      }
                    ],
                    "start": 549,
                    "end": 557
                  },
                  "arguments": [],
                  "start": 543,
                  "end": 559
                },
                "definite": false,
                "start": 538,
                "end": 559
              }
            ],
            "declare": false,
            "start": 534,
            "end": 560
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
                  "name": "ra",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 571
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 574,
                      "end": 576
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 577,
                      "end": 580
                    },
                    "optional": false,
                    "computed": false,
                    "start": 574,
                    "end": 580
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 582,
                              "end": 583
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 582,
                            "end": 583
                          }
                        ],
                        "start": 581,
                        "end": 584
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 588,
                                "end": 589
                              },
                              "typeArguments": null,
                              "start": 588,
                              "end": 589
                            },
                            "start": 586,
                            "end": 589
                          },
                          "start": 585,
                          "end": 589
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 594,
                        "end": 595
                      },
                      "id": null,
                      "generator": false,
                      "start": 581,
                      "end": 595
                    }
                  ],
                  "optional": false,
                  "start": 574,
                  "end": 596
                },
                "definite": false,
                "start": 569,
                "end": 596
              }
            ],
            "declare": false,
            "start": 565,
            "end": 597
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
                  "name": "r3a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 619
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 622,
                      "end": 624
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 625,
                      "end": 628
                    },
                    "optional": false,
                    "computed": false,
                    "start": 622,
                    "end": 628
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
                          "start": 629,
                          "end": 630
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 634,
                        "end": 635
                      },
                      "id": null,
                      "generator": false,
                      "start": 629,
                      "end": 635
                    }
                  ],
                  "optional": false,
                  "start": 622,
                  "end": 636
                },
                "definite": false,
                "start": 616,
                "end": 636
              }
            ],
            "declare": false,
            "start": 612,
            "end": 637
          }
        ],
        "start": 177,
        "end": 649
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 155,
      "end": 649
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithCandidates",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 672
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
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 686
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 687,
                    "end": 688
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 687,
                  "end": 688
                }
              ],
              "start": 686,
              "end": 689
            },
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
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 700,
                    "end": 704
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 705,
                            "end": 706
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 705,
                          "end": 706
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 708,
                            "end": 709
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 708,
                          "end": 709
                        }
                      ],
                      "start": 704,
                      "end": 710
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 714,
                              "end": 715
                            },
                            "typeArguments": null,
                            "start": 714,
                            "end": 715
                          },
                          "start": 712,
                          "end": 715
                        },
                        "start": 711,
                        "end": 715
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cb",
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 725,
                                      "end": 726
                                    },
                                    "typeArguments": null,
                                    "start": 725,
                                    "end": 726
                                  },
                                  "start": 723,
                                  "end": 726
                                },
                                "start": 722,
                                "end": 726
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 731,
                                  "end": 732
                                },
                                "typeArguments": null,
                                "start": 731,
                                "end": 732
                              },
                              "start": 728,
                              "end": 732
                            },
                            "start": 721,
                            "end": 732
                          },
                          "start": 719,
                          "end": 732
                        },
                        "start": 717,
                        "end": 732
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
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 755,
                              "end": 757
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 758,
                                "end": 759
                              }
                            ],
                            "optional": false,
                            "start": 755,
                            "end": 760
                          },
                          "start": 748,
                          "end": 761
                        }
                      ],
                      "start": 734,
                      "end": 771
                    },
                    "expression": false,
                    "start": 704,
                    "end": 771
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 700,
                  "end": 771
                }
              ],
              "start": 690,
              "end": 777
            },
            "abstract": false,
            "declare": false,
            "start": 679,
            "end": 777
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 790,
                        "end": 791
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 792,
                            "end": 798
                          }
                        ],
                        "start": 791,
                        "end": 799
                      },
                      "start": 790,
                      "end": 799
                    },
                    "start": 788,
                    "end": 799
                  },
                  "start": 787,
                  "end": 799
                },
                "init": null,
                "definite": false,
                "start": 787,
                "end": 799
              }
            ],
            "declare": false,
            "start": 783,
            "end": 800
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 809,
                  "end": 811
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 814,
                      "end": 815
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 820
                    },
                    "optional": false,
                    "computed": false,
                    "start": 814,
                    "end": 820
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 821,
                      "end": 822
                    },
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 834,
                              "end": 835
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 834,
                            "end": 835
                          }
                        ],
                        "start": 833,
                        "end": 836
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 840,
                                "end": 841
                              },
                              "typeArguments": null,
                              "start": 840,
                              "end": 841
                            },
                            "start": 838,
                            "end": 841
                          },
                          "start": 837,
                          "end": 841
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 852,
                              "end": 854
                            },
                            "start": 845,
                            "end": 854
                          }
                        ],
                        "start": 843,
                        "end": 856
                      },
                      "expression": false,
                      "start": 824,
                      "end": 856
                    }
                  ],
                  "optional": false,
                  "start": 814,
                  "end": 857
                },
                "definite": false,
                "start": 809,
                "end": 857
              }
            ],
            "declare": false,
            "start": 805,
            "end": 858
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 945,
                  "end": 947
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 950,
                      "end": 951
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 952,
                      "end": 956
                    },
                    "optional": false,
                    "computed": false,
                    "start": 950,
                    "end": 956
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 957,
                      "end": 958
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 961,
                          "end": 962
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 967,
                        "end": 969
                      },
                      "id": null,
                      "generator": false,
                      "start": 960,
                      "end": 969
                    }
                  ],
                  "optional": false,
                  "start": 950,
                  "end": 970
                },
                "definite": false,
                "start": 945,
                "end": 970
              }
            ],
            "declare": false,
            "start": 941,
            "end": 971
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 992
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 995,
                      "end": 996
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 997,
                      "end": 1001
                    },
                    "optional": false,
                    "computed": false,
                    "start": 995,
                    "end": 1001
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1002,
                        "end": 1008
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 1010,
                        "end": 1016
                      }
                    ],
                    "start": 1001,
                    "end": 1017
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 1018,
                      "end": 1020
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1023,
                              "end": 1024
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1023,
                            "end": 1024
                          }
                        ],
                        "start": 1022,
                        "end": 1025
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1029,
                                "end": 1030
                              },
                              "typeArguments": null,
                              "start": 1029,
                              "end": 1030
                            },
                            "start": 1027,
                            "end": 1030
                          },
                          "start": 1026,
                          "end": 1030
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1035,
                        "end": 1036
                      },
                      "id": null,
                      "generator": false,
                      "start": 1022,
                      "end": 1036
                    }
                  ],
                  "optional": false,
                  "start": 995,
                  "end": 1037
                },
                "definite": false,
                "start": 990,
                "end": 1037
              }
            ],
            "declare": false,
            "start": 986,
            "end": 1038
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1060,
              "end": 1062
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1063,
                    "end": 1064
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1063,
                  "end": 1064
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1066,
                    "end": 1067
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1066,
                  "end": 1067
                }
              ],
              "start": 1062,
              "end": 1068
            },
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
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1079,
                    "end": 1083
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1087,
                              "end": 1088
                            },
                            "typeArguments": null,
                            "start": 1087,
                            "end": 1088
                          },
                          "start": 1085,
                          "end": 1088
                        },
                        "start": 1084,
                        "end": 1088
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cb",
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1098,
                                      "end": 1099
                                    },
                                    "typeArguments": null,
                                    "start": 1098,
                                    "end": 1099
                                  },
                                  "start": 1096,
                                  "end": 1099
                                },
                                "start": 1095,
                                "end": 1099
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1104,
                                  "end": 1105
                                },
                                "typeArguments": null,
                                "start": 1104,
                                "end": 1105
                              },
                              "start": 1101,
                              "end": 1105
                            },
                            "start": 1094,
                            "end": 1105
                          },
                          "start": 1092,
                          "end": 1105
                        },
                        "start": 1090,
                        "end": 1105
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1110,
                              "end": 1111
                            },
                            "typeArguments": null,
                            "start": 1110,
                            "end": 1111
                          },
                          "start": 1108,
                          "end": 1111
                        },
                        "start": 1107,
                        "end": 1111
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
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1134,
                              "end": 1136
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1137,
                                "end": 1138
                              }
                            ],
                            "optional": false,
                            "start": 1134,
                            "end": 1139
                          },
                          "start": 1127,
                          "end": 1140
                        }
                      ],
                      "start": 1113,
                      "end": 1150
                    },
                    "expression": false,
                    "start": 1083,
                    "end": 1150
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1079,
                  "end": 1150
                }
              ],
              "start": 1069,
              "end": 1156
            },
            "abstract": false,
            "declare": false,
            "start": 1054,
            "end": 1156
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1170,
                        "end": 1172
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1173,
                            "end": 1179
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1181,
                            "end": 1187
                          }
                        ],
                        "start": 1172,
                        "end": 1188
                      },
                      "start": 1170,
                      "end": 1188
                    },
                    "start": 1168,
                    "end": 1188
                  },
                  "start": 1166,
                  "end": 1188
                },
                "init": null,
                "definite": false,
                "start": 1166,
                "end": 1188
              }
            ],
            "declare": false,
            "start": 1162,
            "end": 1189
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
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1198,
                  "end": 1200
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1203,
                      "end": 1205
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1206,
                      "end": 1210
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1203,
                    "end": 1210
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1211,
                      "end": 1212
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1215,
                              "end": 1216
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1215,
                            "end": 1216
                          }
                        ],
                        "start": 1214,
                        "end": 1217
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1221,
                                "end": 1222
                              },
                              "typeArguments": null,
                              "start": 1221,
                              "end": 1222
                            },
                            "start": 1219,
                            "end": 1222
                          },
                          "start": 1218,
                          "end": 1222
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1227,
                        "end": 1229
                      },
                      "id": null,
                      "generator": false,
                      "start": 1214,
                      "end": 1229
                    },
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 1231,
                      "end": 1233
                    }
                  ],
                  "optional": false,
                  "start": 1203,
                  "end": 1234
                },
                "definite": false,
                "start": 1198,
                "end": 1234
              }
            ],
            "declare": false,
            "start": 1194,
            "end": 1235
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
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1254,
                  "end": 1256
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1259,
                      "end": 1261
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1262,
                      "end": 1266
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1259,
                    "end": 1266
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1267,
                      "end": 1268
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1280,
                          "end": 1281
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 1292,
                              "end": 1294
                            },
                            "start": 1285,
                            "end": 1294
                          }
                        ],
                        "start": 1283,
                        "end": 1296
                      },
                      "expression": false,
                      "start": 1270,
                      "end": 1296
                    },
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 1298,
                      "end": 1300
                    }
                  ],
                  "optional": false,
                  "start": 1259,
                  "end": 1301
                },
                "definite": false,
                "start": 1254,
                "end": 1301
              }
            ],
            "declare": false,
            "start": 1250,
            "end": 1302
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1324,
              "end": 1326
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1327,
                    "end": 1328
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1327,
                  "end": 1328
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1330,
                    "end": 1331
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1330,
                  "end": 1331
                }
              ],
              "start": 1326,
              "end": 1332
            },
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
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1343,
                    "end": 1347
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1348,
                            "end": 1349
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1348,
                          "end": 1349
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1350,
                            "end": 1351
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1350,
                          "end": 1351
                        }
                      ],
                      "start": 1347,
                      "end": 1352
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1356,
                              "end": 1357
                            },
                            "typeArguments": null,
                            "start": 1356,
                            "end": 1357
                          },
                          "start": 1354,
                          "end": 1357
                        },
                        "start": 1353,
                        "end": 1357
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cb",
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1367,
                                      "end": 1368
                                    },
                                    "typeArguments": null,
                                    "start": 1367,
                                    "end": 1368
                                  },
                                  "start": 1365,
                                  "end": 1368
                                },
                                "start": 1364,
                                "end": 1368
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1373,
                                  "end": 1374
                                },
                                "typeArguments": null,
                                "start": 1373,
                                "end": 1374
                              },
                              "start": 1370,
                              "end": 1374
                            },
                            "start": 1363,
                            "end": 1374
                          },
                          "start": 1361,
                          "end": 1374
                        },
                        "start": 1359,
                        "end": 1374
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1379,
                              "end": 1380
                            },
                            "typeArguments": null,
                            "start": 1379,
                            "end": 1380
                          },
                          "start": 1377,
                          "end": 1380
                        },
                        "start": 1376,
                        "end": 1380
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
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1403,
                              "end": 1405
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1406,
                                "end": 1407
                              }
                            ],
                            "optional": false,
                            "start": 1403,
                            "end": 1408
                          },
                          "start": 1396,
                          "end": 1409
                        }
                      ],
                      "start": 1382,
                      "end": 1419
                    },
                    "expression": false,
                    "start": 1347,
                    "end": 1419
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1343,
                  "end": 1419
                }
              ],
              "start": 1333,
              "end": 1425
            },
            "abstract": false,
            "declare": false,
            "start": 1318,
            "end": 1425
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1438,
                        "end": 1440
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1441,
                            "end": 1447
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1449,
                            "end": 1455
                          }
                        ],
                        "start": 1440,
                        "end": 1456
                      },
                      "start": 1438,
                      "end": 1456
                    },
                    "start": 1436,
                    "end": 1456
                  },
                  "start": 1434,
                  "end": 1456
                },
                "init": null,
                "definite": false,
                "start": 1434,
                "end": 1456
              }
            ],
            "declare": false,
            "start": 1430,
            "end": 1457
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 1472,
              "end": 1477
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1478,
                    "end": 1479
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1478,
                  "end": 1479
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1481,
                    "end": 1482
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1481,
                  "end": 1482
                }
              ],
              "start": 1477,
              "end": 1483
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1487,
                      "end": 1488
                    },
                    "typeArguments": null,
                    "start": 1487,
                    "end": 1488
                  },
                  "start": 1485,
                  "end": 1488
                },
                "start": 1484,
                "end": 1488
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1493,
                      "end": 1494
                    },
                    "typeArguments": null,
                    "start": 1493,
                    "end": 1494
                  },
                  "start": 1491,
                  "end": 1494
                },
                "start": 1490,
                "end": 1494
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
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1510,
                        "end": 1513
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1516,
                            "end": 1517
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1518,
                            "end": 1522
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1516,
                          "end": 1522
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1523,
                            "end": 1524
                          },
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
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1530,
                                      "end": 1531
                                    },
                                    "typeArguments": null,
                                    "start": 1530,
                                    "end": 1531
                                  },
                                  "start": 1528,
                                  "end": 1531
                                },
                                "start": 1527,
                                "end": 1531
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 1536,
                              "end": 1538
                            },
                            "id": null,
                            "generator": false,
                            "start": 1526,
                            "end": 1538
                          }
                        ],
                        "optional": false,
                        "start": 1516,
                        "end": 1539
                      },
                      "definite": false,
                      "start": 1510,
                      "end": 1539
                    }
                  ],
                  "declare": false,
                  "start": 1506,
                  "end": 1540
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
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1562,
                        "end": 1565
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1568,
                            "end": 1569
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1570,
                            "end": 1574
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1568,
                          "end": 1574
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1575,
                            "end": 1576
                          },
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
                                "start": 1579,
                                "end": 1580
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 1585,
                              "end": 1587
                            },
                            "id": null,
                            "generator": false,
                            "start": 1578,
                            "end": 1587
                          }
                        ],
                        "optional": false,
                        "start": 1568,
                        "end": 1588
                      },
                      "definite": false,
                      "start": 1562,
                      "end": 1588
                    }
                  ],
                  "declare": false,
                  "start": 1558,
                  "end": 1589
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
                        "name": "r11",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1613,
                        "end": 1616
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1619,
                            "end": 1621
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1622,
                            "end": 1626
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1619,
                          "end": 1626
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1627,
                            "end": 1628
                          },
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
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1634,
                                      "end": 1635
                                    },
                                    "typeArguments": null,
                                    "start": 1634,
                                    "end": 1635
                                  },
                                  "start": 1632,
                                  "end": 1635
                                },
                                "start": 1631,
                                "end": 1635
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 1640,
                              "end": 1642
                            },
                            "id": null,
                            "generator": false,
                            "start": 1630,
                            "end": 1642
                          },
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 1644,
                            "end": 1646
                          }
                        ],
                        "optional": false,
                        "start": 1619,
                        "end": 1647
                      },
                      "definite": false,
                      "start": 1613,
                      "end": 1647
                    }
                  ],
                  "declare": false,
                  "start": 1609,
                  "end": 1648
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
                        "name": "r11b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1670,
                        "end": 1674
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1677,
                            "end": 1679
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1680,
                            "end": 1684
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1677,
                          "end": 1684
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1685,
                            "end": 1686
                          },
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
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1692,
                                      "end": 1693
                                    },
                                    "typeArguments": null,
                                    "start": 1692,
                                    "end": 1693
                                  },
                                  "start": 1690,
                                  "end": 1693
                                },
                                "start": 1689,
                                "end": 1693
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 1698,
                              "end": 1700
                            },
                            "id": null,
                            "generator": false,
                            "start": 1688,
                            "end": 1700
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1702,
                            "end": 1703
                          }
                        ],
                        "optional": false,
                        "start": 1677,
                        "end": 1704
                      },
                      "definite": false,
                      "start": 1670,
                      "end": 1704
                    }
                  ],
                  "declare": false,
                  "start": 1666,
                  "end": 1705
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
                        "name": "r12",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1727,
                        "end": 1730
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1733,
                            "end": 1735
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1736,
                            "end": 1740
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1733,
                          "end": 1740
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1741,
                            "end": 1742
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1754,
                                "end": 1755
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "''",
                                    "start": 1766,
                                    "end": 1768
                                  },
                                  "start": 1759,
                                  "end": 1768
                                }
                              ],
                              "start": 1757,
                              "end": 1770
                            },
                            "expression": false,
                            "start": 1744,
                            "end": 1770
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1772,
                            "end": 1773
                          }
                        ],
                        "optional": false,
                        "start": 1733,
                        "end": 1774
                      },
                      "definite": false,
                      "start": 1727,
                      "end": 1774
                    }
                  ],
                  "declare": false,
                  "start": 1723,
                  "end": 1775
                }
              ],
              "start": 1496,
              "end": 1790
            },
            "expression": false,
            "start": 1463,
            "end": 1790
          }
        ],
        "start": 673,
        "end": 1792
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 651,
      "end": 1792
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 155,
  "end": 1792
}
```
