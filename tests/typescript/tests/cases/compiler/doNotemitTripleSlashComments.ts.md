__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 156,
            "end": 158
          },
          "definite": false,
          "start": 152,
          "end": 158
        }
      ],
      "declare": false,
      "start": 148,
      "end": 159
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 200
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 203,
            "end": 210
          },
          "definite": false,
          "start": 199,
          "end": 210
        }
      ],
      "declare": false,
      "start": 195,
      "end": 211
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 148,
  "end": 248
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 47
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 50,
        "end": 53
      },
      "expression": false,
      "start": 35,
      "end": 53
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "init": {
            "type": "Literal",
            "value": "world",
            "raw": "\"world\"",
            "start": 100,
            "end": 107
          },
          "definite": false,
          "start": 96,
          "end": 107
        }
      ],
      "declare": false,
      "start": 92,
      "end": 108
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 109
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 91
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 94,
        "end": 97
      },
      "expression": false,
      "start": 79,
      "end": 97
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 79,
  "end": 99
}
```
