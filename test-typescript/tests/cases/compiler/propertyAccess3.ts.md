__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 16,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 16,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 9,
                "end": 16
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 18,
      "end": 30,
      "expression": {
        "type": "CallExpression",
        "start": 18,
        "end": 29,
        "callee": {
          "type": "MemberExpression",
          "start": 18,
          "end": 27,
          "object": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 22,
            "end": 27,
            "name": "toBAZ",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
