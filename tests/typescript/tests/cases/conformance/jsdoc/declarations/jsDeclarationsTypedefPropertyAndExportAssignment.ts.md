__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 253,
  "end": 573,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 443,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 443,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 269,
            "decorators": [],
            "name": "taskGroups",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 272,
            "end": 443,
            "properties": [
              {
                "type": "Property",
                "start": 278,
                "end": 355,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 287,
                  "decorators": [],
                  "name": "parseHTML",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 289,
                  "end": 355,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 299,
                      "end": 314,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 301,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 303,
                        "end": 314,
                        "value": "parseHTML",
                        "raw": "'parseHTML'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 324,
                      "end": 349,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 329,
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 331,
                        "end": 349,
                        "value": "Parse HTML & CSS",
                        "raw": "'Parse HTML & CSS'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 361,
                "end": 440,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 372,
                  "decorators": [],
                  "name": "styleLayout",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 374,
                  "end": 440,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 384,
                      "end": 401,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 384,
                        "end": 386,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 388,
                        "end": 401,
                        "value": "styleLayout",
                        "raw": "'styleLayout'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 411,
                      "end": 434,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 416,
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 418,
                        "end": 434,
                        "value": "Style & Layout",
                        "raw": "'Style & Layout'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 513,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 512,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 507,
            "decorators": [],
            "name": "taskNameToGroup",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 510,
            "end": 512,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 515,
      "end": 573,
      "expression": {
        "type": "AssignmentExpression",
        "start": 515,
        "end": 572,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 515,
          "end": 529,
          "object": {
            "type": "Identifier",
            "start": 515,
            "end": 521,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 522,
            "end": 529,
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
          "start": 532,
          "end": 572,
          "properties": [
            {
              "type": "Property",
              "start": 538,
              "end": 548,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 538,
                "end": 548,
                "decorators": [],
                "name": "taskGroups",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 538,
                "end": 548,
                "decorators": [],
                "name": "taskGroups",
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
              "start": 554,
              "end": 569,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 554,
                "end": 569,
                "decorators": [],
                "name": "taskNameToGroup",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 554,
                "end": 569,
                "decorators": [],
                "name": "taskNameToGroup",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 468,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 61,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 60,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 35,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 7,
                "end": 17,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 17,
                  "decorators": [],
                  "name": "taskGroups",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 17,
                  "decorators": [],
                  "name": "taskGroups",
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
                "start": 19,
                "end": 34,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 34,
                  "decorators": [],
                  "name": "taskNameToGroup",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 34,
                  "decorators": [],
                  "name": "taskNameToGroup",
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
            "start": 38,
            "end": 60,
            "callee": {
              "type": "Identifier",
              "start": 38,
              "end": 45,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 46,
                "end": 59,
                "value": "./module.js",
                "raw": "'./module.js'"
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
      "type": "ClassDeclaration",
      "start": 313,
      "end": 433,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 334,
        "decorators": [],
        "name": "MainThreadTasks",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 335,
        "end": 433,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 412,
            "end": 431,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 412,
              "end": 423,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 423,
              "end": 431,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 424,
                  "end": 425,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 427,
                  "end": 428,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 429,
                "end": 431,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 435,
      "end": 468,
      "expression": {
        "type": "AssignmentExpression",
        "start": 435,
        "end": 467,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 435,
          "end": 449,
          "object": {
            "type": "Identifier",
            "start": 435,
            "end": 441,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 442,
            "end": 449,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 452,
          "end": 467,
          "decorators": [],
          "name": "MainThreadTasks",
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
