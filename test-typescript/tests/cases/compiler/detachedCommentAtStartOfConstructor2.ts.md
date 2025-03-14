__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    297
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          15,
          297
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "message",
              "optional": false,
              "range": [
                28,
                35
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              },
              "range": [
                35,
                43
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  37,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              21,
              44
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                56,
                60
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              },
              "range": [
                60,
                68
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  62,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              }
            },
            "value": null,
            "range": [
              49,
              69
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                74,
                85
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
                85,
                295
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
                          "name": "getMessage",
                          "optional": false,
                          "range": [
                            213,
                            223
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "message",
                              "optional": false,
                              "range": [
                                232,
                                239
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 8
                                },
                                "start": {
                                  "column": 31,
                                  "line": 8
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  242,
                                  246
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 8
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "range": [
                                  247,
                                  251
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                242,
                                251
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 8
                                },
                                "start": {
                                  "column": 41,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              232,
                              251
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 8
                              },
                              "start": {
                                "column": 31,
                                "line": 8
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            226,
                            251
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 8
                            },
                            "start": {
                              "column": 25,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          213,
                          251
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 8
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
                      209,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
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
                          "type": "ThisExpression",
                          "range": [
                            261,
                            265
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "range": [
                            266,
                            273
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 9
                            },
                            "start": {
                              "column": 13,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          261,
                          273
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getMessage",
                          "optional": false,
                          "range": [
                            276,
                            286
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 9
                            },
                            "start": {
                              "column": 23,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          276,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 9
                          },
                          "start": {
                            "column": 23,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        261,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      261,
                      289
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  103,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 33,
                    "line": 4
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
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 4
                      },
                      "start": {
                        "column": 23,
                        "line": 4
                      }
                    },
                    "range": [
                      93,
                      101
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        95,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 25,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    86,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              74,
              295
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
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
            "line": 11
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestFile",
        "optional": false,
        "range": [
          6,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
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
        297
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
      "column": 1,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
