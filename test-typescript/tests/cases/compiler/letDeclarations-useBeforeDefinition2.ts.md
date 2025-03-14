file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 3,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 2,
      "expression": {
        "type": "Identifier",
        "start": 0,
        "end": 1,
        "decorators": [],
        "name": "l",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 13,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "l",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "raw": "0",
            "value": 0
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
