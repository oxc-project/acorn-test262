file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 14,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "var1",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 11,
            "end": 12,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "var1",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 11,
            "end": 12,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module"
}
```
