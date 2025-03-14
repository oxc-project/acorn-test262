modularizeLibrary_ErrorFromUsingWellknownSymbolWithOutES6WellknownSymbolLib.ts
```json
{
  "type": "Program",
  "start": 27,
  "end": 193,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 108,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 71,
        "end": 108,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 77,
            "end": 106,
            "argument": {
              "type": "CallExpression",
              "start": 84,
              "end": 105,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 95,
                  "end": 104,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 84,
                "end": 94,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 89,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 94,
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
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 38,
          "end": 47,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 47,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 41,
              "end": 47
            }
          }
        },
        {
          "type": "Identifier",
          "start": 49,
          "end": 58,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 58,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 52,
              "end": 58
            }
          }
        },
        {
          "type": "Identifier",
          "start": 60,
          "end": 69,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 69,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 63,
              "end": 69
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 121,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 120,
        "arguments": [
          {
            "type": "Literal",
            "start": 112,
            "end": 113,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 115,
            "end": 116,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 118,
            "end": 119,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 144,
            "end": 154,
            "elements": [
              {
                "type": "Literal",
                "start": 145,
                "end": 148,
                "raw": "'c'",
                "value": "c"
              },
              {
                "type": "Literal",
                "start": 150,
                "end": 153,
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
      "start": 156,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 156,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 156,
          "end": 184,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 158,
            "end": 183,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 158,
              "end": 164,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 165,
              "end": 183,
              "decorators": [],
              "name": "isConcatSpreadable",
              "optional": false
            }
          }
        },
        "right": {
          "type": "Literal",
          "start": 187,
          "end": 192,
          "raw": "false",
          "value": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
