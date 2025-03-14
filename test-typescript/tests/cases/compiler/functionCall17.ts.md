__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 156,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 61,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 61,
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
              "type": "TSStringKeyword",
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
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            }
          }
        },
        {
          "type": "RestElement",
          "start": 45,
          "end": 58,
          "argument": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 58,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 50,
              "end": 58,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 50,
                "end": 56
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 62,
        "end": 75,
        "arguments": [
          {
            "type": "Literal",
            "start": 66,
            "end": 71,
            "raw": "'foo'",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 73,
            "end": 74,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 62,
          "end": 65,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 89,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 88,
        "arguments": [
          {
            "type": "Literal",
            "start": 82,
            "end": 87,
            "raw": "'foo'",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 81,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 97,
      "expression": {
        "type": "CallExpression",
        "start": 91,
        "end": 96,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 91,
          "end": 94,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 112,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 111,
        "arguments": [
          {
            "type": "Literal",
            "start": 102,
            "end": 103,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 105,
            "end": 110,
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
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 130,
      "expression": {
        "type": "CallExpression",
        "start": 113,
        "end": 129,
        "arguments": [
          {
            "type": "Literal",
            "start": 117,
            "end": 122,
            "raw": "'foo'",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 124,
            "end": 125,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 127,
            "end": 128,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 113,
          "end": 116,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 155,
      "expression": {
        "type": "CallExpression",
        "start": 131,
        "end": 154,
        "arguments": [
          {
            "type": "Literal",
            "start": 135,
            "end": 140,
            "raw": "'foo'",
            "value": "foo"
          },
          {
            "type": "Literal",
            "start": 142,
            "end": 147,
            "raw": "'bar'",
            "value": "bar"
          },
          {
            "type": "Literal",
            "start": 149,
            "end": 150,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 152,
            "end": 153,
            "raw": "4",
            "value": 4
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 131,
          "end": 134,
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
