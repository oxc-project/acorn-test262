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
      "expression": {
        "type": "CallExpression",
        "start": 319,
        "end": 353,
        "callee": {
          "type": "Identifier",
          "start": 319,
          "end": 323,
          "decorators": [],
          "name": "eval",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 324,
            "end": 352,
            "value": " var x = 1 ",
            "raw": "\"\\u00A0var x\\u00A0= 1\\u00A0\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 355,
      "end": 451,
      "test": {
        "type": "BinaryExpression",
        "start": 359,
        "end": 366,
        "left": {
          "type": "Identifier",
          "start": 359,
          "end": 360,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 365,
          "end": 366,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 368,
        "end": 451,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 372,
            "end": 449,
            "expression": {
              "type": "CallExpression",
              "start": 372,
              "end": 448,
              "callee": {
                "type": "Identifier",
                "start": 372,
                "end": 378,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 379,
                  "end": 447,
                  "left": {
                    "type": "Literal",
                    "start": 379,
                    "end": 441,
                    "value": "#1: eval(\"\\u00A0var x\\u00A0= 1\\u00A0\"); x === 1. Actual: ",
                    "raw": "'#1: eval(\"\\\\u00A0var x\\\\u00A0= 1\\\\u00A0\"); x === 1. Actual: '"
                  },
                  "operator": "+",
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
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 475,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 473,
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
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 476,
      "end": 546,
      "test": {
        "type": "BinaryExpression",
        "start": 480,
        "end": 487,
        "left": {
          "type": "Identifier",
          "start": 480,
          "end": 481,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 486,
          "end": 487,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 489,
        "end": 546,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 493,
            "end": 544,
            "expression": {
              "type": "CallExpression",
              "start": 493,
              "end": 543,
              "callee": {
                "type": "Identifier",
                "start": 493,
                "end": 499,
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 500,
                  "end": 542,
                  "left": {
                    "type": "Literal",
                    "start": 500,
                    "end": 536,
                    "value": "#2:  var x = 1 ; x === 1. Actual: ",
                    "raw": "'#2:  var x = 1 ; x === 1. Actual: '"
                  },
                  "operator": "+",
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
              "optional": false
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
