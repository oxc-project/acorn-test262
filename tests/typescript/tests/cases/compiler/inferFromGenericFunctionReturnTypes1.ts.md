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
        "name": "SetOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 113
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 113,
        "end": 116
      },
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
              "name": "_store",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 127
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "typeArguments": null,
                  "start": 129,
                  "end": 130
                },
                "start": 129,
                "end": 132
              },
              "start": 127,
              "end": 132
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
            "start": 121,
            "end": 133
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 144,
                      "end": 145
                    },
                    "start": 142,
                    "end": 145
                  },
                  "start": 141,
                  "end": 145
                }
              ],
              "returnType": null,
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 153,
                            "end": 157
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 158,
                            "end": 164
                          },
                          "optional": false,
                          "computed": false,
                          "start": 153,
                          "end": 164
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 165,
                          "end": 169
                        },
                        "optional": false,
                        "computed": false,
                        "start": 153,
                        "end": 169
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 170,
                          "end": 171
                        }
                      ],
                      "optional": false,
                      "start": 153,
                      "end": 172
                    },
                    "directive": null,
                    "start": 153,
                    "end": 173
                  }
                ],
                "start": 147,
                "end": 177
              },
              "expression": false,
              "start": 140,
              "end": 177
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 137,
            "end": 177
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "transform",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 190
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
                      "name": "B",
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
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "transformer",
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
                                "name": "SetOf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 211,
                                "end": 216
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 217,
                                      "end": 218
                                    },
                                    "typeArguments": null,
                                    "start": 217,
                                    "end": 218
                                  }
                                ],
                                "start": 216,
                                "end": 219
                              },
                              "start": 211,
                              "end": 219
                            },
                            "start": 209,
                            "end": 219
                          },
                          "start": 208,
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
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 224,
                            "end": 229
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 230,
                                  "end": 231
                                },
                                "typeArguments": null,
                                "start": 230,
                                "end": 231
                              }
                            ],
                            "start": 229,
                            "end": 232
                          },
                          "start": 224,
                          "end": 232
                        },
                        "start": 221,
                        "end": 232
                      },
                      "start": 207,
                      "end": 232
                    },
                    "start": 205,
                    "end": 232
                  },
                  "start": 194,
                  "end": 232
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 240
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 241,
                          "end": 242
                        },
                        "typeArguments": null,
                        "start": 241,
                        "end": 242
                      }
                    ],
                    "start": 240,
                    "end": 243
                  },
                  "start": 235,
                  "end": 243
                },
                "start": 233,
                "end": 243
              },
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
                        "name": "transformer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 268
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 269,
                          "end": 273
                        }
                      ],
                      "optional": false,
                      "start": 257,
                      "end": 274
                    },
                    "start": 250,
                    "end": 275
                  }
                ],
                "start": 244,
                "end": 279
              },
              "expression": false,
              "start": 190,
              "end": 279
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 181,
            "end": 279
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 290
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
                  "name": "fn",
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
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 299,
                                "end": 300
                              },
                              "typeArguments": null,
                              "start": 299,
                              "end": 300
                            },
                            "start": 297,
                            "end": 300
                          },
                          "start": 296,
                          "end": 300
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 309,
                              "end": 315
                            },
                            "start": 307,
                            "end": 315
                          },
                          "start": 302,
                          "end": 315
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 320,
                          "end": 324
                        },
                        "start": 317,
                        "end": 324
                      },
                      "start": 295,
                      "end": 324
                    },
                    "start": 293,
                    "end": 324
                  },
                  "start": 291,
                  "end": 324
                }
              ],
              "returnType": null,
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 334,
                            "end": 338
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 339,
                            "end": 345
                          },
                          "optional": false,
                          "computed": false,
                          "start": 334,
                          "end": 345
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 353
                        },
                        "optional": false,
                        "computed": false,
                        "start": 334,
                        "end": 353
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 355,
                              "end": 356
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 358,
                              "end": 359
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 364,
                              "end": 366
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 367,
                                "end": 368
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 370,
                                "end": 371
                              }
                            ],
                            "optional": false,
                            "start": 364,
                            "end": 372
                          },
                          "id": null,
                          "generator": false,
                          "start": 354,
                          "end": 372
                        }
                      ],
                      "optional": false,
                      "start": 334,
                      "end": 373
                    },
                    "directive": null,
                    "start": 334,
                    "end": 374
                  }
                ],
                "start": 326,
                "end": 378
              },
              "expression": false,
              "start": 290,
              "end": 378
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 283,
            "end": 378
          }
        ],
        "start": 117,
        "end": 380
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 380
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 398
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 400
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 399,
            "end": 400
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 402,
            "end": 403
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 406
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 405,
            "end": 406
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 409
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 408,
            "end": 409
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 412
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 411,
            "end": 412
          }
        ],
        "start": 398,
        "end": 413
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnA",
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
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 426,
                        "end": 431
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 432,
                              "end": 433
                            },
                            "typeArguments": null,
                            "start": 432,
                            "end": 433
                          }
                        ],
                        "start": 431,
                        "end": 434
                      },
                      "start": 426,
                      "end": 434
                    },
                    "start": 424,
                    "end": 434
                  },
                  "start": 423,
                  "end": 434
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 444
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 446
                        },
                        "typeArguments": null,
                        "start": 445,
                        "end": 446
                      }
                    ],
                    "start": 444,
                    "end": 447
                  },
                  "start": 439,
                  "end": 447
                },
                "start": 436,
                "end": 447
              },
              "start": 422,
              "end": 447
            },
            "start": 420,
            "end": 447
          },
          "start": 417,
          "end": 447
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnB",
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 461,
                        "end": 466
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 467,
                              "end": 468
                            },
                            "typeArguments": null,
                            "start": 467,
                            "end": 468
                          }
                        ],
                        "start": 466,
                        "end": 469
                      },
                      "start": 461,
                      "end": 469
                    },
                    "start": 459,
                    "end": 469
                  },
                  "start": 458,
                  "end": 469
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 479
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 480,
                          "end": 481
                        },
                        "typeArguments": null,
                        "start": 480,
                        "end": 481
                      }
                    ],
                    "start": 479,
                    "end": 482
                  },
                  "start": 474,
                  "end": 482
                },
                "start": 471,
                "end": 482
              },
              "start": 457,
              "end": 482
            },
            "start": 455,
            "end": 482
          },
          "start": 452,
          "end": 482
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnC",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 496,
                        "end": 501
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 502,
                              "end": 503
                            },
                            "typeArguments": null,
                            "start": 502,
                            "end": 503
                          }
                        ],
                        "start": 501,
                        "end": 504
                      },
                      "start": 496,
                      "end": 504
                    },
                    "start": 494,
                    "end": 504
                  },
                  "start": 493,
                  "end": 504
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 509,
                    "end": 514
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 515,
                          "end": 516
                        },
                        "typeArguments": null,
                        "start": 515,
                        "end": 516
                      }
                    ],
                    "start": 514,
                    "end": 517
                  },
                  "start": 509,
                  "end": 517
                },
                "start": 506,
                "end": 517
              },
              "start": 492,
              "end": 517
            },
            "start": 490,
            "end": 517
          },
          "start": 487,
          "end": 517
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnD",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 530,
                        "end": 535
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 536,
                              "end": 537
                            },
                            "typeArguments": null,
                            "start": 536,
                            "end": 537
                          }
                        ],
                        "start": 535,
                        "end": 538
                      },
                      "start": 530,
                      "end": 538
                    },
                    "start": 528,
                    "end": 538
                  },
                  "start": 527,
                  "end": 538
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 543,
                    "end": 548
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 549,
                          "end": 550
                        },
                        "typeArguments": null,
                        "start": 549,
                        "end": 550
                      }
                    ],
                    "start": 548,
                    "end": 551
                  },
                  "start": 543,
                  "end": 551
                },
                "start": 540,
                "end": 551
              },
              "start": 526,
              "end": 551
            },
            "start": 524,
            "end": 551
          },
          "start": 521,
          "end": 551
        }
      ],
      "returnType": {
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 559,
                    "end": 564
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 565,
                          "end": 566
                        },
                        "typeArguments": null,
                        "start": 565,
                        "end": 566
                      }
                    ],
                    "start": 564,
                    "end": 567
                  },
                  "start": 559,
                  "end": 567
                },
                "start": 557,
                "end": 567
              },
              "start": 556,
              "end": 567
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 577
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 579
                    },
                    "typeArguments": null,
                    "start": 578,
                    "end": 579
                  }
                ],
                "start": 577,
                "end": 580
              },
              "start": 572,
              "end": 580
            },
            "start": 569,
            "end": 580
          },
          "start": 555,
          "end": 580
        },
        "start": 554,
        "end": 580
      },
      "body": null,
      "expression": false,
      "start": 382,
      "end": 581
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 616
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
              "start": 617,
              "end": 618
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 617,
            "end": 618
          }
        ],
        "start": 616,
        "end": 619
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "fns",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 626
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 633,
                          "end": 634
                        },
                        "typeArguments": null,
                        "start": 633,
                        "end": 634
                      },
                      "start": 631,
                      "end": 634
                    },
                    "start": 630,
                    "end": 634
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
                      "start": 639,
                      "end": 640
                    },
                    "typeArguments": null,
                    "start": 639,
                    "end": 640
                  },
                  "start": 636,
                  "end": 640
                },
                "start": 629,
                "end": 640
              },
              "start": 628,
              "end": 643
            },
            "start": 626,
            "end": 643
          },
          "value": null,
          "start": 620,
          "end": 643
        }
      ],
      "returnType": {
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 650,
                    "end": 651
                  },
                  "typeArguments": null,
                  "start": 650,
                  "end": 651
                },
                "start": 648,
                "end": 651
              },
              "start": 647,
              "end": 651
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
                "start": 656,
                "end": 657
              },
              "typeArguments": null,
              "start": 656,
              "end": 657
            },
            "start": 653,
            "end": 657
          },
          "start": 646,
          "end": 657
        },
        "start": 644,
        "end": 657
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                        "start": 673,
                        "end": 674
                      },
                      "typeArguments": null,
                      "start": 673,
                      "end": 674
                    },
                    "start": 671,
                    "end": 674
                  },
                  "start": 670,
                  "end": 674
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 679,
                    "end": 682
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reduce",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 683,
                    "end": 689
                  },
                  "optional": false,
                  "computed": false,
                  "start": 679,
                  "end": 689
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
                        "name": "prev",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 691,
                        "end": 695
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 697,
                        "end": 699
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 704,
                        "end": 706
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prev",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 707,
                          "end": 711
                        }
                      ],
                      "optional": false,
                      "start": 704,
                      "end": 712
                    },
                    "id": null,
                    "generator": false,
                    "start": 690,
                    "end": 712
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 714,
                    "end": 715
                  }
                ],
                "optional": false,
                "start": 679,
                "end": 716
              },
              "id": null,
              "generator": false,
              "start": 669,
              "end": 716
            },
            "start": 662,
            "end": 717
          }
        ],
        "start": 658,
        "end": 719
      },
      "expression": false,
      "start": 600,
      "end": 719
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 733
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 734,
              "end": 735
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 734,
            "end": 735
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 738
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 737,
            "end": 738
          }
        ],
        "start": 733,
        "end": 739
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 748,
                        "end": 749
                      },
                      "typeArguments": null,
                      "start": 748,
                      "end": 749
                    },
                    "start": 746,
                    "end": 749
                  },
                  "start": 745,
                  "end": 749
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 754,
                    "end": 755
                  },
                  "typeArguments": null,
                  "start": 754,
                  "end": 755
                },
                "start": 751,
                "end": 755
              },
              "start": 744,
              "end": 755
            },
            "start": 742,
            "end": 755
          },
          "start": 740,
          "end": 755
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 762,
                    "end": 767
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 768,
                          "end": 769
                        },
                        "typeArguments": null,
                        "start": 768,
                        "end": 769
                      }
                    ],
                    "start": 767,
                    "end": 770
                  },
                  "start": 762,
                  "end": 770
                },
                "start": 760,
                "end": 770
              },
              "start": 759,
              "end": 770
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 775,
                "end": 780
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 781,
                      "end": 782
                    },
                    "typeArguments": null,
                    "start": 781,
                    "end": 782
                  }
                ],
                "start": 780,
                "end": 783
              },
              "start": 775,
              "end": 783
            },
            "start": 772,
            "end": 783
          },
          "start": 758,
          "end": 783
        },
        "start": 756,
        "end": 783
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 799,
                        "end": 804
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 805,
                              "end": 806
                            },
                            "typeArguments": null,
                            "start": 805,
                            "end": 806
                          }
                        ],
                        "start": 804,
                        "end": 807
                      },
                      "start": 799,
                      "end": 807
                    },
                    "start": 797,
                    "end": 807
                  },
                  "start": 796,
                  "end": 807
                }
              ],
              "returnType": null,
              "body": {
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SetOf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 827,
                                "end": 832
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 833,
                                      "end": 834
                                    },
                                    "typeArguments": null,
                                    "start": 833,
                                    "end": 834
                                  }
                                ],
                                "start": 832,
                                "end": 835
                              },
                              "start": 827,
                              "end": 835
                            },
                            "start": 825,
                            "end": 835
                          },
                          "start": 824,
                          "end": 835
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 842,
                            "end": 847
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 838,
                          "end": 849
                        },
                        "definite": false,
                        "start": 824,
                        "end": 849
                      }
                    ],
                    "declare": false,
                    "start": 818,
                    "end": 850
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 855,
                          "end": 856
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 857,
                          "end": 864
                        },
                        "optional": false,
                        "computed": false,
                        "start": 855,
                        "end": 864
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
                              "start": 865,
                              "end": 866
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 870,
                                "end": 871
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "add",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 872,
                                "end": 875
                              },
                              "optional": false,
                              "computed": false,
                              "start": 870,
                              "end": 875
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fn",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 876,
                                  "end": 878
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 879,
                                    "end": 880
                                  }
                                ],
                                "optional": false,
                                "start": 876,
                                "end": 881
                              }
                            ],
                            "optional": false,
                            "start": 870,
                            "end": 882
                          },
                          "id": null,
                          "generator": false,
                          "start": 865,
                          "end": 882
                        }
                      ],
                      "optional": false,
                      "start": 855,
                      "end": 883
                    },
                    "directive": null,
                    "start": 855,
                    "end": 884
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 896,
                      "end": 897
                    },
                    "start": 889,
                    "end": 898
                  }
                ],
                "start": 812,
                "end": 902
              },
              "id": null,
              "generator": false,
              "start": 795,
              "end": 902
            },
            "start": 788,
            "end": 902
          }
        ],
        "start": 784,
        "end": 904
      },
      "expression": false,
      "start": 721,
      "end": 904
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null,
        "start": 915,
        "end": 921
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 922,
              "end": 923
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 922,
            "end": 923
          }
        ],
        "start": 921,
        "end": 924
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "predicate",
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 940,
                        "end": 941
                      },
                      "typeArguments": null,
                      "start": 940,
                      "end": 941
                    },
                    "start": 938,
                    "end": 941
                  },
                  "start": 937,
                  "end": 941
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 946,
                  "end": 953
                },
                "start": 943,
                "end": 953
              },
              "start": 936,
              "end": 953
            },
            "start": 934,
            "end": 953
          },
          "start": 925,
          "end": 953
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 960,
                    "end": 965
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 966,
                          "end": 967
                        },
                        "typeArguments": null,
                        "start": 966,
                        "end": 967
                      }
                    ],
                    "start": 965,
                    "end": 968
                  },
                  "start": 960,
                  "end": 968
                },
                "start": 958,
                "end": 968
              },
              "start": 957,
              "end": 968
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 973,
                "end": 978
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 979,
                      "end": 980
                    },
                    "typeArguments": null,
                    "start": 979,
                    "end": 980
                  }
                ],
                "start": 978,
                "end": 981
              },
              "start": 973,
              "end": 981
            },
            "start": 970,
            "end": 981
          },
          "start": 956,
          "end": 981
        },
        "start": 954,
        "end": 981
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 997,
                        "end": 1002
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1003,
                              "end": 1004
                            },
                            "typeArguments": null,
                            "start": 1003,
                            "end": 1004
                          }
                        ],
                        "start": 1002,
                        "end": 1005
                      },
                      "start": 997,
                      "end": 1005
                    },
                    "start": 995,
                    "end": 1005
                  },
                  "start": 994,
                  "end": 1005
                }
              ],
              "returnType": null,
              "body": {
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
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1022,
                          "end": 1028
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1035,
                            "end": 1040
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1041,
                                  "end": 1042
                                },
                                "typeArguments": null,
                                "start": 1041,
                                "end": 1042
                              }
                            ],
                            "start": 1040,
                            "end": 1043
                          },
                          "arguments": [],
                          "start": 1031,
                          "end": 1045
                        },
                        "definite": false,
                        "start": 1022,
                        "end": 1045
                      }
                    ],
                    "declare": false,
                    "start": 1016,
                    "end": 1046
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1051,
                          "end": 1052
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1053,
                          "end": 1060
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1051,
                        "end": 1060
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1061,
                              "end": 1062
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "predicate",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1078,
                                    "end": 1087
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1088,
                                      "end": 1089
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1078,
                                  "end": 1090
                                },
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1092,
                                        "end": 1098
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "add",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1099,
                                        "end": 1102
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1092,
                                      "end": 1102
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1103,
                                        "end": 1104
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1092,
                                    "end": 1105
                                  },
                                  "directive": null,
                                  "start": 1092,
                                  "end": 1106
                                },
                                "alternate": null,
                                "start": 1074,
                                "end": 1106
                              }
                            ],
                            "start": 1066,
                            "end": 1112
                          },
                          "id": null,
                          "generator": false,
                          "start": 1061,
                          "end": 1112
                        }
                      ],
                      "optional": false,
                      "start": 1051,
                      "end": 1113
                    },
                    "directive": null,
                    "start": 1051,
                    "end": 1114
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1125,
                      "end": 1131
                    },
                    "start": 1118,
                    "end": 1132
                  }
                ],
                "start": 1010,
                "end": 1136
              },
              "id": null,
              "generator": false,
              "start": 993,
              "end": 1136
            },
            "start": 986,
            "end": 1136
          }
        ],
        "start": 982,
        "end": 1138
      },
      "expression": false,
      "start": 906,
      "end": 1138
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1146,
            "end": 1153
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SetOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 1160,
              "end": 1165
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1166,
                  "end": 1172
                }
              ],
              "start": 1165,
              "end": 1173
            },
            "arguments": [],
            "start": 1156,
            "end": 1175
          },
          "definite": false,
          "start": 1146,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1140,
      "end": 1176
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1177,
            "end": 1184
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1188
          },
          "optional": false,
          "computed": false,
          "start": 1177,
          "end": 1188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1189,
            "end": 1190
          }
        ],
        "optional": false,
        "start": 1177,
        "end": 1191
      },
      "directive": null,
      "start": 1177,
      "end": 1192
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1193,
            "end": 1200
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 1201,
            "end": 1204
          },
          "optional": false,
          "computed": false,
          "start": 1193,
          "end": 1204
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1205,
            "end": 1206
          }
        ],
        "optional": false,
        "start": 1193,
        "end": 1207
      },
      "directive": null,
      "start": 1193,
      "end": 1208
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1209,
            "end": 1216
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 1217,
            "end": 1220
          },
          "optional": false,
          "computed": false,
          "start": 1209,
          "end": 1220
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1221,
            "end": 1222
          }
        ],
        "optional": false,
        "start": 1209,
        "end": 1223
      },
      "directive": null,
      "start": 1209,
      "end": 1224
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1226,
            "end": 1233
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "transform",
            "optional": false,
            "typeAnnotation": null,
            "start": 1234,
            "end": 1243
          },
          "optional": false,
          "computed": false,
          "start": 1226,
          "end": 1243
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "compose",
              "optional": false,
              "typeAnnotation": null,
              "start": 1247,
              "end": 1254
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1260,
                  "end": 1266
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
                        "start": 1267,
                        "end": 1268
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1272,
                          "end": 1273
                        },
                        "operator": "%",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1276,
                          "end": 1277
                        },
                        "start": 1272,
                        "end": 1277
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1282,
                        "end": 1283
                      },
                      "start": 1272,
                      "end": 1283
                    },
                    "id": null,
                    "generator": false,
                    "start": 1267,
                    "end": 1283
                  }
                ],
                "optional": false,
                "start": 1260,
                "end": 1284
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1290,
                  "end": 1293
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
                        "start": 1294,
                        "end": 1295
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1299,
                        "end": 1300
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1303,
                        "end": 1304
                      },
                      "start": 1299,
                      "end": 1304
                    },
                    "id": null,
                    "generator": false,
                    "start": 1294,
                    "end": 1304
                  }
                ],
                "optional": false,
                "start": 1290,
                "end": 1305
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1311,
                  "end": 1314
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
                        "start": 1315,
                        "end": 1316
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1320,
                        "end": 1321
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": "!!!",
                        "raw": "'!!!'",
                        "start": 1324,
                        "end": 1329
                      },
                      "start": 1320,
                      "end": 1329
                    },
                    "id": null,
                    "generator": false,
                    "start": 1315,
                    "end": 1329
                  }
                ],
                "optional": false,
                "start": 1311,
                "end": 1330
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1336,
                  "end": 1339
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
                        "start": 1340,
                        "end": 1341
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1345,
                          "end": 1346
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1347,
                          "end": 1358
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1345,
                        "end": 1358
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1345,
                      "end": 1360
                    },
                    "id": null,
                    "generator": false,
                    "start": 1340,
                    "end": 1360
                  }
                ],
                "optional": false,
                "start": 1336,
                "end": 1361
              }
            ],
            "optional": false,
            "start": 1247,
            "end": 1365
          }
        ],
        "optional": false,
        "start": 1226,
        "end": 1367
      },
      "directive": null,
      "start": 1226,
      "end": 1367
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
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1369,
            "end": 1376
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "transform",
            "optional": false,
            "typeAnnotation": null,
            "start": 1377,
            "end": 1386
          },
          "optional": false,
          "computed": false,
          "start": 1369,
          "end": 1386
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "compose",
              "optional": false,
              "typeAnnotation": null,
              "start": 1390,
              "end": 1397
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1403,
                  "end": 1409
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
                        "start": 1410,
                        "end": 1411
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1415,
                          "end": 1416
                        },
                        "operator": "%",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1419,
                          "end": 1420
                        },
                        "start": 1415,
                        "end": 1420
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1425,
                        "end": 1426
                      },
                      "start": 1415,
                      "end": 1426
                    },
                    "id": null,
                    "generator": false,
                    "start": 1410,
                    "end": 1426
                  }
                ],
                "optional": false,
                "start": 1403,
                "end": 1427
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1433,
                  "end": 1436
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
                        "start": 1437,
                        "end": 1438
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1442,
                        "end": 1443
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1446,
                        "end": 1447
                      },
                      "start": 1442,
                      "end": 1447
                    },
                    "id": null,
                    "generator": false,
                    "start": 1437,
                    "end": 1447
                  }
                ],
                "optional": false,
                "start": 1433,
                "end": 1448
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1454,
                  "end": 1457
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
                        "start": 1458,
                        "end": 1459
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 1463,
                      "end": 1466
                    },
                    "id": null,
                    "generator": false,
                    "start": 1458,
                    "end": 1466
                  }
                ],
                "optional": false,
                "start": 1454,
                "end": 1467
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1490,
                  "end": 1493
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
                        "start": 1494,
                        "end": 1495
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1499,
                          "end": 1500
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1501,
                          "end": 1512
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1499,
                        "end": 1512
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1499,
                      "end": 1514
                    },
                    "id": null,
                    "generator": false,
                    "start": 1494,
                    "end": 1514
                  }
                ],
                "optional": false,
                "start": 1490,
                "end": 1515
              }
            ],
            "optional": false,
            "start": 1390,
            "end": 1539
          }
        ],
        "optional": false,
        "start": 1369,
        "end": 1541
      },
      "directive": null,
      "start": 1369,
      "end": 1541
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 1541
}
```
