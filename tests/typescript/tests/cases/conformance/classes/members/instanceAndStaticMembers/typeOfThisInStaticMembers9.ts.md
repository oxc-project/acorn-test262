__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 489,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
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
        "start": 8,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 489,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 489,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 103,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 82,
              "decorators": [],
              "name": "arrowFunctionBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 85,
              "end": 102,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "start": 91,
                "end": 102,
                "left": {
                  "type": "MemberExpression",
                  "start": 91,
                  "end": 98,
                  "object": {
                    "type": "Super",
                    "start": 91,
                    "end": 96
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 101,
                  "end": 102,
                  "value": 1,
                  "raw": "1"
                }
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 173,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 135,
              "decorators": [],
              "name": "functionExprBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 172,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 150,
                "end": 172,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 152,
                    "end": 170,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 159,
                      "end": 170,
                      "left": {
                        "type": "MemberExpression",
                        "start": 159,
                        "end": 166,
                        "object": {
                          "type": "Super",
                          "start": 159,
                          "end": 164
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 166,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 169,
                        "end": 170,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 231,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 202,
              "decorators": [],
              "name": "classExprBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "start": 205,
              "end": 230,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 211,
                "end": 230,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 213,
                    "end": 228,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "BinaryExpression",
                      "start": 217,
                      "end": 228,
                      "left": {
                        "type": "MemberExpression",
                        "start": 217,
                        "end": 224,
                        "object": {
                          "type": "Super",
                          "start": 217,
                          "end": 222
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 223,
                          "end": 224,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 227,
                        "end": 228,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 236,
            "end": 487,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 271,
              "decorators": [],
              "name": "functionAndClassDeclBoundary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 274,
              "end": 486,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 275,
                "end": 483,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 281,
                  "end": 483,
                  "body": [
                    {
                      "type": "FunctionDeclaration",
                      "start": 291,
                      "end": 349,
                      "id": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 303,
                        "decorators": [],
                        "name": "foo",
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
                        "start": 307,
                        "end": 349,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 321,
                            "end": 339,
                            "argument": {
                              "type": "BinaryExpression",
                              "start": 328,
                              "end": 339,
                              "left": {
                                "type": "MemberExpression",
                                "start": 328,
                                "end": 335,
                                "object": {
                                  "type": "Super",
                                  "start": 328,
                                  "end": 333
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 334,
                                  "end": 335,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 338,
                                "end": 339,
                                "value": 4,
                                "raw": "4"
                              }
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    {
                      "type": "ClassDeclaration",
                      "start": 358,
                      "end": 477,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 364,
                        "end": 365,
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
                        "start": 366,
                        "end": 477,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 380,
                            "end": 395,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 380,
                              "end": 381,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": null,
                            "value": {
                              "type": "BinaryExpression",
                              "start": 384,
                              "end": 395,
                              "left": {
                                "type": "MemberExpression",
                                "start": 384,
                                "end": 391,
                                "object": {
                                  "type": "Super",
                                  "start": 384,
                                  "end": 389
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 390,
                                  "end": 391,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 394,
                                "end": 395,
                                "value": 5,
                                "raw": "5"
                              }
                            },
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 408,
                            "end": 467,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 408,
                              "end": 414,
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 415,
                              "end": 467,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 418,
                                "end": 467,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 436,
                                    "end": 453,
                                    "argument": {
                                      "type": "BinaryExpression",
                                      "start": 443,
                                      "end": 453,
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 443,
                                        "end": 450,
                                        "object": {
                                          "type": "Super",
                                          "start": 443,
                                          "end": 448
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 449,
                                          "end": 450,
                                          "decorators": [],
                                          "name": "f",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "start": 452,
                                        "end": 453,
                                        "value": 6,
                                        "raw": "6"
                                      }
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
                          }
                        ]
                      },
                      "abstract": false,
                      "declare": false
                    }
                  ]
                },
                "id": null,
                "generator": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
