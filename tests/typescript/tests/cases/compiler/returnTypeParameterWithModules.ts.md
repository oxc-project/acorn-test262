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
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 41
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
                      "start": 42,
                      "end": 43
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 42,
                    "end": 43
                  }
                ],
                "start": 41,
                "end": 44
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 47
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 50
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": true,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 54
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 62
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
                          "start": 63,
                          "end": 64
                        },
                        "typeArguments": null,
                        "start": 63,
                        "end": 64
                      }
                    ],
                    "start": 62,
                    "end": 65
                  },
                  "start": 57,
                  "end": 65
                },
                "start": 55,
                "end": 65
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 83,
                              "end": 88
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prototype",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 89,
                              "end": 98
                            },
                            "optional": false,
                            "computed": false,
                            "start": 83,
                            "end": 98
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "reduce",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 99,
                            "end": 105
                          },
                          "optional": false,
                          "computed": false,
                          "start": 83,
                          "end": 105
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 106,
                          "end": 111
                        },
                        "optional": false,
                        "computed": false,
                        "start": 83,
                        "end": 111
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 112,
                          "end": 114
                        },
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 116,
                            "end": 117
                          },
                          "consequent": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 121,
                                "end": 122
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 124,
                                "end": 125
                              }
                            ],
                            "start": 120,
                            "end": 126
                          },
                          "alternate": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 130,
                                "end": 131
                              }
                            ],
                            "start": 129,
                            "end": 132
                          },
                          "start": 116,
                          "end": 132
                        }
                      ],
                      "optional": false,
                      "start": 83,
                      "end": 133
                    },
                    "start": 76,
                    "end": 134
                  }
                ],
                "start": 66,
                "end": 140
              },
              "expression": false,
              "start": 26,
              "end": 140
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 140
          },
          {
            "type": "EmptyStatement",
            "start": 140,
            "end": 141
          }
        ],
        "start": 13,
        "end": 143
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 143
    },
    {
      "type": "EmptyStatement",
      "start": 143,
      "end": 144
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 157
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 175
            },
            "importKind": "value",
            "start": 162,
            "end": 175
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "compose",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 201
              },
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 215
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reduce",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 216,
                          "end": 222
                        },
                        "optional": false,
                        "computed": false,
                        "start": 214,
                        "end": 222
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 223,
                          "end": 232
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "compose2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 242
                        }
                      ],
                      "optional": false,
                      "start": 214,
                      "end": 243
                    },
                    "directive": null,
                    "start": 214,
                    "end": 244
                  }
                ],
                "start": 204,
                "end": 250
              },
              "expression": false,
              "start": 185,
              "end": 250
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 178,
            "end": 250
          },
          {
            "type": "EmptyStatement",
            "start": 250,
            "end": 251
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "compose2",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 280
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
                      "name": "B",
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 288
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 287,
                    "end": 288
                  }
                ],
                "start": 280,
                "end": 289
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
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
                                "start": 297,
                                "end": 298
                              },
                              "typeArguments": null,
                              "start": 297,
                              "end": 298
                            },
                            "start": 295,
                            "end": 298
                          },
                          "start": 294,
                          "end": 298
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 303,
                            "end": 304
                          },
                          "typeArguments": null,
                          "start": 303,
                          "end": 304
                        },
                        "start": 300,
                        "end": 304
                      },
                      "start": 293,
                      "end": 304
                    },
                    "start": 291,
                    "end": 304
                  },
                  "start": 290,
                  "end": 304
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "D",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 313,
                                "end": 314
                              },
                              "typeArguments": null,
                              "start": 313,
                              "end": 314
                            },
                            "start": 311,
                            "end": 314
                          },
                          "start": 310,
                          "end": 314
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
                            "start": 319,
                            "end": 320
                          },
                          "typeArguments": null,
                          "start": 319,
                          "end": 320
                        },
                        "start": 316,
                        "end": 320
                      },
                      "start": 309,
                      "end": 320
                    },
                    "start": 307,
                    "end": 320
                  },
                  "start": 306,
                  "end": 320
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
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 327,
                            "end": 328
                          },
                          "typeArguments": null,
                          "start": 327,
                          "end": 328
                        },
                        "start": 325,
                        "end": 328
                      },
                      "start": 324,
                      "end": 328
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 334
                      },
                      "typeArguments": null,
                      "start": 333,
                      "end": 334
                    },
                    "start": 330,
                    "end": 334
                  },
                  "start": 323,
                  "end": 334
                },
                "start": 321,
                "end": 334
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                          "typeAnnotation": null,
                          "start": 358,
                          "end": 359
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
                                "name": "g",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 370,
                                "end": 371
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "f",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 372,
                                    "end": 373
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 374,
                                      "end": 375
                                    }
                                  ],
                                  "optional": false,
                                  "start": 372,
                                  "end": 376
                                }
                              ],
                              "optional": false,
                              "start": 370,
                              "end": 377
                            },
                            "start": 363,
                            "end": 378
                          }
                        ],
                        "start": 361,
                        "end": 380
                      },
                      "expression": false,
                      "start": 348,
                      "end": 380
                    },
                    "start": 341,
                    "end": 380
                  }
                ],
                "start": 335,
                "end": 384
              },
              "expression": false,
              "start": 263,
              "end": 384
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 256,
            "end": 384
          },
          {
            "type": "EmptyStatement",
            "start": 384,
            "end": 385
          }
        ],
        "start": 158,
        "end": 387
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 145,
      "end": 387
    },
    {
      "type": "EmptyStatement",
      "start": 387,
      "end": 388
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 388
}
```
