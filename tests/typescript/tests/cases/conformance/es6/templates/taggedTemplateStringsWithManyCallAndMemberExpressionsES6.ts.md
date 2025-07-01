__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "strs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TemplateStringsArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 25,
                      "end": 45
                    },
                    "typeArguments": null,
                    "start": 25,
                    "end": 45
                  },
                  "start": 23,
                  "end": 45
                },
                "start": 19,
                "end": 45
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 54
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 56,
                      "end": 62
                    },
                    "start": 56,
                    "end": 64
                  },
                  "start": 54,
                  "end": 64
                },
                "value": null,
                "start": 47,
                "end": 64
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 68
                },
                "typeArguments": null,
                "start": 67,
                "end": 68
              },
              "start": 65,
              "end": 68
            },
            "start": 18,
            "end": 69
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 80
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 100,
                            "end": 106
                          },
                          "start": 98,
                          "end": 106
                        },
                        "start": 97,
                        "end": 106
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 131,
                                    "end": 137
                                  },
                                  "start": 129,
                                  "end": 137
                                },
                                "start": 128,
                                "end": 137
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 166,
                                        "end": 173
                                      },
                                      "start": 164,
                                      "end": 173
                                    },
                                    "start": 158,
                                    "end": 174
                                  }
                                ],
                                "start": 140,
                                "end": 188
                              },
                              "start": 138,
                              "end": 188
                            },
                            "start": 123,
                            "end": 188
                          }
                        ],
                        "start": 109,
                        "end": 198
                      },
                      "start": 107,
                      "end": 198
                    },
                    "start": 92,
                    "end": 198
                  }
                ],
                "start": 82,
                "end": 204
              },
              "start": 80,
              "end": 204
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 205
          }
        ],
        "start": 12,
        "end": 207
      },
      "declare": false,
      "start": 0,
      "end": 207
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 216
                },
                "typeArguments": null,
                "start": 215,
                "end": 216
              },
              "start": 213,
              "end": 216
            },
            "start": 212,
            "end": 216
          },
          "init": null,
          "definite": false,
          "start": 212,
          "end": 216
        }
      ],
      "declare": false,
      "start": 208,
      "end": 217
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 224
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "NewExpression",
              "callee": {
                "type": "NewExpression",
                "callee": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 239,
                        "end": 240
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "abc",
                              "cooked": "abc"
                            },
                            "tail": false,
                            "start": 241,
                            "end": 247
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "def",
                              "cooked": "def"
                            },
                            "tail": true,
                            "start": 250,
                            "end": 255
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 248,
                            "end": 249
                          }
                        ],
                        "start": 241,
                        "end": 255
                      },
                      "start": 239,
                      "end": 255
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "member",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 256,
                      "end": 262
                    },
                    "optional": false,
                    "computed": false,
                    "start": 239,
                    "end": 262
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 263,
                      "end": 270
                    }
                  ],
                  "start": 235,
                  "end": 271
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 272,
                    "end": 274
                  }
                ],
                "start": 231,
                "end": 275
              },
              "typeArguments": null,
              "arguments": [],
              "start": 227,
              "end": 275
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 280,
              "end": 284
            },
            "start": 227,
            "end": 284
          },
          "definite": false,
          "start": 223,
          "end": 284
        }
      ],
      "declare": false,
      "start": 219,
      "end": 285
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 286
}
```
