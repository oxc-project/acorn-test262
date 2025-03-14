__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    20,
    70
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        20,
        69
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            35,
            69
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "print",
                "optional": false,
                "range": [
                  41,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
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
                  67
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "\"I am B\"",
                        "value": "I am B",
                        "range": [
                          58,
                          66
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 3
                          },
                          "start": {
                            "column": 21,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        51,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 3
                        },
                        "start": {
                          "column": 14,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    49,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
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
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
                  }
                }
              },
              "range": [
                41,
                67
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 15,
              "line": 2
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
            33,
            34
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 2
            },
            "start": {
              "column": 13,
              "line": 2
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          27,
          69
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
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
    134
  ],
  "body": [
    {
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
                  "type": "ArrowFunctionExpression",
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
                              "name": "b",
                              "optional": false,
                              "range": [
                                66,
                                67
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 3
                                },
                                "start": {
                                  "column": 12,
                                  "line": 3
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
                                  "name": "value",
                                  "optional": false,
                                  "range": [
                                    74,
                                    79
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 3
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
                                    80,
                                    81
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 3
                                    }
                                  }
                                },
                                "range": [
                                  74,
                                  81
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
                              "range": [
                                70,
                                83
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 3
                                },
                                "start": {
                                  "column": 16,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              66,
                              83
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
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
                        "kind": "let",
                        "range": [
                          62,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                93,
                                94
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 4
                                },
                                "start": {
                                  "column": 8,
                                  "line": 4
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "print",
                              "optional": false,
                              "range": [
                                95,
                                100
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 4
                                },
                                "start": {
                                  "column": 10,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              93,
                              100
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 4
                              },
                              "start": {
                                "column": 8,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            93,
                            102
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          93,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      52,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 5
                      },
                      "start": {
                        "column": 20,
                        "line": 2
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        43,
                        48
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 2
                        },
                        "start": {
                          "column": 11,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    43,
                    109
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
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    36,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 2
                    },
                    "start": {
                      "column": 4,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "range": [
                    38,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  }
                },
                "range": [
                  36,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "range": [
                36,
                110
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              36,
              110
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          30,
          112
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 30,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            },
            "range": [
              14,
              28
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  23,
                  28
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      24,
                      27
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 1
                      },
                      "start": {
                        "column": 24,
                        "line": 1
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  16,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 16,
                    "line": 1
                  }
                }
              },
              "range": [
                16,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            }
          },
          "range": [
            13,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        112
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ImportExpression",
            "options": null,
            "source": {
              "type": "Literal",
              "raw": "\"./0\"",
              "value": "./0",
              "range": [
                125,
                130
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              118,
              131
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            114,
            117
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          114,
          132
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        114,
        133
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
