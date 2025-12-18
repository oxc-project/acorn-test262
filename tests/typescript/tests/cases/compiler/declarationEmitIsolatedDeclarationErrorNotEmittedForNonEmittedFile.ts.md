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
          "name": "RootConfig",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 27
        },
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
                "start": 28,
                "end": 29
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 28,
              "end": 29
            }
          ],
          "start": 27,
          "end": 30
        },
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
                "start": 37,
                "end": 41
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "typeArguments": null,
                  "start": 43,
                  "end": 44
                },
                "start": 41,
                "end": 44
              },
              "accessibility": null,
              "static": false,
              "start": 37,
              "end": 45
            }
          ],
          "start": 31,
          "end": 47
        },
        "declare": false,
        "start": 7,
        "end": 47
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 47
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
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
    "value": "RootConfig",
    "start": 17,
    "end": 27,
    "range": [
      17,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 37,
    "end": 41,
    "range": [
      37,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
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
          "name": "ErrorFormatterShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 36
        },
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
                "start": 37,
                "end": 38
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 39,
                "end": 41
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 37,
              "end": 41
            }
          ],
          "start": 36,
          "end": 42
        },
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
                "start": 49,
                "end": 53
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 56
                  },
                  "typeArguments": null,
                  "start": 55,
                  "end": 56
                },
                "start": 53,
                "end": 56
              },
              "accessibility": null,
              "static": false,
              "start": 49,
              "end": 57
            }
          ],
          "start": 43,
          "end": 59
        },
        "declare": false,
        "start": 7,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 59
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PickFirstDefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 88
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TType",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 94
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 89,
              "end": 94
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TPick",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 101
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 96,
              "end": 101
            }
          ],
          "start": 88,
          "end": 102
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSUndefinedKeyword",
            "start": 105,
            "end": 114
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 128
            },
            "typeArguments": null,
            "start": 123,
            "end": 128
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 133,
              "end": 142
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TPick",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 156
              },
              "typeArguments": null,
              "start": 151,
              "end": 156
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 163,
              "end": 168
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TPick",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 180
              },
              "typeArguments": null,
              "start": 175,
              "end": 180
            },
            "start": 133,
            "end": 180
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 190
            },
            "typeArguments": null,
            "start": 185,
            "end": 190
          },
          "start": 105,
          "end": 190
        },
        "declare": false,
        "start": 67,
        "end": 191
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 60,
      "end": 191
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ErrorFormatter",
          "optional": false,
          "typeAnnotation": null,
          "start": 209,
          "end": 223
        },
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
                "start": 224,
                "end": 225
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 226,
                "end": 228
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 224,
              "end": 228
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 231,
                "end": 233
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 229,
              "end": 233
            }
          ],
          "start": 223,
          "end": 234
        },
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
                "start": 241,
                "end": 245
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 249
                      },
                      "typeArguments": null,
                      "start": 248,
                      "end": 249
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 251,
                        "end": 252
                      },
                      "typeArguments": null,
                      "start": 251,
                      "end": 252
                    }
                  ],
                  "start": 247,
                  "end": 253
                },
                "start": 245,
                "end": 253
              },
              "accessibility": null,
              "static": false,
              "start": 241,
              "end": 254
            }
          ],
          "start": 235,
          "end": 256
        },
        "declare": false,
        "start": 199,
        "end": 256
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 192,
      "end": 256
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DefaultErrorShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 291
        },
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
                "start": 292,
                "end": 293
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 294,
                "end": 296
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 292,
              "end": 296
            }
          ],
          "start": 291,
          "end": 297
        },
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
                "start": 304,
                "end": 308
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 311
                  },
                  "typeArguments": null,
                  "start": 310,
                  "end": 311
                },
                "start": 308,
                "end": 311
              },
              "accessibility": null,
              "static": false,
              "start": 304,
              "end": 312
            }
          ],
          "start": 298,
          "end": 314
        },
        "declare": false,
        "start": 264,
        "end": 314
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 257,
      "end": 314
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 314
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
    "value": "ErrorFormatterShape",
    "start": 17,
    "end": 36,
    "range": [
      17,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
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
    "type": "Punctuator",
    "value": ">",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 49,
    "end": 53,
    "range": [
      49,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 67,
    "end": 71,
    "range": [
      67,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "PickFirstDefined",
    "start": 72,
    "end": 88,
    "range": [
      72,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 89,
    "end": 94,
    "range": [
      89,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "TPick",
    "start": 96,
    "end": 101,
    "range": [
      96,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 105,
    "end": 114,
    "range": [
      105,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 115,
    "end": 122,
    "range": [
      115,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 123,
    "end": 128,
    "range": [
      123,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 133,
    "end": 142,
    "range": [
      133,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 143,
    "end": 150,
    "range": [
      143,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "TPick",
    "start": 151,
    "end": 156,
    "range": [
      151,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 163,
    "end": 168,
    "range": [
      163,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "TPick",
    "start": 175,
    "end": 180,
    "range": [
      175,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 185,
    "end": 190,
    "range": [
      185,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 192,
    "end": 198,
    "range": [
      192,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 199,
    "end": 208,
    "range": [
      199,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "ErrorFormatter",
    "start": 209,
    "end": 223,
    "range": [
      209,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
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
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 241,
    "end": 245,
    "range": [
      241,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 257,
    "end": 263,
    "range": [
      257,
      263
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 264,
    "end": 273,
    "range": [
      264,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "DefaultErrorShape",
    "start": 274,
    "end": 291,
    "range": [
      274,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 304,
    "end": 308,
    "range": [
      304,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
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
          "name": "MiddlewareFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 35
        },
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
                "start": 36,
                "end": 37
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 38,
                "end": 40
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 36,
              "end": 40
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 43,
                "end": 45
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 41,
              "end": 45
            }
          ],
          "start": 35,
          "end": 46
        },
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
                "start": 53,
                "end": 57
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 60,
                        "end": 61
                      },
                      "typeArguments": null,
                      "start": 60,
                      "end": 61
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 64
                      },
                      "typeArguments": null,
                      "start": 63,
                      "end": 64
                    }
                  ],
                  "start": 59,
                  "end": 65
                },
                "start": 57,
                "end": 65
              },
              "accessibility": null,
              "static": false,
              "start": 53,
              "end": 66
            }
          ],
          "start": 47,
          "end": 68
        },
        "declare": false,
        "start": 7,
        "end": 68
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 68
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MiddlewareBuilder",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 103
        },
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
                "start": 104,
                "end": 105
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 106,
                "end": 108
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 104,
              "end": 108
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 111,
                "end": 113
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 109,
              "end": 113
            }
          ],
          "start": 103,
          "end": 114
        },
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
                "start": 121,
                "end": 125
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 129
                      },
                      "typeArguments": null,
                      "start": 128,
                      "end": 129
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "typeArguments": null,
                      "start": 131,
                      "end": 132
                    }
                  ],
                  "start": 127,
                  "end": 133
                },
                "start": 125,
                "end": 133
              },
              "accessibility": null,
              "static": false,
              "start": 121,
              "end": 134
            }
          ],
          "start": 115,
          "end": 136
        },
        "declare": false,
        "start": 76,
        "end": 136
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 69,
      "end": 136
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 136
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
    "value": "MiddlewareFunction",
    "start": 17,
    "end": 35,
    "range": [
      17,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "U",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
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
    "value": ">",
    "start": 45,
    "end": 46,
    "range": [
      45,
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
    "start": 53,
    "end": 57,
    "range": [
      53,
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
    "type": "Punctuator",
    "value": "[",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "interface",
    "start": 76,
    "end": 85,
    "range": [
      76,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "MiddlewareBuilder",
    "start": 86,
    "end": 103,
    "range": [
      86,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
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
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 121,
    "end": 125,
    "range": [
      121,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
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
            "name": "RootConfig",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "RootConfig",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./internals/config",
        "raw": "'./internals/config'",
        "start": 27,
        "end": 47
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 48
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ErrorFormatterShape",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 77
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ErrorFormatterShape",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 77
          },
          "importKind": "value",
          "start": 58,
          "end": 77
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "PickFirstDefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 95
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "PickFirstDefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 95
          },
          "importKind": "value",
          "start": 79,
          "end": 95
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ErrorFormatter",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 111
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ErrorFormatter",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 111
          },
          "importKind": "value",
          "start": 97,
          "end": 111
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "DefaultErrorShape",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 130
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "DefaultErrorShape",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 130
          },
          "importKind": "value",
          "start": 113,
          "end": 130
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./internals/utils",
        "raw": "'./internals/utils'",
        "start": 138,
        "end": 157
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 49,
      "end": 158
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TRPCBuilder",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 184
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TParams",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 192
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 192
          }
        ],
        "start": 184,
        "end": 193
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 206
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 215
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 224,
                        "end": 230
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 231,
                            "end": 237
                          },
                          {
                            "type": "TSAnyKeyword",
                            "start": 239,
                            "end": 242
                          }
                        ],
                        "start": 230,
                        "end": 243
                      },
                      "start": 224,
                      "end": 243
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 207,
                    "end": 243
                  }
                ],
                "start": 206,
                "end": 244
              },
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
                        "name": "procedure",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 258,
                        "end": 267
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 269,
                          "end": 271
                        },
                        "start": 267,
                        "end": 271
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 258,
                      "end": 272
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "middleware",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 281,
                        "end": 291
                      },
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
                                  "name": "TNewParams",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 294,
                                  "end": 304
                                },
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Record",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 313,
                                    "end": 319
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 320,
                                        "end": 326
                                      },
                                      {
                                        "type": "TSAnyKeyword",
                                        "start": 328,
                                        "end": 331
                                      }
                                    ],
                                    "start": 319,
                                    "end": 332
                                  },
                                  "start": 313,
                                  "end": 332
                                },
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 294,
                                "end": 332
                              }
                            ],
                            "start": 293,
                            "end": 333
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSImportType",
                                  "source": {
                                    "type": "Literal",
                                    "value": "./middleware",
                                    "raw": "\"./middleware\"",
                                    "start": 345,
                                    "end": 359
                                  },
                                  "options": null,
                                  "qualifier": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "MiddlewareFunction",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 361,
                                    "end": 379
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
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
                                              "name": "_config",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 394,
                                              "end": 401
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "RootConfig",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 403,
                                                  "end": 413
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "params": [
                                                    {
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
                                                            "name": "errorShape",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 432,
                                                            "end": 442
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "typeAnnotation": {
                                                              "type": "TSTypeReference",
                                                              "typeName": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "ErrorFormatterShape",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 444,
                                                                "end": 463
                                                              },
                                                              "typeArguments": {
                                                                "type": "TSTypeParameterInstantiation",
                                                                "params": [
                                                                  {
                                                                    "type": "TSTypeReference",
                                                                    "typeName": {
                                                                      "type": "Identifier",
                                                                      "decorators": [],
                                                                      "name": "PickFirstDefined",
                                                                      "optional": false,
                                                                      "typeAnnotation": null,
                                                                      "start": 464,
                                                                      "end": 480
                                                                    },
                                                                    "typeArguments": {
                                                                      "type": "TSTypeParameterInstantiation",
                                                                      "params": [
                                                                        {
                                                                          "type": "TSIndexedAccessType",
                                                                          "objectType": {
                                                                            "type": "TSTypeReference",
                                                                            "typeName": {
                                                                              "type": "Identifier",
                                                                              "decorators": [],
                                                                              "name": "TOptions",
                                                                              "optional": false,
                                                                              "typeAnnotation": null,
                                                                              "start": 481,
                                                                              "end": 489
                                                                            },
                                                                            "typeArguments": null,
                                                                            "start": 481,
                                                                            "end": 489
                                                                          },
                                                                          "indexType": {
                                                                            "type": "TSLiteralType",
                                                                            "literal": {
                                                                              "type": "Literal",
                                                                              "value": "errorFormatter",
                                                                              "raw": "\"errorFormatter\"",
                                                                              "start": 490,
                                                                              "end": 506
                                                                            },
                                                                            "start": 490,
                                                                            "end": 506
                                                                          },
                                                                          "start": 481,
                                                                          "end": 507
                                                                        },
                                                                        {
                                                                          "type": "TSTypeReference",
                                                                          "typeName": {
                                                                            "type": "Identifier",
                                                                            "decorators": [],
                                                                            "name": "ErrorFormatter",
                                                                            "optional": false,
                                                                            "typeAnnotation": null,
                                                                            "start": 509,
                                                                            "end": 523
                                                                          },
                                                                          "typeArguments": {
                                                                            "type": "TSTypeParameterInstantiation",
                                                                            "params": [
                                                                              {
                                                                                "type": "TSConditionalType",
                                                                                "checkType": {
                                                                                  "type": "TSIndexedAccessType",
                                                                                  "objectType": {
                                                                                    "type": "TSTypeReference",
                                                                                    "typeName": {
                                                                                      "type": "Identifier",
                                                                                      "decorators": [],
                                                                                      "name": "TParams",
                                                                                      "optional": false,
                                                                                      "typeAnnotation": null,
                                                                                      "start": 524,
                                                                                      "end": 531
                                                                                    },
                                                                                    "typeArguments": null,
                                                                                    "start": 524,
                                                                                    "end": 531
                                                                                  },
                                                                                  "indexType": {
                                                                                    "type": "TSLiteralType",
                                                                                    "literal": {
                                                                                      "type": "Literal",
                                                                                      "value": "ctx",
                                                                                      "raw": "\"ctx\"",
                                                                                      "start": 532,
                                                                                      "end": 537
                                                                                    },
                                                                                    "start": 532,
                                                                                    "end": 537
                                                                                  },
                                                                                  "start": 524,
                                                                                  "end": 538
                                                                                },
                                                                                "extendsType": {
                                                                                  "type": "TSObjectKeyword",
                                                                                  "start": 547,
                                                                                  "end": 553
                                                                                },
                                                                                "trueType": {
                                                                                  "type": "TSIndexedAccessType",
                                                                                  "objectType": {
                                                                                    "type": "TSTypeReference",
                                                                                    "typeName": {
                                                                                      "type": "Identifier",
                                                                                      "decorators": [],
                                                                                      "name": "TParams",
                                                                                      "optional": false,
                                                                                      "typeAnnotation": null,
                                                                                      "start": 556,
                                                                                      "end": 563
                                                                                    },
                                                                                    "typeArguments": null,
                                                                                    "start": 556,
                                                                                    "end": 563
                                                                                  },
                                                                                  "indexType": {
                                                                                    "type": "TSLiteralType",
                                                                                    "literal": {
                                                                                      "type": "Literal",
                                                                                      "value": "ctx",
                                                                                      "raw": "\"ctx\"",
                                                                                      "start": 564,
                                                                                      "end": 569
                                                                                    },
                                                                                    "start": 564,
                                                                                    "end": 569
                                                                                  },
                                                                                  "start": 556,
                                                                                  "end": 570
                                                                                },
                                                                                "falseType": {
                                                                                  "type": "TSObjectKeyword",
                                                                                  "start": 573,
                                                                                  "end": 579
                                                                                },
                                                                                "start": 524,
                                                                                "end": 579
                                                                              },
                                                                              {
                                                                                "type": "TSTypeReference",
                                                                                "typeName": {
                                                                                  "type": "Identifier",
                                                                                  "decorators": [],
                                                                                  "name": "DefaultErrorShape",
                                                                                  "optional": false,
                                                                                  "typeAnnotation": null,
                                                                                  "start": 581,
                                                                                  "end": 598
                                                                                },
                                                                                "typeArguments": null,
                                                                                "start": 581,
                                                                                "end": 598
                                                                              }
                                                                            ],
                                                                            "start": 523,
                                                                            "end": 599
                                                                          },
                                                                          "start": 509,
                                                                          "end": 599
                                                                        }
                                                                      ],
                                                                      "start": 480,
                                                                      "end": 600
                                                                    },
                                                                    "start": 464,
                                                                    "end": 600
                                                                  }
                                                                ],
                                                                "start": 463,
                                                                "end": 601
                                                              },
                                                              "start": 444,
                                                              "end": 601
                                                            },
                                                            "start": 442,
                                                            "end": 601
                                                          },
                                                          "accessibility": null,
                                                          "static": false,
                                                          "start": 432,
                                                          "end": 602
                                                        }
                                                      ],
                                                      "start": 414,
                                                      "end": 616
                                                    }
                                                  ],
                                                  "start": 413,
                                                  "end": 617
                                                },
                                                "start": 403,
                                                "end": 617
                                              },
                                              "start": 401,
                                              "end": 617
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 394,
                                            "end": 618
                                          }
                                        ],
                                        "start": 380,
                                        "end": 628
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TNewParams",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 630,
                                          "end": 640
                                        },
                                        "typeArguments": null,
                                        "start": 630,
                                        "end": 640
                                      }
                                    ],
                                    "start": 379,
                                    "end": 641
                                  },
                                  "start": 338,
                                  "end": 641
                                },
                                "start": 336,
                                "end": 641
                              },
                              "start": 334,
                              "end": 641
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSImportType",
                              "source": {
                                "type": "Literal",
                                "value": "./middleware",
                                "raw": "\"./middleware\"",
                                "start": 653,
                                "end": 667
                              },
                              "options": null,
                              "qualifier": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MiddlewareBuilder",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 669,
                                "end": 686
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
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
                                          "name": "_config",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 701,
                                          "end": 708
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "RootConfig",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 710,
                                              "end": 720
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
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
                                                        "name": "errorShape",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 739,
                                                        "end": 749
                                                      },
                                                      "typeAnnotation": {
                                                        "type": "TSTypeAnnotation",
                                                        "typeAnnotation": {
                                                          "type": "TSTypeReference",
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ErrorFormatterShape",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 751,
                                                            "end": 770
                                                          },
                                                          "typeArguments": {
                                                            "type": "TSTypeParameterInstantiation",
                                                            "params": [
                                                              {
                                                                "type": "TSTypeReference",
                                                                "typeName": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "PickFirstDefined",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 771,
                                                                  "end": 787
                                                                },
                                                                "typeArguments": {
                                                                  "type": "TSTypeParameterInstantiation",
                                                                  "params": [
                                                                    {
                                                                      "type": "TSIndexedAccessType",
                                                                      "objectType": {
                                                                        "type": "TSTypeReference",
                                                                        "typeName": {
                                                                          "type": "Identifier",
                                                                          "decorators": [],
                                                                          "name": "TOptions",
                                                                          "optional": false,
                                                                          "typeAnnotation": null,
                                                                          "start": 788,
                                                                          "end": 796
                                                                        },
                                                                        "typeArguments": null,
                                                                        "start": 788,
                                                                        "end": 796
                                                                      },
                                                                      "indexType": {
                                                                        "type": "TSLiteralType",
                                                                        "literal": {
                                                                          "type": "Literal",
                                                                          "value": "errorFormatter",
                                                                          "raw": "\"errorFormatter\"",
                                                                          "start": 797,
                                                                          "end": 813
                                                                        },
                                                                        "start": 797,
                                                                        "end": 813
                                                                      },
                                                                      "start": 788,
                                                                      "end": 814
                                                                    },
                                                                    {
                                                                      "type": "TSTypeReference",
                                                                      "typeName": {
                                                                        "type": "Identifier",
                                                                        "decorators": [],
                                                                        "name": "ErrorFormatter",
                                                                        "optional": false,
                                                                        "typeAnnotation": null,
                                                                        "start": 816,
                                                                        "end": 830
                                                                      },
                                                                      "typeArguments": {
                                                                        "type": "TSTypeParameterInstantiation",
                                                                        "params": [
                                                                          {
                                                                            "type": "TSConditionalType",
                                                                            "checkType": {
                                                                              "type": "TSIndexedAccessType",
                                                                              "objectType": {
                                                                                "type": "TSTypeReference",
                                                                                "typeName": {
                                                                                  "type": "Identifier",
                                                                                  "decorators": [],
                                                                                  "name": "TParams",
                                                                                  "optional": false,
                                                                                  "typeAnnotation": null,
                                                                                  "start": 831,
                                                                                  "end": 838
                                                                                },
                                                                                "typeArguments": null,
                                                                                "start": 831,
                                                                                "end": 838
                                                                              },
                                                                              "indexType": {
                                                                                "type": "TSLiteralType",
                                                                                "literal": {
                                                                                  "type": "Literal",
                                                                                  "value": "ctx",
                                                                                  "raw": "\"ctx\"",
                                                                                  "start": 839,
                                                                                  "end": 844
                                                                                },
                                                                                "start": 839,
                                                                                "end": 844
                                                                              },
                                                                              "start": 831,
                                                                              "end": 845
                                                                            },
                                                                            "extendsType": {
                                                                              "type": "TSObjectKeyword",
                                                                              "start": 854,
                                                                              "end": 860
                                                                            },
                                                                            "trueType": {
                                                                              "type": "TSIndexedAccessType",
                                                                              "objectType": {
                                                                                "type": "TSTypeReference",
                                                                                "typeName": {
                                                                                  "type": "Identifier",
                                                                                  "decorators": [],
                                                                                  "name": "TParams",
                                                                                  "optional": false,
                                                                                  "typeAnnotation": null,
                                                                                  "start": 863,
                                                                                  "end": 870
                                                                                },
                                                                                "typeArguments": null,
                                                                                "start": 863,
                                                                                "end": 870
                                                                              },
                                                                              "indexType": {
                                                                                "type": "TSLiteralType",
                                                                                "literal": {
                                                                                  "type": "Literal",
                                                                                  "value": "ctx",
                                                                                  "raw": "\"ctx\"",
                                                                                  "start": 871,
                                                                                  "end": 876
                                                                                },
                                                                                "start": 871,
                                                                                "end": 876
                                                                              },
                                                                              "start": 863,
                                                                              "end": 877
                                                                            },
                                                                            "falseType": {
                                                                              "type": "TSObjectKeyword",
                                                                              "start": 880,
                                                                              "end": 886
                                                                            },
                                                                            "start": 831,
                                                                            "end": 886
                                                                          },
                                                                          {
                                                                            "type": "TSTypeReference",
                                                                            "typeName": {
                                                                              "type": "Identifier",
                                                                              "decorators": [],
                                                                              "name": "DefaultErrorShape",
                                                                              "optional": false,
                                                                              "typeAnnotation": null,
                                                                              "start": 888,
                                                                              "end": 905
                                                                            },
                                                                            "typeArguments": null,
                                                                            "start": 888,
                                                                            "end": 905
                                                                          }
                                                                        ],
                                                                        "start": 830,
                                                                        "end": 906
                                                                      },
                                                                      "start": 816,
                                                                      "end": 906
                                                                    }
                                                                  ],
                                                                  "start": 787,
                                                                  "end": 907
                                                                },
                                                                "start": 771,
                                                                "end": 907
                                                              }
                                                            ],
                                                            "start": 770,
                                                            "end": 908
                                                          },
                                                          "start": 751,
                                                          "end": 908
                                                        },
                                                        "start": 749,
                                                        "end": 908
                                                      },
                                                      "accessibility": null,
                                                      "static": false,
                                                      "start": 739,
                                                      "end": 909
                                                    }
                                                  ],
                                                  "start": 721,
                                                  "end": 923
                                                }
                                              ],
                                              "start": 720,
                                              "end": 924
                                            },
                                            "start": 710,
                                            "end": 924
                                          },
                                          "start": 708,
                                          "end": 924
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 701,
                                        "end": 925
                                      }
                                    ],
                                    "start": 687,
                                    "end": 935
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TNewParams",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 937,
                                      "end": 947
                                    },
                                    "typeArguments": null,
                                    "start": 937,
                                    "end": 947
                                  }
                                ],
                                "start": 686,
                                "end": 948
                              },
                              "start": 646,
                              "end": 948
                            },
                            "start": 643,
                            "end": 948
                          },
                          "start": 293,
                          "end": 948
                        },
                        "start": 291,
                        "end": 948
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 281,
                      "end": 949
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "router",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 958,
                        "end": 964
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 966,
                          "end": 968
                        },
                        "start": 964,
                        "end": 968
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 958,
                      "end": 969
                    }
                  ],
                  "start": 248,
                  "end": 975
                },
                "start": 246,
                "end": 975
              },
              "body": null,
              "expression": false,
              "start": 206,
              "end": 976
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 200,
            "end": 976
          }
        ],
        "start": 194,
        "end": 978
      },
      "abstract": false,
      "declare": true,
      "start": 159,
      "end": 978
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
              "name": "initTRPC",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TRPCBuilder",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1012,
                    "end": 1023
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSObjectKeyword",
                        "start": 1024,
                        "end": 1030
                      }
                    ],
                    "start": 1023,
                    "end": 1031
                  },
                  "start": 1012,
                  "end": 1031
                },
                "start": 1010,
                "end": 1031
              },
              "start": 1002,
              "end": 1031
            },
            "init": null,
            "definite": false,
            "start": 1002,
            "end": 1031
          }
        ],
        "declare": true,
        "start": 988,
        "end": 1032
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 981,
      "end": 1032
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1033,
      "end": 1043
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1043
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
    "value": "RootConfig",
    "start": 9,
    "end": 19,
    "range": [
      9,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "String",
    "value": "'./internals/config'",
    "start": 27,
    "end": 47,
    "range": [
      27,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 49,
    "end": 55,
    "range": [
      49,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "ErrorFormatterShape",
    "start": 58,
    "end": 77,
    "range": [
      58,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "PickFirstDefined",
    "start": 79,
    "end": 95,
    "range": [
      79,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "ErrorFormatter",
    "start": 97,
    "end": 111,
    "range": [
      97,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "DefaultErrorShape",
    "start": 113,
    "end": 130,
    "range": [
      113,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 133,
    "end": 137,
    "range": [
      133,
      137
    ]
  },
  {
    "type": "String",
    "value": "'./internals/utils'",
    "start": 138,
    "end": 157,
    "range": [
      138,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 159,
    "end": 166,
    "range": [
      159,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 167,
    "end": 172,
    "range": [
      167,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "TRPCBuilder",
    "start": 173,
    "end": 184,
    "range": [
      173,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 185,
    "end": 192,
    "range": [
      185,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "TOptions",
    "start": 207,
    "end": 215,
    "range": [
      207,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 216,
    "end": 223,
    "range": [
      216,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 224,
    "end": 230,
    "range": [
      224,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 231,
    "end": 237,
    "range": [
      231,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 239,
    "end": 242,
    "range": [
      239,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "procedure",
    "start": 258,
    "end": 267,
    "range": [
      258,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 281,
    "end": 291,
    "range": [
      281,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "TNewParams",
    "start": 294,
    "end": 304,
    "range": [
      294,
      304
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 305,
    "end": 312,
    "range": [
      305,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 313,
    "end": 319,
    "range": [
      313,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 320,
    "end": 326,
    "range": [
      320,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 328,
    "end": 331,
    "range": [
      328,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 334,
    "end": 336,
    "range": [
      334,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 338,
    "end": 344,
    "range": [
      338,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "String",
    "value": "\"./middleware\"",
    "start": 345,
    "end": 359,
    "range": [
      345,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "MiddlewareFunction",
    "start": 361,
    "end": 379,
    "range": [
      361,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "_config",
    "start": 394,
    "end": 401,
    "range": [
      394,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "RootConfig",
    "start": 403,
    "end": 413,
    "range": [
      403,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "errorShape",
    "start": 432,
    "end": 442,
    "range": [
      432,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "ErrorFormatterShape",
    "start": 444,
    "end": 463,
    "range": [
      444,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "PickFirstDefined",
    "start": 464,
    "end": 480,
    "range": [
      464,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "TOptions",
    "start": 481,
    "end": 489,
    "range": [
      481,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "String",
    "value": "\"errorFormatter\"",
    "start": 490,
    "end": 506,
    "range": [
      490,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "ErrorFormatter",
    "start": 509,
    "end": 523,
    "range": [
      509,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 524,
    "end": 531,
    "range": [
      524,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "String",
    "value": "\"ctx\"",
    "start": 532,
    "end": 537,
    "range": [
      532,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 539,
    "end": 546,
    "range": [
      539,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 547,
    "end": 553,
    "range": [
      547,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 556,
    "end": 563,
    "range": [
      556,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "String",
    "value": "\"ctx\"",
    "start": 564,
    "end": 569,
    "range": [
      564,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 573,
    "end": 579,
    "range": [
      573,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "DefaultErrorShape",
    "start": 581,
    "end": 598,
    "range": [
      581,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "TNewParams",
    "start": 630,
    "end": 640,
    "range": [
      630,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 643,
    "end": 645,
    "range": [
      643,
      645
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 646,
    "end": 652,
    "range": [
      646,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "String",
    "value": "\"./middleware\"",
    "start": 653,
    "end": 667,
    "range": [
      653,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "MiddlewareBuilder",
    "start": 669,
    "end": 686,
    "range": [
      669,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "_config",
    "start": 701,
    "end": 708,
    "range": [
      701,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "RootConfig",
    "start": 710,
    "end": 720,
    "range": [
      710,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "errorShape",
    "start": 739,
    "end": 749,
    "range": [
      739,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "ErrorFormatterShape",
    "start": 751,
    "end": 770,
    "range": [
      751,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "PickFirstDefined",
    "start": 771,
    "end": 787,
    "range": [
      771,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "TOptions",
    "start": 788,
    "end": 796,
    "range": [
      788,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "String",
    "value": "\"errorFormatter\"",
    "start": 797,
    "end": 813,
    "range": [
      797,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "ErrorFormatter",
    "start": 816,
    "end": 830,
    "range": [
      816,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 831,
    "end": 838,
    "range": [
      831,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "String",
    "value": "\"ctx\"",
    "start": 839,
    "end": 844,
    "range": [
      839,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 846,
    "end": 853,
    "range": [
      846,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 854,
    "end": 860,
    "range": [
      854,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 863,
    "end": 870,
    "range": [
      863,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "String",
    "value": "\"ctx\"",
    "start": 871,
    "end": 876,
    "range": [
      871,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 880,
    "end": 886,
    "range": [
      880,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "DefaultErrorShape",
    "start": 888,
    "end": 905,
    "range": [
      888,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "TNewParams",
    "start": 937,
    "end": 947,
    "range": [
      937,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "router",
    "start": 958,
    "end": 964,
    "range": [
      958,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976,
    "range": [
      975,
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
    "type": "Keyword",
    "value": "export",
    "start": 981,
    "end": 987,
    "range": [
      981,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 988,
    "end": 995,
    "range": [
      988,
      995
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 996,
    "end": 1001,
    "range": [
      996,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "initTRPC",
    "start": 1002,
    "end": 1010,
    "range": [
      1002,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "TRPCBuilder",
    "start": 1012,
    "end": 1023,
    "range": [
      1012,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1024,
    "end": 1030,
    "range": [
      1024,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1033,
    "end": 1039,
    "range": [
      1033,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
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
            "name": "initTRPC",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "initTRPC",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@trpc/server",
        "raw": "\"@trpc/server\"",
        "start": 25,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
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
            "name": "trpc",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 52
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "initTRPC",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 63
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 70
              },
              "optional": false,
              "computed": false,
              "start": 55,
              "end": 70
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 55,
            "end": 72
          },
          "definite": false,
          "start": 48,
          "end": 72
        }
      ],
      "declare": false,
      "start": 42,
      "end": 73
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
              "name": "middleware",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 98
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "trpc",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 105
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "middleware",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 116
              },
              "optional": false,
              "computed": false,
              "start": 101,
              "end": 116
            },
            "definite": false,
            "start": 88,
            "end": 116
          }
        ],
        "declare": false,
        "start": 82,
        "end": 117
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 75,
      "end": 117
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
              "name": "router",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 137
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "trpc",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 144
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "router",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 151
              },
              "optional": false,
              "computed": false,
              "start": 140,
              "end": 151
            },
            "definite": false,
            "start": 131,
            "end": 151
          }
        ],
        "declare": false,
        "start": 125,
        "end": 152
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 118,
      "end": 152
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
              "name": "publicProcedure",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 181
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "trpc",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 188
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "procedure",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 198
              },
              "optional": false,
              "computed": false,
              "start": 184,
              "end": 198
            },
            "definite": false,
            "start": 166,
            "end": 198
          }
        ],
        "declare": false,
        "start": 160,
        "end": 199
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 153,
      "end": 199
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 199
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
    "value": "initTRPC",
    "start": 9,
    "end": 17,
    "range": [
      9,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24,
    "range": [
      20,
      24
    ]
  },
  {
    "type": "String",
    "value": "\"@trpc/server\"",
    "start": 25,
    "end": 39,
    "range": [
      25,
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
    "value": "const",
    "start": 42,
    "end": 47,
    "range": [
      42,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "trpc",
    "start": 48,
    "end": 52,
    "range": [
      48,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "initTRPC",
    "start": 55,
    "end": 63,
    "range": [
      55,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
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
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 75,
    "end": 81,
    "range": [
      75,
      81
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 88,
    "end": 98,
    "range": [
      88,
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
    "value": "trpc",
    "start": 101,
    "end": 105,
    "range": [
      101,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 106,
    "end": 116,
    "range": [
      106,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
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
    "value": "const",
    "start": 125,
    "end": 130,
    "range": [
      125,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "router",
    "start": 131,
    "end": 137,
    "range": [
      131,
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
    "value": "trpc",
    "start": 140,
    "end": 144,
    "range": [
      140,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "router",
    "start": 145,
    "end": 151,
    "range": [
      145,
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
    "value": "export",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 160,
    "end": 165,
    "range": [
      160,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProcedure",
    "start": 166,
    "end": 181,
    "range": [
      166,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "trpc",
    "start": 184,
    "end": 188,
    "range": [
      184,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "procedure",
    "start": 189,
    "end": 198,
    "range": [
      189,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  }
]
```
