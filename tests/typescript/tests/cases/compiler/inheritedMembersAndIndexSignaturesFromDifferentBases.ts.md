__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 535,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 65,
                  "end": 73,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  }
                }
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 118,
                  "end": 126,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 120,
                    "end": 126
                  }
                }
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 174,
        "end": 188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 180,
            "end": 186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 183,
                "end": 185,
                "members": []
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 190,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 210,
          "end": 211,
          "expression": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 213,
          "end": 214,
          "expression": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 216,
          "end": 217,
          "expression": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 218,
        "end": 221,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 267,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 278,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 279,
        "end": 293,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 285,
            "end": 291,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 285,
              "end": 286,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 290,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 288,
                "end": 290,
                "members": []
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 295,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 306,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 315,
          "end": 316,
          "expression": {
            "type": "Identifier",
            "start": 315,
            "end": 316,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 318,
          "end": 319,
          "expression": {
            "type": "Identifier",
            "start": 318,
            "end": 319,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 321,
          "end": 322,
          "expression": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 323,
        "end": 326,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 375,
      "end": 409,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 386,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 395,
          "end": 396,
          "expression": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 398,
          "end": 399,
          "expression": {
            "type": "Identifier",
            "start": 398,
            "end": 399,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 401,
          "end": 402,
          "expression": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 404,
          "end": 405,
          "expression": {
            "type": "Identifier",
            "start": 404,
            "end": 405,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 406,
        "end": 409,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 443,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 453,
        "end": 454,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 463,
          "end": 464,
          "expression": {
            "type": "Identifier",
            "start": 463,
            "end": 464,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 466,
          "end": 467,
          "expression": {
            "type": "Identifier",
            "start": 466,
            "end": 467,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 468,
        "end": 471,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
