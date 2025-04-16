__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 19,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 19,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 16,
              "end": 19
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 43,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 25,
            "end": 41,
            "argument": {
              "type": "ArrayExpression",
              "start": 32,
              "end": 40,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 33,
                  "end": 39,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 57,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 58,
          "end": 66,
          "name": "set",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 66,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 63,
              "end": 66
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 192,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 72,
            "end": 190,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 77,
              "end": 93,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 83,
                  "end": 93,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 83,
                    "end": 93,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 84,
                        "end": 89,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "CallExpression",
              "start": 97,
              "end": 112,
              "callee": {
                "type": "Identifier",
                "start": 97,
                "end": 100,
                "name": "baz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 101,
                  "end": 111,
                  "object": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 104,
                    "name": "set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 111,
                    "name": "values",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 114,
              "end": 190,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 120,
                  "end": 140,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 126,
                      "end": 139,
                      "id": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 134,
                        "name": "bar",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 129,
                          "end": 134,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 131,
                            "end": 134
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "start": 137,
                        "end": 139,
                        "elements": []
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 145,
                  "end": 157,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 146,
                    "end": 155,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 155,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 163,
                  "end": 186,
                  "expression": {
                    "type": "CallExpression",
                    "start": 163,
                    "end": 185,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 163,
                      "end": 178,
                      "object": {
                        "type": "MemberExpression",
                        "start": 163,
                        "end": 173,
                        "object": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 166,
                          "name": "set",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 173,
                          "name": "values",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 178,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "SpreadElement",
                        "start": 179,
                        "end": 184,
                        "argument": {
                          "type": "ArrayExpression",
                          "start": 182,
                          "end": 184,
                          "elements": []
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 192,
      "end": 193
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
