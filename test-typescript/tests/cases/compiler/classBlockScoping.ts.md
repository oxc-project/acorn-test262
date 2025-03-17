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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 21,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 21,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 14,
              "end": 21
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 39,
                  "name": "Foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 36,
                      "end": 39
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ClassExpression",
                      "start": 62,
                      "end": 194,
                      "id": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 71,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 72,
                        "end": 194,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 80,
                            "end": 101,
                            "static": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 88,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "NewExpression",
                              "start": 91,
                              "end": 100,
                              "callee": {
                                "type": "Identifier",
                                "start": 95,
                                "end": 98,
                                "name": "Foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            },
                            "decorators": [],
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "typeAnnotation": null,
                            "accessibility": null
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 109,
                            "end": 148,
                            "static": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 117,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 117,
                              "end": 148,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                                        "name": "Foo",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [],
                                      "typeArguments": null
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": null
                            },
                            "decorators": [],
                            "override": false,
                            "optional": false,
                            "accessibility": null
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 156,
                            "end": 188,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 156,
                              "end": 157,
                              "name": "m",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 157,
                              "end": 188,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                                        "name": "Foo",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [],
                                      "typeArguments": null
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": null
                            },
                            "decorators": [],
                            "override": false,
                            "optional": false,
                            "accessibility": null
                          }
                        ]
                      },
                      "decorators": [],
                      "typeParameters": null,
                      "implements": [],
                      "abstract": false,
                      "declare": false,
                      "superTypeArguments": null
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
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
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
                  "id": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 238,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 239,
                    "end": 361,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 247,
                        "end": 268,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "NewExpression",
                          "start": 258,
                          "end": 267,
                          "callee": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 265,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": null,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 276,
                        "end": 315,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 284,
                          "end": 315,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                    "name": "Foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                },
                                "directive": null
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 323,
                        "end": 355,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 324,
                          "name": "m",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 324,
                          "end": 355,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                    "name": "Foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                },
                                "directive": null
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
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
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
