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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other.js",
        "raw": "\"./other.js\"",
        "start": 20,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 51
          },
          "start": 41,
          "end": 51
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other.js",
        "raw": "\"./other.js\"",
        "start": 57,
        "end": 69
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 34,
      "end": 70
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 88
          },
          "start": 78,
          "end": 88
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other.js",
        "raw": "\"./other.js\"",
        "start": 94,
        "end": 106
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 71,
      "end": 107
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 116
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 126
            },
            "typeArguments": null,
            "arguments": [],
            "start": 119,
            "end": 128
          },
          "definite": false,
          "start": 115,
          "end": 128
        }
      ],
      "declare": false,
      "start": 109,
      "end": 129
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 145
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 149
              },
              "optional": false,
              "computed": false,
              "start": 140,
              "end": 149
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 140,
            "end": 151
          },
          "definite": false,
          "start": 136,
          "end": 151
        }
      ],
      "declare": false,
      "start": 130,
      "end": 152
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 177
            },
            "typeArguments": null,
            "arguments": [],
            "start": 163,
            "end": 179
          },
          "definite": false,
          "start": 159,
          "end": 179
        }
      ],
      "declare": false,
      "start": 153,
      "end": 180
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 181
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
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 9,
    "end": 12,
    "range": [
      9,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19,
    "range": [
      15,
      19
    ]
  },
  {
    "type": "String",
    "value": "\"./other.js\"",
    "start": 20,
    "end": 32,
    "range": [
      20,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 43,
    "end": 45,
    "range": [
      43,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 46,
    "end": 51,
    "range": [
      46,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 52,
    "end": 56,
    "range": [
      52,
      56
    ]
  },
  {
    "type": "String",
    "value": "\"./other.js\"",
    "start": 57,
    "end": 69,
    "range": [
      57,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 71,
    "end": 77,
    "range": [
      71,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultFoo",
    "start": 78,
    "end": 88,
    "range": [
      78,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 89,
    "end": 93,
    "range": [
      89,
      93
    ]
  },
  {
    "type": "String",
    "value": "\"./other.js\"",
    "start": 94,
    "end": 106,
    "range": [
      94,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 109,
    "end": 114,
    "range": [
      109,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 119,
    "end": 122,
    "range": [
      119,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 123,
    "end": 126,
    "range": [
      123,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 130,
    "end": 135,
    "range": [
      130,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 140,
    "end": 145,
    "range": [
      140,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 146,
    "end": 149,
    "range": [
      146,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158,
    "range": [
      153,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 163,
    "end": 166,
    "range": [
      163,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultFoo",
    "start": 167,
    "end": 177,
    "range": [
      167,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 30
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 32,
                  "end": 38
                },
                "start": 30,
                "end": 38
              },
              "accessibility": null,
              "static": false,
              "start": 27,
              "end": 39
            }
          ],
          "start": 21,
          "end": 41
        },
        "declare": false,
        "start": 7,
        "end": 41
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 41
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 71
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 81
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 83,
                  "end": 89
                },
                "start": 81,
                "end": 89
              },
              "accessibility": null,
              "static": false,
              "start": 78,
              "end": 90
            }
          ],
          "start": 72,
          "end": 92
        },
        "declare": false,
        "start": 58,
        "end": 92
      },
      "exportKind": "value",
      "start": 43,
      "end": 92
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 93
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 27,
    "end": 30,
    "range": [
      27,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 32,
    "end": 38,
    "range": [
      32,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 43,
    "end": 49,
    "range": [
      43,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 50,
    "end": 57,
    "range": [
      50,
      57
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 58,
    "end": 67,
    "range": [
      58,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 78,
    "end": 81,
    "range": [
      78,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 83,
    "end": 89,
    "range": [
      83,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 26
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 2.4,
                "raw": "2.4",
                "start": 29,
                "end": 32
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 23,
              "end": 33
            }
          ],
          "start": 17,
          "end": 35
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 35
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 61
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 71
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1.2,
                "raw": "1.2",
                "start": 74,
                "end": 77
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 68,
              "end": 78
            }
          ],
          "start": 62,
          "end": 80
        },
        "abstract": false,
        "declare": false,
        "start": 52,
        "end": 80
      },
      "exportKind": "value",
      "start": 37,
      "end": 80
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 13,
    "end": 16,
    "range": [
      13,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 23,
    "end": 26,
    "range": [
      23,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Numeric",
    "value": "2.4",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 44,
    "end": 51,
    "range": [
      44,
      51
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 52,
    "end": 57,
    "range": [
      52,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 58,
    "end": 61,
    "range": [
      58,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Numeric",
    "value": "1.2",
    "start": 74,
    "end": 77,
    "range": [
      74,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  }
]
```
