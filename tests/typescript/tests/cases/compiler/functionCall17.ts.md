__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            },
            "start": 14,
            "end": 21
          },
          "start": 13,
          "end": 21
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 26,
              "end": 32
            },
            "start": 25,
            "end": 32
          },
          "start": 23,
          "end": 32
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "start": 36,
            "end": 43
          },
          "start": 34,
          "end": 43
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 50,
                "end": 56
              },
              "start": 50,
              "end": 58
            },
            "start": 49,
            "end": 58
          },
          "value": null,
          "start": 45,
          "end": 58
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 59,
        "end": 61
      },
      "expression": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 65
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 66,
            "end": 71
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 73,
            "end": 74
          }
        ],
        "optional": false,
        "start": 62,
        "end": 75
      },
      "directive": null,
      "start": 62,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 81
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 82,
            "end": 87
          }
        ],
        "optional": false,
        "start": 78,
        "end": 88
      },
      "directive": null,
      "start": 78,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 94
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 91,
        "end": 96
      },
      "directive": null,
      "start": 91,
      "end": 97
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 101
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 102,
            "end": 103
          },
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 105,
            "end": 110
          }
        ],
        "optional": false,
        "start": 98,
        "end": 111
      },
      "directive": null,
      "start": 98,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 116
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 117,
            "end": 122
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 124,
            "end": 125
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 127,
            "end": 128
          }
        ],
        "optional": false,
        "start": 113,
        "end": 129
      },
      "directive": null,
      "start": 113,
      "end": 130
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 131,
          "end": 134
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 135,
            "end": 140
          },
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 142,
            "end": 147
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 149,
            "end": 150
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 152,
            "end": 153
          }
        ],
        "optional": false,
        "start": 131,
        "end": 154
      },
      "directive": null,
      "start": 131,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
