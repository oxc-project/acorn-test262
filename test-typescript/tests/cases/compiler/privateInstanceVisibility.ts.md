__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 450,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 323,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 323,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 319,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 27,
              "end": 319,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 319,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 53,
                    "end": 80,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 71,
                      "decorators": [],
                      "name": "someNumber",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 101,
                    "end": 304,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 119,
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 119,
                      "end": 304,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 122,
                        "end": 304,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 138,
                            "end": 154,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 142,
                                "end": 153,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 142,
                                  "end": 146,
                                  "decorators": [],
                                  "name": "that",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "ThisExpression",
                                  "start": 149,
                                  "end": 153
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "FunctionDeclaration",
                            "start": 190,
                            "end": 292,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 215,
                              "end": 292,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 250,
                                  "end": 276,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 254,
                                      "end": 275,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 254,
                                        "end": 257,
                                        "decorators": [],
                                        "name": "num",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 260,
                                        "end": 275,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 260,
                                          "end": 264,
                                          "decorators": [],
                                          "name": "that",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 265,
                                          "end": 275,
                                          "decorators": [],
                                          "name": "someNumber",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                }
                              ]
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": {
                              "type": "Identifier",
                              "start": 199,
                              "end": 212,
                              "decorators": [],
                              "name": "innerFunction",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
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
                "start": 33,
                "end": 40,
                "decorators": [],
                "name": "Example",
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
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 327,
      "end": 449,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 335,
        "end": 449,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 342,
            "end": 360,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 351,
              "end": 359,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 353,
                "end": 359
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 391,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 366,
              "end": 370,
              "decorators": [],
              "name": "getX",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 370,
              "end": 391,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 373,
                "end": 391,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 375,
                    "end": 389,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 382,
                      "end": 388,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 382,
                        "end": 386
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 388,
                        "decorators": [],
                        "name": "x",
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 397,
            "end": 447,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 397,
              "end": 402,
              "decorators": [],
              "name": "clone",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 402,
              "end": 447,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 413,
                "end": 447,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 423,
                    "end": 440,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 423,
                      "end": 439,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 423,
                        "end": 429,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 423,
                          "end": 427
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 429,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 432,
                        "end": 439,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 432,
                          "end": 437,
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 438,
                          "end": 439,
                          "decorators": [],
                          "name": "x",
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
                  "start": 403,
                  "end": 411,
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 408,
                    "end": 411,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 410,
                      "end": 411,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 411,
                        "decorators": [],
                        "name": "C",
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 334,
        "decorators": [],
        "name": "C",
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
