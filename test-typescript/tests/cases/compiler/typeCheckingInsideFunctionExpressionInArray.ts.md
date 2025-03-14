__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    126
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
            "name": "functions",
            "optional": false,
            "range": [
              4,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "FunctionExpression",
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
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 2
                                },
                                "start": {
                                  "column": 7,
                                  "line": 2
                                }
                              },
                              "range": [
                                38,
                                46
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  40,
                                  46
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 9,
                                    "line": 2
                                  }
                                }
                              }
                            },
                            "range": [
                              37,
                              46
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 2
                              },
                              "start": {
                                "column": 6,
                                "line": 2
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "raw": "10",
                            "value": 10,
                            "range": [
                              49,
                              51
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 2
                              },
                              "start": {
                                "column": 18,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            37,
                            51
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 2
                            },
                            "start": {
                              "column": 6,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        33,
                        52
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 2
                        },
                        "start": {
                          "column": 2,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "range": [
                            57,
                            58
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 3
                            },
                            "start": {
                              "column": 4,
                              "line": 3
                            }
                          }
                        },
                        "right": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "range": [
                              65,
                              71
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 3
                              },
                              "start": {
                                "column": 12,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            61,
                            73
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 3
                            },
                            "start": {
                              "column": 8,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          57,
                          73
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 3
                          },
                          "start": {
                            "column": 4,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        57,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 3
                        },
                        "start": {
                          "column": 4,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  80,
                                  81
                                ],
                                "loc": {
                                  "end": {
                                    "column": 6,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 5,
                                    "line": 4
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  83,
                                  84
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 4
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "raw": "3",
                                "value": 3,
                                "range": [
                                  86,
                                  87
                                ],
                                "loc": {
                                  "end": {
                                    "column": 12,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "range": [
                              79,
                              88
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 4
                              },
                              "start": {
                                "column": 4,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NonexistantMethod",
                            "optional": false,
                            "range": [
                              89,
                              106
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 4
                              },
                              "start": {
                                "column": 14,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            79,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 4
                            },
                            "start": {
                              "column": 4,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          79,
                          108
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 4
                          },
                          "start": {
                            "column": 4,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        79,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 4
                        },
                        "start": {
                          "column": 4,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "derp",
                          "optional": false,
                          "range": [
                            114,
                            118
                          ],
                          "loc": {
                            "end": {
                              "column": 8,
                              "line": 5
                            },
                            "start": {
                              "column": 4,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          114,
                          120
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 5
                          },
                          "start": {
                            "column": 4,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        114,
                        121
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 5
                        },
                        "start": {
                          "column": 4,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    29,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 6
                    },
                    "start": {
                      "column": 29,
                      "line": 1
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  17,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              16,
              124
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "range": [
            4,
            124
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 6
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
        125
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 6
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
