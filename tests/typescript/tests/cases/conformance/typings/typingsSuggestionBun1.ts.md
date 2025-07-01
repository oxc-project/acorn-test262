__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "file",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bun",
                "optional": false,
                "typeAnnotation": null,
                "start": 13,
                "end": 16
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "file",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 21
              },
              "optional": false,
              "computed": false,
              "start": 13,
              "end": 21
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "/a.ts",
                "raw": "\"/a.ts\"",
                "start": 22,
                "end": 29
              }
            ],
            "optional": false,
            "start": 13,
            "end": 30
          },
          "definite": false,
          "start": 6,
          "end": 30
        }
      ],
      "declare": false,
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 31
}
```
