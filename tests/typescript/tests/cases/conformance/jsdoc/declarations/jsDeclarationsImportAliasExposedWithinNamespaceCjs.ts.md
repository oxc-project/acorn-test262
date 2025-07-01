__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 82
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 85,
            "end": 111
          },
          "definite": false,
          "start": 75,
          "end": 111
        }
      ],
      "declare": false,
      "start": 69,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 376
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 384
          },
          "optional": false,
          "computed": false,
          "start": 369,
          "end": 384
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 394
        },
        "start": 369,
        "end": 394
      },
      "directive": null,
      "start": 369,
      "end": 395
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 69,
  "end": 395
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 14
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 14
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 7,
                "end": 14
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 15
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 25
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./file.js",
                "raw": "'./file.js'",
                "start": 26,
                "end": 37
              }
            ],
            "optional": false,
            "start": 18,
            "end": 38
          },
          "definite": false,
          "start": 6,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 131
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 134,
            "end": 160
          },
          "definite": false,
          "start": 120,
          "end": 160
        }
      ],
      "declare": false,
      "start": 114,
      "end": 161
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 377
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": null,
          "start": 378,
          "end": 383
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 407
                },
                "prefix": true,
                "start": 395,
                "end": 407
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 412,
                "end": 420
              },
              "start": 395,
              "end": 420
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 439,
                      "end": 440
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 443,
                      "end": 448
                    },
                    "start": 439,
                    "end": 448
                  },
                  "start": 432,
                  "end": 449
                }
              ],
              "start": 422,
              "end": 455
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 478,
                    "end": 482
                  },
                  "start": 471,
                  "end": 483
                }
              ],
              "start": 461,
              "end": 489
            },
            "start": 391,
            "end": 489
          }
        ],
        "start": 385,
        "end": 491
      },
      "expression": false,
      "start": 362,
      "end": 491
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 499
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 507
          },
          "optional": false,
          "computed": false,
          "start": 493,
          "end": 507
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "testFn",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 517
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "testFn",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 517
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 511,
              "end": 517
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "testFnTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 530
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "testFnTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 530
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 519,
              "end": 530
            }
          ],
          "start": 510,
          "end": 531
        },
        "start": 493,
        "end": 531
      },
      "directive": null,
      "start": 493,
      "end": 532
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 532
}
```
