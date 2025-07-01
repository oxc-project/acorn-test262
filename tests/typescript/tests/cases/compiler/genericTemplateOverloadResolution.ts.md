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
        "name": "IFooFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
                "name": "strings",
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
                      "start": 33,
                      "end": 53
                    },
                    "typeArguments": null,
                    "start": 33,
                    "end": 53
                  },
                  "start": 31,
                  "end": 53
                },
                "start": 24,
                "end": 53
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 63
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 64,
                      "end": 66
                    }
                  ],
                  "start": 63,
                  "end": 67
                },
                "start": 56,
                "end": 67
              },
              "start": 54,
              "end": 67
            },
            "start": 23,
            "end": 68
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 74,
                    "end": 75
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 74,
                  "end": 75
                }
              ],
              "start": 73,
              "end": 76
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "strings",
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
                      "start": 86,
                      "end": 106
                    },
                    "typeArguments": null,
                    "start": 86,
                    "end": 106
                  },
                  "start": 84,
                  "end": 106
                },
                "start": 77,
                "end": 106
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 116
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 117,
                        "end": 118
                      },
                      "typeArguments": null,
                      "start": 117,
                      "end": 118
                    }
                  ],
                  "start": 116,
                  "end": 119
                },
                "start": 109,
                "end": 119
              },
              "start": 107,
              "end": 119
            },
            "start": 73,
            "end": 120
          }
        ],
        "start": 17,
        "end": 122
      },
      "declare": false,
      "start": 0,
      "end": 122
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooFn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFooFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 151
                },
                "typeArguments": null,
                "start": 145,
                "end": 151
              },
              "start": 143,
              "end": 151
            },
            "start": 138,
            "end": 151
          },
          "init": null,
          "definite": false,
          "start": 138,
          "end": 151
        }
      ],
      "declare": true,
      "start": 124,
      "end": 152
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "expect",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 177
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 188
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 189,
                    "end": 195
                  }
                ],
                "start": 188,
                "end": 196
              },
              "start": 181,
              "end": 196
            },
            "start": 179,
            "end": 196
          },
          "start": 178,
          "end": 196
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 199,
          "end": 203
        },
        "start": 197,
        "end": 203
      },
      "body": null,
      "expression": false,
      "start": 154,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "expect",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 212
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 218
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 219,
                  "end": 225
                }
              ],
              "start": 218,
              "end": 226
            },
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 226,
                  "end": 228
                }
              ],
              "expressions": [],
              "start": 226,
              "end": 228
            },
            "start": 213,
            "end": 228
          }
        ],
        "optional": false,
        "start": 206,
        "end": 229
      },
      "directive": null,
      "start": 206,
      "end": 230
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 230
}
```
