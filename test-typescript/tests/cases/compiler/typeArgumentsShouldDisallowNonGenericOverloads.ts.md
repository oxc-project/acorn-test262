__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 336,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 32,
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
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 16,
              "end": 22
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
        "start": 23,
        "end": 31,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 25,
          "end": 31
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "name": "foo",
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
          "start": 49,
          "end": 53,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 53,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 52,
              "end": 53,
              "typeName": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 54,
        "end": 62,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 56,
          "end": 62
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 64,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "name": "foo",
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
          "start": 77,
          "end": 83,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 83,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 80,
              "end": 83
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 110,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 96,
            "end": 108,
            "argument": {
              "type": "Literal",
              "start": 103,
              "end": 107,
              "value": "hi",
              "raw": "\"hi\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 84,
        "end": 89,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 86,
          "end": 89
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 145,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 125,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 119,
                "end": 125
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 128,
            "end": 145,
            "callee": {
              "type": "Identifier",
              "start": 128,
              "end": 131,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 140,
                "end": 144,
                "value": "hi",
                "raw": "\"hi\""
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 131,
              "end": 139,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 132,
                  "end": 138
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 206,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 194,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 194,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 188,
                "end": 194
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 197,
            "end": 206,
            "callee": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 201,
                "end": 205,
                "value": "hi",
                "raw": "\"hi\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 243,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 256,
            "name": "w",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 256,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 259,
            "end": 276,
            "callee": {
              "type": "Identifier",
              "start": 259,
              "end": 262,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 271,
                "end": 275,
                "value": "hi",
                "raw": "\"hi\""
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 262,
              "end": 270,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 263,
                  "end": 269
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 319,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 307,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 307,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 301,
                "end": 307
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 310,
            "end": 319,
            "callee": {
              "type": "Identifier",
              "start": 310,
              "end": 313,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 314,
                "end": 318,
                "value": "hi",
                "raw": "\"hi\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
