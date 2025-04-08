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
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 218,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 237,
        "end": 250,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 243,
            "end": 248,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
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
                  "name": "U",
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 235,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 235,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 361,
      "end": 426,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 374,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 386,
        "end": 390,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 399,
        "end": 426,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 414,
            "end": 424,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
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
                  "name": "String",
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
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
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 428,
      "end": 480,
      "id": {
        "type": "Identifier",
        "start": 434,
        "end": 439,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 440,
        "end": 480,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 446,
            "end": 456,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
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
                  "name": "String",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 461,
            "end": 478,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 468,
              "end": 469,
              "name": "s",
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
                  "name": "String",
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
      "start": 578,
      "end": 721,
      "id": {
        "type": "Identifier",
        "start": 584,
        "end": 592,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 619,
        "end": 624,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 625,
        "end": 721,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 714,
            "end": 719,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 714,
              "end": 715,
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
                  "name": "U",
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 603,
              "end": 609,
              "typeName": {
                "type": "Identifier",
                "start": 603,
                "end": 609,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
