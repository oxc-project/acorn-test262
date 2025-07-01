__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "eval",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 323
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": " var x = 1 ",
            "raw": "\"\\u00A0var x\\u00A0= 1\\u00A0\"",
            "start": 324,
            "end": 352
          }
        ],
        "optional": false,
        "start": 319,
        "end": 353
      },
      "directive": null,
      "start": 319,
      "end": 354
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 359,
          "end": 360
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 365,
          "end": 366
        },
        "start": 359,
        "end": 366
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 378
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "#1: eval(\"\\u00A0var x\\u00A0= 1\\u00A0\"); x === 1. Actual: ",
                    "raw": "'#1: eval(\"\\\\u00A0var x\\\\u00A0= 1\\\\u00A0\"); x === 1. Actual: '",
                    "start": 379,
                    "end": 441
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 446
                  },
                  "start": 379,
                  "end": 447
                }
              ],
              "optional": false,
              "start": 372,
              "end": 448
            },
            "directive": null,
            "start": 372,
            "end": 449
          }
        ],
        "start": 368,
        "end": 451
      },
      "alternate": null,
      "start": 355,
      "end": 451
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 469
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 472,
            "end": 473
          },
          "definite": false,
          "start": 468,
          "end": 473
        }
      ],
      "declare": false,
      "start": 464,
      "end": 475
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 480,
          "end": 481
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 486,
          "end": 487
        },
        "start": 480,
        "end": 487
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 499
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "#2:  var x = 1 ; x === 1. Actual: ",
                    "raw": "'#2:  var x = 1 ; x === 1. Actual: '",
                    "start": 500,
                    "end": 536
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 540,
                    "end": 541
                  },
                  "start": 500,
                  "end": 542
                }
              ],
              "optional": false,
              "start": 493,
              "end": 543
            },
            "directive": null,
            "start": 493,
            "end": 544
          }
        ],
        "start": 489,
        "end": 546
      },
      "alternate": null,
      "start": 476,
      "end": 546
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 319,
  "end": 548
}
```
