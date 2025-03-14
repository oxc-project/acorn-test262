file0.ts
```json
{
  "type": "Program",
  "start": 175,
  "end": 275,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 183,
            "end": 185,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 237,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 230,
            "end": 237,
            "raw": "\"hello\"",
            "value": "hello"
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
file1.ts
```json
{
  "type": "Program",
  "start": 35,
  "end": 109,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 53,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 53,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 47,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 100,
            "end": 107,
            "raw": "\"world\"",
            "value": "world"
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
  "start": 79,
  "end": 100,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 79,
      "end": 97,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 97,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 91,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
