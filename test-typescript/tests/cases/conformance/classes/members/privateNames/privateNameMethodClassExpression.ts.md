__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 161,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 161,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 22,
                  "end": 46,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 22,
                    "end": 28,
                    "name": "field"
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null,
                  "value": {
                    "type": "CallExpression",
                    "start": 31,
                    "end": 45,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 31,
                      "end": 43,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 31,
                        "end": 35
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 36,
                        "end": 43,
                        "name": "method"
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 51,
                  "end": 75,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 51,
                    "end": 58,
                    "name": "method"
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 58,
                    "end": 75,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 61,
                      "end": 75,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 63,
                          "end": 73,
                          "argument": {
                            "type": "Literal",
                            "start": 70,
                            "end": 72,
                            "raw": "42",
                            "value": 42
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
                  "start": 80,
                  "end": 120,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 98,
                    "decorators": [],
                    "name": "getInstance",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 98,
                    "end": 120,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 101,
                      "end": 120,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 103,
                          "end": 118,
                          "argument": {
                            "type": "NewExpression",
                            "start": 110,
                            "end": 117,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 114,
                              "end": 115,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 125,
                  "end": 158,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 133,
                    "decorators": [],
                    "name": "getField",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 133,
                    "end": 158,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 136,
                      "end": 158,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 138,
                          "end": 156,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 145,
                            "end": 156,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 145,
                              "end": 149
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 150,
                              "end": 156,
                              "name": "field"
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
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 203,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 163,
        "end": 202,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 175,
            "end": 201,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 175,
              "end": 199,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 175,
                "end": 190,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 175,
                  "end": 188,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 188,
                    "decorators": [],
                    "name": "getInstance",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 191,
                "end": 199,
                "decorators": [],
                "name": "getField",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 163,
          "end": 174,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 163,
            "end": 170,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 171,
            "end": 174,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 228,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 204,
        "end": 227,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 204,
          "end": 219,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 204,
            "end": 217,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 206,
              "end": 217,
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "PrivateIdentifier",
          "start": 220,
          "end": 227,
          "name": "method"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 261,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 238,
        "end": 260,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 238,
          "end": 253,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 238,
            "end": 251,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 240,
              "end": 251,
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "PrivateIdentifier",
          "start": 254,
          "end": 260,
          "name": "field"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
