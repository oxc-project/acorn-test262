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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Suit",
        "optional": false,
        "typeAnnotation": null
      },
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
              "raw": "'Hearts'",
              "value": "Hearts"
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
              "raw": "'Spades'",
              "value": "Spades"
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
              "raw": "'Clubs'",
              "value": "Clubs"
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
              "raw": "'Diamonds'",
              "value": "Diamonds"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 56,
      "end": 139,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 65,
        "decorators": [],
        "name": "Rank",
        "optional": false,
        "typeAnnotation": null
      },
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
              "raw": "0",
              "value": 0
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
              "raw": "1",
              "value": 1
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
              "raw": "2",
              "value": 2
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
              "raw": "3",
              "value": 3
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
              "raw": "4",
              "value": 4
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
              "raw": "5",
              "value": 5
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
              "raw": "6",
              "value": 6
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
              "raw": "7",
              "value": 7
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
              "raw": "8",
              "value": 8
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
              "raw": "9",
              "value": 9
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
              "raw": "10",
              "value": 10
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
              "raw": "'Jack'",
              "value": "Jack"
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
              "raw": "'Queen'",
              "value": "Queen"
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
              "raw": "'King'",
              "value": "King"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 140,
      "end": 162,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 149,
          "end": 153,
          "exported": {
            "type": "Identifier",
            "start": 149,
            "end": 153,
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 149,
            "end": 153,
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 155,
          "end": 159,
          "exported": {
            "type": "Identifier",
            "start": 155,
            "end": 159,
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 155,
            "end": 159,
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 36,
        "raw": "'./Types'",
        "value": "./Types"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null
          }
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 38,
      "end": 96,
      "declaration": {
        "type": "ArrowFunctionExpression",
        "start": 53,
        "end": 95,
        "async": false,
        "body": {
          "type": "ObjectExpression",
          "start": 82,
          "end": 94,
          "properties": [
            {
              "type": "Property",
              "start": 83,
              "end": 87,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "decorators": [],
                "name": "suit",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "decorators": [],
                "name": "suit",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 89,
              "end": 93,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 89,
                "end": 93,
                "decorators": [],
                "name": "rank",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 89,
                "end": 93,
                "decorators": [],
                "name": "rank",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": true,
        "generator": false,
        "id": null,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "decorators": [],
                  "name": "Suit",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 76,
                  "decorators": [],
                  "name": "Rank",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
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
  "end": 105,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 66,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 66,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 65,
            "definite": false,
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
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 28,
                "end": 65,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 50,
                    "end": 64,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 55,
                      "end": 64,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 64,
                        "decorators": [],
                        "name": "default",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
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
                    "typeParameters": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 28,
                  "end": 49,
                  "computed": false,
                  "object": {
                    "type": "ImportExpression",
                    "start": 28,
                    "end": 44,
                    "options": null,
                    "source": {
                      "type": "Literal",
                      "start": 35,
                      "end": 43,
                      "raw": "'./Card'",
                      "value": "./Card"
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 49,
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 104,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 94,
        "end": 103,
        "raw": "'./Types'",
        "value": "./Types"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 76,
          "end": 80,
          "exported": {
            "type": "Identifier",
            "start": 76,
            "end": 80,
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 76,
            "end": 80,
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 82,
          "end": 86,
          "exported": {
            "type": "Identifier",
            "start": 82,
            "end": 86,
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 82,
            "end": 86,
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
