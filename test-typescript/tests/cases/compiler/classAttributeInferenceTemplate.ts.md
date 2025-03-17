__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 668,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 323,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 29,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 28,
              "name": "property",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 34,
            "end": 44,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 43,
              "name": "property2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 321,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 321,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 321,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 74,
                    "end": 102,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 80,
                        "end": 102,
                        "id": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 88,
                          "name": "variable",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 91,
                          "end": 102,
                          "value": "something",
                          "raw": "'something'"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 112,
                    "end": 134,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 112,
                      "end": 133,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 112,
                        "end": 125,
                        "object": {
                          "type": "ThisExpression",
                          "start": 112,
                          "end": 116
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 125,
                          "name": "property",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "start": 128,
                        "end": 133,
                        "expressions": [],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 128,
                            "end": 133,
                            "value": {
                              "cooked": "foo",
                              "raw": "foo"
                            },
                            "tail": true
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 177,
                    "end": 212,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 177,
                      "end": 211,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 177,
                        "end": 191,
                        "object": {
                          "type": "ThisExpression",
                          "start": 177,
                          "end": 181
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 191,
                          "name": "property2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "start": 194,
                        "end": 211,
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 201,
                            "end": 209,
                            "name": "variable",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 194,
                            "end": 201,
                            "value": {
                              "cooked": "foo-",
                              "raw": "foo-"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 209,
                            "end": 211,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "tail": true
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 241,
                    "end": 281,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 247,
                        "end": 280,
                        "id": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 260,
                          "name": "localProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TemplateLiteral",
                          "start": 263,
                          "end": 280,
                          "expressions": [
                            {
                              "type": "Identifier",
                              "start": 270,
                              "end": 278,
                              "name": "variable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 263,
                              "end": 270,
                              "value": {
                                "cooked": "foo-",
                                "raw": "foo-"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 278,
                              "end": 280,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 325,
      "end": 667,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 339,
        "name": "MyClass2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 340,
        "end": 667,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 346,
            "end": 364,
            "key": {
              "type": "Identifier",
              "start": 355,
              "end": 363,
              "name": "property",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": false,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 369,
            "end": 388,
            "key": {
              "type": "Identifier",
              "start": 378,
              "end": 387,
              "name": "property2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": false,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 394,
            "end": 665,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 405,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 405,
              "end": 665,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 408,
                "end": 665,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 418,
                    "end": 446,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 424,
                        "end": 446,
                        "id": {
                          "type": "Identifier",
                          "start": 424,
                          "end": 432,
                          "name": "variable",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 435,
                          "end": 446,
                          "value": "something",
                          "raw": "'something'"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 456,
                    "end": 478,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 456,
                      "end": 477,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 456,
                        "end": 469,
                        "object": {
                          "type": "ThisExpression",
                          "start": 456,
                          "end": 460
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 461,
                          "end": 469,
                          "name": "property",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "start": 472,
                        "end": 477,
                        "expressions": [],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 472,
                            "end": 477,
                            "value": {
                              "cooked": "foo",
                              "raw": "foo"
                            },
                            "tail": true
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 521,
                    "end": 556,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 521,
                      "end": 555,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 521,
                        "end": 535,
                        "object": {
                          "type": "ThisExpression",
                          "start": 521,
                          "end": 525
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 526,
                          "end": 535,
                          "name": "property2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "start": 538,
                        "end": 555,
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 545,
                            "end": 553,
                            "name": "variable",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 538,
                            "end": 545,
                            "value": {
                              "cooked": "foo-",
                              "raw": "foo-"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 553,
                            "end": 555,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "tail": true
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 585,
                    "end": 625,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 591,
                        "end": 624,
                        "id": {
                          "type": "Identifier",
                          "start": 591,
                          "end": 604,
                          "name": "localProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TemplateLiteral",
                          "start": 607,
                          "end": 624,
                          "expressions": [
                            {
                              "type": "Identifier",
                              "start": 614,
                              "end": 622,
                              "name": "variable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 607,
                              "end": 614,
                              "value": {
                                "cooked": "foo-",
                                "raw": "foo-"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 622,
                              "end": 624,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
