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
            "name": "taskGroups",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 269
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parseHTML",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 287
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 299,
                        "end": 301
                      },
                      "value": {
                        "type": "Literal",
                        "value": "parseHTML",
                        "raw": "'parseHTML'",
                        "start": 303,
                        "end": 314
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 299,
                      "end": 314
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 329
                      },
                      "value": {
                        "type": "Literal",
                        "value": "Parse HTML & CSS",
                        "raw": "'Parse HTML & CSS'",
                        "start": 331,
                        "end": 349
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 324,
                      "end": 349
                    }
                  ],
                  "start": 289,
                  "end": 355
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 278,
                "end": 355
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "styleLayout",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 372
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 384,
                        "end": 386
                      },
                      "value": {
                        "type": "Literal",
                        "value": "styleLayout",
                        "raw": "'styleLayout'",
                        "start": 388,
                        "end": 401
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 384,
                      "end": 401
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 411,
                        "end": 416
                      },
                      "value": {
                        "type": "Literal",
                        "value": "Style & Layout",
                        "raw": "'Style & Layout'",
                        "start": 418,
                        "end": 434
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 411,
                      "end": 434
                    }
                  ],
                  "start": 374,
                  "end": 440
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 361,
                "end": 440
              }
            ],
            "start": 272,
            "end": 443
          },
          "definite": false,
          "start": 259,
          "end": 443
        }
      ],
      "declare": false,
      "start": 253,
      "end": 443
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
            "name": "taskNameToGroup",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 507
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 510,
            "end": 512
          },
          "definite": false,
          "start": 492,
          "end": 512
        }
      ],
      "declare": false,
      "start": 486,
      "end": 513
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
            "start": 515,
            "end": 521
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 529
          },
          "optional": false,
          "computed": false,
          "start": 515,
          "end": 529
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
                "name": "taskGroups",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 548
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "taskGroups",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 548
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 538,
              "end": 548
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "taskNameToGroup",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 569
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "taskNameToGroup",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 569
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 554,
              "end": 569
            }
          ],
          "start": 532,
          "end": 572
        },
        "start": 515,
        "end": 572
      },
      "directive": null,
      "start": 515,
      "end": 573
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 253,
  "end": 573
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
                  "name": "taskGroups",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 17
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taskGroups",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 17
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 7,
                "end": 17
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taskNameToGroup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 34
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taskNameToGroup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 34
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 19,
                "end": 34
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 35
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 45
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./module.js",
                "raw": "'./module.js'",
                "start": 46,
                "end": 59
              }
            ],
            "optional": false,
            "start": 38,
            "end": 60
          },
          "definite": false,
          "start": 6,
          "end": 60
        }
      ],
      "declare": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MainThreadTasks",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 334
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 423
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 425
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 428
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 429,
                "end": 431
              },
              "expression": false,
              "start": 423,
              "end": 431
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 412,
            "end": 431
          }
        ],
        "start": 335,
        "end": 433
      },
      "abstract": false,
      "declare": false,
      "start": 313,
      "end": 433
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
            "start": 435,
            "end": 441
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 449
          },
          "optional": false,
          "computed": false,
          "start": 435,
          "end": 449
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainThreadTasks",
          "optional": false,
          "typeAnnotation": null,
          "start": 452,
          "end": 467
        },
        "start": 435,
        "end": 467
      },
      "directive": null,
      "start": 435,
      "end": 468
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 468
}
```
