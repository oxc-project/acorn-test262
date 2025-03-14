modularizeLibrary_UsingES5LibES6ArrayLibES6WellknownSymbolLib.ts
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
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 77,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 57,
                "end": 67,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 62,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 67,
                  "decorators": [],
                  "name": "from",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 94,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 93,
        "arguments": [
          {
            "type": "Literal",
            "start": 85,
            "end": 86,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 88,
            "end": 89,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 91,
            "end": 92,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "a",
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
                "raw": "'c'",
                "value": "c"
              },
              {
                "type": "Literal",
                "start": 123,
                "end": 126,
                "raw": "'d'",
                "value": "d"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 131,
            "end": 156,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 131,
              "end": 137,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 138,
              "end": 156,
              "decorators": [],
              "name": "isConcatSpreadable",
              "optional": false
            }
          }
        },
        "right": {
          "type": "Literal",
          "start": 160,
          "end": 165,
          "raw": "false",
          "value": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
