__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 329,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 40,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 38,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 31,
                "end": 37
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 62,
          "end": 63,
          "expression": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 112,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 70,
            "end": 94,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 75,
                "end": 84,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 76,
                  "end": 84,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 78,
                    "end": 84
                  }
                },
                "decorators": [],
                "optional": false
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
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 125,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 126,
        "end": 154,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 132,
            "end": 152,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 137,
                "end": 146,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 138,
                  "end": 146,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 140,
                    "end": 146
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 149,
                "end": 151,
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
      "start": 156,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 176,
          "end": 177,
          "expression": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 178,
        "end": 210,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 184,
            "end": 208,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 189,
                "end": 198,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 190,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 192,
                    "end": 198
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 207,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 201,
                "end": 207
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 220,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 219,
                "end": 220,
                "typeName": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "name": "D",
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
      "type": "ExpressionStatement",
      "start": 222,
      "end": 228,
      "expression": {
        "type": "CallExpression",
        "start": 222,
        "end": 227,
        "callee": {
          "type": "Identifier",
          "start": 222,
          "end": 223,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 224,
            "end": 226,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 249,
      "expression": {
        "type": "NewExpression",
        "start": 239,
        "end": 248,
        "callee": {
          "type": "Identifier",
          "start": 243,
          "end": 244,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 245,
            "end": 247,
            "value": "",
            "raw": "\"\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 279,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 278,
                "end": 279,
                "typeName": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 279,
                  "name": "F",
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
      "type": "ExpressionStatement",
      "start": 281,
      "end": 291,
      "expression": {
        "type": "NewExpression",
        "start": 281,
        "end": 290,
        "callee": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 287,
            "end": 289,
            "value": "",
            "raw": "\"\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 311,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 311,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 310,
                "end": 311,
                "typeName": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "name": "E",
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
      "type": "ExpressionStatement",
      "start": 313,
      "end": 323,
      "expression": {
        "type": "NewExpression",
        "start": 313,
        "end": 322,
        "callee": {
          "type": "Identifier",
          "start": 317,
          "end": 318,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 319,
            "end": 321,
            "value": "",
            "raw": "\"\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
