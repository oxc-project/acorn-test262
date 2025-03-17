__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 27,
        "end": 69,
        "id": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 35,
          "end": 69,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 41,
              "end": 67,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 46,
                "name": "print",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 46,
                "end": 67,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": "I am B",
                        "raw": "\"I am B\""
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
          "start": 13,
          "end": 28,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 16,
              "end": 28,
              "typeName": {
                "type": "Identifier",
                "start": 16,
                "end": 23,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "MemberExpression",
                "start": 36,
                "end": 42,
                "object": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 42,
                  "name": "then",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 43,
                  "end": 109,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 43,
                      "end": 48,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "id": {
                              "type": "Identifier",
                              "start": 66,
                              "end": 67,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 70,
                              "end": 83,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 74,
                                "end": 81,
                                "object": {
                                  "type": "Identifier",
                                  "start": 74,
                                  "end": 79,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 80,
                                  "end": 81,
                                  "name": "B",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 93,
                        "end": 103,
                        "expression": {
                          "type": "CallExpression",
                          "start": 93,
                          "end": 102,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 93,
                            "end": 100,
                            "object": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 95,
                              "end": 100,
                              "name": "print",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
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
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 133,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 132,
        "callee": {
          "type": "Identifier",
          "start": 114,
          "end": 117,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ImportExpression",
            "start": 118,
            "end": 131,
            "source": {
              "type": "Literal",
              "start": 125,
              "end": 130,
              "value": "./0",
              "raw": "\"./0\""
            },
            "options": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
