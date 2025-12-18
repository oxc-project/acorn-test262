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
        "name": "MyRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 22
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 38,
              "end": 41
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 29,
            "end": 41
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 51,
                  "end": 58
                },
                "start": 49,
                "end": 58
              },
              "body": null,
              "expression": false,
              "start": 47,
              "end": 59
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 46,
            "end": 59
          }
        ],
        "start": 23,
        "end": 61
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 61
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MySet",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 82
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TSet",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 87
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyRecord",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 104
              },
              "typeArguments": null,
              "start": 96,
              "end": 104
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 83,
            "end": 104
          }
        ],
        "start": 82,
        "end": 105
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 123
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TSet",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 131
                  },
                  "typeArguments": null,
                  "start": 127,
                  "end": 131
                },
                "start": 125,
                "end": 131
              },
              "body": null,
              "expression": false,
              "start": 123,
              "end": 132
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 112,
            "end": 132
          }
        ],
        "start": 106,
        "end": 134
      },
      "abstract": false,
      "declare": true,
      "start": 63,
      "end": 134
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DS",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 143
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TRec",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 148
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyRecord",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 165
                  },
                  "typeArguments": null,
                  "start": 157,
                  "end": 165
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 176,
                              "end": 182
                            },
                            "start": 174,
                            "end": 182
                          },
                          "start": 171,
                          "end": 182
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 185,
                          "end": 192
                        },
                        "start": 183,
                        "end": 192
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 170,
                      "end": 192
                    }
                  ],
                  "start": 168,
                  "end": 194
                }
              ],
              "start": 157,
              "end": 194
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 144,
            "end": 194
          }
        ],
        "start": 143,
        "end": 195
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 202
          },
          "typeArguments": null,
          "start": 198,
          "end": 202
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyRecord",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 219
          },
          "typeArguments": null,
          "start": 211,
          "end": 219
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MySet",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 227
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TRec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 232
                },
                "typeArguments": null,
                "start": 228,
                "end": 232
              }
            ],
            "start": 227,
            "end": 233
          },
          "start": 222,
          "end": 233
        },
        "falseType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TRec",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 240
            },
            "typeArguments": null,
            "start": 236,
            "end": 240
          },
          "start": 236,
          "end": 242
        },
        "start": 198,
        "end": 242
      },
      "declare": false,
      "start": 136,
      "end": 243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 243
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
    "value": "class",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "MyRecord",
    "start": 14,
    "end": 22,
    "range": [
      14,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 29,
    "end": 36,
    "range": [
      29,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 51,
    "end": 58,
    "range": [
      51,
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
    "type": "Identifier",
    "value": "declare",
    "start": 63,
    "end": 70,
    "range": [
      63,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 71,
    "end": 76,
    "range": [
      71,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "MySet",
    "start": 77,
    "end": 82,
    "range": [
      77,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "TSet",
    "start": 83,
    "end": 87,
    "range": [
      83,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 88,
    "end": 95,
    "range": [
      88,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "MyRecord",
    "start": 96,
    "end": 104,
    "range": [
      96,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
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
    "type": "Keyword",
    "value": "public",
    "start": 112,
    "end": 118,
    "range": [
      112,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 119,
    "end": 123,
    "range": [
      119,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125,
    "range": [
      124,
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
    "type": "Identifier",
    "value": "TSet",
    "start": 127,
    "end": 131,
    "range": [
      127,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 136,
    "end": 140,
    "range": [
      136,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "DS",
    "start": 141,
    "end": 143,
    "range": [
      141,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "TRec",
    "start": 144,
    "end": 148,
    "range": [
      144,
      148
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 149,
    "end": 156,
    "range": [
      149,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "MyRecord",
    "start": 157,
    "end": 165,
    "range": [
      157,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 171,
    "end": 174,
    "range": [
      171,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 176,
    "end": 182,
    "range": [
      176,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
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
    "value": "unknown",
    "start": 185,
    "end": 192,
    "range": [
      185,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "TRec",
    "start": 198,
    "end": 202,
    "range": [
      198,
      202
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 203,
    "end": 210,
    "range": [
      203,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "MyRecord",
    "start": 211,
    "end": 219,
    "range": [
      211,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "MySet",
    "start": 222,
    "end": 227,
    "range": [
      222,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "TRec",
    "start": 228,
    "end": 232,
    "range": [
      228,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "TRec",
    "start": 236,
    "end": 240,
    "range": [
      236,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
