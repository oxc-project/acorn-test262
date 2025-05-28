__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 208,
  "end": 721,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 208,
      "end": 250,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 218,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 218,
        "end": 236,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 219,
            "end": 235,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 235,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 235,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 237,
        "end": 250,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 243,
            "end": 248,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 247,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 246,
                "end": 247,
                "typeName": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "decorators": [],
                  "name": "U",
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
      "start": 361,
      "end": 426,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 374,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 374,
        "end": 377,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 375,
            "end": 376,
            "name": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 386,
        "end": 390,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 390,
        "end": 398,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 391,
            "end": 397
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 399,
        "end": 426,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 414,
            "end": 424,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 423,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 417,
                "end": 423,
                "typeName": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 423,
                  "decorators": [],
                  "name": "String",
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
      "start": 428,
      "end": 480,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 434,
        "end": 439,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 440,
        "end": 480,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 446,
            "end": 456,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 447,
              "end": 455,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 449,
                "end": 455,
                "typeName": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 455,
                  "decorators": [],
                  "name": "String",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 461,
            "end": 478,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 468,
              "end": 469,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 477,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 471,
                "end": 477,
                "typeName": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 477,
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": true,
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
      "start": 578,
      "end": 721,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 584,
        "end": 592,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 592,
        "end": 610,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 593,
            "end": 609,
            "name": {
              "type": "Identifier",
              "start": 593,
              "end": 594,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 603,
              "end": 609,
              "typeName": {
                "type": "Identifier",
                "start": 603,
                "end": 609,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 619,
        "end": 624,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 625,
        "end": 721,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 714,
            "end": 719,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 714,
              "end": 715,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 715,
              "end": 718,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 717,
                "end": 718,
                "typeName": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 718,
                  "decorators": [],
                  "name": "U",
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
