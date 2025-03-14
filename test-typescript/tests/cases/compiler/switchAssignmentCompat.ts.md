__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 13,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "SwitchStatement",
      "start": 15,
      "end": 68,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 32,
          "end": 48,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 42,
              "end": 48,
              "label": null
            }
          ],
          "test": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "start": 23,
        "end": 24,
        "raw": "0",
        "value": 0
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
