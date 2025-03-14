__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    607
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          606
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "field",
              "range": [
                21,
                27
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                30,
                31
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              32
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "otherClass",
              "optional": false,
              "range": [
                37,
                47
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                50,
                51
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "range": [
              37,
              52
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testObject",
              "optional": false,
              "range": [
                57,
                67
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                67,
                109
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              89,
                              90
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 5
                              },
                              "start": {
                                "column": 17,
                                "line": 5
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "10",
                            "value": 10,
                            "range": [
                              92,
                              94
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 5
                              },
                              "start": {
                                "column": 20,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            89,
                            94
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 5
                            },
                            "start": {
                              "column": 17,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "range": [
                              96,
                              97
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 5
                              },
                              "start": {
                                "column": 24,
                                "line": 5
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "6",
                            "value": 6,
                            "range": [
                              99,
                              100
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 5
                              },
                              "start": {
                                "column": 27,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            96,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 24,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        87,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      80,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  70,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            "range": [
              57,
              109
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testArray",
              "optional": false,
              "range": [
                114,
                123
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                123,
                158
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            144,
                            146
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "11",
                          "value": 11,
                          "range": [
                            148,
                            150
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 8
                            },
                            "start": {
                              "column": 20,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        143,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      136,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  126,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
                    "line": 7
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "range": [
              114,
              158
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                163,
                174
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                174,
                539
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 11
                              },
                              "start": {
                                "column": 13,
                                "line": 11
                              }
                            },
                            "range": [
                              192,
                              200
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                194,
                                200
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 11
                                },
                                "start": {
                                  "column": 15,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            191,
                            200
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          191,
                          200
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      187,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                213,
                                214
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 12
                                },
                                "start": {
                                  "column": 11,
                                  "line": 12
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  216,
                                  217
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 12
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "range": [
                                  218,
                                  224
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                216,
                                224
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 12
                                },
                                "start": {
                                  "column": 14,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              213,
                              224
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 12
                              },
                              "start": {
                                "column": 11,
                                "line": 12
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                226,
                                227
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 12
                                },
                                "start": {
                                  "column": 24,
                                  "line": 12
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                226,
                                227
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 12
                                },
                                "start": {
                                  "column": 24,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              226,
                              227
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 12
                              },
                              "start": {
                                "column": 24,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "range": [
                          211,
                          229
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 12
                          },
                          "start": {
                            "column": 9,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              232,
                              236
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 12
                              },
                              "start": {
                                "column": 30,
                                "line": 12
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testObject",
                            "optional": false,
                            "range": [
                              237,
                              247
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 12
                              },
                              "start": {
                                "column": 35,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            232,
                            247
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 12
                            },
                            "start": {
                              "column": 30,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          232,
                          249
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 12
                          },
                          "start": {
                            "column": 30,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        211,
                        249
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 12
                        },
                        "start": {
                          "column": 9,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      210,
                      251
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                262,
                                263
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 13
                                },
                                "start": {
                                  "column": 10,
                                  "line": 13
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "range": [
                                264,
                                270
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 13
                                },
                                "start": {
                                  "column": 12,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              262,
                              270
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 13
                              },
                              "start": {
                                "column": 10,
                                "line": 13
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "range": [
                              272,
                              273
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 13
                              },
                              "start": {
                                "column": 20,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "optional": false,
                        "range": [
                          261,
                          274
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 13
                          },
                          "start": {
                            "column": 9,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              277,
                              281
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 13
                              },
                              "start": {
                                "column": 25,
                                "line": 13
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testArray",
                            "optional": false,
                            "range": [
                              282,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 13
                              },
                              "start": {
                                "column": 30,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            277,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 13
                            },
                            "start": {
                              "column": 25,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          277,
                          293
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 13
                          },
                          "start": {
                            "column": 25,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        261,
                        293
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 13
                        },
                        "start": {
                          "column": 9,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      260,
                      295
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                307,
                                308
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 14
                                },
                                "start": {
                                  "column": 11,
                                  "line": 14
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  310,
                                  311
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 14
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "range": [
                                  312,
                                  318
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                310,
                                318
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 14
                                },
                                "start": {
                                  "column": 14,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              307,
                              318
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 14
                              },
                              "start": {
                                "column": 11,
                                "line": 14
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                320,
                                321
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 14
                                },
                                "start": {
                                  "column": 24,
                                  "line": 14
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "range": [
                                      324,
                                      325
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "field",
                                    "range": [
                                      326,
                                      332
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "range": [
                                    324,
                                    332
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 14
                                    }
                                  }
                                }
                              ],
                              "optional": false,
                              "range": [
                                323,
                                333
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 14
                                },
                                "start": {
                                  "column": 27,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              320,
                              333
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 14
                              },
                              "start": {
                                "column": 24,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          305,
                          335
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 14
                          },
                          "start": {
                            "column": 9,
                            "line": 14
                          }
                        }
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                340,
                                341
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 14
                                },
                                "start": {
                                  "column": 44,
                                  "line": 14
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                343,
                                344
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 14
                                },
                                "start": {
                                  "column": 47,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              340,
                              344
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 14
                              },
                              "start": {
                                "column": 44,
                                "line": 14
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                346,
                                347
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 14
                                },
                                "start": {
                                  "column": 50,
                                  "line": 14
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Literal",
                                  "raw": "2",
                                  "value": 2,
                                  "range": [
                                    350,
                                    351
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 54,
                                      "line": 14
                                    }
                                  }
                                }
                              ],
                              "range": [
                                349,
                                352
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 14
                                },
                                "start": {
                                  "column": 53,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              346,
                              352
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 14
                              },
                              "start": {
                                "column": 50,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          338,
                          354
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 14
                          },
                          "start": {
                            "column": 42,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        305,
                        354
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 14
                        },
                        "start": {
                          "column": 9,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      304,
                      356
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                366,
                                367
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 15
                                },
                                "start": {
                                  "column": 9,
                                  "line": 15
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "range": [
                                368,
                                374
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 15
                                },
                                "start": {
                                  "column": 11,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              366,
                              374
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 15
                              },
                              "start": {
                                "column": 9,
                                "line": 15
                              }
                            }
                          },
                          {
                            "type": "ArrayPattern",
                            "decorators": [],
                            "elements": [
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "range": [
                                    377,
                                    378
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 15
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "field",
                                  "range": [
                                    379,
                                    385
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 15
                                    }
                                  }
                                },
                                "range": [
                                  377,
                                  385
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "optional": false,
                            "range": [
                              376,
                              386
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 15
                              },
                              "start": {
                                "column": 19,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "optional": false,
                        "range": [
                          365,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              391,
                              392
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 15
                              },
                              "start": {
                                "column": 34,
                                "line": 15
                              }
                            }
                          },
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  395,
                                  396
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "range": [
                              394,
                              397
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 15
                              },
                              "start": {
                                "column": 37,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "range": [
                          390,
                          398
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 15
                          },
                          "start": {
                            "column": 33,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        365,
                        398
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      365,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                411,
                                412
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 16
                                },
                                "start": {
                                  "column": 11,
                                  "line": 16
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "range": [
                                    414,
                                    415
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 16
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "field",
                                  "range": [
                                    416,
                                    422
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  414,
                                  422
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 16
                                  }
                                }
                              },
                              "optional": false,
                              "right": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  425,
                                  426
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                414,
                                426
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 16
                                },
                                "start": {
                                  "column": 14,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              411,
                              426
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 16
                              },
                              "start": {
                                "column": 11,
                                "line": 16
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                428,
                                429
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 16
                                },
                                "start": {
                                  "column": 28,
                                  "line": 16
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "AssignmentPattern",
                                  "decorators": [],
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "range": [
                                        432,
                                        433
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "field",
                                      "range": [
                                        434,
                                        440
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 40,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      432,
                                      440
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "right": {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      443,
                                      444
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 43,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "range": [
                                    432,
                                    444
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 16
                                    }
                                  }
                                }
                              ],
                              "optional": false,
                              "range": [
                                431,
                                445
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 16
                                },
                                "start": {
                                  "column": 31,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              428,
                              445
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 16
                              },
                              "start": {
                                "column": 28,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          409,
                          447
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 16
                          },
                          "start": {
                            "column": 9,
                            "line": 16
                          }
                        }
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                452,
                                453
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 16
                                },
                                "start": {
                                  "column": 52,
                                  "line": 16
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "range": [
                                455,
                                457
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 16
                                },
                                "start": {
                                  "column": 55,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              452,
                              457
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 16
                              },
                              "start": {
                                "column": 52,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          450,
                          459
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 16
                          },
                          "start": {
                            "column": 50,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        409,
                        459
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 16
                        },
                        "start": {
                          "column": 9,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      408,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  471,
                                  472
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 9,
                                    "line": 17
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "range": [
                                  473,
                                  479
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                471,
                                479
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 17
                                },
                                "start": {
                                  "column": 9,
                                  "line": 17
                                }
                              }
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                482,
                                483
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 17
                                },
                                "start": {
                                  "column": 20,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              471,
                              483
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 17
                              },
                              "start": {
                                "column": 9,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "optional": false,
                        "range": [
                          470,
                          484
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "range": [
                          487,
                          489
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 17
                          },
                          "start": {
                            "column": 25,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        470,
                        489
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      470,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    500,
                                    504
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 18
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "otherClass",
                                  "optional": false,
                                  "range": [
                                    505,
                                    515
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 18
                                    }
                                  }
                                },
                                "range": [
                                  500,
                                  515
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 9,
                                    "line": 18
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "range": [
                                  516,
                                  522
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                500,
                                522
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 18
                                },
                                "start": {
                                  "column": 9,
                                  "line": 18
                                }
                              }
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                525,
                                526
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 18
                                },
                                "start": {
                                  "column": 34,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              500,
                              526
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 18
                              },
                              "start": {
                                "column": 9,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "optional": false,
                        "range": [
                          499,
                          527
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 18
                          },
                          "start": {
                            "column": 8,
                            "line": 18
                          }
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "range": [
                          530,
                          532
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 18
                          },
                          "start": {
                            "column": 39,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        499,
                        532
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      499,
                      533
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  177,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "range": [
              163,
              539
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                551,
                555
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                555,
                604
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_a",
                              "optional": false,
                              "range": [
                                581,
                                583
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 21
                                },
                                "start": {
                                  "column": 9,
                                  "line": 21
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "range": [
                                584,
                                590
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 21
                                },
                                "start": {
                                  "column": 12,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              581,
                              590
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 21
                              },
                              "start": {
                                "column": 9,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "optional": false,
                        "range": [
                          580,
                          591
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 21
                          },
                          "start": {
                            "column": 8,
                            "line": 21
                          }
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              595,
                              596
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 21
                              },
                              "start": {
                                "column": 23,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "range": [
                          594,
                          597
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 21
                          },
                          "start": {
                            "column": 22,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        580,
                        597
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      580,
                      598
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  570,
                  604
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 30,
                    "line": 20
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 20
                      },
                      "start": {
                        "column": 18,
                        "line": 20
                      }
                    },
                    "range": [
                      558,
                      568
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          567,
                          568
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 20
                          },
                          "start": {
                            "column": 27,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        560,
                        568
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 20
                        },
                        "start": {
                          "column": 20,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    556,
                    568
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              }
            },
            "range": [
              544,
              604
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        606
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
