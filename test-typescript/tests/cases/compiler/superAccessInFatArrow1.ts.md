__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    254
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
              18,
              66
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  33,
                  66
                ],
                "body": [
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
                        43,
                        46
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
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
                        46,
                        60
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          49,
                          60
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 4
                          },
                          "start": {
                            "column": 14,
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
                          "column": 9,
                          "line": 4
                        },
                        "start": {
                          "column": 11,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      43,
                      60
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 19,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  31,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                25,
                66
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
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
                "line": 5
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
              71,
              252
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  96,
                  252
                ],
                "body": [
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
                        106,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
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
                        109,
                        144
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          133,
                          144
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 8
                          },
                          "start": {
                            "column": 35,
                            "line": 7
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
                          "name": "callback",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 7
                              },
                              "start": {
                                "column": 20,
                                "line": 7
                              }
                            },
                            "range": [
                              118,
                              130
                            ],
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 7
                                  }
                                },
                                "range": [
                                  123,
                                  130
                                ],
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "range": [
                                    126,
                                    130
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 7
                                    }
                                  }
                                }
                              },
                              "range": [
                                120,
                                130
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 7
                                },
                                "start": {
                                  "column": 22,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            110,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      106,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 7
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
                      "name": "runme",
                      "optional": false,
                      "range": [
                        153,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
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
                        158,
                        246
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "arguments": [],
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Super",
                                              "range": [
                                                208,
                                                213
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 21,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 16,
                                                  "line": 11
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "foo",
                                              "optional": false,
                                              "range": [
                                                214,
                                                217
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
                                            "range": [
                                              208,
                                              217
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 25,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 11
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            208,
                                            219
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 27,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 11
                                            }
                                          }
                                        },
                                        "range": [
                                          208,
                                          220
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 11
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      190,
                                      234
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    184,
                                    234
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 10
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    175,
                                    179
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 10
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
                                    180,
                                    183
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  175,
                                  183
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 10
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                175,
                                235
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 12
                                },
                                "start": {
                                  "column": 12,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              175,
                              236
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 10
                              }
                            }
                          }
                        ],
                        "range": [
                          161,
                          246
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 13
                          },
                          "start": {
                            "column": 16,
                            "line": 9
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
                          "column": 9,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      153,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 29,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
                  }
                }
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  94,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 27,
                    "line": 6
                  }
                }
              },
              "range": [
                78,
                252
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          12,
          254
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 12,
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
          11
        ],
        "decorators": [],
        "name": "test",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
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
        254
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
