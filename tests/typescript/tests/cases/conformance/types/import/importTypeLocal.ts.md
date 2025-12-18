__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "start": 22,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 32
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 47
          }
        ],
        "start": 16,
        "end": 49
      },
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 64
      },
      "start": 50,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 10,
    "end": 15,
    "range": [
      10,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
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
    "value": ":",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 25,
    "end": 31,
    "range": [
      25,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 40,
    "end": 46,
    "range": [
      40,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 50,
    "end": 56,
    "range": [
      50,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 59,
    "end": 64,
    "range": [
      59,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
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
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 50
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 52,
                        "end": 58
                      },
                      "start": 50,
                      "end": 58
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 49,
                    "end": 59
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 68,
                      "end": 69
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 71,
                        "end": 77
                      },
                      "start": 69,
                      "end": 77
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 68,
                    "end": 78
                  }
                ],
                "start": 39,
                "end": 84
              },
              "declare": false,
              "start": 27,
              "end": 84
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 84
          }
        ],
        "start": 14,
        "end": 86
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 108
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
                  "name": "J",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 133
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 145
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 147,
                          "end": 153
                        },
                        "start": 145,
                        "end": 153
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 144,
                      "end": 154
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 164
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 166,
                          "end": 172
                        },
                        "start": 164,
                        "end": 172
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 163,
                      "end": 173
                    }
                  ],
                  "start": 134,
                  "end": 179
                },
                "declare": false,
                "start": 122,
                "end": 179
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 115,
              "end": 179
            }
          ],
          "start": 109,
          "end": 181
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 95,
        "end": 181
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 88,
      "end": 181
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 192
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 203
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 208
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 210
                  },
                  "start": 205,
                  "end": 210
                },
                "typeArguments": null,
                "start": 205,
                "end": 210
              },
              "start": 203,
              "end": 210
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 199,
            "end": 211
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 227
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
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
                          "name": "Baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 235,
                          "end": 238
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "J",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 240
                        },
                        "start": 235,
                        "end": 240
                      },
                      "typeArguments": null,
                      "start": 235,
                      "end": 240
                    },
                    "start": 233,
                    "end": 240
                  },
                  "start": 228,
                  "end": 240
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 242,
                "end": 244
              },
              "expression": false,
              "start": 227,
              "end": 244
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 216,
            "end": 244
          }
        ],
        "start": 193,
        "end": 246
      },
      "abstract": false,
      "declare": false,
      "start": 183,
      "end": 246
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
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 259
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 259
          },
          "exportKind": "value",
          "start": 256,
          "end": 259
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 247,
      "end": 261
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 262
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 10,
    "end": 13,
    "range": [
      10,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26,
    "range": [
      20,
      26
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36,
    "range": [
      27,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 37,
    "end": 38,
    "range": [
      37,
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
    "value": "a",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 52,
    "end": 58,
    "range": [
      52,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 71,
    "end": 77,
    "range": [
      71,
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
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 88,
    "end": 94,
    "range": [
      88,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 95,
    "end": 104,
    "range": [
      95,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 122,
    "end": 131,
    "range": [
      122,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 144,
    "end": 145,
    "range": [
      144,
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
    "value": "number",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 166,
    "end": 172,
    "range": [
      166,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 183,
    "end": 188,
    "range": [
      183,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 199,
    "end": 203,
    "range": [
      199,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 205,
    "end": 208,
    "range": [
      205,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 216,
    "end": 227,
    "range": [
      216,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 228,
    "end": 233,
    "range": [
      228,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 235,
    "end": 238,
    "range": [
      235,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 256,
    "end": 259,
    "range": [
      256,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
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
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "./foo",
                    "raw": "\"./foo\"",
                    "start": 23,
                    "end": 30
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null,
                  "start": 16,
                  "end": 31
                },
                "start": 14,
                "end": 31
              },
              "start": 13,
              "end": 31
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 37
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 39,
                    "end": 40
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 36,
                  "end": 40
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 42,
                    "end": 43
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 45,
                    "end": 46
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 42,
                  "end": 46
                }
              ],
              "start": 34,
              "end": 48
            },
            "definite": false,
            "start": 13,
            "end": 48
          }
        ],
        "declare": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    },
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
              "name": "y",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "./foo2",
                    "raw": "\"./foo2\"",
                    "start": 71,
                    "end": 79
                  },
                  "options": null,
                  "qualifier": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 84
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 86
                    },
                    "start": 81,
                    "end": 86
                  },
                  "typeArguments": null,
                  "start": 64,
                  "end": 86
                },
                "start": 62,
                "end": 86
              },
              "start": 61,
              "end": 86
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 92
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 94,
                    "end": 96
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 91,
                  "end": 96
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 99
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 101,
                    "end": 102
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 98,
                  "end": 102
                }
              ],
              "start": 89,
              "end": 104
            },
            "definite": false,
            "start": 61,
            "end": 104
          }
        ],
        "declare": false,
        "start": 57,
        "end": 105
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 105
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar2",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 124
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
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 135
              },
              "typeAnnotation": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 138,
                        "end": 139
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 141,
                          "end": 147
                        },
                        "start": 139,
                        "end": 147
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 138,
                      "end": 148
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 149,
                        "end": 150
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 152,
                          "end": 158
                        },
                        "start": 150,
                        "end": 158
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 149,
                      "end": 159
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 161
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 163,
                          "end": 169
                        },
                        "start": 161,
                        "end": 169
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 160,
                      "end": 169
                    }
                  ],
                  "start": 137,
                  "end": 170
                },
                "start": 135,
                "end": 170
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 131,
              "end": 171
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 187
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 196,
                        "end": 199
                      },
                      "start": 194,
                      "end": 199
                    },
                    "start": 188,
                    "end": 199
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 201,
                  "end": 203
                },
                "expression": false,
                "start": 187,
                "end": 203
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 176,
              "end": 203
            }
          ],
          "start": 125,
          "end": 205
        },
        "abstract": false,
        "declare": false,
        "start": 114,
        "end": 205
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 205
    },
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
              "name": "shim",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSImportType",
                    "source": {
                      "type": "Literal",
                      "value": "./foo2",
                      "raw": "\"./foo2\"",
                      "start": 238,
                      "end": 246
                    },
                    "options": null,
                    "qualifier": null,
                    "typeArguments": null,
                    "start": 231,
                    "end": 247
                  },
                  "typeArguments": null,
                  "start": 224,
                  "end": 247
                },
                "start": 222,
                "end": 247
              },
              "start": 218,
              "end": 247
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
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 256,
                    "end": 259
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 261,
                    "end": 265
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 256,
                  "end": 265
                }
              ],
              "start": 250,
              "end": 267
            },
            "definite": false,
            "start": 218,
            "end": 267
          }
        ],
        "declare": false,
        "start": 214,
        "end": 268
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 207,
      "end": 268
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 268
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
    "type": "Identifier",
    "value": "x",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 16,
    "end": 22,
    "range": [
      16,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "String",
    "value": "\"./foo\"",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 36,
    "end": 37,
    "range": [
      36,
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
    "type": "Numeric",
    "value": "0",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 50,
    "end": 56,
    "range": [
      50,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 57,
    "end": 60,
    "range": [
      57,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "String",
    "value": "\"./foo2\"",
    "start": 71,
    "end": 79,
    "range": [
      71,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 81,
    "end": 84,
    "range": [
      81,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 94,
    "end": 96,
    "range": [
      94,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113,
    "range": [
      107,
      113
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 114,
    "end": 119,
    "range": [
      114,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 120,
    "end": 124,
    "range": [
      120,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 131,
    "end": 135,
    "range": [
      131,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 152,
    "end": 158,
    "range": [
      152,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 176,
    "end": 187,
    "range": [
      176,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 188,
    "end": 193,
    "range": [
      188,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 196,
    "end": 199,
    "range": [
      196,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 207,
    "end": 213,
    "range": [
      207,
      213
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 214,
    "end": 217,
    "range": [
      214,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "shim",
    "start": 218,
    "end": 222,
    "range": [
      218,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 224,
    "end": 230,
    "range": [
      224,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 231,
    "end": 237,
    "range": [
      231,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "String",
    "value": "\"./foo2\"",
    "start": 238,
    "end": 246,
    "range": [
      238,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 256,
    "end": 259,
    "range": [
      256,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 261,
    "end": 265,
    "range": [
      261,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  }
]
```
