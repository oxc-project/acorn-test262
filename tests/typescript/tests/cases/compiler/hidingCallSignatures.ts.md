__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 313,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 44,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 18,
            "end": 42,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 23,
                "end": 32,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 24,
                  "end": 32,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 26,
                    "end": 32
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 66,
          "end": 67,
          "expression": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 112,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 74,
            "end": 94,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 75,
                "end": 84,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 76,
                  "end": 84,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 78,
                    "end": 84
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 93,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 87,
                "end": 93
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 114,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 125,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 126,
        "end": 150,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 132,
            "end": 148,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 133,
                "end": 142,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 134,
                  "end": 142,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 136,
                    "end": 142
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 145,
                "end": 147,
                "members": []
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 152,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 163,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 172,
          "end": 173,
          "expression": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 174,
        "end": 202,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 180,
            "end": 200,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 181,
                "end": 190,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 182,
                  "end": 190,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 184,
                    "end": 190
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 199,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 193,
                "end": 199
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 213,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 212,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 211,
                "end": 212,
                "typeName": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "D",
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
      "type": "ExpressionStatement",
      "start": 214,
      "end": 220,
      "expression": {
        "type": "CallExpression",
        "start": 214,
        "end": 219,
        "callee": {
          "type": "Identifier",
          "start": 214,
          "end": 215,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 216,
            "end": 218,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 241,
      "expression": {
        "type": "NewExpression",
        "start": 231,
        "end": 240,
        "callee": {
          "type": "Identifier",
          "start": 235,
          "end": 236,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 237,
            "end": 239,
            "value": "",
            "raw": "\"\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 272,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 271,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 271,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 271,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 270,
                "end": 271,
                "typeName": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 271,
                  "decorators": [],
                  "name": "F",
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
      "type": "ExpressionStatement",
      "start": 273,
      "end": 279,
      "expression": {
        "type": "CallExpression",
        "start": 273,
        "end": 278,
        "callee": {
          "type": "Identifier",
          "start": 273,
          "end": 274,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 275,
            "end": 277,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 291,
      "end": 300,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 299,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 299,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 298,
                "end": 299,
                "typeName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "decorators": [],
                  "name": "E",
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
      "type": "ExpressionStatement",
      "start": 301,
      "end": 307,
      "expression": {
        "type": "CallExpression",
        "start": 301,
        "end": 306,
        "callee": {
          "type": "Identifier",
          "start": 301,
          "end": 302,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 303,
            "end": 305,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
