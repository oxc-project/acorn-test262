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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 30,
        "end": 33
      },
      "abstract": false,
      "declare": false,
      "start": 22,
      "end": 33
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 46
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
              "start": 47,
              "end": 48
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 58
              },
              "typeArguments": null,
              "start": 57,
              "end": 58
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 47,
            "end": 58
          }
        ],
        "start": 46,
        "end": 59
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
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
                    "start": 63,
                    "end": 64
                  },
                  "typeArguments": null,
                  "start": 63,
                  "end": 64
                },
                {
                  "type": "TSStringKeyword",
                  "start": 67,
                  "end": 73
                }
              ],
              "start": 63,
              "end": 73
            },
            "start": 61,
            "end": 73
          },
          "start": 60,
          "end": 73
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 76,
          "end": 80
        },
        "start": 74,
        "end": 80
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 92
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "start": 91,
              "end": 105
            },
            "consequent": {
              "type": "BlockStatement",
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
                              "start": 126,
                              "end": 127
                            },
                            "typeArguments": null,
                            "start": 126,
                            "end": 127
                          },
                          "start": 124,
                          "end": 127
                        },
                        "start": 123,
                        "end": 127
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 131
                      },
                      "definite": false,
                      "start": 123,
                      "end": 131
                    }
                  ],
                  "declare": false,
                  "start": 117,
                  "end": 132
                }
              ],
              "start": 107,
              "end": 138
            },
            "alternate": {
              "type": "BlockStatement",
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 167,
                            "end": 173
                          },
                          "start": 165,
                          "end": 173
                        },
                        "start": 164,
                        "end": 173
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 177
                      },
                      "definite": false,
                      "start": 164,
                      "end": 177
                    }
                  ],
                  "declare": false,
                  "start": 158,
                  "end": 178
                }
              ],
              "start": 148,
              "end": 184
            },
            "start": 87,
            "end": 184
          }
        ],
        "start": 81,
        "end": 186
      },
      "expression": false,
      "start": 35,
      "end": 186
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 195
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 196,
        "end": 199
      },
      "abstract": false,
      "declare": false,
      "start": 188,
      "end": 199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 212
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
              "start": 213,
              "end": 214
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 224
              },
              "typeArguments": null,
              "start": 223,
              "end": 224
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 213,
            "end": 224
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 227
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 237
              },
              "typeArguments": null,
              "start": 236,
              "end": 237
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 226,
            "end": 237
          }
        ],
        "start": 212,
        "end": 238
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
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
                    "start": 242,
                    "end": 243
                  },
                  "typeArguments": null,
                  "start": 242,
                  "end": 243
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 247
                  },
                  "typeArguments": null,
                  "start": 246,
                  "end": 247
                }
              ],
              "start": 242,
              "end": 247
            },
            "start": 240,
            "end": 247
          },
          "start": 239,
          "end": 247
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 260
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 273
              },
              "start": 259,
              "end": 273
            },
            "consequent": {
              "type": "BlockStatement",
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
                              "start": 294,
                              "end": 295
                            },
                            "typeArguments": null,
                            "start": 294,
                            "end": 295
                          },
                          "start": 292,
                          "end": 295
                        },
                        "start": 291,
                        "end": 295
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 298,
                        "end": 299
                      },
                      "definite": false,
                      "start": 291,
                      "end": 299
                    }
                  ],
                  "declare": false,
                  "start": 285,
                  "end": 300
                }
              ],
              "start": 275,
              "end": 306
            },
            "alternate": {
              "type": "BlockStatement",
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
                              "start": 335,
                              "end": 336
                            },
                            "typeArguments": null,
                            "start": 335,
                            "end": 336
                          },
                          "start": 333,
                          "end": 336
                        },
                        "start": 332,
                        "end": 336
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 339,
                        "end": 340
                      },
                      "definite": false,
                      "start": 332,
                      "end": 340
                    }
                  ],
                  "declare": false,
                  "start": 326,
                  "end": 341
                }
              ],
              "start": 316,
              "end": 347
            },
            "start": 255,
            "end": 347
          }
        ],
        "start": 249,
        "end": 349
      },
      "expression": false,
      "start": 201,
      "end": 349
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 358
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 362
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 364,
                    "end": 370
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 373,
                    "end": 382
                  }
                ],
                "start": 364,
                "end": 382
              },
              "start": 362,
              "end": 382
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
            "start": 361,
            "end": 382
          }
        ],
        "start": 359,
        "end": 384
      },
      "abstract": false,
      "declare": false,
      "start": 351,
      "end": 384
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 397
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
              "start": 398,
              "end": 399
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 409
              },
              "typeArguments": null,
              "start": 408,
              "end": 409
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 398,
            "end": 409
          }
        ],
        "start": 397,
        "end": 410
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
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
                    "start": 414,
                    "end": 415
                  },
                  "typeArguments": null,
                  "start": 414,
                  "end": 415
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 421
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 423,
                          "end": 429
                        },
                        "start": 421,
                        "end": 429
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 420,
                      "end": 429
                    }
                  ],
                  "start": 418,
                  "end": 431
                }
              ],
              "start": 414,
              "end": 431
            },
            "start": 412,
            "end": 431
          },
          "start": 411,
          "end": 431
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 444
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 457
              },
              "start": 443,
              "end": 457
            },
            "consequent": {
              "type": "BlockStatement",
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
                              "start": 478,
                              "end": 479
                            },
                            "typeArguments": null,
                            "start": 478,
                            "end": 479
                          },
                          "start": 476,
                          "end": 479
                        },
                        "start": 475,
                        "end": 479
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 483
                      },
                      "definite": false,
                      "start": 475,
                      "end": 483
                    }
                  ],
                  "declare": false,
                  "start": 469,
                  "end": 484
                }
              ],
              "start": 459,
              "end": 490
            },
            "alternate": {
              "type": "BlockStatement",
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 521,
                                  "end": 522
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 524,
                                    "end": 530
                                  },
                                  "start": 522,
                                  "end": 530
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 521,
                                "end": 530
                              }
                            ],
                            "start": 519,
                            "end": 532
                          },
                          "start": 517,
                          "end": 532
                        },
                        "start": 516,
                        "end": 532
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 535,
                        "end": 536
                      },
                      "definite": false,
                      "start": 516,
                      "end": 536
                    }
                  ],
                  "declare": false,
                  "start": 510,
                  "end": 537
                }
              ],
              "start": 500,
              "end": 543
            },
            "start": 439,
            "end": 543
          }
        ],
        "start": 433,
        "end": 545
      },
      "expression": false,
      "start": 386,
      "end": 545
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 545
}
```
