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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 80,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 25,
          "decorators": [],
          "name": "get",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
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
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
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
        },
        "body": {
          "type": "BlockStatement",
          "start": 41,
          "end": 80,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 45,
              "end": 61,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 49,
                  "end": 60,
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
                  },
                  "definite": false
                }
              ],
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
                "decorators": [],
                "name": "emails",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
