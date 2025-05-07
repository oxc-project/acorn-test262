__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 23,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 23,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 12,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
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
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 4,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 3,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5,
      "end": 10,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 5,
        "end": 9,
        "arguments": [
          {
            "type": "Literal",
            "start": 7,
            "end": 8,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5,
          "end": 6,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 11,
      "end": 19,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 11,
        "end": 18,
        "arguments": [
          {
            "type": "Literal",
            "start": 13,
            "end": 14,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 16,
            "end": 17,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 11,
          "end": 12,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 31,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 20,
        "end": 30,
        "arguments": [
          {
            "type": "Literal",
            "start": 22,
            "end": 23,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 25,
            "end": 26,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 28,
            "end": 29,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
