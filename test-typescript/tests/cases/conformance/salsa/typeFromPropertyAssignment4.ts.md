__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 16,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 14,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
  "end": 184,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 99,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 99,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 5,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 14,
          "end": 99,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 20,
            "end": 99,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 26,
                "end": 97,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 37,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 37,
                  "end": 97,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 40,
                    "end": 97,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 80,
                        "end": 91,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 80,
                          "end": 91,
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
                            "end": 91,
                            "raw": "12",
                            "value": 12,
                            "regex": null,
                            "bigint": null
                          }
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
      "type": "VariableDeclaration",
      "start": 128,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 137,
            "decorators": [],
            "name": "local",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 145,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 138,
        "end": 145,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 138,
          "end": 143,
          "decorators": [],
          "name": "local",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 144,
          "end": 145,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 155,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 158,
            "end": 175,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 162,
              "end": 173,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 162,
                "end": 167,
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 168,
                "end": 173,
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 183,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 176,
        "end": 183,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 176,
          "end": 181,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
  "start": 27,
  "end": 66,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 36,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 33,
        "end": 36,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 45,
            "end": 62,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 49,
              "end": 60,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 49,
                "end": 54,
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 66,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 63,
        "end": 66,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
