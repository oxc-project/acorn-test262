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
        "decorators": [],
        "name": "ParserFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
                "decorators": [],
                "name": "eventEmitter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 48,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 42,
                    "end": 48
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 50,
                "end": 64,
                "decorators": [],
                "name": "buffer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 64,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 58,
                    "end": 64
                  }
                }
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
        "decorators": [],
        "name": "Parsers",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "raw",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "readline",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "delimiter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 139,
                  "end": 147,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 141,
                    "end": 147
                  }
                }
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
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 184,
            "decorators": [],
            "name": "parsers",
            "optional": false,
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
                  "decorators": [],
                  "name": "Parsers",
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
      "start": 186,
      "end": 218,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 217,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 203,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 206,
            "end": 217,
            "object": {
              "type": "Identifier",
              "start": 206,
              "end": 213,
              "decorators": [],
              "name": "parsers",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "decorators": [],
              "name": "raw",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 263,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 243,
            "decorators": [],
            "name": "d",
            "optional": false,
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
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 246,
            "end": 262,
            "object": {
              "type": "Identifier",
              "start": 246,
              "end": 253,
              "decorators": [],
              "name": "parsers",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 254,
              "end": 262,
              "decorators": [],
              "name": "readline",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 313,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 291,
            "decorators": [],
            "name": "e",
            "optional": false,
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
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
                "decorators": [],
                "name": "parsers",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 302,
                "end": 310,
                "decorators": [],
                "name": "readline",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
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
