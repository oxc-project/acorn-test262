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
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 43,
      "end": 73,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "Str",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 72,
        "end": 73,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 72,
          "end": 73,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 62,
              "end": 68
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 75,
      "end": 392,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 92,
        "end": 392,
        "checkType": {
          "type": "TSTypeReference",
          "start": 92,
          "end": 93,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 102,
          "end": 105,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 102,
            "end": 105,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 387,
          "end": 392
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 112,
          "end": 380,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 112,
            "end": 120,
            "indexType": {
              "type": "TSLiteralType",
              "start": 114,
              "end": 119,
              "literal": {
                "type": "Literal",
                "start": 114,
                "end": 119,
                "raw": "'foo'",
                "value": "foo",
                "regex": null,
                "bigint": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 113,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 129,
            "end": 135
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 375,
            "end": 380
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 353,
            "end": 366,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 356,
              "end": 366,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 357,
                  "end": 365,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 359,
                    "end": 364,
                    "literal": {
                      "type": "Literal",
                      "start": 359,
                      "end": 364,
                      "raw": "'foo'",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 357,
                    "end": 358,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 353,
              "end": 356,
              "decorators": [],
              "name": "Str",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
