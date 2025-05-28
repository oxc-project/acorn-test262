__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
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
          "start": 11,
          "end": 20,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 20,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            }
          }
        },
        {
          "type": "Identifier",
          "start": 22,
          "end": 31,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 42,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 42,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 36,
              "end": 42
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 81,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 50,
            "end": 79,
            "argument": {
              "type": "CallExpression",
              "start": 57,
              "end": 78,
              "callee": {
                "type": "MemberExpression",
                "start": 57,
                "end": 67,
                "object": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 62,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 67,
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 77,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 94,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 93,
        "callee": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 85,
            "end": 86,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 88,
            "end": 89,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 91,
            "end": 92,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 128,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 117,
            "end": 127,
            "elements": [
              {
                "type": "Literal",
                "start": 118,
                "end": 121,
                "value": "c",
                "raw": "'c'"
              },
              {
                "type": "Literal",
                "start": 123,
                "end": 126,
                "value": "d",
                "raw": "'d'"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 165,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 129,
          "end": 157,
          "object": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "MemberExpression",
            "start": 131,
            "end": 156,
            "object": {
              "type": "Identifier",
              "start": 131,
              "end": 137,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 138,
              "end": 156,
              "decorators": [],
              "name": "isConcatSpreadable",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 160,
          "end": 165,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
