__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 286,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 207,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 69,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 45,
                "decorators": [],
                "name": "strs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 25,
                    "end": 45,
                    "typeName": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 45,
                      "decorators": [],
                      "name": "TemplateStringsArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 47,
                "end": 64,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 54,
                  "decorators": [],
                  "name": "subs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 54,
                  "end": 64,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 56,
                    "end": 64,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 56,
                      "end": 62
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 205,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 80,
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 82,
                "end": 204,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 92,
                    "end": 198,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 97,
                        "end": 106,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 98,
                          "end": 106,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 100,
                            "end": 106
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 198,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 109,
                        "end": 198,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 123,
                            "end": 188,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 128,
                                "end": 137,
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 129,
                                  "end": 137,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 131,
                                    "end": 137
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 138,
                              "end": 188,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 140,
                                "end": 188,
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 158,
                                    "end": 174,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 164,
                                      "end": 173,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 166,
                                        "end": 173
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
      "start": 208,
      "end": 217,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 216,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 216,
                "typeName": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 285,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 227,
            "end": 284,
            "left": {
              "type": "NewExpression",
              "start": 227,
              "end": 275,
              "callee": {
                "type": "NewExpression",
                "start": 231,
                "end": 275,
                "callee": {
                  "type": "NewExpression",
                  "start": 235,
                  "end": 271,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 239,
                    "end": 262,
                    "object": {
                      "type": "TaggedTemplateExpression",
                      "start": 239,
                      "end": 255,
                      "tag": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 240,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 241,
                        "end": 255,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 241,
                            "end": 247,
                            "value": {
                              "cooked": "abc",
                              "raw": "abc"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 250,
                            "end": 255,
                            "value": {
                              "cooked": "def",
                              "raw": "def"
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 248,
                            "end": 249,
                            "value": 0,
                            "raw": "0"
                          }
                        ]
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 262,
                      "decorators": [],
                      "name": "member",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 263,
                      "end": 270,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  ]
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 272,
                    "end": 274,
                    "value": 42,
                    "raw": "42"
                  }
                ]
              },
              "typeArguments": null,
              "arguments": []
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 280,
              "end": 284,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
