__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    295
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                31,
                62
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
                    "name": "myProp",
                    "optional": false,
                    "range": [
                      41,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 3
                      },
                      "start": {
                        "column": 14,
                        "line": 3
                      }
                    },
                    "range": [
                      47,
                      55
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        49,
                        55
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 3
                        },
                        "start": {
                          "column": 16,
                          "line": 3
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    41,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mocked",
              "optional": false,
              "range": [
                24,
                30
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              18,
              62
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                81,
                290
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "willThrowError",
                    "optional": false,
                    "range": [
                      91,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
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
                      105,
                      284
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Mocked",
                              "optional": false,
                              "range": [
                                122,
                                128
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 8
                                },
                                "start": {
                                  "column": 12,
                                  "line": 8
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mocked",
                                "optional": false,
                                "range": [
                                  131,
                                  137
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 8
                                  }
                                }
                              },
                              "right": {
                                "type": "FunctionExpression",
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
                                              "name": "myProp",
                                              "optional": false,
                                              "range": [
                                                242,
                                                248
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 31,
                                                  "line": 9
                                                },
                                                "start": {
                                                  "column": 25,
                                                  "line": 9
                                                }
                                              }
                                            },
                                            "kind": "init",
                                            "method": false,
                                            "optional": false,
                                            "shorthand": false,
                                            "value": {
                                              "type": "Literal",
                                              "raw": "\"test\"",
                                              "value": "test",
                                              "range": [
                                                250,
                                                256
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 39,
                                                  "line": 9
                                                },
                                                "start": {
                                                  "column": 33,
                                                  "line": 9
                                                }
                                              }
                                            },
                                            "range": [
                                              242,
                                              256
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 39,
                                                "line": 9
                                              },
                                              "start": {
                                                "column": 25,
                                                "line": 9
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          240,
                                          258
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        233,
                                        259
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 9
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    153,
                                    273
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 8
                                    }
                                  }
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "range": [
                                  141,
                                  273
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                131,
                                273
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 10
                                },
                                "start": {
                                  "column": 21,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              122,
                              273
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 10
                              },
                              "start": {
                                "column": 12,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            122,
                            274
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        108,
                        284
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 11
                        },
                        "start": {
                          "column": 25,
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
                        "column": 9,
                        "line": 11
                      },
                      "start": {
                        "column": 22,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    91,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 17,
                  "line": 6
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tester",
              "optional": false,
              "range": [
                74,
                80
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              68,
              290
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          12,
          294
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          11
        ],
        "decorators": [],
        "name": "Test",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        294
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
