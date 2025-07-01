__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "En",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 13
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "initializer": null,
            "computed": false,
            "start": 19,
            "end": 20
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "initializer": null,
            "computed": false,
            "start": 22,
            "end": 23
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
            },
            "initializer": null,
            "computed": false,
            "start": 25,
            "end": 26
          }
        ],
        "start": 14,
        "end": 28
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 45
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 46,
            "end": 47
          }
        ],
        "start": 45,
        "end": 48
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 53
              },
              "typeArguments": null,
              "start": 52,
              "end": 53
            },
            "start": 50,
            "end": 53
          },
          "start": 49,
          "end": 53
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "start": 61,
            "end": 70
          }
        ],
        "start": 55,
        "end": 72
      },
      "expression": false,
      "start": 30,
      "end": 72
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "verify",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 89
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "En",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 95
              },
              "typeArguments": null,
              "start": 93,
              "end": 95
            },
            "start": 91,
            "end": 95
          },
          "start": 90,
          "end": 95
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "En",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 131
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 133
                  },
                  "optional": false,
                  "computed": false,
                  "start": 129,
                  "end": 133
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 160
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 161,
                              "end": 162
                            },
                            "start": 161,
                            "end": 162
                          }
                        ],
                        "start": 160,
                        "end": 163
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 165
                        }
                      ],
                      "optional": false,
                      "start": 154,
                      "end": 166
                    },
                    "start": 147,
                    "end": 167
                  }
                ],
                "start": 124,
                "end": 167
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "En",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 183
                  },
                  "property": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 184,
                    "end": 187
                  },
                  "optional": false,
                  "computed": true,
                  "start": 181,
                  "end": 188
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 215
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 216,
                              "end": 217
                            },
                            "start": 216,
                            "end": 217
                          }
                        ],
                        "start": 215,
                        "end": 218
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 220
                        }
                      ],
                      "optional": false,
                      "start": 209,
                      "end": 221
                    },
                    "start": 202,
                    "end": 222
                  }
                ],
                "start": 176,
                "end": 222
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "En",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 238
                  },
                  "property": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "C",
                          "cooked": "C"
                        },
                        "tail": true,
                        "start": 239,
                        "end": 242
                      }
                    ],
                    "expressions": [],
                    "start": 239,
                    "end": 242
                  },
                  "optional": false,
                  "computed": true,
                  "start": 236,
                  "end": 243
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 264,
                        "end": 270
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 271,
                              "end": 272
                            },
                            "start": 271,
                            "end": 272
                          }
                        ],
                        "start": 270,
                        "end": 273
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 275
                        }
                      ],
                      "optional": false,
                      "start": 264,
                      "end": 276
                    },
                    "start": 257,
                    "end": 277
                  }
                ],
                "start": 231,
                "end": 277
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "En",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 293
                  },
                  "property": {
                    "type": "Literal",
                    "value": "D",
                    "raw": "\"\\u{44}\"",
                    "start": 294,
                    "end": 302
                  },
                  "optional": false,
                  "computed": true,
                  "start": 291,
                  "end": 303
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 330
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 331,
                              "end": 332
                            },
                            "start": 331,
                            "end": 332
                          }
                        ],
                        "start": 330,
                        "end": 333
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 334,
                          "end": 335
                        }
                      ],
                      "optional": false,
                      "start": 324,
                      "end": 336
                    },
                    "start": 317,
                    "end": 337
                  }
                ],
                "start": 286,
                "end": 337
              }
            ],
            "start": 103,
            "end": 343
          }
        ],
        "start": 97,
        "end": 345
      },
      "expression": false,
      "start": 74,
      "end": 345
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 345
}
```
