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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 37,
        "value": "@namespace/component",
        "raw": "'@namespace/component'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 38,
        "end": 65,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 44,
            "end": 63,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 51,
              "end": 63,
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 60,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 61,
                "end": 63,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
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
  "end": 82,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 43,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 42,
        "value": "@namespace/component",
        "raw": "\"@namespace/component\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 82,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 51,
        "end": 82,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 65,
            "end": 81,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 81,
              "name": "item",
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
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "item",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "item",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 37,
        "value": "../somepackage",
        "raw": "\"../somepackage\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 71,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 71,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 63,
              "name": "reeexported",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 66,
              "end": 70,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
