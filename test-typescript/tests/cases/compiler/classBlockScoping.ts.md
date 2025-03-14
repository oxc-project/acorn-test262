classBlockScoping.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 383,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 383,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 383,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 40,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 39,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 39,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 36,
                      "end": 39
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 43,
            "end": 381,
            "alternate": {
              "type": "BlockStatement",
              "start": 223,
              "end": 381,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 229,
                  "end": 361,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 239,
                    "end": 361,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 247,
                        "end": 268,
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "value": {
                          "type": "NewExpression",
                          "start": 258,
                          "end": 267,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 265,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 276,
                        "end": 315,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "method",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 284,
                          "end": 315,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 287,
                            "end": 315,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 297,
                                "end": 307,
                                "expression": {
                                  "type": "NewExpression",
                                  "start": 297,
                                  "end": 306,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 301,
                                    "end": 304,
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false
                                  }
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 323,
                        "end": 355,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 324,
                          "decorators": [],
                          "name": "m",
                          "optional": false
                        },
                        "kind": "method",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 324,
                          "end": 355,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 327,
                            "end": 355,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 337,
                                "end": 347,
                                "expression": {
                                  "type": "NewExpression",
                                  "start": 337,
                                  "end": 346,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 341,
                                    "end": 344,
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false
                                  }
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 238,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  },
                  "implements": [],
                  "superClass": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 367,
                  "end": 377,
                  "expression": {
                    "type": "NewExpression",
                    "start": 367,
                    "end": 376,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 374,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 50,
              "end": 215,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 56,
                  "end": 195,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 56,
                    "end": 194,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 59,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "right": {
                      "type": "ClassExpression",
                      "start": 62,
                      "end": 194,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 72,
                        "end": 194,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 80,
                            "end": 101,
                            "computed": false,
                            "declare": false,
                            "decorators": [],
                            "definite": false,
                            "key": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 88,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "optional": false,
                            "override": false,
                            "readonly": false,
                            "static": true,
                            "value": {
                              "type": "NewExpression",
                              "start": 91,
                              "end": 100,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 95,
                                "end": 98,
                                "decorators": [],
                                "name": "Foo",
                                "optional": false
                              }
                            }
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 109,
                            "end": 148,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 117,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": true,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 117,
                              "end": 148,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 120,
                                "end": 148,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 130,
                                    "end": 140,
                                    "expression": {
                                      "type": "NewExpression",
                                      "start": 130,
                                      "end": 139,
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 134,
                                        "end": 137,
                                        "decorators": [],
                                        "name": "Foo",
                                        "optional": false
                                      }
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": []
                            }
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 156,
                            "end": 188,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 156,
                              "end": 157,
                              "decorators": [],
                              "name": "m",
                              "optional": false
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 157,
                              "end": 188,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 160,
                                "end": 188,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 170,
                                    "end": 180,
                                    "expression": {
                                      "type": "NewExpression",
                                      "start": 170,
                                      "end": 179,
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 174,
                                        "end": 177,
                                        "decorators": [],
                                        "name": "Foo",
                                        "optional": false
                                      }
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": []
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 71,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      },
                      "implements": [],
                      "superClass": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 201,
                  "end": 211,
                  "expression": {
                    "type": "NewExpression",
                    "start": 201,
                    "end": 210,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 208,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "b",
              "optional": false
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
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 21,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 21,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 14,
              "end": 21
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
