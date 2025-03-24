__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 320,
  "end": 549,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 320,
      "end": 355,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 320,
        "end": 354,
        "arguments": [
          {
            "type": "Literal",
            "start": 325,
            "end": 353,
            "raw": "\"\\u00A0var x\\u00A0= 1\\u00A0\"",
            "value": " var x = 1 "
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 320,
          "end": 324,
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
      "start": 356,
      "end": 452,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 369,
        "end": 452,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 373,
            "end": 450,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 373,
              "end": 449,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 380,
                  "end": 448,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 380,
                    "end": 442,
                    "raw": "'#1: eval(\"\\\\u00A0var x\\\\u00A0= 1\\\\u00A0\"); x === 1. Actual: '",
                    "value": "#1: eval(\"\\u00A0var x\\u00A0= 1\\u00A0\"); x === 1. Actual: "
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 447,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 373,
                "end": 379,
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
        "start": 360,
        "end": 367,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 366,
          "end": 367,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 465,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 469,
          "end": 474,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 469,
            "end": 470,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 473,
            "end": 474,
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
      "start": 477,
      "end": 547,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 490,
        "end": 547,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 494,
            "end": 545,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 494,
              "end": 544,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 501,
                  "end": 543,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 501,
                    "end": 537,
                    "raw": "'#2:  var x = 1 ; x === 1. Actual: '",
                    "value": "#2:  var x = 1 ; x === 1. Actual: "
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 541,
                    "end": 542,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 494,
                "end": 500,
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
        "start": 481,
        "end": 488,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 481,
          "end": 482,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 487,
          "end": 488,
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
