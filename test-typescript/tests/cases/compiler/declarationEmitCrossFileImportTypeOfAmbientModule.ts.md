__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 65,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 38,
        "end": 65,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 44,
            "end": 63,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 51,
              "end": 63,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 61,
                "end": 63,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 60,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 37,
        "raw": "'@namespace/component'",
        "value": "@namespace/component"
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
  "end": 82,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 42,
        "raw": "\"@namespace/component\"",
        "value": "@namespace/component"
      },
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
            "name": "Foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 82,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 51,
        "end": 82,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 65,
            "end": 81,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 81,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 69,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 71,
                  "end": 81,
                  "exprName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 81,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
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
      "exportKind": "type",
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
  "end": 72,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 37,
        "raw": "\"../somepackage\"",
        "value": "../somepackage"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "item",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "item",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 71,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 71,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 70,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 63,
              "decorators": [],
              "name": "reeexported",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 66,
              "end": 70,
              "decorators": [],
              "name": "item",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
