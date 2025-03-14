__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    520
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
              35,
              160
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  60,
                  160
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        101,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 39,
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
                        104,
                        142
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          107,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 4
                          },
                          "start": {
                            "column": 45,
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
                          "column": 33,
                          "line": 4
                        },
                        "start": {
                          "column": 42,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      94,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 32,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "UsefulClass",
                "optional": false,
                "range": [
                  48,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 2
                  },
                  "start": {
                    "column": 29,
                    "line": 2
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                42,
                160
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          }
        ],
        "range": [
          17,
          162
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 17,
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
          16
        ],
        "decorators": [],
        "name": "_provider",
        "optional": false,
        "loc": {
          "end": {
            "column": 16,
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
        162
      ],
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
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "provider",
              "optional": false,
              "range": [
                205,
                213
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 9
                },
                "start": {
                  "column": 23,
                  "line": 9
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "_provider",
              "optional": false,
              "range": [
                216,
                225
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 34,
                  "line": 9
                }
              }
            },
            "range": [
              198,
              226
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 9
              },
              "start": {
                "column": 16,
                "line": 9
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
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 11
                      },
                      "start": {
                        "column": 21,
                        "line": 11
                      }
                    },
                    "range": [
                      265,
                      286
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "provider",
                          "optional": false,
                          "range": [
                            266,
                            274
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 11
                            },
                            "start": {
                              "column": 22,
                              "line": 11
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UsefulClass",
                          "optional": false,
                          "range": [
                            275,
                            286
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 11
                            },
                            "start": {
                              "column": 31,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          266,
                          286
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 11
                          },
                          "start": {
                            "column": 22,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        266,
                        286
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 11
                        },
                        "start": {
                          "column": 22,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    264,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 11
                    },
                    "start": {
                      "column": 20,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    288,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 11
                    },
                    "start": {
                      "column": 44,
                      "line": 11
                    }
                  }
                },
                "range": [
                  264,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              260,
              293
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 14
                            },
                            "start": {
                              "column": 38,
                              "line": 14
                            }
                          },
                          "range": [
                            404,
                            425
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "provider",
                                "optional": false,
                                "range": [
                                  405,
                                  413
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 14
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UsefulClass",
                                "optional": false,
                                "range": [
                                  414,
                                  425
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                405,
                                425
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 14
                                },
                                "start": {
                                  "column": 39,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              405,
                              425
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 14
                              },
                              "start": {
                                "column": 39,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          402,
                          425
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 14
                          },
                          "start": {
                            "column": 36,
                            "line": 14
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "provider",
                            "optional": false,
                            "range": [
                              431,
                              439
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 14
                              },
                              "start": {
                                "column": 65,
                                "line": 14
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "UsefulClass",
                            "optional": false,
                            "range": [
                              440,
                              451
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 14
                              },
                              "start": {
                                "column": 74,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            431,
                            451
                          ],
                          "loc": {
                            "end": {
                              "column": 85,
                              "line": 14
                            },
                            "start": {
                              "column": 65,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          427,
                          453
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 14
                          },
                          "start": {
                            "column": 61,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        402,
                        453
                      ],
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 14
                        },
                        "start": {
                          "column": 36,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    398,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 14
                    },
                    "start": {
                      "column": 32,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "range": [
                      494,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 15
                      },
                      "start": {
                        "column": 39,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    487,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 15
                    },
                    "start": {
                      "column": 32,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                363,
                516
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 52,
                  "line": 13
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "range": [
                336,
                339
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 13
                },
                "start": {
                  "column": 25,
                  "line": 13
                }
              }
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 13
                },
                "start": {
                  "column": 30,
                  "line": 13
                }
              },
              "range": [
                341,
                362
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "provider",
                    "optional": false,
                    "range": [
                      342,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 13
                      },
                      "start": {
                        "column": 31,
                        "line": 13
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "UsefulClass",
                    "optional": false,
                    "range": [
                      351,
                      362
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 13
                      },
                      "start": {
                        "column": 40,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    342,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 13
                    },
                    "start": {
                      "column": 31,
                      "line": 13
                    }
                  }
                },
                "range": [
                  342,
                  362
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 13
                  },
                  "start": {
                    "column": 31,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              327,
              516
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 16
              },
              "start": {
                "column": 16,
                "line": 13
              }
            }
          }
        ],
        "range": [
          180,
          518
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 16,
            "line": 8
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          171,
          179
        ],
        "decorators": [],
        "name": "consumer",
        "optional": false,
        "loc": {
          "end": {
            "column": 15,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "kind": "module",
      "range": [
        164,
        518
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
