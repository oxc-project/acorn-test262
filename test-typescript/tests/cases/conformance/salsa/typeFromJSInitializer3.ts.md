__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 162,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 70,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 70,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 51,
            "end": 68,
            "argument": {
              "type": "Identifier",
              "start": 58,
              "end": 67,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 42,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 81,
            "end": 85,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 81,
              "end": 83,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 113,
      "end": 147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 147,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 133,
            "end": 145,
            "argument": {
              "type": "Literal",
              "start": 140,
              "end": 144,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 124,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 158,
            "end": 162,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 158,
              "end": 160,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
