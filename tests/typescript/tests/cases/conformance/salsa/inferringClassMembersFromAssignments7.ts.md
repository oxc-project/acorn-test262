__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 215,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 215,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 150,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
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
              "start": 25,
              "end": 150,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 150,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 38,
                    "end": 53,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 42,
                        "end": 53,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 46,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 49,
                          "end": 53
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 62,
                    "end": 72,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 62,
                      "end": 72,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 62,
                        "end": 68,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 66,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 68,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 71,
                        "end": 72,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 81,
                    "end": 144,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 81,
                      "end": 144,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 81,
                        "end": 87,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 85,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "start": 90,
                        "end": 144,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 101,
                          "end": 144,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 115,
                              "end": 134,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 115,
                                "end": 134,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 127,
                                    "end": 133,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 127,
                                      "end": 131,
                                      "decorators": [],
                                      "name": "self",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 132,
                                      "end": 133,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 115,
                                  "end": 126,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 115,
                                    "end": 122,
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 123,
                                    "end": 126,
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
            "start": 155,
            "end": 213,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 160,
              "decorators": [],
              "name": "mreal",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 160,
              "end": 213,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 163,
                "end": 213,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 173,
                    "end": 188,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 177,
                        "end": 188,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 181,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 184,
                          "end": 188
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 197,
                    "end": 207,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 197,
                      "end": 207,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 197,
                        "end": 203,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 201,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 202,
                          "end": 203,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 206,
                        "end": 207,
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
      "type": "VariableDeclaration",
      "start": 216,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 223,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 226,
            "end": 233,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 237,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 234,
        "end": 237,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 234,
          "end": 235,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 236,
          "end": 237,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 241,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 238,
        "end": 241,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 238,
          "end": 239,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 240,
          "end": 241,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 247,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 242,
        "end": 247,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 242,
          "end": 245,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 242,
            "end": 243,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 244,
            "end": 245,
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
