__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 47,
  "end": 400,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 78,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 57,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 58,
        "end": 78,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 64,
            "end": 76,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 127,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 93,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 106,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 127,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 125,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 124,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 118,
                "end": 124
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 155,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 155,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 153,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 152,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 152,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 157,
      "end": 217,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 164,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 173,
        "end": 174,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 175,
        "end": 217,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 181,
            "end": 195,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 185,
              "decorators": [],
              "name": "fooo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 187,
                "end": 194,
                "typeName": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 194,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 219,
      "end": 245,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 227,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 228,
        "end": 245,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 234,
            "end": 242,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 234,
              "end": 235,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 237,
                "end": 241,
                "typeName": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 241,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 247,
      "end": 306,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 255,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 264,
        "end": 266,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 267,
        "end": 306,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 273,
            "end": 286,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 273,
              "end": 276,
              "value": 1.1,
              "raw": "1.1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 285,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 278,
                "end": 285,
                "typeName": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 285,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 308,
      "end": 335,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 316,
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 317,
        "end": 335,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 323,
            "end": 333,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 323,
              "end": 326,
              "value": "1",
              "raw": "'1'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 332,
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 332,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 337,
      "end": 400,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 345,
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 354,
        "end": 356,
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 357,
        "end": 400,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 363,
            "end": 378,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 363,
              "end": 368,
              "value": "1.1",
              "raw": "'1.1'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 368,
              "end": 377,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 370,
                "end": 377,
                "typeName": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 377,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "accessibility": null
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
