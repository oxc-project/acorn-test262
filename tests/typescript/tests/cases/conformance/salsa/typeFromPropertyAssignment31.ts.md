__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 788,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 50,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 50,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 39,
            "end": 48,
            "argument": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 21,
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 31,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 72,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 51,
        "end": 72,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 51,
          "end": 66,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 51,
            "end": 63,
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 69,
          "end": 72,
          "raw": "111",
          "value": 111
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 73,
        "end": 131,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 73,
          "end": 87,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 73,
            "end": 85,
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 90,
          "end": 131,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 110,
            "end": 131,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 116,
                "end": 129,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 123,
                  "end": 128,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 124,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 127,
                    "end": 128,
                    "raw": "1",
                    "value": 1
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
              "start": 99,
              "end": 108,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 100,
                "end": 108,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 102,
                  "end": 108
                }
              }
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 132,
      "end": 183,
      "body": {
        "type": "TSModuleBlock",
        "start": 155,
        "end": 183,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 161,
            "end": 181,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 168,
              "end": 181,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 172,
                  "end": 180,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 174,
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 177,
                    "end": 180,
                    "raw": "222",
                    "value": 222
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 142,
        "end": 154,
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 208,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 184,
        "end": 207,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 184,
          "end": 199,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 184,
            "end": 196,
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 197,
            "end": 199,
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 202,
          "end": 207,
          "raw": "44444",
          "value": 44444
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 239,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 215,
        "end": 238,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 215,
          "end": 230,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 215,
            "end": 227,
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 228,
            "end": 230,
            "decorators": [],
            "name": "p6",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 233,
          "end": 238,
          "raw": "66666",
          "value": 66666
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 246,
      "end": 270,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 246,
        "end": 269,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 246,
          "end": 261,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 246,
            "end": 258,
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 259,
            "end": 261,
            "decorators": [],
            "name": "p8",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 264,
          "end": 269,
          "raw": "false",
          "value": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 285,
      "end": 474,
      "body": {
        "type": "TSModuleBlock",
        "start": 308,
        "end": 474,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 314,
            "end": 334,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 321,
              "end": 334,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 325,
                  "end": 333,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 327,
                    "decorators": [],
                    "name": "p3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 330,
                    "end": 333,
                    "raw": "333",
                    "value": 333
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 339,
            "end": 357,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 346,
              "end": 357,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 350,
                  "end": 356,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 352,
                    "decorators": [],
                    "name": "p4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 355,
                    "end": 356,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 362,
            "end": 380,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 369,
              "end": 380,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 373,
                  "end": 379,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 375,
                    "decorators": [],
                    "name": "p5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 378,
                    "end": 379,
                    "raw": "5",
                    "value": 5
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 385,
            "end": 403,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 392,
              "end": 403,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 396,
                  "end": 402,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 396,
                    "end": 398,
                    "decorators": [],
                    "name": "p6",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 401,
                    "end": 402,
                    "raw": "6",
                    "value": 6
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 408,
            "end": 426,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 415,
              "end": 426,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 419,
                  "end": 425,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 421,
                    "decorators": [],
                    "name": "p7",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 424,
                    "end": 425,
                    "raw": "7",
                    "value": 7
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 431,
            "end": 449,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 438,
              "end": 449,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 442,
                  "end": 448,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 444,
                    "decorators": [],
                    "name": "p8",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 447,
                    "end": 448,
                    "raw": "6",
                    "value": 6
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 454,
            "end": 472,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 461,
              "end": 472,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 465,
                  "end": 471,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 467,
                    "decorators": [],
                    "name": "p9",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 470,
                    "end": 471,
                    "raw": "7",
                    "value": 7
                  }
                }
              ],
              "declare": false,
              "kind": "let"
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
        "start": 295,
        "end": 307,
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 475,
      "end": 500,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 475,
        "end": 499,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 475,
          "end": 490,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 475,
            "end": 487,
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 488,
            "end": 490,
            "decorators": [],
            "name": "p5",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 493,
          "end": 499,
          "raw": "555555",
          "value": 555555
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 507,
      "end": 532,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 507,
        "end": 531,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 507,
          "end": 522,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 507,
            "end": 519,
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 520,
            "end": 522,
            "decorators": [],
            "name": "p7",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 525,
          "end": 531,
          "raw": "777777",
          "value": 777777
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 539,
      "end": 563,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 539,
        "end": 562,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 539,
          "end": 554,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 539,
            "end": 551,
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 552,
            "end": 554,
            "decorators": [],
            "name": "p9",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 557,
          "end": 562,
          "raw": "false",
          "value": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 578,
      "end": 788,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 582,
          "end": 787,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 583,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 586,
            "end": 787,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 586,
              "end": 766,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 586,
                "end": 745,
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "start": 586,
                  "end": 727,
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 586,
                    "end": 709,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 586,
                      "end": 691,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 586,
                        "end": 673,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 586,
                          "end": 655,
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 586,
                            "end": 637,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 586,
                              "end": 619,
                              "operator": "+",
                              "left": {
                                "type": "MemberExpression",
                                "start": 586,
                                "end": 601,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 586,
                                  "end": 598,
                                  "decorators": [],
                                  "name": "ExpandoMerge",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 599,
                                  "end": 601,
                                  "decorators": [],
                                  "name": "p1",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 604,
                                "end": 619,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 604,
                                  "end": 616,
                                  "decorators": [],
                                  "name": "ExpandoMerge",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 617,
                                  "end": 619,
                                  "decorators": [],
                                  "name": "p2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 622,
                              "end": 637,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 622,
                                "end": 634,
                                "decorators": [],
                                "name": "ExpandoMerge",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 635,
                                "end": 637,
                                "decorators": [],
                                "name": "p3",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 640,
                            "end": 655,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 640,
                              "end": 652,
                              "decorators": [],
                              "name": "ExpandoMerge",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 653,
                              "end": 655,
                              "decorators": [],
                              "name": "p4",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 658,
                          "end": 673,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 658,
                            "end": 670,
                            "decorators": [],
                            "name": "ExpandoMerge",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 671,
                            "end": 673,
                            "decorators": [],
                            "name": "p5",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 676,
                        "end": 691,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 688,
                          "decorators": [],
                          "name": "ExpandoMerge",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 689,
                          "end": 691,
                          "decorators": [],
                          "name": "p6",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 694,
                      "end": 709,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 694,
                        "end": 706,
                        "decorators": [],
                        "name": "ExpandoMerge",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 707,
                        "end": 709,
                        "decorators": [],
                        "name": "p7",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 712,
                    "end": 727,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 712,
                      "end": 724,
                      "decorators": [],
                      "name": "ExpandoMerge",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 727,
                      "decorators": [],
                      "name": "p8",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 730,
                  "end": 745,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 730,
                    "end": 742,
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 743,
                    "end": 745,
                    "decorators": [],
                    "name": "p9",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "start": 748,
                "end": 766,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 763,
                    "end": 765,
                    "raw": "12",
                    "value": 12
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 748,
                  "end": 762,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 748,
                    "end": 760,
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 761,
                    "end": 762,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            },
            "right": {
              "type": "CallExpression",
              "start": 769,
              "end": 787,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 782,
                  "end": 786,
                  "raw": "1001",
                  "value": 1001
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 769,
                "end": 781,
                "decorators": [],
                "name": "ExpandoMerge",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
