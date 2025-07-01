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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 16,
                        "end": 17
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 19,
                          "end": 25
                        },
                        "start": 17,
                        "end": 25
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 16,
                      "end": 25
                    }
                  ],
                  "start": 14,
                  "end": 27
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 30,
                  "end": 39
                }
              ],
              "start": 14,
              "end": 39
            },
            "start": 12,
            "end": 39
          },
          "start": 11,
          "end": 39
        }
      ],
      "returnType": {
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 45
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 47,
                  "end": 53
                },
                "start": 45,
                "end": 53
              },
              "accessibility": null,
              "static": false,
              "start": 44,
              "end": 53
            }
          ],
          "start": 42,
          "end": 55
        },
        "start": 40,
        "end": 55
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 72
                  },
                  "value": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 74,
                    "end": 77
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 71,
                  "end": 77
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 83
                  },
                  "start": 79,
                  "end": 83
                }
              ],
              "start": 69,
              "end": 85
            },
            "start": 62,
            "end": 85
          }
        ],
        "start": 56,
        "end": 109
      },
      "expression": false,
      "start": 0,
      "end": 109
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
          "start": 110,
          "end": 111
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 121
          }
        ],
        "optional": false,
        "start": 110,
        "end": 122
      },
      "directive": null,
      "start": 110,
      "end": 122
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 135
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 143
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 145,
                          "end": 151
                        },
                        "start": 143,
                        "end": 151
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 142,
                      "end": 151
                    }
                  ],
                  "start": 140,
                  "end": 153
                },
                {
                  "type": "TSNullKeyword",
                  "start": 156,
                  "end": 160
                }
              ],
              "start": 140,
              "end": 160
            },
            "start": 138,
            "end": 160
          },
          "start": 136,
          "end": 160
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 163,
          "end": 167
        },
        "start": 161,
        "end": 167
      },
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 179
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 188
                      },
                      "start": 184,
                      "end": 188
                    }
                  ],
                  "start": 182,
                  "end": 190
                },
                "definite": false,
                "start": 178,
                "end": 190
              }
            ],
            "declare": false,
            "start": 174,
            "end": 191
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 203,
                      "end": 209
                    },
                    "start": 201,
                    "end": 209
                  },
                  "start": 200,
                  "end": 209
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 213
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 215
                  },
                  "optional": false,
                  "computed": false,
                  "start": 212,
                  "end": 215
                },
                "definite": false,
                "start": 200,
                "end": 215
              }
            ],
            "declare": false,
            "start": 196,
            "end": 216
          }
        ],
        "start": 168,
        "end": 241
      },
      "expression": false,
      "start": 125,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 242,
          "end": 243
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 242,
        "end": 245
      },
      "directive": null,
      "start": 242,
      "end": 245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 246,
          "end": 247
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 257
          }
        ],
        "optional": false,
        "start": 246,
        "end": 258
      },
      "directive": null,
      "start": 246,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 260
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 261,
            "end": 265
          }
        ],
        "optional": false,
        "start": 259,
        "end": 266
      },
      "directive": null,
      "start": 259,
      "end": 266
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
            "name": "nullAndUndefinedUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 364,
                    "end": 368
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 371,
                    "end": 380
                  }
                ],
                "start": 364,
                "end": 380
              },
              "start": 362,
              "end": 380
            },
            "start": 341,
            "end": 380
          },
          "init": null,
          "definite": false,
          "start": 341,
          "end": 380
        }
      ],
      "declare": true,
      "start": 327,
      "end": 381
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 387
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullAndUndefinedUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 416
                },
                "start": 392,
                "end": 416
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullAndUndefinedUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 442
                },
                "start": 418,
                "end": 442
              }
            ],
            "start": 390,
            "end": 444
          },
          "definite": false,
          "start": 386,
          "end": 444
        }
      ],
      "declare": false,
      "start": 382,
      "end": 445
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 451
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullAndUndefinedUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 480
                },
                "start": 456,
                "end": 480
              }
            ],
            "start": 454,
            "end": 482
          },
          "definite": false,
          "start": 450,
          "end": 482
        }
      ],
      "declare": false,
      "start": 446,
      "end": 483
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 483
}
```
