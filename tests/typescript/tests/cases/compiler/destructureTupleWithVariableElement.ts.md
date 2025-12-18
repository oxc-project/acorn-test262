__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonEmptyStringArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 46
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 50,
            "end": 56
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 66
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  }
                ],
                "start": 66,
                "end": 74
              },
              "start": 61,
              "end": 74
            },
            "start": 58,
            "end": 74
          }
        ],
        "start": 49,
        "end": 75
      },
      "declare": false,
      "start": 22,
      "end": 75
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
            "name": "strings",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonEmptyStringArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 111
                },
                "typeArguments": null,
                "start": 92,
                "end": 111
              },
              "start": 90,
              "end": 111
            },
            "start": 83,
            "end": 111
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "one",
                "raw": "'one'",
                "start": 115,
                "end": 120
              },
              {
                "type": "Literal",
                "value": "two",
                "raw": "'two'",
                "start": 122,
                "end": 127
              }
            ],
            "start": 114,
            "end": 128
          },
          "definite": false,
          "start": 83,
          "end": 128
        }
      ],
      "declare": false,
      "start": 77,
      "end": 128
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s0",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 138
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 142
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 146
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 147
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strings",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 157
          },
          "definite": false,
          "start": 135,
          "end": 157
        }
      ],
      "declare": false,
      "start": 129,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s0",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 162
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 174
          },
          "optional": false,
          "computed": false,
          "start": 160,
          "end": 174
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 160,
        "end": 176
      },
      "directive": null,
      "start": 160,
      "end": 176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 191
          },
          "optional": false,
          "computed": false,
          "start": 177,
          "end": 191
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 177,
        "end": 193
      },
      "directive": null,
      "start": 177,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 197
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 209
          },
          "optional": false,
          "computed": false,
          "start": 195,
          "end": 209
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 195,
        "end": 211
      },
      "directive": null,
      "start": 195,
      "end": 211
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
            "name": "strings2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 238,
                    "end": 244
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 254
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 255,
                            "end": 261
                          }
                        ],
                        "start": 254,
                        "end": 262
                      },
                      "start": 249,
                      "end": 262
                    },
                    "start": 246,
                    "end": 262
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 264,
                    "end": 270
                  }
                ],
                "start": 237,
                "end": 271
              },
              "start": 235,
              "end": 271
            },
            "start": 227,
            "end": 271
          },
          "init": null,
          "definite": false,
          "start": 227,
          "end": 271
        }
      ],
      "declare": true,
      "start": 213,
      "end": 271
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 282
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 286
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 290
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 291
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strings2",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 302
          },
          "definite": false,
          "start": 279,
          "end": 302
        }
      ],
      "declare": false,
      "start": 273,
      "end": 303
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 307
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 319
          },
          "optional": false,
          "computed": false,
          "start": 305,
          "end": 319
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 305,
        "end": 321
      },
      "directive": null,
      "start": 305,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 324
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 336
          },
          "optional": false,
          "computed": false,
          "start": 322,
          "end": 336
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 322,
        "end": 338
      },
      "directive": null,
      "start": 322,
      "end": 338
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 342
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 354
          },
          "optional": false,
          "computed": false,
          "start": 340,
          "end": 354
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 340,
        "end": 356
      },
      "directive": null,
      "start": 340,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 356
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "NonEmptyStringArray",
    "start": 27,
    "end": 46,
    "range": [
      27,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 50,
    "end": 56,
    "range": [
      50,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 58,
    "end": 61,
    "range": [
      58,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 61,
    "end": 66,
    "range": [
      61,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 67,
    "end": 73,
    "range": [
      67,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 77,
    "end": 82,
    "range": [
      77,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 83,
    "end": 90,
    "range": [
      83,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "NonEmptyStringArray",
    "start": 92,
    "end": 111,
    "range": [
      92,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "String",
    "value": "'one'",
    "start": 115,
    "end": 120,
    "range": [
      115,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 122,
    "end": 127,
    "range": [
      122,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 129,
    "end": 134,
    "range": [
      129,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 136,
    "end": 138,
    "range": [
      136,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 140,
    "end": 142,
    "range": [
      140,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 144,
    "end": 146,
    "range": [
      144,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 150,
    "end": 157,
    "range": [
      150,
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
    "value": "s0",
    "start": 160,
    "end": 162,
    "range": [
      160,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 163,
    "end": 174,
    "range": [
      163,
      174
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
    "type": "Identifier",
    "value": "s1",
    "start": 177,
    "end": 179,
    "range": [
      177,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 180,
    "end": 191,
    "range": [
      180,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
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
    "value": "toUpperCase",
    "start": 198,
    "end": 209,
    "range": [
      198,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 213,
    "end": 220,
    "range": [
      213,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 221,
    "end": 226,
    "range": [
      221,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "strings2",
    "start": 227,
    "end": 235,
    "range": [
      227,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 238,
    "end": 244,
    "range": [
      238,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 246,
    "end": 249,
    "range": [
      246,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 249,
    "end": 254,
    "range": [
      249,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 255,
    "end": 261,
    "range": [
      255,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270,
    "range": [
      264,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 273,
    "end": 278,
    "range": [
      273,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 280,
    "end": 282,
    "range": [
      280,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 284,
    "end": 286,
    "range": [
      284,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 288,
    "end": 290,
    "range": [
      288,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "strings2",
    "start": 294,
    "end": 302,
    "range": [
      294,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 305,
    "end": 307,
    "range": [
      305,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 308,
    "end": 319,
    "range": [
      308,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 322,
    "end": 324,
    "range": [
      322,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 325,
    "end": 336,
    "range": [
      325,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 340,
    "end": 342,
    "range": [
      340,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 343,
    "end": 354,
    "range": [
      343,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  }
]
```
