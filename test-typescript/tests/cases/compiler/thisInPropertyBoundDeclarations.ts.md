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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Bug",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 220,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "name": "name",
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
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 43,
            "end": 153,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 85,
                      "end": 94,
                      "name": "that",
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
                            "name": "Bug",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 96,
                      "end": 108,
                      "name": "name",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 100,
                        "end": 108,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 102,
                          "end": 108
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                              "name": "that",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 129,
                              "end": 132,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 133,
                              "end": 137,
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                    "name": "Function",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 218,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 170,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 218,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 171,
                  "end": 183,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 177,
                      "end": 183
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 211,
                        "name": "name",
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
            "accessibility": "private"
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
      "start": 268,
      "end": 678,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 275,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 276,
        "end": 678,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 282,
            "end": 323,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 287,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 290,
              "end": 322,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
            "start": 329,
            "end": 431,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 334,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 337,
              "end": 430,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "inner",
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
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 413,
                    "end": 424,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 413,
                      "end": 423,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "ThisExpression",
                        "start": 419,
                        "end": 423
                      },
                      "typeParameters": null,
                      "returnType": null
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
            "start": 437,
            "end": 514,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 437,
              "end": 442,
              "name": "prop3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 445,
              "end": 513,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "inner",
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
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  }
                ]
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
            "start": 520,
            "end": 576,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 520,
              "end": 525,
              "name": "prop4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 528,
              "end": 575,
              "properties": [
                {
                  "type": "Property",
                  "start": 538,
                  "end": 568,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 539,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 541,
                    "end": 568,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
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
            "start": 582,
            "end": 676,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 582,
              "end": 587,
              "name": "prop5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 590,
              "end": 675,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 627,
                            "end": 628,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 630,
                            "end": 657,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
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
      "start": 680,
      "end": 1012,
      "id": {
        "type": "Identifier",
        "start": 686,
        "end": 687,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 688,
        "end": 1012,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 694,
            "end": 707,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 694,
              "end": 699,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ThisExpression",
              "start": 702,
              "end": 706
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
            "start": 713,
            "end": 732,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 713,
              "end": 718,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 721,
              "end": 731,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "ThisExpression",
                "start": 727,
                "end": 731
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
            "start": 738,
            "end": 775,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 738,
              "end": 743,
              "name": "prop3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 746,
              "end": 774,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 752,
                "end": 774,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 758,
                  "end": 774,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 764,
                    "end": 774,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "ThisExpression",
                      "start": 770,
                      "end": 774
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "typeParameters": null,
                "returnType": null
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
            "start": 781,
            "end": 860,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 781,
              "end": 786,
              "name": "prop4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 811,
                      "end": 818,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 842,
                  "end": 858,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 848,
                    "end": 858,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "ThisExpression",
                      "start": 854,
                      "end": 858
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "typeParameters": null,
                "returnType": null
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
            "type": "PropertyDefinition",
            "start": 866,
            "end": 916,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 866,
              "end": 871,
              "name": "prop5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 874,
              "end": 915,
              "properties": [
                {
                  "type": "Property",
                  "start": 884,
                  "end": 909,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 884,
                    "end": 885,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 887,
                    "end": 909,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
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
            "start": 922,
            "end": 1010,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 922,
              "end": 927,
              "name": "prop6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 930,
              "end": 1009,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 967,
                            "end": 968,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 970,
                            "end": 992,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
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
