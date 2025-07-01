__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 23,
                    "end": 29
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 30,
                    "end": 39
                  }
                ],
                "start": 23,
                "end": 39
              },
              "start": 21,
              "end": 39
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 39
          }
        ],
        "start": 14,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Str",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 51
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 62,
              "end": 68
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 52,
            "end": 68
          }
        ],
        "start": 51,
        "end": 69
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 73
        },
        "typeArguments": null,
        "start": 72,
        "end": 73
      },
      "declare": false,
      "start": 43,
      "end": 73
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 83
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 85
          }
        ],
        "start": 83,
        "end": 86
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "typeArguments": null,
          "start": 92,
          "end": 93
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 105
          },
          "typeArguments": null,
          "start": 102,
          "end": 105
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 113
              },
              "typeArguments": null,
              "start": 112,
              "end": 113
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 114,
                "end": 119
              },
              "start": 114,
              "end": 119
            },
            "start": 112,
            "end": 120
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 129,
            "end": 135
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Str",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 356
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 358
                    },
                    "typeArguments": null,
                    "start": 357,
                    "end": 358
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 359,
                      "end": 364
                    },
                    "start": 359,
                    "end": 364
                  },
                  "start": 357,
                  "end": 365
                }
              ],
              "start": 356,
              "end": 366
            },
            "start": 353,
            "end": 366
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 375,
            "end": 380
          },
          "start": 112,
          "end": 380
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 387,
          "end": 392
        },
        "start": 92,
        "end": 392
      },
      "declare": false,
      "start": 75,
      "end": 392
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 392
}
```
