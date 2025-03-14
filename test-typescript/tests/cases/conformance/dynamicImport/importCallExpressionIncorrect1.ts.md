__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 60,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 27,
        "end": 59,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 42,
          "end": 59,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 44,
              "end": 57,
              "argument": {
                "type": "Literal",
                "start": 51,
                "end": 56,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Expression expected.
```
