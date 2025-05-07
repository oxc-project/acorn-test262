__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 196,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 24,
      "end": 127,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 127,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 53,
            "end": 61,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 53,
              "end": 61,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 55,
                "end": 61,
                "decorators": [],
                "name": "_model",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 66,
            "end": 87,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 72,
                "end": 87,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 76,
                  "end": 87,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 80,
                    "end": 85,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 83,
                      "decorators": [],
                      "name": "Emu",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 92,
            "end": 125,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 98,
                "end": 124,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 102,
                  "end": 124,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 102,
                    "end": 107,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 105,
                      "decorators": [],
                      "name": "Emu",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 124,
                    "decorators": [],
                    "name": "_wrapperInstance",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 43,
        "decorators": [],
        "name": "ollKorrect",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 195,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 128,
        "end": 195,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 128,
          "end": 133,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "decorators": [],
            "name": "Emu",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 136,
          "end": 195,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 142,
            "end": 195,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 148,
                "end": 193,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 159,
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
                  "start": 159,
                  "end": 193,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 162,
                    "end": 193,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 172,
                        "end": 187,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 172,
                          "end": 187,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 172,
                            "end": 183,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 172,
                              "end": 176
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 183,
                              "decorators": [],
                              "name": "_model",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 186,
                            "end": 187,
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
  "end": 59,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "Emu",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 12,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 58,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 35,
        "end": 57,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 35,
          "end": 40,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "Emu",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 41,
          "end": 57,
          "decorators": [],
          "name": "_wrapperInstance",
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
