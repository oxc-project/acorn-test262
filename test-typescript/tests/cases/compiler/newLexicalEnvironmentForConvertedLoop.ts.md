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
      "async": false,
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
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "x",
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "baz",
        "optional": false
      },
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
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 192,
      "async": false,
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
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 145,
                  "end": 157,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 146,
                    "end": 155,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 155,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 163,
                  "end": 186,
                  "expression": {
                    "type": "CallExpression",
                    "start": 163,
                    "end": 185,
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 163,
                      "end": 178,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 163,
                        "end": 173,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 166,
                          "decorators": [],
                          "name": "set",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 173,
                          "decorators": [],
                          "name": "values",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 178,
                        "decorators": [],
                        "name": "push",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 77,
              "end": 93,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 83,
                  "end": 93,
                  "definite": false,
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
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      }
                    ],
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "CallExpression",
              "start": 97,
              "end": 112,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 101,
                  "end": 111,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 104,
                    "decorators": [],
                    "name": "set",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 111,
                    "decorators": [],
                    "name": "values",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 97,
                "end": 100,
                "decorators": [],
                "name": "baz",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 57,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
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
      ]
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
