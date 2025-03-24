__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 350,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 209,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 209,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 22,
              "name": "method"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 38,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 38,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 27,
                    "end": 36,
                    "argument": {
                      "type": "Literal",
                      "start": 34,
                      "end": 36,
                      "raw": "\"\"",
                      "value": ""
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
            "start": 43,
            "end": 207,
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
              "end": 207,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 207,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 67,
                    "end": 93,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 67,
                      "end": 92,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 79,
                          "end": 91,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 79,
                            "end": 83
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 84,
                            "end": 91,
                            "name": "method"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 67,
                        "end": 78,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 74,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 78,
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
                    "type": "VariableDeclaration",
                    "start": 102,
                    "end": 119,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 106,
                        "end": 118,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 111,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 107,
                            "end": 111,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 109,
                              "end": 111,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 109,
                                "end": 111,
                                "decorators": [],
                                "name": "A2",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 114,
                          "end": 118
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 140,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 128,
                      "end": 139,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 137,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 129,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 130,
                          "end": 137,
                          "name": "method"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 149,
                    "end": 201,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 165,
                      "end": 201,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 179,
                          "end": 191,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 179,
                            "end": 190,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 179,
                              "end": 188,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 179,
                                "end": 180,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 181,
                                "end": 188,
                                "name": "method"
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
                      "start": 159,
                      "end": 162,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
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
        "end": 8,
        "decorators": [],
        "name": "A2",
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
      "start": 210,
      "end": 229,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 228,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 210,
          "end": 226,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 210,
            "end": 218,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 214,
              "end": 216,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "PrivateIdentifier",
            "start": 219,
            "end": 226,
            "name": "method"
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 240,
      "end": 292,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 256,
        "end": 292,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 262,
            "end": 281,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 262,
              "end": 280,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 262,
                "end": 278,
                "computed": false,
                "object": {
                  "type": "NewExpression",
                  "start": 262,
                  "end": 270,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 268,
                    "decorators": [],
                    "name": "A2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "PrivateIdentifier",
                  "start": 271,
                  "end": 278,
                  "name": "method"
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
        "start": 250,
        "end": 253,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 294,
      "end": 350,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 303,
        "end": 350,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 309,
            "end": 348,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
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
              "start": 310,
              "end": 348,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 313,
                "end": 348,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 323,
                    "end": 342,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 323,
                      "end": 341,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 323,
                        "end": 339,
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "start": 323,
                          "end": 331,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 327,
                            "end": 329,
                            "decorators": [],
                            "name": "A2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 332,
                          "end": 339,
                          "name": "method"
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
        "start": 300,
        "end": 302,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
