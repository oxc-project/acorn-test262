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
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 16,
              "end": 22
            },
            "start": 15,
            "end": 22
          },
          "start": 13,
          "end": 22
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 29,
                "end": 35
              },
              "start": 29,
              "end": 37
            },
            "start": 28,
            "end": 37
          },
          "value": null,
          "start": 24,
          "end": 37
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 38,
        "end": 40
      },
      "expression": false,
      "start": 0,
      "end": 40
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
          "start": 42,
          "end": 45
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 46,
            "end": 51
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 53,
            "end": 54
          }
        ],
        "optional": false,
        "start": 42,
        "end": 55
      },
      "directive": null,
      "start": 42,
      "end": 56
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
          "start": 58,
          "end": 61
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 62,
            "end": 67
          }
        ],
        "optional": false,
        "start": 58,
        "end": 68
      },
      "directive": null,
      "start": 58,
      "end": 69
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
          "start": 71,
          "end": 74
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 71,
        "end": 76
      },
      "directive": null,
      "start": 71,
      "end": 77
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
            "value": 1,
            "raw": "1",
            "start": 82,
            "end": 83
          },
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 85,
            "end": 90
          }
        ],
        "optional": false,
        "start": 78,
        "end": 91
      },
      "directive": null,
      "start": 78,
      "end": 92
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
          "start": 93,
          "end": 96
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 97,
            "end": 102
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 104,
            "end": 105
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 107,
            "end": 108
          }
        ],
        "optional": false,
        "start": 93,
        "end": 109
      },
      "directive": null,
      "start": 93,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
