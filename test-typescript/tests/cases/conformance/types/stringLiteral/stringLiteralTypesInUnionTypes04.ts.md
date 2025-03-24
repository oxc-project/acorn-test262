__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 313,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 19,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 9,
            "end": 11,
            "literal": {
              "type": "Literal",
              "start": 9,
              "end": 11,
              "value": "",
              "raw": "\"\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 14,
            "end": 19,
            "literal": {
              "type": "Literal",
              "start": 14,
              "end": 19,
              "value": "foo",
              "raw": "\"foo\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 30,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 30,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "name": "T",
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
            "type": "Identifier",
            "start": 33,
            "end": 42,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 52,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 51,
                "end": 52,
                "typeName": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "T",
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
            "type": "Identifier",
            "start": 55,
            "end": 64,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 67,
      "end": 99,
      "test": {
        "type": "BinaryExpression",
        "start": 71,
        "end": 79,
        "left": {
          "type": "Identifier",
          "start": 71,
          "end": 72,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 77,
          "end": 79,
          "value": "",
          "raw": "\"\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 81,
        "end": 99,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 87,
            "end": 97,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 91,
                "end": 96,
                "id": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 101,
      "end": 133,
      "test": {
        "type": "BinaryExpression",
        "start": 105,
        "end": 113,
        "left": {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 111,
          "end": 113,
          "value": "",
          "raw": "\"\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 115,
        "end": 133,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 121,
            "end": 131,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 125,
                "end": 130,
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 135,
      "end": 166,
      "test": {
        "type": "BinaryExpression",
        "start": 139,
        "end": 146,
        "left": {
          "type": "Identifier",
          "start": 139,
          "end": 140,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 144,
          "end": 146,
          "value": "",
          "raw": "\"\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 148,
        "end": 166,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 154,
            "end": 164,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 158,
                "end": 163,
                "id": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 168,
      "end": 199,
      "test": {
        "type": "BinaryExpression",
        "start": 172,
        "end": 179,
        "left": {
          "type": "Identifier",
          "start": 172,
          "end": 173,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "start": 177,
          "end": 179,
          "value": "",
          "raw": "\"\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 181,
        "end": 199,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 187,
            "end": 197,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 191,
                "end": 196,
                "id": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 201,
      "end": 226,
      "test": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 208,
        "end": 226,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 214,
            "end": 224,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 218,
                "end": 223,
                "id": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 228,
      "end": 254,
      "test": {
        "type": "UnaryExpression",
        "start": 232,
        "end": 234,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 233,
          "end": 234,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 236,
        "end": 254,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 242,
            "end": 252,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 246,
                "end": 251,
                "id": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 256,
      "end": 283,
      "test": {
        "type": "UnaryExpression",
        "start": 260,
        "end": 263,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "UnaryExpression",
          "start": 261,
          "end": 263,
          "operator": "!",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 265,
        "end": 283,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 271,
            "end": 281,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 275,
                "end": 280,
                "id": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 276,
                  "name": "g",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 280,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 285,
      "end": 313,
      "test": {
        "type": "UnaryExpression",
        "start": 289,
        "end": 293,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "UnaryExpression",
          "start": 290,
          "end": 293,
          "operator": "!",
          "prefix": true,
          "argument": {
            "type": "UnaryExpression",
            "start": 291,
            "end": 293,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 295,
        "end": 313,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 301,
            "end": 311,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 305,
                "end": 310,
                "id": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 306,
                  "name": "h",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
