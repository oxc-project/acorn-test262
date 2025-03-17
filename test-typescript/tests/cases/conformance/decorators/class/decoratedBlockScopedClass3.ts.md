__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 337,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "name": "decorator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 79,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 27,
            "end": 77,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 34,
              "end": 77,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 35,
                  "end": 70,
                  "name": "target",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 43,
                      "end": 70,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 48,
                          "end": 62,
                          "argument": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 55,
                            "name": "args",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 55,
                            "end": 62,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 57,
                              "end": 62,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 57,
                                "end": 60
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 64,
                        "end": 70,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 67,
                          "end": 70
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 77,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 81,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 103,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 169,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 128,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 169,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 169,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 146,
                    "end": 163,
                    "argument": {
                      "type": "NewExpression",
                      "start": 153,
                      "end": 162,
                      "callee": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 160,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 130,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 132,
                  "end": 135,
                  "typeName": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 135,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 81,
          "end": 93,
          "expression": {
            "type": "CallExpression",
            "start": 82,
            "end": 93,
            "callee": {
              "type": "Identifier",
              "start": 82,
              "end": 91,
              "name": "decorator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 183,
      "expression": {
        "type": "CallExpression",
        "start": 172,
        "end": 182,
        "callee": {
          "type": "MemberExpression",
          "start": 172,
          "end": 180,
          "object": {
            "type": "Identifier",
            "start": 172,
            "end": 175,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 176,
            "end": 180,
            "name": "func",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TryStatement",
      "start": 185,
      "end": 336,
      "block": {
        "type": "BlockStatement",
        "start": 189,
        "end": 323,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 195,
            "end": 305,
            "id": {
              "type": "Identifier",
              "start": 218,
              "end": 221,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 222,
              "end": 305,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 232,
                  "end": 299,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 250,
                    "name": "func",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 250,
                    "end": 299,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 258,
                      "end": 299,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 272,
                          "end": 289,
                          "argument": {
                            "type": "NewExpression",
                            "start": 279,
                            "end": 288,
                            "callee": {
                              "type": "Identifier",
                              "start": 283,
                              "end": 286,
                              "name": "Foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 252,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 254,
                        "end": 257,
                        "typeName": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 257,
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 195,
                "end": 207,
                "expression": {
                  "type": "CallExpression",
                  "start": 196,
                  "end": 207,
                  "callee": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 205,
                    "name": "decorator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExpressionStatement",
            "start": 310,
            "end": 321,
            "expression": {
              "type": "CallExpression",
              "start": 310,
              "end": 320,
              "callee": {
                "type": "MemberExpression",
                "start": 310,
                "end": 318,
                "object": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 313,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 318,
                  "name": "func",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 324,
        "end": 336,
        "param": {
          "type": "Identifier",
          "start": 331,
          "end": 332,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "BlockStatement",
          "start": 334,
          "end": 336,
          "body": []
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
