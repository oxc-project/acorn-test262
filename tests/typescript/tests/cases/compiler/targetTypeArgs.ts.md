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
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
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
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    },
                    "start": 25,
                    "end": 33
                  },
                  "start": 24,
                  "end": 33
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 38,
                  "end": 42
                },
                "start": 35,
                "end": 42
              },
              "start": 23,
              "end": 42
            },
            "start": 21,
            "end": 42
          },
          "start": 13,
          "end": 42
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 58
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 59,
                  "end": 66
                }
              ],
              "optional": false,
              "start": 50,
              "end": 67
            },
            "directive": null,
            "start": 50,
            "end": 68
          }
        ],
        "start": 44,
        "end": 73
      },
      "expression": false,
      "start": 0,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 78
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "start": 88,
                "end": 89
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 94
                  },
                  "directive": null,
                  "start": 93,
                  "end": 94
                }
              ],
              "start": 91,
              "end": 96
            },
            "expression": false,
            "start": 79,
            "end": 96
          }
        ],
        "optional": false,
        "start": 75,
        "end": 97
      },
      "directive": null,
      "start": 75,
      "end": 98
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 101,
                "end": 102
              }
            ],
            "start": 100,
            "end": 103
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 111
          },
          "optional": false,
          "computed": false,
          "start": 100,
          "end": 111
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 124
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 126
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 130,
                    "end": 131
                  },
                  "directive": null,
                  "start": 130,
                  "end": 131
                }
              ],
              "start": 128,
              "end": 133
            },
            "expression": false,
            "start": 112,
            "end": 133
          }
        ],
        "optional": false,
        "start": 100,
        "end": 134
      },
      "directive": null,
      "start": 100,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 137,
                "end": 144
              }
            ],
            "start": 136,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 151
          },
          "optional": false,
          "computed": false,
          "start": 136,
          "end": 151
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 176,
                    "end": 180
                  },
                  "start": 169,
                  "end": 181
                }
              ],
              "start": 168,
              "end": 182
            },
            "expression": false,
            "start": 152,
            "end": 182
          }
        ],
        "optional": false,
        "start": 136,
        "end": 183
      },
      "directive": null,
      "start": 136,
      "end": 184
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 186,
                "end": 187
              }
            ],
            "start": 185,
            "end": 188
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 194
          },
          "optional": false,
          "computed": false,
          "start": 185,
          "end": 194
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 205
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 207
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 209
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 219,
                    "end": 223
                  },
                  "start": 212,
                  "end": 224
                }
              ],
              "start": 211,
              "end": 225
            },
            "expression": false,
            "start": 195,
            "end": 225
          }
        ],
        "optional": false,
        "start": 185,
        "end": 226
      },
      "directive": null,
      "start": 185,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 229,
                "end": 230
              }
            ],
            "start": 228,
            "end": 231
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 237
          },
          "optional": false,
          "computed": false,
          "start": 228,
          "end": 237
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 248
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 250
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 252
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 262,
                    "end": 266
                  },
                  "start": 255,
                  "end": 267
                }
              ],
              "start": 254,
              "end": 268
            },
            "expression": false,
            "start": 238,
            "end": 268
          }
        ],
        "optional": false,
        "start": 228,
        "end": 269
      },
      "directive": null,
      "start": 228,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 272,
                "end": 275
              }
            ],
            "start": 271,
            "end": 276
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 282
          },
          "optional": false,
          "computed": false,
          "start": 271,
          "end": 282
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 293
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 295
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 297
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 307,
                    "end": 311
                  },
                  "start": 300,
                  "end": 312
                }
              ],
              "start": 299,
              "end": 313
            },
            "expression": false,
            "start": 283,
            "end": 313
          }
        ],
        "optional": false,
        "start": 271,
        "end": 314
      },
      "directive": null,
      "start": 271,
      "end": 315
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 317,
                "end": 320
              }
            ],
            "start": 316,
            "end": 321
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 329
          },
          "optional": false,
          "computed": false,
          "start": 316,
          "end": 329
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 340
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 342
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 344
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 349
                  },
                  "directive": null,
                  "start": 348,
                  "end": 349
                }
              ],
              "start": 346,
              "end": 351
            },
            "expression": false,
            "start": 330,
            "end": 351
          }
        ],
        "optional": false,
        "start": 316,
        "end": 352
      },
      "directive": null,
      "start": 316,
      "end": 353
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 354
}
```
