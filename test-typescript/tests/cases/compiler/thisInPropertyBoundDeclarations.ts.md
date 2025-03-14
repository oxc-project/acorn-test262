thisInPropertyBoundDeclarations.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 220,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 37,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 43,
            "end": 153,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "decorators": [],
              "name": "func",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
                    "optional": false
                  }
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
                  "async": false,
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
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 133,
                              "end": 137,
                              "decorators": [],
                              "name": "name",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 124,
                            "end": 132,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 124,
                              "end": 128,
                              "decorators": [],
                              "name": "that",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 129,
                              "end": 132,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
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
                            "optional": false
                          }
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
                  ]
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 218,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 170,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 218,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 195,
                          "end": 199
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 204,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 211,
                        "decorators": [],
                        "name": "name",
                        "optional": false
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bug",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 268,
      "end": 678,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 276,
        "end": 678,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 282,
            "end": 323,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 287,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 290,
              "end": 322,
              "async": false,
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
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 329,
            "end": 431,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 334,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 337,
              "end": 430,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 430,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 358,
                    "end": 404,
                    "async": false,
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
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 372,
                      "decorators": [],
                      "name": "inner",
                      "optional": false
                    },
                    "params": []
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 413,
                    "end": 424,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 413,
                      "end": 423,
                      "async": false,
                      "body": {
                        "type": "ThisExpression",
                        "start": 419,
                        "end": 423
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 437,
            "end": 514,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 437,
              "end": 442,
              "decorators": [],
              "name": "prop3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 445,
              "end": 513,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 451,
                "end": 513,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 461,
                    "end": 507,
                    "async": false,
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
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 475,
                      "decorators": [],
                      "name": "inner",
                      "optional": false
                    },
                    "params": []
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 520,
            "end": 576,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 520,
              "end": 525,
              "decorators": [],
              "name": "prop4",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ObjectExpression",
              "start": 528,
              "end": 575,
              "properties": [
                {
                  "type": "Property",
                  "start": 538,
                  "end": 568,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 539,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 541,
                    "end": 568,
                    "async": false,
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 582,
            "end": 676,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 582,
              "end": 587,
              "decorators": [],
              "name": "prop5",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 590,
              "end": 675,
              "async": false,
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 627,
                            "end": 628,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 630,
                            "end": 657,
                            "async": false,
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
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": []
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 275,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 680,
      "end": 1012,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 688,
        "end": 1012,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 694,
            "end": 707,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 694,
              "end": 699,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ThisExpression",
              "start": 702,
              "end": 706
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 713,
            "end": 732,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 713,
              "end": 718,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 721,
              "end": 731,
              "async": false,
              "body": {
                "type": "ThisExpression",
                "start": 727,
                "end": 731
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 738,
            "end": 775,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 738,
              "end": 743,
              "decorators": [],
              "name": "prop3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 746,
              "end": 774,
              "async": false,
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 752,
                "end": 774,
                "async": false,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 758,
                  "end": 774,
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 764,
                    "end": 774,
                    "async": false,
                    "body": {
                      "type": "ThisExpression",
                      "start": 770,
                      "end": 774
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 781,
            "end": 860,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 781,
              "end": 786,
              "decorators": [],
              "name": "prop4",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "BinaryExpression",
              "start": 789,
              "end": 859,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 789,
                "end": 828,
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "start": 789,
                  "end": 818,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 789,
                    "end": 793,
                    "raw": "'  '",
                    "value": "  "
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "start": 800,
                    "end": 818,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 811,
                      "end": 818,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 825,
                  "end": 828,
                  "raw": "' '",
                  "value": " "
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 836,
                "end": 858,
                "async": false,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 842,
                  "end": 858,
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 848,
                    "end": 858,
                    "async": false,
                    "body": {
                      "type": "ThisExpression",
                      "start": 854,
                      "end": 858
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 866,
            "end": 916,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 866,
              "end": 871,
              "decorators": [],
              "name": "prop5",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ObjectExpression",
              "start": 874,
              "end": 915,
              "properties": [
                {
                  "type": "Property",
                  "start": 884,
                  "end": 909,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 884,
                    "end": 885,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 887,
                    "end": 909,
                    "async": false,
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 922,
            "end": 1010,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 922,
              "end": 927,
              "decorators": [],
              "name": "prop6",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 930,
              "end": 1009,
              "async": false,
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 967,
                            "end": 968,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 970,
                            "end": 992,
                            "async": false,
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
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": []
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 686,
        "end": 687,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
