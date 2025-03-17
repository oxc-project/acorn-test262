__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 288,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 208,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 19,
            "end": 70,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 20,
                "end": 46,
                "name": "strs",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 24,
                  "end": 46,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 26,
                    "end": 46,
                    "typeName": {
                      "type": "Identifier",
                      "start": 26,
                      "end": 46,
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
                "start": 48,
                "end": 65,
                "argument": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 55,
                  "name": "subs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 55,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 57,
                    "end": 65,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 57,
                      "end": 63
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
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
            "start": 75,
            "end": 206,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 81,
              "name": "member",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 83,
                "end": 205,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 93,
                    "end": 199,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 98,
                        "end": 107,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 99,
                          "end": 107,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 101,
                            "end": 107
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 108,
                      "end": 199,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 110,
                        "end": 199,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 124,
                            "end": 189,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 129,
                                "end": 138,
                                "name": "n",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 130,
                                  "end": 138,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 132,
                                    "end": 138
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 139,
                              "end": 189,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 141,
                                "end": 189,
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 159,
                                    "end": 175,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 165,
                                      "end": 174,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 167,
                                        "end": 174
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
      "start": 209,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 217,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 217,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 216,
                "end": 217,
                "typeName": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
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
      "start": 220,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 285,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 228,
            "end": 285,
            "left": {
              "type": "NewExpression",
              "start": 228,
              "end": 276,
              "callee": {
                "type": "NewExpression",
                "start": 232,
                "end": 276,
                "callee": {
                  "type": "NewExpression",
                  "start": 236,
                  "end": 272,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 240,
                    "end": 263,
                    "object": {
                      "type": "TaggedTemplateExpression",
                      "start": 240,
                      "end": 256,
                      "tag": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 241,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 242,
                        "end": 256,
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 249,
                            "end": 250,
                            "value": 0,
                            "raw": "0"
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 242,
                            "end": 248,
                            "value": {
                              "cooked": "abc",
                              "raw": "abc"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 251,
                            "end": 256,
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
                      "start": 257,
                      "end": 263,
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
                      "start": 264,
                      "end": 271,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  ],
                  "typeArguments": null
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 273,
                    "end": 275,
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
              "start": 281,
              "end": 285,
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
