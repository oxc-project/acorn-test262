__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 262,
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
            "name": "UI",
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
      "end": 95,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 12,
          "end": 26,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "UI",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 26,
            "decorators": [],
            "name": "TreeElement",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 29,
          "end": 94,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 35,
            "end": 94,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 41,
                "end": 92,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 52,
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
                  "start": 52,
                  "end": 92,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 55,
                    "end": 92,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 65,
                        "end": 86,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 65,
                          "end": 86,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 65,
                            "end": 81,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 65,
                              "end": 69
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 81,
                              "decorators": [],
                              "name": "treeOutline",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 84,
                            "end": 86,
                            "raw": "12",
                            "value": 12
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
      "type": "ExpressionStatement",
      "start": 96,
      "end": 129,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 96,
        "end": 129,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 96,
          "end": 106,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 96,
            "end": 98,
            "decorators": [],
            "name": "UI",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 106,
            "decorators": [],
            "name": "context",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "NewExpression",
          "start": 109,
          "end": 129,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 113,
            "end": 127,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 113,
              "end": 115,
              "decorators": [],
              "name": "UI",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 116,
              "end": 127,
              "decorators": [],
              "name": "TreeElement",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 131,
      "end": 261,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 162,
        "end": 261,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 259,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 178,
              "decorators": [],
              "name": "onpopulate",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 259,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 259,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 191,
                    "end": 208,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 191,
                      "end": 208,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 191,
                        "end": 195
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 208,
                        "decorators": [],
                        "name": "doesNotExist",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 217,
                    "end": 253,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 217,
                      "end": 253,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 217,
                        "end": 251,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 217,
                          "end": 233,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 217,
                            "end": 221
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 233,
                            "decorators": [],
                            "name": "treeOutline",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 251,
                          "decorators": [],
                          "name": "doesntExistEither",
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
        "start": 137,
        "end": 138,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 147,
        "end": 161,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 147,
          "end": 149,
          "decorators": [],
          "name": "UI",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 150,
          "end": 161,
          "decorators": [],
          "name": "TreeElement",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 261,
      "end": 262
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
