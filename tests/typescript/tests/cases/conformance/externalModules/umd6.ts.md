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
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 58,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 56,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 34,
              "end": 56,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 45,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 47,
                "end": 55,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 49,
                  "end": 55
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
        "end": 23,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSExportAssignment",
      "start": 59,
      "end": 74,
      "expression": {
        "type": "Identifier",
        "start": 68,
        "end": 73,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
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
  "start": 34,
  "end": 59,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 47,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 58,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 50,
              "end": 56,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 53,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 54,
                "end": 56,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
