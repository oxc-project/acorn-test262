__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 24,
                      "end": 27
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 33,
                            "end": 39
                          },
                          "start": 31,
                          "end": 39
                        },
                        "start": 28,
                        "end": 39
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      },
                      "start": 40,
                      "end": 46
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 24,
                    "end": 46
                  }
                ],
                "start": 22,
                "end": 48
              },
              "start": 20,
              "end": 48
            },
            "start": 12,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 48
        }
      ],
      "declare": true,
      "start": 0,
      "end": 49
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 74
          },
          "typeArguments": null,
          "start": 66,
          "end": 74
        },
        "start": 64,
        "end": 74
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 106,
                      "end": 109
                    },
                    "start": 104,
                    "end": 109
                  },
                  "start": 98,
                  "end": 109
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propKey",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 120,
                      "end": 126
                    },
                    "start": 118,
                    "end": 126
                  },
                  "start": 111,
                  "end": 126
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "descr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropertyDescriptor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 153
                      },
                      "typeArguments": null,
                      "start": 135,
                      "end": 153
                    },
                    "start": 133,
                    "end": 153
                  },
                  "start": 128,
                  "end": 153
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 156,
                  "end": 160
                },
                "start": 154,
                "end": 160
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 178
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 179,
                          "end": 182
                        },
                        "optional": false,
                        "computed": false,
                        "start": 171,
                        "end": 182
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 189
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "propKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 190,
                            "end": 197
                          },
                          "optional": false,
                          "computed": true,
                          "start": 183,
                          "end": 198
                        }
                      ],
                      "optional": false,
                      "start": 171,
                      "end": 199
                    },
                    "directive": null,
                    "start": 171,
                    "end": 200
                  }
                ],
                "start": 161,
                "end": 322
              },
              "expression": false,
              "start": 88,
              "end": 322
            },
            "start": 81,
            "end": 323
          }
        ],
        "start": 75,
        "end": 325
      },
      "expression": false,
      "start": 50,
      "end": 325
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 334
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 345
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 342,
                  "end": 347
                },
                "start": 341,
                "end": 347
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 365
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 371,
                      "end": 377
                    },
                    "start": 369,
                    "end": 377
                  },
                  "start": 366,
                  "end": 377
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 380,
                  "end": 384
                },
                "start": 378,
                "end": 384
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 385,
                "end": 425
              },
              "expression": false,
              "start": 365,
              "end": 425
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 341,
            "end": 425
          }
        ],
        "start": 335,
        "end": 427
      },
      "abstract": false,
      "declare": false,
      "start": 327,
      "end": 427
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 427
}
```
