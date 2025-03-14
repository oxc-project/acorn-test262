__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 354,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 21,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Kind",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 12,
        "end": 21,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 12,
            "end": 15,
            "literal": {
              "type": "Literal",
              "start": 12,
              "end": 15,
              "raw": "\"A\"",
              "value": "A"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 18,
            "end": 21,
            "literal": {
              "type": "Literal",
              "start": 18,
              "end": 21,
              "raw": "\"B\"",
              "value": "B"
            }
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 23,
      "end": 73,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 38,
        "decorators": [],
        "name": "kindIs",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 49,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 45,
              "end": 49,
              "typeName": {
                "type": "Identifier",
                "start": 45,
                "end": 49,
                "decorators": [],
                "name": "Kind",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 51,
          "end": 58,
          "decorators": [],
          "name": "is",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 58,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 55,
              "end": 58,
              "literal": {
                "type": "Literal",
                "start": 55,
                "end": 58,
                "raw": "\"A\"",
                "value": "A"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 72,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 61,
          "end": 72,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "decorators": [],
            "name": "kind",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 72,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 69,
              "end": 72,
              "literal": {
                "type": "Literal",
                "start": 69,
                "end": 72,
                "raw": "\"A\"",
                "value": "A"
              }
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 124,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 89,
        "decorators": [],
        "name": "kindIs",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 100,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 94,
            "end": 100,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 96,
              "end": 100,
              "typeName": {
                "type": "Identifier",
                "start": 96,
                "end": 100,
                "decorators": [],
                "name": "Kind",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 102,
          "end": 109,
          "decorators": [],
          "name": "is",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 109,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 106,
              "end": 109,
              "literal": {
                "type": "Literal",
                "start": 106,
                "end": 109,
                "raw": "\"B\"",
                "value": "B"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 110,
        "end": 123,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 112,
          "end": 123,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 112,
            "end": 116,
            "decorators": [],
            "name": "kind",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 120,
            "end": 123,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 120,
              "end": 123,
              "literal": {
                "type": "Literal",
                "start": 120,
                "end": 123,
                "raw": "\"B\"",
                "value": "B"
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 125,
      "end": 199,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 172,
        "end": 199,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 178,
            "end": 197,
            "argument": {
              "type": "BinaryExpression",
              "start": 185,
              "end": 196,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 185,
                "end": 189,
                "decorators": [],
                "name": "kind",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 194,
                "end": 196,
                "decorators": [],
                "name": "is",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 140,
        "decorators": [],
        "name": "kindIs",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 141,
          "end": 151,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 151,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 147,
              "end": 151,
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 151,
                "decorators": [],
                "name": "Kind",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 153,
          "end": 161,
          "decorators": [],
          "name": "is",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 155,
            "end": 161,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 157,
              "end": 161,
              "typeName": {
                "type": "Identifier",
                "start": 157,
                "end": 161,
                "decorators": [],
                "name": "Kind",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 162,
        "end": 171,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 164,
          "end": 171
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 224,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 212,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 208,
                "end": 212,
                "typeName": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 212,
                  "decorators": [],
                  "name": "Kind",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 215,
            "end": 224,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 227,
      "end": 289,
      "alternate": {
        "type": "BlockStatement",
        "start": 271,
        "end": 289,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 277,
            "end": 287,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 281,
                "end": 286,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 286,
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
      "consequent": {
        "type": "BlockStatement",
        "start": 247,
        "end": 265,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 253,
            "end": 263,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 257,
                "end": 262,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
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
        "type": "CallExpression",
        "start": 231,
        "end": 245,
        "arguments": [
          {
            "type": "Identifier",
            "start": 238,
            "end": 239,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          {
            "type": "Literal",
            "start": 241,
            "end": 244,
            "raw": "\"A\"",
            "value": "A"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 231,
          "end": 237,
          "decorators": [],
          "name": "kindIs",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 291,
      "end": 354,
      "alternate": {
        "type": "BlockStatement",
        "start": 336,
        "end": 354,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 342,
            "end": 352,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 346,
                "end": 351,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 347,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 351,
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
      "consequent": {
        "type": "BlockStatement",
        "start": 312,
        "end": 330,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 318,
            "end": 328,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 322,
                "end": 327,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 323,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
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
        "start": 295,
        "end": 310,
        "argument": {
          "type": "CallExpression",
          "start": 296,
          "end": 310,
          "arguments": [
            {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            {
              "type": "Literal",
              "start": 306,
              "end": 309,
              "raw": "\"B\"",
              "value": "B"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 296,
            "end": 302,
            "decorators": [],
            "name": "kindIs",
            "optional": false
          },
          "optional": false
        },
        "operator": "!",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
