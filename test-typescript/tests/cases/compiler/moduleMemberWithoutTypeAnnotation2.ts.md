__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    367
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
              24,
              364
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
                      69,
                      156
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "body": {
                        "type": "TSInterfaceBody",
                        "range": [
                          104,
                          156
                        ],
                        "body": [
                          {
                            "type": "TSMethodSignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Alert",
                              "optional": false,
                              "range": [
                                118,
                                123
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 5
                                },
                                "start": {
                                  "column": 12,
                                  "line": 5
                                }
                              }
                            },
                            "kind": "method",
                            "optional": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "output",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 5
                                    }
                                  },
                                  "range": [
                                    130,
                                    138
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      132,
                                      138
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 5
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  124,
                                  138
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 5
                                  }
                                }
                              }
                            ],
                            "readonly": false,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 5
                                },
                                "start": {
                                  "column": 33,
                                  "line": 5
                                }
                              },
                              "range": [
                                139,
                                145
                              ],
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "range": [
                                  141,
                                  145
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 5
                                  }
                                }
                              }
                            },
                            "static": false,
                            "range": [
                              118,
                              146
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 5
                              },
                              "start": {
                                "column": 12,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 6
                          },
                          "start": {
                            "column": 43,
                            "line": 4
                          }
                        }
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IDiagnosticWriter",
                        "optional": false,
                        "range": [
                          86,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 4
                          },
                          "start": {
                            "column": 25,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        76,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "range": [
                      166,
                      201
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
                            "name": "diagnosticWriter",
                            "optional": false,
                            "range": [
                              177,
                              193
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 8
                              },
                              "start": {
                                "column": 19,
                                "line": 8
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "raw": "null",
                            "value": null,
                            "range": [
                              196,
                              200
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 8
                              },
                              "start": {
                                "column": 38,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            177,
                            200
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 8
                            },
                            "start": {
                              "column": 19,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        173,
                        201
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "range": [
                      211,
                      358
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "output",
                                        "optional": false,
                                        "range": [
                                          326,
                                          332
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 45,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 39,
                                            "line": 12
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
                                        "name": "diagnosticWriter",
                                        "optional": false,
                                        "range": [
                                          303,
                                          319
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Alert",
                                        "optional": false,
                                        "range": [
                                          320,
                                          325
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 33,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "range": [
                                        303,
                                        325
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 12
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      303,
                                      333
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    303,
                                    334
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 12
                                    }
                                  }
                                }
                              ],
                              "range": [
                                285,
                                348
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 13
                                },
                                "start": {
                                  "column": 34,
                                  "line": 11
                                }
                              }
                            },
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "diagnosticWriter",
                              "optional": false,
                              "range": [
                                267,
                                283
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 11
                                },
                                "start": {
                                  "column": 16,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              263,
                              348
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 13
                              },
                              "start": {
                                "column": 12,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "range": [
                          249,
                          358
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 14
                          },
                          "start": {
                            "column": 46,
                            "line": 10
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Alert",
                        "optional": false,
                        "range": [
                          227,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 10
                          },
                          "start": {
                            "column": 24,
                            "line": 10
                          }
                        }
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 10
                              },
                              "start": {
                                "column": 36,
                                "line": 10
                              }
                            },
                            "range": [
                              239,
                              247
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                241,
                                247
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 10
                                },
                                "start": {
                                  "column": 38,
                                  "line": 10
                                }
                              }
                            }
                          },
                          "range": [
                            233,
                            247
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 10
                            },
                            "start": {
                              "column": 30,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        218,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  58,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 38,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  38,
                  57
                ],
                "decorators": [],
                "name": "CompilerDiagnostics",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 37,
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
                31,
                364
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
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
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          18,
          366
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 18,
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
          17
        ],
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "loc": {
          "end": {
            "column": 17,
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
        366
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
      "column": 0,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
