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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 20,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 20,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 22,
          "end": 31,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 42,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 42,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 36,
              "end": 42
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 67,
                  "name": "from",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 77,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "let",
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 131,
            "end": 156,
            "object": {
              "type": "Identifier",
              "start": 131,
              "end": 137,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 138,
              "end": 156,
              "name": "isConcatSpreadable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
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
