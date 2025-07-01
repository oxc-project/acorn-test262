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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 183,
                "end": 185
              },
              "start": 181,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 180,
            "end": 186
          }
        ],
        "start": 174,
        "end": 188
      },
      "declare": false,
      "start": 162,
      "end": 188
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 201
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
            "start": 210,
            "end": 211
          },
          "typeArguments": null,
          "start": 210,
          "end": 211
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 214
          },
          "typeArguments": null,
          "start": 213,
          "end": 214
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 217
          },
          "typeArguments": null,
          "start": 216,
          "end": 217
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 218,
        "end": 221
      },
      "declare": false,
      "start": 190,
      "end": 221
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 278
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
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 285,
              "end": 286
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 288,
                "end": 290
              },
              "start": 286,
              "end": 290
            },
            "accessibility": null,
            "static": false,
            "start": 285,
            "end": 291
          }
        ],
        "start": 279,
        "end": 293
      },
      "declare": false,
      "start": 267,
      "end": 293
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 305,
        "end": 306
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
            "start": 315,
            "end": 316
          },
          "typeArguments": null,
          "start": 315,
          "end": 316
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 319
          },
          "typeArguments": null,
          "start": 318,
          "end": 319
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 322
          },
          "typeArguments": null,
          "start": 321,
          "end": 322
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 323,
        "end": 326
      },
      "declare": false,
      "start": 295,
      "end": 326
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 386
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
            "start": 395,
            "end": 396
          },
          "typeArguments": null,
          "start": 395,
          "end": 396
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 399
          },
          "typeArguments": null,
          "start": 398,
          "end": 399
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 402
          },
          "typeArguments": null,
          "start": 401,
          "end": 402
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 405
          },
          "typeArguments": null,
          "start": 404,
          "end": 405
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 406,
        "end": 409
      },
      "declare": false,
      "start": 375,
      "end": 409
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 454
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
            "start": 463,
            "end": 464
          },
          "typeArguments": null,
          "start": 463,
          "end": 464
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 467
          },
          "typeArguments": null,
          "start": 466,
          "end": 467
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 468,
        "end": 471
      },
      "declare": false,
      "start": 443,
      "end": 471
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 535
}
```
