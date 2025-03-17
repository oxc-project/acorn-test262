__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "suggest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 53,
                  "name": "TypeScriptKeywords",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 72,
                  "name": "result",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 68,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 69,
                      "end": 72
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
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
                  "name": "TypeScriptKeywords",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 108,
                  "name": "forEach",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 109,
                  "end": 247,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 118,
                      "end": 125,
                      "name": "keyword",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                              "name": "result",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 148,
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
                              "type": "ObjectExpression",
                              "start": 149,
                              "end": 179,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 150,
                                  "end": 162,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 150,
                                    "end": 154,
                                    "name": "text",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 155,
                                    "end": 162,
                                    "name": "keyword",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 164,
                                  "end": 178,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 164,
                                    "end": 168,
                                    "name": "type",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 169,
                                    "end": 178,
                                    "value": "keyword",
                                    "raw": "\"keyword\""
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
