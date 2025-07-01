__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 12,
                  "end": 15
                },
                "start": 12,
                "end": 17
              },
              "start": 10,
              "end": 17
            },
            "start": 4,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 26
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 33
          },
          "optional": false,
          "computed": false,
          "start": 20,
          "end": 33
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
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 46
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 50
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 68
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "concat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 75
                      },
                      "optional": false,
                      "computed": false,
                      "start": 66,
                      "end": 75
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 76,
                        "end": 78
                      }
                    ],
                    "optional": false,
                    "start": 66,
                    "end": 79
                  },
                  "start": 59,
                  "end": 80
                }
              ],
              "start": 52,
              "end": 83
            },
            "expression": false,
            "start": 34,
            "end": 83
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 86,
            "end": 88
          }
        ],
        "optional": false,
        "start": 20,
        "end": 89
      },
      "directive": null,
      "start": 20,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 98
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 105
          },
          "optional": false,
          "computed": false,
          "start": 92,
          "end": 105
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 109
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 113
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 132,
                        "end": 134
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "concat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 141
                      },
                      "optional": false,
                      "computed": false,
                      "start": 132,
                      "end": 141
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 142,
                        "end": 144
                      }
                    ],
                    "optional": false,
                    "start": 132,
                    "end": 145
                  },
                  "start": 125,
                  "end": 146
                }
              ],
              "start": 118,
              "end": 148
            },
            "id": null,
            "generator": false,
            "start": 106,
            "end": 148
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 151,
            "end": 153
          }
        ],
        "optional": false,
        "start": 92,
        "end": 154
      },
      "directive": null,
      "start": 92,
      "end": 155
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 163
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 170
          },
          "optional": false,
          "computed": false,
          "start": 157,
          "end": 170
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
                "name": "b3",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 174
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b4",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 178
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 185
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "concat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 192
                },
                "optional": false,
                "computed": false,
                "start": 183,
                "end": 192
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 193,
                  "end": 195
                }
              ],
              "optional": false,
              "start": 183,
              "end": 196
            },
            "id": null,
            "generator": false,
            "start": 171,
            "end": 196
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 198,
            "end": 200
          }
        ],
        "optional": false,
        "start": 157,
        "end": 201
      },
      "directive": null,
      "start": 157,
      "end": 202
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 210
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 214
          },
          "optional": false,
          "computed": false,
          "start": 204,
          "end": 214
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
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 218
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 225
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 231
              },
              "optional": false,
              "computed": false,
              "start": 223,
              "end": 231
            },
            "id": null,
            "generator": false,
            "start": 215,
            "end": 231
          }
        ],
        "optional": false,
        "start": 204,
        "end": 232
      },
      "directive": null,
      "start": 204,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 240
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 244
          },
          "optional": false,
          "computed": false,
          "start": 234,
          "end": 244
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
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 257
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 270
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "count",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 276
                    },
                    "optional": false,
                    "computed": false,
                    "start": 268,
                    "end": 276
                  },
                  "start": 261,
                  "end": 277
                }
              ],
              "start": 259,
              "end": 279
            },
            "expression": false,
            "start": 245,
            "end": 279
          }
        ],
        "optional": false,
        "start": 234,
        "end": 280
      },
      "directive": null,
      "start": 234,
      "end": 281
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 281
}
```
