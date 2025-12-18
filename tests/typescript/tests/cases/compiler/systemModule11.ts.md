__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "init": null,
            "definite": false,
            "start": 94,
            "end": 95
          }
        ],
        "declare": false,
        "start": 90,
        "end": 96
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 83,
      "end": 96
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 116
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 119,
          "end": 121
        },
        "expression": false,
        "start": 104,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 97,
      "end": 121
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "bar",
        "raw": "'bar'",
        "start": 136,
        "end": 141
      },
      "attributes": [],
      "exportKind": "value",
      "start": 122,
      "end": 142
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 83,
  "end": 143
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 83,
    "end": 89,
    "range": [
      83,
      89
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93,
    "range": [
      90,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 97,
    "end": 103,
    "range": [
      97,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 104,
    "end": 112,
    "range": [
      104,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 113,
    "end": 116,
    "range": [
      113,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 122,
    "end": 128,
    "range": [
      122,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 131,
    "end": 135,
    "range": [
      131,
      135
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 136,
    "end": 141,
    "range": [
      136,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
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
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 5
        }
      ],
      "declare": false,
      "start": 0,
      "end": 6
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 11,
          "end": 12
        }
      ],
      "declare": false,
      "start": 7,
      "end": 13
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 23
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 23
          },
          "exportKind": "value",
          "start": 22,
          "end": 23
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 14,
      "end": 25
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 41
          },
          "exportKind": "value",
          "start": 34,
          "end": 41
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 26,
      "end": 42
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "bar",
        "raw": "'bar'",
        "start": 58,
        "end": 63
      },
      "attributes": [],
      "exportKind": "value",
      "start": 44,
      "end": 64
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5,
    "end": 6,
    "range": [
      5,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7,
    "end": 10,
    "range": [
      7,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 14,
    "end": 20,
    "range": [
      14,
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
    "value": "x",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 36,
    "end": 38,
    "range": [
      36,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 39,
    "end": 41,
    "range": [
      39,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 44,
    "end": 50,
    "range": [
      44,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 53,
    "end": 57,
    "range": [
      53,
      57
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 58,
    "end": 63,
    "range": [
      58,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "exportKind": "value",
          "start": 8,
          "end": 9
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 12
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "exportKind": "value",
          "start": 11,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "a",
        "raw": "'a'",
        "start": 24,
        "end": 27
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 28
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 56
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 59,
          "end": 61
        },
        "expression": false,
        "start": 44,
        "end": 61
      },
      "exportKind": "value",
      "start": 29,
      "end": 61
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "bar",
        "raw": "'bar'",
        "start": 76,
        "end": 81
      },
      "attributes": [],
      "exportKind": "value",
      "start": 62,
      "end": 82
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 83
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
    "value": "x",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 13,
    "end": 15,
    "range": [
      13,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 19,
    "end": 23,
    "range": [
      19,
      23
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 24,
    "end": 27,
    "range": [
      24,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 29,
    "end": 35,
    "range": [
      29,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 36,
    "end": 43,
    "range": [
      36,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 44,
    "end": 52,
    "range": [
      44,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 53,
    "end": 56,
    "range": [
      53,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 62,
    "end": 68,
    "range": [
      62,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 71,
    "end": 75,
    "range": [
      71,
      75
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 76,
    "end": 81,
    "range": [
      76,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
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
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 12
          }
        ],
        "declare": false,
        "start": 7,
        "end": 13
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 13
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 33
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 36,
          "end": 38
        },
        "expression": false,
        "start": 21,
        "end": 38
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 14,
      "end": 38
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": null,
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 65,
          "end": 67
        },
        "expression": false,
        "start": 54,
        "end": 67
      },
      "exportKind": "value",
      "start": 39,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 74
          },
          "init": null,
          "definite": false,
          "start": 73,
          "end": 74
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 78
          },
          "init": null,
          "definite": false,
          "start": 76,
          "end": 78
        }
      ],
      "declare": false,
      "start": 69,
      "end": 79
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "exportKind": "value",
          "start": 88,
          "end": 89
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 93
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 99
          },
          "exportKind": "value",
          "start": 91,
          "end": 99
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 80,
      "end": 101
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "exportKind": "value",
          "start": 111,
          "end": 112
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 116
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 122
          },
          "exportKind": "value",
          "start": 114,
          "end": 122
        }
      ],
      "source": {
        "type": "Literal",
        "value": "a",
        "raw": "'a'",
        "start": 129,
        "end": 132
      },
      "exportKind": "value",
      "attributes": [],
      "start": 103,
      "end": 132
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 133
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
    "value": "var",
    "start": 7,
    "end": 10,
    "range": [
      7,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 14,
    "end": 20,
    "range": [
      14,
      20
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 21,
    "end": 29,
    "range": [
      21,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 30,
    "end": 33,
    "range": [
      30,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 39,
    "end": 45,
    "range": [
      39,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 46,
    "end": 53,
    "range": [
      46,
      53
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 54,
    "end": 62,
    "range": [
      54,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 69,
    "end": 72,
    "range": [
      69,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 76,
    "end": 78,
    "range": [
      76,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 80,
    "end": 86,
    "range": [
      80,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 94,
    "end": 96,
    "range": [
      94,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 97,
    "end": 99,
    "range": [
      97,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109,
    "range": [
      103,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 114,
    "end": 116,
    "range": [
      114,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 117,
    "end": 119,
    "range": [
      117,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 120,
    "end": 122,
    "range": [
      120,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 124,
    "end": 128,
    "range": [
      124,
      128
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 129,
    "end": 132,
    "range": [
      129,
      132
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 15,
        "end": 17
      },
      "expression": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "a",
        "raw": "'a'",
        "start": 32,
        "end": 35
      },
      "attributes": [],
      "exportKind": "value",
      "start": 18,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12,
    "range": [
      9,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
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
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24,
    "range": [
      18,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 27,
    "end": 31,
    "range": [
      27,
      31
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 32,
    "end": 35,
    "range": [
      32,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  }
]
```
