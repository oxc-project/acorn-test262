__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    297
  ],
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
            "name": "v",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    23,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 3
                    },
                    "start": {
                      "column": 1,
                      "line": 3
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
                    29,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 3
                    },
                    "start": {
                      "column": 7,
                      "line": 3
                    }
                  }
                },
                "range": [
                  23,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 3
                  },
                  "start": {
                    "column": 1,
                    "line": 3
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "range": [
                    100,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 5
                    },
                    "start": {
                      "column": 1,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      118,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 2,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    106,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 6
                    },
                    "start": {
                      "column": 7,
                      "line": 5
                    }
                  }
                },
                "range": [
                  100,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 6
                  },
                  "start": {
                    "column": 1,
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
                  "name": "func1",
                  "optional": false,
                  "range": [
                    157,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 8
                    },
                    "start": {
                      "column": 1,
                      "line": 8
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    162,
                    168
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      165,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
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
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 6,
                      "line": 8
                    }
                  }
                },
                "range": [
                  157,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 8
                  },
                  "start": {
                    "column": 1,
                    "line": 8
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    185,
                    186
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    186,
                    213
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              200,
                              204
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 11
                              },
                              "start": {
                                "column": 9,
                                "line": 11
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "range": [
                              205,
                              209
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 11
                              },
                              "start": {
                                "column": 14,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            200,
                            209
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 11
                            },
                            "start": {
                              "column": 9,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          193,
                          210
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 11
                          },
                          "start": {
                            "column": 2,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      189,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 2,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
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
                      "column": 2,
                      "line": 12
                    },
                    "start": {
                      "column": 6,
                      "line": 10
                    }
                  }
                },
                "range": [
                  181,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 12
                  },
                  "start": {
                    "column": 1,
                    "line": 10
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    245,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 14
                    },
                    "start": {
                      "column": 5,
                      "line": 14
                    }
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    246,
                    279
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                258,
                                262
                              ],
                              "loc": {
                                "end": {
                                  "column": 6,
                                  "line": 15
                                },
                                "start": {
                                  "column": 2,
                                  "line": 15
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "range": [
                                263,
                                267
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 15
                                },
                                "start": {
                                  "column": 7,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              258,
                              267
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 15
                              },
                              "start": {
                                "column": 2,
                                "line": 15
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              270,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 15
                              },
                              "start": {
                                "column": 14,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            258,
                            275
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 15
                            },
                            "start": {
                              "column": 2,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          258,
                          276
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 15
                          },
                          "start": {
                            "column": 2,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      254,
                      279
                    ],
                    "loc": {
                      "end": {
                        "column": 2,
                        "line": 16
                      },
                      "start": {
                        "column": 14,
                        "line": 14
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        247,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 14
                        },
                        "start": {
                          "column": 7,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 16
                    },
                    "start": {
                      "column": 6,
                      "line": 14
                    }
                  }
                },
                "range": [
                  241,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 16
                  },
                  "start": {
                    "column": 1,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              8,
              295
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            295
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        296
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 17
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
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
