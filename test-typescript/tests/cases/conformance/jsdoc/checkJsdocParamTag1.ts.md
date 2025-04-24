__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 66,
  "end": 117,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 66,
      "end": 87,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 87,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 78,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 89,
        "end": 94,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 89,
          "end": 92,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 103,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 102,
        "arguments": [
          {
            "type": "Literal",
            "start": 100,
            "end": 101,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 96,
          "end": 99,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 117,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 104,
        "end": 116,
        "arguments": [
          {
            "type": "Literal",
            "start": 108,
            "end": 109,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 111,
            "end": 115,
            "raw": "\"hi\"",
            "value": "hi"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 104,
          "end": 107,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
