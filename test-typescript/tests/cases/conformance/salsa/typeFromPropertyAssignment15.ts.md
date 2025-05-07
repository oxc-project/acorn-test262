__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 97,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 17,
        "end": 97,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 17,
          "end": 28,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 17,
            "end": 22,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 28,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 31,
          "end": 97,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 37,
            "end": 97,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 43,
                "end": 83,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 54,
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
                  "start": 54,
                  "end": 83,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 57,
                    "end": 83,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 67,
                        "end": 77,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 67,
                          "end": 77,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 67,
                            "end": 73,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 67,
                              "end": 71
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 73,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 76,
                            "end": 77,
                            "raw": "1",
                            "value": 1,
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
              },
              {
                "type": "MethodDefinition",
                "start": 88,
                "end": 95,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 89,
                  "end": 95,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 92,
                    "end": 95,
                    "body": []
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
      "start": 126,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 135,
            "decorators": [],
            "name": "inner",
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
      "start": 136,
      "end": 143,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 136,
        "end": 143,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 136,
          "end": 141,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 153,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 144,
        "end": 153,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 144,
          "end": 151,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 144,
            "end": 149,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 162,
            "decorators": [],
            "name": "inno",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 165,
            "end": 182,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 169,
              "end": 180,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 169,
                "end": 174,
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 175,
                "end": 180,
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
      "start": 183,
      "end": 189,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 183,
        "end": 189,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 183,
          "end": 187,
          "decorators": [],
          "name": "inno",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 188,
          "end": 189,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 198,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 190,
        "end": 198,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 190,
          "end": 196,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 190,
            "end": 194,
            "decorators": [],
            "name": "inno",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "decorators": [],
            "name": "m",
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
