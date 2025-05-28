__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 464,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 12,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 24,
        "decorators": [],
        "name": "i1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 46,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 31,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 35,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
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
      "start": 48,
      "end": 98,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 56,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 68,
          "end": 70,
          "expression": {
            "type": "Identifier",
            "start": 68,
            "end": 70,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 98,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 77,
            "end": 96,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 151,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 108,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 120,
          "end": 122,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 122,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 151,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 149,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 141,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 148,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 153,
      "end": 187,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 161,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 162,
        "end": 187,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 168,
            "end": 185,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 180,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 184,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 181,
                "end": 184
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 225,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 197,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 206,
        "end": 208,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 220,
          "end": 222,
          "expression": {
            "type": "Identifier",
            "start": 220,
            "end": 222,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 222,
        "end": 225,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 226,
      "end": 262,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 243,
        "end": 245,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 257,
          "end": 259,
          "expression": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 262,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 263,
      "end": 299,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 271,
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 280,
        "end": 282,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 294,
          "end": 296,
          "expression": {
            "type": "Identifier",
            "start": 294,
            "end": 296,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 296,
        "end": 299,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 314,
      "end": 365,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 326,
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 327,
        "end": 365,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 333,
            "end": 346,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 337,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 345,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 339,
                "end": 345
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 351,
            "end": 363,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 354,
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 354,
              "end": 362,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 356,
                "end": 362
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
      "start": 367,
      "end": 403,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 375,
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 376,
        "end": 403,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 382,
            "end": 401,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 393,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 400,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 394,
                "end": 400
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 405,
      "end": 464,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 413,
        "decorators": [],
        "name": "C8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 422,
        "end": 424,
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 436,
          "end": 438,
          "expression": {
            "type": "Identifier",
            "start": 436,
            "end": 438,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 438,
        "end": 464,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 444,
            "end": 462,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 451,
              "end": 454,
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 454,
              "end": 461,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 455,
                "end": 461
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
