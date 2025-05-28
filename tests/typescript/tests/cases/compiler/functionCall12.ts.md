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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 46,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 61,
      "expression": {
        "type": "CallExpression",
        "start": 47,
        "end": 60,
        "callee": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 51,
            "end": 56,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 58,
            "end": 59,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 74,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 73,
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 66,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 67,
            "end": 72,
            "value": "foo",
            "raw": "'foo'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 81,
        "callee": {
          "type": "Identifier",
          "start": 76,
          "end": 79,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 97,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 96,
        "callee": {
          "type": "Identifier",
          "start": 83,
          "end": 86,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 87,
            "end": 88,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 90,
            "end": 95,
            "value": "bar",
            "raw": "'bar'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 119,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 118,
        "callee": {
          "type": "Identifier",
          "start": 98,
          "end": 101,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 102,
            "end": 107,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 109,
            "end": 110,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 112,
            "end": 117,
            "value": "bar",
            "raw": "'bar'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 136,
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 123,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 124,
            "end": 129,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 131,
            "end": 132,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 134,
            "end": 135,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
