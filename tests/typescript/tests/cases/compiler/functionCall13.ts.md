__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
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
          "type": "RestElement",
          "start": 23,
          "end": 36,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 36,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 28,
              "end": 36,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 39,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 54,
      "expression": {
        "type": "CallExpression",
        "start": 40,
        "end": 53,
        "callee": {
          "type": "Identifier",
          "start": 40,
          "end": 43,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 44,
            "end": 49,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 51,
            "end": 52,
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
      "start": 56,
      "end": 67,
      "expression": {
        "type": "CallExpression",
        "start": 56,
        "end": 66,
        "callee": {
          "type": "Identifier",
          "start": 56,
          "end": 59,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 60,
            "end": 65,
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
      "start": 69,
      "end": 75,
      "expression": {
        "type": "CallExpression",
        "start": 69,
        "end": 74,
        "callee": {
          "type": "Identifier",
          "start": 69,
          "end": 72,
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
      "start": 76,
      "end": 90,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 89,
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
        "arguments": [
          {
            "type": "Literal",
            "start": 80,
            "end": 81,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 83,
            "end": 88,
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
      "start": 91,
      "end": 108,
      "expression": {
        "type": "CallExpression",
        "start": 91,
        "end": 107,
        "callee": {
          "type": "Identifier",
          "start": 91,
          "end": 94,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 95,
            "end": 100,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 102,
            "end": 103,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 105,
            "end": 106,
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
