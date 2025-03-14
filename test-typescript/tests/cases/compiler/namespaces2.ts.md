__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    96
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              15,
              65
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
                      41,
                      59
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "range": [
                          56,
                          59
                        ],
                        "body": [],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 3
                          },
                          "start": {
                            "column": 23,
                            "line": 3
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
                          54,
                          55
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 3
                          },
                          "start": {
                            "column": 21,
                            "line": 3
                          }
                        }
                      },
                      "implements": [],
                      "superClass": null,
                      "range": [
                        48,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 26,
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
                  31,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  29,
                  30
                ],
                "decorators": [],
                "name": "B",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "kind": "module",
              "range": [
                22,
                65
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
          9,
          67
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          8
        ],
        "decorators": [],
        "name": "A",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        67
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                74,
                81
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        76,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 7
                        },
                        "start": {
                          "column": 7,
                          "line": 7
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        78,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 7
                        },
                        "start": {
                          "column": 9,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      76,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 7
                      },
                      "start": {
                        "column": 7,
                        "line": 7
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      80,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 7
                      },
                      "start": {
                        "column": 11,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    76,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                },
                "range": [
                  76,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              73,
              81
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    88,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 7
                    },
                    "start": {
                      "column": 19,
                      "line": 7
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    90,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 7
                    },
                    "start": {
                      "column": 21,
                      "line": 7
                    }
                  }
                },
                "range": [
                  88,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  92,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              },
              "range": [
                88,
                93
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            },
            "range": [
              84,
              95
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 7
              }
            }
          },
          "range": [
            73,
            95
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        69,
        96
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 7
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
      "column": 27,
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
