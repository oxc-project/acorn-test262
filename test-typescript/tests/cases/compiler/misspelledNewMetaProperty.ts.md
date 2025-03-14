misspelledNewMetaProperty.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 25,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 25,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 25,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 16,
            "end": 24,
            "expression": {
              "type": "MetaProperty",
              "start": 16,
              "end": 24,
              "meta": {
                "type": "Identifier",
                "start": 16,
                "end": 19,
                "decorators": [],
                "name": "new",
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 20,
                "end": 24,
                "decorators": [],
                "name": "targ",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
