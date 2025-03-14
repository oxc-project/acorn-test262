__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    229
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          50
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                17,
                20
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                20,
                48
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        40,
                        41
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      33,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  23,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 2
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
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              }
            },
            "range": [
              17,
              48
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
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
        50
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
          72,
          229
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                78,
                81
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                81,
                227
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
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
                                    118,
                                    121
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 9
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
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "range": [
                                              143,
                                              148
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 22,
                                                "line": 10
                                              },
                                              "start": {
                                                "column": 17,
                                                "line": 10
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bar",
                                            "optional": false,
                                            "range": [
                                              149,
                                              152
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 26,
                                                "line": 10
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 10
                                              }
                                            }
                                          },
                                          "range": [
                                            143,
                                            152
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 26,
                                              "line": 10
                                            },
                                            "start": {
                                              "column": 17,
                                              "line": 10
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          143,
                                          154
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 10
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
                                          155,
                                          161
                                        ],
                                        "async": false,
                                        "body": {
                                          "type": "BlockStatement",
                                          "body": [],
                                          "range": [
                                            158,
                                            161
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 35,
                                              "line": 10
                                            },
                                            "start": {
                                              "column": 32,
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
                                            "column": 35,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 29,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "range": [
                                        142,
                                        161
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 10
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    124,
                                    192
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  118,
                                  192
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              114,
                              193
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 11
                              },
                              "start": {
                                "column": 12,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "range": [
                          100,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 12
                          },
                          "start": {
                            "column": 14,
                            "line": 8
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        94,
                        203
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      94,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        219,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      212,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  84,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
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
                  "line": 14
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              }
            },
            "range": [
              78,
              227
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 7
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
            "line": 6
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
          57,
          58
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
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
          67,
          71
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 6
          },
          "start": {
            "column": 16,
            "line": 6
          }
        }
      },
      "range": [
        51,
        229
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 6
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
