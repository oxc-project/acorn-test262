__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 222,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 31,
        "decorators": [],
        "name": "doubleAndReturnAsArray",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 32,
          "end": 41,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 41,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 35,
              "end": 41
            }
          }
        },
        {
          "type": "Identifier",
          "start": 43,
          "end": 52,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 44,
            "end": 52,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 46,
              "end": 52
            }
          }
        },
        {
          "type": "Identifier",
          "start": 54,
          "end": 63,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 63,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 57,
              "end": 63
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 64,
        "end": 90,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 66,
          "end": 90,
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 67,
              "end": 73
            },
            {
              "type": "TSNumberKeyword",
              "start": 75,
              "end": 81
            },
            {
              "type": "TSNumberKeyword",
              "start": 83,
              "end": 89
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 222,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 113,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 112,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 107,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 110,
                  "end": 112,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 118,
            "end": 184,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 123,
              "end": 130,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 127,
                  "end": 130,
                  "id": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 130,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 134,
              "end": 143,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 145,
              "end": 184,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 155,
                  "end": 178,
                  "expression": {
                    "type": "CallExpression",
                    "start": 155,
                    "end": 177,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 155,
                      "end": 166,
                      "object": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 161,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 166,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 167,
                        "end": 176,
                        "left": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 170,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 176,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "start": 189,
            "end": 220,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 196,
              "end": 219,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 197,
                "end": 212,
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 198,
                    "end": 201
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 203,
                    "end": 206
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 208,
                    "end": 211
                  }
                ]
              },
              "expression": {
                "type": "Identifier",
                "start": 213,
                "end": 219,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
