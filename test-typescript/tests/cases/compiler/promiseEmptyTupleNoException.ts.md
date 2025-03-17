__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 80,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 80,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 25,
          "name": "get",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [],
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
                  "id": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 55,
                    "name": "emails",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 58,
                    "end": 60,
                    "elements": []
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 64,
              "end": 78,
              "argument": {
                "type": "Identifier",
                "start": 71,
                "end": 77,
                "name": "emails",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 27,
          "end": 40,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 29,
            "end": 40,
            "typeName": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
