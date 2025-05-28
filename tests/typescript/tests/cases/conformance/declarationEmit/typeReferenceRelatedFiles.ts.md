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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "value": "fs",
        "raw": "\"fs\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 50,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 45,
              "decorators": [],
              "name": "FSWatcher",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 46,
              "end": 48,
              "body": []
            },
            "declare": false
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
  "start": 31,
  "end": 114,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 31,
      "end": 62,
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
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 49,
            "decorators": [],
            "name": "FSWatcher",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 61,
        "value": "fs",
        "raw": "\"fs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 63,
      "end": 114,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 70,
        "end": 114,
        "id": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 111,
                    "decorators": [],
                    "name": "FSWatcher",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        },
        "expression": false
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
