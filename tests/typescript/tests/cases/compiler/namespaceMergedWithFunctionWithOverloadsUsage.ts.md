__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Whatever",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 46
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 61
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 63,
                      "end": 66
                    },
                    "start": 61,
                    "end": 66
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 57,
                  "end": 67
                }
              ],
              "start": 47,
              "end": 73
            },
            "declare": false,
            "start": 28,
            "end": 73
          }
        ],
        "start": 22,
        "end": 75
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 75
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 97
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "opts",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 108
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Whatever",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 117
                },
                "start": 105,
                "end": 117
              },
              "typeArguments": null,
              "start": 105,
              "end": 117
            },
            "start": 103,
            "end": 117
          },
          "start": 98,
          "end": 117
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        },
        "start": 118,
        "end": 124
      },
      "body": null,
      "expression": false,
      "start": 77,
      "end": 125
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 146
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 159
              },
              "typeArguments": null,
              "start": 151,
              "end": 159
            },
            "start": 149,
            "end": 159
          },
          "start": 147,
          "end": 159
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "opts",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 171
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Whatever",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 180
                },
                "start": 168,
                "end": 180
              },
              "typeArguments": null,
              "start": 168,
              "end": 180
            },
            "start": 166,
            "end": 180
          },
          "start": 161,
          "end": 180
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 183,
          "end": 187
        },
        "start": 181,
        "end": 187
      },
      "body": null,
      "expression": false,
      "start": 126,
      "end": 188
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 202
      },
      "start": 190,
      "end": 203
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 203
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
    "value": "namespace",
    "start": 8,
    "end": 17,
    "range": [
      8,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 18,
    "end": 21,
    "range": [
      18,
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
    "value": "interface",
    "start": 28,
    "end": 37,
    "range": [
      28,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "Whatever",
    "start": 38,
    "end": 46,
    "range": [
      38,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 57,
    "end": 61,
    "range": [
      57,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 63,
    "end": 66,
    "range": [
      63,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 77,
    "end": 84,
    "range": [
      77,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 85,
    "end": 93,
    "range": [
      85,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 94,
    "end": 97,
    "range": [
      94,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "opts",
    "start": 98,
    "end": 102,
    "range": [
      98,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "Whatever",
    "start": 109,
    "end": 117,
    "range": [
      109,
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
    "value": ":",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 120,
    "end": 124,
    "range": [
      120,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 126,
    "end": 133,
    "range": [
      126,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 134,
    "end": 142,
    "range": [
      134,
      142
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
    "value": "(",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 147,
    "end": 149,
    "range": [
      147,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 151,
    "end": 159,
    "range": [
      151,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "opts",
    "start": 161,
    "end": 165,
    "range": [
      161,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 168,
    "end": 171,
    "range": [
      168,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "Whatever",
    "start": 172,
    "end": 180,
    "range": [
      172,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 183,
    "end": 187,
    "range": [
      183,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 190,
    "end": 196,
    "range": [
      190,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 199,
    "end": 202,
    "range": [
      199,
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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./file",
          "raw": "\"./file\"",
          "start": 19,
          "end": 27
        },
        "start": 11,
        "end": 28
      },
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 32
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 33,
            "end": 34
          }
        ],
        "optional": false,
        "start": 31,
        "end": 35
      },
      "directive": null,
      "start": 31,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 63
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
    "value": "X",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 11,
    "end": 18,
    "range": [
      11,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "String",
    "value": "\"./file\"",
    "start": 19,
    "end": 27,
    "range": [
      19,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28,
    "range": [
      27,
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
    "value": "X",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
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
