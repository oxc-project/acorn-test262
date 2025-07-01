__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bluebird",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 21
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
                "start": 22,
                "end": 23
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 22,
              "end": 23
            }
          ],
          "start": 21,
          "end": 24
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
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 41
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 48
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bluebird",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 49,
                          "end": 57
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 58,
                              "end": 61
                            }
                          ],
                          "start": 57,
                          "end": 62
                        },
                        "start": 49,
                        "end": 62
                      }
                    ],
                    "start": 48,
                    "end": 63
                  },
                  "start": 43,
                  "end": 63
                },
                "start": 41,
                "end": 63
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 31,
              "end": 64
            }
          ],
          "start": 25,
          "end": 66
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "runSampleWorks",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 104
        },
        "generator": false,
        "async": true,
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
                "start": 105,
                "end": 106
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 105,
              "end": 106
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 109
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 108,
              "end": 109
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 112
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 111,
              "end": 112
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
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
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 117,
              "end": 118
            }
          ],
          "start": 104,
          "end": 119
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
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 136
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
                        "start": 137,
                        "end": 138
                      },
                      "typeArguments": null,
                      "start": 137,
                      "end": 138
                    }
                  ],
                  "start": 136,
                  "end": 139
                },
                "start": 128,
                "end": 139
              },
              "start": 126,
              "end": 139
            },
            "start": 125,
            "end": 139
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 153
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
                        "start": 154,
                        "end": 155
                      },
                      "typeArguments": null,
                      "start": 154,
                      "end": 155
                    }
                  ],
                  "start": 153,
                  "end": 156
                },
                "start": 145,
                "end": 156
              },
              "start": 143,
              "end": 156
            },
            "start": 141,
            "end": 156
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 170
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
                        "start": 171,
                        "end": 172
                      },
                      "typeArguments": null,
                      "start": 171,
                      "end": 172
                    }
                  ],
                  "start": 170,
                  "end": 173
                },
                "start": 162,
                "end": 173
              },
              "start": 160,
              "end": 173
            },
            "start": 158,
            "end": 173
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 187
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
                        "start": 188,
                        "end": 189
                      },
                      "typeArguments": null,
                      "start": 188,
                      "end": 189
                    }
                  ],
                  "start": 187,
                  "end": 190
                },
                "start": 179,
                "end": 190
              },
              "start": 177,
              "end": 190
            },
            "start": 175,
            "end": 190
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 204
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
                        "start": 205,
                        "end": 206
                      },
                      "typeArguments": null,
                      "start": 205,
                      "end": 206
                    }
                  ],
                  "start": 204,
                  "end": 207
                },
                "start": 196,
                "end": 207
              },
              "start": 194,
              "end": 207
            },
            "start": 192,
            "end": 207
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 225
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bluebird",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 235,
                            "end": 243
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "all",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 244,
                            "end": 247
                          },
                          "optional": false,
                          "computed": false,
                          "start": 235,
                          "end": 247
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 251,
                          "end": 254
                        },
                        "start": 235,
                        "end": 254
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 257,
                                  "end": 258
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 260,
                                  "end": 261
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 263,
                                  "end": 264
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 266,
                                  "end": 267
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 269,
                                  "end": 270
                                }
                              ],
                              "start": 256,
                              "end": 271
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 272,
                              "end": 278
                            },
                            "optional": false,
                            "computed": false,
                            "start": 256,
                            "end": 278
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
                                  "name": "el",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 279,
                                  "end": 281
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 287,
                                    "end": 289
                                  },
                                  "prefix": true,
                                  "start": 286,
                                  "end": 289
                                },
                                "prefix": true,
                                "start": 285,
                                "end": 289
                              },
                              "id": null,
                              "generator": false,
                              "start": 279,
                              "end": 289
                            }
                          ],
                          "optional": false,
                          "start": 256,
                          "end": 290
                        }
                      ],
                      "optional": false,
                      "start": 234,
                      "end": 291
                    },
                    "start": 228,
                    "end": 291
                  },
                  "definite": false,
                  "start": 219,
                  "end": 291
                }
              ],
              "declare": false,
              "start": 215,
              "end": 292
            },
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 305
                  },
                  "init": {
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 309,
                            "end": 310
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 309,
                          "end": 310
                        }
                      ],
                      "start": 308,
                      "end": 311
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
                                      "start": 319,
                                      "end": 320
                                    },
                                    "typeArguments": null,
                                    "start": 319,
                                    "end": 320
                                  },
                                  "start": 317,
                                  "end": 320
                                },
                                "start": 316,
                                "end": 320
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": true,
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
                                      "start": 326,
                                      "end": 327
                                    },
                                    "typeArguments": null,
                                    "start": 326,
                                    "end": 327
                                  },
                                  "start": 324,
                                  "end": 327
                                },
                                "start": 322,
                                "end": 327
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": true,
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
                                      "start": 333,
                                      "end": 334
                                    },
                                    "typeArguments": null,
                                    "start": 333,
                                    "end": 334
                                  },
                                  "start": 331,
                                  "end": 334
                                },
                                "start": 329,
                                "end": 334
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d",
                                "optional": true,
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
                                      "start": 340,
                                      "end": 341
                                    },
                                    "typeArguments": null,
                                    "start": 340,
                                    "end": 341
                                  },
                                  "start": 338,
                                  "end": 341
                                },
                                "start": 336,
                                "end": 341
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": true,
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
                                      "start": 347,
                                      "end": 348
                                    },
                                    "typeArguments": null,
                                    "start": 347,
                                    "end": 348
                                  },
                                  "start": 345,
                                  "end": 348
                                },
                                "start": 343,
                                "end": 348
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
                                  "start": 353,
                                  "end": 354
                                },
                                "typeArguments": null,
                                "start": 353,
                                "end": 354
                              },
                              "start": 350,
                              "end": 354
                            },
                            "start": 315,
                            "end": 354
                          },
                          "start": 313,
                          "end": 354
                        },
                        "start": 312,
                        "end": 354
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
                          "start": 357,
                          "end": 358
                        },
                        "typeArguments": null,
                        "start": 357,
                        "end": 358
                      },
                      "start": 355,
                      "end": 358
                    },
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 370,
                          "end": 371
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 372,
                          "end": 377
                        },
                        "optional": false,
                        "computed": false,
                        "start": 370,
                        "end": 377
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 378,
                          "end": 382
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 390
                        }
                      ],
                      "optional": false,
                      "start": 370,
                      "end": 391
                    },
                    "id": null,
                    "generator": false,
                    "start": 308,
                    "end": 391
                  },
                  "definite": false,
                  "start": 301,
                  "end": 391
                }
              ],
              "declare": false,
              "start": 297,
              "end": 392
            },
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rfunc",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 415,
                              "end": 419
                            },
                            "typeArguments": null,
                            "start": 408,
                            "end": 419
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 422,
                            "end": 424
                          }
                        ],
                        "start": 408,
                        "end": 424
                      },
                      "start": 406,
                      "end": 424
                    },
                    "start": 401,
                    "end": 424
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 427,
                      "end": 431
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 435,
                      "end": 438
                    },
                    "start": 427,
                    "end": 438
                  },
                  "definite": false,
                  "start": 401,
                  "end": 438
                }
              ],
              "declare": false,
              "start": 397,
              "end": 439
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rfunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 490
              },
              "start": 478,
              "end": 490
            }
          ],
          "start": 209,
          "end": 492
        },
        "expression": false,
        "start": 75,
        "end": 492
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 68,
      "end": 492
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "runSampleBreaks",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 531
        },
        "generator": false,
        "async": true,
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
                "start": 532,
                "end": 533
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 532,
              "end": 533
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 536
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 535,
              "end": 536
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 539
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 538,
              "end": 539
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 541,
              "end": 542
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 545
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 544,
              "end": 545
            }
          ],
          "start": 531,
          "end": 546
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
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 563
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
                        "start": 564,
                        "end": 565
                      },
                      "typeArguments": null,
                      "start": 564,
                      "end": 565
                    }
                  ],
                  "start": 563,
                  "end": 566
                },
                "start": 555,
                "end": 566
              },
              "start": 553,
              "end": 566
            },
            "start": 552,
            "end": 566
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 580
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
                        "start": 581,
                        "end": 582
                      },
                      "typeArguments": null,
                      "start": 581,
                      "end": 582
                    }
                  ],
                  "start": 580,
                  "end": 583
                },
                "start": 572,
                "end": 583
              },
              "start": 570,
              "end": 583
            },
            "start": 568,
            "end": 583
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 589,
                  "end": 597
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
                        "start": 598,
                        "end": 599
                      },
                      "typeArguments": null,
                      "start": 598,
                      "end": 599
                    }
                  ],
                  "start": 597,
                  "end": 600
                },
                "start": 589,
                "end": 600
              },
              "start": 587,
              "end": 600
            },
            "start": 585,
            "end": 600
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 606,
                  "end": 614
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
                        "start": 615,
                        "end": 616
                      },
                      "typeArguments": null,
                      "start": 615,
                      "end": 616
                    }
                  ],
                  "start": 614,
                  "end": 617
                },
                "start": 606,
                "end": 617
              },
              "start": 604,
              "end": 617
            },
            "start": 602,
            "end": 617
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 631
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
                        "start": 632,
                        "end": 633
                      },
                      "typeArguments": null,
                      "start": 632,
                      "end": 633
                    }
                  ],
                  "start": 631,
                  "end": 634
                },
                "start": 623,
                "end": 634
              },
              "start": 621,
              "end": 634
            },
            "start": 619,
            "end": 634
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 652
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bluebird",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 662,
                            "end": 670
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "all",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 671,
                            "end": 674
                          },
                          "optional": false,
                          "computed": false,
                          "start": 662,
                          "end": 674
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 678,
                          "end": 681
                        },
                        "start": 662,
                        "end": 681
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 684,
                                  "end": 685
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 687,
                                  "end": 688
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 690,
                                  "end": 691
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 693,
                                  "end": 694
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 696,
                                  "end": 697
                                }
                              ],
                              "start": 683,
                              "end": 698
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 699,
                              "end": 705
                            },
                            "optional": false,
                            "computed": false,
                            "start": 683,
                            "end": 705
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
                                  "name": "el",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 706,
                                  "end": 708
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 714,
                                    "end": 716
                                  },
                                  "prefix": true,
                                  "start": 713,
                                  "end": 716
                                },
                                "prefix": true,
                                "start": 712,
                                "end": 716
                              },
                              "id": null,
                              "generator": false,
                              "start": 706,
                              "end": 716
                            }
                          ],
                          "optional": false,
                          "start": 683,
                          "end": 717
                        }
                      ],
                      "optional": false,
                      "start": 661,
                      "end": 718
                    },
                    "start": 655,
                    "end": 718
                  },
                  "definite": false,
                  "start": 646,
                  "end": 718
                }
              ],
              "declare": false,
              "start": 642,
              "end": 719
            },
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 728,
                    "end": 732
                  },
                  "init": {
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 736,
                            "end": 737
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 736,
                          "end": 737
                        }
                      ],
                      "start": 735,
                      "end": 738
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
                                      "start": 746,
                                      "end": 747
                                    },
                                    "typeArguments": null,
                                    "start": 746,
                                    "end": 747
                                  },
                                  "start": 744,
                                  "end": 747
                                },
                                "start": 743,
                                "end": 747
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": true,
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
                                      "start": 753,
                                      "end": 754
                                    },
                                    "typeArguments": null,
                                    "start": 753,
                                    "end": 754
                                  },
                                  "start": 751,
                                  "end": 754
                                },
                                "start": 749,
                                "end": 754
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": true,
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
                                      "start": 760,
                                      "end": 761
                                    },
                                    "typeArguments": null,
                                    "start": 760,
                                    "end": 761
                                  },
                                  "start": 758,
                                  "end": 761
                                },
                                "start": 756,
                                "end": 761
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d",
                                "optional": true,
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
                                      "start": 767,
                                      "end": 768
                                    },
                                    "typeArguments": null,
                                    "start": 767,
                                    "end": 768
                                  },
                                  "start": 765,
                                  "end": 768
                                },
                                "start": 763,
                                "end": 768
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": true,
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
                                      "start": 774,
                                      "end": 775
                                    },
                                    "typeArguments": null,
                                    "start": 774,
                                    "end": 775
                                  },
                                  "start": 772,
                                  "end": 775
                                },
                                "start": 770,
                                "end": 775
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
                                  "start": 780,
                                  "end": 781
                                },
                                "typeArguments": null,
                                "start": 780,
                                "end": 781
                              },
                              "start": 777,
                              "end": 781
                            },
                            "start": 742,
                            "end": 781
                          },
                          "start": 740,
                          "end": 781
                        },
                        "start": 739,
                        "end": 781
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
                          "start": 784,
                          "end": 785
                        },
                        "typeArguments": null,
                        "start": 784,
                        "end": 785
                      },
                      "start": 782,
                      "end": 785
                    },
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 797,
                          "end": 798
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 804
                        },
                        "optional": false,
                        "computed": false,
                        "start": 797,
                        "end": 804
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 805,
                          "end": 809
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 811,
                          "end": 817
                        }
                      ],
                      "optional": false,
                      "start": 797,
                      "end": 818
                    },
                    "id": null,
                    "generator": false,
                    "start": 735,
                    "end": 818
                  },
                  "definite": false,
                  "start": 728,
                  "end": 818
                }
              ],
              "declare": false,
              "start": 724,
              "end": 819
            },
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rfunc",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 842,
                          "end": 846
                        },
                        "typeArguments": null,
                        "start": 835,
                        "end": 846
                      },
                      "start": 833,
                      "end": 846
                    },
                    "start": 828,
                    "end": 846
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 849,
                      "end": 853
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 857,
                      "end": 860
                    },
                    "start": 849,
                    "end": 860
                  },
                  "definite": false,
                  "start": 828,
                  "end": 860
                }
              ],
              "declare": false,
              "start": 824,
              "end": 861
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rfunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 907,
                "end": 912
              },
              "start": 900,
              "end": 912
            }
          ],
          "start": 636,
          "end": 914
        },
        "expression": false,
        "start": 501,
        "end": 914
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 494,
      "end": 914
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 914
}
```
