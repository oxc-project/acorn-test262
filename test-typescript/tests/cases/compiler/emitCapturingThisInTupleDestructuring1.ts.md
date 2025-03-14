__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    206
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrapper",
        "optional": false,
        "range": [
          18,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 18,
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
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            },
            "range": [
              27,
              32
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                29,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            }
          },
          "range": [
            26,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          }
        }
      ],
      "range": [
        1,
        34
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 1
        },
        "start": {
          "column": 1,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
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
                            "type": "ThisExpression",
                            "range": [
                              68,
                              72
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 3
                              },
                              "start": {
                                "column": 5,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "range": [
                              73,
                              77
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 3
                              },
                              "start": {
                                "column": 10,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            68,
                            77
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 3
                            },
                            "start": {
                              "column": 5,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              79,
                              83
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
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test1",
                            "optional": false,
                            "range": [
                              84,
                              89
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 3
                              },
                              "start": {
                                "column": 21,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            79,
                            89
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 3
                            },
                            "start": {
                              "column": 16,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              91,
                              95
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 3
                              },
                              "start": {
                                "column": 28,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test2",
                            "optional": false,
                            "range": [
                              96,
                              101
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 3
                              },
                              "start": {
                                "column": 33,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            91,
                            101
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 3
                            },
                            "start": {
                              "column": 28,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        67,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 3
                        },
                        "start": {
                          "column": 4,
                          "line": 3
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "range": [
                        105,
                        110
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 3
                        },
                        "start": {
                          "column": 42,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      67,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    67,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                61,
                204
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 4
                },
                "start": {
                  "column": 26,
                  "line": 2
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  },
                  "range": [
                    49,
                    56
                  ],
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          52,
                          55
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 2
                          },
                          "start": {
                            "column": 17,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      51,
                      56
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 16,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  44,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              43,
              204
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapper",
          "optional": false,
          "range": [
            35,
            42
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          35,
          205
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        35,
        206
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 3,
      "line": 4
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
