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
        "name": "suggest",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeScriptKeywords",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 45,
                        "end": 51
                      },
                      "start": 45,
                      "end": 53
                    },
                    "start": 44,
                    "end": 53
                  },
                  "start": 26,
                  "end": 53
                },
                "init": null,
                "definite": false,
                "start": 26,
                "end": 53
              }
            ],
            "declare": false,
            "start": 22,
            "end": 54
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 69,
                      "end": 72
                    },
                    "start": 68,
                    "end": 72
                  },
                  "start": 62,
                  "end": 72
                },
                "init": null,
                "definite": false,
                "start": 62,
                "end": 72
              }
            ],
            "declare": false,
            "start": 58,
            "end": 73
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
                  "name": "TypeScriptKeywords",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 100
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 108
                },
                "optional": false,
                "computed": false,
                "start": 82,
                "end": 108
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keyword",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 125
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
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 137,
                              "end": 143
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 144,
                              "end": 148
                            },
                            "optional": false,
                            "computed": false,
                            "start": 137,
                            "end": 148
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 150,
                                    "end": 154
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "keyword",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 155,
                                    "end": 162
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 150,
                                  "end": 162
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 164,
                                    "end": 168
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "keyword",
                                    "raw": "\"keyword\"",
                                    "start": 169,
                                    "end": 178
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 164,
                                  "end": 178
                                }
                              ],
                              "start": 149,
                              "end": 179
                            }
                          ],
                          "optional": false,
                          "start": 137,
                          "end": 180
                        },
                        "directive": null,
                        "start": 137,
                        "end": 181
                      }
                    ],
                    "start": 127,
                    "end": 247
                  },
                  "expression": false,
                  "start": 109,
                  "end": 247
                }
              ],
              "optional": false,
              "start": 82,
              "end": 248
            },
            "directive": null,
            "start": 82,
            "end": 249
          }
        ],
        "start": 18,
        "end": 254
      },
      "expression": false,
      "start": 0,
      "end": 254
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 255
}
```
