__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 46,
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
          "end": 21,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 21,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 23,
          "end": 32,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 32,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 34,
          "end": 43,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 43,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 37,
              "end": 43
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 46,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        "optional": false,
        "typeArguments": null
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 67,
            "end": 72,
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        "optional": false,
        "typeArguments": null
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        "optional": false,
        "typeArguments": null
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
