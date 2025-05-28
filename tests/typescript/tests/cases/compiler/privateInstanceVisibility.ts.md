__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 449,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 323,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 319,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 27,
              "end": 319,
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 319,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 53,
                    "end": 80,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 71,
                      "decorators": [],
                      "name": "someNumber",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 101,
                    "end": 304,
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
                    "value": {
                      "type": "FunctionExpression",
                      "start": 119,
                      "end": 304,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 122,
                        "end": 304,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 138,
                            "end": 154,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 142,
                                "end": 153,
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
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "FunctionDeclaration",
                            "start": 190,
                            "end": 292,
                            "id": {
                              "type": "Identifier",
                              "start": 199,
                              "end": 212,
                              "decorators": [],
                              "name": "innerFunction",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 215,
                              "end": 292,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 250,
                                  "end": 276,
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 254,
                                      "end": 275,
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
                                        "object": {
                                          "type": "Identifier",
                                          "start": 260,
                                          "end": 264,
                                          "decorators": [],
                                          "name": "that",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 265,
                                          "end": 275,
                                          "decorators": [],
                                          "name": "someNumber",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "declare": false
                                }
                              ]
                            },
                            "expression": false
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 327,
      "end": 449,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 335,
        "end": 449,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 342,
            "end": 360,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 391,
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
            "value": {
              "type": "FunctionExpression",
              "start": 370,
              "end": 391,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 382,
                        "end": 386
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 388,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 397,
            "end": 447,
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
            "value": {
              "type": "FunctionExpression",
              "start": 402,
              "end": 447,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 411,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 413,
                "end": 447,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 423,
                    "end": 440,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 423,
                      "end": 439,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 423,
                        "end": 429,
                        "object": {
                          "type": "ThisExpression",
                          "start": 423,
                          "end": 427
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 429,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 432,
                        "end": 439,
                        "object": {
                          "type": "Identifier",
                          "start": 432,
                          "end": 437,
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 438,
                          "end": 439,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
