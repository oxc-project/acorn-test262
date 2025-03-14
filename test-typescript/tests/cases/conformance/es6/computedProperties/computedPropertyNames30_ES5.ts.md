__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    388
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          14
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
        14
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 2
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
          36,
          388
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                42,
                53
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                53,
                386
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          66,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        66,
                        73
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      66,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
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
                                  "name": "obj",
                                  "optional": false,
                                  "range": [
                                    107,
                                    110
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 7
                                    }
                                  }
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "computed": true,
                                      "key": {
                                        "type": "SequenceExpression",
                                        "expressions": [
                                          {
                                            "type": "CallExpression",
                                            "arguments": [],
                                            "callee": {
                                              "type": "Super",
                                              "range": [
                                                332,
                                                337
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 23,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 18,
                                                  "line": 11
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "range": [
                                              332,
                                              339
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 25,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 18,
                                                "line": 11
                                              }
                                            }
                                          },
                                          {
                                            "type": "Literal",
                                            "raw": "\"prop\"",
                                            "value": "prop",
                                            "range": [
                                              341,
                                              347
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 33,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 27,
                                                "line": 11
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          332,
                                          347
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 18,
                                            "line": 11
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
                                          349,
                                          355
                                        ],
                                        "async": false,
                                        "body": {
                                          "type": "BlockStatement",
                                          "body": [],
                                          "range": [
                                            352,
                                            355
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 41,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 38,
                                              "line": 11
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
                                            "column": 41,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "range": [
                                        330,
                                        355
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 11
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    113,
                                    369
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  107,
                                  369
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              103,
                              370
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          89,
                          380
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 13
                          },
                          "start": {
                            "column": 14,
                            "line": 6
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        83,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      83,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  56,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
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
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              42,
              386
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 21,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          21,
          22
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          31,
          35
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "range": [
        15,
        388
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
