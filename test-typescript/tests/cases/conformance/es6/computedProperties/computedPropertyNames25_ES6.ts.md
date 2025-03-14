__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    174
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
          174
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
                172
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
                          "name": "obj",
                          "optional": false,
                          "range": [
                            98,
                            101
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
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
                                      119,
                                      124
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 9
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
                                      125,
                                      128
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    119,
                                    128
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
                                "optional": false,
                                "range": [
                                  119,
                                  130
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 9
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
                                  131,
                                  137
                                ],
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [],
                                  "range": [
                                    134,
                                    137
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 9
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
                                    "column": 31,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                118,
                                137
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 9
                                },
                                "start": {
                                  "column": 12,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "range": [
                            104,
                            147
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 10
                            },
                            "start": {
                              "column": 18,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          98,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      94,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 10
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
                        164,
                        165
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      157,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
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
                  84,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
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
                  "line": 12
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              }
            },
            "range": [
              78,
              172
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
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
            "line": 13
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
        174
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
