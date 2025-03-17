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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 20,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 20,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9,
                "end": 20,
                "typeName": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 20,
                  "name": "ArrayBuffer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 23,
            "end": 50,
            "callee": {
              "type": "Identifier",
              "start": 27,
              "end": 44,
              "name": "SharedArrayBuffer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 45,
                "end": 49,
                "value": 1024,
                "raw": "1024"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
