__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    141
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          124
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                18,
                22
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                22,
                36
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  34,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 14,
                        "line": 2
                      }
                    },
                    "range": [
                      24,
                      32
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        26,
                        32
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
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
                    23,
                    32
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 13,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              36
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
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
                41,
                44
              ],
              "loc": {
                "end": {
                  "column": 7,
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
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                44,
                122
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            61,
                            62
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "init": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                66,
                                70
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 4
                                },
                                "start": {
                                  "column": 17,
                                  "line": 4
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "foo",
                              "range": [
                                71,
                                75
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 4
                                },
                                "start": {
                                  "column": 22,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              66,
                              75
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 4
                              },
                              "start": {
                                "column": 17,
                                "line": 4
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "raw": "42",
                              "value": 42,
                              "range": [
                                78,
                                80
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 4
                                },
                                "start": {
                                  "column": 29,
                                  "line": 4
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                83,
                                84
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 4
                                },
                                "start": {
                                  "column": 34,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              78,
                              84
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 4
                              },
                              "start": {
                                "column": 29,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            66,
                            84
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          61,
                          85
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      57,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            107,
                            108
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 5
                            },
                            "start": {
                              "column": 20,
                              "line": 5
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            95,
                            102
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
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            103,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 5
                            },
                            "start": {
                              "column": 16,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          95,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
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
                        95,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      95,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  47,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
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
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              }
            },
            "range": [
              41,
              122
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
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
            "line": 7
          },
          "start": {
            "column": 8,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        124
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                130,
                131
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              126,
              133
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 9
              },
              "start": {
                "column": 0,
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
              134,
              137
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          },
          "range": [
            126,
            137
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          126,
          139
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        126,
        140
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
