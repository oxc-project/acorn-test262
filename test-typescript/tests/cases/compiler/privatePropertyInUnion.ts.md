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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "decorators": [],
        "name": "Type",
        "optional": false
      },
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
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 100,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 100,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 77,
            "end": 98,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 72,
        "decorators": [],
        "name": "SyncableObject",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 102,
      "end": 153,
      "body": {
        "type": "TSInterfaceBody",
        "start": 151,
        "end": 153,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 123,
        "decorators": [],
        "name": "SyncableRef",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 123,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 149,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 134,
              "end": 149,
              "typeName": {
                "type": "Identifier",
                "start": 134,
                "end": 149,
                "decorators": [],
                "name": "ISyncableObject",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 155,
      "end": 218,
      "body": {
        "type": "TSInterfaceBody",
        "start": 216,
        "end": 218,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 201,
          "end": 215,
          "expression": {
            "type": "Identifier",
            "start": 201,
            "end": 215,
            "decorators": [],
            "name": "SyncableObject",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 180,
        "decorators": [],
        "name": "ISyncableObject",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 180,
        "end": 192,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 181,
            "end": 191,
            "const": false,
            "default": {
              "type": "TSObjectKeyword",
              "start": 185,
              "end": 191
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 220,
      "end": 323,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 246,
        "decorators": [],
        "name": "__ValueDescriptorType",
        "optional": false
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 286,
          "end": 301,
          "typeName": {
            "type": "Identifier",
            "start": 286,
            "end": 301,
            "decorators": [],
            "name": "ISyncableObject",
            "optional": false
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 304,
          "end": 318,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 304,
            "end": 315,
            "decorators": [],
            "name": "SyncableRef",
            "optional": false
          }
        }
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
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
