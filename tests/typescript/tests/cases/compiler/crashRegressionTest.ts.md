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
            "start": 7,
            "end": 15
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Util",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 20
          },
          "start": 7,
          "end": 20
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "TemplateEngine",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 35
        },
        "start": 7,
        "end": 35
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
              "start": 42,
              "end": 54
            },
            "directive": "use strict",
            "start": 42,
            "end": 55
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TemplateKeyValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 88
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
                          "start": 106,
                          "end": 112
                        },
                        "start": 104,
                        "end": 112
                      },
                      "start": 100,
                      "end": 112
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 115,
                      "end": 121
                    },
                    "start": 113,
                    "end": 121
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 99,
                  "end": 122
                }
              ],
              "start": 89,
              "end": 128
            },
            "declare": false,
            "start": 62,
            "end": 128
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
              "start": 141,
              "end": 155
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
                    "start": 174,
                    "end": 190
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
                        "start": 192,
                        "end": 207
                      },
                      "typeArguments": null,
                      "start": 192,
                      "end": 207
                    },
                    "start": 190,
                    "end": 207
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
                  "start": 166,
                  "end": 208
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
                    "start": 219,
                    "end": 230
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
                              "start": 248,
                              "end": 263
                            },
                            "typeArguments": null,
                            "start": 248,
                            "end": 263
                          },
                          "start": 246,
                          "end": 263
                        },
                        "start": 231,
                        "end": 263
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
                                "start": 279,
                                "end": 283
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_templateStorage",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 284,
                                "end": 300
                              },
                              "optional": false,
                              "computed": false,
                              "start": 279,
                              "end": 300
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "templateStorage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 303,
                              "end": 318
                            },
                            "start": 279,
                            "end": 318
                          },
                          "directive": null,
                          "start": 279,
                          "end": 319
                        }
                      ],
                      "start": 265,
                      "end": 329
                    },
                    "expression": false,
                    "start": 230,
                    "end": 329
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 219,
                  "end": 329
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
                    "start": 347,
                    "end": 351
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
                            "start": 360,
                            "end": 366
                          },
                          "start": 358,
                          "end": 366
                        },
                        "start": 352,
                        "end": 366
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 369,
                        "end": 372
                      },
                      "start": 367,
                      "end": 372
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
                                    "start": 387,
                                    "end": 391
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_templateStorage",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 392,
                                    "end": 408
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 387,
                                  "end": 408
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "templateSources",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 409,
                                  "end": 424
                                },
                                "optional": false,
                                "computed": false,
                                "start": 387,
                                "end": 424
                              },
                              "property": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 425,
                                  "end": 429
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 430,
                                  "end": 435
                                },
                                "optional": false,
                                "computed": false,
                                "start": 425,
                                "end": 435
                              },
                              "optional": false,
                              "computed": true,
                              "start": 387,
                              "end": 436
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 439,
                              "end": 444
                            },
                            "start": 387,
                            "end": 444
                          },
                          "directive": null,
                          "start": 387,
                          "end": 445
                        }
                      ],
                      "start": 373,
                      "end": 455
                    },
                    "expression": false,
                    "start": 351,
                    "end": 455
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 340,
                  "end": 455
                }
              ],
              "start": 156,
              "end": 461
            },
            "abstract": false,
            "declare": false,
            "start": 135,
            "end": 461
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
                "start": 481,
                "end": 496
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
                      "start": 514,
                      "end": 529
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
                          "start": 531,
                          "end": 547
                        },
                        "typeArguments": null,
                        "start": 531,
                        "end": 547
                      },
                      "start": 529,
                      "end": 547
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 550,
                      "end": 552
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 507,
                    "end": 553
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
                      "start": 569,
                      "end": 581
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
                          "start": 583,
                          "end": 599
                        },
                        "typeArguments": null,
                        "start": 583,
                        "end": 599
                      },
                      "start": 581,
                      "end": 599
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 602,
                      "end": 604
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 562,
                    "end": 605
                  }
                ],
                "start": 497,
                "end": 611
              },
              "abstract": false,
              "declare": false,
              "start": 475,
              "end": 611
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 468,
            "end": 611
          }
        ],
        "start": 36,
        "end": 613
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 613
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 613
}
```
