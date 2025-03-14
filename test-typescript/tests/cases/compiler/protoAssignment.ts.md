__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    179
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          44,
          79
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "compareTo",
              "optional": false,
              "range": [
                51,
                60
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
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  },
                  "range": [
                    66,
                    74
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      68,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 3
                      },
                      "start": {
                        "column": 21,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  61,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              51,
              76
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
            "column": 44,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Comparable",
            "optional": false,
            "range": [
              25,
              35
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              35,
              43
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  36,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 36,
                    "line": 1
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 35,
                "line": 1
              }
            }
          },
          "range": [
            25,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Number",
        "optional": false,
        "range": [
          10,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        79
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Number",
              "optional": false,
              "range": [
                81,
                87
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 0,
                  "line": 7
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "range": [
                88,
                97
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              }
            },
            "range": [
              81,
              97
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "compareTo",
            "optional": false,
            "range": [
              98,
              107
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 17,
                "line": 7
              }
            }
          },
          "range": [
            81,
            107
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
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
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          148,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 9
                          },
                          "start": {
                            "column": 10,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "valueOf",
                        "optional": false,
                        "range": [
                          153,
                          160
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 9
                          },
                          "start": {
                            "column": 15,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        148,
                        160
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 9
                        },
                        "start": {
                          "column": 10,
                          "line": 9
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      148,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 9
                      },
                      "start": {
                        "column": 10,
                        "line": 9
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "range": [
                      166,
                      171
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 9
                      },
                      "start": {
                        "column": 28,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    148,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 9
                    },
                    "start": {
                      "column": 10,
                      "line": 9
                    }
                  }
                },
                "range": [
                  141,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 9
                  },
                  "start": {
                    "column": 3,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              135,
              175
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 54,
                "line": 7
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
              "name": "other",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 7
                  },
                  "start": {
                    "column": 44,
                    "line": 7
                  }
                },
                "range": [
                  125,
                  133
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    127,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 7
                    },
                    "start": {
                      "column": 46,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                120,
                133
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 7
                },
                "start": {
                  "column": 39,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            110,
            175
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 29,
              "line": 7
            }
          }
        },
        "range": [
          81,
          175
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        81,
        175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
