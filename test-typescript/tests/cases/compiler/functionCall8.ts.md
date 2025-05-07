__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 25,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 25,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 22,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 16,
              "end": 22
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 37,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 26,
        "end": 36,
        "arguments": [
          {
            "type": "Literal",
            "start": 30,
            "end": 35,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 26,
          "end": 29,
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
      "start": 39,
      "end": 57,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 39,
        "end": 56,
        "arguments": [
          {
            "type": "Literal",
            "start": 43,
            "end": 48,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 50,
            "end": 55,
            "raw": "'bar'",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 39,
          "end": 42,
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
      "start": 59,
      "end": 66,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 59,
        "end": 65,
        "arguments": [
          {
            "type": "Literal",
            "start": 63,
            "end": 64,
            "raw": "4",
            "value": 4,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 59,
          "end": 62,
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
      "start": 67,
      "end": 73,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 67,
        "end": 72,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 67,
          "end": 70,
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
