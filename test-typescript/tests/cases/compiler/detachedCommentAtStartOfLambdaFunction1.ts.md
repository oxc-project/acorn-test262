__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    298
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          15,
          298
        ],
        "body": [
          {
            "type": "PropertyDefinition",
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
                21,
                25
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                25,
                33
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  27,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              21,
              34
            ],
            "loc": {
              "end": {
                "column": 17,
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
              "name": "foo",
              "optional": false,
              "range": [
                39,
                42
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
                42,
                296
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                            270,
                            277
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
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
                              280,
                              284
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 8
                              },
                              "start": {
                                "column": 22,
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
                              285,
                              289
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 8
                              },
                              "start": {
                                "column": 27,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            280,
                            289
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 8
                            },
                            "start": {
                              "column": 22,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          270,
                          289
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              95,
                              96
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 4
                              },
                              "start": {
                                "column": 19,
                                "line": 4
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 4
                              },
                              "start": {
                                "column": 20,
                                "line": 4
                              }
                            },
                            "range": [
                              96,
                              106
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSStringKeyword",
                                "range": [
                                  98,
                                  104
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                98,
                                106
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 4
                                },
                                "start": {
                                  "column": 22,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            92,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 4
                            },
                            "start": {
                              "column": 16,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        91,
                        289
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      84,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  74,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 39,
                    "line": 3
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
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    },
                    "range": [
                      50,
                      58
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        52,
                        58
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
                  "range": [
                    43,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                },
                "range": [
                  59,
                  73
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 3
                      },
                      "start": {
                        "column": 29,
                        "line": 3
                      }
                    },
                    "range": [
                      64,
                      73
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        67,
                        73
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 3
                        },
                        "start": {
                          "column": 32,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    61,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              }
            },
            "range": [
              39,
              296
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
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
            "line": 10
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
        298
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
