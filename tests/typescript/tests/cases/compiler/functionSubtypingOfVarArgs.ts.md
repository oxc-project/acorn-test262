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
      "end": 147,
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
        "end": 147,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 46,
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
            "typeAnnotation": null,
            "value": {
              "type": "ArrayExpression",
              "start": 43,
              "end": 45,
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
            "start": 52,
            "end": 145,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 55,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 145,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 90,
                  "decorators": [],
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 66,
                      "end": 90,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 67,
                          "end": 81,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 74,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 74,
                            "end": 81,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 76,
                              "end": 81,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 76,
                                "end": 79
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 83,
                        "end": 90,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 86,
                          "end": 90
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 91,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 93,
                  "end": 97
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 145,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 108,
                    "end": 139,
                    "expression": {
                      "type": "CallExpression",
                      "start": 108,
                      "end": 138,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 108,
                        "end": 128,
                        "object": {
                          "type": "MemberExpression",
                          "start": 108,
                          "end": 123,
                          "object": {
                            "type": "ThisExpression",
                            "start": 108,
                            "end": 112
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 123,
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
                          "start": 124,
                          "end": 128,
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
                          "start": 129,
                          "end": 137,
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
      "start": 149,
      "end": 319,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 166,
        "decorators": [],
        "name": "StringEvent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 175,
        "end": 184,
        "decorators": [],
        "name": "EventBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 185,
        "end": 319,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 206,
            "end": 317,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 209,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 209,
              "end": 317,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 210,
                  "end": 243,
                  "decorators": [],
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 218,
                    "end": 243,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 220,
                      "end": 243,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 221,
                          "end": 234,
                          "decorators": [],
                          "name": "items",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 226,
                            "end": 234,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 228,
                              "end": 234
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 236,
                        "end": 243,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 239,
                          "end": 243
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 246,
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
