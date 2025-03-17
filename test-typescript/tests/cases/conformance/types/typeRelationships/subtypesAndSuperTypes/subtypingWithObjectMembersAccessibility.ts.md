__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 426,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 74,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 95,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 93,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 84,
              "name": "foo",
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
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              }
            },
            "accessibility": null
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
      "start": 97,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 110,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 119,
        "end": 123,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 142,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "name": "bar",
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
              "start": 133,
              "end": 141,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 135,
                "end": 141
              }
            },
            "accessibility": null
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
      "start": 146,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 153,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 154,
        "end": 179,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 160,
            "end": 177,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 170,
              "name": "foo",
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
              "start": 170,
              "end": 176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 176,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 176,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
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
      "start": 181,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 198,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 199,
        "end": 237,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 205,
            "end": 226,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "name": "foo",
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
              "start": 216,
              "end": 225,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 218,
                "end": 225,
                "typeName": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 225,
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 239,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 247,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 248,
        "end": 272,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 254,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 261,
              "end": 262,
              "value": 1,
              "raw": "1"
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
              "start": 262,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 264,
                "end": 268,
                "typeName": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 268,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
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
      "start": 274,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 282,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 291,
        "end": 293,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 294,
        "end": 330,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 300,
            "end": 319,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 308,
              "end": 309,
              "value": 1,
              "raw": "1"
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
              "start": 309,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 311,
                "end": 318,
                "typeName": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 318,
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 332,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 340,
        "name": "A3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 341,
        "end": 366,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 347,
            "end": 364,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 354,
              "end": 357,
              "value": "1",
              "raw": "'1'"
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
              "start": 357,
              "end": 363,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 359,
                "end": 363,
                "typeName": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 363,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
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
      "start": 368,
      "end": 426,
      "id": {
        "type": "Identifier",
        "start": 374,
        "end": 376,
        "name": "B3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 385,
        "end": 387,
        "name": "A3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 388,
        "end": 426,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 394,
            "end": 415,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 402,
              "end": 405,
              "value": "1",
              "raw": "'1'"
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
              "start": 405,
              "end": 414,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 407,
                "end": 414,
                "typeName": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 414,
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
