__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    668
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          14,
          323
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "range": [
                20,
                28
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null,
            "range": [
              20,
              29
            ],
            "loc": {
              "end": {
                "column": 13,
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
              "name": "property2",
              "optional": false,
              "range": [
                34,
                43
              ],
              "loc": {
                "end": {
                  "column": 13,
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
            "value": null,
            "range": [
              34,
              44
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
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                50,
                61
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                61,
                321
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
                          "name": "variable",
                          "optional": false,
                          "range": [
                            80,
                            88
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 6
                            },
                            "start": {
                              "column": 14,
                              "line": 6
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "'something'",
                          "value": "something",
                          "range": [
                            91,
                            102
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 6
                            },
                            "start": {
                              "column": 25,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          80,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 6
                          },
                          "start": {
                            "column": 14,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      74,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            112,
                            116
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "property",
                          "optional": false,
                          "range": [
                            117,
                            125
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 8
                            },
                            "start": {
                              "column": 13,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          112,
                          125
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "expressions": [],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "foo",
                              "raw": "foo"
                            },
                            "range": [
                              128,
                              133
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 8
                              },
                              "start": {
                                "column": 24,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "range": [
                          128,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 8
                          },
                          "start": {
                            "column": 24,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        112,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      112,
                      134
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            177,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "property2",
                          "optional": false,
                          "range": [
                            182,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 9
                            },
                            "start": {
                              "column": 13,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          177,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "variable",
                            "optional": false,
                            "range": [
                              201,
                              209
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 9
                              },
                              "start": {
                                "column": 32,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "foo-",
                              "raw": "foo-"
                            },
                            "range": [
                              194,
                              201
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 9
                              },
                              "start": {
                                "column": 25,
                                "line": 9
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "range": [
                              209,
                              211
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 9
                              },
                              "start": {
                                "column": 40,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "range": [
                          194,
                          211
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 9
                          },
                          "start": {
                            "column": 25,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        177,
                        211
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      177,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "localProperty",
                          "optional": false,
                          "range": [
                            247,
                            260
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 11
                            },
                            "start": {
                              "column": 14,
                              "line": 11
                            }
                          }
                        },
                        "init": {
                          "type": "TemplateLiteral",
                          "expressions": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "variable",
                              "optional": false,
                              "range": [
                                270,
                                278
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 11
                                },
                                "start": {
                                  "column": 37,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "tail": false,
                              "value": {
                                "cooked": "foo-",
                                "raw": "foo-"
                              },
                              "range": [
                                263,
                                270
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 11
                                },
                                "start": {
                                  "column": 30,
                                  "line": 11
                                }
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "tail": true,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "range": [
                                278,
                                280
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 11
                                },
                                "start": {
                                  "column": 45,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "range": [
                            263,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 11
                            },
                            "start": {
                              "column": 30,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          247,
                          280
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 11
                          },
                          "start": {
                            "column": 14,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      241,
                      281
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  64,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 5
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
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "range": [
              50,
              321
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "range": [
          6,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
        323
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          340,
          667
        ],
        "body": [
          {
            "type": "AccessorProperty",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "range": [
                355,
                363
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null,
            "range": [
              346,
              364
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "AccessorProperty",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property2",
              "optional": false,
              "range": [
                378,
                387
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 17
                },
                "start": {
                  "column": 13,
                  "line": 17
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null,
            "range": [
              369,
              388
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                394,
                405
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                405,
                665
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
                          "name": "variable",
                          "optional": false,
                          "range": [
                            424,
                            432
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 20
                            },
                            "start": {
                              "column": 14,
                              "line": 20
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "'something'",
                          "value": "something",
                          "range": [
                            435,
                            446
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 20
                            },
                            "start": {
                              "column": 25,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          424,
                          446
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 20
                          },
                          "start": {
                            "column": 14,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      418,
                      446
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            456,
                            460
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 22
                            },
                            "start": {
                              "column": 8,
                              "line": 22
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "property",
                          "optional": false,
                          "range": [
                            461,
                            469
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 22
                            },
                            "start": {
                              "column": 13,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          456,
                          469
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 22
                          }
                        }
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "expressions": [],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "foo",
                              "raw": "foo"
                            },
                            "range": [
                              472,
                              477
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 22
                              },
                              "start": {
                                "column": 24,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "range": [
                          472,
                          477
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 22
                          },
                          "start": {
                            "column": 24,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        456,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      456,
                      478
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            521,
                            525
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 23
                            },
                            "start": {
                              "column": 8,
                              "line": 23
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "property2",
                          "optional": false,
                          "range": [
                            526,
                            535
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 23
                            },
                            "start": {
                              "column": 13,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          521,
                          535
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      },
                      "right": {
                        "type": "TemplateLiteral",
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "variable",
                            "optional": false,
                            "range": [
                              545,
                              553
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 23
                              },
                              "start": {
                                "column": 32,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "foo-",
                              "raw": "foo-"
                            },
                            "range": [
                              538,
                              545
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 23
                              },
                              "start": {
                                "column": 25,
                                "line": 23
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "range": [
                              553,
                              555
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 23
                              },
                              "start": {
                                "column": 40,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "range": [
                          538,
                          555
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 23
                          },
                          "start": {
                            "column": 25,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        521,
                        555
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      521,
                      556
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "localProperty",
                          "optional": false,
                          "range": [
                            591,
                            604
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 25
                            },
                            "start": {
                              "column": 14,
                              "line": 25
                            }
                          }
                        },
                        "init": {
                          "type": "TemplateLiteral",
                          "expressions": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "variable",
                              "optional": false,
                              "range": [
                                614,
                                622
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 25
                                },
                                "start": {
                                  "column": 37,
                                  "line": 25
                                }
                              }
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "tail": false,
                              "value": {
                                "cooked": "foo-",
                                "raw": "foo-"
                              },
                              "range": [
                                607,
                                614
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 25
                                },
                                "start": {
                                  "column": 30,
                                  "line": 25
                                }
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "tail": true,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "range": [
                                622,
                                624
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 25
                                },
                                "start": {
                                  "column": 45,
                                  "line": 25
                                }
                              }
                            }
                          ],
                          "range": [
                            607,
                            624
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 25
                            },
                            "start": {
                              "column": 30,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          591,
                          624
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 25
                          },
                          "start": {
                            "column": 14,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      585,
                      625
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  408,
                  665
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 18,
                    "line": 19
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
                  "line": 26
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            },
            "range": [
              394,
              665
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 15,
            "line": 15
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass2",
        "optional": false,
        "range": [
          331,
          339
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 15
          },
          "start": {
            "column": 6,
            "line": 15
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        325,
        667
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
