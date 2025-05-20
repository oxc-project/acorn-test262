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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 16,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 16,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 9,
                "end": 16
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 18,
      "end": 30,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 18,
        "end": 29,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 18,
          "end": 27,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 22,
            "end": 27,
            "decorators": [],
            "name": "toBAZ",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
