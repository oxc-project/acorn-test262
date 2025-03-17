__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 304,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 17,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 224,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 35,
            "end": 86,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 36,
                "end": 62,
                "name": "strs",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 62,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 62,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 62,
                      "name": "TemplateStringsArray",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 64,
                "end": 81,
                "argument": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 71,
                  "name": "subs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 81,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 73,
                    "end": 81,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 73,
                      "end": 79
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 85,
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 222,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "name": "member",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 99,
                "end": 221,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 109,
                    "end": 215,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 114,
                        "end": 123,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 115,
                          "end": 123,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 117,
                            "end": 123
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 124,
                      "end": 215,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 126,
                        "end": 215,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 140,
                            "end": 205,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 145,
                                "end": 154,
                                "name": "n",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 146,
                                  "end": 154,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 148,
                                    "end": 154
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 155,
                              "end": 205,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 157,
                                "end": 205,
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 175,
                                    "end": 191,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 181,
                                      "end": 190,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 183,
                                        "end": 190
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 233,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 233,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 233,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 232,
                "end": 233,
                "typeName": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 233,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 244,
            "end": 301,
            "left": {
              "type": "NewExpression",
              "start": 244,
              "end": 292,
              "callee": {
                "type": "NewExpression",
                "start": 248,
                "end": 292,
                "callee": {
                  "type": "NewExpression",
                  "start": 252,
                  "end": 288,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 256,
                    "end": 279,
                    "object": {
                      "type": "TaggedTemplateExpression",
                      "start": 256,
                      "end": 272,
                      "tag": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 257,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 258,
                        "end": 272,
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 265,
                            "end": 266,
                            "value": 0,
                            "raw": "0"
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 258,
                            "end": 264,
                            "value": {
                              "cooked": "abc",
                              "raw": "abc"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 267,
                            "end": 272,
                            "value": {
                              "cooked": "def",
                              "raw": "def"
                            },
                            "tail": true
                          }
                        ]
                      },
                      "typeArguments": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 279,
                      "name": "member",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 280,
                      "end": 287,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  ],
                  "typeArguments": null
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 289,
                    "end": 291,
                    "value": 42,
                    "raw": "42"
                  }
                ],
                "typeArguments": null
              },
              "arguments": [],
              "typeArguments": null
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 297,
              "end": 301,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
