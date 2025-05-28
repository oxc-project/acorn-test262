__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 577,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 40,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 38,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 31,
                "end": 37
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 62,
          "end": 63,
          "expression": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 145,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 70,
            "end": 90,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 71,
                "end": 80,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 72,
                  "end": 80,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 74,
                    "end": 80
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 83,
                "end": 89
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 147,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 158,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 159,
        "end": 191,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 165,
            "end": 189,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 170,
                "end": 179,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 171,
                  "end": 179,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 173,
                    "end": 179
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 188,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 182,
                "end": 188
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 193,
      "end": 300,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 204,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 213,
          "end": 214,
          "expression": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
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
        "start": 215,
        "end": 300,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 221,
            "end": 245,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 226,
                "end": 235,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 227,
                  "end": 235,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 229,
                    "end": 235
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 244,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 238,
                "end": 244
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 302,
      "end": 342,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 313,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 314,
        "end": 342,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 320,
            "end": 340,
            "parameters": [
              {
                "type": "Identifier",
                "start": 321,
                "end": 330,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 322,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 324,
                    "end": 330
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 339,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 333,
                "end": 339
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
      "start": 344,
      "end": 447,
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 355,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 364,
          "end": 365,
          "expression": {
            "type": "Identifier",
            "start": 364,
            "end": 365,
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
        "start": 366,
        "end": 447,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 372,
            "end": 392,
            "parameters": [
              {
                "type": "Identifier",
                "start": 373,
                "end": 382,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 374,
                  "end": 382,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 376,
                    "end": 382
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 383,
              "end": 391,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 385,
                "end": 391
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
      "start": 449,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 459,
        "end": 460,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 461,
        "end": 489,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 467,
            "end": 487,
            "parameters": [
              {
                "type": "Identifier",
                "start": 468,
                "end": 477,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 469,
                  "end": 477,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 471,
                    "end": 477
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 478,
              "end": 486,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 480,
                "end": 486
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
      "start": 491,
      "end": 577,
      "id": {
        "type": "Identifier",
        "start": 501,
        "end": 502,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 511,
          "end": 512,
          "expression": {
            "type": "Identifier",
            "start": 511,
            "end": 512,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 513,
        "end": 577,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 519,
            "end": 539,
            "parameters": [
              {
                "type": "Identifier",
                "start": 520,
                "end": 529,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 521,
                  "end": 529,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 523,
                    "end": 529
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 530,
              "end": 538,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 532,
                "end": 538
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
