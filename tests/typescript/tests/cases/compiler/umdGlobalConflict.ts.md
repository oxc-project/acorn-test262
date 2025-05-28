__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 25,
        "decorators": [],
        "name": "Alpha",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 48,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 48,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 47,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 41,
                  "end": 47
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
  "end": 49,
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 25,
        "decorators": [],
        "name": "Alpha",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 48,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 48,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 47,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
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
  "end": 56,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "value": "./v1",
        "raw": "'./v1'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 35,
          "end": 42,
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 42,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 54,
        "value": "./v2",
        "raw": "'./v2'"
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 57,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 46,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 49,
            "end": 56,
            "object": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
              "decorators": [],
              "name": "Alpha",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
