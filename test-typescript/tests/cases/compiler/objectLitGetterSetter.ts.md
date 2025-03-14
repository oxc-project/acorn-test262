__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    12,
    299
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
            "name": "obj",
            "optional": false,
            "range": [
              16,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              22,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            }
          },
          "range": [
            16,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        12,
        25
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 1
        },
        "start": {
          "column": 12,
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
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "range": [
              60,
              63
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 2
              },
              "start": {
                "column": 34,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"accProperty\"",
            "value": "accProperty",
            "range": [
              65,
              78
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 2
              },
              "start": {
                "column": 39,
                "line": 2
              }
            }
          },
          {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "range": [
                      119,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 3
                      },
                      "start": {
                        "column": 16,
                        "line": 3
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
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "\"public = 1;\"",
                                "value": "public = 1;",
                                "range": [
                                  163,
                                  176
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "eval",
                              "optional": false,
                              "range": [
                                158,
                                162
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 4
                                },
                                "start": {
                                  "column": 20,
                                  "line": 4
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              158,
                              177
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 4
                              },
                              "start": {
                                "column": 20,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            158,
                            178
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 4
                            },
                            "start": {
                              "column": 20,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "11",
                            "value": 11,
                            "range": [
                              206,
                              208
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 5
                              },
                              "start": {
                                "column": 27,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            199,
                            209
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 5
                            },
                            "start": {
                              "column": 20,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        136,
                        227
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 6
                        },
                        "start": {
                          "column": 33,
                          "line": 3
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      124,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 21,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    119,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
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
                    "name": "set",
                    "optional": false,
                    "range": [
                      245,
                      248
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
                        263,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 8
                        },
                        "start": {
                          "column": 34,
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          260,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 7
                          },
                          "start": {
                            "column": 31,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      250,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 8
                      },
                      "start": {
                        "column": 21,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    245,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                101,
                296
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 75,
                  "line": 2
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyDescriptor",
                "optional": false,
                "range": [
                  81,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 2
                  },
                  "start": {
                    "column": 55,
                    "line": 2
                  }
                }
              },
              "range": [
                81,
                99
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 2
                },
                "start": {
                  "column": 55,
                  "line": 2
                }
              }
            },
            "range": [
              80,
              297
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 54,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "range": [
              38,
              44
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "range": [
              45,
              59
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          },
          "range": [
            38,
            59
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 2
            },
            "start": {
              "column": 12,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          38,
          298
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 9
          },
          "start": {
            "column": 12,
            "line": 2
          }
        }
      },
      "range": [
        38,
        298
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 9
        },
        "start": {
          "column": 12,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 12,
      "line": 1
    }
  },
  "hashbang": null
}
```
