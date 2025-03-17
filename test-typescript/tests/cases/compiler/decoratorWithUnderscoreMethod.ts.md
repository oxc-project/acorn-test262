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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 48,
            "name": "console",
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
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 31,
                          "end": 39,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 33,
                            "end": 39
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "dec",
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
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 109,
                  "name": "target",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 106,
                      "end": 109
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 111,
                  "end": 126,
                  "name": "propKey",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 118,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 120,
                      "end": 126
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 128,
                  "end": 153,
                  "name": "descr",
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
                        "name": "PropertyDescriptor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 182,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 183,
                          "end": 198,
                          "object": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 189,
                            "name": "target",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 190,
                            "end": 197,
                            "name": "propKey",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 154,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 156,
                  "end": 160
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "Function",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 327,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 334,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 335,
        "end": 427,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 341,
            "end": 425,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 365,
              "name": "__foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 365,
              "end": 425,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 366,
                  "end": 377,
                  "name": "bar",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 369,
                    "end": 377,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 371,
                      "end": 377
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 385,
                "end": 425,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 378,
                "end": 384,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 380,
                  "end": 384
                }
              }
            },
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
                    "name": "dec",
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
            "override": false,
            "optional": false,
            "accessibility": "private"
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
