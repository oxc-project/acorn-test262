__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "Common",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 13,
            "end": 15,
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
      "end": 82,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 17,
        "end": 82,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 17,
          "end": 25,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 17,
            "end": 23,
            "decorators": [],
            "name": "Common",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 28,
          "end": 82,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 34,
            "end": 82,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 40,
                "end": 80,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 51,
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
                  "start": 51,
                  "end": 80,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 54,
                    "end": 80,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 64,
                        "end": 74,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 64,
                          "end": 74,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 64,
                            "end": 70,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 64,
                              "end": 68
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 69,
                              "end": 70,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 73,
                            "end": 74,
                            "raw": "1",
                            "value": 1
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
      "start": 83,
      "end": 181,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 83,
        "end": 181,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 83,
          "end": 91,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 83,
            "end": 89,
            "decorators": [],
            "name": "Common",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "O",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 94,
          "end": 181,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 117,
            "end": 181,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 123,
                "end": 179,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 134,
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
                  "start": 134,
                  "end": 179,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 137,
                    "end": 179,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 147,
                        "end": 154,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 147,
                          "end": 154,
                          "arguments": [],
                          "callee": {
                            "type": "Super",
                            "start": 147,
                            "end": 152
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 163,
                        "end": 173,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 163,
                          "end": 173,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 163,
                            "end": 169,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 163,
                              "end": 167
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 168,
                              "end": 169,
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 172,
                            "end": 173,
                            "raw": "2",
                            "value": 2
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
          "superClass": {
            "type": "MemberExpression",
            "start": 108,
            "end": 116,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 108,
              "end": 114,
              "decorators": [],
              "name": "Common",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 187,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 190,
            "end": 204,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 194,
              "end": 202,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 194,
                "end": 200,
                "decorators": [],
                "name": "Common",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
                "decorators": [],
                "name": "O",
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
      "type": "VariableDeclaration",
      "start": 205,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 213,
            "end": 227,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 217,
              "end": 225,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 217,
                "end": 223,
                "decorators": [],
                "name": "Common",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "I",
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
      "start": 228,
      "end": 231,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 228,
        "end": 231,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 228,
          "end": 229,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 230,
          "end": 231,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 235,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 232,
        "end": 235,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 232,
          "end": 233,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 234,
          "end": 235,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 239,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 236,
        "end": 239,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 236,
          "end": 237,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 238,
          "end": 239,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
