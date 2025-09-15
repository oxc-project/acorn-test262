__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "MsPortal",
            "optional": false,
            "typeAnnotation": null,
            "start": 10,
            "end": 18
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Util",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 23
          },
          "start": 10,
          "end": 23
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "TemplateEngine",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 38
        },
        "start": 10,
        "end": 38
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 45,
              "end": 57
            },
            "directive": "use strict",
            "start": 45,
            "end": 58
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TemplateKeyValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 91
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 109,
                          "end": 115
                        },
                        "start": 107,
                        "end": 115
                      },
                      "start": 103,
                      "end": 115
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 118,
                      "end": 124
                    },
                    "start": 116,
                    "end": 124
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 102,
                  "end": 125
                }
              ],
              "start": 92,
              "end": 131
            },
            "declare": false,
            "start": 65,
            "end": 131
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringTemplate",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 158
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
                    "name": "_templateStorage",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 193
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TemplateStorage",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 195,
                        "end": 210
                      },
                      "typeArguments": null,
                      "start": 195,
                      "end": 210
                    },
                    "start": 193,
                    "end": 210
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 169,
                  "end": 211
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
                    "start": 222,
                    "end": 233
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
                        "name": "templateStorage",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TemplateStorage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 251,
                              "end": 266
                            },
                            "typeArguments": null,
                            "start": 251,
                            "end": 266
                          },
                          "start": 249,
                          "end": 266
                        },
                        "start": 234,
                        "end": 266
                      }
                    ],
                    "returnType": null,
                    "body": {
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
                                "start": 282,
                                "end": 286
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_templateStorage",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 287,
                                "end": 303
                              },
                              "optional": false,
                              "computed": false,
                              "start": 282,
                              "end": 303
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "templateStorage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 306,
                              "end": 321
                            },
                            "start": 282,
                            "end": 321
                          },
                          "directive": null,
                          "start": 282,
                          "end": 322
                        }
                      ],
                      "start": 268,
                      "end": 332
                    },
                    "expression": false,
                    "start": 233,
                    "end": 332
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 222,
                  "end": 332
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 354
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
                        "name": "value",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 363,
                            "end": 369
                          },
                          "start": 361,
                          "end": 369
                        },
                        "start": 355,
                        "end": 369
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 372,
                        "end": 375
                      },
                      "start": 370,
                      "end": 375
                    },
                    "body": {
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 390,
                                    "end": 394
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_templateStorage",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 395,
                                    "end": 411
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 390,
                                  "end": 411
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "templateSources",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 412,
                                  "end": 427
                                },
                                "optional": false,
                                "computed": false,
                                "start": 390,
                                "end": 427
                              },
                              "property": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 428,
                                  "end": 432
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 433,
                                  "end": 438
                                },
                                "optional": false,
                                "computed": false,
                                "start": 428,
                                "end": 438
                              },
                              "optional": false,
                              "computed": true,
                              "start": 390,
                              "end": 439
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 442,
                              "end": 447
                            },
                            "start": 390,
                            "end": 447
                          },
                          "directive": null,
                          "start": 390,
                          "end": 448
                        }
                      ],
                      "start": 376,
                      "end": 458
                    },
                    "expression": false,
                    "start": 354,
                    "end": 458
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 343,
                  "end": 458
                }
              ],
              "start": 159,
              "end": 464
            },
            "abstract": false,
            "declare": false,
            "start": 138,
            "end": 464
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStorage",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 499
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
                      "name": "templateSources",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 517,
                      "end": 532
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TemplateKeyValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 550
                        },
                        "typeArguments": null,
                        "start": 534,
                        "end": 550
                      },
                      "start": 532,
                      "end": 550
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 553,
                      "end": 555
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 510,
                    "end": 556
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "templateData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 572,
                      "end": 584
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TemplateKeyValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 586,
                          "end": 602
                        },
                        "typeArguments": null,
                        "start": 586,
                        "end": 602
                      },
                      "start": 584,
                      "end": 602
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 605,
                      "end": 607
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 565,
                    "end": 608
                  }
                ],
                "start": 500,
                "end": 614
              },
              "abstract": false,
              "declare": false,
              "start": 478,
              "end": 614
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 471,
            "end": 614
          }
        ],
        "start": 39,
        "end": 616
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 616
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 616
}
```
