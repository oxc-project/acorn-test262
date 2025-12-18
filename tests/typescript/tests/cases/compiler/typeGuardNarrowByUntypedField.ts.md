__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasOwnProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 31
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 53
              },
              "typeArguments": null,
              "start": 42,
              "end": 53
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 32,
            "end": 53
          }
        ],
        "start": 31,
        "end": 54
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 63,
              "end": 65
            },
            "start": 61,
            "end": 65
          },
          "start": 55,
          "end": 65
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "property",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 78
              },
              "typeArguments": null,
              "start": 77,
              "end": 78
            },
            "start": 75,
            "end": 78
          },
          "start": 67,
          "end": 78
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 87
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 104
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 109
                },
                "typeArguments": null,
                "start": 108,
                "end": 109
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 112,
                "end": 119
              },
              "optional": false,
              "readonly": true,
              "start": 91,
              "end": 121
            },
            "start": 91,
            "end": 121
          },
          "start": 81,
          "end": 121
        },
        "start": 79,
        "end": 121
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 122
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
            "name": "arrayLikeOrIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ArrayLike",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 167
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 168,
                          "end": 171
                        }
                      ],
                      "start": 167,
                      "end": 172
                    },
                    "start": 158,
                    "end": 172
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 183
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 184,
                          "end": 187
                        }
                      ],
                      "start": 183,
                      "end": 188
                    },
                    "start": 175,
                    "end": 188
                  }
                ],
                "start": 158,
                "end": 188
              },
              "start": 156,
              "end": 188
            },
            "start": 137,
            "end": 188
          },
          "init": null,
          "definite": false,
          "start": 137,
          "end": 188
        }
      ],
      "declare": true,
      "start": 123,
      "end": 189
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasOwnProperty",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 208
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arrayLikeOrIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 228
          },
          {
            "type": "Literal",
            "value": "length",
            "raw": "'length'",
            "start": 230,
            "end": 238
          }
        ],
        "optional": false,
        "start": 194,
        "end": 239
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSNumberKeyword",
                      "start": 254,
                      "end": 260
                    },
                    "start": 252,
                    "end": 260
                  },
                  "start": 251,
                  "end": 260
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arrayLikeOrIterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 282
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 289
                  },
                  "optional": false,
                  "computed": false,
                  "start": 263,
                  "end": 289
                },
                "definite": false,
                "start": 251,
                "end": 289
              }
            ],
            "declare": false,
            "start": 247,
            "end": 290
          }
        ],
        "start": 241,
        "end": 292
      },
      "alternate": null,
      "start": 190,
      "end": 292
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 292
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
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 17,
    "end": 31,
    "range": [
      17,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 34,
    "end": 41,
    "range": [
      34,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 42,
    "end": 53,
    "range": [
      42,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 55,
    "end": 61,
    "range": [
      55,
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
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 67,
    "end": 75,
    "range": [
      67,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 81,
    "end": 87,
    "range": [
      81,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 88,
    "end": 90,
    "range": [
      88,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 93,
    "end": 101,
    "range": [
      93,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 105,
    "end": 107,
    "range": [
      105,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 112,
    "end": 119,
    "range": [
      112,
      119
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
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 123,
    "end": 130,
    "range": [
      123,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136,
    "range": [
      131,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayLikeOrIterable",
    "start": 137,
    "end": 156,
    "range": [
      137,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "ArrayLike",
    "start": 158,
    "end": 167,
    "range": [
      158,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 168,
    "end": 171,
    "range": [
      168,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 175,
    "end": 183,
    "range": [
      175,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 184,
    "end": 187,
    "range": [
      184,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 190,
    "end": 192,
    "range": [
      190,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 194,
    "end": 208,
    "range": [
      194,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayLikeOrIterable",
    "start": 209,
    "end": 228,
    "range": [
      209,
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
    "type": "String",
    "value": "'length'",
    "start": 230,
    "end": 238,
    "range": [
      230,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 247,
    "end": 250,
    "range": [
      247,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 254,
    "end": 260,
    "range": [
      254,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayLikeOrIterable",
    "start": 263,
    "end": 282,
    "range": [
      263,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 283,
    "end": 289,
    "range": [
      283,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  }
]
```
