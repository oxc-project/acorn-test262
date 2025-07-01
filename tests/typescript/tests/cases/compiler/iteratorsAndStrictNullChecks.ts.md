__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "init": null,
            "definite": false,
            "start": 22,
            "end": 23
          }
        ],
        "declare": false,
        "start": 16,
        "end": 23
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 28,
            "end": 31
          },
          {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 33,
            "end": 36
          }
        ],
        "start": 27,
        "end": 37
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substring",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 56
              },
              "optional": false,
              "computed": false,
              "start": 45,
              "end": 56
            },
            "directive": null,
            "start": 45,
            "end": 57
          }
        ],
        "start": 39,
        "end": 59
      },
      "start": 11,
      "end": 59
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 79
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 83,
                "end": 84
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 86,
                "end": 87
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 89,
                "end": 90
              }
            ],
            "start": 82,
            "end": 91
          },
          "definite": false,
          "start": 77,
          "end": 91
        }
      ],
      "declare": false,
      "start": 71,
      "end": 92
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ys",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 101
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 105,
                "end": 106
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 108,
                "end": 109
              }
            ],
            "start": 104,
            "end": 110
          },
          "definite": false,
          "start": 99,
          "end": 110
        }
      ],
      "declare": false,
      "start": 93,
      "end": 111
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
            "name": "xs",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 119
          },
          "optional": false,
          "computed": false,
          "start": 112,
          "end": 119
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ys",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "start": 120,
            "end": 125
          }
        ],
        "optional": false,
        "start": 112,
        "end": 126
      },
      "directive": null,
      "start": 112,
      "end": 127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 127
}
```
