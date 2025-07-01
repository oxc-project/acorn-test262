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
        "name": "Vec2_T",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 42
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
              "start": 43,
              "end": 44
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 43,
            "end": 44
          }
        ],
        "start": 42,
        "end": 45
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 63
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 74,
                          "end": 75
                        },
                        "typeArguments": null,
                        "start": 74,
                        "end": 75
                      },
                      "start": 72,
                      "end": 75
                    },
                    "start": 71,
                    "end": 75
                  },
                  "readonly": false,
                  "static": false,
                  "start": 64,
                  "end": 75
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 87,
                          "end": 88
                        },
                        "typeArguments": null,
                        "start": 87,
                        "end": 88
                      },
                      "start": 85,
                      "end": 88
                    },
                    "start": 84,
                    "end": 88
                  },
                  "readonly": false,
                  "static": false,
                  "start": 77,
                  "end": 88
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 90,
                "end": 93
              },
              "expression": false,
              "start": 63,
              "end": 93
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 52,
            "end": 93
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fmap",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 102
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
                      "start": 103,
                      "end": 104
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 103,
                    "end": 104
                  }
                ],
                "start": 102,
                "end": 105
              },
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
                                "start": 113,
                                "end": 114
                              },
                              "typeArguments": null,
                              "start": 113,
                              "end": 114
                            },
                            "start": 111,
                            "end": 114
                          },
                          "start": 110,
                          "end": 114
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
                            "start": 119,
                            "end": 120
                          },
                          "typeArguments": null,
                          "start": 119,
                          "end": 120
                        },
                        "start": 116,
                        "end": 120
                      },
                      "start": 109,
                      "end": 120
                    },
                    "start": 107,
                    "end": 120
                  },
                  "start": 106,
                  "end": 120
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vec2_T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 129
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
                          "start": 130,
                          "end": 131
                        },
                        "typeArguments": null,
                        "start": 130,
                        "end": 131
                      }
                    ],
                    "start": 129,
                    "end": 132
                  },
                  "start": 123,
                  "end": 132
                },
                "start": 121,
                "end": 132
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
                          "name": "x",
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
                                "start": 149,
                                "end": 150
                              },
                              "typeArguments": null,
                              "start": 149,
                              "end": 150
                            },
                            "start": 148,
                            "end": 150
                          },
                          "start": 147,
                          "end": 150
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 153,
                            "end": 154
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 155,
                                "end": 159
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 160,
                                "end": 161
                              },
                              "optional": false,
                              "computed": false,
                              "start": 155,
                              "end": 161
                            }
                          ],
                          "optional": false,
                          "start": 153,
                          "end": 162
                        },
                        "definite": false,
                        "start": 147,
                        "end": 162
                      }
                    ],
                    "declare": false,
                    "start": 143,
                    "end": 163
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
                          "name": "y",
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
                                "start": 178,
                                "end": 179
                              },
                              "typeArguments": null,
                              "start": 178,
                              "end": 179
                            },
                            "start": 177,
                            "end": 179
                          },
                          "start": 176,
                          "end": 179
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 183
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 184,
                                "end": 188
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 189,
                                "end": 190
                              },
                              "optional": false,
                              "computed": false,
                              "start": 184,
                              "end": 190
                            }
                          ],
                          "optional": false,
                          "start": 182,
                          "end": 191
                        },
                        "definite": false,
                        "start": 176,
                        "end": 191
                      }
                    ],
                    "declare": false,
                    "start": 172,
                    "end": 192
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
                          "name": "retval",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Vec2_T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 213,
                                "end": 219
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
                                      "start": 220,
                                      "end": 221
                                    },
                                    "typeArguments": null,
                                    "start": 220,
                                    "end": 221
                                  }
                                ],
                                "start": 219,
                                "end": 222
                              },
                              "start": 213,
                              "end": 222
                            },
                            "start": 211,
                            "end": 222
                          },
                          "start": 205,
                          "end": 222
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Vec2_T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 229,
                            "end": 235
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 236,
                              "end": 237
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 239,
                              "end": 240
                            }
                          ],
                          "start": 225,
                          "end": 241
                        },
                        "definite": false,
                        "start": 205,
                        "end": 241
                      }
                    ],
                    "declare": false,
                    "start": 201,
                    "end": 242
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "retval",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 264
                    },
                    "start": 251,
                    "end": 265
                  }
                ],
                "start": 133,
                "end": 271
              },
              "expression": false,
              "start": 102,
              "end": 271
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 98,
            "end": 271
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 281
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
                      "start": 282,
                      "end": 283
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 282,
                    "end": 283
                  }
                ],
                "start": 281,
                "end": 284
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vec2_T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 294
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
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
                                  "start": 305,
                                  "end": 306
                                },
                                "typeArguments": null,
                                "start": 305,
                                "end": 306
                              },
                              "start": 302,
                              "end": 306
                            },
                            "start": 295,
                            "end": 306
                          }
                        ],
                        "start": 294,
                        "end": 307
                      },
                      "start": 288,
                      "end": 307
                    },
                    "start": 286,
                    "end": 307
                  },
                  "start": 285,
                  "end": 307
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vec2_T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 316
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
                          "start": 317,
                          "end": 318
                        },
                        "typeArguments": null,
                        "start": 317,
                        "end": 318
                      }
                    ],
                    "start": 316,
                    "end": 319
                  },
                  "start": 310,
                  "end": 319
                },
                "start": 308,
                "end": 319
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
                          "name": "x",
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
                                "start": 336,
                                "end": 337
                              },
                              "typeArguments": null,
                              "start": 336,
                              "end": 337
                            },
                            "start": 335,
                            "end": 337
                          },
                          "start": 334,
                          "end": 337
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 340,
                              "end": 341
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 342,
                              "end": 343
                            },
                            "optional": false,
                            "computed": false,
                            "start": 340,
                            "end": 343
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 344,
                                "end": 348
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 349,
                                "end": 350
                              },
                              "optional": false,
                              "computed": false,
                              "start": 344,
                              "end": 350
                            }
                          ],
                          "optional": false,
                          "start": 340,
                          "end": 351
                        },
                        "definite": false,
                        "start": 334,
                        "end": 351
                      }
                    ],
                    "declare": false,
                    "start": 330,
                    "end": 352
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
                          "name": "y",
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
                                "start": 367,
                                "end": 368
                              },
                              "typeArguments": null,
                              "start": 367,
                              "end": 368
                            },
                            "start": 366,
                            "end": 368
                          },
                          "start": 365,
                          "end": 368
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 371,
                              "end": 372
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 373,
                              "end": 374
                            },
                            "optional": false,
                            "computed": false,
                            "start": 371,
                            "end": 374
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 375,
                                "end": 379
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 380,
                                "end": 381
                              },
                              "optional": false,
                              "computed": false,
                              "start": 375,
                              "end": 381
                            }
                          ],
                          "optional": false,
                          "start": 371,
                          "end": 382
                        },
                        "definite": false,
                        "start": 365,
                        "end": 382
                      }
                    ],
                    "declare": false,
                    "start": 361,
                    "end": 383
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
                          "name": "retval",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Vec2_T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 404,
                                "end": 410
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
                                      "start": 411,
                                      "end": 412
                                    },
                                    "typeArguments": null,
                                    "start": 411,
                                    "end": 412
                                  }
                                ],
                                "start": 410,
                                "end": 413
                              },
                              "start": 404,
                              "end": 413
                            },
                            "start": 402,
                            "end": 413
                          },
                          "start": 396,
                          "end": 413
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Vec2_T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 420,
                            "end": 426
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 427,
                              "end": 428
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 430,
                              "end": 431
                            }
                          ],
                          "start": 416,
                          "end": 432
                        },
                        "definite": false,
                        "start": 396,
                        "end": 432
                      }
                    ],
                    "declare": false,
                    "start": 392,
                    "end": 433
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "retval",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 455
                    },
                    "start": 442,
                    "end": 456
                  }
                ],
                "start": 320,
                "end": 462
              },
              "expression": false,
              "start": 281,
              "end": 462
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 276,
            "end": 462
          }
        ],
        "start": 46,
        "end": 464
      },
      "abstract": false,
      "declare": false,
      "start": 30,
      "end": 464
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 464
}
```
