__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyConstEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 29
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 39
              },
              "initializer": null,
              "computed": false,
              "start": 36,
              "end": 39
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 48
              },
              "initializer": null,
              "computed": false,
              "start": 45,
              "end": 48
            }
          ],
          "start": 30,
          "end": 50
        },
        "const": true,
        "declare": false,
        "start": 7,
        "end": 50
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 50
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
    "value": "const",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 13,
    "end": 17,
    "range": [
      13,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "MyConstEnum",
    "start": 18,
    "end": 29,
    "range": [
      18,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 45,
    "end": 48,
    "range": [
      45,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ConstEnum",
        "raw": "'./ConstEnum'",
        "start": 28,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 42
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyConstEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 69
      },
      "exportKind": "value",
      "start": 43,
      "end": 70
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 70
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
    "value": "MyConstEnum",
    "start": 9,
    "end": 20,
    "range": [
      9,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27,
    "range": [
      23,
      27
    ]
  },
  {
    "type": "String",
    "value": "'./ConstEnum'",
    "start": 28,
    "end": 41,
    "range": [
      28,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "MyConstEnum",
    "start": 58,
    "end": 69,
    "range": [
      58,
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
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 31
          },
          "exportKind": "value",
          "start": 9,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ConstEnum",
        "raw": "'./ConstEnum'",
        "start": 39,
        "end": 52
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
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
    "value": "MyConstEnum",
    "start": 9,
    "end": 20,
    "range": [
      9,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 21,
    "end": 23,
    "range": [
      21,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 24,
    "end": 31,
    "range": [
      24,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 34,
    "end": 38,
    "range": [
      34,
      38
    ]
  },
  {
    "type": "String",
    "value": "'./ConstEnum'",
    "start": 39,
    "end": 52,
    "range": [
      39,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 19
          },
          "importKind": "value",
          "start": 8,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ConstEnum",
        "raw": "\"./ConstEnum\"",
        "start": 26,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "AlsoEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 56
          },
          "start": 48,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ImportExport",
        "raw": "\"./ImportExport\"",
        "start": 62,
        "end": 78
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 41,
      "end": 79
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StillEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 96
          },
          "start": 87,
          "end": 96
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ReExport",
        "raw": "\"./ReExport\"",
        "start": 102,
        "end": 114
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 80,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyConstEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 128
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 132
        },
        "optional": false,
        "computed": false,
        "start": 117,
        "end": 132
      },
      "directive": null,
      "start": 117,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "AlsoEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 142
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 146
        },
        "optional": false,
        "computed": false,
        "start": 134,
        "end": 146
      },
      "directive": null,
      "start": 134,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "StillEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 157
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 161
        },
        "optional": false,
        "computed": false,
        "start": 148,
        "end": 161
      },
      "directive": null,
      "start": 148,
      "end": 162
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 162
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
    "value": "MyConstEnum",
    "start": 8,
    "end": 19,
    "range": [
      8,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25,
    "range": [
      21,
      25
    ]
  },
  {
    "type": "String",
    "value": "\"./ConstEnum\"",
    "start": 26,
    "end": 39,
    "range": [
      26,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 41,
    "end": 47,
    "range": [
      41,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "AlsoEnum",
    "start": 48,
    "end": 56,
    "range": [
      48,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 57,
    "end": 61,
    "range": [
      57,
      61
    ]
  },
  {
    "type": "String",
    "value": "\"./ImportExport\"",
    "start": 62,
    "end": 78,
    "range": [
      62,
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
    "value": "import",
    "start": 80,
    "end": 86,
    "range": [
      80,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "StillEnum",
    "start": 87,
    "end": 96,
    "range": [
      87,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 97,
    "end": 101,
    "range": [
      97,
      101
    ]
  },
  {
    "type": "String",
    "value": "\"./ReExport\"",
    "start": 102,
    "end": 114,
    "range": [
      102,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "MyConstEnum",
    "start": 117,
    "end": 128,
    "range": [
      117,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 129,
    "end": 132,
    "range": [
      129,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "AlsoEnum",
    "start": 134,
    "end": 142,
    "range": [
      134,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 143,
    "end": 146,
    "range": [
      143,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "StillEnum",
    "start": 148,
    "end": 157,
    "range": [
      148,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 158,
    "end": 161,
    "range": [
      158,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  }
]
```
