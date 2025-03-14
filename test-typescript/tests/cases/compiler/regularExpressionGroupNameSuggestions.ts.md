regularExpressionGroupNameSuggestions.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "regex",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 14,
            "end": 31,
            "raw": "/(?<foo>)\\k<Foo>/",
            "regex": {
              "flags": "",
              "pattern": "(?<foo>)\\k<Foo>"
            },
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
