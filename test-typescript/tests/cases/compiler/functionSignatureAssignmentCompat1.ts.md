__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 319,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "ParserFunc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 74,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 27,
            "end": 72,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 28,
                "end": 48,
                "name": "eventEmitter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 48,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 42,
                    "end": 48
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 50,
                "end": 64,
                "name": "buffer",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 64,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 58,
                    "end": 64
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 71,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 67,
                "end": 71
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 75,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 92,
        "name": "Parsers",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 93,
        "end": 163,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 99,
            "end": 115,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 102,
              "name": "raw",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 114,
                  "name": "ParserFunc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 120,
            "end": 161,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 128,
              "name": "readline",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 129,
                "end": 147,
                "name": "delimiter",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 139,
                  "end": 147,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 141,
                    "end": 147
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 150,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 160,
                  "name": "ParserFunc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 184,
            "name": "parsers",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 184,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 184,
                  "name": "Parsers",
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
      "start": 186,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 217,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 203,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 203,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 203,
                  "name": "ParserFunc",
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
          "init": {
            "type": "MemberExpression",
            "start": 206,
            "end": 217,
            "object": {
              "type": "Identifier",
              "start": 206,
              "end": 213,
              "name": "parsers",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "name": "raw",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 243,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 233,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 243,
                  "name": "ParserFunc",
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
          "init": {
            "type": "MemberExpression",
            "start": 246,
            "end": 262,
            "object": {
              "type": "Identifier",
              "start": 246,
              "end": 253,
              "name": "parsers",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 254,
              "end": 262,
              "name": "readline",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 291,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 279,
              "end": 291,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 281,
                "end": 291,
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 291,
                  "name": "ParserFunc",
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
          "init": {
            "type": "CallExpression",
            "start": 294,
            "end": 312,
            "callee": {
              "type": "MemberExpression",
              "start": 294,
              "end": 310,
              "object": {
                "type": "Identifier",
                "start": 294,
                "end": 301,
                "name": "parsers",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 302,
                "end": 310,
                "name": "readline",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
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
