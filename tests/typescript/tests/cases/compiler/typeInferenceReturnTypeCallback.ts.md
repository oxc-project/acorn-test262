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
        "name": "IList",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
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
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 28
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 29,
                    "end": 30
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 29,
                  "end": 30
                }
              ],
              "start": 28,
              "end": 31
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
                        "name": "t",
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
                              "start": 39,
                              "end": 40
                            },
                            "typeArguments": null,
                            "start": 39,
                            "end": 40
                          },
                          "start": 37,
                          "end": 40
                        },
                        "start": 36,
                        "end": 40
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
                          "start": 45,
                          "end": 46
                        },
                        "typeArguments": null,
                        "start": 45,
                        "end": 46
                      },
                      "start": 42,
                      "end": 46
                    },
                    "start": 35,
                    "end": 46
                  },
                  "start": 33,
                  "end": 46
                },
                "start": 32,
                "end": 46
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 54
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
                        "start": 55,
                        "end": 56
                      },
                      "typeArguments": null,
                      "start": 55,
                      "end": 56
                    }
                  ],
                  "start": 54,
                  "end": 57
                },
                "start": 49,
                "end": 57
              },
              "start": 47,
              "end": 57
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 25,
            "end": 58
          }
        ],
        "start": 19,
        "end": 60
      },
      "declare": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nil",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 71,
        "end": 74
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IList",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 91
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
                  "start": 92,
                  "end": 93
                },
                "typeArguments": null,
                "start": 92,
                "end": 93
              }
            ],
            "start": 91,
            "end": 94
          },
          "start": 86,
          "end": 94
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 103
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
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 105
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 104,
                    "end": 105
                  }
                ],
                "start": 103,
                "end": 106
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
                          "name": "t",
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
                                "start": 114,
                                "end": 115
                              },
                              "typeArguments": null,
                              "start": 114,
                              "end": 115
                            },
                            "start": 112,
                            "end": 115
                          },
                          "start": 111,
                          "end": 115
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 120,
                            "end": 121
                          },
                          "typeArguments": null,
                          "start": 120,
                          "end": 121
                        },
                        "start": 117,
                        "end": 121
                      },
                      "start": 110,
                      "end": 121
                    },
                    "start": 108,
                    "end": 121
                  },
                  "start": 107,
                  "end": 121
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IList",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
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
                          "name": "D",
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
                  "start": 124,
                  "end": 132
                },
                "start": 122,
                "end": 132
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 150,
                      "end": 154
                    },
                    "start": 143,
                    "end": 155
                  }
                ],
                "start": 133,
                "end": 161
              },
              "expression": false,
              "start": 103,
              "end": 161
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 100,
            "end": 161
          }
        ],
        "start": 94,
        "end": 163
      },
      "abstract": false,
      "declare": false,
      "start": 62,
      "end": 163
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cons",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 175
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
              "start": 176,
              "end": 177
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 176,
            "end": 177
          }
        ],
        "start": 175,
        "end": 178
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IList",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 195
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
                  "start": 196,
                  "end": 197
                },
                "typeArguments": null,
                "start": 196,
                "end": 197
              }
            ],
            "start": 195,
            "end": 198
          },
          "start": 190,
          "end": 198
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
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
                      "name": "U",
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
                            "name": "U",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IList",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 233
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 235
                        },
                        "typeArguments": null,
                        "start": 234,
                        "end": 235
                      }
                    ],
                    "start": 233,
                    "end": 236
                  },
                  "start": 228,
                  "end": 236
                },
                "start": 226,
                "end": 236
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 254,
                          "end": 258
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foldRight",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 259,
                          "end": 268
                        },
                        "optional": false,
                        "computed": false,
                        "start": 254,
                        "end": 268
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Nil",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 273,
                            "end": 276
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 277,
                                  "end": 278
                                },
                                "typeArguments": null,
                                "start": 277,
                                "end": 278
                              }
                            ],
                            "start": 276,
                            "end": 279
                          },
                          "arguments": [],
                          "start": 269,
                          "end": 281
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 284,
                              "end": 285
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "acc",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 287,
                              "end": 290
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Cons",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 320,
                                    "end": 324
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 325,
                                          "end": 326
                                        },
                                        "typeArguments": null,
                                        "start": 325,
                                        "end": 326
                                      }
                                    ],
                                    "start": 324,
                                    "end": 327
                                  },
                                  "arguments": [],
                                  "start": 316,
                                  "end": 329
                                },
                                "start": 309,
                                "end": 330
                              }
                            ],
                            "start": 295,
                            "end": 340
                          },
                          "id": null,
                          "generator": false,
                          "start": 283,
                          "end": 340
                        }
                      ],
                      "optional": false,
                      "start": 254,
                      "end": 341
                    },
                    "start": 247,
                    "end": 342
                  }
                ],
                "start": 237,
                "end": 348
              },
              "expression": false,
              "start": 207,
              "end": 348
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 204,
            "end": 348
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foldRight",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 363
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
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 364,
                      "end": 365
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 364,
                    "end": 365
                  }
                ],
                "start": 363,
                "end": 366
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 370,
                        "end": 371
                      },
                      "typeArguments": null,
                      "start": 370,
                      "end": 371
                    },
                    "start": 368,
                    "end": 371
                  },
                  "start": 367,
                  "end": 371
                },
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
                                "start": 380,
                                "end": 381
                              },
                              "typeArguments": null,
                              "start": 380,
                              "end": 381
                            },
                            "start": 378,
                            "end": 381
                          },
                          "start": 377,
                          "end": 381
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "acc",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 388,
                                "end": 389
                              },
                              "typeArguments": null,
                              "start": 388,
                              "end": 389
                            },
                            "start": 386,
                            "end": 389
                          },
                          "start": 383,
                          "end": 389
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 394,
                            "end": 395
                          },
                          "typeArguments": null,
                          "start": 394,
                          "end": 395
                        },
                        "start": 391,
                        "end": 395
                      },
                      "start": 376,
                      "end": 395
                    },
                    "start": 374,
                    "end": 395
                  },
                  "start": 373,
                  "end": 395
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 399
                  },
                  "typeArguments": null,
                  "start": 398,
                  "end": 399
                },
                "start": 396,
                "end": 399
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 417,
                      "end": 421
                    },
                    "start": 410,
                    "end": 422
                  }
                ],
                "start": 400,
                "end": 428
              },
              "expression": false,
              "start": 363,
              "end": 428
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 354,
            "end": 428
          }
        ],
        "start": 198,
        "end": 430
      },
      "abstract": false,
      "declare": false,
      "start": 165,
      "end": 430
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 430
}
```
