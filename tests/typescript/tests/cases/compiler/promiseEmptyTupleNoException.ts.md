__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "get",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 25
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 36
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "start": 37,
                  "end": 39
                }
              ],
              "start": 36,
              "end": 40
            },
            "start": 29,
            "end": 40
          },
          "start": 27,
          "end": 40
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "emails",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 55
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 58,
                    "end": 60
                  },
                  "definite": false,
                  "start": 49,
                  "end": 60
                }
              ],
              "declare": false,
              "start": 45,
              "end": 61
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "emails",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 77
              },
              "start": 64,
              "end": 78
            }
          ],
          "start": 41,
          "end": 80
        },
        "expression": false,
        "start": 7,
        "end": 80
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 80
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
