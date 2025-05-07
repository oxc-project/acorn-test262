__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 116,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 116,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 39,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 39,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 32,
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 35,
                  "end": 39
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 44,
            "end": 54,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 44,
              "end": 54,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 44,
                "end": 50,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 48,
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 53,
                "end": 54,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 59,
            "end": 114,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 59,
              "end": 114,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 59,
                "end": 65,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 63,
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "FunctionExpression",
                "start": 68,
                "end": 114,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 79,
                  "end": 114,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 89,
                      "end": 108,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 89,
                        "end": 108,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 101,
                            "end": 107,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 101,
                              "end": 105,
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 106,
                              "end": 107,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 89,
                          "end": 100,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 96,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 100,
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "Foonly",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 117,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 117,
          "end": 139,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 117,
            "end": 133,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 117,
              "end": 123,
              "decorators": [],
              "name": "Foonly",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 124,
              "end": 133,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 139,
            "decorators": [],
            "name": "mreal",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 142,
          "end": 191,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 153,
            "end": 191,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 159,
                "end": 174,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 163,
                    "end": 174,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 167,
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 170,
                      "end": 174
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              {
                "type": "ExpressionStatement",
                "start": 179,
                "end": 189,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 179,
                  "end": 189,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 179,
                    "end": 185,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 183,
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 185,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 188,
                    "end": 189,
                    "raw": "2",
                    "value": 2,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 216,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 201,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 204,
            "end": 216,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 208,
              "end": 214,
              "decorators": [],
              "name": "Foonly",
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
      "start": 217,
      "end": 222,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 217,
        "end": 222,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 217,
          "end": 220,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 228,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 223,
        "end": 228,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 223,
          "end": 226,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 227,
          "end": 228,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 236,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 229,
        "end": 236,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 229,
          "end": 234,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 229,
            "end": 232,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 233,
            "end": 234,
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
