__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    27
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        26
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
              "name": "field1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                },
                "range": [
                  17,
                  25
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    19,
                    25
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 1
                    },
                    "start": {
                      "column": 19,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                11,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": null,
            "range": [
              11,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          7,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
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
          "column": 26,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 2
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
    238
  ],
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                50
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "range": [
                        27,
                        30
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 2
                        },
                        "start": {
                          "column": 4,
                          "line": 2
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 2
                            },
                            "start": {
                              "column": 12,
                              "line": 2
                            }
                          },
                          "range": [
                            35,
                            40
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              37,
                              40
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
                          }
                        },
                        "range": [
                          31,
                          40
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 2
                          },
                          "start": {
                            "column": 8,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      },
                      "range": [
                        41,
                        47
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          43,
                          47
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 2
                          },
                          "start": {
                            "column": 20,
                            "line": 2
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      27,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 4,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  21,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              50
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            50
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        51
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        52,
        238
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            71,
            238
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  77,
                  88
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  88,
                  120
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    113,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 40,
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
                    "type": "TSParameterProperty",
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "field1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 5
                          },
                          "start": {
                            "column": 30,
                            "line": 5
                          }
                        },
                        "range": [
                          103,
                          111
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            105,
                            111
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 5
                            },
                            "start": {
                              "column": 32,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        97,
                        111
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 5
                        },
                        "start": {
                          "column": 24,
                          "line": 5
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "range": [
                      89,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 5
                      },
                      "start": {
                        "column": 16,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              },
              "range": [
                77,
                120
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "messageHandler",
                "optional": false,
                "range": [
                  125,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ArrowFunctionExpression",
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "field1",
                            "optional": false,
                            "range": [
                              170,
                              176
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 8
                              },
                              "start": {
                                "column": 20,
                                "line": 8
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
                              158,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 8
                              },
                              "start": {
                                "column": 8,
                                "line": 8
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
                              166,
                              169
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 8
                              },
                              "start": {
                                "column": 16,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            158,
                            169
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          158,
                          177
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        158,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    148,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 9
                    },
                    "start": {
                      "column": 27,
                      "line": 7
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  142,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              "range": [
                125,
                236
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 7
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
              "column": 19,
              "line": 4
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test1",
          "optional": false,
          "range": [
            65,
            70
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          59,
          238
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
