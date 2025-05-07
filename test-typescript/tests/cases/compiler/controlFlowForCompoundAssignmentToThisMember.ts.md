__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 553,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 553,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 37,
        "end": 553,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 43,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 56,
              "decorators": [],
              "name": "_commandBased",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 65,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 58,
                "end": 65
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 71,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 86,
              "decorators": [],
              "name": "_commandElement",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 95,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 88,
                "end": 95
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 101,
            "end": 125,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 115,
              "decorators": [],
              "name": "commandElement",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 124,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 117,
                "end": 124
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 551,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 142,
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
              "start": 142,
              "end": 551,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 160,
                "end": 551,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 170,
                    "end": 389,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 338,
                      "end": 389,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 352,
                          "end": 379,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 352,
                            "end": 378,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 352,
                              "end": 370,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 352,
                                "end": 356
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 357,
                                "end": 370,
                                "decorators": [],
                                "name": "_commandBased",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 373,
                              "end": 378,
                              "raw": "false",
                              "value": false,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      ]
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 224,
                      "end": 332,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 238,
                          "end": 264,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 238,
                            "end": 263,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 238,
                              "end": 256,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 238,
                                "end": 242
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 243,
                                "end": 256,
                                "decorators": [],
                                "name": "_commandBased",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 259,
                              "end": 263,
                              "raw": "true",
                              "value": true,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 277,
                          "end": 322,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 277,
                            "end": 321,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 277,
                              "end": 297,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 277,
                                "end": 281
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 297,
                                "decorators": [],
                                "name": "_commandElement",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 300,
                              "end": 321,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 300,
                                "end": 306,
                                "decorators": [],
                                "name": "target",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 307,
                                "end": 321,
                                "decorators": [],
                                "name": "commandElement",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 174,
                      "end": 222,
                      "operator": "instanceof",
                      "left": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 180,
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 222,
                        "decorators": [],
                        "name": "DatasourceCommandWidgetElement",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 399,
                    "end": 545,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 476,
                      "end": 545,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 490,
                          "end": 535,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 490,
                            "end": 534,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 490,
                              "end": 510,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 490,
                                "end": 494
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 495,
                                "end": 510,
                                "decorators": [],
                                "name": "_commandElement",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 513,
                              "end": 534,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 513,
                                "end": 519,
                                "decorators": [],
                                "name": "target",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 520,
                                "end": 534,
                                "decorators": [],
                                "name": "commandElement",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "AssignmentExpression",
                      "start": 403,
                      "end": 474,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 403,
                        "end": 421,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 403,
                          "end": 407
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 408,
                          "end": 421,
                          "decorators": [],
                          "name": "_commandBased",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 425,
                        "end": 473,
                        "operator": "instanceof",
                        "left": {
                          "type": "Identifier",
                          "start": 425,
                          "end": 431,
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 473,
                          "decorators": [],
                          "name": "DatasourceCommandWidgetElement",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                  "start": 143,
                  "end": 158,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 158,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 151,
                      "end": 158
                    }
                  }
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
        "start": 6,
        "end": 36,
        "decorators": [],
        "name": "DatasourceCommandWidgetElement",
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
