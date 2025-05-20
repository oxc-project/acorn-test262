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
      "end": 305,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 305,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 22,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 16,
              "end": 21,
              "name": "name"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 80,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 39,
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
              "start": 39,
              "end": 80,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 80,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 56,
                    "end": 74,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 56,
                      "end": 73,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 56,
                        "end": 66,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 56,
                          "end": 60
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 61,
                          "end": 66,
                          "name": "name"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 73,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 44,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 303,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 94,
              "decorators": [],
              "name": "getValue",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 94,
              "end": 303,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 303,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 108,
                    "end": 125,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 114,
                        "end": 124,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 117,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 120,
                          "end": 124
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ClassDeclaration",
                    "start": 135,
                    "end": 257,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 145,
                      "end": 257,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 159,
                          "end": 168,
                          "accessibility": null,
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 159,
                            "end": 161,
                            "name": "y"
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "start": 164,
                            "end": 167,
                            "raw": "100",
                            "value": 100
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 182,
                          "end": 247,
                          "accessibility": null,
                          "computed": true,
                          "decorators": [],
                          "key": {
                            "type": "MemberExpression",
                            "start": 183,
                            "end": 192,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 186,
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 187,
                              "end": 192,
                              "name": "name"
                            }
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 193,
                            "end": 247,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 196,
                              "end": 247,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 214,
                                  "end": 233,
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "start": 221,
                                    "end": 232,
                                    "operator": "+",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 221,
                                      "end": 222,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 225,
                                      "end": 232,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 225,
                                        "end": 229
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 230,
                                        "end": 232,
                                        "name": "y"
                                      }
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
                      "start": 141,
                      "end": 144,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 267,
                    "end": 297,
                    "argument": {
                      "type": "CallExpression",
                      "start": 274,
                      "end": 296,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 274,
                        "end": 294,
                        "computed": true,
                        "object": {
                          "type": "NewExpression",
                          "start": 274,
                          "end": 283,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 281,
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "MemberExpression",
                          "start": 284,
                          "end": 293,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 284,
                            "end": 287,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 288,
                            "end": 293,
                            "name": "name"
                          }
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
        "end": 9,
        "decorators": [],
        "name": "Foo",
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
      "start": 307,
      "end": 350,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 307,
        "end": 349,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 319,
            "end": 348,
            "arguments": [
              {
                "type": "Literal",
                "start": 344,
                "end": 347,
                "raw": "100",
                "value": 100
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 319,
              "end": 343,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 319,
                "end": 334,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 327,
                    "end": 333,
                    "raw": "\"NAME\"",
                    "value": "NAME"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 326,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 335,
                "end": 343,
                "decorators": [],
                "name": "getValue",
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
          "start": 307,
          "end": 318,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 307,
            "end": 314,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 315,
            "end": 318,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
