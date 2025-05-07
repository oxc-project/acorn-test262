__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 69,
  "end": 395,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 82,
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 85,
            "end": 111,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 395,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 369,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 369,
          "end": 384,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 369,
            "end": 376,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 377,
            "end": 384,
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 387,
          "end": 394,
          "decorators": [],
          "name": "myTypes",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 532,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 38,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 15,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 7,
                "end": 14,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 14,
                  "decorators": [],
                  "name": "myTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 14,
                  "decorators": [],
                  "name": "myTypes",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 18,
            "end": 38,
            "arguments": [
              {
                "type": "Literal",
                "start": 26,
                "end": 37,
                "raw": "'./file.js'",
                "value": "./file.js",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 131,
            "decorators": [],
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 134,
            "end": 160,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 362,
      "end": 491,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 385,
        "end": 491,
        "body": [
          {
            "type": "IfStatement",
            "start": 391,
            "end": 489,
            "alternate": {
              "type": "BlockStatement",
              "start": 461,
              "end": 489,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 471,
                  "end": 483,
                  "argument": {
                    "type": "Literal",
                    "start": 478,
                    "end": 482,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 422,
              "end": 455,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 432,
                  "end": 449,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 439,
                    "end": 448,
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "start": 439,
                      "end": 440,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 443,
                      "end": 448,
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 395,
              "end": 420,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 395,
                "end": 407,
                "argument": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 407,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 412,
                "end": 420,
                "raw": "'number'",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 377,
        "decorators": [],
        "name": "testFn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 378,
          "end": 383,
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 493,
      "end": 532,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 493,
        "end": 531,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 493,
          "end": 507,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 493,
            "end": 499,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 500,
            "end": 507,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 510,
          "end": 531,
          "properties": [
            {
              "type": "Property",
              "start": 511,
              "end": 517,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 511,
                "end": 517,
                "decorators": [],
                "name": "testFn",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 511,
                "end": 517,
                "decorators": [],
                "name": "testFn",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 519,
              "end": 530,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 519,
                "end": 530,
                "decorators": [],
                "name": "testFnTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 519,
                "end": 530,
                "decorators": [],
                "name": "testFnTypes",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
