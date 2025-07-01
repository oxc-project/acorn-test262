__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XNumber_",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
      },
      "typeParameters": null,
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
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 27
          }
        ],
        "start": 16,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo_",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 52
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 53,
              "end": 54
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "XNumber_",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 71
              },
              "typeArguments": null,
              "start": 63,
              "end": 71
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 53,
            "end": 71
          }
        ],
        "start": 52,
        "end": 72
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 83
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 94
                      },
                      "typeArguments": null,
                      "start": 93,
                      "end": 94
                    },
                    "start": 87,
                    "end": 94
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "XNumber_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 111
                      },
                      "typeArguments": null,
                      "start": 103,
                      "end": 111
                    },
                    "start": 97,
                    "end": 111
                  }
                ],
                "start": 87,
                "end": 111
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "typeArguments": null,
                  "start": 114,
                  "end": 115
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 117
                  },
                  "typeArguments": null,
                  "start": 116,
                  "end": 117
                },
                "start": 114,
                "end": 118
              },
              "optional": false,
              "readonly": null,
              "start": 80,
              "end": 119
            },
            "start": 78,
            "end": 119
          },
          "start": 73,
          "end": 119
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
            "start": 122,
            "end": 123
          },
          "typeArguments": null,
          "start": 122,
          "end": 123
        },
        "start": 120,
        "end": 123
      },
      "body": null,
      "expression": false,
      "start": 31,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo_",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 130
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 133
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 135,
                  "end": 136
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 132,
                "end": 136
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 141,
                  "end": 146
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 138,
                "end": 146
              }
            ],
            "start": 131,
            "end": 147
          }
        ],
        "optional": false,
        "start": 126,
        "end": 148
      },
      "directive": null,
      "start": 126,
      "end": 149
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
            "name": "checkType_",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 261
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
                    "start": 265,
                    "end": 266
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 265,
                  "end": 266
                }
              ],
              "start": 264,
              "end": 267
            },
            "params": [],
            "returnType": null,
            "body": {
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 274,
                      "end": 275
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 285
                      },
                      "typeArguments": null,
                      "start": 284,
                      "end": 285
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 274,
                    "end": 285
                  }
                ],
                "start": 273,
                "end": 286
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 298
                      },
                      "constraint": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 308,
                                "end": 309
                              },
                              "typeArguments": null,
                              "start": 308,
                              "end": 309
                            },
                            "start": 302,
                            "end": 309
                          },
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
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
                            },
                            "start": 312,
                            "end": 319
                          }
                        ],
                        "start": 302,
                        "end": 319
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 322,
                            "end": 323
                          },
                          "typeArguments": null,
                          "start": 322,
                          "end": 323
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 324,
                            "end": 325
                          },
                          "typeArguments": null,
                          "start": 324,
                          "end": 325
                        },
                        "start": 322,
                        "end": 326
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 294,
                      "end": 328
                    },
                    "start": 292,
                    "end": 328
                  },
                  "start": 287,
                  "end": 328
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 338
              },
              "id": null,
              "generator": false,
              "start": 273,
              "end": 338
            },
            "id": null,
            "generator": false,
            "start": 264,
            "end": 338
          },
          "definite": false,
          "start": 251,
          "end": 338
        }
      ],
      "declare": false,
      "start": 245,
      "end": 339
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
            "name": "checked_",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 355
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "checkType_",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 368
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
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
                          "start": 370,
                          "end": 371
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 373,
                            "end": 379
                          },
                          "start": 371,
                          "end": 379
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 370,
                        "end": 380
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 381,
                          "end": 382
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 384,
                            "end": 390
                          },
                          "start": 382,
                          "end": 390
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 381,
                        "end": 390
                      }
                    ],
                    "start": 369,
                    "end": 391
                  }
                ],
                "start": 368,
                "end": 392
              },
              "arguments": [],
              "optional": false,
              "start": 358,
              "end": 394
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 399,
                      "end": 400
                    },
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 402,
                        "end": 403
                      },
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 407,
                        "end": 413
                      },
                      "start": 402,
                      "end": 413
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 399,
                    "end": 413
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 418
                    },
                    "value": {
                      "type": "Literal",
                      "value": "y",
                      "raw": "\"y\"",
                      "start": 420,
                      "end": 423
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 417,
                    "end": 423
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 427,
                      "end": 428
                    },
                    "value": {
                      "type": "Literal",
                      "value": "z",
                      "raw": "\"z\"",
                      "start": 430,
                      "end": 433
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 427,
                    "end": 433
                  }
                ],
                "start": 395,
                "end": 436
              }
            ],
            "optional": false,
            "start": 358,
            "end": 437
          },
          "definite": false,
          "start": 347,
          "end": 437
        }
      ],
      "declare": false,
      "start": 341,
      "end": 438
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 438
}
```
