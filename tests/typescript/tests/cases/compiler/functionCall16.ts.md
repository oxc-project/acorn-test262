__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 50,
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
              "type": "TSStringKeyword",
              "start": 26,
              "end": 32
            }
          }
        },
        {
          "type": "RestElement",
          "start": 34,
          "end": 47,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 38,
            "end": 47,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 39,
              "end": 47,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 50,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 65,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 64,
        "callee": {
          "type": "Identifier",
          "start": 51,
          "end": 54,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 55,
            "end": 60,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 62,
            "end": 63,
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
      "start": 67,
      "end": 78,
      "expression": {
        "type": "CallExpression",
        "start": 67,
        "end": 77,
        "callee": {
          "type": "Identifier",
          "start": 67,
          "end": 70,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 71,
            "end": 76,
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
      "start": 80,
      "end": 98,
      "expression": {
        "type": "CallExpression",
        "start": 80,
        "end": 97,
        "callee": {
          "type": "Identifier",
          "start": 80,
          "end": 83,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 84,
            "end": 89,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 91,
            "end": 96,
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
      "start": 100,
      "end": 106,
      "expression": {
        "type": "CallExpression",
        "start": 100,
        "end": 105,
        "callee": {
          "type": "Identifier",
          "start": 100,
          "end": 103,
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
      "start": 107,
      "end": 121,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 120,
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 110,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 111,
            "end": 112,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 114,
            "end": 119,
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
      "start": 122,
      "end": 143,
      "expression": {
        "type": "CallExpression",
        "start": 122,
        "end": 142,
        "callee": {
          "type": "Identifier",
          "start": 122,
          "end": 125,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 126,
            "end": 131,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 133,
            "end": 138,
            "value": "bar",
            "raw": "'bar'"
          },
          {
            "type": "Literal",
            "start": 140,
            "end": 141,
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
