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
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 57,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 58,
        "end": 78,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 64,
            "end": 76,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
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
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
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
      "start": 80,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 93,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 106,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 127,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 125,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
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
              "start": 116,
              "end": 124,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 118,
                "end": 124
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
      "start": 129,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 155,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 153,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
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
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 157,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 164,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 173,
        "end": 174,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 175,
        "end": 217,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 181,
            "end": 195,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 185,
              "name": "fooo",
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
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 219,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 227,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 228,
        "end": 245,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 234,
            "end": 242,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 234,
              "end": 235,
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
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 247,
      "end": 306,
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 255,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 264,
        "end": 266,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 267,
        "end": 306,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 273,
            "end": 286,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 273,
              "end": 276,
              "value": 1.1,
              "raw": "1.1"
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
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 308,
      "end": 335,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 316,
        "name": "A3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 317,
        "end": 335,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 323,
            "end": 333,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 323,
              "end": 326,
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
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 337,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 345,
        "name": "B3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 354,
        "end": 356,
        "name": "A3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 357,
        "end": 400,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 363,
            "end": 378,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 363,
              "end": 368,
              "value": "1.1",
              "raw": "'1.1'"
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
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
