__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 29,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 29,
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
          "type": "RestElement",
          "start": 13,
          "end": 26,
          "argument": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 26,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 18,
              "end": 26,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
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
      "type": "EmptyStatement",
      "start": 29,
      "end": 30
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 41,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 40,
        "arguments": [
          {
            "type": "Literal",
            "start": 35,
            "end": 36,
            "raw": "0",
            "value": 0
          },
          {
            "type": "Literal",
            "start": 38,
            "end": 39,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 31,
          "end": 34,
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
      "start": 43,
      "end": 54,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 53,
        "arguments": [
          {
            "type": "Literal",
            "start": 47,
            "end": 52,
            "raw": "'foo'",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 43,
          "end": 46,
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
      "start": 56,
      "end": 62,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 56,
        "end": 61,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 56,
          "end": 59,
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
      "end": 77,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 76,
        "arguments": [
          {
            "type": "Literal",
            "start": 67,
            "end": 68,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 70,
            "end": 75,
            "raw": "'bar'",
            "value": "bar"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
