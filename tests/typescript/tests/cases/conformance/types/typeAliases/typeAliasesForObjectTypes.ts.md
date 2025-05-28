__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 494,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 10,
        "end": 23,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 12,
            "end": 21,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
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
      "start": 142,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 154,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 163,
          "end": 165,
          "expression": {
            "type": "Identifier",
            "start": 163,
            "end": 165,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 166,
        "end": 179,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 168,
            "end": 177,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 177,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 171,
                "end": 177
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
      "start": 180,
      "end": 221,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 188,
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
          "start": 200,
          "end": 202,
          "expression": {
            "type": "Identifier",
            "start": 200,
            "end": 202,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 219,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
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
      "type": "TSTypeAliasDeclaration",
      "start": 330,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 337,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 340,
        "end": 353,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 342,
            "end": 351,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 343,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 351,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 345,
                "end": 351
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
      "type": "TSTypeAliasDeclaration",
      "start": 354,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 361,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 364,
        "end": 377,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 366,
            "end": 375,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 366,
              "end": 367,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 375,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 369,
                "end": 375
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
      "type": "TSTypeAliasDeclaration",
      "start": 473,
      "end": 494,
      "id": {
        "type": "Identifier",
        "start": 478,
        "end": 480,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 480,
        "end": 483,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 481,
            "end": 482,
            "name": {
              "type": "Identifier",
              "start": 481,
              "end": 482,
              "decorators": [],
              "name": "T",
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 486,
        "end": 494,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 488,
            "end": 492,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 489,
              "end": 492,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 491,
                "end": 492,
                "typeName": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 492,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
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
