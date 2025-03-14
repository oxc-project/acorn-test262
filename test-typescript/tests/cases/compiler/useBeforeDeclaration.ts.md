__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    226
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
              19,
              171
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
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
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "raw": "\"Version: \"",
                            "value": "Version: ",
                            "range": [
                              69,
                              80
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 3
                              },
                              "start": {
                                "column": 12,
                                "line": 3
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "range": [
                                83,
                                86
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 3
                                },
                                "start": {
                                  "column": 26,
                                  "line": 3
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "version",
                              "optional": false,
                              "range": [
                                87,
                                94
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 3
                                },
                                "start": {
                                  "column": 30,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              83,
                              94
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 3
                              },
                              "start": {
                                "column": 26,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            69,
                            94
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "range": [
                          65,
                          68
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
                      "optional": false,
                      "range": [
                        65,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      65,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
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
                  55,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 40,
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
                "name": "printVersion",
                "optional": false,
                "range": [
                  35,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 32,
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
                    "column": 39,
                    "line": 2
                  },
                  "start": {
                    "column": 34,
                    "line": 2
                  }
                },
                "range": [
                  49,
                  54
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    50,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 2
                    },
                    "start": {
                      "column": 35,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                26,
                171
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
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              177,
              223
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  215,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 42,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "log",
                "optional": false,
                "range": [
                  193,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                }
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "info",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 6
                      },
                      "start": {
                        "column": 28,
                        "line": 6
                      }
                    },
                    "range": [
                      201,
                      208
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        202,
                        208
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 6
                        },
                        "start": {
                          "column": 29,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    197,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 6
                    },
                    "start": {
                      "column": 24,
                      "line": 6
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 6
                  },
                  "start": {
                    "column": 36,
                    "line": 6
                  }
                },
                "range": [
                  209,
                  214
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    210,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 6
                    },
                    "start": {
                      "column": 37,
                      "line": 6
                    }
                  }
                }
              },
              "range": [
                184,
                223
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
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
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          13,
          225
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          10,
          12
        ],
        "decorators": [],
        "name": "ts",
        "optional": false,
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "kind": "namespace",
      "range": [
        0,
        225
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    78
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
              20,
              73
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
                    "name": "sys",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 3
                        },
                        "start": {
                          "column": 18,
                          "line": 3
                        }
                      },
                      "range": [
                        34,
                        51
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "version",
                              "optional": false,
                              "range": [
                                36,
                                43
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 3
                                },
                                "start": {
                                  "column": 20,
                                  "line": 3
                                }
                              }
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 3
                                },
                                "start": {
                                  "column": 27,
                                  "line": 3
                                }
                              },
                              "range": [
                                43,
                                50
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  44,
                                  50
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 3
                                  }
                                }
                              }
                            },
                            "range": [
                              36,
                              50
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 3
                              },
                              "start": {
                                "column": 20,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "range": [
                          35,
                          51
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 3
                          },
                          "start": {
                            "column": 19,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      31,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "version",
                          "optional": false,
                          "range": [
                            55,
                            62
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 3
                            },
                            "start": {
                              "column": 39,
                              "line": 3
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "\"2.0.5\"",
                          "value": "2.0.5",
                          "range": [
                            64,
                            71
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 3
                            },
                            "start": {
                              "column": 48,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          55,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 3
                          },
                          "start": {
                            "column": 39,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      54,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 3
                      },
                      "start": {
                        "column": 38,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    31,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                27,
                73
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 3
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
                "column": 57,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          13,
          76
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          10,
          12
        ],
        "decorators": [],
        "name": "ts",
        "optional": false,
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "kind": "namespace",
      "range": [
        0,
        76
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
