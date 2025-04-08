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
        "name": "Kind",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "kindIs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 49,
          "name": "kind",
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
                "name": "Kind",
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
        {
          "type": "Identifier",
          "start": 51,
          "end": 58,
          "name": "is",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
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
            "name": "kind",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 89,
        "name": "kindIs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 100,
          "name": "kind",
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
                "name": "Kind",
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
        {
          "type": "Identifier",
          "start": 102,
          "end": 109,
          "name": "is",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
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
            "name": "kind",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 125,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 140,
        "name": "kindIs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 141,
          "end": 151,
          "name": "kind",
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
                "name": "Kind",
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
        {
          "type": "Identifier",
          "start": 153,
          "end": 161,
          "name": "is",
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
                "name": "Kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 194,
                "end": 196,
                "name": "is",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 212,
            "name": "x",
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
                  "name": "Kind",
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
            "start": 215,
            "end": 224,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "kindIs",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 238,
            "end": 239,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 241,
            "end": 244,
            "value": "A",
            "raw": "\"A\""
          }
        ],
        "optional": false,
        "typeArguments": null
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
                "id": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
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
                "id": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 286,
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
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 296,
          "end": 310,
          "callee": {
            "type": "Identifier",
            "start": 296,
            "end": 302,
            "name": "kindIs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Literal",
              "start": 306,
              "end": 309,
              "value": "B",
              "raw": "\"B\""
            }
          ],
          "optional": false,
          "typeArguments": null
        }
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
                "id": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 323,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
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
                "id": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 347,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 351,
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
