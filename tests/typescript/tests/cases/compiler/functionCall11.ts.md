__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 35,
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
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 35,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 51,
      "expression": {
        "type": "CallExpression",
        "start": 37,
        "end": 50,
        "callee": {
          "type": "Identifier",
          "start": 37,
          "end": 40,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 41,
            "end": 46,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 48,
            "end": 49,
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
      "start": 53,
      "end": 64,
      "expression": {
        "type": "CallExpression",
        "start": 53,
        "end": 63,
        "callee": {
          "type": "Identifier",
          "start": 53,
          "end": 56,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 57,
            "end": 62,
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
      "start": 66,
      "end": 72,
      "expression": {
        "type": "CallExpression",
        "start": 66,
        "end": 71,
        "callee": {
          "type": "Identifier",
          "start": 66,
          "end": 69,
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
      "start": 73,
      "end": 87,
      "expression": {
        "type": "CallExpression",
        "start": 73,
        "end": 86,
        "callee": {
          "type": "Identifier",
          "start": 73,
          "end": 76,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 77,
            "end": 78,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 80,
            "end": 85,
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
      "start": 88,
      "end": 109,
      "expression": {
        "type": "CallExpression",
        "start": 88,
        "end": 108,
        "callee": {
          "type": "Identifier",
          "start": 88,
          "end": 91,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 92,
            "end": 97,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 99,
            "end": 100,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 102,
            "end": 107,
            "value": "bar",
            "raw": "'bar'"
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
