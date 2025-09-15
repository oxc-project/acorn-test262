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
        "start": 10,
        "end": 11
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
                "start": 35,
                "end": 36
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
                      "start": 37,
                      "end": 38
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 37,
                    "end": 38
                  }
                ],
                "start": 36,
                "end": 39
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
                      "start": 50,
                      "end": 59
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
                                      "start": 81,
                                      "end": 82
                                    },
                                    "typeArguments": null,
                                    "start": 81,
                                    "end": 82
                                  },
                                  "start": 79,
                                  "end": 82
                                },
                                "start": 71,
                                "end": 82
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 87,
                                "end": 91
                              },
                              "start": 84,
                              "end": 91
                            },
                            "start": 70,
                            "end": 91
                          },
                          "start": 68,
                          "end": 91
                        },
                        "start": 60,
                        "end": 91
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 95,
                        "end": 98
                      },
                      "start": 93,
                      "end": 98
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 50,
                    "end": 99
                  }
                ],
                "start": 40,
                "end": 105
              },
              "declare": false,
              "start": 25,
              "end": 105
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 105
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
                "start": 123,
                "end": 125
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
                      "start": 126,
                      "end": 127
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 126,
                    "end": 127
                  }
                ],
                "start": 125,
                "end": 128
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
                      "start": 146,
                      "end": 151
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
                          "start": 153,
                          "end": 154
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
                                "start": 155,
                                "end": 156
                              },
                              "typeArguments": null,
                              "start": 155,
                              "end": 156
                            }
                          ],
                          "start": 154,
                          "end": 157
                        },
                        "start": 153,
                        "end": 157
                      },
                      "start": 151,
                      "end": 157
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
                    "start": 139,
                    "end": 158
                  }
                ],
                "start": 129,
                "end": 164
              },
              "abstract": false,
              "declare": false,
              "start": 117,
              "end": 164
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 110,
            "end": 164
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
                "start": 182,
                "end": 183
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
                      "start": 184,
                      "end": 185
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 184,
                    "end": 185
                  }
                ],
                "start": 183,
                "end": 186
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
                      "start": 204,
                      "end": 209
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 211,
                        "end": 214
                      },
                      "start": 209,
                      "end": 214
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
                    "start": 197,
                    "end": 215
                  }
                ],
                "start": 187,
                "end": 221
              },
              "abstract": false,
              "declare": false,
              "start": 176,
              "end": 221
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 169,
            "end": 221
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
                "start": 239,
                "end": 240
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
                      "start": 241,
                      "end": 242
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 241,
                    "end": 242
                  }
                ],
                "start": 240,
                "end": 243
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 254
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
                      "start": 255,
                      "end": 256
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
                            "start": 257,
                            "end": 258
                          },
                          "typeArguments": null,
                          "start": 257,
                          "end": 258
                        }
                      ],
                      "start": 256,
                      "end": 259
                    },
                    "start": 255,
                    "end": 259
                  }
                ],
                "start": 254,
                "end": 260
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 261,
                "end": 264
              },
              "abstract": false,
              "declare": false,
              "start": 233,
              "end": 264
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 226,
            "end": 264
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
                "start": 282,
                "end": 283
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
                      "start": 284,
                      "end": 285
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 284,
                    "end": 285
                  }
                ],
                "start": 283,
                "end": 286
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
                      "start": 297,
                      "end": 307
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
                                "start": 319,
                                "end": 320
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
                                      "start": 321,
                                      "end": 322
                                    },
                                    "typeArguments": null,
                                    "start": 321,
                                    "end": 322
                                  }
                                ],
                                "start": 320,
                                "end": 323
                              },
                              "start": 319,
                              "end": 323
                            },
                            "start": 317,
                            "end": 323
                          },
                          "start": 308,
                          "end": 323
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 326,
                          "end": 330
                        },
                        "start": 324,
                        "end": 330
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
                                  "start": 349,
                                  "end": 350
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
                                            "start": 364,
                                            "end": 365
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
                                                  "start": 366,
                                                  "end": 367
                                                },
                                                "typeArguments": null,
                                                "start": 366,
                                                "end": 367
                                              }
                                            ],
                                            "start": 365,
                                            "end": 368
                                          },
                                          "start": 364,
                                          "end": 368
                                        },
                                        "start": 362,
                                        "end": 368
                                      },
                                      "start": 354,
                                      "end": 368
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 373,
                                    "end": 376
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 353,
                                  "end": 376
                                },
                                "definite": false,
                                "start": 349,
                                "end": 376
                              }
                            ],
                            "declare": false,
                            "start": 345,
                            "end": 377
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
                                        "start": 398,
                                        "end": 399
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
                                              "start": 400,
                                              "end": 401
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
                                                    "start": 402,
                                                    "end": 403
                                                  },
                                                  "typeArguments": null,
                                                  "start": 402,
                                                  "end": 403
                                                }
                                              ],
                                              "start": 401,
                                              "end": 404
                                            },
                                            "start": 400,
                                            "end": 404
                                          }
                                        ],
                                        "start": 399,
                                        "end": 405
                                      },
                                      "start": 398,
                                      "end": 405
                                    },
                                    "start": 396,
                                    "end": 405
                                  },
                                  "start": 395,
                                  "end": 405
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "viewModel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 408,
                                    "end": 417
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 418,
                                    "end": 423
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 408,
                                  "end": 423
                                },
                                "definite": false,
                                "start": 395,
                                "end": 423
                              }
                            ],
                            "declare": false,
                            "start": 391,
                            "end": 424
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
                                  "start": 479,
                                  "end": 480
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "subscribe",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 481,
                                  "end": 490
                                },
                                "optional": false,
                                "computed": false,
                                "start": 479,
                                "end": 490
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 491,
                                  "end": 492
                                }
                              ],
                              "optional": false,
                              "start": 479,
                              "end": 493
                            },
                            "directive": null,
                            "start": 479,
                            "end": 494
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
                                  "start": 507,
                                  "end": 508
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "subscribe",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 509,
                                  "end": 518
                                },
                                "optional": false,
                                "computed": false,
                                "start": 507,
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
                                            "start": 530,
                                            "end": 531
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
                                                  "start": 532,
                                                  "end": 533
                                                },
                                                "typeArguments": null,
                                                "start": 532,
                                                "end": 533
                                              }
                                            ],
                                            "start": 531,
                                            "end": 534
                                          },
                                          "start": 530,
                                          "end": 534
                                        },
                                        "start": 528,
                                        "end": 534
                                      },
                                      "start": 520,
                                      "end": 534
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 539,
                                    "end": 542
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 519,
                                  "end": 542
                                }
                              ],
                              "optional": false,
                              "start": 507,
                              "end": 543
                            },
                            "directive": null,
                            "start": 507,
                            "end": 544
                          }
                        ],
                        "start": 331,
                        "end": 554
                      },
                      "expression": false,
                      "start": 307,
                      "end": 554
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 297,
                    "end": 554
                  }
                ],
                "start": 287,
                "end": 560
              },
              "abstract": false,
              "declare": false,
              "start": 276,
              "end": 560
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 269,
            "end": 560
          }
        ],
        "start": 12,
        "end": 562
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 562
}
```
