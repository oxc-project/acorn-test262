__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 255,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "suggest",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 254,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 54,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 53,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 58,
            "end": 73,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 62,
                "end": 72,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 249,
            "expression": {
              "type": "CallExpression",
              "start": 82,
              "end": 248,
              "callee": {
                "type": "MemberExpression",
                "start": 82,
                "end": 108,
                "object": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 100,
                  "decorators": [],
                  "name": "TypeScriptKeywords",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 108,
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 109,
                  "end": 247,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 118,
                      "end": 125,
                      "decorators": [],
                      "name": "keyword",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 137,
                            "end": 148,
                            "object": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 143,
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 148,
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
                              "type": "ObjectExpression",
                              "start": 149,
                              "end": 179,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 150,
                                  "end": 162,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 150,
                                    "end": 154,
                                    "decorators": [],
                                    "name": "text",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 155,
                                    "end": 162,
                                    "decorators": [],
                                    "name": "keyword",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 164,
                                  "end": 178,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 164,
                                    "end": 168,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 169,
                                    "end": 178,
                                    "value": "keyword",
                                    "raw": "\"keyword\""
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                }
              ],
              "optional": false
            },
            "directive": null
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
