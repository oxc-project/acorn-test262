__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 319,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 178,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "EventBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 178,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 77,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 40,
              "decorators": [],
              "name": "_listeners",
              "optional": false,
              "typeAnnotation": null
            },
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
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 48,
                            "end": 52,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
            "value": {
              "type": "ArrayExpression",
              "start": 74,
              "end": 76,
              "elements": []
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 176,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 86,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 86,
              "end": 176,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 121,
                  "decorators": [],
                  "name": "listener",
                  "optional": false,
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
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 105,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 122,
                "end": 128,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 124,
                  "end": 128
                }
              },
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
                            "decorators": [],
                            "name": "_listeners",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 159,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 160,
                          "end": 168,
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
      "type": "ClassDeclaration",
      "start": 180,
      "end": 319,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 197,
        "decorators": [],
        "name": "StringEvent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 206,
        "end": 215,
        "decorators": [],
        "name": "EventBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 216,
        "end": 319,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 222,
            "end": 317,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 225,
              "end": 317,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 226,
                  "end": 278,
                  "decorators": [],
                  "name": "listener",
                  "optional": false,
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
                          "decorators": [],
                          "name": "items",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 242,
                            "end": 250,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 244,
                              "end": 250
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 252,
                          "end": 269,
                          "decorators": [],
                          "name": "moreitems",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 261,
                            "end": 269,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 263,
                              "end": 269
                            }
                          }
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
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "add",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 301,
                          "end": 309,
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
