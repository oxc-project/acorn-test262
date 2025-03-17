__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "b1",
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
          "start": 12,
          "end": 22,
          "name": "b1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 96,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 29,
            "end": 47,
            "expression": {
              "type": "CallExpression",
              "start": 29,
              "end": 46,
              "callee": {
                "type": "MemberExpression",
                "start": 29,
                "end": 43,
                "object": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 31,
                  "name": "b1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 43,
                  "name": "toPrecision",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 44,
                  "end": 45,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 78,
            "expression": {
              "type": "CallExpression",
              "start": 71,
              "end": 77,
              "callee": {
                "type": "Identifier",
                "start": 71,
                "end": 73,
                "name": "b1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 74,
                  "end": 76,
                  "value": 12,
                  "raw": "12"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 115,
                  "end": 230,
                  "id": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "name": "b",
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
                      "start": 126,
                      "end": 135,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 127,
                        "end": 135,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 129,
                          "end": 135
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 137,
                    "end": 230,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 145,
                        "end": 162,
                        "expression": {
                          "type": "CallExpression",
                          "start": 145,
                          "end": 161,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 145,
                            "end": 158,
                            "object": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 146,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 147,
                              "end": 158,
                              "name": "toPrecision",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 159,
                              "end": 160,
                              "value": 2,
                              "raw": "2"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 189,
                        "end": 209,
                        "expression": {
                          "type": "CallExpression",
                          "start": 189,
                          "end": 208,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 189,
                            "end": 196,
                            "object": {
                              "type": "Identifier",
                              "start": 189,
                              "end": 190,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 191,
                              "end": 196,
                              "name": "apply",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 197,
                              "end": 201,
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "Literal",
                              "start": 203,
                              "end": 207,
                              "value": null,
                              "raw": "null"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
