__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 68,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 20,
        "name": "arguments",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 24,
        "body": []
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 68,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 45,
            "end": 66,
            "expression": {
              "type": "TSTypeAssertion",
              "start": 45,
              "end": 65,
              "expression": {
                "type": "Identifier",
                "start": 56,
                "end": 65,
                "name": "arguments",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 55,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
