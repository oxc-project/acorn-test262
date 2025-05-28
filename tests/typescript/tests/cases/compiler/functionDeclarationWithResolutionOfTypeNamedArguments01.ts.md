__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "arguments",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 23,
        "body": []
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 67,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 44,
            "end": 65,
            "expression": {
              "type": "TSTypeAssertion",
              "start": 44,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 45,
                "end": 54,
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 54,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "Identifier",
                "start": 55,
                "end": 64,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
