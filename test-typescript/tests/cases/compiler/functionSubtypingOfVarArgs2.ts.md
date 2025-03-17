__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 320,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "name": "EventBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 178,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 77,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 40,
              "name": "_listeners",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrayExpression",
              "start": 74,
              "end": 76,
              "elements": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 71,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 42,
                "end": 71,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 42,
                  "end": 69,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 44,
                      "end": 67,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 45,
                          "end": 59,
                          "argument": {
                            "type": "Identifier",
                            "start": 48,
                            "end": 52,
                            "name": "args",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 52,
                            "end": 59,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 54,
                              "end": 59,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 54,
                                "end": 57
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 60,
                        "end": 66,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 62,
                          "end": 66
                        }
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 176,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 86,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 86,
              "end": 176,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 121,
                  "name": "listener",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 121,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 97,
                      "end": 121,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 98,
                          "end": 112,
                          "argument": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 105,
                            "name": "args",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 105,
                            "end": 112,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 107,
                              "end": 112,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 107,
                                "end": 110
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 114,
                        "end": 121,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 117,
                          "end": 121
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
                "start": 129,
                "end": 176,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 139,
                    "end": 170,
                    "expression": {
                      "type": "CallExpression",
                      "start": 139,
                      "end": 169,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 139,
                        "end": 159,
                        "object": {
                          "type": "MemberExpression",
                          "start": 139,
                          "end": 154,
                          "object": {
                            "type": "ThisExpression",
                            "start": 139,
                            "end": 143
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 154,
                            "name": "_listeners",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 159,
                          "name": "push",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 160,
                          "end": 168,
                          "name": "listener",
                          "typeAnnotation": null,
                          "decorators": [],
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
                "start": 122,
                "end": 128,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 124,
                  "end": 128
                }
              }
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
      "type": "ClassDeclaration",
      "start": 180,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 197,
        "name": "StringEvent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 206,
        "end": 215,
        "name": "EventBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 216,
        "end": 319,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 222,
            "end": 317,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 225,
              "end": 317,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 226,
                  "end": 278,
                  "name": "listener",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 234,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 236,
                      "end": 278,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 237,
                          "end": 250,
                          "name": "items",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 242,
                            "end": 250,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 244,
                              "end": 250
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 252,
                          "end": 269,
                          "name": "moreitems",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 261,
                            "end": 269,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 263,
                              "end": 269
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 271,
                        "end": 278,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 274,
                          "end": 278
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
                "start": 281,
                "end": 317,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 291,
                    "end": 311,
                    "expression": {
                      "type": "CallExpression",
                      "start": 291,
                      "end": 310,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 291,
                        "end": 300,
                        "object": {
                          "type": "Super",
                          "start": 291,
                          "end": 296
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 297,
                          "end": 300,
                          "name": "add",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 301,
                          "end": 309,
                          "name": "listener",
                          "typeAnnotation": null,
                          "decorators": [],
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
