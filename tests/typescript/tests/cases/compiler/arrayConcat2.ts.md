__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 7,
                  "end": 13
                },
                "start": 7,
                "end": 15
              },
              "start": 5,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 18,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 23
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "concat",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 30
          },
          "optional": false,
          "computed": false,
          "start": 22,
          "end": 30
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 31,
            "end": 38
          },
          {
            "type": "Literal",
            "value": "world",
            "raw": "'world'",
            "start": 40,
            "end": 47
          }
        ],
        "optional": false,
        "start": 22,
        "end": 48
      },
      "directive": null,
      "start": 22,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 52
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "concat",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 59
          },
          "optional": false,
          "computed": false,
          "start": 51,
          "end": 59
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Hello",
            "raw": "'Hello'",
            "start": 60,
            "end": 67
          }
        ],
        "optional": false,
        "start": 51,
        "end": 68
      },
      "directive": null,
      "start": 51,
      "end": 69
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 88
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 89,
                  "end": 95
                }
              ],
              "start": 88,
              "end": 96
            },
            "arguments": [],
            "start": 79,
            "end": 98
          },
          "definite": false,
          "start": 75,
          "end": 98
        }
      ],
      "declare": false,
      "start": 71,
      "end": 99
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 101
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "concat",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 108
          },
          "optional": false,
          "computed": false,
          "start": 100,
          "end": 108
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "'hello'",
            "start": 109,
            "end": 116
          }
        ],
        "optional": false,
        "start": 100,
        "end": 117
      },
      "directive": null,
      "start": 100,
      "end": 118
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 118
}
```
