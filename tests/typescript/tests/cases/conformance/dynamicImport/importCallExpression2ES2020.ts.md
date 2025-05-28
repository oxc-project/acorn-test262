__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 49,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 49,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 47,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 26,
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 26,
                "end": 47,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 29,
                  "end": 47,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 31,
                      "end": 46,
                      "argument": {
                        "type": "Literal",
                        "start": 38,
                        "end": 46,
                        "value": "I am B",
                        "raw": "\"I am B\""
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 133,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 16,
                "end": 23,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 42,
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 43,
                  "end": 109,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 43,
                      "end": 48,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 52,
                    "end": 109,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 62,
                        "end": 84,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 66,
                            "end": 83,
                            "id": {
                              "type": "Identifier",
                              "start": 66,
                              "end": 67,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 80,
                                  "end": 81,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": []
                            },
                            "definite": false
                          }
                        ],
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
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 95,
                              "end": 100,
                              "decorators": [],
                              "name": "print",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
            "options": null,
            "phase": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
