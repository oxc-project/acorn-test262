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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 443,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 287,
                  "decorators": [],
                  "name": "parseHTML",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 289,
                  "end": 355,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 299,
                      "end": 314,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 301,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 303,
                        "end": 314,
                        "raw": "'parseHTML'",
                        "value": "parseHTML",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 324,
                      "end": 349,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 329,
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 331,
                        "end": 349,
                        "raw": "'Parse HTML & CSS'",
                        "value": "Parse HTML & CSS",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 361,
                "end": 440,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 372,
                  "decorators": [],
                  "name": "styleLayout",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 374,
                  "end": 440,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 384,
                      "end": 401,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 384,
                        "end": 386,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 388,
                        "end": 401,
                        "raw": "'styleLayout'",
                        "value": "styleLayout",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 411,
                      "end": 434,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 416,
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 418,
                        "end": 434,
                        "raw": "'Style & Layout'",
                        "value": "Style & Layout",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 513,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 512,
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 515,
      "end": 573,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 515,
        "end": 572,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 515,
          "end": 529,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 515,
            "end": 521,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 522,
            "end": 529,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 538,
                "end": 548,
                "decorators": [],
                "name": "taskGroups",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 538,
                "end": 548,
                "decorators": [],
                "name": "taskGroups",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 554,
              "end": 569,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 554,
                "end": 569,
                "decorators": [],
                "name": "taskNameToGroup",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 554,
                "end": 569,
                "decorators": [],
                "name": "taskNameToGroup",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 60,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 35,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 7,
                "end": 17,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 17,
                  "decorators": [],
                  "name": "taskGroups",
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
                  "end": 17,
                  "decorators": [],
                  "name": "taskGroups",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 19,
                "end": 34,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 34,
                  "decorators": [],
                  "name": "taskNameToGroup",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 34,
                  "decorators": [],
                  "name": "taskNameToGroup",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 38,
            "end": 60,
            "arguments": [
              {
                "type": "Literal",
                "start": 46,
                "end": 59,
                "raw": "'./module.js'",
                "value": "./module.js",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 38,
              "end": 45,
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
      "type": "ClassDeclaration",
      "start": 313,
      "end": 433,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 335,
        "end": 433,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 412,
            "end": 431,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 423,
              "end": 431,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 429,
                "end": 431,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 435,
      "end": 468,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 435,
        "end": 467,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 435,
          "end": 449,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 435,
            "end": 441,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 442,
            "end": 449,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
