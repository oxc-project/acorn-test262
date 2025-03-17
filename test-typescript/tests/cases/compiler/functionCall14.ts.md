__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 40,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 40,
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
        },
        {
          "type": "RestElement",
          "start": 24,
          "end": 37,
          "argument": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 56,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 55,
        "arguments": [
          {
            "type": "Literal",
            "start": 46,
            "end": 51,
            "raw": "'foo'",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 53,
            "end": 54,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 42,
          "end": 45,
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
      "start": 58,
      "end": 69,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 58,
        "end": 68,
        "arguments": [
          {
            "type": "Literal",
            "start": 62,
            "end": 67,
            "raw": "'foo'",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 61,
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
      "start": 71,
      "end": 77,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 71,
        "end": 76,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 71,
          "end": 74,
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
      "start": 78,
      "end": 92,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 91,
        "arguments": [
          {
            "type": "Literal",
            "start": 82,
            "end": 83,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 85,
            "end": 90,
            "raw": "'bar'",
            "value": "bar"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 81,
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
      "start": 93,
      "end": 110,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 93,
        "end": 109,
        "arguments": [
          {
            "type": "Literal",
            "start": 97,
            "end": 102,
            "raw": "'foo'",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 104,
            "end": 105,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 107,
            "end": 108,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 93,
          "end": 96,
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
