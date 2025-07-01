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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testy",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
              },
              "start": 42,
              "end": 50
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 51
          }
        ],
        "start": 32,
        "end": 53
      },
      "declare": false,
      "start": 17,
      "end": 53
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Options",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 72
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
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 87
                  },
                  "typeArguments": null,
                  "start": 83,
                  "end": 87
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "testy",
                    "raw": "'testy'",
                    "start": 88,
                    "end": 95
                  },
                  "start": 88,
                  "end": 95
                },
                "start": 83,
                "end": 96
              },
              "start": 81,
              "end": 96
            },
            "accessibility": null,
            "static": false,
            "start": 77,
            "end": 97
          }
        ],
        "start": 73,
        "end": 99
      },
      "declare": false,
      "start": 55,
      "end": 99
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "includesAllRequiredOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 144
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 161
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 169
                    },
                    "typeArguments": null,
                    "start": 162,
                    "end": 169
                  }
                ],
                "start": 161,
                "end": 170
              },
              "start": 154,
              "end": 170
            },
            "start": 152,
            "end": 170
          },
          "start": 145,
          "end": 170
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 180
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 191
              },
              "typeArguments": null,
              "start": 184,
              "end": 191
            },
            "start": 184,
            "end": 191
          },
          "start": 173,
          "end": 191
        },
        "start": 171,
        "end": 191
      },
      "body": null,
      "expression": false,
      "start": 101,
      "end": 192
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 192
}
```
