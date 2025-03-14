targetTypeObjectLiteralToAny.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 256,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 254,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 254,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 54,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 53,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 53,
                  "decorators": [],
                  "name": "TypeScriptKeywords",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 45,
                      "end": 53,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 45,
                        "end": 51
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 58,
            "end": 73,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 62,
                "end": 72,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 72,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 68,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 69,
                      "end": 72
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 249,
            "expression": {
              "type": "CallExpression",
              "start": 82,
              "end": 248,
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 109,
                  "end": 247,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 127,
                    "end": 247,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 137,
                        "end": 181,
                        "expression": {
                          "type": "CallExpression",
                          "start": 137,
                          "end": 180,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 149,
                              "end": 179,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 150,
                                  "end": 162,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 150,
                                    "end": 154,
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Identifier",
                                    "start": 155,
                                    "end": 162,
                                    "decorators": [],
                                    "name": "keyword",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 164,
                                  "end": 178,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 164,
                                    "end": 168,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 169,
                                    "end": 178,
                                    "raw": "\"keyword\"",
                                    "value": "keyword"
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 137,
                            "end": 148,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 143,
                              "decorators": [],
                              "name": "result",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 148,
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
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 118,
                      "end": 125,
                      "decorators": [],
                      "name": "keyword",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 82,
                "end": 108,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 100,
                  "decorators": [],
                  "name": "TypeScriptKeywords",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 108,
                  "decorators": [],
                  "name": "forEach",
                  "optional": false
                }
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
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "suggest",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
