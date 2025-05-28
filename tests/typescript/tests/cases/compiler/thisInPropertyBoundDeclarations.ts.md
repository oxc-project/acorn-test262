__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1012,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 220,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bug",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 220,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 37,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
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
            "type": "PropertyDefinition",
            "start": 43,
            "end": 153,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 74,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 64,
                "end": 74,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 72,
                  "typeName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 72,
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "start": 77,
              "end": 152,
              "elements": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 84,
                  "end": 146,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 85,
                      "end": 94,
                      "decorators": [],
                      "name": "that",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 89,
                        "end": 94,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 91,
                          "end": 94,
                          "typeName": {
                            "type": "Identifier",
                            "start": 91,
                            "end": 94,
                            "decorators": [],
                            "name": "Bug",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 96,
                      "end": 108,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 100,
                        "end": 108,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 102,
                          "end": 108
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 113,
                    "end": 146,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 124,
                        "end": 139,
                        "expression": {
                          "type": "CallExpression",
                          "start": 124,
                          "end": 138,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 124,
                            "end": 132,
                            "object": {
                              "type": "Identifier",
                              "start": 124,
                              "end": 128,
                              "decorators": [],
                              "name": "that",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 129,
                              "end": 132,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 133,
                              "end": 137,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 218,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 170,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 218,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 171,
                  "end": 183,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 177,
                      "end": 183
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 185,
                "end": 218,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 195,
                    "end": 212,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 195,
                      "end": 211,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 195,
                        "end": 204,
                        "object": {
                          "type": "ThisExpression",
                          "start": 195,
                          "end": 199
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 204,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 211,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
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
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 268,
      "end": 678,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 275,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 276,
        "end": 678,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 282,
            "end": 323,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 287,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 290,
              "end": 322,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 301,
                "end": 322,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 311,
                    "end": 316,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 311,
                      "end": 315
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
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
            "type": "PropertyDefinition",
            "start": 329,
            "end": 431,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 334,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 337,
              "end": 430,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 430,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 358,
                    "end": 404,
                    "id": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 372,
                      "decorators": [],
                      "name": "inner",
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
                      "start": 375,
                      "end": 404,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 389,
                          "end": 394,
                          "expression": {
                            "type": "ThisExpression",
                            "start": 389,
                            "end": 393
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 413,
                    "end": 424,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 413,
                      "end": 423,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "ThisExpression",
                        "start": 419,
                        "end": 423
                      },
                      "id": null,
                      "generator": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
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
            "type": "PropertyDefinition",
            "start": 437,
            "end": 514,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 437,
              "end": 442,
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 445,
              "end": 513,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 451,
                "end": 513,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 461,
                    "end": 507,
                    "id": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 475,
                      "decorators": [],
                      "name": "inner",
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
                      "start": 478,
                      "end": 507,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 492,
                          "end": 497,
                          "expression": {
                            "type": "ThisExpression",
                            "start": 492,
                            "end": 496
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  }
                ]
              },
              "id": null,
              "generator": false
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
            "type": "PropertyDefinition",
            "start": 520,
            "end": 576,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 520,
              "end": 525,
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 528,
              "end": 575,
              "properties": [
                {
                  "type": "Property",
                  "start": 538,
                  "end": 568,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 539,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 541,
                    "end": 568,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 552,
                      "end": 568,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 554,
                          "end": 566,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 561,
                            "end": 565
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
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
            "type": "PropertyDefinition",
            "start": 582,
            "end": 676,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 582,
              "end": 587,
              "decorators": [],
              "name": "prop5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 590,
              "end": 675,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 596,
                "end": 675,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 606,
                    "end": 669,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 613,
                      "end": 668,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 627,
                          "end": 657,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 627,
                            "end": 628,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 630,
                            "end": 657,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 641,
                              "end": 657,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 643,
                                  "end": 655,
                                  "argument": {
                                    "type": "ThisExpression",
                                    "start": 650,
                                    "end": 654
                                  }
                                }
                              ]
                            },
                            "expression": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
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
    {
      "type": "ClassDeclaration",
      "start": 680,
      "end": 1012,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 686,
        "end": 687,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 688,
        "end": 1012,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 694,
            "end": 707,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 694,
              "end": 699,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 702,
              "end": 706
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
            "type": "PropertyDefinition",
            "start": 713,
            "end": 732,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 713,
              "end": 718,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 721,
              "end": 731,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ThisExpression",
                "start": 727,
                "end": 731
              },
              "id": null,
              "generator": false
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
            "type": "PropertyDefinition",
            "start": 738,
            "end": 775,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 738,
              "end": 743,
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 746,
              "end": 774,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 752,
                "end": 774,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 758,
                  "end": 774,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 764,
                    "end": 774,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "ThisExpression",
                      "start": 770,
                      "end": 774
                    },
                    "id": null,
                    "generator": false
                  },
                  "id": null,
                  "generator": false
                },
                "id": null,
                "generator": false
              },
              "id": null,
              "generator": false
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
            "type": "PropertyDefinition",
            "start": 781,
            "end": 860,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 781,
              "end": 786,
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 789,
              "end": 859,
              "left": {
                "type": "BinaryExpression",
                "start": 789,
                "end": 828,
                "left": {
                  "type": "BinaryExpression",
                  "start": 789,
                  "end": 818,
                  "left": {
                    "type": "Literal",
                    "start": 789,
                    "end": 793,
                    "value": "  ",
                    "raw": "'  '"
                  },
                  "operator": "+",
                  "right": {
                    "type": "FunctionExpression",
                    "start": 800,
                    "end": 818,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 811,
                      "end": 818,
                      "body": []
                    },
                    "expression": false
                  }
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 825,
                  "end": 828,
                  "value": " ",
                  "raw": "' '"
                }
              },
              "operator": "+",
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 836,
                "end": 858,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 842,
                  "end": 858,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 848,
                    "end": 858,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "ThisExpression",
                      "start": 854,
                      "end": 858
                    },
                    "id": null,
                    "generator": false
                  },
                  "id": null,
                  "generator": false
                },
                "id": null,
                "generator": false
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
            "type": "PropertyDefinition",
            "start": 866,
            "end": 916,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 866,
              "end": 871,
              "decorators": [],
              "name": "prop5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 874,
              "end": 915,
              "properties": [
                {
                  "type": "Property",
                  "start": 884,
                  "end": 909,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 884,
                    "end": 885,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 887,
                    "end": 909,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 893,
                      "end": 909,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 895,
                          "end": 907,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 902,
                            "end": 906
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
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
            "type": "PropertyDefinition",
            "start": 922,
            "end": 1010,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 922,
              "end": 927,
              "decorators": [],
              "name": "prop6",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 930,
              "end": 1009,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 936,
                "end": 1009,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 946,
                    "end": 1003,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 953,
                      "end": 1002,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 967,
                          "end": 992,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 967,
                            "end": 968,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 970,
                            "end": 992,
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 976,
                              "end": 992,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 978,
                                  "end": 990,
                                  "argument": {
                                    "type": "ThisExpression",
                                    "start": 985,
                                    "end": 989
                                  }
                                }
                              ]
                            },
                            "id": null,
                            "generator": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
