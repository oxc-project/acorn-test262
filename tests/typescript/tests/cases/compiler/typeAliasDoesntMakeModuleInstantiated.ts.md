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
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Selector",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 124
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 127,
                  "end": 133
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  },
                  "start": 135,
                  "end": 143
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 153
                  },
                  "typeArguments": null,
                  "start": 145,
                  "end": 153
                }
              ],
              "start": 127,
              "end": 153
            },
            "declare": false,
            "start": 111,
            "end": 154
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IStatic",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 184
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "selector",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 206,
                            "end": 209
                          },
                          "start": 204,
                          "end": 209
                        },
                        "start": 196,
                        "end": 209
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IInstance",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 227,
                          "end": 236
                        },
                        "typeArguments": null,
                        "start": 227,
                        "end": 236
                      },
                      "start": 225,
                      "end": 236
                    },
                    "start": 195,
                    "end": 237
                  }
                ],
                "start": 185,
                "end": 243
              },
              "declare": false,
              "start": 167,
              "end": 243
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 160,
            "end": 243
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 274
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 275,
                "end": 278
              },
              "declare": false,
              "start": 255,
              "end": 278
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 248,
            "end": 278
          }
        ],
        "start": 20,
        "end": 280
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 280
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
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
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 297
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IStatic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 305
                  },
                  "start": 296,
                  "end": 305
                },
                "typeArguments": null,
                "start": 296,
                "end": 305
              },
              "start": 294,
              "end": 305
            },
            "start": 293,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 293,
          "end": 305
        }
      ],
      "declare": true,
      "start": 281,
      "end": 306
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 368
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
    "value": "m",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 111,
    "end": 115,
    "range": [
      111,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "Selector",
    "start": 116,
    "end": 124,
    "range": [
      116,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133,
    "range": [
      127,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 135,
    "end": 141,
    "range": [
      135,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 145,
    "end": 153,
    "range": [
      145,
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
    "type": "Keyword",
    "value": "export",
    "start": 160,
    "end": 166,
    "range": [
      160,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 167,
    "end": 176,
    "range": [
      167,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "IStatic",
    "start": 177,
    "end": 184,
    "range": [
      177,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "selector",
    "start": 196,
    "end": 204,
    "range": [
      196,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 206,
    "end": 209,
    "range": [
      206,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "IInstance",
    "start": 227,
    "end": 236,
    "range": [
      227,
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
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 248,
    "end": 254,
    "range": [
      248,
      254
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 255,
    "end": 264,
    "range": [
      255,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "IInstance",
    "start": 265,
    "end": 274,
    "range": [
      265,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 281,
    "end": 288,
    "range": [
      281,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 289,
    "end": 292,
    "range": [
      289,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "IStatic",
    "start": 298,
    "end": 305,
    "range": [
      298,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  }
]
```
