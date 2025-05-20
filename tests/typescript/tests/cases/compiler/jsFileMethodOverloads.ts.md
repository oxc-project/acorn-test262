__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 666,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 666,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 666,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 125,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 88,
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
              "start": 88,
              "end": 125,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 125,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 121,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 102,
                      "end": 120,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 112,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 102,
                          "end": 106
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 112,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 115,
                        "end": 120,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 94,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 338,
            "end": 387,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 349,
              "decorators": [],
              "name": "getTypeName",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 349,
              "end": 387,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 352,
                "end": 387,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 358,
                    "end": 383,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 365,
                      "end": 382,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 372,
                        "end": 382,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 372,
                          "end": 376
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 377,
                          "end": 382,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "operator": "typeof",
                      "prefix": true
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 600,
            "end": 664,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 600,
              "end": 609,
              "decorators": [],
              "name": "transform",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 609,
              "end": 664,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 614,
                "end": 664,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 620,
                    "end": 660,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 627,
                      "end": 659,
                      "alternate": {
                        "type": "MemberExpression",
                        "start": 649,
                        "end": 659,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 649,
                          "end": 653
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 654,
                          "end": 659,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "start": 632,
                        "end": 646,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 635,
                            "end": 645,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 635,
                              "end": 639
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 640,
                              "end": 645,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 632,
                          "end": 634,
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "test": {
                        "type": "Identifier",
                        "start": 627,
                        "end": 629,
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 610,
                  "end": 612,
                  "decorators": [],
                  "name": "fn",
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
        "start": 30,
        "end": 37,
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
