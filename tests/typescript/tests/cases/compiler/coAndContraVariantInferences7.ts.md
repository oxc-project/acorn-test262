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
        "name": "Request",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 20
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 35
              },
              "typeArguments": null,
              "start": 29,
              "end": 35
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 35
          }
        ],
        "start": 12,
        "end": 36
      },
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
              "name": "query",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 48
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TSchema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 57
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 57
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "query",
                    "raw": "\"query\"",
                    "start": 58,
                    "end": 65
                  },
                  "start": 58,
                  "end": 65
                },
                "start": 50,
                "end": 66
              },
              "start": 48,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 43,
            "end": 67
          }
        ],
        "start": 39,
        "end": 69
      },
      "declare": false,
      "start": 0,
      "end": 70
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 83
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 96,
                "end": 103
              },
              "start": 94,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 88,
            "end": 104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "body",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 112,
                "end": 119
              },
              "start": 110,
              "end": 119
            },
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 119
          }
        ],
        "start": 86,
        "end": 121
      },
      "declare": false,
      "start": 72,
      "end": 122
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "route",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 146
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
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 154
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 169
              },
              "typeArguments": null,
              "start": 163,
              "end": 169
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 147,
            "end": 169
          }
        ],
        "start": 146,
        "end": 170
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "pre",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 183
                  },
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
                                "name": "TSchema",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 189,
                                "end": 196
                              },
                              "typeArguments": null,
                              "start": 189,
                              "end": 196
                            },
                            "start": 187,
                            "end": 196
                          },
                          "start": 186,
                          "end": 196
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 201,
                          "end": 205
                        },
                        "start": 198,
                        "end": 205
                      },
                      "start": 185,
                      "end": 205
                    },
                    "start": 183,
                    "end": 205
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 180,
                  "end": 206
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "schema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 215
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 224
                      },
                      "typeArguments": null,
                      "start": 217,
                      "end": 224
                    },
                    "start": 215,
                    "end": 224
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 209,
                  "end": 225
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "handle",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 234
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "req",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Request",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 242,
                                "end": 249
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TSchema",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 250,
                                      "end": 257
                                    },
                                    "typeArguments": null,
                                    "start": 250,
                                    "end": 257
                                  }
                                ],
                                "start": 249,
                                "end": 258
                              },
                              "start": 242,
                              "end": 258
                            },
                            "start": 240,
                            "end": 258
                          },
                          "start": 237,
                          "end": 258
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 263,
                          "end": 267
                        },
                        "start": 260,
                        "end": 267
                      },
                      "start": 236,
                      "end": 267
                    },
                    "start": 234,
                    "end": 267
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 228,
                  "end": 268
                }
              ],
              "start": 176,
              "end": 270
            },
            "start": 174,
            "end": 270
          },
          "start": 171,
          "end": 270
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 273,
          "end": 277
        },
        "start": 271,
        "end": 277
      },
      "body": null,
      "expression": false,
      "start": 124,
      "end": 278
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
            "name": "validate",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 294
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
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "query",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 303,
                          "end": 308
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 311,
                            "end": 318
                          },
                          "start": 309,
                          "end": 318
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 303,
                        "end": 319
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "body",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 324
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 327,
                            "end": 334
                          },
                          "start": 325,
                          "end": 334
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 320,
                        "end": 334
                      }
                    ],
                    "start": 301,
                    "end": 336
                  },
                  "start": 299,
                  "end": 336
                },
                "start": 298,
                "end": 336
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 341,
              "end": 343
            },
            "id": null,
            "generator": false,
            "start": 297,
            "end": 343
          },
          "definite": false,
          "start": 286,
          "end": 343
        }
      ],
      "declare": false,
      "start": 280,
      "end": 344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "route",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 351
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
                  "name": "pre",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 359
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "validate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 369
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 356,
                "end": 369
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 379
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "query",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 392
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 394,
                        "end": 396
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 387,
                      "end": 396
                    }
                  ],
                  "start": 381,
                  "end": 401
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 373,
                "end": 401
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 411
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "req",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 414,
                      "end": 417
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
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 440,
                                  "end": 446
                                },
                                "start": 438,
                                "end": 446
                              },
                              "start": 434,
                              "end": 446
                            },
                            "init": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "req",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 449,
                                "end": 452
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "query",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 453,
                                "end": 458
                              },
                              "optional": false,
                              "computed": false,
                              "start": 449,
                              "end": 458
                            },
                            "definite": false,
                            "start": 434,
                            "end": 458
                          }
                        ],
                        "declare": false,
                        "start": 428,
                        "end": 459
                      }
                    ],
                    "start": 422,
                    "end": 463
                  },
                  "id": null,
                  "generator": false,
                  "start": 413,
                  "end": 463
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 405,
                "end": 463
              }
            ],
            "start": 352,
            "end": 466
          }
        ],
        "optional": false,
        "start": 346,
        "end": 467
      },
      "directive": null,
      "start": 346,
      "end": 468
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 470,
      "end": 480
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 480
}
```
