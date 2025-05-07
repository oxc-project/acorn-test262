__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 148,
  "end": 248,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 158,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 156,
            "end": 158,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 203,
            "end": 210,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 100,
            "end": 107,
            "raw": "\"world\"",
            "value": "world",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 79,
  "end": 99,
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
