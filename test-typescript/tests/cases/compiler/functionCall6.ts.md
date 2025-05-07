__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 24,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 24,
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
          "end": 21,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 21,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 24,
      "end": 25
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 27,
        "end": 37,
        "arguments": [
          {
            "type": "Literal",
            "start": 31,
            "end": 36,
            "raw": "'bar'",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 27,
          "end": 30,
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
      "end": 46,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 39,
        "end": 45,
        "arguments": [
          {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "raw": "2",
            "value": 2,
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
      "start": 47,
      "end": 65,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 47,
        "end": 64,
        "arguments": [
          {
            "type": "Literal",
            "start": 51,
            "end": 56,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 58,
            "end": 63,
            "raw": "'bar'",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
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
      "start": 66,
      "end": 72,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 66,
        "end": 71,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 66,
          "end": 69,
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
