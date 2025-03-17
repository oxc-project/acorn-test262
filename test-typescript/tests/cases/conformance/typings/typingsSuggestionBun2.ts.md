__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "name": "file",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 30,
            "callee": {
              "type": "MemberExpression",
              "start": 13,
              "end": 21,
              "object": {
                "type": "Identifier",
                "start": 13,
                "end": 16,
                "name": "Bun",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 17,
                "end": 21,
                "name": "file",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 29,
                "value": "/a.ts",
                "raw": "\"/a.ts\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
