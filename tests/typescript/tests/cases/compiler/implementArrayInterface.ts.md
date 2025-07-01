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
        "name": "MyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
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
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 41
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
                  "start": 42,
                  "end": 43
                },
                "typeArguments": null,
                "start": 42,
                "end": 43
              }
            ],
            "start": 41,
            "end": 44
          },
          "start": 36,
          "end": 44
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
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 59
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 63,
                  "end": 69
                },
                "start": 61,
                "end": 69
              },
              "body": null,
              "expression": false,
              "start": 59,
              "end": 70
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 51,
            "end": 70
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 89
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 93,
                  "end": 99
                },
                "start": 91,
                "end": 99
              },
              "body": null,
              "expression": false,
              "start": 89,
              "end": 100
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 75,
            "end": 100
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 111
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "start": 112,
                      "end": 113
                    },
                    "constraint": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 123
                        },
                        "typeArguments": null,
                        "start": 122,
                        "end": 123
                      },
                      "start": 122,
                      "end": 125
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 112,
                    "end": 125
                  }
                ],
                "start": 111,
                "end": 126
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "items",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 130,
                    "end": 135
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 137,
                          "end": 138
                        },
                        "typeArguments": null,
                        "start": 137,
                        "end": 138
                      },
                      "start": 137,
                      "end": 140
                    },
                    "start": 135,
                    "end": 140
                  },
                  "value": null,
                  "start": 127,
                  "end": 140
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 144
                    },
                    "typeArguments": null,
                    "start": 143,
                    "end": 144
                  },
                  "start": 143,
                  "end": 146
                },
                "start": 141,
                "end": 146
              },
              "body": null,
              "expression": false,
              "start": 111,
              "end": 147
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 105,
            "end": 147
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 158
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "items",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 167
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 170
                        },
                        "typeArguments": null,
                        "start": 169,
                        "end": 170
                      },
                      "start": 169,
                      "end": 172
                    },
                    "start": 167,
                    "end": 172
                  },
                  "value": null,
                  "start": 159,
                  "end": 172
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 176
                    },
                    "typeArguments": null,
                    "start": 175,
                    "end": 176
                  },
                  "start": 175,
                  "end": 178
                },
                "start": 173,
                "end": 178
              },
              "body": null,
              "expression": false,
              "start": 158,
              "end": 179
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 152,
            "end": 179
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "join",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 188
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "separator",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 201,
                      "end": 207
                    },
                    "start": 199,
                    "end": 207
                  },
                  "start": 189,
                  "end": 207
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 210,
                  "end": 216
                },
                "start": 208,
                "end": 216
              },
              "body": null,
              "expression": false,
              "start": 188,
              "end": 217
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 184,
            "end": 217
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pop",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 225
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "start": 229,
                    "end": 230
                  },
                  "typeArguments": null,
                  "start": 229,
                  "end": 230
                },
                "start": 227,
                "end": 230
              },
              "body": null,
              "expression": false,
              "start": 225,
              "end": 231
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 222,
            "end": 231
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "push",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 240
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "items",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 249
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 251,
                          "end": 252
                        },
                        "typeArguments": null,
                        "start": 251,
                        "end": 252
                      },
                      "start": 251,
                      "end": 254
                    },
                    "start": 249,
                    "end": 254
                  },
                  "value": null,
                  "start": 241,
                  "end": 254
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 257,
                  "end": 263
                },
                "start": 255,
                "end": 263
              },
              "body": null,
              "expression": false,
              "start": 240,
              "end": 264
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 236,
            "end": 264
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reverse",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 276
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 281
                    },
                    "typeArguments": null,
                    "start": 280,
                    "end": 281
                  },
                  "start": 280,
                  "end": 283
                },
                "start": 278,
                "end": 283
              },
              "body": null,
              "expression": false,
              "start": 276,
              "end": 284
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 269,
            "end": 284
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shift",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 294
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "start": 298,
                    "end": 299
                  },
                  "typeArguments": null,
                  "start": 298,
                  "end": 299
                },
                "start": 296,
                "end": 299
              },
              "body": null,
              "expression": false,
              "start": 294,
              "end": 300
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 289,
            "end": 300
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 310
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 319,
                      "end": 325
                    },
                    "start": 317,
                    "end": 325
                  },
                  "start": 311,
                  "end": 325
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "end",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 333,
                      "end": 339
                    },
                    "start": 331,
                    "end": 339
                  },
                  "start": 327,
                  "end": 339
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 343
                    },
                    "typeArguments": null,
                    "start": 342,
                    "end": 343
                  },
                  "start": 342,
                  "end": 345
                },
                "start": 340,
                "end": 345
              },
              "body": null,
              "expression": false,
              "start": 310,
              "end": 346
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 305,
            "end": 346
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sort",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 355
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "compareFn",
                  "optional": true,
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 372,
                                "end": 373
                              },
                              "typeArguments": null,
                              "start": 372,
                              "end": 373
                            },
                            "start": 370,
                            "end": 373
                          },
                          "start": 369,
                          "end": 373
                        },
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 378,
                                "end": 379
                              },
                              "typeArguments": null,
                              "start": 378,
                              "end": 379
                            },
                            "start": 376,
                            "end": 379
                          },
                          "start": 375,
                          "end": 379
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 384,
                          "end": 390
                        },
                        "start": 381,
                        "end": 390
                      },
                      "start": 368,
                      "end": 390
                    },
                    "start": 366,
                    "end": 390
                  },
                  "start": 356,
                  "end": 390
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 393,
                  "end": 397
                },
                "start": 391,
                "end": 397
              },
              "body": null,
              "expression": false,
              "start": 355,
              "end": 398
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 351,
            "end": 398
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "splice",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 409
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 417,
                      "end": 423
                    },
                    "start": 415,
                    "end": 423
                  },
                  "start": 410,
                  "end": 423
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 426,
                      "end": 427
                    },
                    "typeArguments": null,
                    "start": 426,
                    "end": 427
                  },
                  "start": 426,
                  "end": 429
                },
                "start": 424,
                "end": 429
              },
              "body": null,
              "expression": false,
              "start": 409,
              "end": 430
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 403,
            "end": 430
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "splice",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 441
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 449,
                      "end": 455
                    },
                    "start": 447,
                    "end": 455
                  },
                  "start": 442,
                  "end": 455
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "deleteCount",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 470,
                      "end": 476
                    },
                    "start": 468,
                    "end": 476
                  },
                  "start": 457,
                  "end": 476
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "items",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 481,
                    "end": 486
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 488,
                          "end": 489
                        },
                        "typeArguments": null,
                        "start": 488,
                        "end": 489
                      },
                      "start": 488,
                      "end": 491
                    },
                    "start": 486,
                    "end": 491
                  },
                  "value": null,
                  "start": 478,
                  "end": 491
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 495
                    },
                    "typeArguments": null,
                    "start": 494,
                    "end": 495
                  },
                  "start": 494,
                  "end": 497
                },
                "start": 492,
                "end": 497
              },
              "body": null,
              "expression": false,
              "start": 441,
              "end": 498
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 435,
            "end": 498
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "unshift",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 510
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "items",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 514,
                    "end": 519
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 521,
                          "end": 522
                        },
                        "typeArguments": null,
                        "start": 521,
                        "end": 522
                      },
                      "start": 521,
                      "end": 524
                    },
                    "start": 519,
                    "end": 524
                  },
                  "value": null,
                  "start": 511,
                  "end": 524
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 527,
                  "end": 533
                },
                "start": 525,
                "end": 533
              },
              "body": null,
              "expression": false,
              "start": 510,
              "end": 534
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 503,
            "end": 534
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "indexOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 547
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "searchElement",
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
                        "start": 563,
                        "end": 564
                      },
                      "typeArguments": null,
                      "start": 563,
                      "end": 564
                    },
                    "start": 561,
                    "end": 564
                  },
                  "start": 548,
                  "end": 564
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromIndex",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 578,
                      "end": 584
                    },
                    "start": 576,
                    "end": 584
                  },
                  "start": 566,
                  "end": 584
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 587,
                  "end": 593
                },
                "start": 585,
                "end": 593
              },
              "body": null,
              "expression": false,
              "start": 547,
              "end": 594
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 540,
            "end": 594
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lastIndexOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 610
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "searchElement",
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
                        "start": 626,
                        "end": 627
                      },
                      "typeArguments": null,
                      "start": 626,
                      "end": 627
                    },
                    "start": 624,
                    "end": 627
                  },
                  "start": 611,
                  "end": 627
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromIndex",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 641,
                      "end": 647
                    },
                    "start": 639,
                    "end": 647
                  },
                  "start": 629,
                  "end": 647
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 650,
                  "end": 656
                },
                "start": 648,
                "end": 656
              },
              "body": null,
              "expression": false,
              "start": 610,
              "end": 657
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 599,
            "end": 657
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "every",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 667
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callbackfn",
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
                          "name": "value",
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
                                "start": 688,
                                "end": 689
                              },
                              "typeArguments": null,
                              "start": 688,
                              "end": 689
                            },
                            "start": 686,
                            "end": 689
                          },
                          "start": 681,
                          "end": 689
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
                              "start": 698,
                              "end": 704
                            },
                            "start": 696,
                            "end": 704
                          },
                          "start": 691,
                          "end": 704
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 713,
                                  "end": 714
                                },
                                "typeArguments": null,
                                "start": 713,
                                "end": 714
                              },
                              "start": 713,
                              "end": 716
                            },
                            "start": 711,
                            "end": 716
                          },
                          "start": 706,
                          "end": 716
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 721,
                          "end": 728
                        },
                        "start": 718,
                        "end": 728
                      },
                      "start": 680,
                      "end": 728
                    },
                    "start": 678,
                    "end": 728
                  },
                  "start": 668,
                  "end": 728
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 740,
                      "end": 743
                    },
                    "start": 738,
                    "end": 743
                  },
                  "start": 730,
                  "end": 743
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 746,
                  "end": 753
                },
                "start": 744,
                "end": 753
              },
              "body": null,
              "expression": false,
              "start": 667,
              "end": 754
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 662,
            "end": 754
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "some",
              "optional": false,
              "typeAnnotation": null,
              "start": 759,
              "end": 763
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callbackfn",
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
                          "name": "value",
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
                          "start": 777,
                          "end": 785
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
                              "start": 794,
                              "end": 800
                            },
                            "start": 792,
                            "end": 800
                          },
                          "start": 787,
                          "end": 800
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 809,
                                  "end": 810
                                },
                                "typeArguments": null,
                                "start": 809,
                                "end": 810
                              },
                              "start": 809,
                              "end": 812
                            },
                            "start": 807,
                            "end": 812
                          },
                          "start": 802,
                          "end": 812
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 817,
                          "end": 824
                        },
                        "start": 814,
                        "end": 824
                      },
                      "start": 776,
                      "end": 824
                    },
                    "start": 774,
                    "end": 824
                  },
                  "start": 764,
                  "end": 824
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 836,
                      "end": 839
                    },
                    "start": 834,
                    "end": 839
                  },
                  "start": 826,
                  "end": 839
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 842,
                  "end": 849
                },
                "start": 840,
                "end": 849
              },
              "body": null,
              "expression": false,
              "start": 763,
              "end": 850
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 759,
            "end": 850
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
              "start": 855,
              "end": 862
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callbackfn",
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
                          "name": "value",
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
                                "start": 883,
                                "end": 884
                              },
                              "typeArguments": null,
                              "start": 883,
                              "end": 884
                            },
                            "start": 881,
                            "end": 884
                          },
                          "start": 876,
                          "end": 884
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
                              "start": 893,
                              "end": 899
                            },
                            "start": 891,
                            "end": 899
                          },
                          "start": 886,
                          "end": 899
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 908,
                                  "end": 909
                                },
                                "typeArguments": null,
                                "start": 908,
                                "end": 909
                              },
                              "start": 908,
                              "end": 911
                            },
                            "start": 906,
                            "end": 911
                          },
                          "start": 901,
                          "end": 911
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 916,
                          "end": 920
                        },
                        "start": 913,
                        "end": 920
                      },
                      "start": 875,
                      "end": 920
                    },
                    "start": 873,
                    "end": 920
                  },
                  "start": 863,
                  "end": 920
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 932,
                      "end": 935
                    },
                    "start": 930,
                    "end": 935
                  },
                  "start": 922,
                  "end": 935
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 938,
                  "end": 942
                },
                "start": 936,
                "end": 942
              },
              "body": null,
              "expression": false,
              "start": 862,
              "end": 943
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 855,
            "end": 943
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 948,
              "end": 951
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "start": 952,
                      "end": 953
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 952,
                    "end": 953
                  }
                ],
                "start": 951,
                "end": 954
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callbackfn",
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
                          "name": "value",
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
                                "start": 975,
                                "end": 976
                              },
                              "typeArguments": null,
                              "start": 975,
                              "end": 976
                            },
                            "start": 973,
                            "end": 976
                          },
                          "start": 968,
                          "end": 976
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
                              "start": 985,
                              "end": 991
                            },
                            "start": 983,
                            "end": 991
                          },
                          "start": 978,
                          "end": 991
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1000,
                                  "end": 1001
                                },
                                "typeArguments": null,
                                "start": 1000,
                                "end": 1001
                              },
                              "start": 1000,
                              "end": 1003
                            },
                            "start": 998,
                            "end": 1003
                          },
                          "start": 993,
                          "end": 1003
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
                            "start": 1008,
                            "end": 1009
                          },
                          "typeArguments": null,
                          "start": 1008,
                          "end": 1009
                        },
                        "start": 1005,
                        "end": 1009
                      },
                      "start": 967,
                      "end": 1009
                    },
                    "start": 965,
                    "end": 1009
                  },
                  "start": 955,
                  "end": 1009
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1021,
                      "end": 1024
                    },
                    "start": 1019,
                    "end": 1024
                  },
                  "start": 1011,
                  "end": 1024
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1027,
                      "end": 1028
                    },
                    "typeArguments": null,
                    "start": 1027,
                    "end": 1028
                  },
                  "start": 1027,
                  "end": 1030
                },
                "start": 1025,
                "end": 1030
              },
              "body": null,
              "expression": false,
              "start": 951,
              "end": 1031
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 948,
            "end": 1031
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1036,
              "end": 1042
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callbackfn",
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
                          "name": "value",
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
                                "start": 1063,
                                "end": 1064
                              },
                              "typeArguments": null,
                              "start": 1063,
                              "end": 1064
                            },
                            "start": 1061,
                            "end": 1064
                          },
                          "start": 1056,
                          "end": 1064
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
                              "start": 1073,
                              "end": 1079
                            },
                            "start": 1071,
                            "end": 1079
                          },
                          "start": 1066,
                          "end": 1079
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1088,
                                  "end": 1089
                                },
                                "typeArguments": null,
                                "start": 1088,
                                "end": 1089
                              },
                              "start": 1088,
                              "end": 1091
                            },
                            "start": 1086,
                            "end": 1091
                          },
                          "start": 1081,
                          "end": 1091
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1096,
                          "end": 1103
                        },
                        "start": 1093,
                        "end": 1103
                      },
                      "start": 1055,
                      "end": 1103
                    },
                    "start": 1053,
                    "end": 1103
                  },
                  "start": 1043,
                  "end": 1103
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1115,
                      "end": 1118
                    },
                    "start": 1113,
                    "end": 1118
                  },
                  "start": 1105,
                  "end": 1118
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1121,
                      "end": 1122
                    },
                    "typeArguments": null,
                    "start": 1121,
                    "end": 1122
                  },
                  "start": 1121,
                  "end": 1124
                },
                "start": 1119,
                "end": 1124
              },
              "body": null,
              "expression": false,
              "start": 1042,
              "end": 1125
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1036,
            "end": 1125
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduce",
              "optional": false,
              "typeAnnotation": null,
              "start": 1130,
              "end": 1136
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callbackfn",
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
                          "name": "previousValue",
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
                                "start": 1165,
                                "end": 1166
                              },
                              "typeArguments": null,
                              "start": 1165,
                              "end": 1166
                            },
                            "start": 1163,
                            "end": 1166
                          },
                          "start": 1150,
                          "end": 1166
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "currentValue",
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
                                "start": 1182,
                                "end": 1183
                              },
                              "typeArguments": null,
                              "start": 1182,
                              "end": 1183
                            },
                            "start": 1180,
                            "end": 1183
                          },
                          "start": 1168,
                          "end": 1183
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "currentIndex",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1199,
                              "end": 1205
                            },
                            "start": 1197,
                            "end": 1205
                          },
                          "start": 1185,
                          "end": 1205
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1214,
                                  "end": 1215
                                },
                                "typeArguments": null,
                                "start": 1214,
                                "end": 1215
                              },
                              "start": 1214,
                              "end": 1217
                            },
                            "start": 1212,
                            "end": 1217
                          },
                          "start": 1207,
                          "end": 1217
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
                            "start": 1222,
                            "end": 1223
                          },
                          "typeArguments": null,
                          "start": 1222,
                          "end": 1223
                        },
                        "start": 1219,
                        "end": 1223
                      },
                      "start": 1149,
                      "end": 1223
                    },
                    "start": 1147,
                    "end": 1223
                  },
                  "start": 1137,
                  "end": 1223
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "initialValue",
                  "optional": true,
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
                        "start": 1240,
                        "end": 1241
                      },
                      "typeArguments": null,
                      "start": 1240,
                      "end": 1241
                    },
                    "start": 1238,
                    "end": 1241
                  },
                  "start": 1225,
                  "end": 1241
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
                    "start": 1244,
                    "end": 1245
                  },
                  "typeArguments": null,
                  "start": 1244,
                  "end": 1245
                },
                "start": 1242,
                "end": 1245
              },
              "body": null,
              "expression": false,
              "start": 1136,
              "end": 1246
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1130,
            "end": 1246
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduce",
              "optional": false,
              "typeAnnotation": null,
              "start": 1251,
              "end": 1257
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "start": 1258,
                      "end": 1259
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1258,
                    "end": 1259
                  }
                ],
                "start": 1257,
                "end": 1260
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callbackfn",
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
                          "name": "previousValue",
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
                                "start": 1289,
                                "end": 1290
                              },
                              "typeArguments": null,
                              "start": 1289,
                              "end": 1290
                            },
                            "start": 1287,
                            "end": 1290
                          },
                          "start": 1274,
                          "end": 1290
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "currentValue",
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
                                "start": 1306,
                                "end": 1307
                              },
                              "typeArguments": null,
                              "start": 1306,
                              "end": 1307
                            },
                            "start": 1304,
                            "end": 1307
                          },
                          "start": 1292,
                          "end": 1307
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "currentIndex",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1323,
                              "end": 1329
                            },
                            "start": 1321,
                            "end": 1329
                          },
                          "start": 1309,
                          "end": 1329
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1338,
                                  "end": 1339
                                },
                                "typeArguments": null,
                                "start": 1338,
                                "end": 1339
                              },
                              "start": 1338,
                              "end": 1341
                            },
                            "start": 1336,
                            "end": 1341
                          },
                          "start": 1331,
                          "end": 1341
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
                            "start": 1346,
                            "end": 1347
                          },
                          "typeArguments": null,
                          "start": 1346,
                          "end": 1347
                        },
                        "start": 1343,
                        "end": 1347
                      },
                      "start": 1273,
                      "end": 1347
                    },
                    "start": 1271,
                    "end": 1347
                  },
                  "start": 1261,
                  "end": 1347
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "initialValue",
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
                        "start": 1363,
                        "end": 1364
                      },
                      "typeArguments": null,
                      "start": 1363,
                      "end": 1364
                    },
                    "start": 1361,
                    "end": 1364
                  },
                  "start": 1349,
                  "end": 1364
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
                    "start": 1367,
                    "end": 1368
                  },
                  "typeArguments": null,
                  "start": 1367,
                  "end": 1368
                },
                "start": 1365,
                "end": 1368
              },
              "body": null,
              "expression": false,
              "start": 1257,
              "end": 1369
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1251,
            "end": 1369
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduceRight",
              "optional": false,
              "typeAnnotation": null,
              "start": 1374,
              "end": 1385
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callbackfn",
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
                          "name": "previousValue",
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
                                "start": 1414,
                                "end": 1415
                              },
                              "typeArguments": null,
                              "start": 1414,
                              "end": 1415
                            },
                            "start": 1412,
                            "end": 1415
                          },
                          "start": 1399,
                          "end": 1415
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "currentValue",
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
                                "start": 1431,
                                "end": 1432
                              },
                              "typeArguments": null,
                              "start": 1431,
                              "end": 1432
                            },
                            "start": 1429,
                            "end": 1432
                          },
                          "start": 1417,
                          "end": 1432
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "currentIndex",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1448,
                              "end": 1454
                            },
                            "start": 1446,
                            "end": 1454
                          },
                          "start": 1434,
                          "end": 1454
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1463,
                                  "end": 1464
                                },
                                "typeArguments": null,
                                "start": 1463,
                                "end": 1464
                              },
                              "start": 1463,
                              "end": 1466
                            },
                            "start": 1461,
                            "end": 1466
                          },
                          "start": 1456,
                          "end": 1466
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
                            "start": 1471,
                            "end": 1472
                          },
                          "typeArguments": null,
                          "start": 1471,
                          "end": 1472
                        },
                        "start": 1468,
                        "end": 1472
                      },
                      "start": 1398,
                      "end": 1472
                    },
                    "start": 1396,
                    "end": 1472
                  },
                  "start": 1386,
                  "end": 1472
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "initialValue",
                  "optional": true,
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
                        "start": 1489,
                        "end": 1490
                      },
                      "typeArguments": null,
                      "start": 1489,
                      "end": 1490
                    },
                    "start": 1487,
                    "end": 1490
                  },
                  "start": 1474,
                  "end": 1490
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
                    "start": 1493,
                    "end": 1494
                  },
                  "typeArguments": null,
                  "start": 1493,
                  "end": 1494
                },
                "start": 1491,
                "end": 1494
              },
              "body": null,
              "expression": false,
              "start": 1385,
              "end": 1495
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1374,
            "end": 1495
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduceRight",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1511
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "start": 1512,
                      "end": 1513
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1512,
                    "end": 1513
                  }
                ],
                "start": 1511,
                "end": 1514
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callbackfn",
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
                          "name": "previousValue",
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
                                "start": 1543,
                                "end": 1544
                              },
                              "typeArguments": null,
                              "start": 1543,
                              "end": 1544
                            },
                            "start": 1541,
                            "end": 1544
                          },
                          "start": 1528,
                          "end": 1544
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "currentValue",
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
                                "start": 1560,
                                "end": 1561
                              },
                              "typeArguments": null,
                              "start": 1560,
                              "end": 1561
                            },
                            "start": 1558,
                            "end": 1561
                          },
                          "start": 1546,
                          "end": 1561
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "currentIndex",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1577,
                              "end": 1583
                            },
                            "start": 1575,
                            "end": 1583
                          },
                          "start": 1563,
                          "end": 1583
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1592,
                                  "end": 1593
                                },
                                "typeArguments": null,
                                "start": 1592,
                                "end": 1593
                              },
                              "start": 1592,
                              "end": 1595
                            },
                            "start": 1590,
                            "end": 1595
                          },
                          "start": 1585,
                          "end": 1595
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
                            "start": 1600,
                            "end": 1601
                          },
                          "typeArguments": null,
                          "start": 1600,
                          "end": 1601
                        },
                        "start": 1597,
                        "end": 1601
                      },
                      "start": 1527,
                      "end": 1601
                    },
                    "start": 1525,
                    "end": 1601
                  },
                  "start": 1515,
                  "end": 1601
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "initialValue",
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
                        "start": 1617,
                        "end": 1618
                      },
                      "typeArguments": null,
                      "start": 1617,
                      "end": 1618
                    },
                    "start": 1615,
                    "end": 1618
                  },
                  "start": 1603,
                  "end": 1618
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
                    "start": 1621,
                    "end": 1622
                  },
                  "typeArguments": null,
                  "start": 1621,
                  "end": 1622
                },
                "start": 1619,
                "end": 1622
              },
              "body": null,
              "expression": false,
              "start": 1511,
              "end": 1623
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1500,
            "end": 1623
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1629,
              "end": 1635
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1637,
                "end": 1643
              },
              "start": 1635,
              "end": 1643
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
            "start": 1629,
            "end": 1644
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1654,
                    "end": 1660
                  },
                  "start": 1652,
                  "end": 1660
                },
                "start": 1651,
                "end": 1660
              }
            ],
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
                  "start": 1663,
                  "end": 1664
                },
                "typeArguments": null,
                "start": 1663,
                "end": 1664
              },
              "start": 1661,
              "end": 1664
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1650,
            "end": 1665
          }
        ],
        "start": 45,
        "end": 1667
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 1667
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1667
}
```
