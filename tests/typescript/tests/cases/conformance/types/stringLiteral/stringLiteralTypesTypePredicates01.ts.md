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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "A",
              "raw": "\"A\""
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
              "value": "B",
              "raw": "\"B\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 23,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 38,
        "decorators": [],
        "name": "kindIs",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "value": "A",
                "raw": "\"A\""
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
          "parameterName": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
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
                "value": "A",
                "raw": "\"A\""
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 89,
        "decorators": [],
        "name": "kindIs",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "value": "B",
                "raw": "\"B\""
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
          "parameterName": {
            "type": "Identifier",
            "start": 112,
            "end": 116,
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
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
                "value": "B",
                "raw": "\"B\""
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 125,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 140,
        "decorators": [],
        "name": "kindIs",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
      },
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
              "left": {
                "type": "Identifier",
                "start": 185,
                "end": 189,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 194,
                "end": 196,
                "decorators": [],
                "name": "is",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 225,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 224,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 215,
            "end": 224,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 227,
      "end": 289,
      "test": {
        "type": "CallExpression",
        "start": 231,
        "end": 245,
        "callee": {
          "type": "Identifier",
          "start": 231,
          "end": 237,
          "decorators": [],
          "name": "kindIs",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 238,
            "end": 239,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 241,
            "end": 244,
            "value": "A",
            "raw": "\"A\""
          }
        ],
        "optional": false
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 257,
                "end": 262,
                "id": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 271,
        "end": 289,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 277,
            "end": 287,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 281,
                "end": 286,
                "id": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 286,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 291,
      "end": 354,
      "test": {
        "type": "UnaryExpression",
        "start": 295,
        "end": 310,
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "start": 296,
          "end": 310,
          "callee": {
            "type": "Identifier",
            "start": 296,
            "end": 302,
            "decorators": [],
            "name": "kindIs",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Literal",
              "start": 306,
              "end": 309,
              "value": "B",
              "raw": "\"B\""
            }
          ],
          "optional": false
        },
        "prefix": true
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 322,
                "end": 327,
                "id": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 323,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 336,
        "end": 354,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 342,
            "end": 352,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 346,
                "end": 351,
                "id": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 347,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 351,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
