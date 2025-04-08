__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 488,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 44,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 71,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 69,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 62,
                "end": 68
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 73,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 93,
          "end": 94,
          "expression": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "name": "C",
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
        "start": 95,
        "end": 122,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 110,
            "end": 120,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
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
      "start": 124,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 135,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 144,
          "end": 146,
          "expression": {
            "type": "Identifier",
            "start": 144,
            "end": 146,
            "name": "C2",
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
        "start": 147,
        "end": 166,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 154,
            "end": 164,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 163,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
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
      "type": "ClassDeclaration",
      "start": 168,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 184,
        "end": 185,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 199,
        "end": 241,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 214,
            "end": 224,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 223,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 217,
                "end": 223
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 229,
            "end": 239,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 238,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 232,
                "end": 238
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 197,
          "end": 198,
          "expression": {
            "type": "Identifier",
            "start": 197,
            "end": 198,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 243,
      "end": 488,
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 251,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 252,
        "end": 488,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 258,
            "end": 300,
            "id": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 266,
              "end": 300,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 276,
                  "end": 294,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 285,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 285,
                    "end": 293,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 287,
                      "end": 293
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 306,
            "end": 349,
            "id": {
              "type": "Identifier",
              "start": 312,
              "end": 314,
              "name": "C2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 315,
              "end": 349,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 325,
                  "end": 343,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 334,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 334,
                    "end": 342,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 336,
                      "end": 342
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 355,
            "end": 431,
            "id": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 375,
                "end": 376,
                "expression": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 376,
                  "name": "C",
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
              "start": 377,
              "end": 431,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 415,
                  "end": 425,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 416,
                    "end": 424,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 418,
                      "end": 424
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
            "start": 437,
            "end": 486,
            "id": {
              "type": "Identifier",
              "start": 447,
              "end": 448,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 457,
                "end": 459,
                "expression": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 459,
                  "name": "C2",
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
              "start": 460,
              "end": 486,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 470,
                  "end": 480,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 470,
                    "end": 471,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 471,
                    "end": 479,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 473,
                      "end": 479
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
