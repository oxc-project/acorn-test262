stringLiteralTypesInUnionTypes04.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "T",
        "optional": false
      },
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
              "raw": "\"\"",
              "value": ""
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
              "raw": "\"foo\"",
              "value": "foo"
            }
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 30,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 33,
            "end": 42,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 52,
            "decorators": [],
            "name": "y",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 55,
            "end": 64,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 67,
      "end": 99,
      "alternate": null,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 71,
        "end": 79,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 71,
          "end": 72,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 77,
          "end": 79,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 101,
      "end": 133,
      "alternate": null,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 105,
        "end": 113,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 111,
          "end": 113,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 135,
      "end": 166,
      "alternate": null,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 139,
        "end": 146,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 139,
          "end": 140,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 144,
          "end": 146,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 168,
      "end": 199,
      "alternate": null,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 172,
        "end": 179,
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "start": 172,
          "end": 173,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 177,
          "end": 179,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 201,
      "end": 226,
      "alternate": null,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "decorators": [],
                  "name": "e",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 228,
      "end": 254,
      "alternate": null,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 232,
        "end": 234,
        "argument": {
          "type": "Identifier",
          "start": 233,
          "end": 234,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 256,
      "end": 283,
      "alternate": null,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 276,
                  "decorators": [],
                  "name": "g",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 280,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 260,
        "end": 263,
        "argument": {
          "type": "UnaryExpression",
          "start": 261,
          "end": 263,
          "argument": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "operator": "!",
          "prefix": true
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 285,
      "end": 313,
      "alternate": null,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 306,
                  "decorators": [],
                  "name": "h",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 289,
        "end": 293,
        "argument": {
          "type": "UnaryExpression",
          "start": 290,
          "end": 293,
          "argument": {
            "type": "UnaryExpression",
            "start": 291,
            "end": 293,
            "argument": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "operator": "!",
            "prefix": true
          },
          "operator": "!",
          "prefix": true
        },
        "operator": "!",
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
}
```
