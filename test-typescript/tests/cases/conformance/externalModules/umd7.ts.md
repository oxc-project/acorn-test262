__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 33,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 24,
        "end": 32,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 26,
          "end": 32
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 34,
      "end": 49,
      "expression": {
        "type": "Identifier",
        "start": 43,
        "end": 48,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 50,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 73,
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
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 55,
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
            "end": 55,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
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
