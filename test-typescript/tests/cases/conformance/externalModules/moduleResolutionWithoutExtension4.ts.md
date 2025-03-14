/src/foo.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 40,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 40,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 28,
              "end": 38,
              "argument": {
                "type": "Literal",
                "start": 35,
                "end": 37,
                "raw": "\"\"",
                "value": ""
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
