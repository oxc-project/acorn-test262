__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 128,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 11,
      "end": 59,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 16,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 22,
            "end": 23,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 27,
        "end": 37,
        "elements": [
          {
            "type": "Literal",
            "start": 28,
            "end": 31,
            "value": "a",
            "raw": "\"a\""
          },
          {
            "type": "Literal",
            "start": 33,
            "end": 36,
            "value": "b",
            "raw": "\"b\""
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 59,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 45,
            "end": 57,
            "expression": {
              "type": "MemberExpression",
              "start": 45,
              "end": 56,
              "object": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 56,
                "name": "substring",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "name": "xs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 82,
            "end": 91,
            "elements": [
              {
                "type": "Literal",
                "start": 83,
                "end": 84,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 86,
                "end": 87,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 89,
                "end": 90,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "name": "ys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 104,
            "end": 110,
            "elements": [
              {
                "type": "Literal",
                "start": 105,
                "end": 106,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 108,
                "end": 109,
                "value": 5,
                "raw": "5"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 127,
      "expression": {
        "type": "CallExpression",
        "start": 112,
        "end": 126,
        "callee": {
          "type": "MemberExpression",
          "start": 112,
          "end": 119,
          "object": {
            "type": "Identifier",
            "start": 112,
            "end": 114,
            "name": "xs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 119,
            "name": "push",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 120,
            "end": 125,
            "argument": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "name": "ys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
