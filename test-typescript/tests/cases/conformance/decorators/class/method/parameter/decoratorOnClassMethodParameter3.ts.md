__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    222
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
        "name": "dec",
        "optional": false,
        "range": [
          73,
          76
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
      },
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
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            },
            "range": [
              78,
              83
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                80,
                83
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            }
          },
          "range": [
            77,
            83
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 2
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 2
          },
          "start": {
            "column": 28,
            "line": 2
          }
        },
        "range": [
          84,
          89
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            86,
            89
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 2
            },
            "start": {
              "column": 30,
              "line": 2
            }
          }
        }
      },
      "range": [
        56,
        90
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                148,
                204
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "range": [
                      160,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 5
                      },
                      "start": {
                        "column": 10,
                        "line": 5
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
                      166,
                      200
                    ],
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        198,
                        200
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 5
                        },
                        "start": {
                          "column": 48,
                          "line": 5
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
                        "decorators": [
                          {
                            "type": "Decorator",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      178,
                                      183
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    172,
                                    183
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "dec",
                                "optional": false,
                                "range": [
                                  168,
                                  171
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 5
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                168,
                                184
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 5
                                },
                                "start": {
                                  "column": 18,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              167,
                              184
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 5
                              },
                              "start": {
                                "column": 17,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 5
                            },
                            "start": {
                              "column": 38,
                              "line": 5
                            }
                          },
                          "range": [
                            188,
                            196
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              190,
                              196
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 5
                              },
                              "start": {
                                "column": 40,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          185,
                          196
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 5
                          },
                          "start": {
                            "column": 35,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 5
                      },
                      "start": {
                        "column": 16,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    154,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class",
              "optional": false,
              "range": [
                142,
                147
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              136,
              204
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class",
              "optional": false,
              "range": [
                214,
                219
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "range": [
              207,
              219
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          }
        ],
        "range": [
          132,
          221
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 41,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "range": [
          100,
          102
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            },
            "range": [
              108,
              125
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  117,
                  125
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      118,
                      124
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 3
                      },
                      "start": {
                        "column": 27,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  110,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "range": [
                110,
                125
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            }
          },
          "range": [
            103,
            125
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 3
          },
          "start": {
            "column": 35,
            "line": 3
          }
        },
        "range": [
          126,
          131
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            128,
            131
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 3
            },
            "start": {
              "column": 37,
              "line": 3
            }
          }
        }
      },
      "range": [
        91,
        221
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
