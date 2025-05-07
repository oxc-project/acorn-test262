__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 323,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 237,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 237,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 27,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 235,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 235,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 235,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 49,
                    "end": 229,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 66,
                      "end": 229,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 80,
                          "end": 94,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 80,
                            "end": 93,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 80,
                              "end": 86,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 80,
                                "end": 84
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 85,
                                "end": 86,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 89,
                              "end": 93,
                              "raw": "\"hi\"",
                              "value": "hi",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 152,
                          "end": 173,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 156,
                              "end": 172,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 156,
                                "end": 157,
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "start": 160,
                                "end": 172,
                                "async": false,
                                "body": {
                                  "type": "MemberExpression",
                                  "start": 166,
                                  "end": 172,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 166,
                                    "end": 170
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 171,
                                    "end": 172,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 63,
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 239,
      "end": 323,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 255,
        "end": 323,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 261,
            "end": 321,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 265,
                "end": 320,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 266,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 269,
                  "end": 320,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 275,
                    "end": 320,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 285,
                        "end": 300,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 285,
                          "end": 299,
                          "arguments": [],
                          "callee": {
                            "type": "ArrowFunctionExpression",
                            "start": 286,
                            "end": 296,
                            "async": false,
                            "body": {
                              "type": "ThisExpression",
                              "start": 292,
                              "end": 296
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 309,
                        "end": 314,
                        "directive": null,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 309,
                          "end": 313
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 252,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
