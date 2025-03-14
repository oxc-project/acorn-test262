breakInIterationOrSwitchStatement4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "ForInStatement",
      "start": 0,
      "end": 37,
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 37,
        "body": [
          {
            "type": "BreakStatement",
            "start": 29,
            "end": 35,
            "label": null
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "decorators": [],
        "name": "something",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
