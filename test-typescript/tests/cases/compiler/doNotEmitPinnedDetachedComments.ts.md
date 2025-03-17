__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 300,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 34,
            "end": 36,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 67,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 85,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 162,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 165,
        "end": 212,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 214,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 226,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 229,
        "end": 270,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 259,
            "end": 268,
            "argument": {
              "type": "Literal",
              "start": 266,
              "end": 267,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
