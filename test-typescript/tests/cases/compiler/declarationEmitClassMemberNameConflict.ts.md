__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 596,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 143,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 143,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 15,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 16,
          "end": 143,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 22,
              "end": 30,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 22,
                "end": 24,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 24,
                "end": 30,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 27,
                  "end": 30,
                  "body": []
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
              "start": 76,
              "end": 141,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 76,
                "end": 79,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 79,
                "end": 141,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 82,
                  "end": 141,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 92,
                      "end": 135,
                      "argument": {
                        "type": "FunctionExpression",
                        "start": 99,
                        "end": 134,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 109,
                            "end": 121,
                            "name": "t",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 110,
                              "end": 121,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "start": 112,
                                "end": 121,
                                "exprName": {
                                  "type": "Identifier",
                                  "start": 119,
                                  "end": 121,
                                  "name": "C1",
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
                          "start": 123,
                          "end": 134,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 145,
      "end": 287,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 152,
        "end": 287,
        "id": {
          "type": "Identifier",
          "start": 158,
          "end": 160,
          "name": "C2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 161,
          "end": 287,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 167,
              "end": 174,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 167,
                "end": 169,
                "name": "C2",
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
                "start": 169,
                "end": 174,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 171,
                  "end": 174
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 220,
              "end": 285,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 220,
                "end": 223,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 223,
                "end": 285,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 226,
                  "end": 285,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 236,
                      "end": 279,
                      "argument": {
                        "type": "FunctionExpression",
                        "start": 243,
                        "end": 278,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 253,
                            "end": 265,
                            "name": "t",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 254,
                              "end": 265,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "start": 256,
                                "end": 265,
                                "exprName": {
                                  "type": "Identifier",
                                  "start": 263,
                                  "end": 265,
                                  "name": "C2",
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
                          "start": 267,
                          "end": 278,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 289,
      "end": 446,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 296,
        "end": 446,
        "id": {
          "type": "Identifier",
          "start": 302,
          "end": 304,
          "name": "C3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 305,
          "end": 446,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 311,
              "end": 333,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 315,
                "end": 317,
                "name": "C3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 317,
                "end": 333,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 320,
                  "end": 333,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 322,
                      "end": 331,
                      "argument": {
                        "type": "Literal",
                        "start": 329,
                        "end": 330,
                        "value": 0,
                        "raw": "0"
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
              "start": 379,
              "end": 444,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 379,
                "end": 382,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 382,
                "end": 444,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 385,
                  "end": 444,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 395,
                      "end": 438,
                      "argument": {
                        "type": "FunctionExpression",
                        "start": 402,
                        "end": 437,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 412,
                            "end": 424,
                            "name": "t",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 413,
                              "end": 424,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "start": 415,
                                "end": 424,
                                "exprName": {
                                  "type": "Identifier",
                                  "start": 422,
                                  "end": 424,
                                  "name": "C3",
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
                          "start": 426,
                          "end": 437,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 448,
      "end": 596,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 455,
        "end": 596,
        "id": {
          "type": "Identifier",
          "start": 461,
          "end": 463,
          "name": "C4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 464,
          "end": 596,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 470,
              "end": 483,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 474,
                "end": 476,
                "name": "C4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 476,
                "end": 483,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 477,
                    "end": 478,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 480,
                  "end": 483,
                  "body": []
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
              "start": 529,
              "end": 594,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 529,
                "end": 532,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 532,
                "end": 594,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 535,
                  "end": 594,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 545,
                      "end": 588,
                      "argument": {
                        "type": "FunctionExpression",
                        "start": 552,
                        "end": 587,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 562,
                            "end": 574,
                            "name": "t",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 563,
                              "end": 574,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "start": 565,
                                "end": 574,
                                "exprName": {
                                  "type": "Identifier",
                                  "start": 572,
                                  "end": 574,
                                  "name": "C4",
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
                          "start": 576,
                          "end": 587,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
