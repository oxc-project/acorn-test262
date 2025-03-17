__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 327,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 62,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "decorators": [],
        "name": "isString1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 36,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 36,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 30,
              "end": 36
            }
          }
        },
        {
          "type": "Identifier",
          "start": 38,
          "end": 47,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 47,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 47,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 47,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 48,
        "end": 61,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 50,
          "end": 61,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 61,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 55,
              "end": 61
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 64,
      "end": 115,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 90,
        "decorators": [],
        "name": "isString2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 91,
          "end": 100,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 100,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 100,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 100,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 101,
        "end": 114,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 103,
          "end": 114,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 108,
            "end": 114,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 108,
              "end": 114
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "SwitchStatement",
      "start": 117,
      "end": 183,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 149,
          "end": 168,
          "consequent": [],
          "test": {
            "type": "CallExpression",
            "start": 154,
            "end": 167,
            "arguments": [
              {
                "type": "Literal",
                "start": 164,
                "end": 166,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 154,
              "end": 163,
              "decorators": [],
              "name": "isString2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "SwitchCase",
          "start": 173,
          "end": 181,
          "consequent": [],
          "test": null
        }
      ],
      "discriminant": {
        "type": "CallExpression",
        "start": 125,
        "end": 141,
        "arguments": [
          {
            "type": "Literal",
            "start": 135,
            "end": 136,
            "raw": "0",
            "value": 0
          },
          {
            "type": "Literal",
            "start": 138,
            "end": 140,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 125,
          "end": 134,
          "decorators": [],
          "name": "isString1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 193,
            "end": 227,
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "start": 193,
              "end": 209,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 203,
                  "end": 204,
                  "raw": "0",
                  "value": 0
                },
                {
                  "type": "Literal",
                  "start": 206,
                  "end": 208,
                  "raw": "\"\"",
                  "value": ""
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 193,
                "end": 202,
                "decorators": [],
                "name": "isString1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "right": {
              "type": "CallExpression",
              "start": 214,
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
                "start": 214,
                "end": 223,
                "decorators": [],
                "name": "isString2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 230,
      "end": 326,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 295,
        "end": 326,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 301,
            "end": 324,
            "argument": {
              "type": "CallExpression",
              "start": 308,
              "end": 323,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 318,
                  "end": 319,
                  "raw": "0",
                  "value": 0
                },
                {
                  "type": "Identifier",
                  "start": 321,
                  "end": 322,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 308,
                "end": 317,
                "decorators": [],
                "name": "isString1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 248,
        "decorators": [],
        "name": "isString3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 249,
          "end": 258,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 250,
            "end": 258,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 252,
              "end": 258
            }
          }
        },
        {
          "type": "Identifier",
          "start": 260,
          "end": 269,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 269,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 263,
              "end": 269
            }
          }
        },
        {
          "type": "Identifier",
          "start": 271,
          "end": 280,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 272,
            "end": 280,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 274,
              "end": 280,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 274,
                "end": 280,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 281,
        "end": 294,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 283,
          "end": 294,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 288,
            "end": 294,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 288,
              "end": 294
            }
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
