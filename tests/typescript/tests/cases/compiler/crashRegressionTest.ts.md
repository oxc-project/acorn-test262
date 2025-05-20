__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 613,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 613,
      "body": {
        "type": "TSModuleBlock",
        "start": 36,
        "end": 613,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 42,
            "end": 55,
            "directive": "use strict",
            "expression": {
              "type": "Literal",
              "start": 42,
              "end": 54,
              "raw": "\"use strict\"",
              "value": "use strict"
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 62,
            "end": 128,
            "body": {
              "type": "TSInterfaceBody",
              "start": 89,
              "end": 128,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 99,
                  "end": 122,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 100,
                      "end": 112,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 104,
                        "end": 112,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 106,
                          "end": 112
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 113,
                    "end": 121,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 115,
                      "end": 121
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 88,
              "decorators": [],
              "name": "TemplateKeyValue",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 135,
            "end": 461,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 156,
              "end": 461,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 166,
                  "end": 208,
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 190,
                    "decorators": [],
                    "name": "_templateStorage",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 207,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 192,
                      "end": 207,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 207,
                        "decorators": [],
                        "name": "TemplateStorage",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 219,
                  "end": 329,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 230,
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
                    "start": 230,
                    "end": 329,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 265,
                      "end": 329,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 279,
                          "end": 319,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 279,
                            "end": 318,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 279,
                              "end": 300,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 279,
                                "end": 283
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 284,
                                "end": 300,
                                "decorators": [],
                                "name": "_templateStorage",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 303,
                              "end": 318,
                              "decorators": [],
                              "name": "templateStorage",
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
                        "start": 231,
                        "end": 263,
                        "decorators": [],
                        "name": "templateStorage",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 246,
                          "end": 263,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 248,
                            "end": 263,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 248,
                              "end": 263,
                              "decorators": [],
                              "name": "TemplateStorage",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 340,
                  "end": 455,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 351,
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 351,
                    "end": 455,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 373,
                      "end": 455,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 387,
                          "end": 445,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 387,
                            "end": 444,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 387,
                              "end": 436,
                              "computed": true,
                              "object": {
                                "type": "MemberExpression",
                                "start": 387,
                                "end": 424,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 387,
                                  "end": 408,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 387,
                                    "end": 391
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 392,
                                    "end": 408,
                                    "decorators": [],
                                    "name": "_templateStorage",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 409,
                                  "end": 424,
                                  "decorators": [],
                                  "name": "templateSources",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "MemberExpression",
                                "start": 425,
                                "end": 435,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 425,
                                  "end": 429
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 430,
                                  "end": 435,
                                  "decorators": [],
                                  "name": "_name",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 439,
                              "end": 444,
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
                        "start": 352,
                        "end": 366,
                        "decorators": [],
                        "name": "value",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 358,
                          "end": 366,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 360,
                            "end": 366
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 367,
                      "end": 372,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 369,
                        "end": 372
                      }
                    },
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 141,
              "end": 155,
              "decorators": [],
              "name": "StringTemplate",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 468,
            "end": 611,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 475,
              "end": 611,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 497,
                "end": 611,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 507,
                    "end": 553,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 514,
                      "end": 529,
                      "decorators": [],
                      "name": "templateSources",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 529,
                      "end": 547,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 531,
                        "end": 547,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 531,
                          "end": 547,
                          "decorators": [],
                          "name": "TemplateKeyValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 550,
                      "end": 552,
                      "properties": []
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 562,
                    "end": 605,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 569,
                      "end": 581,
                      "decorators": [],
                      "name": "templateData",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 581,
                      "end": 599,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 583,
                        "end": 599,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 583,
                          "end": 599,
                          "decorators": [],
                          "name": "TemplateKeyValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 602,
                      "end": 604,
                      "properties": []
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 481,
                "end": 496,
                "decorators": [],
                "name": "TemplateStorage",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
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
            "decorators": [],
            "name": "MsPortal",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "decorators": [],
            "name": "Util",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 21,
          "end": 35,
          "decorators": [],
          "name": "TemplateEngine",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
