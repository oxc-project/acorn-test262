__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 20,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 20,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9,
                "end": 20,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 20,
                  "decorators": [],
                  "name": "ArrayBuffer",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 23,
            "end": 50,
            "arguments": [
              {
                "type": "Literal",
                "start": 45,
                "end": 49,
                "raw": "1024",
                "value": 1024,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 27,
              "end": 44,
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
