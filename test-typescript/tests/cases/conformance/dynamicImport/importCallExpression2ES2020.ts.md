0.ts
```json
{
  "type": "Program",
  "start": 20,
  "end": 70,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 69,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 27,
        "end": 69,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 35,
          "end": 69,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 41,
              "end": 67,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 46,
                "decorators": [],
                "name": "print",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 46,
                "end": 67,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 49,
                  "end": 67,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 51,
                      "end": 66,
                      "argument": {
                        "type": "Literal",
                        "start": 58,
                        "end": 66,
                        "raw": "\"I am B\"",
                        "value": "I am B"
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 112,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 112,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 36,
            "end": 110,
            "expression": {
              "type": "CallExpression",
              "start": 36,
              "end": 110,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 43,
                  "end": 109,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 52,
                    "end": 109,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 62,
                        "end": 84,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 66,
                            "end": 83,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 66,
                              "end": 67,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 70,
                              "end": 83,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 74,
                                "end": 81,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 74,
                                  "end": 79,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 80,
                                  "end": 81,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 93,
                        "end": 103,
                        "expression": {
                          "type": "CallExpression",
                          "start": 93,
                          "end": 102,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 93,
                            "end": 100,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 95,
                              "end": 100,
                              "decorators": [],
                              "name": "print",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 43,
                      "end": 48,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 36,
                "end": 42,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 42,
                  "decorators": [],
                  "name": "then",
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
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 28,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 16,
              "end": 28,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 23,
                "end": 28,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 24,
                    "end": 27
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 16,
                "end": 23,
                "decorators": [],
                "name": "Promise",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 133,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 132,
        "arguments": [
          {
            "type": "ImportExpression",
            "start": 118,
            "end": 131,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 125,
              "end": 130,
              "raw": "\"./0\"",
              "value": "./0"
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 114,
          "end": 117,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
