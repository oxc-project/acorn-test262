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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 20,
        "end": 89,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 34,
            "end": 83,
            "async": false,
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
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 76,
                        "end": 78,
                        "properties": []
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 66,
                      "end": 75,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 68,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 75,
                        "decorators": [],
                        "name": "concat",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          },
          {
            "type": "ArrayExpression",
            "start": 86,
            "end": 88,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 20,
          "end": 33,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 20,
            "end": 26,
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 27,
            "end": 33,
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 92,
      "end": 155,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 92,
        "end": 154,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 106,
            "end": 148,
            "async": false,
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
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 142,
                        "end": 144,
                        "properties": []
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 132,
                      "end": 141,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 134,
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 141,
                        "decorators": [],
                        "name": "concat",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          },
          {
            "type": "ArrayExpression",
            "start": 151,
            "end": 153,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 92,
          "end": 105,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 92,
            "end": 98,
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 105,
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 202,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 157,
        "end": 201,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 171,
            "end": 196,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 183,
              "end": 196,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 193,
                  "end": 195,
                  "properties": []
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 183,
                "end": 192,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 185,
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 192,
                  "decorators": [],
                  "name": "concat",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          },
          {
            "type": "ArrayExpression",
            "start": 198,
            "end": 200,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 157,
          "end": 170,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 157,
            "end": 163,
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 164,
            "end": 170,
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 233,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 204,
        "end": 232,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 215,
            "end": 231,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 223,
              "end": 231,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 223,
                "end": 225,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 226,
                "end": 231,
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 204,
          "end": 214,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 204,
            "end": 210,
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 211,
            "end": 214,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 281,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 234,
        "end": 280,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 245,
            "end": 279,
            "async": false,
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
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 270,
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 276,
                      "decorators": [],
                      "name": "count",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 234,
          "end": 244,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 234,
            "end": 240,
            "decorators": [],
            "name": "paired",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 241,
            "end": 244,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
