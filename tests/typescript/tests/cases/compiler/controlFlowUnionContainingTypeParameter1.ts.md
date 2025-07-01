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
        "name": "TestClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 72
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
              "start": 73,
              "end": 74
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 73,
            "end": 74
          }
        ],
        "start": 72,
        "end": 75
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
              "name": "typeguard",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 89
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 95,
                      "end": 102
                    },
                    "start": 93,
                    "end": 102
                  },
                  "start": 90,
                  "end": 102
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 108
                  },
                  "asserts": false,
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
                        "start": 112,
                        "end": 113
                      },
                      "typeArguments": null,
                      "start": 112,
                      "end": 113
                    },
                    "start": 112,
                    "end": 113
                  },
                  "start": 105,
                  "end": 113
                },
                "start": 103,
                "end": 113
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 127,
                      "end": 131
                    },
                    "start": 120,
                    "end": 132
                  }
                ],
                "start": 114,
                "end": 136
              },
              "expression": false,
              "start": 89,
              "end": 136
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 136
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
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
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    },
                    "start": 142,
                    "end": 150
                  },
                  "start": 141,
                  "end": 150
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 153,
                  "end": 157
                },
                "start": 151,
                "end": 157
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 158,
                "end": 160
              },
              "expression": false,
              "start": 140,
              "end": 160
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 139,
            "end": 160
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 169
                      },
                      "typeArguments": null,
                      "start": 168,
                      "end": 169
                    },
                    "start": 166,
                    "end": 169
                  },
                  "start": 165,
                  "end": 169
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 172,
                  "end": 176
                },
                "start": 170,
                "end": 176
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 177,
                "end": 179
              },
              "expression": false,
              "start": 164,
              "end": 179
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 163,
            "end": 179
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 186
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 192,
                            "end": 193
                          },
                          "typeArguments": null,
                          "start": 192,
                          "end": 193
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 196,
                          "end": 202
                        }
                      ],
                      "start": 192,
                      "end": 202
                    },
                    "start": 190,
                    "end": 202
                  },
                  "start": 187,
                  "end": 202
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 205,
                  "end": 209
                },
                "start": 203,
                "end": 209
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 220,
                          "end": 224
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "typeguard",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 225,
                          "end": 234
                        },
                        "optional": false,
                        "computed": false,
                        "start": 220,
                        "end": 234
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 235,
                          "end": 238
                        }
                      ],
                      "optional": false,
                      "start": 220,
                      "end": 239
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 249,
                                "end": 253
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 254,
                                "end": 255
                              },
                              "optional": false,
                              "computed": false,
                              "start": 249,
                              "end": 255
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 256,
                                "end": 259
                              }
                            ],
                            "optional": false,
                            "start": 249,
                            "end": 260
                          },
                          "directive": null,
                          "start": 249,
                          "end": 261
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 268,
                          "end": 275
                        }
                      ],
                      "start": 241,
                      "end": 281
                    },
                    "alternate": null,
                    "start": 216,
                    "end": 281
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 286,
                          "end": 290
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 291,
                          "end": 292
                        },
                        "optional": false,
                        "computed": false,
                        "start": 286,
                        "end": 292
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 293,
                          "end": 296
                        }
                      ],
                      "optional": false,
                      "start": 286,
                      "end": 297
                    },
                    "directive": null,
                    "start": 286,
                    "end": 298
                  }
                ],
                "start": 210,
                "end": 302
              },
              "expression": false,
              "start": 186,
              "end": 302
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 182,
            "end": 302
          }
        ],
        "start": 76,
        "end": 304
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 304
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestClass2",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 322
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
              "start": 323,
              "end": 324
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 337
              },
              "typeArguments": null,
              "start": 333,
              "end": 337
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 323,
            "end": 337
          }
        ],
        "start": 322,
        "end": 338
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
              "name": "typeguard",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 352
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 358,
                      "end": 365
                    },
                    "start": 356,
                    "end": 365
                  },
                  "start": 353,
                  "end": 365
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 371
                  },
                  "asserts": false,
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
                        "start": 375,
                        "end": 376
                      },
                      "typeArguments": null,
                      "start": 375,
                      "end": 376
                    },
                    "start": 375,
                    "end": 376
                  },
                  "start": 368,
                  "end": 376
                },
                "start": 366,
                "end": 376
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 390,
                      "end": 394
                    },
                    "start": 383,
                    "end": 395
                  }
                ],
                "start": 377,
                "end": 399
              },
              "expression": false,
              "start": 352,
              "end": 399
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 343,
            "end": 399
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
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
                      "type": "TSNumberKeyword",
                      "start": 407,
                      "end": 413
                    },
                    "start": 405,
                    "end": 413
                  },
                  "start": 404,
                  "end": 413
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 416,
                  "end": 420
                },
                "start": 414,
                "end": 420
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 421,
                "end": 423
              },
              "expression": false,
              "start": 403,
              "end": 423
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 402,
            "end": 423
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 427
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 431,
                        "end": 432
                      },
                      "typeArguments": null,
                      "start": 431,
                      "end": 432
                    },
                    "start": 429,
                    "end": 432
                  },
                  "start": 428,
                  "end": 432
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 435,
                  "end": 439
                },
                "start": 433,
                "end": 439
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 440,
                "end": 442
              },
              "expression": false,
              "start": 427,
              "end": 442
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 426,
            "end": 442
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 449
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 455,
                            "end": 456
                          },
                          "typeArguments": null,
                          "start": 455,
                          "end": 456
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 459,
                          "end": 465
                        }
                      ],
                      "start": 455,
                      "end": 465
                    },
                    "start": 453,
                    "end": 465
                  },
                  "start": 450,
                  "end": 465
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 468,
                  "end": 472
                },
                "start": 466,
                "end": 472
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 483,
                          "end": 487
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "typeguard",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 488,
                          "end": 497
                        },
                        "optional": false,
                        "computed": false,
                        "start": 483,
                        "end": 497
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 498,
                          "end": 501
                        }
                      ],
                      "optional": false,
                      "start": 483,
                      "end": 502
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 512,
                                "end": 516
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 517,
                                "end": 518
                              },
                              "optional": false,
                              "computed": false,
                              "start": 512,
                              "end": 518
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 519,
                                "end": 522
                              }
                            ],
                            "optional": false,
                            "start": 512,
                            "end": 523
                          },
                          "directive": null,
                          "start": 512,
                          "end": 524
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 531,
                          "end": 538
                        }
                      ],
                      "start": 504,
                      "end": 544
                    },
                    "alternate": null,
                    "start": 479,
                    "end": 544
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 549,
                      "end": 552
                    },
                    "directive": null,
                    "start": 549,
                    "end": 553
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 558,
                          "end": 562
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 563,
                          "end": 564
                        },
                        "optional": false,
                        "computed": false,
                        "start": 558,
                        "end": 564
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 565,
                          "end": 568
                        }
                      ],
                      "optional": false,
                      "start": 558,
                      "end": 569
                    },
                    "directive": null,
                    "start": 558,
                    "end": 570
                  }
                ],
                "start": 473,
                "end": 574
              },
              "expression": false,
              "start": 449,
              "end": 574
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 445,
            "end": 574
          }
        ],
        "start": 339,
        "end": 576
      },
      "abstract": false,
      "declare": false,
      "start": 306,
      "end": 576
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 576
}
```
