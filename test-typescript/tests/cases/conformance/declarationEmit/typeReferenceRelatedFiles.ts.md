__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 32,
  "end": 32,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 50,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 50,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 48,
            "body": {
              "type": "TSInterfaceBody",
              "start": 46,
              "end": 48,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 45,
              "decorators": [],
              "name": "FSWatcher",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "raw": "\"fs\"",
        "value": "fs"
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
  "start": 31,
  "end": 115,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 31,
      "end": 62,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 61,
        "raw": "\"fs\"",
        "value": "fs"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 40,
          "end": 49,
          "imported": {
            "type": "Identifier",
            "start": 40,
            "end": 49,
            "decorators": [],
            "name": "FSWatcher",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 49,
            "decorators": [],
            "name": "FSWatcher",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 63,
      "end": 114,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 70,
        "end": 114,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 83,
          "end": 114,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 89,
              "end": 112,
              "argument": {
                "type": "TSAsExpression",
                "start": 96,
                "end": 111,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 96,
                  "end": 98,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 102,
                  "end": 111,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 111,
                    "decorators": [],
                    "name": "FSWatcher",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
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
