__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "moduleC",
        "raw": "\"moduleC\"",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 42
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "moduleD",
                "raw": "\"moduleD\"",
                "start": 53,
                "end": 62
              },
              "start": 45,
              "end": 63
            },
            "importKind": "value",
            "start": 31,
            "end": 64
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 82
            },
            "start": 69,
            "end": 83
          }
        ],
        "start": 25,
        "end": 85
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 85
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "moduleD",
        "raw": "\"moduleD\"",
        "start": 101,
        "end": 110
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 128
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "moduleC",
                "raw": "\"moduleC\"",
                "start": 139,
                "end": 148
              },
              "start": 131,
              "end": 149
            },
            "importKind": "value",
            "start": 117,
            "end": 150
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 168
            },
            "start": 155,
            "end": 169
          }
        ],
        "start": 111,
        "end": 171
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 86,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14,
    "range": [
      8,
      14
    ]
  },
  {
    "type": "String",
    "value": "\"moduleC\"",
    "start": 15,
    "end": 24,
    "range": [
      15,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 31,
    "end": 37,
    "range": [
      31,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 38,
    "end": 42,
    "range": [
      38,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 45,
    "end": 52,
    "range": [
      45,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "String",
    "value": "\"moduleD\"",
    "start": 53,
    "end": 62,
    "range": [
      53,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63,
    "range": [
      62,
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
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 69,
    "end": 75,
    "range": [
      69,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 78,
    "end": 82,
    "range": [
      78,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 86,
    "end": 93,
    "range": [
      86,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 94,
    "end": 100,
    "range": [
      94,
      100
    ]
  },
  {
    "type": "String",
    "value": "\"moduleD\"",
    "start": 101,
    "end": 110,
    "range": [
      101,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 117,
    "end": 123,
    "range": [
      117,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 124,
    "end": 128,
    "range": [
      124,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 131,
    "end": 138,
    "range": [
      131,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "String",
    "value": "\"moduleC\"",
    "start": 139,
    "end": 148,
    "range": [
      139,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 155,
    "end": 161,
    "range": [
      155,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 164,
    "end": 168,
    "range": [
      164,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 13,
        "end": 16
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 32
      },
      "start": 17,
      "end": 33
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 34
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassB",
    "start": 6,
    "end": 12,
    "range": [
      6,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 17,
    "end": 23,
    "range": [
      17,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassB",
    "start": 26,
    "end": 32,
    "range": [
      26,
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
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleC",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 98
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "moduleC",
          "raw": "\"moduleC\"",
          "start": 109,
          "end": 118
        },
        "start": 101,
        "end": 119
      },
      "importKind": "value",
      "start": 84,
      "end": 120
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 134
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./recursiveExportAssignmentAndFindAliasedType2_moduleB",
          "raw": "\"./recursiveExportAssignmentAndFindAliasedType2_moduleB\"",
          "start": 145,
          "end": 201
        },
        "start": 137,
        "end": 202
      },
      "importKind": "value",
      "start": 121,
      "end": 203
    },
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
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 224
                  },
                  "typeArguments": null,
                  "start": 218,
                  "end": 224
                },
                "start": 216,
                "end": 224
              },
              "start": 215,
              "end": 224
            },
            "init": null,
            "definite": false,
            "start": 215,
            "end": 224
          }
        ],
        "declare": false,
        "start": 211,
        "end": 225
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 204,
      "end": 225
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 84,
  "end": 262
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 84,
    "end": 90,
    "range": [
      84,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "moduleC",
    "start": 91,
    "end": 98,
    "range": [
      91,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 101,
    "end": 108,
    "range": [
      101,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "String",
    "value": "\"moduleC\"",
    "start": 109,
    "end": 118,
    "range": [
      109,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 121,
    "end": 127,
    "range": [
      121,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassB",
    "start": 128,
    "end": 134,
    "range": [
      128,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 137,
    "end": 144,
    "range": [
      137,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "String",
    "value": "\"./recursiveExportAssignmentAndFindAliasedType2_moduleB\"",
    "start": 145,
    "end": 201,
    "range": [
      145,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 204,
    "end": 210,
    "range": [
      204,
      210
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 211,
    "end": 214,
    "range": [
      211,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassB",
    "start": 218,
    "end": 224,
    "range": [
      218,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  }
]
```
