__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 24,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 23,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 23,
              "decorators": [],
              "name": "esm",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16,
                "end": 23,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 18,
                  "end": 23,
                  "literal": {
                    "type": "Literal",
                    "start": 18,
                    "end": 23,
                    "value": "esm",
                    "raw": "\"esm\""
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 24,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 24,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 19,
                "end": 24,
                "literal": {
                  "type": "Literal",
                  "start": 19,
                  "end": 24,
                  "value": "cjs",
                  "raw": "\"cjs\""
                }
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
      "type": "TSExportAssignment",
      "start": 26,
      "end": 39,
      "expression": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 56,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "esm",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "esm",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "value": "dep",
        "raw": "\"dep\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 27,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 54,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 53,
          "value": "dep",
          "raw": "\"dep\""
        }
      },
      "importKind": "value"
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
  "end": 54,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "esm",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "esm",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "value": "dep",
        "raw": "\"dep\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 54,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 39,
            "end": 53,
            "callee": {
              "type": "Identifier",
              "start": 39,
              "end": 46,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 47,
                "end": 52,
                "value": "dep",
                "raw": "\"dep\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
