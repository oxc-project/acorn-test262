__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hi",
                "raw": "'hi'",
                "start": 79,
                "end": 83
              },
              "start": 79,
              "end": 83
            },
            "start": 77,
            "end": 83
          },
          "start": 76,
          "end": 83
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 85,
        "end": 88
      },
      "expression": false,
      "start": 63,
      "end": 88
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 109
            },
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
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 113,
                      "end": 117
                    },
                    "start": 113,
                    "end": 117
                  },
                  "start": 111,
                  "end": 117
                },
                "start": 110,
                "end": 117
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 119,
              "end": 122
            },
            "expression": false,
            "start": 97,
            "end": 122
          },
          "definite": false,
          "start": 93,
          "end": 122
        }
      ],
      "declare": false,
      "start": 89,
      "end": 122
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 129
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 136,
                      "end": 140
                    },
                    "start": 136,
                    "end": 140
                  },
                  "start": 134,
                  "end": 140
                },
                "start": 133,
                "end": 140
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 145,
                      "end": 149
                    },
                    "start": 145,
                    "end": 149
                  },
                  "start": 143,
                  "end": 149
                },
                "start": 142,
                "end": 149
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 154,
              "end": 157
            },
            "id": null,
            "generator": false,
            "start": 132,
            "end": 157
          },
          "definite": false,
          "start": 127,
          "end": 157
        }
      ],
      "declare": false,
      "start": 123,
      "end": 157
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 166
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 176
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 180,
                        "end": 184
                      },
                      "start": 180,
                      "end": 184
                    },
                    "start": 178,
                    "end": 184
                  },
                  "start": 177,
                  "end": 184
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 186,
                "end": 189
              },
              "expression": false,
              "start": 176,
              "end": 189
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 173,
            "end": 189
          }
        ],
        "start": 167,
        "end": 191
      },
      "abstract": false,
      "declare": false,
      "start": 159,
      "end": 191
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 204
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 215,
                      "end": 219
                    },
                    "start": 215,
                    "end": 219
                  },
                  "start": 213,
                  "end": 219
                },
                "start": 212,
                "end": 219
              }
            ],
            "returnType": null,
            "start": 211,
            "end": 221
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 229
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 233,
                      "end": 237
                    },
                    "start": 233,
                    "end": 237
                  },
                  "start": 231,
                  "end": 237
                },
                "start": 230,
                "end": 237
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 242,
                      "end": 246
                    },
                    "start": 242,
                    "end": 246
                  },
                  "start": 240,
                  "end": 246
                },
                "start": 239,
                "end": 246
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 226,
            "end": 248
          }
        ],
        "start": 205,
        "end": 250
      },
      "declare": false,
      "start": 193,
      "end": 250
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "'hi'",
                              "start": 269,
                              "end": 273
                            },
                            "start": 269,
                            "end": 273
                          },
                          "start": 267,
                          "end": 273
                        },
                        "start": 266,
                        "end": 273
                      }
                    ],
                    "returnType": null,
                    "start": 265,
                    "end": 275
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 283
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "'hi'",
                              "start": 287,
                              "end": 291
                            },
                            "start": 287,
                            "end": 291
                          },
                          "start": 285,
                          "end": 291
                        },
                        "start": 284,
                        "end": 291
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 280,
                    "end": 293
                  }
                ],
                "start": 259,
                "end": 295
              },
              "start": 257,
              "end": 295
            },
            "start": 256,
            "end": 295
          },
          "init": null,
          "definite": false,
          "start": 256,
          "end": 295
        }
      ],
      "declare": false,
      "start": 252,
      "end": 295
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 302
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 314
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hi",
                            "raw": "'hi'",
                            "start": 318,
                            "end": 322
                          },
                          "start": 318,
                          "end": 322
                        },
                        "start": 316,
                        "end": 322
                      },
                      "start": 315,
                      "end": 322
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 324,
                    "end": 327
                  },
                  "expression": false,
                  "start": 314,
                  "end": 327
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 311,
                "end": 327
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 334
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 348
                  },
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
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hi",
                            "raw": "'hi'",
                            "start": 352,
                            "end": 356
                          },
                          "start": 352,
                          "end": 356
                        },
                        "start": 350,
                        "end": 356
                      },
                      "start": 349,
                      "end": 356
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hi",
                            "raw": "'hi'",
                            "start": 361,
                            "end": 365
                          },
                          "start": 361,
                          "end": 365
                        },
                        "start": 359,
                        "end": 365
                      },
                      "start": 358,
                      "end": 365
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 367,
                    "end": 370
                  },
                  "expression": false,
                  "start": 336,
                  "end": 370
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 333,
                "end": 370
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 377
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hi",
                            "raw": "'hi'",
                            "start": 383,
                            "end": 387
                          },
                          "start": 383,
                          "end": 387
                        },
                        "start": 381,
                        "end": 387
                      },
                      "start": 380,
                      "end": 387
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 392,
                    "end": 395
                  },
                  "id": null,
                  "generator": false,
                  "start": 379,
                  "end": 395
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 376,
                "end": 395
              }
            ],
            "start": 305,
            "end": 397
          },
          "definite": false,
          "start": 301,
          "end": 397
        }
      ],
      "declare": false,
      "start": 297,
      "end": 397
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 63,
  "end": 397
}
```
