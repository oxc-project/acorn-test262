__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 36,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 22,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 22,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "Property",
                "start": 28,
                "end": 34,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 31,
                  "end": 34,
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 119,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 43,
            "end": 71,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 45,
                "end": 56,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 46,
                  "end": 49,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
                  "decorators": [],
                  "name": "aVal",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 58,
                "end": 69,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 59,
                  "end": 62,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 69,
                  "decorators": [],
                  "name": "bVal",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 74,
            "end": 119,
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 75,
              "end": 116,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 116,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 84,
                    "end": 114,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 91,
                      "end": 113,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 93,
                          "end": 101,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 94,
                            "end": 97,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 94,
                              "end": 95,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 96,
                              "end": 97,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 100,
                            "end": 101,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "Property",
                          "start": 103,
                          "end": 111,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 104,
                            "end": 107,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 105,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 106,
                              "end": 107,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 110,
                            "end": 111,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 145,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 121,
        "end": 144,
        "arguments": [
          {
            "type": "Identifier",
            "start": 133,
            "end": 137,
            "decorators": [],
            "name": "aVal",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 139,
            "end": 143,
            "decorators": [],
            "name": "bVal",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 121,
          "end": 132,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 121,
            "end": 128,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 129,
            "end": 132,
            "decorators": [],
            "name": "log",
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
