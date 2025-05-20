__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 80,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 80,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 41,
          "end": 80,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 45,
              "end": 61,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 49,
                  "end": 60,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 55,
                    "decorators": [],
                    "name": "emails",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 58,
                    "end": 60,
                    "elements": []
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "ReturnStatement",
              "start": 64,
              "end": 78,
              "argument": {
                "type": "Identifier",
                "start": 71,
                "end": 77,
                "decorators": [],
                "name": "emails",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 25,
          "decorators": [],
          "name": "get",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 27,
          "end": 40,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 29,
            "end": 40,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 36,
              "end": 40,
              "params": [
                {
                  "type": "TSTupleType",
                  "start": 37,
                  "end": 39,
                  "elementTypes": []
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "decorators": [],
              "name": "Promise",
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
