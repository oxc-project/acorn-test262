__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_listeners",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 48,
                            "end": 52
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 54,
                                "end": 57
                              },
                              "start": 54,
                              "end": 59
                            },
                            "start": 52,
                            "end": 59
                          },
                          "value": null,
                          "start": 45,
                          "end": 59
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 62,
                          "end": 66
                        },
                        "start": 60,
                        "end": 66
                      },
                      "start": 44,
                      "end": 67
                    }
                  ],
                  "start": 42,
                  "end": 69
                },
                "start": 42,
                "end": 71
              },
              "start": 40,
              "end": 71
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 74,
              "end": 76
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 22,
            "end": 77
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 86
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
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 101,
                            "end": 105
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 107,
                                "end": 110
                              },
                              "start": 107,
                              "end": 112
                            },
                            "start": 105,
                            "end": 112
                          },
                          "value": null,
                          "start": 98,
                          "end": 112
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 117,
                          "end": 121
                        },
                        "start": 114,
                        "end": 121
                      },
                      "start": 97,
                      "end": 121
                    },
                    "start": 95,
                    "end": 121
                  },
                  "start": 87,
                  "end": 121
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 124,
                  "end": 128
                },
                "start": 122,
                "end": 128
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 139,
                            "end": 143
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_listeners",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 154
                          },
                          "optional": false,
                          "computed": false,
                          "start": 139,
                          "end": 154
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 159
                        },
                        "optional": false,
                        "computed": false,
                        "start": 139,
                        "end": 159
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 160,
                          "end": 168
                        }
                      ],
                      "optional": false,
                      "start": 139,
                      "end": 169
                    },
                    "directive": null,
                    "start": 139,
                    "end": 170
                  }
                ],
                "start": 129,
                "end": 176
              },
              "expression": false,
              "start": 86,
              "end": 176
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 83,
            "end": 176
          }
        ],
        "start": 16,
        "end": 178
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 178
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringEvent",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 197
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 215
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 225
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
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "items",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 244,
                              "end": 250
                            },
                            "start": 242,
                            "end": 250
                          },
                          "start": 237,
                          "end": 250
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "moreitems",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 263,
                              "end": 269
                            },
                            "start": 261,
                            "end": 269
                          },
                          "start": 252,
                          "end": 269
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 274,
                          "end": 278
                        },
                        "start": 271,
                        "end": 278
                      },
                      "start": 236,
                      "end": 278
                    },
                    "start": 234,
                    "end": 278
                  },
                  "start": 226,
                  "end": 278
                }
              ],
              "returnType": null,
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
                          "type": "Super",
                          "start": 291,
                          "end": 296
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "add",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 297,
                          "end": 300
                        },
                        "optional": false,
                        "computed": false,
                        "start": 291,
                        "end": 300
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 309
                        }
                      ],
                      "optional": false,
                      "start": 291,
                      "end": 310
                    },
                    "directive": null,
                    "start": 291,
                    "end": 311
                  }
                ],
                "start": 281,
                "end": 317
              },
              "expression": false,
              "start": 225,
              "end": 317
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 222,
            "end": 317
          }
        ],
        "start": 216,
        "end": 319
      },
      "abstract": false,
      "declare": false,
      "start": 180,
      "end": 319
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 319
}
```
