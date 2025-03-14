__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 34,
        "end": 36,
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
        "optional": false
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
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 33,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 27,
              "end": 33
            }
          }
        }
      ]
    },
    {
      "type": "EmptyStatement",
      "start": 36,
      "end": 37
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 52,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 51,
        "arguments": [
          {
            "type": "Literal",
            "start": 42,
            "end": 47,
            "raw": "'foo'",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 49,
            "end": 50,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 38,
          "end": 41,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 65,
      "expression": {
        "type": "CallExpression",
        "start": 54,
        "end": 64,
        "arguments": [
          {
            "type": "Literal",
            "start": 58,
            "end": 63,
            "raw": "'foo'",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 84,
      "expression": {
        "type": "CallExpression",
        "start": 67,
        "end": 83,
        "arguments": [
          {
            "type": "Literal",
            "start": 71,
            "end": 76,
            "raw": "'foo'",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 77,
            "end": 82,
            "raw": "'bar'",
            "value": "bar"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 67,
          "end": 70,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 106,
      "expression": {
        "type": "CallExpression",
        "start": 85,
        "end": 105,
        "arguments": [
          {
            "type": "Literal",
            "start": 89,
            "end": 94,
            "raw": "'foo'",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 96,
            "end": 97,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 99,
            "end": 104,
            "raw": "'bar'",
            "value": "bar"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 85,
          "end": 88,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 113,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 112,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 110,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
