__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 420,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 49,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 35,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 34,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 32,
                  "end": 34,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 40,
            "end": 47,
            "expression": {
              "type": "TSAsExpression",
              "start": 40,
              "end": 46,
              "expression": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 45,
                "end": 46,
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 116,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 91,
            "end": 102,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 95,
                "end": 101,
                "id": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 99,
                  "end": 101,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 107,
            "end": 114,
            "expression": {
              "type": "TSAsExpression",
              "start": 107,
              "end": 113,
              "expression": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 112,
                "end": 113,
                "typeName": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 82,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 81,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnknownKeyword",
              "start": 74,
              "end": 81
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 118,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 130,
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 147,
        "end": 178,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 153,
            "end": 164,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 157,
                "end": 163,
                "id": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 161,
                  "end": 163,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 169,
            "end": 176,
            "expression": {
              "type": "TSAsExpression",
              "start": 169,
              "end": 175,
              "expression": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 130,
        "end": 144,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 131,
            "end": 143,
            "name": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 141,
              "end": 143,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 180,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 192,
        "name": "bat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 213,
        "end": 244,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 219,
            "end": 230,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 223,
                "end": 229,
                "id": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 227,
                  "end": 229,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 235,
            "end": 242,
            "expression": {
              "type": "TSAsExpression",
              "start": 235,
              "end": 241,
              "expression": {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 241,
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 241,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 192,
        "end": 210,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 193,
            "end": 209,
            "name": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 203,
              "end": 209
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 246,
      "end": 335,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 257,
        "name": "no",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 288,
        "end": 335,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 294,
            "end": 305,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 298,
                "end": 304,
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 302,
                  "end": 304,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 310,
            "end": 317,
            "expression": {
              "type": "TSAsExpression",
              "start": 310,
              "end": 316,
              "expression": {
                "type": "Identifier",
                "start": 310,
                "end": 311,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 315,
                "end": 316,
                "typeName": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 316,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 257,
        "end": 285,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 258,
            "end": 284,
            "name": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 268,
              "end": 284,
              "types": [
                {
                  "type": "TSNullKeyword",
                  "start": 268,
                  "end": 272
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 275,
                  "end": 284
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 337,
      "end": 420,
      "id": {
        "type": "Identifier",
        "start": 346,
        "end": 349,
        "name": "yes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 389,
        "end": 420,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 395,
            "end": 406,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 399,
                "end": 405,
                "id": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 400,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 403,
                  "end": 405,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 411,
            "end": 418,
            "expression": {
              "type": "TSAsExpression",
              "start": 411,
              "end": 417,
              "expression": {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 416,
                "end": 417,
                "typeName": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 417,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 349,
        "end": 386,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 350,
            "end": 385,
            "name": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 360,
              "end": 385,
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 360,
                  "end": 366
                },
                {
                  "type": "TSNullKeyword",
                  "start": 369,
                  "end": 373
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 376,
                  "end": 385
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
