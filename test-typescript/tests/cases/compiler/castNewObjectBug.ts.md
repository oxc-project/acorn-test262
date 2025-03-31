__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 17,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 24,
            "name": "xx",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 27,
            "end": 45,
            "expression": {
              "type": "NewExpression",
              "start": 33,
              "end": 45,
              "callee": {
                "type": "Identifier",
                "start": 37,
                "end": 43,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 28,
              "end": 31,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 31,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
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
