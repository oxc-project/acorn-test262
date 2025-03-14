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
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 16,
              "end": 22
            }
          }
        }
      ],
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
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 49,
          "end": 53,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 54,
        "end": 62,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 56,
          "end": 62
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 64,
      "end": 110,
      "async": false,
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
              "raw": "\"hi\"",
              "value": "hi"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 77,
          "end": 83,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 83,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 80,
              "end": 83
            }
          }
        }
      ],
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 125,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 119,
                "end": 125
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 128,
            "end": 145,
            "arguments": [
              {
                "type": "Literal",
                "start": 140,
                "end": 144,
                "raw": "\"hi\"",
                "value": "hi"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 128,
              "end": 131,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 194,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 194,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 188,
                "end": 194
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 197,
            "end": 206,
            "arguments": [
              {
                "type": "Literal",
                "start": 201,
                "end": 205,
                "raw": "\"hi\"",
                "value": "hi"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 256,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 256,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 259,
            "end": 276,
            "arguments": [
              {
                "type": "Literal",
                "start": 271,
                "end": 275,
                "raw": "\"hi\"",
                "value": "hi"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 259,
              "end": 262,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 307,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 307,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 301,
                "end": 307
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 310,
            "end": 319,
            "arguments": [
              {
                "type": "Literal",
                "start": 314,
                "end": 318,
                "raw": "\"hi\"",
                "value": "hi"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 310,
              "end": 313,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
