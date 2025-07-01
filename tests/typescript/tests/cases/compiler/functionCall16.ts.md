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
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              },
              "start": 39,
              "end": 47
            },
            "start": 38,
            "end": 47
          },
          "value": null,
          "start": 34,
          "end": 47
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 48,
        "end": 50
      },
      "expression": false,
      "start": 0,
      "end": 50
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
          "start": 51,
          "end": 54
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 55,
            "end": 60
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 62,
            "end": 63
          }
        ],
        "optional": false,
        "start": 51,
        "end": 64
      },
      "directive": null,
      "start": 51,
      "end": 65
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
          "start": 67,
          "end": 70
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 71,
            "end": 76
          }
        ],
        "optional": false,
        "start": 67,
        "end": 77
      },
      "directive": null,
      "start": 67,
      "end": 78
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
          "start": 80,
          "end": 83
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 84,
            "end": 89
          },
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 91,
            "end": 96
          }
        ],
        "optional": false,
        "start": 80,
        "end": 97
      },
      "directive": null,
      "start": 80,
      "end": 98
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
          "start": 100,
          "end": 103
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 100,
        "end": 105
      },
      "directive": null,
      "start": 100,
      "end": 106
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
          "start": 107,
          "end": 110
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 111,
            "end": 112
          },
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 114,
            "end": 119
          }
        ],
        "optional": false,
        "start": 107,
        "end": 120
      },
      "directive": null,
      "start": 107,
      "end": 121
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
          "start": 122,
          "end": 125
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 126,
            "end": 131
          },
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 133,
            "end": 138
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 140,
            "end": 141
          }
        ],
        "optional": false,
        "start": 122,
        "end": 142
      },
      "directive": null,
      "start": 122,
      "end": 143
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 143
}
```
