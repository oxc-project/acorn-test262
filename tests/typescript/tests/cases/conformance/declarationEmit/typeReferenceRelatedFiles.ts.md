__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 32
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 15,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FSWatcher",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 45
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 46,
              "end": 48
            },
            "declare": false,
            "start": 26,
            "end": 48
          }
        ],
        "start": 20,
        "end": 50
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 50
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
            "name": "FSWatcher",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 49
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "FSWatcher",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 49
          },
          "importKind": "value",
          "start": 40,
          "end": 49
        }
      ],
      "source": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 57,
        "end": 61
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 31,
      "end": 62
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 80
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 96,
                  "end": 98
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FSWatcher",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 111
                  },
                  "typeArguments": null,
                  "start": 102,
                  "end": 111
                },
                "start": 96,
                "end": 111
              },
              "start": 89,
              "end": 112
            }
          ],
          "start": 83,
          "end": 114
        },
        "expression": false,
        "start": 70,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 63,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 31,
  "end": 114
}
```
