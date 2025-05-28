__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 192,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 17,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 32,
        "end": 53,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 51,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "decorators": [],
              "name": "testy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
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
      "start": 55,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 72,
        "decorators": [],
        "name": "Options",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 73,
        "end": 99,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 77,
            "end": 97,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 81,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 96,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 83,
                "end": 96,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 83,
                  "end": 87,
                  "typeName": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 87,
                    "decorators": [],
                    "name": "Test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 88,
                  "end": 95,
                  "literal": {
                    "type": "Literal",
                    "start": 88,
                    "end": 95,
                    "value": "testy",
                    "raw": "'testy'"
                  }
                }
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
      "type": "TSDeclareFunction",
      "start": 101,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 144,
        "decorators": [],
        "name": "includesAllRequiredOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 145,
          "end": 170,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 152,
            "end": 170,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 154,
              "end": 170,
              "typeName": {
                "type": "Identifier",
                "start": 154,
                "end": 161,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 161,
                "end": 170,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 162,
                    "end": 169,
                    "typeName": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 169,
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 171,
        "end": 191,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 173,
          "end": 191,
          "parameterName": {
            "type": "Identifier",
            "start": 173,
            "end": 180,
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 191,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 184,
              "end": 191,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 191,
                "decorators": [],
                "name": "Options",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
