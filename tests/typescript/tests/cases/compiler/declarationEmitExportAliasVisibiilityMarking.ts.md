__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Suit",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 12,
        "end": 54,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 12,
            "end": 20,
            "literal": {
              "type": "Literal",
              "start": 12,
              "end": 20,
              "value": "Hearts",
              "raw": "'Hearts'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 23,
            "end": 31,
            "literal": {
              "type": "Literal",
              "start": 23,
              "end": 31,
              "value": "Spades",
              "raw": "'Spades'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 34,
            "end": 41,
            "literal": {
              "type": "Literal",
              "start": 34,
              "end": 41,
              "value": "Clubs",
              "raw": "'Clubs'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 44,
            "end": 54,
            "literal": {
              "type": "Literal",
              "start": 44,
              "end": 54,
              "value": "Diamonds",
              "raw": "'Diamonds'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 56,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 65,
        "decorators": [],
        "name": "Rank",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 68,
        "end": 138,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 68,
            "end": 69,
            "literal": {
              "type": "Literal",
              "start": 68,
              "end": 69,
              "value": 0,
              "raw": "0"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 72,
            "end": 73,
            "literal": {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "value": 1,
              "raw": "1"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 76,
            "end": 77,
            "literal": {
              "type": "Literal",
              "start": 76,
              "end": 77,
              "value": 2,
              "raw": "2"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 80,
            "end": 81,
            "literal": {
              "type": "Literal",
              "start": 80,
              "end": 81,
              "value": 3,
              "raw": "3"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 84,
            "end": 85,
            "literal": {
              "type": "Literal",
              "start": 84,
              "end": 85,
              "value": 4,
              "raw": "4"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 88,
            "end": 89,
            "literal": {
              "type": "Literal",
              "start": 88,
              "end": 89,
              "value": 5,
              "raw": "5"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 92,
            "end": 93,
            "literal": {
              "type": "Literal",
              "start": 92,
              "end": 93,
              "value": 6,
              "raw": "6"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 96,
            "end": 97,
            "literal": {
              "type": "Literal",
              "start": 96,
              "end": 97,
              "value": 7,
              "raw": "7"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 100,
            "end": 101,
            "literal": {
              "type": "Literal",
              "start": 100,
              "end": 101,
              "value": 8,
              "raw": "8"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 104,
            "end": 105,
            "literal": {
              "type": "Literal",
              "start": 104,
              "end": 105,
              "value": 9,
              "raw": "9"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 108,
            "end": 110,
            "literal": {
              "type": "Literal",
              "start": 108,
              "end": 110,
              "value": 10,
              "raw": "10"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 113,
            "end": 119,
            "literal": {
              "type": "Literal",
              "start": 113,
              "end": 119,
              "value": "Jack",
              "raw": "'Jack'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 122,
            "end": 129,
            "literal": {
              "type": "Literal",
              "start": 122,
              "end": 129,
              "value": "Queen",
              "raw": "'Queen'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 132,
            "end": 138,
            "literal": {
              "type": "Literal",
              "start": 132,
              "end": 138,
              "value": "King",
              "raw": "'King'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 140,
      "end": 162,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 149,
          "end": 153,
          "local": {
            "type": "Identifier",
            "start": 149,
            "end": 153,
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 149,
            "end": 153,
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 155,
          "end": 159,
          "local": {
            "type": "Identifier",
            "start": 155,
            "end": 159,
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 155,
            "end": 159,
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 15,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 36,
        "value": "./Types",
        "raw": "'./Types'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 38,
      "end": 96,
      "declaration": {
        "type": "ArrowFunctionExpression",
        "start": 53,
        "end": 95,
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 54,
            "end": 64,
            "decorators": [],
            "name": "suit",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 60,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "decorators": [],
                  "name": "Suit",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 66,
            "end": 76,
            "decorators": [],
            "name": "rank",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 76,
                  "decorators": [],
                  "name": "Rank",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "ObjectExpression",
          "start": 82,
          "end": 94,
          "properties": [
            {
              "type": "Property",
              "start": 83,
              "end": 87,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "decorators": [],
                "name": "suit",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "decorators": [],
                "name": "suit",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 89,
              "end": 93,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 89,
                "end": 93,
                "decorators": [],
                "name": "rank",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 89,
                "end": 93,
                "decorators": [],
                "name": "rank",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        },
        "id": null,
        "generator": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 66,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 66,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 65,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 19,
              "decorators": [],
              "name": "lazyCard",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 22,
              "end": 65,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "start": 28,
                "end": 65,
                "callee": {
                  "type": "MemberExpression",
                  "start": 28,
                  "end": 49,
                  "object": {
                    "type": "ImportExpression",
                    "start": 28,
                    "end": 44,
                    "source": {
                      "type": "Literal",
                      "start": 35,
                      "end": 43,
                      "value": "./Card",
                      "raw": "'./Card'"
                    },
                    "options": null,
                    "phase": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 49,
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 50,
                    "end": 64,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 55,
                      "end": 64,
                      "object": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 64,
                        "decorators": [],
                        "name": "default",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 104,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 76,
          "end": 80,
          "local": {
            "type": "Identifier",
            "start": 76,
            "end": 80,
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 76,
            "end": 80,
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 82,
          "end": 86,
          "local": {
            "type": "Identifier",
            "start": 82,
            "end": 86,
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 82,
            "end": 86,
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 94,
        "end": 103,
        "value": "./Types",
        "raw": "'./Types'"
      },
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
