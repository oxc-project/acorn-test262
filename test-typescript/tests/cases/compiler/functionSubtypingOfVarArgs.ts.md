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
      "end": 147,
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
        "end": 147,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 46,
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
              "start": 43,
              "end": 45,
              "elements": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 145,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 55,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 145,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 90,
                  "name": "listener",
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
                          "argument": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 74,
                            "name": "args",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "decorators": [],
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "start": 124,
                          "end": 128,
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
                          "start": 129,
                          "end": 137,
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
                "start": 91,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 93,
                  "end": 97
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
      "start": 149,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 166,
        "name": "StringEvent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 175,
        "end": 184,
        "name": "EventBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 185,
        "end": 319,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 206,
            "end": 317,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 209,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 209,
              "end": 317,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 210,
                  "end": 243,
                  "name": "listener",
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
                          "name": "items",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 226,
                            "end": 234,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 228,
                              "end": 234
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
