__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            },
            "start": 14,
            "end": 22
          },
          "start": 12,
          "end": 22
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 31
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toPrecision",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 43
                },
                "optional": false,
                "computed": false,
                "start": 29,
                "end": 43
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 44,
                  "end": 45
                }
              ],
              "optional": false,
              "start": 29,
              "end": 46
            },
            "directive": null,
            "start": 29,
            "end": 47
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 73
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 74,
                  "end": 76
                }
              ],
              "optional": false,
              "start": 71,
              "end": 77
            },
            "directive": null,
            "start": 71,
            "end": 78
          }
        ],
        "start": 24,
        "end": 96
      },
      "expression": false,
      "start": 0,
      "end": 96
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 104
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 113
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 125
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 129,
                          "end": 135
                        },
                        "start": 127,
                        "end": 135
                      },
                      "start": 126,
                      "end": 135
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 145,
                              "end": 146
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toPrecision",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 147,
                              "end": 158
                            },
                            "optional": false,
                            "computed": false,
                            "start": 145,
                            "end": 158
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 159,
                              "end": 160
                            }
                          ],
                          "optional": false,
                          "start": 145,
                          "end": 161
                        },
                        "directive": null,
                        "start": 145,
                        "end": 162
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 189,
                              "end": 190
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "apply",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 191,
                              "end": 196
                            },
                            "optional": false,
                            "computed": false,
                            "start": 189,
                            "end": 196
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 197,
                              "end": 201
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 203,
                              "end": 207
                            }
                          ],
                          "optional": false,
                          "start": 189,
                          "end": 208
                        },
                        "directive": null,
                        "start": 189,
                        "end": 209
                      }
                    ],
                    "start": 137,
                    "end": 230
                  },
                  "expression": false,
                  "start": 115,
                  "end": 230
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 112,
                "end": 230
              }
            ],
            "start": 107,
            "end": 232
          },
          "definite": false,
          "start": 103,
          "end": 232
        }
      ],
      "declare": false,
      "start": 99,
      "end": 233
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 233
}
```
