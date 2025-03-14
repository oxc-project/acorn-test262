__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 386,
  "body": [
    {
      "type": "BlockStatement",
      "start": 55,
      "end": 71,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 57,
          "end": 69,
          "expression": {
            "type": "ObjectExpression",
            "start": 58,
            "end": 67,
            "properties": [
              {
                "type": "Property",
                "start": 59,
                "end": 66,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 59,
                  "end": 61,
                  "bigint": "1",
                  "raw": "1n",
                  "value": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 63,
                  "end": 66,
                  "raw": "123",
                  "value": 123
                }
              }
            ]
          }
        }
      ]
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 94,
            "decorators": [],
            "name": "bigNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "start": 88,
                "end": 94
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 97,
            "end": 99,
            "bigint": "0",
            "raw": "0n",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 111,
            "end": 122,
            "properties": [
              {
                "type": "Property",
                "start": 113,
                "end": 120,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 113,
                  "end": 115,
                  "bigint": "1",
                  "raw": "1n",
                  "value": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 117,
                  "end": 120,
                  "raw": "123",
                  "value": 123
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 134,
            "end": 147,
            "properties": [
              {
                "type": "Property",
                "start": 136,
                "end": 145,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 137,
                  "end": 139,
                  "bigint": "1",
                  "raw": "1n",
                  "value": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 142,
                  "end": 145,
                  "raw": "456",
                  "value": 456
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 159,
            "end": 176,
            "properties": [
              {
                "type": "Property",
                "start": 161,
                "end": 174,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 168,
                  "decorators": [],
                  "name": "bigNum",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 171,
                  "end": 174,
                  "raw": "789",
                  "value": 789
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 209,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 188,
            "decorators": [],
            "name": "arr",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 191,
            "end": 209,
            "expression": {
              "type": "ArrayExpression",
              "start": 191,
              "end": 200,
              "elements": [
                {
                  "type": "Literal",
                  "start": 192,
                  "end": 193,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 195,
                  "end": 196,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 198,
                  "end": 199,
                  "raw": "3",
                  "value": 3
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 204,
              "end": 209,
              "typeName": {
                "type": "Identifier",
                "start": 204,
                "end": 209,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 231,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 217,
            "end": 225,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 219,
                "end": 223,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 219,
                  "end": 220,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 228,
            "end": 231,
            "decorators": [],
            "name": "arr",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 255,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 239,
            "end": 249,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 241,
                "end": 247,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 241,
                  "end": 244,
                  "raw": "\"0\"",
                  "value": "0"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "decorators": [],
                  "name": "e",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 252,
            "end": 255,
            "decorators": [],
            "name": "arr",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 278,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 263,
            "end": 272,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 265,
                "end": 270,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 265,
                  "end": 267,
                  "bigint": "0",
                  "raw": "0n",
                  "value": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 275,
            "end": 278,
            "decorators": [],
            "name": "arr",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 384,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 370,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 373,
            "end": 384,
            "properties": [
              {
                "type": "Property",
                "start": 375,
                "end": 382,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 375,
                  "end": 377,
                  "bigint": "0",
                  "raw": "0n",
                  "value": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 379,
                  "end": 382,
                  "raw": "123",
                  "value": 123
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
A bigint literal must be an integer.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 22,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "Q",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 21,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 9,
            "end": 11,
            "literal": {
              "type": "Literal",
              "start": 9,
              "end": 11,
              "bigint": "6",
              "raw": "6n",
              "value": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 14,
            "end": 16,
            "literal": {
              "type": "Literal",
              "start": 14,
              "end": 16,
              "bigint": "7",
              "raw": "7n",
              "value": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 19,
            "end": 21,
            "literal": {
              "type": "Literal",
              "start": 19,
              "end": 21,
              "bigint": "8",
              "raw": "8n",
              "value": null
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 54,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "T",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 32,
        "end": 53,
        "constraint": {
          "type": "TSTypeReference",
          "start": 41,
          "end": 42,
          "typeName": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "Q",
            "optional": false
          }
        },
        "key": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "t",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 45,
          "end": 51
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
