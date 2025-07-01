__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "createHttpError",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 35
      },
      "start": 11,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "createHttpError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createHttpError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 83
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NamedConstructors",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 101
                  },
                  "start": 68,
                  "end": 101
                },
                "typeArguments": null,
                "start": 68,
                "end": 101
              },
              "start": 66,
              "end": 101
            },
            "start": 51,
            "end": 101
          },
          "init": null,
          "definite": false,
          "start": 51,
          "end": 101
        }
      ],
      "declare": true,
      "start": 37,
      "end": 102
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createHttpError",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 136
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NamedConstructors",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 165
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "constraint": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "NotFound",
                  "raw": "'NotFound'",
                  "start": 177,
                  "end": 187
                },
                "start": 177,
                "end": 187
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 190,
                "end": 197
              },
              "optional": false,
              "readonly": null,
              "start": 169,
              "end": 199
            },
            "declare": false,
            "start": 143,
            "end": 199
          }
        ],
        "start": 137,
        "end": 201
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 103,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 202
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NotFound",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NotFound",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./errors",
        "raw": "'./errors'",
        "start": 25,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
