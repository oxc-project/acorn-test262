__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 392,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 97,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 63,
            "end": 95,
            "parameters": [
              {
                "type": "Identifier",
                "start": 64,
                "end": 73,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 65,
                  "end": 73,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 76,
                "end": 94,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 86,
                    "end": 88,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 87,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 98,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 110,
        "end": 161,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 116,
            "end": 159,
            "parameters": [
              {
                "type": "Identifier",
                "start": 117,
                "end": 126,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 118,
                  "end": 126,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 120,
                    "end": 126
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 129,
                "end": 158,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 139,
                    "end": 141,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 150,
                    "end": 152,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 162,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 182,
          "end": 183,
          "expression": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 185,
          "end": 186,
          "expression": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 187,
        "end": 190,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 198,
      "end": 234,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 209,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 210,
        "end": 234,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 216,
            "end": 232,
            "parameters": [
              {
                "type": "Identifier",
                "start": 217,
                "end": 226,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 218,
                  "end": 226,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 220,
                    "end": 226
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 231,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 229,
                "end": 231,
                "members": []
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 235,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 246,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 255,
          "end": 256,
          "expression": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 258,
          "end": 259,
          "expression": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 260,
        "end": 263,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 274,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 285,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 294,
          "end": 295,
          "expression": {
            "type": "Identifier",
            "start": 294,
            "end": 295,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 297,
          "end": 298,
          "expression": {
            "type": "Identifier",
            "start": 297,
            "end": 298,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 299,
        "end": 339,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 305,
            "end": 337,
            "parameters": [
              {
                "type": "Identifier",
                "start": 306,
                "end": 315,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 307,
                  "end": 315,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 309,
                    "end": 315
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 316,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 318,
                "end": 336,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 328,
                    "end": 330,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 329,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
