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
        "decorators": [],
        "name": "createHttpError",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 101,
            "decorators": [],
            "name": "createHttpError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 101,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 68,
                  "end": 101,
                  "left": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 83,
                    "decorators": [],
                    "name": "createHttpError",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 101,
                    "decorators": [],
                    "name": "NamedConstructors",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 103,
      "end": 201,
      "body": {
        "type": "TSModuleBlock",
        "start": 137,
        "end": 201,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 143,
            "end": 199,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 165,
              "decorators": [],
              "name": "NamedConstructors",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 169,
              "end": 199,
              "constraint": {
                "type": "TSLiteralType",
                "start": 177,
                "end": 187,
                "literal": {
                  "type": "Literal",
                  "start": 177,
                  "end": 187,
                  "raw": "'NotFound'",
                  "value": "NotFound"
                }
              },
              "key": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": false,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 190,
                "end": 197
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 136,
        "decorators": [],
        "name": "createHttpError",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
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
  "end": 35,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 35,
        "raw": "'./errors'",
        "value": "./errors"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "NotFound",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "NotFound",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
