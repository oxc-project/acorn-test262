__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Other",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 25
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 35
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                },
                "start": 35,
                "end": 43
              },
              "accessibility": null,
              "static": false,
              "start": 30,
              "end": 43
            }
          ],
          "start": 28,
          "end": 45
        },
        "declare": true,
        "start": 7,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 46
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeType",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 75
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 83
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 90
                  },
                  "typeArguments": null,
                  "start": 85,
                  "end": 90
                },
                "start": 83,
                "end": 90
              },
              "accessibility": null,
              "static": false,
              "start": 80,
              "end": 90
            }
          ],
          "start": 78,
          "end": 92
        },
        "declare": true,
        "start": 54,
        "end": 93
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 47,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 94
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
    "value": "declare",
    "start": 7,
    "end": 14,
    "range": [
      7,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 15,
    "end": 19,
    "range": [
      15,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 20,
    "end": 25,
    "range": [
      20,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 30,
    "end": 35,
    "range": [
      30,
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
    "type": "Identifier",
    "value": "string",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53,
    "range": [
      47,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 54,
    "end": 61,
    "range": [
      54,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 62,
    "end": 66,
    "range": [
      62,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeType",
    "start": 67,
    "end": 75,
    "range": [
      67,
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
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 80,
    "end": 83,
    "range": [
      80,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 85,
    "end": 90,
    "range": [
      85,
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
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "shouldLookupName",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 46,
                    "end": 52
                  },
                  "start": 39,
                  "end": 52
                },
                "start": 37,
                "end": 52
              },
              "start": 21,
              "end": 52
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 52
          }
        ],
        "declare": true,
        "start": 7,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 53
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "shouldReuseLocalName",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 104,
                    "end": 110
                  },
                  "start": 97,
                  "end": 110
                },
                "start": 95,
                "end": 110
              },
              "start": 75,
              "end": 110
            },
            "init": null,
            "definite": false,
            "start": 75,
            "end": 110
          }
        ],
        "declare": true,
        "start": 61,
        "end": 111
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 111
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "reuseDepName",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 154,
                    "end": 160
                  },
                  "start": 147,
                  "end": 160
                },
                "start": 145,
                "end": 160
              },
              "start": 133,
              "end": 160
            },
            "init": null,
            "definite": false,
            "start": 133,
            "end": 160
          }
        ],
        "declare": true,
        "start": 119,
        "end": 161
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 112,
      "end": 161
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "shouldBeElided",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 206,
                    "end": 212
                  },
                  "start": 199,
                  "end": 212
                },
                "start": 197,
                "end": 212
              },
              "start": 183,
              "end": 212
            },
            "init": null,
            "definite": false,
            "start": 183,
            "end": 212
          }
        ],
        "declare": true,
        "start": 169,
        "end": 213
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 162,
      "end": 213
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "isNotAccessibleShouldError",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 270,
                    "end": 276
                  },
                  "start": 263,
                  "end": 276
                },
                "start": 261,
                "end": 276
              },
              "start": 235,
              "end": 276
            },
            "init": null,
            "definite": false,
            "start": 235,
            "end": 276
          }
        ],
        "declare": true,
        "start": 221,
        "end": 277
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 214,
      "end": 277
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 278
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
    "value": "declare",
    "start": 7,
    "end": 14,
    "range": [
      7,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 15,
    "end": 20,
    "range": [
      15,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldLookupName",
    "start": 21,
    "end": 37,
    "range": [
      21,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 39,
    "end": 45,
    "range": [
      39,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 46,
    "end": 52,
    "range": [
      46,
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
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 61,
    "end": 68,
    "range": [
      61,
      68
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 69,
    "end": 74,
    "range": [
      69,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldReuseLocalName",
    "start": 75,
    "end": 95,
    "range": [
      75,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 97,
    "end": 103,
    "range": [
      97,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 104,
    "end": 110,
    "range": [
      104,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 112,
    "end": 118,
    "range": [
      112,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 119,
    "end": 126,
    "range": [
      119,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 127,
    "end": 132,
    "range": [
      127,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "reuseDepName",
    "start": 133,
    "end": 145,
    "range": [
      133,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 154,
    "end": 160,
    "range": [
      154,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 169,
    "end": 176,
    "range": [
      169,
      176
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 177,
    "end": 182,
    "range": [
      177,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldBeElided",
    "start": 183,
    "end": 197,
    "range": [
      183,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 199,
    "end": 205,
    "range": [
      199,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 206,
    "end": 212,
    "range": [
      206,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 214,
    "end": 220,
    "range": [
      214,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 221,
    "end": 228,
    "range": [
      221,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 229,
    "end": 234,
    "range": [
      229,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "isNotAccessibleShouldError",
    "start": 235,
    "end": 261,
    "range": [
      235,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 263,
    "end": 269,
    "range": [
      263,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 270,
    "end": 276,
    "range": [
      270,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
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
            "name": "Other",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Other",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./inner",
        "raw": "'./inner'",
        "start": 22,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 57
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 57
          },
          "importKind": "value",
          "start": 41,
          "end": 57
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 71
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 71
          },
          "importKind": "value",
          "start": 59,
          "end": 71
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 93
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 93
          },
          "importKind": "value",
          "start": 73,
          "end": 93
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 109
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 109
          },
          "importKind": "value",
          "start": 95,
          "end": 109
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "'./other'",
        "start": 117,
        "end": 126
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 126
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "goodDeclaration",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 166,
                          "end": 167
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 166,
                        "end": 167
                      }
                    ],
                    "start": 165,
                    "end": 168
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "shouldPrintResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 276,
                                "end": 293
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSConditionalType",
                                  "checkType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 295,
                                      "end": 296
                                    },
                                    "typeArguments": null,
                                    "start": 295,
                                    "end": 296
                                  },
                                  "extendsType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 305,
                                      "end": 310
                                    },
                                    "typeArguments": null,
                                    "start": 305,
                                    "end": 310
                                  },
                                  "trueType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "O",
                                      "raw": "\"O\"",
                                      "start": 312,
                                      "end": 315
                                    },
                                    "start": 312,
                                    "end": 315
                                  },
                                  "falseType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "N",
                                      "raw": "\"N\"",
                                      "start": 317,
                                      "end": 320
                                    },
                                    "start": 317,
                                    "end": 320
                                  },
                                  "start": 295,
                                  "end": 320
                                },
                                "start": 293,
                                "end": 320
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 276,
                              "end": 321
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "shouldPrintResult2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 467,
                                "end": 485
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSConditionalType",
                                  "checkType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 487,
                                      "end": 488
                                    },
                                    "typeArguments": null,
                                    "start": 487,
                                    "end": 488
                                  },
                                  "extendsType": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "shouldBeElided",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 504,
                                      "end": 518
                                    },
                                    "typeArguments": null,
                                    "start": 497,
                                    "end": 518
                                  },
                                  "trueType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 520,
                                      "end": 525
                                    },
                                    "typeArguments": null,
                                    "start": 520,
                                    "end": 525
                                  },
                                  "falseType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "N",
                                      "raw": "\"N\"",
                                      "start": 527,
                                      "end": 530
                                    },
                                    "start": 527,
                                    "end": 530
                                  },
                                  "start": 487,
                                  "end": 530
                                },
                                "start": 485,
                                "end": 530
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 467,
                              "end": 531
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "shouldLookupName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 612,
                                "end": 628
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "TSImportType",
                                    "source": {
                                      "type": "Literal",
                                      "value": "./other",
                                      "raw": "'./other'",
                                      "start": 644,
                                      "end": 653
                                    },
                                    "options": null,
                                    "qualifier": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "shouldLookupName",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 655,
                                      "end": 671
                                    },
                                    "typeArguments": null,
                                    "start": 637,
                                    "end": 671
                                  },
                                  "typeArguments": null,
                                  "start": 630,
                                  "end": 671
                                },
                                "start": 628,
                                "end": 671
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 612,
                              "end": 672
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "shouldReuseLocalName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 742,
                                "end": 762
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "shouldReuseLocalName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 771,
                                    "end": 791
                                  },
                                  "typeArguments": null,
                                  "start": 764,
                                  "end": 791
                                },
                                "start": 762,
                                "end": 791
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 742,
                              "end": 791
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "reuseDepName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 862,
                                "end": 874
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "reuseDepName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 883,
                                    "end": 895
                                  },
                                  "typeArguments": null,
                                  "start": 876,
                                  "end": 895
                                },
                                "start": 874,
                                "end": 895
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 862,
                              "end": 896
                            }
                          ],
                          "start": 180,
                          "end": 898
                        },
                        "start": 177,
                        "end": 898
                      },
                      "start": 174,
                      "end": 898
                    },
                    "start": 171,
                    "end": 898
                  },
                  "start": 165,
                  "end": 898
                },
                "start": 163,
                "end": 898
              },
              "start": 148,
              "end": 898
            },
            "init": null,
            "definite": false,
            "start": 148,
            "end": 898
          }
        ],
        "declare": true,
        "start": 134,
        "end": 898
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 127,
      "end": 898
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
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null,
            "start": 908,
            "end": 924
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null,
            "start": 908,
            "end": 924
          },
          "exportKind": "value",
          "start": 908,
          "end": 924
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 926,
            "end": 946
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 926,
            "end": 946
          },
          "exportKind": "value",
          "start": 926,
          "end": 946
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null,
            "start": 948,
            "end": 960
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null,
            "start": 948,
            "end": 960
          },
          "exportKind": "value",
          "start": 948,
          "end": 960
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 976
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 976
          },
          "exportKind": "value",
          "start": 962,
          "end": 976
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 899,
      "end": 979
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 980
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
    "value": "Other",
    "start": 9,
    "end": 14,
    "range": [
      9,
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
    "type": "Identifier",
    "value": "from",
    "start": 17,
    "end": 21,
    "range": [
      17,
      21
    ]
  },
  {
    "type": "String",
    "value": "'./inner'",
    "start": 22,
    "end": 31,
    "range": [
      22,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 32,
    "end": 38,
    "range": [
      32,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldLookupName",
    "start": 41,
    "end": 57,
    "range": [
      41,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "reuseDepName",
    "start": 59,
    "end": 71,
    "range": [
      59,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldReuseLocalName",
    "start": 73,
    "end": 93,
    "range": [
      73,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldBeElided",
    "start": 95,
    "end": 109,
    "range": [
      95,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 112,
    "end": 116,
    "range": [
      112,
      116
    ]
  },
  {
    "type": "String",
    "value": "'./other'",
    "start": 117,
    "end": 126,
    "range": [
      117,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 127,
    "end": 133,
    "range": [
      127,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 134,
    "end": 141,
    "range": [
      134,
      141
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 142,
    "end": 147,
    "range": [
      142,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "goodDeclaration",
    "start": 148,
    "end": 163,
    "range": [
      148,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 171,
    "end": 173,
    "range": [
      171,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 177,
    "end": 179,
    "range": [
      177,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldPrintResult",
    "start": 276,
    "end": 293,
    "range": [
      276,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 297,
    "end": 304,
    "range": [
      297,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 305,
    "end": 310,
    "range": [
      305,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "String",
    "value": "\"O\"",
    "start": 312,
    "end": 315,
    "range": [
      312,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "String",
    "value": "\"N\"",
    "start": 317,
    "end": 320,
    "range": [
      317,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldPrintResult2",
    "start": 467,
    "end": 485,
    "range": [
      467,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 489,
    "end": 496,
    "range": [
      489,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 497,
    "end": 503,
    "range": [
      497,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldBeElided",
    "start": 504,
    "end": 518,
    "range": [
      504,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 520,
    "end": 525,
    "range": [
      520,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "String",
    "value": "\"N\"",
    "start": 527,
    "end": 530,
    "range": [
      527,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldLookupName",
    "start": 612,
    "end": 628,
    "range": [
      612,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 630,
    "end": 636,
    "range": [
      630,
      636
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 637,
    "end": 643,
    "range": [
      637,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "String",
    "value": "'./other'",
    "start": 644,
    "end": 653,
    "range": [
      644,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldLookupName",
    "start": 655,
    "end": 671,
    "range": [
      655,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldReuseLocalName",
    "start": 742,
    "end": 762,
    "range": [
      742,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 764,
    "end": 770,
    "range": [
      764,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldReuseLocalName",
    "start": 771,
    "end": 791,
    "range": [
      771,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "reuseDepName",
    "start": 862,
    "end": 874,
    "range": [
      862,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 876,
    "end": 882,
    "range": [
      876,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "reuseDepName",
    "start": 883,
    "end": 895,
    "range": [
      883,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 899,
    "end": 905,
    "range": [
      899,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldLookupName",
    "start": 908,
    "end": 924,
    "range": [
      908,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldReuseLocalName",
    "start": 926,
    "end": 946,
    "range": [
      926,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "reuseDepName",
    "start": 948,
    "end": 960,
    "range": [
      948,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldBeElided",
    "start": 962,
    "end": 976,
    "range": [
      962,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
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
            "name": "goodDeclaration",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 24
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "goodDeclaration",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 24
          },
          "importKind": "value",
          "start": 9,
          "end": 24
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 46
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 46
          },
          "importKind": "value",
          "start": 26,
          "end": 46
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 62
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 62
          },
          "importKind": "value",
          "start": 48,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "some-dep",
        "raw": "\"some-dep\"",
        "start": 70,
        "end": 80
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 81
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 98
            },
            "init": {
              "type": "TSInstantiationExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "goodDeclaration",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 116
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 117,
                    "end": 119
                  }
                ],
                "start": 116,
                "end": 120
              },
              "start": 101,
              "end": 120
            },
            "definite": false,
            "start": 95,
            "end": 120
          }
        ],
        "declare": false,
        "start": 89,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 82,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 122
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
    "value": "goodDeclaration",
    "start": 9,
    "end": 24,
    "range": [
      9,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldReuseLocalName",
    "start": 26,
    "end": 46,
    "range": [
      26,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldBeElided",
    "start": 48,
    "end": 62,
    "range": [
      48,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 65,
    "end": 69,
    "range": [
      65,
      69
    ]
  },
  {
    "type": "String",
    "value": "\"some-dep\"",
    "start": 70,
    "end": 80,
    "range": [
      70,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 89,
    "end": 94,
    "range": [
      89,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 95,
    "end": 98,
    "range": [
      95,
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
    "value": "goodDeclaration",
    "start": 101,
    "end": 116,
    "range": [
      101,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  }
]
```
