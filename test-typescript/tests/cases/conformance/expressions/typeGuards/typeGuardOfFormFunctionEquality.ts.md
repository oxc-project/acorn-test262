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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "name": "isString1",
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
          "start": 27,
          "end": 36,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 36,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 30,
              "end": 36
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 38,
          "end": 47,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 47,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 47,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 47,
                "name": "Object",
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
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 48,
        "end": 61,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 50,
          "end": 61,
          "parameterName": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 64,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 90,
        "name": "isString2",
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
          "start": 91,
          "end": 100,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 100,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 100,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 100,
                "name": "Object",
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
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 101,
        "end": 114,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 103,
          "end": 114,
          "parameterName": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
      }
    },
    {
      "type": "SwitchStatement",
      "start": 117,
      "end": 183,
      "discriminant": {
        "type": "CallExpression",
        "start": 125,
        "end": 141,
        "callee": {
          "type": "Identifier",
          "start": 125,
          "end": 134,
          "name": "isString1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 135,
            "end": 136,
            "value": 0,
            "raw": "0"
          },
          {
            "type": "Literal",
            "start": 138,
            "end": 140,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
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
            "callee": {
              "type": "Identifier",
              "start": 154,
              "end": 163,
              "name": "isString2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 164,
                "end": 166,
                "value": "",
                "raw": "\"\""
              }
            ],
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
      ]
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
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 193,
            "end": 227,
            "left": {
              "type": "CallExpression",
              "start": 193,
              "end": 209,
              "callee": {
                "type": "Identifier",
                "start": 193,
                "end": 202,
                "name": "isString1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 203,
                  "end": 204,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 206,
                  "end": 208,
                  "value": "",
                  "raw": "\"\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "operator": "===",
            "right": {
              "type": "CallExpression",
              "start": 214,
              "end": 227,
              "callee": {
                "type": "Identifier",
                "start": 214,
                "end": 223,
                "name": "isString2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 224,
                  "end": 226,
                  "value": "",
                  "raw": "\"\""
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 230,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 248,
        "name": "isString3",
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
          "start": 249,
          "end": 258,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 250,
            "end": 258,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 252,
              "end": 258
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 260,
          "end": 269,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 269,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 263,
              "end": 269
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 271,
          "end": 280,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 272,
            "end": 280,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 274,
              "end": 280,
              "typeName": {
                "type": "Identifier",
                "start": 274,
                "end": 280,
                "name": "Object",
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
              "callee": {
                "type": "Identifier",
                "start": 308,
                "end": 317,
                "name": "isString1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 318,
                  "end": 319,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Identifier",
                  "start": 321,
                  "end": 322,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 281,
        "end": 294,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 283,
          "end": 294,
          "parameterName": {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
