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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 101,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "createHttpError",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "NamedConstructors",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 169,
              "end": 199,
              "key": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
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
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 190,
                "end": 197
              },
              "optional": false,
              "readonly": null
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
  "end": 35,
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
            "decorators": [],
            "name": "NotFound",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "NotFound",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
