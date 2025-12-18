__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Root",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 21
        },
        "body": {
          "type": "TSModuleBlock",
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
                  "start": 65,
                  "end": 68
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 79,
                        "end": 80
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 82,
                          "end": 88
                        },
                        "start": 80,
                        "end": 88
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 79,
                      "end": 89
                    }
                  ],
                  "start": 69,
                  "end": 95
                },
                "declare": false,
                "start": 55,
                "end": 95
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 48,
              "end": 95
            }
          ],
          "start": 22,
          "end": 97
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 97
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 97
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 97
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
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "Root",
    "start": 17,
    "end": 21,
    "range": [
      17,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 55,
    "end": 64,
    "range": [
      55,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 65,
    "end": 68,
    "range": [
      65,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
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
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file",
        "raw": "\"./file\"",
        "start": 14,
        "end": 22
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 23
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 23
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
    "value": "from",
    "start": 9,
    "end": 13,
    "range": [
      9,
      13
    ]
  },
  {
    "type": "String",
    "value": "\"./file\"",
    "start": 14,
    "end": 22,
    "range": [
      14,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
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
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./reexport",
        "raw": "\"./reexport\"",
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
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./reexport",
        "raw": "\"./reexport\"",
        "start": 50,
        "end": 62
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Root",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 134
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 145,
                    "end": 146
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 157
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 156,
                    "end": 157
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 168
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 167,
                    "end": 168
                  }
                ],
                "start": 135,
                "end": 174
              },
              "const": false,
              "declare": false,
              "start": 125,
              "end": 174
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 174
          }
        ],
        "start": 63,
        "end": 176
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 35,
      "end": 176
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 197
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Root",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 202
                    },
                    "start": 195,
                    "end": 202
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 206
                  },
                  "start": 195,
                  "end": 206
                },
                "typeArguments": null,
                "start": 195,
                "end": 206
              },
              "start": 193,
              "end": 206
            },
            "start": 192,
            "end": 206
          },
          "init": null,
          "definite": false,
          "start": 192,
          "end": 206
        }
      ],
      "declare": true,
      "start": 178,
      "end": 207
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 219
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Root",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 224
                  },
                  "start": 217,
                  "end": 224
                },
                "typeArguments": null,
                "start": 217,
                "end": 224
              },
              "start": 215,
              "end": 224
            },
            "start": 214,
            "end": 224
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 229
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Root",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 234
              },
              "optional": false,
              "computed": false,
              "start": 227,
              "end": 234
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "optional": false,
            "computed": false,
            "start": 227,
            "end": 236
          },
          "definite": false,
          "start": 214,
          "end": 236
        }
      ],
      "declare": false,
      "start": 208,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 240
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 242
        },
        "optional": false,
        "computed": false,
        "start": 239,
        "end": 242
      },
      "directive": null,
      "start": 239,
      "end": 243
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 243
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
    "value": "ns",
    "start": 12,
    "end": 14,
    "range": [
      12,
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
    "value": "\"./reexport\"",
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
    "type": "Identifier",
    "value": "declare",
    "start": 35,
    "end": 42,
    "range": [
      35,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 43,
    "end": 49,
    "range": [
      43,
      49
    ]
  },
  {
    "type": "String",
    "value": "\"./reexport\"",
    "start": 50,
    "end": 62,
    "range": [
      50,
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
    "type": "Keyword",
    "value": "export",
    "start": 118,
    "end": 124,
    "range": [
      118,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 125,
    "end": 129,
    "range": [
      125,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "Root",
    "start": 130,
    "end": 134,
    "range": [
      130,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 178,
    "end": 185,
    "range": [
      178,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 186,
    "end": 191,
    "range": [
      186,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 195,
    "end": 197,
    "range": [
      195,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "Root",
    "start": 198,
    "end": 202,
    "range": [
      198,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 203,
    "end": 206,
    "range": [
      203,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 208,
    "end": 213,
    "range": [
      208,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 217,
    "end": 219,
    "range": [
      217,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "Root",
    "start": 220,
    "end": 224,
    "range": [
      220,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 227,
    "end": 229,
    "range": [
      227,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "Root",
    "start": 230,
    "end": 234,
    "range": [
      230,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  }
]
```
