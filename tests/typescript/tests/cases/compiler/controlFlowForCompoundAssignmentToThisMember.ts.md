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
        "name": "DatasourceCommandWidgetElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 36
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
              "name": "_commandBased",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 58,
                "end": 65
              },
              "start": 56,
              "end": 65
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 43,
            "end": 66
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_commandElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 88,
                "end": 95
              },
              "start": 86,
              "end": 95
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 71,
            "end": 96
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commandElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 117,
                "end": 124
              },
              "start": 115,
              "end": 124
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 101,
            "end": 125
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
              "start": 131,
              "end": 142
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
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 151,
                      "end": 158
                    },
                    "start": 149,
                    "end": 158
                  },
                  "start": 143,
                  "end": 158
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 174,
                        "end": 180
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DatasourceCommandWidgetElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 192,
                        "end": 222
                      },
                      "start": 174,
                      "end": 222
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 238,
                                "end": 242
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_commandBased",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 243,
                                "end": 256
                              },
                              "optional": false,
                              "computed": false,
                              "start": 238,
                              "end": 256
                            },
                            "right": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 259,
                              "end": 263
                            },
                            "start": 238,
                            "end": 263
                          },
                          "directive": null,
                          "start": 238,
                          "end": 264
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
                                "start": 277,
                                "end": 281
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_commandElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 282,
                                "end": 297
                              },
                              "optional": false,
                              "computed": false,
                              "start": 277,
                              "end": 297
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "target",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 300,
                                "end": 306
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "commandElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 307,
                                "end": 321
                              },
                              "optional": false,
                              "computed": false,
                              "start": 300,
                              "end": 321
                            },
                            "start": 277,
                            "end": 321
                          },
                          "directive": null,
                          "start": 277,
                          "end": 322
                        }
                      ],
                      "start": 224,
                      "end": 332
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 352,
                                "end": 356
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_commandBased",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 357,
                                "end": 370
                              },
                              "optional": false,
                              "computed": false,
                              "start": 352,
                              "end": 370
                            },
                            "right": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 373,
                              "end": 378
                            },
                            "start": 352,
                            "end": 378
                          },
                          "directive": null,
                          "start": 352,
                          "end": 379
                        }
                      ],
                      "start": 338,
                      "end": 389
                    },
                    "start": 170,
                    "end": 389
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 403,
                          "end": 407
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_commandBased",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 408,
                          "end": 421
                        },
                        "optional": false,
                        "computed": false,
                        "start": 403,
                        "end": 421
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 425,
                          "end": 431
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DatasourceCommandWidgetElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 473
                        },
                        "start": 425,
                        "end": 473
                      },
                      "start": 403,
                      "end": 474
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 490,
                                "end": 494
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_commandElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 495,
                                "end": 510
                              },
                              "optional": false,
                              "computed": false,
                              "start": 490,
                              "end": 510
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "target",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 513,
                                "end": 519
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "commandElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 520,
                                "end": 534
                              },
                              "optional": false,
                              "computed": false,
                              "start": 513,
                              "end": 534
                            },
                            "start": 490,
                            "end": 534
                          },
                          "directive": null,
                          "start": 490,
                          "end": 535
                        }
                      ],
                      "start": 476,
                      "end": 545
                    },
                    "alternate": null,
                    "start": 399,
                    "end": 545
                  }
                ],
                "start": 160,
                "end": 551
              },
              "expression": false,
              "start": 142,
              "end": 551
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 131,
            "end": 551
          }
        ],
        "start": 37,
        "end": 553
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 553
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 553
}
```
