__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 667,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 323,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 323,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 28,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 34,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 43,
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 321,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
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
              "start": 61,
              "end": 321,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 88,
                          "decorators": [],
                          "name": "variable",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 91,
                          "end": 102,
                          "raw": "'something'",
                          "value": "something",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 112,
                    "end": 134,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 112,
                      "end": 133,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 112,
                        "end": 125,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 112,
                          "end": 116
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 125,
                          "decorators": [],
                          "name": "property",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                            "tail": true,
                            "value": {
                              "cooked": "foo",
                              "raw": "foo"
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 177,
                    "end": 212,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 177,
                      "end": 211,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 177,
                        "end": 191,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 177,
                          "end": 181
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 191,
                          "decorators": [],
                          "name": "property2",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                            "decorators": [],
                            "name": "variable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 194,
                            "end": 201,
                            "tail": false,
                            "value": {
                              "cooked": "foo-",
                              "raw": "foo-"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 209,
                            "end": 211,
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          }
                        ]
                      }
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 260,
                          "decorators": [],
                          "name": "localProperty",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "variable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 263,
                              "end": 270,
                              "tail": false,
                              "value": {
                                "cooked": "foo-",
                                "raw": "foo-"
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 278,
                              "end": 280,
                              "tail": true,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 325,
      "end": 667,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 340,
        "end": 667,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 346,
            "end": 364,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 355,
              "end": 363,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "AccessorProperty",
            "start": 369,
            "end": 388,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 378,
              "end": 387,
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 394,
            "end": 665,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 405,
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
              "start": 405,
              "end": 665,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 424,
                          "end": 432,
                          "decorators": [],
                          "name": "variable",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 435,
                          "end": 446,
                          "raw": "'something'",
                          "value": "something",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 456,
                    "end": 478,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 456,
                      "end": 477,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 456,
                        "end": 469,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 456,
                          "end": 460
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 461,
                          "end": 469,
                          "decorators": [],
                          "name": "property",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                            "tail": true,
                            "value": {
                              "cooked": "foo",
                              "raw": "foo"
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 521,
                    "end": 556,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 521,
                      "end": 555,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 521,
                        "end": 535,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 521,
                          "end": 525
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 526,
                          "end": 535,
                          "decorators": [],
                          "name": "property2",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                            "decorators": [],
                            "name": "variable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 538,
                            "end": 545,
                            "tail": false,
                            "value": {
                              "cooked": "foo-",
                              "raw": "foo-"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 553,
                            "end": 555,
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          }
                        ]
                      }
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 591,
                          "end": 604,
                          "decorators": [],
                          "name": "localProperty",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "variable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 607,
                              "end": 614,
                              "tail": false,
                              "value": {
                                "cooked": "foo-",
                                "raw": "foo-"
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 622,
                              "end": 624,
                              "tail": true,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 339,
        "decorators": [],
        "name": "MyClass2",
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
