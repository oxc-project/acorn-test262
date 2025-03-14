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
          "definite": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 27,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
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
                    "readonly": false,
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
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 325,
      "async": false,
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
              "async": false,
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
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 183,
                          "end": 198,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 189,
                            "decorators": [],
                            "name": "target",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 190,
                            "end": 197,
                            "decorators": [],
                            "name": "propKey",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 171,
                        "end": 182,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 178,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 182,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
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
                        "optional": false
                      }
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
        "start": 59,
        "end": 62,
        "decorators": [],
        "name": "dec",
        "optional": false
      },
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
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 327,
      "end": 427,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 335,
        "end": 427,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 341,
            "end": 425,
            "accessibility": "private",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 341,
                "end": 347,
                "expression": {
                  "type": "CallExpression",
                  "start": 342,
                  "end": 347,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 345,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
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
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 365,
              "end": 425,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 385,
                "end": 425,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 334,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
