__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1,
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
      "start": 11,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 18,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 21,
            "end": 42,
            "alternate": {
              "type": "ArrowFunctionExpression",
              "start": 35,
              "end": 42,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 41,
                "end": 42,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "start": 25,
              "end": 32,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 31,
                "end": 32,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "test": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
