__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Suit",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Hearts",
              "raw": "'Hearts'",
              "start": 12,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Spades",
              "raw": "'Spades'",
              "start": 23,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Clubs",
              "raw": "'Clubs'",
              "start": 34,
              "end": 41
            },
            "start": 34,
            "end": 41
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Diamonds",
              "raw": "'Diamonds'",
              "start": 44,
              "end": 54
            },
            "start": 44,
            "end": 54
          }
        ],
        "start": 12,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rank",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 65
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 68,
              "end": 69
            },
            "start": 68,
            "end": 69
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 72,
              "end": 73
            },
            "start": 72,
            "end": 73
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 76,
              "end": 77
            },
            "start": 76,
            "end": 77
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 80,
              "end": 81
            },
            "start": 80,
            "end": 81
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 84,
              "end": 85
            },
            "start": 84,
            "end": 85
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 88,
              "end": 89
            },
            "start": 88,
            "end": 89
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 92,
              "end": 93
            },
            "start": 92,
            "end": 93
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 7,
              "raw": "7",
              "start": 96,
              "end": 97
            },
            "start": 96,
            "end": 97
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 100,
              "end": 101
            },
            "start": 100,
            "end": 101
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 9,
              "raw": "9",
              "start": 104,
              "end": 105
            },
            "start": 104,
            "end": 105
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 108,
              "end": 110
            },
            "start": 108,
            "end": 110
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Jack",
              "raw": "'Jack'",
              "start": 113,
              "end": 119
            },
            "start": 113,
            "end": 119
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "Queen",
              "raw": "'Queen'",
              "start": 122,
              "end": 129
            },
            "start": 122,
            "end": 129
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "King",
              "raw": "'King'",
              "start": 132,
              "end": 138
            },
            "start": 132,
            "end": 138
          }
        ],
        "start": 68,
        "end": 138
      },
      "declare": false,
      "start": 56,
      "end": 139
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 153
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 153
          },
          "exportKind": "value",
          "start": 149,
          "end": 153
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 159
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 159
          },
          "exportKind": "value",
          "start": 155,
          "end": 159
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 140,
      "end": 162
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 163
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 19
          },
          "importKind": "value",
          "start": 15,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Types",
        "raw": "'./Types'",
        "start": 27,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 37
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "suit",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Suit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 64
                },
                "typeArguments": null,
                "start": 60,
                "end": 64
              },
              "start": 58,
              "end": 64
            },
            "start": 54,
            "end": 64
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "rank",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rank",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 76
                },
                "typeArguments": null,
                "start": 72,
                "end": 76
              },
              "start": 70,
              "end": 76
            },
            "start": 66,
            "end": 76
          }
        ],
        "returnType": null,
        "body": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "suit",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 87
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "suit",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 87
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 83,
              "end": 87
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "rank",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 93
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "rank",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 93
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 89,
              "end": 93
            }
          ],
          "start": 82,
          "end": 94
        },
        "id": null,
        "generator": false,
        "start": 53,
        "end": 95
      },
      "exportKind": "value",
      "start": 38,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "lazyCard",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 19
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ImportExpression",
                    "source": {
                      "type": "Literal",
                      "value": "./Card",
                      "raw": "'./Card'",
                      "start": 35,
                      "end": 43
                    },
                    "options": null,
                    "phase": null,
                    "start": 28,
                    "end": 44
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 49
                  },
                  "optional": false,
                  "computed": false,
                  "start": 28,
                  "end": 49
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 51
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 55,
                        "end": 56
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "default",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 57,
                        "end": 64
                      },
                      "optional": false,
                      "computed": false,
                      "start": 55,
                      "end": 64
                    },
                    "id": null,
                    "generator": false,
                    "start": 50,
                    "end": 64
                  }
                ],
                "optional": false,
                "start": 28,
                "end": 65
              },
              "id": null,
              "generator": false,
              "start": 22,
              "end": 65
            },
            "definite": false,
            "start": 11,
            "end": 65
          }
        ],
        "declare": false,
        "start": 7,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 80
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Suit",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 80
          },
          "exportKind": "value",
          "start": 76,
          "end": 80
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 86
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rank",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 86
          },
          "exportKind": "value",
          "start": 82,
          "end": 86
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Types",
        "raw": "'./Types'",
        "start": 94,
        "end": 103
      },
      "exportKind": "value",
      "attributes": [],
      "start": 67,
      "end": 104
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
