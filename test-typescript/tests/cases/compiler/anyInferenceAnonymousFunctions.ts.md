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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "name": "paired",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "paired",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 27,
            "end": 33,
            "name": "reduce",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 34,
            "end": 83,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 44,
                "end": 46,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 48,
                "end": 50,
                "name": "a2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 75,
                        "name": "concat",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 76,
                        "end": 78,
                        "properties": []
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrayExpression",
            "start": 86,
            "end": 88,
            "elements": []
          }
        ],
        "optional": false,
        "typeArguments": null
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
            "name": "paired",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 105,
            "name": "reduce",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 106,
            "end": 148,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 107,
                "end": 109,
                "name": "b1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 111,
                "end": 113,
                "name": "b2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                        "name": "b1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 141,
                        "name": "concat",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 142,
                        "end": 144,
                        "properties": []
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrayExpression",
            "start": 151,
            "end": 153,
            "elements": []
          }
        ],
        "optional": false,
        "typeArguments": null
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
            "name": "paired",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 164,
            "end": 170,
            "name": "reduce",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 171,
            "end": 196,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 172,
                "end": 174,
                "name": "b3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 176,
                "end": 178,
                "name": "b4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "b3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 192,
                  "name": "concat",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 193,
                  "end": 195,
                  "properties": []
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrayExpression",
            "start": 198,
            "end": 200,
            "elements": []
          }
        ],
        "optional": false,
        "typeArguments": null
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
            "name": "paired",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 211,
            "end": 214,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 215,
            "end": 231,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 218,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 223,
              "end": 231,
              "object": {
                "type": "Identifier",
                "start": 223,
                "end": 225,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 226,
                "end": 231,
                "name": "count",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
            "name": "paired",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 241,
            "end": 244,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 245,
            "end": 279,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 255,
                "end": 257,
                "name": "c2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                      "name": "c2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 276,
                      "name": "count",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
