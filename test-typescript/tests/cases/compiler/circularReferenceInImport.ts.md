__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 54,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 54,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 52,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 34,
              "end": 52,
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 46,
                "decorators": [],
                "name": "Types",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value",
              "moduleReference": {
                "type": "Identifier",
                "start": 49,
                "end": 51,
                "decorators": [],
                "name": "Db",
                "optional": false,
                "typeAnnotation": null
              }
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
        "end": 20,
        "decorators": [],
        "name": "Db",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSExportAssignment",
      "start": 56,
      "end": 68,
      "expression": {
        "type": "Identifier",
        "start": 65,
        "end": 67,
        "decorators": [],
        "name": "Db",
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
  "end": 77,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "raw": "\"./db\"",
        "value": "./db",
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
            "name": "Db",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 77,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 35,
        "end": 77,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 50,
          "end": 77,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 56,
              "end": 75,
              "argument": {
                "type": "NewExpression",
                "start": 63,
                "end": 75,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 73,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 44,
          "end": 47,
          "decorators": [],
          "name": "foo",
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
