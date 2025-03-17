__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 490,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 489,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 103,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 82,
              "name": "arrowFunctionBoundary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 85,
              "end": 102,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
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
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 173,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 135,
              "name": "functionExprBoundary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 172,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 231,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 202,
              "name": "classExprBoundary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ClassExpression",
              "start": 205,
              "end": 230,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 211,
                "end": 230,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 213,
                    "end": 228,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
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
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 236,
            "end": 487,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 271,
              "name": "functionAndClassDeclBoundary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 274,
              "end": 486,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 275,
                "end": 483,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "name": "foo",
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
                                  "name": "f",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "ClassDeclaration",
                      "start": 358,
                      "end": 477,
                      "id": {
                        "type": "Identifier",
                        "start": 364,
                        "end": 365,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 366,
                        "end": 477,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 380,
                            "end": 395,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 380,
                              "end": 381,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                  "name": "f",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
                            "decorators": [],
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "typeAnnotation": null,
                            "accessibility": null
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 408,
                            "end": 467,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 408,
                              "end": 414,
                              "name": "method",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 415,
                              "end": 467,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                                          "name": "f",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
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
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
