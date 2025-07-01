__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  },
                  "start": 65,
                  "end": 73
                },
                "start": 64,
                "end": 73
              }
            ],
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
                      "start": 86,
                      "end": 87
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 86,
                    "end": 88
                  }
                ],
                "start": 76,
                "end": 94
              },
              "start": 74,
              "end": 94
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 63,
            "end": 95
          }
        ],
        "start": 57,
        "end": 97
      },
      "declare": false,
      "start": 45,
      "end": 97
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 120,
                    "end": 126
                  },
                  "start": 118,
                  "end": 126
                },
                "start": 117,
                "end": 126
              }
            ],
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
                      "start": 139,
                      "end": 140
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 139,
                    "end": 141
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
                      "start": 150,
                      "end": 151
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 150,
                    "end": 152
                  }
                ],
                "start": 129,
                "end": 158
              },
              "start": 127,
              "end": 158
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 116,
            "end": 159
          }
        ],
        "start": 110,
        "end": 161
      },
      "declare": false,
      "start": 98,
      "end": 161
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 173
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "typeArguments": null,
          "start": 182,
          "end": 183
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 186
          },
          "typeArguments": null,
          "start": 185,
          "end": 186
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 187,
        "end": 190
      },
      "declare": false,
      "start": 162,
      "end": 190
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 209
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 220,
                    "end": 226
                  },
                  "start": 218,
                  "end": 226
                },
                "start": 217,
                "end": 226
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 229,
                "end": 231
              },
              "start": 227,
              "end": 231
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 216,
            "end": 232
          }
        ],
        "start": 210,
        "end": 234
      },
      "declare": false,
      "start": 198,
      "end": 234
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 246
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 256
          },
          "typeArguments": null,
          "start": 255,
          "end": 256
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 259
          },
          "typeArguments": null,
          "start": 258,
          "end": 259
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 260,
        "end": 263
      },
      "declare": false,
      "start": 235,
      "end": 263
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 285
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 295
          },
          "typeArguments": null,
          "start": 294,
          "end": 295
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 298
          },
          "typeArguments": null,
          "start": 297,
          "end": 298
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 309,
                    "end": 315
                  },
                  "start": 307,
                  "end": 315
                },
                "start": 306,
                "end": 315
              }
            ],
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
                      "start": 328,
                      "end": 329
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 328,
                    "end": 330
                  }
                ],
                "start": 318,
                "end": 336
              },
              "start": 316,
              "end": 336
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 305,
            "end": 337
          }
        ],
        "start": 299,
        "end": 339
      },
      "declare": false,
      "start": 274,
      "end": 339
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 392
}
```
