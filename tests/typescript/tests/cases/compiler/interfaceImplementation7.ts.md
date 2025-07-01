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
        "name": "i1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 18
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 24,
                      "end": 25
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 27,
                        "end": 33
                      },
                      "start": 25,
                      "end": 33
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 24,
                    "end": 34
                  }
                ],
                "start": 22,
                "end": 36
              },
              "start": 20,
              "end": 36
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 14,
            "end": 37
          }
        ],
        "start": 12,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 52
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 58
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 65
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 67,
                        "end": 73
                      },
                      "start": 65,
                      "end": 73
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 64,
                    "end": 74
                  }
                ],
                "start": 62,
                "end": 76
              },
              "start": 60,
              "end": 76
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 54,
            "end": 77
          }
        ],
        "start": 52,
        "end": 79
      },
      "declare": false,
      "start": 40,
      "end": 79
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i3",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 93
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 104
          },
          "typeArguments": null,
          "start": 102,
          "end": 104
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 108
          },
          "typeArguments": null,
          "start": 106,
          "end": 108
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 109,
        "end": 112
      },
      "declare": false,
      "start": 81,
      "end": 112
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i4",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 125
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 136
          },
          "typeArguments": null,
          "start": 134,
          "end": 136
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 140
          },
          "typeArguments": null,
          "start": 138,
          "end": 140
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 147
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 154
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 156,
                        "end": 162
                      },
                      "start": 154,
                      "end": 162
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 153,
                    "end": 163
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 165
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 167,
                        "end": 173
                      },
                      "start": 165,
                      "end": 173
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 164,
                    "end": 174
                  }
                ],
                "start": 151,
                "end": 176
              },
              "start": 149,
              "end": 176
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 143,
            "end": 177
          }
        ],
        "start": 141,
        "end": 179
      },
      "declare": false,
      "start": 113,
      "end": 179
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 189
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "i4",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 203
          },
          "typeArguments": null,
          "start": 201,
          "end": 203
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 221
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 225,
                  "end": 231
                },
                "start": 223,
                "end": 231
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 241,
                      "end": 243
                    },
                    "start": 234,
                    "end": 244
                  }
                ],
                "start": 232,
                "end": 246
              },
              "expression": false,
              "start": 221,
              "end": 246
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 210,
            "end": 246
          }
        ],
        "start": 204,
        "end": 248
      },
      "abstract": false,
      "declare": false,
      "start": 181,
      "end": 248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 248
}
```
