__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    628
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          627
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
                14,
                20
              ],
              "loc": {
                "end": {
                  "column": 10,
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
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              25
            ],
            "loc": {
              "end": {
                "column": 15,
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
              "name": "otherObject",
              "optional": false,
              "range": [
                30,
                41
              ],
              "loc": {
                "end": {
                  "column": 15,
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
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  48,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              },
              "range": [
                44,
                51
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "range": [
              30,
              52
            ],
            "loc": {
              "end": {
                "column": 26,
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
                567
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
                                "type": "ThisExpression",
                                "range": [
                                  216,
                                  220
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
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
                                  221,
                                  227
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                216,
                                227
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
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
                              227
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
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
                                229,
                                230
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 12
                                },
                                "start": {
                                  "column": 27,
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
                                229,
                                230
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 12
                                },
                                "start": {
                                  "column": 27,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              229,
                              230
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 12
                              },
                              "start": {
                                "column": 27,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "range": [
                          211,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
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
                              235,
                              239
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 12
                              },
                              "start": {
                                "column": 33,
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
                              240,
                              250
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 12
                              },
                              "start": {
                                "column": 38,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            235,
                            250
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 12
                            },
                            "start": {
                              "column": 33,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          235,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 12
                          },
                          "start": {
                            "column": 33,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        211,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
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
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
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
                              "type": "ThisExpression",
                              "range": [
                                265,
                                269
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
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
                                270,
                                276
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 13
                                },
                                "start": {
                                  "column": 15,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              265,
                              276
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
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
                              278,
                              279
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 13
                              },
                              "start": {
                                "column": 23,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "optional": false,
                        "range": [
                          264,
                          280
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
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
                              283,
                              287
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 13
                              },
                              "start": {
                                "column": 28,
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
                              288,
                              297
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 13
                              },
                              "start": {
                                "column": 33,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            283,
                            297
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 13
                            },
                            "start": {
                              "column": 28,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          283,
                          299
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 13
                          },
                          "start": {
                            "column": 28,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        264,
                        299
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 13
                        },
                        "start": {
                          "column": 9,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      263,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
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
                                313,
                                314
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
                                "type": "ThisExpression",
                                "range": [
                                  316,
                                  320
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
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
                                  321,
                                  327
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                316,
                                327
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 14
                                },
                                "start": {
                                  "column": 14,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              313,
                              327
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
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
                                329,
                                330
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 14
                                },
                                "start": {
                                  "column": 27,
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
                                    "type": "ThisExpression",
                                    "range": [
                                      333,
                                      337
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "field",
                                    "range": [
                                      338,
                                      344
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "range": [
                                    333,
                                    344
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 14
                                    }
                                  }
                                }
                              ],
                              "optional": false,
                              "range": [
                                332,
                                345
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 14
                                },
                                "start": {
                                  "column": 30,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              329,
                              345
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 14
                              },
                              "start": {
                                "column": 27,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          311,
                          347
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
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
                                352,
                                353
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
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                355,
                                356
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 14
                                },
                                "start": {
                                  "column": 53,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              352,
                              356
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 14
                              },
                              "start": {
                                "column": 50,
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
                                358,
                                359
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 14
                                },
                                "start": {
                                  "column": 56,
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
                                    362,
                                    363
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 61,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 60,
                                      "line": 14
                                    }
                                  }
                                }
                              ],
                              "range": [
                                361,
                                364
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 14
                                },
                                "start": {
                                  "column": 59,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              358,
                              364
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 14
                              },
                              "start": {
                                "column": 56,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          350,
                          366
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 14
                          },
                          "start": {
                            "column": 48,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        311,
                        366
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 14
                        },
                        "start": {
                          "column": 9,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      310,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
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
                              "type": "ThisExpression",
                              "range": [
                                378,
                                382
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
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
                                383,
                                389
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 15
                                },
                                "start": {
                                  "column": 14,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              378,
                              389
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
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
                                  "type": "ThisExpression",
                                  "range": [
                                    392,
                                    396
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 15
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "field",
                                  "range": [
                                    397,
                                    403
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 15
                                    }
                                  }
                                },
                                "range": [
                                  392,
                                  403
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "optional": false,
                            "range": [
                              391,
                              404
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 15
                              },
                              "start": {
                                "column": 22,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "optional": false,
                        "range": [
                          377,
                          405
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
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
                              409,
                              410
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 15
                              },
                              "start": {
                                "column": 40,
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
                                  413,
                                  414
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "range": [
                              412,
                              415
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 15
                              },
                              "start": {
                                "column": 43,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "range": [
                          408,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 15
                          },
                          "start": {
                            "column": 39,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        377,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      377,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
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
                                429,
                                430
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
                                  "type": "ThisExpression",
                                  "range": [
                                    432,
                                    436
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
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
                                    437,
                                    443
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  432,
                                  443
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
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
                                  446,
                                  447
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
                              "range": [
                                432,
                                447
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 16
                                },
                                "start": {
                                  "column": 14,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              429,
                              447
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
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
                                449,
                                450
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 16
                                },
                                "start": {
                                  "column": 31,
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
                                      "type": "ThisExpression",
                                      "range": [
                                        453,
                                        457
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 39,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "field",
                                      "range": [
                                        458,
                                        464
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 46,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 40,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      453,
                                      464
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 35,
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
                                      467,
                                      468
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 50,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 49,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "range": [
                                    453,
                                    468
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 16
                                    }
                                  }
                                }
                              ],
                              "optional": false,
                              "range": [
                                452,
                                469
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 16
                                },
                                "start": {
                                  "column": 34,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              449,
                              469
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 16
                              },
                              "start": {
                                "column": 31,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          427,
                          471
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
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
                                476,
                                477
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 16
                                },
                                "start": {
                                  "column": 58,
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
                                479,
                                481
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 16
                                },
                                "start": {
                                  "column": 61,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              476,
                              481
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 16
                              },
                              "start": {
                                "column": 58,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          474,
                          483
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 16
                          },
                          "start": {
                            "column": 56,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        427,
                        483
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 16
                        },
                        "start": {
                          "column": 9,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      426,
                      485
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
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
                                "type": "ThisExpression",
                                "range": [
                                  495,
                                  499
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
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
                                  500,
                                  506
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                495,
                                506
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
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
                                509,
                                510
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 17
                                },
                                "start": {
                                  "column": 23,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              495,
                              510
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
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
                          494,
                          511
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
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
                          514,
                          516
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 17
                          },
                          "start": {
                            "column": 28,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        494,
                        516
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      494,
                      517
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
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
                                    527,
                                    531
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
                                  "name": "otherObject",
                                  "optional": false,
                                  "range": [
                                    532,
                                    543
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 18
                                    }
                                  }
                                },
                                "range": [
                                  527,
                                  543
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
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
                                  544,
                                  550
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                527,
                                550
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
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
                                553,
                                554
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 18
                                },
                                "start": {
                                  "column": 35,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              527,
                              554
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
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
                          526,
                          555
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
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
                          558,
                          560
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 18
                          },
                          "start": {
                            "column": 40,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        526,
                        560
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
                    },
                    "range": [
                      526,
                      561
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
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
                  567
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
              567
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
                579,
                583
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
                583,
                625
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
                                602,
                                604
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
                                605,
                                611
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
                              602,
                              611
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
                          601,
                          612
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
                              616,
                              617
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
                          615,
                          618
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
                        601,
                        618
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
                      601,
                      619
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
                  591,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 23,
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
                        "column": 21,
                        "line": 20
                      },
                      "start": {
                        "column": 18,
                        "line": 20
                      }
                    },
                    "range": [
                      586,
                      589
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          588,
                          589
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 20
                          },
                          "start": {
                            "column": 20,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        588,
                        589
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
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
                    584,
                    589
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
              572,
              625
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
        627
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
