__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    80
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"a\"",
        "value": "a",
        "range": [
          70,
          73
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 14,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            63,
            64
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              63,
              64
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 2
              },
              "start": {
                "column": 7,
                "line": 2
              }
            }
          },
          "loc": {
            "end": {
              "column": 8,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        56,
        74
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            75,
            76
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          75,
          78
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        75,
        79
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 2
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
    233
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              25,
              51
            ],
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  41,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                },
                "range": [
                  44,
                  50
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    46,
                    50
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 2
                    },
                    "start": {
                      "column": 25,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                32,
                51
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
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
                "column": 30,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              56,
              142
            ],
            "attributes": [],
            "declaration": {
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
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 4
                              },
                              "start": {
                                "column": 14,
                                "line": 4
                              }
                            },
                            "range": [
                              91,
                              101
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  100,
                                  101
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                93,
                                101
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 4
                                },
                                "start": {
                                  "column": 16,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            89,
                            101
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          89,
                          101
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
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
                    "kind": "var",
                    "range": [
                      85,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "attributes": [],
                    "declaration": null,
                    "exportKind": "value",
                    "source": null,
                    "specifiers": [
                      {
                        "type": "ExportSpecifier",
                        "exported": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "default",
                          "optional": false,
                          "range": [
                            126,
                            133
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 5
                            },
                            "start": {
                              "column": 23,
                              "line": 5
                            }
                          }
                        },
                        "exportKind": "value",
                        "local": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_a",
                          "optional": false,
                          "range": [
                            120,
                            122
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 5
                            },
                            "start": {
                              "column": 17,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          120,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 5
                          },
                          "start": {
                            "column": 17,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      111,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
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
                  75,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  73,
                  74
                ],
                "decorators": [],
                "name": "a",
                "optional": false,
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
              "kind": "namespace",
              "range": [
                63,
                142
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
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
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                162,
                163
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
            "exportKind": "value",
            "range": [
              147,
              164
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          19,
          166
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"b\"",
        "value": "b",
        "range": [
          15,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        166
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "raw": "\"b\"",
              "value": "b",
              "range": [
                211,
                214
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 11
                },
                "start": {
                  "column": 22,
                  "line": 11
                }
              }
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    202,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    202,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                },
                "range": [
                  202,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              193,
              215
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                229,
                230
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 12
                },
                "start": {
                  "column": 13,
                  "line": 12
                }
              }
            },
            "range": [
              220,
              231
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          187,
          233
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 19,
            "line": 10
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"a\"",
        "value": "a",
        "range": [
          183,
          186
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 10
          }
        }
      },
      "range": [
        168,
        233
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
