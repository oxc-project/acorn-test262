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
        "decorators": [],
        "name": "baz",
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
          "start": 13,
          "end": 19,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 19,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 16,
              "end": 19
            }
          }
        }
      ],
      "returnType": null,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 57,
        "decorators": [],
        "name": "foo",
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
          "start": 58,
          "end": 66,
          "decorators": [],
          "name": "set",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 66,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 63,
              "end": 66
            }
          }
        }
      ],
      "returnType": null,
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 83,
                  "end": 93,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 83,
                    "end": 93,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 84,
                        "end": 89,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
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
              "type": "CallExpression",
              "start": 97,
              "end": 112,
              "callee": {
                "type": "Identifier",
                "start": 97,
                "end": 100,
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 101,
                  "end": 111,
                  "object": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 104,
                    "decorators": [],
                    "name": "set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 111,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 126,
                      "end": 139,
                      "id": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 134,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 129,
                          "end": 134,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 131,
                            "end": 134
                          }
                        }
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
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 155,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
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
                          "decorators": [],
                          "name": "set",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 173,
                          "decorators": [],
                          "name": "values",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 178,
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
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
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
