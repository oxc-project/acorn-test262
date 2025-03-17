__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 124,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 124,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 18,
              "end": 22,
              "name": "foo"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 36,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 36,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 32,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 32,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 26,
                      "end": 32
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 41,
            "end": 122,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
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
              "start": 44,
              "end": 122,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 122,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 57,
                    "end": 86,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 61,
                        "end": 85,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "AssignmentExpression",
                          "start": 66,
                          "end": 84,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 66,
                            "end": 75,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 66,
                              "end": 70
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 71,
                              "end": 75,
                              "name": "foo"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "start": 78,
                            "end": 84,
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "start": 78,
                              "end": 80,
                              "raw": "42",
                              "value": 42
                            },
                            "right": {
                              "type": "Literal",
                              "start": 83,
                              "end": 84,
                              "raw": "2",
                              "value": 2
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
                    "start": 95,
                    "end": 110,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 95,
                      "end": 109,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 107,
                          "end": 108,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 95,
                        "end": 106,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 102,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 106,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 140,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 126,
        "end": 139,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 126,
          "end": 137,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 126,
            "end": 133,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 137,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
