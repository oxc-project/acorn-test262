__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 30,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 28,
          "end": 30,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 25,
          "decorators": [],
          "name": "Component",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 65,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 38,
        "end": 65,
        "body": {
          "type": "TSInterfaceBody",
          "start": 63,
          "end": 65,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 62,
          "decorators": [],
          "name": "ComponentProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
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
  "end": 58,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 57,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 56,
        "raw": "\"./exports.js\"",
        "value": "./exports.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 20,
          "end": 34,
          "imported": {
            "type": "Identifier",
            "start": 20,
            "end": 34,
            "decorators": [],
            "name": "ComponentProps",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 34,
            "decorators": [],
            "name": "ComponentProps",
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
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 62,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 47,
        "end": 61,
        "raw": "\"./exports.js\"",
        "value": "./exports.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 20,
          "end": 39,
          "imported": {
            "type": "Identifier",
            "start": 25,
            "end": 39,
            "decorators": [],
            "name": "ComponentProps",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 25,
            "end": 39,
            "decorators": [],
            "name": "ComponentProps",
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
