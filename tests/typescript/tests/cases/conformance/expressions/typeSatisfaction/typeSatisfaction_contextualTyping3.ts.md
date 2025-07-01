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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 94
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
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
                    "start": 102,
                    "end": 105
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 113
                        },
                        "right": {
                          "type": "Literal",
                          "value": "default",
                          "raw": "\"default\"",
                          "start": 116,
                          "end": 125
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 125
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 135
                    },
                    "id": null,
                    "generator": false,
                    "start": 107,
                    "end": 135
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 102,
                  "end": 135
                }
              ],
              "start": 97,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 160,
                          "end": 166
                        },
                        "start": 158,
                        "end": 166
                      },
                      "start": 155,
                      "end": 166
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 179
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 181,
                              "end": 184
                            },
                            "start": 179,
                            "end": 184
                          },
                          "value": null,
                          "start": 170,
                          "end": 184
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 189,
                          "end": 192
                        },
                        "start": 186,
                        "end": 192
                      },
                      "start": 169,
                      "end": 192
                    },
                    "start": 167,
                    "end": 192
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 154,
                  "end": 193
                }
              ],
              "start": 149,
              "end": 195
            },
            "start": 97,
            "end": 195
          },
          "definite": false,
          "start": 91,
          "end": 195
        }
      ],
      "declare": false,
      "start": 85,
      "end": 196
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
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
                    "start": 216,
                    "end": 219
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 227
                        },
                        "right": {
                          "type": "Literal",
                          "value": "default",
                          "raw": "\"default\"",
                          "start": 230,
                          "end": 239
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 239
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 244,
                      "end": 249
                    },
                    "id": null,
                    "generator": false,
                    "start": 221,
                    "end": 249
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 216,
                  "end": 249
                }
              ],
              "start": 211,
              "end": 252
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 274,
                          "end": 280
                        },
                        "start": 272,
                        "end": 280
                      },
                      "start": 269,
                      "end": 280
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 291
                      },
                      "typeArguments": null,
                      "start": 283,
                      "end": 291
                    },
                    "start": 281,
                    "end": 291
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 268,
                  "end": 292
                }
              ],
              "start": 263,
              "end": 294
            },
            "start": 211,
            "end": 294
          },
          "definite": false,
          "start": 204,
          "end": 294
        }
      ],
      "declare": false,
      "start": 198,
      "end": 295
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringOrNumberFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 320
      },
      "typeParameters": null,
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 327,
                    "end": 333
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 336,
                    "end": 342
                  }
                ],
                "start": 327,
                "end": 342
              },
              "start": 325,
              "end": 342
            },
            "start": 324,
            "end": 342
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 347,
            "end": 350
          },
          "start": 344,
          "end": 350
        },
        "start": 323,
        "end": 350
      },
      "declare": false,
      "start": 297,
      "end": 351
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
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 361
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 367
                  },
                  "right": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 370,
                    "end": 374
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 374
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 379,
                "end": 383
              },
              "id": null,
              "generator": false,
              "start": 365,
              "end": 383
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringOrNumberFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 413
              },
              "typeArguments": null,
              "start": 395,
              "end": 413
            },
            "start": 364,
            "end": 413
          },
          "definite": false,
          "start": 359,
          "end": 413
        }
      ],
      "declare": false,
      "start": 353,
      "end": 414
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 415,
          "end": 417
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 415,
        "end": 419
      },
      "directive": null,
      "start": 415,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 423
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 32,
            "raw": "32",
            "start": 424,
            "end": 426
          }
        ],
        "optional": false,
        "start": 421,
        "end": 427
      },
      "directive": null,
      "start": 421,
      "end": 428
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 85,
  "end": 429
}
```
