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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 111,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 395,
      "expression": {
        "type": "AssignmentExpression",
        "start": 369,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 369,
          "end": 384,
          "object": {
            "type": "Identifier",
            "start": 369,
            "end": 376,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 377,
            "end": 384,
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 38,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 15,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 7,
                "end": 14,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 14,
                  "decorators": [],
                  "name": "myTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 14,
                  "decorators": [],
                  "name": "myTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 18,
            "end": 38,
            "callee": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 26,
                "end": 37,
                "value": "./file.js",
                "raw": "'./file.js'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 161,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 160,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 362,
      "end": 491,
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 377,
        "decorators": [],
        "name": "testFn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 385,
        "end": 491,
        "body": [
          {
            "type": "IfStatement",
            "start": 391,
            "end": 489,
            "test": {
              "type": "BinaryExpression",
              "start": 395,
              "end": 420,
              "left": {
                "type": "UnaryExpression",
                "start": 395,
                "end": 407,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 407,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 412,
                "end": 420,
                "value": "number",
                "raw": "'number'"
              }
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
                    "left": {
                      "type": "Literal",
                      "start": 439,
                      "end": 440,
                      "value": 2,
                      "raw": "2"
                    },
                    "operator": "*",
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
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 493,
      "end": 532,
      "expression": {
        "type": "AssignmentExpression",
        "start": 493,
        "end": 531,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 493,
          "end": 507,
          "object": {
            "type": "Identifier",
            "start": 493,
            "end": 499,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 500,
            "end": 507,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 511,
                "end": 517,
                "decorators": [],
                "name": "testFn",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 511,
                "end": 517,
                "decorators": [],
                "name": "testFn",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 519,
              "end": 530,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 519,
                "end": 530,
                "decorators": [],
                "name": "testFnTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 519,
                "end": 530,
                "decorators": [],
                "name": "testFnTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
