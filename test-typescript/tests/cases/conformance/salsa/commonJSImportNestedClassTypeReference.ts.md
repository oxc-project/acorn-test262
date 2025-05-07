__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 31,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 11,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 9,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 31,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 30,
                "raw": "\"./mod1\"",
                "value": "./mod1",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 85,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 67,
        "end": 85,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 73,
            "end": 83,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 73,
              "end": 83,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 73,
                "end": 81,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 81,
                  "decorators": [],
                  "name": "values",
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
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
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
  "end": 92,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 9,
            "end": 11,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 74,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 74,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 12,
          "end": 16,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 18,
          "end": 74,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 24,
            "end": 74,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 30,
                "end": 72,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "decorators": [],
                  "name": "values",
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
                  "end": 72,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 39,
                    "end": 72,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 49,
                        "end": 66,
                        "argument": {
                          "type": "NewExpression",
                          "start": 56,
                          "end": 66,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 60,
                            "end": 64,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 60,
                              "end": 62,
                              "decorators": [],
                              "name": "NS",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 63,
                              "end": 64,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
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
          "id": null,
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 92,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 91,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 75,
          "end": 84,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 75,
            "end": 82,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 87,
          "end": 91,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 87,
            "end": 89,
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
