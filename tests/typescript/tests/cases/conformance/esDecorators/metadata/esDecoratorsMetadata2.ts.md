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
        "name": "meta",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
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
          "start": 14,
          "end": 25
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 34,
              "end": 40
            },
            "start": 32,
            "end": 40
          },
          "start": 27,
          "end": 40
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 66
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 81,
                            "end": 88
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "metadata",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 97
                          },
                          "optional": false,
                          "computed": false,
                          "start": 81,
                          "end": 97
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 98,
                          "end": 101
                        },
                        "optional": false,
                        "computed": true,
                        "start": 81,
                        "end": 102
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 110
                      },
                      "start": 81,
                      "end": 110
                    },
                    "directive": null,
                    "start": 81,
                    "end": 111
                  }
                ],
                "start": 71,
                "end": 117
              },
              "id": null,
              "generator": false,
              "start": 55,
              "end": 117
            },
            "start": 48,
            "end": 118
          }
        ],
        "start": 42,
        "end": 120
      },
      "expression": false,
      "start": 0,
      "end": 120
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 127
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 128,
                "end": 131
              },
              {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 133,
                "end": 136
              }
            ],
            "optional": false,
            "start": 123,
            "end": 137
          },
          "start": 122,
          "end": 137
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 145
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 157
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 158,
                      "end": 161
                    },
                    {
                      "type": "Literal",
                      "value": "y",
                      "raw": "'y'",
                      "start": 163,
                      "end": 166
                    }
                  ],
                  "optional": false,
                  "start": 153,
                  "end": 167
                },
                "start": 152,
                "end": 167
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 176,
                "end": 178
              },
              "expression": false,
              "start": 173,
              "end": 178
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 152,
            "end": 178
          }
        ],
        "start": 146,
        "end": 180
      },
      "abstract": false,
      "declare": false,
      "start": 122,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 190
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 199
            },
            "optional": false,
            "computed": false,
            "start": 184,
            "end": 199
          },
          "optional": false,
          "computed": true,
          "start": 182,
          "end": 200
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 202
        },
        "optional": false,
        "computed": false,
        "start": 182,
        "end": 202
      },
      "directive": null,
      "start": 182,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 219
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 228
            },
            "optional": false,
            "computed": false,
            "start": 213,
            "end": 228
          },
          "optional": false,
          "computed": true,
          "start": 211,
          "end": 229
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 231
        },
        "optional": false,
        "computed": false,
        "start": 211,
        "end": 231
      },
      "directive": null,
      "start": 211,
      "end": 232
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 248
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 258
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 270
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 271,
                      "end": 274
                    },
                    {
                      "type": "Literal",
                      "value": "z",
                      "raw": "'z'",
                      "start": 276,
                      "end": 279
                    }
                  ],
                  "optional": false,
                  "start": 266,
                  "end": 280
                },
                "start": 265,
                "end": 280
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 286
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 289,
                "end": 291
              },
              "expression": false,
              "start": 286,
              "end": 291
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 265,
            "end": 291
          }
        ],
        "start": 259,
        "end": 293
      },
      "abstract": false,
      "declare": false,
      "start": 241,
      "end": 293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 296
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 303
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 312
            },
            "optional": false,
            "computed": false,
            "start": 297,
            "end": 312
          },
          "optional": false,
          "computed": true,
          "start": 295,
          "end": 313
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 315
        },
        "optional": false,
        "computed": false,
        "start": 295,
        "end": 315
      },
      "directive": null,
      "start": 295,
      "end": 316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 325
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 332
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 341
            },
            "optional": false,
            "computed": false,
            "start": 326,
            "end": 341
          },
          "optional": false,
          "computed": true,
          "start": 324,
          "end": 342
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 344
        },
        "optional": false,
        "computed": false,
        "start": 324,
        "end": 344
      },
      "directive": null,
      "start": 324,
      "end": 345
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 352
}
```
