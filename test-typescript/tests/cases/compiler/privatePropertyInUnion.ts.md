__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 324,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "name": "Type",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 34,
        "end": 49,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 34,
            "end": 40
          },
          {
            "type": "TSObjectKeyword",
            "start": 43,
            "end": 49
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 72,
        "name": "SyncableObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 100,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 77,
            "end": 98,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
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
              "start": 88,
              "end": 97,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 90,
                "end": 97
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
      "start": 102,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 123,
        "name": "SyncableRef",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 123,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 149,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 134,
              "end": 149,
              "typeName": {
                "type": "Identifier",
                "start": 134,
                "end": 149,
                "name": "ISyncableObject",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 151,
        "end": 153,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 155,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 180,
        "name": "ISyncableObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 201,
          "end": 215,
          "expression": {
            "type": "Identifier",
            "start": 201,
            "end": 215,
            "name": "SyncableObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 180,
        "end": 192,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 181,
            "end": 191,
            "name": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 185,
              "end": 191
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 216,
        "end": 218,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 220,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 246,
        "name": "__ValueDescriptorType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 246,
        "end": 273,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 247,
            "end": 272,
            "name": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 257,
              "end": 272,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 257,
                  "end": 263
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 266,
                  "end": 272
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 276,
        "end": 322,
        "checkType": {
          "type": "TSTypeReference",
          "start": 276,
          "end": 277,
          "typeName": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 286,
          "end": 301,
          "typeName": {
            "type": "Identifier",
            "start": 286,
            "end": 301,
            "name": "ISyncableObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 304,
          "end": 318,
          "typeName": {
            "type": "Identifier",
            "start": 304,
            "end": 315,
            "name": "SyncableRef",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 315,
            "end": 318,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 316,
                "end": 317,
                "typeName": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 317,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 321,
          "end": 322,
          "typeName": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
