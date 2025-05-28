__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 427,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 48,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 22,
                "end": 48,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 24,
                    "end": 46,
                    "key": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 27,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 28,
                        "end": 39,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 31,
                          "end": 39,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 33,
                            "end": 39
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 64,
        "end": 74,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 66,
          "end": 74,
          "typeName": {
            "type": "Identifier",
            "start": 66,
            "end": 74,
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 325,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 81,
            "end": 323,
            "argument": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 322,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 109,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 106,
                      "end": 109
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 111,
                  "end": 126,
                  "decorators": [],
                  "name": "propKey",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 118,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 120,
                      "end": 126
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 128,
                  "end": 153,
                  "decorators": [],
                  "name": "descr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 153,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 153,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 153,
                        "decorators": [],
                        "name": "PropertyDescriptor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 154,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 156,
                  "end": 160
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 322,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 171,
                    "end": 200,
                    "expression": {
                      "type": "CallExpression",
                      "start": 171,
                      "end": 199,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 171,
                        "end": 182,
                        "object": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 178,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 182,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 183,
                          "end": 198,
                          "object": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 189,
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 190,
                            "end": 197,
                            "decorators": [],
                            "name": "propKey",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 327,
      "end": 427,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 334,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 335,
        "end": 427,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 341,
            "end": 425,
            "decorators": [
              {
                "type": "Decorator",
                "start": 341,
                "end": 347,
                "expression": {
                  "type": "CallExpression",
                  "start": 342,
                  "end": 347,
                  "callee": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 345,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 365,
              "decorators": [],
              "name": "__foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 365,
              "end": 425,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 366,
                  "end": 377,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 369,
                    "end": 377,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 371,
                      "end": 377
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 378,
                "end": 384,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 380,
                  "end": 384
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 385,
                "end": 425,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
