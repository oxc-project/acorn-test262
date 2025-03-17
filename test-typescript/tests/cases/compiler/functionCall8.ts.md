__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 22,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 16,
              "end": 22
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 25,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 37,
      "expression": {
        "type": "CallExpression",
        "start": 26,
        "end": 36,
        "callee": {
          "type": "Identifier",
          "start": 26,
          "end": 29,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 30,
            "end": 35,
            "value": "foo",
            "raw": "'foo'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 57,
      "expression": {
        "type": "CallExpression",
        "start": 39,
        "end": 56,
        "callee": {
          "type": "Identifier",
          "start": 39,
          "end": 42,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 43,
            "end": 48,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 50,
            "end": 55,
            "value": "bar",
            "raw": "'bar'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 66,
      "expression": {
        "type": "CallExpression",
        "start": 59,
        "end": 65,
        "callee": {
          "type": "Identifier",
          "start": 59,
          "end": 62,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 63,
            "end": 64,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 73,
      "expression": {
        "type": "CallExpression",
        "start": 67,
        "end": 72,
        "callee": {
          "type": "Identifier",
          "start": 67,
          "end": 70,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
