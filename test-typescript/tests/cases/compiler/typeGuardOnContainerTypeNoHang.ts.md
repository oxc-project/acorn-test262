__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    155
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        155
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                34,
                152
              ],
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              127,
                              132
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 3
                              },
                              "start": {
                                "column": 22,
                                "line": 3
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            120,
                            133
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 3
                            },
                            "start": {
                              "column": 15,
                              "line": 3
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "'object'",
                          "value": "object",
                          "range": [
                            138,
                            146
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 3
                            },
                            "start": {
                              "column": 33,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          120,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 3
                          },
                          "start": {
                            "column": 15,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        113,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    103,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 4
                    },
                    "start": {
                      "column": 73,
                      "line": 2
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsObject",
                  "optional": false,
                  "range": [
                    50,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
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
                          "column": 39,
                          "line": 2
                        },
                        "start": {
                          "column": 34,
                          "line": 2
                        }
                      },
                      "range": [
                        64,
                        69
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          66,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 2
                          },
                          "start": {
                            "column": 36,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      59,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 2
                      },
                      "start": {
                        "column": 29,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 2
                    },
                    "start": {
                      "column": 41,
                      "line": 2
                    }
                  },
                  "range": [
                    71,
                    102
                  ],
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "asserts": false,
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        73,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 2
                        },
                        "start": {
                          "column": 43,
                          "line": 2
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 2
                        },
                        "start": {
                          "column": 52,
                          "line": 2
                        }
                      },
                      "range": [
                        82,
                        102
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 66,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 59,
                                      "line": 2
                                    }
                                  },
                                  "range": [
                                    89,
                                    96
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      90,
                                      96
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 66,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 60,
                                        "line": 2
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  84,
                                  96
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 2
                                  }
                                }
                              }
                            ],
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 2
                                },
                                "start": {
                                  "column": 67,
                                  "line": 2
                                }
                              },
                              "range": [
                                97,
                                101
                              ],
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "range": [
                                  98,
                                  101
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 68,
                                    "line": 2
                                  }
                                }
                              }
                            },
                            "range": [
                              83,
                              101
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 2
                              },
                              "start": {
                                "column": 53,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "range": [
                          82,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 2
                          },
                          "start": {
                            "column": 52,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      73,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 2
                      },
                      "start": {
                        "column": 43,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  41,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            28,
            155
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 28,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            17,
            27
          ],
          "decorators": [],
          "name": "TypeGuards",
          "optional": false,
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "kind": "namespace",
        "range": [
          7,
          155
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
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
      "column": 1,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
