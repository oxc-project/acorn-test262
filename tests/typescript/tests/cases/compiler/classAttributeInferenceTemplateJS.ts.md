__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 28
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 20,
            "end": 29
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 43
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 34,
            "end": 44
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 61
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "variable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 80,
                          "end": 88
                        },
                        "init": {
                          "type": "Literal",
                          "value": "something",
                          "raw": "'something'",
                          "start": 91,
                          "end": 102
                        },
                        "definite": false,
                        "start": 80,
                        "end": 102
                      }
                    ],
                    "declare": false,
                    "start": 74,
                    "end": 102
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 112,
                          "end": 116
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "property",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 125
                        },
                        "optional": false,
                        "computed": false,
                        "start": 112,
                        "end": 125
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "foo",
                              "cooked": "foo"
                            },
                            "tail": true,
                            "start": 128,
                            "end": 133
                          }
                        ],
                        "expressions": [],
                        "start": 128,
                        "end": 133
                      },
                      "start": 112,
                      "end": 133
                    },
                    "directive": null,
                    "start": 112,
                    "end": 134
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 177,
                          "end": 181
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "property2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 191
                        },
                        "optional": false,
                        "computed": false,
                        "start": 177,
                        "end": 191
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "foo-",
                              "cooked": "foo-"
                            },
                            "tail": false,
                            "start": 194,
                            "end": 201
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 209,
                            "end": 211
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "variable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 201,
                            "end": 209
                          }
                        ],
                        "start": 194,
                        "end": 211
                      },
                      "start": 177,
                      "end": 211
                    },
                    "directive": null,
                    "start": 177,
                    "end": 212
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
                          "name": "localProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 260
                        },
                        "init": {
                          "type": "TemplateLiteral",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "foo-",
                                "cooked": "foo-"
                              },
                              "tail": false,
                              "start": 263,
                              "end": 270
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 278,
                              "end": 280
                            }
                          ],
                          "expressions": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "variable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 270,
                              "end": 278
                            }
                          ],
                          "start": 263,
                          "end": 280
                        },
                        "definite": false,
                        "start": 247,
                        "end": 280
                      }
                    ],
                    "declare": false,
                    "start": 241,
                    "end": 281
                  }
                ],
                "start": 64,
                "end": 321
              },
              "expression": false,
              "start": 61,
              "end": 321
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 50,
            "end": 321
          }
        ],
        "start": 14,
        "end": 323
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 323
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass2",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 339
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 363
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 346,
            "end": 364
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 387
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 369,
            "end": 388
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 405
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "variable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 424,
                          "end": 432
                        },
                        "init": {
                          "type": "Literal",
                          "value": "something",
                          "raw": "'something'",
                          "start": 435,
                          "end": 446
                        },
                        "definite": false,
                        "start": 424,
                        "end": 446
                      }
                    ],
                    "declare": false,
                    "start": 418,
                    "end": 446
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 456,
                          "end": 460
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "property",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 461,
                          "end": 469
                        },
                        "optional": false,
                        "computed": false,
                        "start": 456,
                        "end": 469
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "foo",
                              "cooked": "foo"
                            },
                            "tail": true,
                            "start": 472,
                            "end": 477
                          }
                        ],
                        "expressions": [],
                        "start": 472,
                        "end": 477
                      },
                      "start": 456,
                      "end": 477
                    },
                    "directive": null,
                    "start": 456,
                    "end": 478
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 521,
                          "end": 525
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "property2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 526,
                          "end": 535
                        },
                        "optional": false,
                        "computed": false,
                        "start": 521,
                        "end": 535
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "foo-",
                              "cooked": "foo-"
                            },
                            "tail": false,
                            "start": 538,
                            "end": 545
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 553,
                            "end": 555
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "variable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 545,
                            "end": 553
                          }
                        ],
                        "start": 538,
                        "end": 555
                      },
                      "start": 521,
                      "end": 555
                    },
                    "directive": null,
                    "start": 521,
                    "end": 556
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
                          "name": "localProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 591,
                          "end": 604
                        },
                        "init": {
                          "type": "TemplateLiteral",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "foo-",
                                "cooked": "foo-"
                              },
                              "tail": false,
                              "start": 607,
                              "end": 614
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 622,
                              "end": 624
                            }
                          ],
                          "expressions": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "variable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 614,
                              "end": 622
                            }
                          ],
                          "start": 607,
                          "end": 624
                        },
                        "definite": false,
                        "start": 591,
                        "end": 624
                      }
                    ],
                    "declare": false,
                    "start": 585,
                    "end": 625
                  }
                ],
                "start": 408,
                "end": 665
              },
              "expression": false,
              "start": 405,
              "end": 665
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 394,
            "end": 665
          }
        ],
        "start": 340,
        "end": 667
      },
      "abstract": false,
      "declare": false,
      "start": 325,
      "end": 667
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 667
}
```
