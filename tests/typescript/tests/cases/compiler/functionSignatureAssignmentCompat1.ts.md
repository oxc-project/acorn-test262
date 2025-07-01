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
        "name": "ParserFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
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
                "name": "eventEmitter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 42,
                    "end": 48
                  },
                  "start": 40,
                  "end": 48
                },
                "start": 28,
                "end": 48
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "buffer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 58,
                    "end": 64
                  },
                  "start": 56,
                  "end": 64
                },
                "start": 50,
                "end": 64
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 67,
                "end": 71
              },
              "start": 65,
              "end": 71
            },
            "start": 27,
            "end": 72
          }
        ],
        "start": 21,
        "end": 74
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parsers",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 92
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "raw",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 102
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 114
                },
                "typeArguments": null,
                "start": 104,
                "end": 114
              },
              "start": 102,
              "end": 114
            },
            "accessibility": null,
            "static": false,
            "start": 99,
            "end": 115
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readline",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 128
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "delimiter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 141,
                    "end": 147
                  },
                  "start": 139,
                  "end": 147
                },
                "start": 129,
                "end": 147
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 160
                },
                "typeArguments": null,
                "start": 150,
                "end": 160
              },
              "start": 148,
              "end": 160
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 120,
            "end": 161
          }
        ],
        "start": 93,
        "end": 163
      },
      "declare": false,
      "start": 75,
      "end": 163
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
            "name": "parsers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parsers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 184
                },
                "typeArguments": null,
                "start": 177,
                "end": 184
              },
              "start": 175,
              "end": 184
            },
            "start": 168,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 168,
          "end": 184
        }
      ],
      "declare": false,
      "start": 164,
      "end": 185
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 203
                },
                "typeArguments": null,
                "start": 193,
                "end": 203
              },
              "start": 191,
              "end": 203
            },
            "start": 190,
            "end": 203
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "parsers",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 213
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "raw",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 217
            },
            "optional": false,
            "computed": false,
            "start": 206,
            "end": 217
          },
          "definite": false,
          "start": 190,
          "end": 217
        }
      ],
      "declare": false,
      "start": 186,
      "end": 218
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 243
                },
                "typeArguments": null,
                "start": 233,
                "end": 243
              },
              "start": 231,
              "end": 243
            },
            "start": 230,
            "end": 243
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "parsers",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 253
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readline",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 262
            },
            "optional": false,
            "computed": false,
            "start": 246,
            "end": 262
          },
          "definite": false,
          "start": 230,
          "end": 262
        }
      ],
      "declare": false,
      "start": 226,
      "end": 263
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 291
                },
                "typeArguments": null,
                "start": 281,
                "end": 291
              },
              "start": 279,
              "end": 291
            },
            "start": 278,
            "end": 291
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "parsers",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 301
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "readline",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 310
              },
              "optional": false,
              "computed": false,
              "start": 294,
              "end": 310
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 294,
            "end": 312
          },
          "definite": false,
          "start": 278,
          "end": 312
        }
      ],
      "declare": false,
      "start": 274,
      "end": 313
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 319
}
```
