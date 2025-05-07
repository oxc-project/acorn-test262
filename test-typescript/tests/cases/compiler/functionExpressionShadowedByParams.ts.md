__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 96,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 96,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 29,
            "end": 47,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 29,
              "end": 46,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 44,
                  "end": 45,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 29,
                "end": 43,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 31,
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 43,
                  "decorators": [],
                  "name": "toPrecision",
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
            "start": 71,
            "end": 78,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 71,
              "end": 77,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 74,
                  "end": 76,
                  "raw": "12",
                  "value": 12,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 71,
                "end": 73,
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 22,
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 107,
            "end": 232,
            "properties": [
              {
                "type": "Property",
                "start": 112,
                "end": 230,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
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
                  "type": "FunctionExpression",
                  "start": 115,
                  "end": 230,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 137,
                    "end": 230,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 145,
                        "end": 162,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 145,
                          "end": 161,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 159,
                              "end": 160,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 145,
                            "end": 158,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 146,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 147,
                              "end": 158,
                              "decorators": [],
                              "name": "toPrecision",
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
                        "start": 189,
                        "end": 209,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 189,
                          "end": 208,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 197,
                              "end": 201,
                              "raw": "null",
                              "value": null,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 203,
                              "end": 207,
                              "raw": "null",
                              "value": null,
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 189,
                            "end": 196,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 189,
                              "end": 190,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 191,
                              "end": 196,
                              "decorators": [],
                              "name": "apply",
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
                  "id": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 126,
                      "end": 135,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 127,
                        "end": 135,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 129,
                          "end": 135
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
