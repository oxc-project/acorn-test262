__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 461,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 24,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 64,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 42,
            "end": 62,
            "parameters": [
              {
                "type": "Identifier",
                "start": 43,
                "end": 52,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 44,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 46,
                    "end": 52
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
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
      "start": 65,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 105,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 83,
            "end": 103,
            "parameters": [
              {
                "type": "Identifier",
                "start": 84,
                "end": 93,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 87,
                    "end": 93
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
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
      "start": 106,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 126,
          "end": 127,
          "expression": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 129,
          "end": 130,
          "expression": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
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
        "start": 131,
        "end": 134,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 153,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 154,
        "end": 182,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 160,
            "end": 180,
            "parameters": [
              {
                "type": "Identifier",
                "start": 161,
                "end": 170,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 179,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 173,
                "end": 179
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
      "start": 183,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 194,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 203,
          "end": 204,
          "expression": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 206,
          "end": 207,
          "expression": {
            "type": "Identifier",
            "start": 206,
            "end": 207,
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
        "start": 208,
        "end": 211,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 256,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 268,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 269,
        "end": 297,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 275,
            "end": 295,
            "parameters": [
              {
                "type": "Identifier",
                "start": 276,
                "end": 285,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 277,
                  "end": 285,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 279,
                    "end": 285
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 294,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 288,
                "end": 294
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
      "start": 298,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 310,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 311,
        "end": 339,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 317,
            "end": 337,
            "parameters": [
              {
                "type": "Identifier",
                "start": 318,
                "end": 327,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 319,
                  "end": 327,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 321,
                    "end": 327
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 328,
              "end": 336,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 330,
                "end": 336
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
      "start": 340,
      "end": 371,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 352,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 361,
          "end": 363,
          "expression": {
            "type": "Identifier",
            "start": 361,
            "end": 363,
            "name": "A2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 365,
          "end": 367,
          "expression": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "name": "B2",
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
        "start": 368,
        "end": 371,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 379,
      "end": 420,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 391,
        "name": "D2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 392,
        "end": 420,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 398,
            "end": 418,
            "parameters": [
              {
                "type": "Identifier",
                "start": 399,
                "end": 408,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 400,
                  "end": 408,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 402,
                    "end": 408
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 409,
              "end": 417,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 411,
                "end": 417
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
      "start": 421,
      "end": 452,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 433,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 442,
          "end": 444,
          "expression": {
            "type": "Identifier",
            "start": 442,
            "end": 444,
            "name": "A2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 446,
          "end": 448,
          "expression": {
            "type": "Identifier",
            "start": 446,
            "end": 448,
            "name": "D2",
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
        "start": 449,
        "end": 452,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
