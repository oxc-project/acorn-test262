__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 127,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 11,
      "end": 59,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 59,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 45,
            "end": 57,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 45,
              "end": 56,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 56,
                "decorators": [],
                "name": "substring",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 16,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 22,
            "end": 23,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
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
            "raw": "\"a\"",
            "value": "a",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 33,
            "end": 36,
            "raw": "\"b\"",
            "value": "b",
            "regex": null,
            "bigint": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 86,
                "end": 87,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 89,
                "end": 90,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "decorators": [],
            "name": "ys",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 108,
                "end": 109,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 127,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 112,
        "end": 126,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 120,
            "end": 125,
            "argument": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "decorators": [],
              "name": "ys",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 112,
          "end": 119,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 112,
            "end": 114,
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 119,
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null
          }
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
