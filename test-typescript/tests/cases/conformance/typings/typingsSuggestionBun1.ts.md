a.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "file",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 30,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 29,
                "raw": "\"/a.ts\"",
                "value": "/a.ts"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 13,
              "end": 21,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 13,
                "end": 16,
                "decorators": [],
                "name": "Bun",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 17,
                "end": 21,
                "decorators": [],
                "name": "file",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
