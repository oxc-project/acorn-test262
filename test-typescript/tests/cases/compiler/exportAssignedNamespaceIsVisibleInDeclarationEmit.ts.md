__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 83,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 83,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 28,
            "end": 51,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 35,
              "end": 51,
              "body": {
                "type": "TSInterfaceBody",
                "start": 49,
                "end": 51,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 45,
                "end": 48,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 56,
            "end": 81,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 63,
              "end": 81,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 75,
                "end": 80,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 77,
                  "end": 80,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 80,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
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
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSExportAssignment",
      "start": 84,
      "end": 97,
      "expression": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "decorators": [],
        "name": "Foo",
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
  "end": 54,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "raw": "\"./thing\"",
        "value": "./thing"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 54,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 54,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 53,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 50,
              "end": 53,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
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
