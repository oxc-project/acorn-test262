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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 48,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 47,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 48,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 47,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "raw": "'./v1'",
        "value": "./v1",
        "regex": null,
        "bigint": null
      },
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
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 55,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 54,
        "raw": "'./v2'",
        "value": "./v2",
        "regex": null,
        "bigint": null
      },
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
      ]
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 56,
          "definite": false,
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
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
              "decorators": [],
              "name": "Alpha",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
