__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 281,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 17,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 12,
                "end": 17,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 12,
                  "end": 15
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 90,
      "expression": {
        "type": "CallExpression",
        "start": 20,
        "end": 89,
        "callee": {
          "type": "MemberExpression",
          "start": 20,
          "end": 33,
          "object": {
            "type": "Identifier",
            "start": 20,
            "end": 26,
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 27,
            "end": 33,
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 34,
            "end": 83,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 44,
                "end": 46,
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 48,
                "end": 50,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 52,
              "end": 83,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 59,
                  "end": 80,
                  "argument": {
                    "type": "CallExpression",
                    "start": 66,
                    "end": 79,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 66,
                      "end": 75,
                      "object": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 68,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 75,
                        "decorators": [],
                        "name": "concat",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 76,
                        "end": 78,
                        "properties": []
                      }
                    ],
                    "optional": false
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ArrayExpression",
            "start": 86,
            "end": 88,
            "elements": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 92,
      "end": 155,
      "expression": {
        "type": "CallExpression",
        "start": 92,
        "end": 154,
        "callee": {
          "type": "MemberExpression",
          "start": 92,
          "end": 105,
          "object": {
            "type": "Identifier",
            "start": 92,
            "end": 98,
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 105,
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 106,
            "end": 148,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 107,
                "end": 109,
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 111,
                "end": 113,
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 118,
              "end": 148,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 125,
                  "end": 146,
                  "argument": {
                    "type": "CallExpression",
                    "start": 132,
                    "end": 145,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 132,
                      "end": 141,
                      "object": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 134,
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 141,
                        "decorators": [],
                        "name": "concat",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 142,
                        "end": 144,
                        "properties": []
                      }
                    ],
                    "optional": false
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          {
            "type": "ArrayExpression",
            "start": 151,
            "end": 153,
            "elements": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 202,
      "expression": {
        "type": "CallExpression",
        "start": 157,
        "end": 201,
        "callee": {
          "type": "MemberExpression",
          "start": 157,
          "end": 170,
          "object": {
            "type": "Identifier",
            "start": 157,
            "end": 163,
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 164,
            "end": 170,
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 171,
            "end": 196,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 172,
                "end": 174,
                "decorators": [],
                "name": "b3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 176,
                "end": 178,
                "decorators": [],
                "name": "b4",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 183,
              "end": 196,
              "callee": {
                "type": "MemberExpression",
                "start": 183,
                "end": 192,
                "object": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 185,
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 192,
                  "decorators": [],
                  "name": "concat",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 193,
                  "end": 195,
                  "properties": []
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          },
          {
            "type": "ArrayExpression",
            "start": 198,
            "end": 200,
            "elements": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 233,
      "expression": {
        "type": "CallExpression",
        "start": 204,
        "end": 232,
        "callee": {
          "type": "MemberExpression",
          "start": 204,
          "end": 214,
          "object": {
            "type": "Identifier",
            "start": 204,
            "end": 210,
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 211,
            "end": 214,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 215,
            "end": 231,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 218,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "start": 223,
              "end": 231,
              "object": {
                "type": "Identifier",
                "start": 223,
                "end": 225,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 226,
                "end": 231,
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 281,
      "expression": {
        "type": "CallExpression",
        "start": 234,
        "end": 280,
        "callee": {
          "type": "MemberExpression",
          "start": 234,
          "end": 244,
          "object": {
            "type": "Identifier",
            "start": 234,
            "end": 240,
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 241,
            "end": 244,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 245,
            "end": 279,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 255,
                "end": 257,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 259,
              "end": 279,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 261,
                  "end": 277,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 268,
                    "end": 276,
                    "object": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 270,
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 276,
                      "decorators": [],
                      "name": "count",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
