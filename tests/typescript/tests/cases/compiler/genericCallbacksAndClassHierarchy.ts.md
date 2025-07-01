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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
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
                      "start": 34,
                      "end": 35
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 34,
                    "end": 35
                  }
                ],
                "start": 33,
                "end": 36
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "subscribe",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 56
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
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
                                "name": "newValue",
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
                                      "start": 78,
                                      "end": 79
                                    },
                                    "typeArguments": null,
                                    "start": 78,
                                    "end": 79
                                  },
                                  "start": 76,
                                  "end": 79
                                },
                                "start": 68,
                                "end": 79
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 84,
                                "end": 88
                              },
                              "start": 81,
                              "end": 88
                            },
                            "start": 67,
                            "end": 88
                          },
                          "start": 65,
                          "end": 88
                        },
                        "start": 57,
                        "end": 88
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 92,
                        "end": 95
                      },
                      "start": 90,
                      "end": 95
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 47,
                    "end": 96
                  }
                ],
                "start": 37,
                "end": 102
              },
              "declare": false,
              "start": 22,
              "end": 102
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 15,
            "end": 102
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 122
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
                      "start": 123,
                      "end": 124
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 123,
                    "end": 124
                  }
                ],
                "start": 122,
                "end": 125
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 148
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 151
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 152,
                                "end": 153
                              },
                              "typeArguments": null,
                              "start": 152,
                              "end": 153
                            }
                          ],
                          "start": 151,
                          "end": 154
                        },
                        "start": 150,
                        "end": 154
                      },
                      "start": 148,
                      "end": 154
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 136,
                    "end": 155
                  }
                ],
                "start": 126,
                "end": 161
              },
              "abstract": false,
              "declare": false,
              "start": 114,
              "end": 161
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 107,
            "end": 161
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 180
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
                      "start": 181,
                      "end": 182
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 181,
                    "end": 182
                  }
                ],
                "start": 180,
                "end": 183
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
                      "name": "dummy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 201,
                      "end": 206
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 208,
                        "end": 211
                      },
                      "start": 206,
                      "end": 211
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 194,
                    "end": 212
                  }
                ],
                "start": 184,
                "end": 218
              },
              "abstract": false,
              "declare": false,
              "start": 173,
              "end": 218
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 166,
            "end": 218
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 237
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
                      "start": 238,
                      "end": 239
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 238,
                    "end": 239
                  }
                ],
                "start": 237,
                "end": 240
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 251
              },
              "superTypeArguments": {
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
                      "start": 252,
                      "end": 253
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 254,
                            "end": 255
                          },
                          "typeArguments": null,
                          "start": 254,
                          "end": 255
                        }
                      ],
                      "start": 253,
                      "end": 256
                    },
                    "start": 252,
                    "end": 256
                  }
                ],
                "start": 251,
                "end": 257
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 258,
                "end": 261
              },
              "abstract": false,
              "declare": false,
              "start": 230,
              "end": 261
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 223,
            "end": 261
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 280
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
                      "start": 281,
                      "end": 282
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 281,
                    "end": 282
                  }
                ],
                "start": 280,
                "end": 283
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
                      "name": "_subscribe",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 304
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
                          "name": "viewModel",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 316,
                                "end": 317
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 318,
                                      "end": 319
                                    },
                                    "typeArguments": null,
                                    "start": 318,
                                    "end": 319
                                  }
                                ],
                                "start": 317,
                                "end": 320
                              },
                              "start": 316,
                              "end": 320
                            },
                            "start": 314,
                            "end": 320
                          },
                          "start": 305,
                          "end": 320
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 323,
                          "end": 327
                        },
                        "start": 321,
                        "end": 327
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
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 346,
                                  "end": 347
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "newValue",
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
                                            "start": 361,
                                            "end": 362
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 363,
                                                  "end": 364
                                                },
                                                "typeArguments": null,
                                                "start": 363,
                                                "end": 364
                                              }
                                            ],
                                            "start": 362,
                                            "end": 365
                                          },
                                          "start": 361,
                                          "end": 365
                                        },
                                        "start": 359,
                                        "end": 365
                                      },
                                      "start": 351,
                                      "end": 365
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 370,
                                    "end": 373
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 350,
                                  "end": 373
                                },
                                "definite": false,
                                "start": 346,
                                "end": 373
                              }
                            ],
                            "declare": false,
                            "start": 342,
                            "end": 374
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
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "I",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 395,
                                        "end": 396
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
                                              "start": 397,
                                              "end": 398
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 399,
                                                    "end": 400
                                                  },
                                                  "typeArguments": null,
                                                  "start": 399,
                                                  "end": 400
                                                }
                                              ],
                                              "start": 398,
                                              "end": 401
                                            },
                                            "start": 397,
                                            "end": 401
                                          }
                                        ],
                                        "start": 396,
                                        "end": 402
                                      },
                                      "start": 395,
                                      "end": 402
                                    },
                                    "start": 393,
                                    "end": 402
                                  },
                                  "start": 392,
                                  "end": 402
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "viewModel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 405,
                                    "end": 414
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 415,
                                    "end": 420
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 405,
                                  "end": 420
                                },
                                "definite": false,
                                "start": 392,
                                "end": 420
                              }
                            ],
                            "declare": false,
                            "start": 388,
                            "end": 421
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
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 476,
                                  "end": 477
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "subscribe",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 478,
                                  "end": 487
                                },
                                "optional": false,
                                "computed": false,
                                "start": 476,
                                "end": 487
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 488,
                                  "end": 489
                                }
                              ],
                              "optional": false,
                              "start": 476,
                              "end": 490
                            },
                            "directive": null,
                            "start": 476,
                            "end": 491
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
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 504,
                                  "end": 505
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "subscribe",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 506,
                                  "end": 515
                                },
                                "optional": false,
                                "computed": false,
                                "start": 504,
                                "end": 515
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
                                      "name": "newValue",
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
                                            "start": 527,
                                            "end": 528
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 529,
                                                  "end": 530
                                                },
                                                "typeArguments": null,
                                                "start": 529,
                                                "end": 530
                                              }
                                            ],
                                            "start": 528,
                                            "end": 531
                                          },
                                          "start": 527,
                                          "end": 531
                                        },
                                        "start": 525,
                                        "end": 531
                                      },
                                      "start": 517,
                                      "end": 531
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 536,
                                    "end": 539
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 516,
                                  "end": 539
                                }
                              ],
                              "optional": false,
                              "start": 504,
                              "end": 540
                            },
                            "directive": null,
                            "start": 504,
                            "end": 541
                          }
                        ],
                        "start": 328,
                        "end": 551
                      },
                      "expression": false,
                      "start": 304,
                      "end": 551
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 294,
                    "end": 551
                  }
                ],
                "start": 284,
                "end": 557
              },
              "abstract": false,
              "declare": false,
              "start": 273,
              "end": 557
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 266,
            "end": 557
          }
        ],
        "start": 9,
        "end": 559
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 559
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 559
}
```
