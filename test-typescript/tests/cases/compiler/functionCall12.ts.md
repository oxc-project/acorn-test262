__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 46,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 46,
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
        },
        {
          "type": "Identifier",
          "start": 23,
          "end": 32,
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 32,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            }
          }
        },
        {
          "type": "Identifier",
          "start": 34,
          "end": 43,
          "decorators": [],
          "name": "c",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 43,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 37,
              "end": 43
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 61,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 47,
        "end": 60,
        "arguments": [
          {
            "type": "Literal",
            "start": 51,
            "end": 56,
            "raw": "'foo'",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 58,
            "end": 59,
            "raw": "1",
            "value": 1
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
      "start": 63,
      "end": 74,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 73,
        "arguments": [
          {
            "type": "Literal",
            "start": 67,
            "end": 72,
            "raw": "'foo'",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 66,
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
      "start": 76,
      "end": 82,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 81,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 76,
          "end": 79,
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
      "start": 83,
      "end": 97,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 96,
        "arguments": [
          {
            "type": "Literal",
            "start": 87,
            "end": 88,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 90,
            "end": 95,
            "raw": "'bar'",
            "value": "bar"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 83,
          "end": 86,
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
      "start": 98,
      "end": 119,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 118,
        "arguments": [
          {
            "type": "Literal",
            "start": 102,
            "end": 107,
            "raw": "'foo'",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 109,
            "end": 110,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 112,
            "end": 117,
            "raw": "'bar'",
            "value": "bar"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 98,
          "end": 101,
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
      "start": 120,
      "end": 137,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 136,
        "arguments": [
          {
            "type": "Literal",
            "start": 124,
            "end": 129,
            "raw": "'foo'",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 131,
            "end": 132,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 134,
            "end": 135,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 123,
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
