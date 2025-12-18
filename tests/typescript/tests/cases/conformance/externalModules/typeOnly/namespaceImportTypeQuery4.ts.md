__ESTREE_TEST__:AST:
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "importKind": "value",
          "start": 14,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./z",
        "raw": "'./z'",
        "start": 23,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 29
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 53,
          "end": 54
        },
        "start": 53,
        "end": 54
      },
      "declare": false,
      "start": 44,
      "end": 55
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "exportKind": "value",
          "start": 65,
          "end": 66
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 56,
      "end": 69
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 84
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 85,
          "end": 87
        },
        "abstract": false,
        "declare": false,
        "start": 77,
        "end": 87
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 70,
      "end": 87
    },
    {
      "type": "EmptyStatement",
      "start": 87,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22,
    "range": [
      18,
      22
    ]
  },
  {
    "type": "String",
    "value": "'./z'",
    "start": 23,
    "end": 28,
    "range": [
      23,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 44,
    "end": 48,
    "range": [
      44,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 56,
    "end": 62,
    "range": [
      56,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 70,
    "end": 76,
    "range": [
      70,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 77,
    "end": 82,
    "range": [
      77,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 23,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "types",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 49
                },
                "typeArguments": null,
                "start": 37,
                "end": 49
              },
              "start": 35,
              "end": 49
            },
            "start": 34,
            "end": 49
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 68
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 72,
                    "end": 75
                  },
                  "start": 59,
                  "end": 75
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 56,
                "end": 75
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 100
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 104,
                    "end": 107
                  },
                  "start": 91,
                  "end": 107
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 88,
                "end": 107
              }
            ],
            "start": 52,
            "end": 110
          },
          "definite": false,
          "start": 34,
          "end": 110
        }
      ],
      "declare": false,
      "start": 30,
      "end": 110
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 12,
    "end": 17,
    "range": [
      12,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22,
    "range": [
      18,
      22
    ]
  },
  {
    "type": "String",
    "value": "'./a'",
    "start": 23,
    "end": 28,
    "range": [
      23,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 30,
    "end": 33,
    "range": [
      30,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 44,
    "end": 49,
    "range": [
      44,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 59,
    "end": 68,
    "range": [
      59,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 69,
    "end": 71,
    "range": [
      69,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 72,
    "end": 75,
    "range": [
      72,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 91,
    "end": 100,
    "range": [
      91,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 101,
    "end": 103,
    "range": [
      101,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 104,
    "end": 107,
    "range": [
      104,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  }
]
```
