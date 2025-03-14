hidingConstructSignatures.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 40,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 38,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
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
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 112,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 112,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 70,
            "end": 94,
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
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 62,
          "end": 63,
          "expression": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 114,
      "end": 154,
      "body": {
        "type": "TSInterfaceBody",
        "start": 126,
        "end": 154,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 132,
            "end": 152,
            "params": [
              {
                "type": "Identifier",
                "start": 137,
                "end": 146,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 138,
                  "end": 146,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 140,
                    "end": 146
                  }
                }
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
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 125,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 156,
      "end": 210,
      "body": {
        "type": "TSInterfaceBody",
        "start": 178,
        "end": 210,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 184,
            "end": 208,
            "params": [
              {
                "type": "Identifier",
                "start": 189,
                "end": 198,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 190,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 192,
                    "end": 198
                  }
                }
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
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 176,
          "end": 177,
          "expression": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "decorators": [],
            "name": "E",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "decorators": [],
        "name": "F",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 220,
            "decorators": [],
            "name": "d",
            "optional": false,
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
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 228,
      "expression": {
        "type": "CallExpression",
        "start": 222,
        "end": 227,
        "arguments": [
          {
            "type": "Literal",
            "start": 224,
            "end": 226,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 222,
          "end": 223,
          "decorators": [],
          "name": "d",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 249,
      "expression": {
        "type": "NewExpression",
        "start": 239,
        "end": 248,
        "arguments": [
          {
            "type": "Literal",
            "start": 245,
            "end": 247,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 243,
          "end": 244,
          "decorators": [],
          "name": "d",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 279,
            "decorators": [],
            "name": "f",
            "optional": false,
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
                  "decorators": [],
                  "name": "F",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 281,
      "end": 291,
      "expression": {
        "type": "NewExpression",
        "start": 281,
        "end": 290,
        "arguments": [
          {
            "type": "Literal",
            "start": 287,
            "end": 289,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 311,
            "decorators": [],
            "name": "e",
            "optional": false,
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
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 313,
      "end": 323,
      "expression": {
        "type": "NewExpression",
        "start": 313,
        "end": 322,
        "arguments": [
          {
            "type": "Literal",
            "start": 319,
            "end": 321,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 317,
          "end": 318,
          "decorators": [],
          "name": "e",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
