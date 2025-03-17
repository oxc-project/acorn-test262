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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 40,
                "name": "Example",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 319,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 53,
                    "end": 80,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 71,
                      "name": "someNumber",
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
                      "start": 71,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 101,
                    "end": 304,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 119,
                      "name": "doSomething",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 119,
                      "end": 304,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 142,
                                  "end": 146,
                                  "name": "that",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "ThisExpression",
                                  "start": 149,
                                  "end": 153
                                },
                                "definite": false
                              }
                            ],
                            "kind": "var",
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
                              "name": "innerFunction",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                      "id": {
                                        "type": "Identifier",
                                        "start": 254,
                                        "end": 257,
                                        "name": "num",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 260,
                                        "end": 275,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 260,
                                          "end": 264,
                                          "name": "that",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 265,
                                          "end": 275,
                                          "name": "someNumber",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
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
    },
    {
      "type": "ClassDeclaration",
      "start": 327,
      "end": 449,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 334,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 335,
        "end": 449,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 342,
            "end": 360,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
              "name": "x",
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
              "start": 351,
              "end": 359,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 353,
                "end": 359
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 391,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 366,
              "end": 370,
              "name": "getX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 370,
              "end": 391,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
            "start": 397,
            "end": 447,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 397,
              "end": 402,
              "name": "clone",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 402,
              "end": 447,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 403,
                  "end": 411,
                  "name": "other",
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
                        "name": "C",
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 432,
                        "end": 439,
                        "object": {
                          "type": "Identifier",
                          "start": 432,
                          "end": 437,
                          "name": "other",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 438,
                          "end": 439,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
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
