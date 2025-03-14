__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    112
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          56,
          59
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 1
          },
          "start": {
            "column": 56,
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
        "name": "foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            },
            "range": [
              18,
              54
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 1
                        },
                        "start": {
                          "column": 23,
                          "line": 1
                        }
                      },
                      "range": [
                        23,
                        30
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          24,
                          30
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 1
                          },
                          "start": {
                            "column": 24,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      21,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 1
                      },
                      "start": {
                        "column": 21,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 1
                            },
                            "start": {
                              "column": 34,
                              "line": 1
                            }
                          },
                          "range": [
                            34,
                            41
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              35,
                              41
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 1
                              },
                              "start": {
                                "column": 35,
                                "line": 1
                              }
                            }
                          }
                        },
                        "range": [
                          33,
                          41
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 1
                          },
                          "start": {
                            "column": 33,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 1
                        },
                        "start": {
                          "column": 42,
                          "line": 1
                        }
                      },
                      "range": [
                        42,
                        49
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          43,
                          49
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 1
                          },
                          "start": {
                            "column": 43,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      32,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 1
                      },
                      "start": {
                        "column": 32,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  20,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
                  }
                }
              },
              "range": [
                20,
                54
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            }
          },
          "range": [
            13,
            54
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        59
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 1
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
        59,
        60
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 1
        },
        "start": {
          "column": 59,
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
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "FunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          84,
                          85
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 1
                          },
                          "start": {
                            "column": 84,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        77,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 1
                        },
                        "start": {
                          "column": 77,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    76,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 1
                    },
                    "start": {
                      "column": 76,
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
                  66,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 1
                  },
                  "start": {
                    "column": 66,
                    "line": 1
                  }
                }
              },
              {
                "type": "FunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "4",
                        "value": 4,
                        "range": [
                          107,
                          108
                        ],
                        "loc": {
                          "end": {
                            "column": 108,
                            "line": 1
                          },
                          "start": {
                            "column": 107,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        100,
                        108
                      ],
                      "loc": {
                        "end": {
                          "column": 108,
                          "line": 1
                        },
                        "start": {
                          "column": 100,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    99,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 109,
                      "line": 1
                    },
                    "start": {
                      "column": 99,
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
                  89,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 109,
                    "line": 1
                  },
                  "start": {
                    "column": 89,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              65,
              110
            ],
            "loc": {
              "end": {
                "column": 110,
                "line": 1
              },
              "start": {
                "column": 65,
                "line": 1
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            61,
            64
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 1
            },
            "start": {
              "column": 61,
              "line": 1
            }
          }
        },
        "optional": false,
        "range": [
          61,
          111
        ],
        "loc": {
          "end": {
            "column": 111,
            "line": 1
          },
          "start": {
            "column": 61,
            "line": 1
          }
        }
      },
      "range": [
        61,
        112
      ],
      "loc": {
        "end": {
          "column": 112,
          "line": 1
        },
        "start": {
          "column": 61,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 112,
      "line": 1
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
