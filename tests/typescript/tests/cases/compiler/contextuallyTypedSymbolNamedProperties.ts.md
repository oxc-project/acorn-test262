__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 30
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 39
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 40,
                "end": 43
              }
            ],
            "optional": false,
            "start": 33,
            "end": 44
          },
          "definite": false,
          "start": 29,
          "end": 44
        }
      ],
      "declare": false,
      "start": 23,
      "end": 45
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
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 62
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 63,
                "end": 66
              }
            ],
            "optional": false,
            "start": 56,
            "end": 67
          },
          "definite": false,
          "start": 52,
          "end": 67
        }
      ],
      "declare": false,
      "start": 46,
      "end": 68
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 81
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 95
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 105
                    },
                    "typeArguments": null,
                    "start": 97,
                    "end": 105
                  },
                  "start": 95,
                  "end": 105
                },
                "accessibility": null,
                "static": false,
                "start": 91,
                "end": 106
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 111
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 113,
                    "end": 119
                  },
                  "start": 111,
                  "end": 119
                },
                "accessibility": null,
                "static": false,
                "start": 107,
                "end": 119
              }
            ],
            "start": 90,
            "end": 120
          },
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 132
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "typeArguments": null,
                    "start": 134,
                    "end": 142
                  },
                  "start": 132,
                  "end": 142
                },
                "accessibility": null,
                "static": false,
                "start": 128,
                "end": 143
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 148
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
                  },
                  "start": 148,
                  "end": 156
                },
                "accessibility": null,
                "static": false,
                "start": 144,
                "end": 156
              }
            ],
            "start": 127,
            "end": 157
          }
        ],
        "start": 88,
        "end": 157
      },
      "declare": false,
      "start": 70,
      "end": 157
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
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 183
                },
                "typeArguments": null,
                "start": 177,
                "end": 183
              },
              "start": 175,
              "end": 183
            },
            "start": 173,
            "end": 183
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 183
        }
      ],
      "declare": true,
      "start": 159,
      "end": 184
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 204
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
              "start": 205,
              "end": 206
            },
            "constraint": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 221
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 223,
                          "end": 229
                        },
                        {
                          "type": "TSSymbolKeyword",
                          "start": 232,
                          "end": 238
                        }
                      ],
                      "start": 223,
                      "end": 238
                    },
                    "start": 221,
                    "end": 238
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 217,
                  "end": 238
                }
              ],
              "start": 215,
              "end": 240
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 205,
            "end": 240
          }
        ],
        "start": 204,
        "end": 241
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
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
                "start": 250,
                "end": 251
              },
              "typeArguments": null,
              "start": 250,
              "end": 251
            },
            "start": 248,
            "end": 251
          },
          "start": 242,
          "end": 251
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
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
                "start": 262,
                "end": 263
              },
              "constraint": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 268
                  },
                  "typeArguments": null,
                  "start": 267,
                  "end": 268
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "type",
                    "raw": "'type'",
                    "start": 269,
                    "end": 275
                  },
                  "start": 269,
                  "end": 275
                },
                "start": 267,
                "end": 276
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 284
                        },
                        "typeArguments": null,
                        "start": 283,
                        "end": 284
                      },
                      "start": 281,
                      "end": 284
                    },
                    "start": 280,
                    "end": 284
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 289,
                    "end": 293
                  },
                  "start": 286,
                  "end": 293
                },
                "start": 279,
                "end": 293
              },
              "optional": false,
              "readonly": null,
              "start": 259,
              "end": 295
            },
            "start": 257,
            "end": 295
          },
          "start": 253,
          "end": 295
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 298,
          "end": 301
        },
        "start": 296,
        "end": 301
      },
      "body": null,
      "expression": false,
      "start": 186,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 305
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 308
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 318
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
                      "name": "ap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 323
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ap",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 329,
                            "end": 331
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "description",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 332,
                            "end": 343
                          },
                          "optional": false,
                          "computed": false,
                          "start": 329,
                          "end": 343
                        },
                        "directive": null,
                        "start": 329,
                        "end": 343
                      }
                    ],
                    "start": 327,
                    "end": 345
                  },
                  "id": null,
                  "generator": false,
                  "start": 321,
                  "end": 345
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 316,
                "end": 345
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 353
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
                      "name": "bp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 358
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 364,
                            "end": 366
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "description",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 367,
                            "end": 378
                          },
                          "optional": false,
                          "computed": false,
                          "start": 364,
                          "end": 378
                        },
                        "directive": null,
                        "start": 364,
                        "end": 378
                      }
                    ],
                    "start": 362,
                    "end": 380
                  },
                  "id": null,
                  "generator": false,
                  "start": 356,
                  "end": 380
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 351,
                "end": 380
              }
            ],
            "start": 310,
            "end": 383
          }
        ],
        "optional": false,
        "start": 304,
        "end": 384
      },
      "directive": null,
      "start": 304,
      "end": 384
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sym",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 403,
                            "end": 409
                          },
                          "start": 401,
                          "end": 409
                        },
                        "start": 398,
                        "end": 409
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 416,
                                "end": 422
                              },
                              "start": 414,
                              "end": 422
                            },
                            "start": 413,
                            "end": 422
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 427,
                            "end": 431
                          },
                          "start": 424,
                          "end": 431
                        },
                        "start": 412,
                        "end": 431
                      },
                      "start": 410,
                      "end": 431
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 397,
                    "end": 431
                  }
                ],
                "start": 395,
                "end": 433
              },
              "start": 393,
              "end": 433
            },
            "start": 392,
            "end": 433
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 440
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 443,
                      "end": 444
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 448,
                      "end": 449
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 450,
                      "end": 456
                    },
                    "optional": false,
                    "computed": false,
                    "start": 448,
                    "end": 456
                  },
                  "id": null,
                  "generator": false,
                  "start": 443,
                  "end": 456
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 438,
                "end": 456
              }
            ],
            "start": 436,
            "end": 458
          },
          "definite": false,
          "start": 392,
          "end": 458
        }
      ],
      "declare": false,
      "start": 386,
      "end": 459
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 459
}
```
