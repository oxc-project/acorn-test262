__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 383,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 40,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 39,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 43,
            "end": 381,
            "test": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ClassExpression",
                      "start": 62,
                      "end": 194,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 71,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 72,
                        "end": 194,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 80,
                            "end": 101,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 88,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": null,
                            "value": {
                              "type": "NewExpression",
                              "start": 91,
                              "end": 100,
                              "callee": {
                                "type": "Identifier",
                                "start": 95,
                                "end": 98,
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            },
                            "computed": false,
                            "static": true,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 109,
                            "end": 148,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 117,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 117,
                              "end": 148,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
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
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 134,
                                        "end": 137,
                                        "decorators": [],
                                        "name": "Foo",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": []
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "expression": false
                            },
                            "kind": "method",
                            "computed": false,
                            "static": true,
                            "override": false,
                            "optional": false,
                            "accessibility": null
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 156,
                            "end": 188,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 156,
                              "end": 157,
                              "decorators": [],
                              "name": "m",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 157,
                              "end": 188,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
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
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 174,
                                        "end": 177,
                                        "decorators": [],
                                        "name": "Foo",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": []
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "expression": false
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null
                          }
                        ]
                      },
                      "abstract": false,
                      "declare": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 201,
                  "end": 211,
                  "expression": {
                    "type": "NewExpression",
                    "start": 201,
                    "end": 210,
                    "callee": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 208,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 223,
              "end": 381,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 229,
                  "end": 361,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 238,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 239,
                    "end": 361,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 247,
                        "end": 268,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "NewExpression",
                          "start": 258,
                          "end": 267,
                          "callee": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 265,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 276,
                        "end": 315,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 284,
                          "end": 315,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 301,
                                    "end": 304,
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                },
                                "directive": null
                              }
                            ]
                          },
                          "expression": false
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 323,
                        "end": 355,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 324,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 324,
                          "end": 355,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 341,
                                    "end": 344,
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                },
                                "directive": null
                              }
                            ]
                          },
                          "expression": false
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 367,
                  "end": 377,
                  "expression": {
                    "type": "NewExpression",
                    "start": 367,
                    "end": 376,
                    "callee": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 374,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
