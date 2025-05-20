__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 319,
  "end": 548,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 354,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 319,
        "end": 353,
        "arguments": [
          {
            "type": "Literal",
            "start": 324,
            "end": 352,
            "raw": "\"\\u00A0var x\\u00A0= 1\\u00A0\"",
            "value": " var x = 1 "
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 319,
          "end": 323,
          "decorators": [],
          "name": "eval",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 355,
      "end": 451,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 368,
        "end": 451,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 372,
            "end": 449,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 372,
              "end": 448,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 379,
                  "end": 447,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 379,
                    "end": 441,
                    "raw": "'#1: eval(\"\\\\u00A0var x\\\\u00A0= 1\\\\u00A0\"); x === 1. Actual: '",
                    "value": "#1: eval(\"\\u00A0var x\\u00A0= 1\\u00A0\"); x === 1. Actual: "
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 446,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 372,
                "end": 378,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 359,
        "end": 366,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 359,
          "end": 360,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 365,
          "end": 366,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 473,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 469,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 472,
            "end": 473,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 476,
      "end": 546,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 489,
        "end": 546,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 493,
            "end": 544,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 493,
              "end": 543,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 500,
                  "end": 542,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 500,
                    "end": 536,
                    "raw": "'#2:  var x = 1 ; x === 1. Actual: '",
                    "value": "#2:  var x = 1 ; x === 1. Actual: "
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 540,
                    "end": 541,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 493,
                "end": 499,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 480,
        "end": 487,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 480,
          "end": 481,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 486,
          "end": 487,
          "raw": "1",
          "value": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
