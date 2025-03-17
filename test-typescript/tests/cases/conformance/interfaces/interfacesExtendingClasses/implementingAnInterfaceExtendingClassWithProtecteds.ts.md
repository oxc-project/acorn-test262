__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 571,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 36,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 82,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 82,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 80,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 73,
                "end": 79
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 60,
          "end": 63,
          "expression": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 119,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 119,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 93,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 105,
          "end": 106,
          "expression": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 121,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 145,
        "end": 172,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 160,
            "end": 170,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 169,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 163,
                "end": 169
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 131,
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 143,
          "end": 144,
          "expression": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 174,
      "end": 240,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 198,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 213,
            "end": 223,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 222,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 216,
                "end": 222
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 228,
            "end": 238,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 237,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 231,
                "end": 237
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 184,
        "decorators": [],
        "name": "Bar3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 196,
          "end": 197,
          "expression": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 242,
      "end": 318,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 266,
        "end": 318,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 281,
            "end": 301,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 300,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 294,
                "end": 300
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 306,
            "end": 316,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 252,
        "decorators": [],
        "name": "Bar4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 264,
          "end": 265,
          "expression": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 320,
      "end": 368,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 356,
        "end": 368,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 326,
        "end": 330,
        "decorators": [],
        "name": "Bar5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 354,
          "end": 355,
          "expression": {
            "type": "Identifier",
            "start": 354,
            "end": 355,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": {
        "type": "Identifier",
        "start": 339,
        "end": 342,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 370,
      "end": 443,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 406,
        "end": 443,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 421,
            "end": 441,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 432,
              "end": 440,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 434,
                "end": 440
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 380,
        "decorators": [],
        "name": "Bar6",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 404,
          "end": 405,
          "expression": {
            "type": "Identifier",
            "start": 404,
            "end": 405,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": {
        "type": "Identifier",
        "start": 389,
        "end": 392,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 445,
      "end": 499,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 481,
        "end": 499,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 487,
            "end": 497,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 488,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 488,
              "end": 496,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 490,
                "end": 496
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 455,
        "decorators": [],
        "name": "Bar7",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 479,
          "end": 480,
          "expression": {
            "type": "Identifier",
            "start": 479,
            "end": 480,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": {
        "type": "Identifier",
        "start": 464,
        "end": 467,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 501,
      "end": 570,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 537,
        "end": 570,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 543,
            "end": 553,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 543,
              "end": 544,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 544,
              "end": 552,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 546,
                "end": 552
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 558,
            "end": 568,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 558,
              "end": 559,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 567,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 561,
                "end": 567
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 507,
        "end": 511,
        "decorators": [],
        "name": "Bar8",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 535,
          "end": 536,
          "expression": {
            "type": "Identifier",
            "start": 535,
            "end": 536,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": {
        "type": "Identifier",
        "start": 520,
        "end": 523,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
