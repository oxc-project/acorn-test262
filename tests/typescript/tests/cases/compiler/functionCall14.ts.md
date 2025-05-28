__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 40,
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
        },
        {
          "type": "RestElement",
          "start": 24,
          "end": 37,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 37,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 29,
              "end": 37,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 29,
                "end": 35
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 40,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 56,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 55,
        "callee": {
          "type": "Identifier",
          "start": 42,
          "end": 45,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 46,
            "end": 51,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 53,
            "end": 54,
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
      "start": 58,
      "end": 69,
      "expression": {
        "type": "CallExpression",
        "start": 58,
        "end": 68,
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 61,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 62,
            "end": 67,
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
      "start": 71,
      "end": 77,
      "expression": {
        "type": "CallExpression",
        "start": 71,
        "end": 76,
        "callee": {
          "type": "Identifier",
          "start": 71,
          "end": 74,
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
      "start": 78,
      "end": 92,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 91,
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 81,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 82,
            "end": 83,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 85,
            "end": 90,
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
      "start": 93,
      "end": 110,
      "expression": {
        "type": "CallExpression",
        "start": 93,
        "end": 109,
        "callee": {
          "type": "Identifier",
          "start": 93,
          "end": 96,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 97,
            "end": 102,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 104,
            "end": 105,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 107,
            "end": 108,
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
