__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    90
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
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
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 3
                            },
                            "start": {
                              "column": 16,
                              "line": 3
                            }
                          },
                          "range": [
                            61,
                            69
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              63,
                              69
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 3
                              },
                              "start": {
                                "column": 18,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          57,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        57,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 3
                        },
                        "start": {
                          "column": 12,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    53,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
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
                43,
                76
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 26,
                  "line": 2
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                31,
                41
              ],
              "decorators": [],
              "name": "globalThis",
              "optional": false,
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "kind": "namespace",
            "range": [
              21,
              76
            ],
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
          15,
          78
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "range": [
          8,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "kind": "global",
      "range": [
        0,
        78
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
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        80,
        89
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    90
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./extention\"",
        "value": "./extention",
        "range": [
          7,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "specifiers": [],
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 1
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "range": [
              23,
              33
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tests",
            "optional": false,
            "range": [
              34,
              39
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          },
          "range": [
            23,
            39
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"a-b\"",
          "value": "a-b",
          "range": [
            42,
            47
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 19,
              "line": 3
            }
          }
        },
        "range": [
          23,
          47
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        23,
        48
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"-\"",
                "value": "-",
                "range": [
                  83,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 4
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "globalThis",
                  "optional": false,
                  "range": [
                    61,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
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
                    72,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                },
                "range": [
                  61,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "split",
                "optional": false,
                "range": [
                  77,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 4
                  },
                  "start": {
                    "column": 28,
                    "line": 4
                  }
                }
              },
              "range": [
                61,
                82
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "optional": false,
            "range": [
              61,
              87
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
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
              49,
              56
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 4
              },
              "start": {
                "column": 0,
                "line": 4
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
              57,
              60
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          },
          "range": [
            49,
            60
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "range": [
          49,
          88
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        49,
        89
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
