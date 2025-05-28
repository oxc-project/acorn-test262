__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 61,
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
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
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
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 61,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 62,
        "end": 75,
        "callee": {
          "type": "Identifier",
          "start": 62,
          "end": 65,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 66,
            "end": 71,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 73,
            "end": 74,
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
      "start": 78,
      "end": 89,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 88,
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
            "end": 87,
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
      "start": 91,
      "end": 97,
      "expression": {
        "type": "CallExpression",
        "start": 91,
        "end": 96,
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
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 112,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 111,
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
            "end": 103,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 105,
            "end": 110,
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
      "start": 113,
      "end": 130,
      "expression": {
        "type": "CallExpression",
        "start": 113,
        "end": 129,
        "callee": {
          "type": "Identifier",
          "start": 113,
          "end": 116,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 117,
            "end": 122,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 124,
            "end": 125,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 127,
            "end": 128,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 155,
      "expression": {
        "type": "CallExpression",
        "start": 131,
        "end": 154,
        "callee": {
          "type": "Identifier",
          "start": 131,
          "end": 134,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 135,
            "end": 140,
            "value": "foo",
            "raw": "'foo'"
          },
          {
            "type": "Literal",
            "start": 142,
            "end": 147,
            "value": "bar",
            "raw": "'bar'"
          },
          {
            "type": "Literal",
            "start": 149,
            "end": 150,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 152,
            "end": 153,
            "value": 4,
            "raw": "4"
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
