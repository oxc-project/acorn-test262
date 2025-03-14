__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    132
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
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
                      50,
                      51
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
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      51,
                      67
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              63,
                              64
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 3
                              },
                              "start": {
                                "column": 19,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            56,
                            65
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        54,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 3
                        },
                        "start": {
                          "column": 10,
                          "line": 3
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
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    46,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 2,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                41,
                71
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "range": [
              34,
              71
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 4
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          }
        ],
        "range": [
          30,
          74
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 30,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makePoint",
        "optional": false,
        "range": [
          9,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            },
            "range": [
              20,
              28
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                22,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            }
          },
          "range": [
            19,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        74
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
      "type": "EmptyStatement",
      "range": [
        74,
        75
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
        },
        "start": {
          "column": 1,
          "line": 5
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
            "name": "x",
            "optional": false,
            "range": [
              81,
              82
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    95,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 18,
                      "line": 6
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "makePoint",
                "optional": false,
                "range": [
                  85,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                85,
                97
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                98,
                99
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 21,
                  "line": 6
                }
              }
            },
            "range": [
              85,
              99
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            81,
            99
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        77,
        100
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                106,
                114
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  108,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              105,
              114
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
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    127,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 7
                    },
                    "start": {
                      "column": 26,
                      "line": 7
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "makePoint",
                "optional": false,
                "range": [
                  117,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 7
                  },
                  "start": {
                    "column": 16,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                117,
                129
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                130,
                131
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            "range": [
              117,
              131
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 16,
                "line": 7
              }
            }
          },
          "range": [
            105,
            131
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        101,
        132
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 31,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
