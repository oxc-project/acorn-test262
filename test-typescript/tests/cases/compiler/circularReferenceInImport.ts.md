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
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 20,
        "name": "Db",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 54,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 52,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 34,
              "end": 52,
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 46,
                "name": "Types",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 49,
                "end": 51,
                "name": "Db",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 56,
      "end": 68,
      "expression": {
        "type": "Identifier",
        "start": 65,
        "end": 67,
        "name": "Db",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "name": "Db",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "value": "./db",
        "raw": "\"./db\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 77,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 35,
        "end": 77,
        "id": {
          "type": "Identifier",
          "start": 44,
          "end": 47,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                "callee": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 73,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
