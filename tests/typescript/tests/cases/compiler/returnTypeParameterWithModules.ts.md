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
        "start": 7,
        "end": 9
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
                "start": 32,
                "end": 38
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
                      "start": 39,
                      "end": 40
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 39,
                    "end": 40
                  }
                ],
                "start": 38,
                "end": 41
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 44
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 47
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": true,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 51
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
                    "start": 54,
                    "end": 59
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
                          "start": 60,
                          "end": 61
                        },
                        "typeArguments": null,
                        "start": 60,
                        "end": 61
                      }
                    ],
                    "start": 59,
                    "end": 62
                  },
                  "start": 54,
                  "end": 62
                },
                "start": 52,
                "end": 62
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
                              "start": 80,
                              "end": 85
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prototype",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 86,
                              "end": 95
                            },
                            "optional": false,
                            "computed": false,
                            "start": 80,
                            "end": 95
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "reduce",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 96,
                            "end": 102
                          },
                          "optional": false,
                          "computed": false,
                          "start": 80,
                          "end": 102
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 103,
                          "end": 108
                        },
                        "optional": false,
                        "computed": false,
                        "start": 80,
                        "end": 108
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 111
                        },
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 113,
                            "end": 114
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
                                "start": 118,
                                "end": 119
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 121,
                                "end": 122
                              }
                            ],
                            "start": 117,
                            "end": 123
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
                                "start": 127,
                                "end": 128
                              }
                            ],
                            "start": 126,
                            "end": 129
                          },
                          "start": 113,
                          "end": 129
                        }
                      ],
                      "optional": false,
                      "start": 80,
                      "end": 130
                    },
                    "start": 73,
                    "end": 131
                  }
                ],
                "start": 63,
                "end": 137
              },
              "expression": false,
              "start": 23,
              "end": 137
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 137
          },
          {
            "type": "EmptyStatement",
            "start": 137,
            "end": 138
          }
        ],
        "start": 10,
        "end": 140
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 140
    },
    {
      "type": "EmptyStatement",
      "start": 140,
      "end": 141
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 151
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
              "start": 163,
              "end": 164
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 169
            },
            "importKind": "value",
            "start": 156,
            "end": 169
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
                "start": 188,
                "end": 195
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
                          "start": 208,
                          "end": 209
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reduce",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 210,
                          "end": 216
                        },
                        "optional": false,
                        "computed": false,
                        "start": 208,
                        "end": 216
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 217,
                          "end": 226
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "compose2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 228,
                          "end": 236
                        }
                      ],
                      "optional": false,
                      "start": 208,
                      "end": 237
                    },
                    "directive": null,
                    "start": 208,
                    "end": 238
                  }
                ],
                "start": 198,
                "end": 244
              },
              "expression": false,
              "start": 179,
              "end": 244
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 172,
            "end": 244
          },
          {
            "type": "EmptyStatement",
            "start": 244,
            "end": 245
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
                "start": 266,
                "end": 274
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
                      "start": 275,
                      "end": 276
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 275,
                    "end": 276
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 279
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 278,
                    "end": 279
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
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
                "start": 274,
                "end": 283
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
                                "start": 291,
                                "end": 292
                              },
                              "typeArguments": null,
                              "start": 291,
                              "end": 292
                            },
                            "start": 289,
                            "end": 292
                          },
                          "start": 288,
                          "end": 292
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
                            "start": 297,
                            "end": 298
                          },
                          "typeArguments": null,
                          "start": 297,
                          "end": 298
                        },
                        "start": 294,
                        "end": 298
                      },
                      "start": 287,
                      "end": 298
                    },
                    "start": 285,
                    "end": 298
                  },
                  "start": 284,
                  "end": 298
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
                                "start": 307,
                                "end": 308
                              },
                              "typeArguments": null,
                              "start": 307,
                              "end": 308
                            },
                            "start": 305,
                            "end": 308
                          },
                          "start": 304,
                          "end": 308
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
                            "start": 313,
                            "end": 314
                          },
                          "typeArguments": null,
                          "start": 313,
                          "end": 314
                        },
                        "start": 310,
                        "end": 314
                      },
                      "start": 303,
                      "end": 314
                    },
                    "start": 301,
                    "end": 314
                  },
                  "start": 300,
                  "end": 314
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
                            "start": 321,
                            "end": 322
                          },
                          "typeArguments": null,
                          "start": 321,
                          "end": 322
                        },
                        "start": 319,
                        "end": 322
                      },
                      "start": 318,
                      "end": 322
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
                        "start": 327,
                        "end": 328
                      },
                      "typeArguments": null,
                      "start": 327,
                      "end": 328
                    },
                    "start": 324,
                    "end": 328
                  },
                  "start": 317,
                  "end": 328
                },
                "start": 315,
                "end": 328
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
                          "start": 352,
                          "end": 353
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
                                "start": 364,
                                "end": 365
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
                                    "start": 366,
                                    "end": 367
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 368,
                                      "end": 369
                                    }
                                  ],
                                  "optional": false,
                                  "start": 366,
                                  "end": 370
                                }
                              ],
                              "optional": false,
                              "start": 364,
                              "end": 371
                            },
                            "start": 357,
                            "end": 372
                          }
                        ],
                        "start": 355,
                        "end": 374
                      },
                      "expression": false,
                      "start": 342,
                      "end": 374
                    },
                    "start": 335,
                    "end": 374
                  }
                ],
                "start": 329,
                "end": 378
              },
              "expression": false,
              "start": 257,
              "end": 378
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 250,
            "end": 378
          },
          {
            "type": "EmptyStatement",
            "start": 378,
            "end": 379
          }
        ],
        "start": 152,
        "end": 381
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 142,
      "end": 381
    },
    {
      "type": "EmptyStatement",
      "start": 381,
      "end": 382
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 382
}
```
