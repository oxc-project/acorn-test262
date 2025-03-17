__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 614,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 613,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 35,
        "left": {
          "type": "TSQualifiedName",
          "start": 7,
          "end": 20,
          "left": {
            "type": "Identifier",
            "start": 7,
            "end": 15,
            "name": "MsPortal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "name": "Util",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 21,
          "end": 35,
          "name": "TemplateEngine",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 36,
        "end": 613,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 42,
            "end": 55,
            "expression": {
              "type": "Literal",
              "start": 42,
              "end": 54,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": "use strict"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 62,
            "end": 128,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 88,
              "name": "TemplateKeyValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 89,
              "end": 128,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 99,
                  "end": 122,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 100,
                      "end": 112,
                      "name": "name",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 104,
                        "end": 112,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 106,
                          "end": 112
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 113,
                    "end": 121,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 115,
                      "end": 121
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 135,
            "end": 461,
            "id": {
              "type": "Identifier",
              "start": 141,
              "end": 155,
              "name": "StringTemplate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 156,
              "end": 461,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 166,
                  "end": 208,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 190,
                    "name": "_templateStorage",
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 207,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 192,
                      "end": 207,
                      "typeName": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 207,
                        "name": "TemplateStorage",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 219,
                  "end": 329,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 230,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 230,
                    "end": 329,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 231,
                        "end": 263,
                        "name": "templateStorage",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 246,
                          "end": 263,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 248,
                            "end": 263,
                            "typeName": {
                              "type": "Identifier",
                              "start": 248,
                              "end": 263,
                              "name": "TemplateStorage",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 265,
                      "end": 329,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 279,
                          "end": 319,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 279,
                            "end": 318,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 279,
                              "end": 300,
                              "object": {
                                "type": "ThisExpression",
                                "start": 279,
                                "end": 283
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 284,
                                "end": 300,
                                "name": "_templateStorage",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 303,
                              "end": 318,
                              "name": "templateStorage",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "directive": null
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 340,
                  "end": 455,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 351,
                    "name": "text",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 351,
                    "end": 455,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 352,
                        "end": 366,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 358,
                          "end": 366,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 360,
                            "end": 366
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 373,
                      "end": 455,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 387,
                          "end": 445,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 387,
                            "end": 444,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 387,
                              "end": 436,
                              "object": {
                                "type": "MemberExpression",
                                "start": 387,
                                "end": 424,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 387,
                                  "end": 408,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 387,
                                    "end": 391
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 392,
                                    "end": 408,
                                    "name": "_templateStorage",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 409,
                                  "end": 424,
                                  "name": "templateSources",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "MemberExpression",
                                "start": 425,
                                "end": 435,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 425,
                                  "end": 429
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 430,
                                  "end": 435,
                                  "name": "_name",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "computed": true,
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 439,
                              "end": 444,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 367,
                      "end": 372,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 369,
                        "end": 372
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
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
            "type": "ExportNamedDeclaration",
            "start": 468,
            "end": 611,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 475,
              "end": 611,
              "id": {
                "type": "Identifier",
                "start": 481,
                "end": 496,
                "name": "TemplateStorage",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 497,
                "end": 611,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 507,
                    "end": 553,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 514,
                      "end": 529,
                      "name": "templateSources",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 550,
                      "end": 552,
                      "properties": []
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 529,
                      "end": 547,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 531,
                        "end": 547,
                        "typeName": {
                          "type": "Identifier",
                          "start": 531,
                          "end": 547,
                          "name": "TemplateKeyValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 562,
                    "end": 605,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 569,
                      "end": 581,
                      "name": "templateData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 602,
                      "end": 604,
                      "properties": []
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 581,
                      "end": 599,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 583,
                        "end": 599,
                        "typeName": {
                          "type": "Identifier",
                          "start": 583,
                          "end": 599,
                          "name": "TemplateKeyValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "public"
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
