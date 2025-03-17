__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 23,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 58,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 56,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 34,
              "end": 56,
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 45,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 47,
                "end": 55,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 49,
                  "end": 55
                }
              }
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
      "start": 59,
      "end": 74,
      "expression": {
        "type": "Identifier",
        "start": 68,
        "end": 73,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 75,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "name": "Foo",
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
  "start": 34,
  "end": 60,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 47,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 58,
            "callee": {
              "type": "MemberExpression",
              "start": 50,
              "end": 56,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 53,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 54,
                "end": 56,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
