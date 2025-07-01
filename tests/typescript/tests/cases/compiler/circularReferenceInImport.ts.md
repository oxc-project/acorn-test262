__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Db",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Types",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 46
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "Db",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 51
              },
              "importKind": "value",
              "start": 34,
              "end": 52
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 27,
            "end": 52
          }
        ],
        "start": 21,
        "end": 54
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Db",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 67
      },
      "start": 56,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 69
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Db",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./db",
        "raw": "\"./db\"",
        "start": 20,
        "end": 26
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 47
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
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 73
                },
                "typeArguments": null,
                "arguments": [],
                "start": 63,
                "end": 75
              },
              "start": 56,
              "end": 75
            }
          ],
          "start": 50,
          "end": 77
        },
        "expression": false,
        "start": 35,
        "end": 77
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 28,
      "end": 77
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
