__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": "",
            "raw": "''"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 43,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 20,
            "end": 42,
            "callee": {
              "type": "MemberExpression",
              "start": 20,
              "end": 31,
              "object": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 22,
                "end": 30,
                "value": "charAt",
                "raw": "'charAt'"
              },
              "optional": false,
              "computed": true
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 32,
                "end": 41,
                "value": "invalid",
                "raw": "'invalid'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
