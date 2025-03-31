__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 392,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 39,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 39,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 23,
                "end": 39,
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
                ]
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
      "start": 43,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "name": "Str",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 51,
        "end": 69,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 52,
            "end": 68,
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 62,
              "end": 68
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 72,
        "end": 73,
        "typeName": {
          "type": "Identifier",
          "start": 72,
          "end": 73,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 75,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 86,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 85,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "T",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 92,
        "end": 392,
        "checkType": {
          "type": "TSTypeReference",
          "start": 92,
          "end": 93,
          "typeName": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 102,
          "end": 105,
          "typeName": {
            "type": "Identifier",
            "start": 102,
            "end": 105,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 112,
          "end": 380,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 112,
            "end": 120,
            "objectType": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 113,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 114,
              "end": 119,
              "literal": {
                "type": "Literal",
                "start": 114,
                "end": 119,
                "value": "foo",
                "raw": "'foo'"
              }
            }
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 129,
            "end": 135
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 353,
            "end": 366,
            "typeName": {
              "type": "Identifier",
              "start": 353,
              "end": 356,
              "name": "Str",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 356,
              "end": 366,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 357,
                  "end": 365,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 357,
                    "end": 358,
                    "typeName": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 359,
                    "end": 364,
                    "literal": {
                      "type": "Literal",
                      "start": 359,
                      "end": 364,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  }
                }
              ]
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 375,
            "end": 380
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 387,
          "end": 392
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
