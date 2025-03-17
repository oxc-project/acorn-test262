__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 202,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 11,
      "end": 36,
      "expression": {
        "type": "Identifier",
        "start": 20,
        "end": 35,
        "name": "createHttpError",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 101,
            "name": "createHttpError",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 101,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 68,
                  "end": 101,
                  "left": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 83,
                    "name": "createHttpError",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 101,
                    "name": "NamedConstructors",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 103,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 136,
        "name": "createHttpError",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 137,
        "end": 201,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 143,
            "end": 199,
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 165,
              "name": "NamedConstructors",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 169,
              "end": 199,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 172,
                "end": 187,
                "name": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSLiteralType",
                  "start": 177,
                  "end": 187,
                  "literal": {
                    "type": "Literal",
                    "start": 177,
                    "end": 187,
                    "value": "NotFound",
                    "raw": "'NotFound'"
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 190,
                "end": 197
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSLiteralType",
                "start": 177,
                "end": 187,
                "literal": {
                  "type": "Literal",
                  "start": 177,
                  "end": 187,
                  "value": "NotFound",
                  "raw": "'NotFound'"
                }
              },
              "key": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "NotFound",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "NotFound",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 35,
        "value": "./errors",
        "raw": "'./errors'"
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
