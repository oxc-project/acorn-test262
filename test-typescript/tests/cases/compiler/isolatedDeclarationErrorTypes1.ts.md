__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    262
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"foo\"",
        "value": "foo",
        "range": [
          84,
          89
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 3
          },
          "start": {
            "column": 27,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unresolved",
            "optional": false,
            "range": [
              66,
              76
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unresolved",
            "optional": false,
            "range": [
              66,
              76
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          },
          "range": [
            66,
            76
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 9,
              "line": 3
            }
          }
        }
      ],
      "range": [
        57,
        90
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        92,
        144
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "range": [
                105,
                109
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  141,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 5
                  },
                  "start": {
                    "column": 49,
                    "line": 5
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 5
                      },
                      "start": {
                        "column": 26,
                        "line": 5
                      }
                    },
                    "range": [
                      118,
                      130
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Unresolved",
                        "optional": false,
                        "range": [
                          120,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 5
                          },
                          "start": {
                            "column": 28,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        120,
                        130
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 5
                        },
                        "start": {
                          "column": 28,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    113,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 5
                    },
                    "start": {
                      "column": 21,
                      "line": 5
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 5
                  },
                  "start": {
                    "column": 39,
                    "line": 5
                  }
                },
                "range": [
                  131,
                  137
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    133,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 41,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                112,
                143
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "range": [
              105,
              143
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          99,
          144
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 52,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        145,
        209
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                158,
                162
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  206,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 6
                  },
                  "start": {
                    "column": 61,
                    "line": 6
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 6
                      },
                      "start": {
                        "column": 26,
                        "line": 6
                      }
                    },
                    "range": [
                      171,
                      195
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Unresolved",
                            "optional": false,
                            "range": [
                              173,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 6
                              },
                              "start": {
                                "column": 28,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            173,
                            183
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 6
                            },
                            "start": {
                              "column": 28,
                              "line": 6
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            186,
                            195
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 6
                            },
                            "start": {
                              "column": 41,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        173,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 6
                        },
                        "start": {
                          "column": 28,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    166,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 6
                  },
                  "start": {
                    "column": 51,
                    "line": 6
                  }
                },
                "range": [
                  196,
                  202
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    198,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 6
                    },
                    "start": {
                      "column": 53,
                      "line": 6
                    }
                  }
                }
              },
              "range": [
                165,
                208
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              }
            },
            "range": [
              158,
              208
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          152,
          209
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 64,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        210,
        261
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                223,
                227
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  258,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 7
                  },
                  "start": {
                    "column": 48,
                    "line": 7
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 7
                      },
                      "start": {
                        "column": 25,
                        "line": 7
                      }
                    },
                    "range": [
                      235,
                      247
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Unresolved",
                        "optional": false,
                        "range": [
                          237,
                          247
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 7
                          },
                          "start": {
                            "column": 27,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        237,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 7
                        },
                        "start": {
                          "column": 27,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    231,
                    247
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 7
                    },
                    "start": {
                      "column": 21,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 7
                  },
                  "start": {
                    "column": 38,
                    "line": 7
                  }
                },
                "range": [
                  248,
                  254
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    250,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 7
                    },
                    "start": {
                      "column": 40,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                230,
                260
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 7
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              }
            },
            "range": [
              223,
              260
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          217,
          261
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 51,
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
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
