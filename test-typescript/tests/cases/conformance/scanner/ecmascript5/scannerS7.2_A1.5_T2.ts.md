__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 320,
  "end": 550,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 320,
      "end": 355,
      "expression": {
        "type": "CallExpression",
        "start": 320,
        "end": 354,
        "callee": {
          "type": "Identifier",
          "start": 320,
          "end": 324,
          "name": "eval",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 325,
            "end": 353,
            "value": " var x = 1 ",
            "raw": "\"\\u00A0var x\\u00A0= 1\\u00A0\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 356,
      "end": 452,
      "test": {
        "type": "BinaryExpression",
        "start": 360,
        "end": 367,
        "left": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 366,
          "end": 367,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 369,
        "end": 452,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 373,
            "end": 450,
            "expression": {
              "type": "CallExpression",
              "start": 373,
              "end": 449,
              "callee": {
                "type": "Identifier",
                "start": 373,
                "end": 379,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 380,
                  "end": 448,
                  "left": {
                    "type": "Literal",
                    "start": 380,
                    "end": 442,
                    "value": "#1: eval(\"\\u00A0var x\\u00A0= 1\\u00A0\"); x === 1. Actual: ",
                    "raw": "'#1: eval(\"\\\\u00A0var x\\\\u00A0= 1\\\\u00A0\"); x === 1. Actual: '"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 447,
                    "name": "x",
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
        ]
      },
      "alternate": null
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
          "id": {
            "type": "Identifier",
            "start": 469,
            "end": 470,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 473,
            "end": 474,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 477,
      "end": 547,
      "test": {
        "type": "BinaryExpression",
        "start": 481,
        "end": 488,
        "left": {
          "type": "Identifier",
          "start": 481,
          "end": 482,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 487,
          "end": 488,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 490,
        "end": 547,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 494,
            "end": 545,
            "expression": {
              "type": "CallExpression",
              "start": 494,
              "end": 544,
              "callee": {
                "type": "Identifier",
                "start": 494,
                "end": 500,
                "name": "$ERROR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 501,
                  "end": 543,
                  "left": {
                    "type": "Literal",
                    "start": 501,
                    "end": 537,
                    "value": "#2:  var x = 1 ; x === 1. Actual: ",
                    "raw": "'#2:  var x = 1 ; x === 1. Actual: '"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 541,
                    "end": 542,
                    "name": "x",
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
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
