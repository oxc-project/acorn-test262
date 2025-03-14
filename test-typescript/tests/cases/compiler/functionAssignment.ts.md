__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    553
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
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
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          9,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            },
            "range": [
              12,
              22
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  14,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 1
                  },
                  "start": {
                    "column": 14,
                    "line": 1
                  }
                }
              },
              "range": [
                14,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            }
          },
          "range": [
            11,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 11,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                42,
                45
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
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              30,
              45
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            28,
            29
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          28,
          46
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
      "range": [
        28,
        47
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          63,
          111
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "range": [
                69,
                72
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 5
                },
                "start": {
                  "column": 4,
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
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  },
                  "range": [
                    80,
                    101
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 5
                            },
                            "start": {
                              "column": 21,
                              "line": 5
                            }
                          },
                          "range": [
                            86,
                            94
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              88,
                              94
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 5
                              },
                              "start": {
                                "column": 23,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          83,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 5
                          },
                          "start": {
                            "column": 18,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 5
                        },
                        "start": {
                          "column": 30,
                          "line": 5
                        }
                      },
                      "range": [
                        95,
                        101
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          97,
                          101
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
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
                      82,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 5
                      },
                      "start": {
                        "column": 17,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  73,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
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
                  "column": 43,
                  "line": 5
                },
                "start": {
                  "column": 37,
                  "line": 5
                }
              },
              "range": [
                102,
                108
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  104,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 5
                  },
                  "start": {
                    "column": 39,
                    "line": 5
                  }
                }
              }
            },
            "static": false,
            "range": [
              69,
              109
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 14,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          59,
          62
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        49,
        111
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          127,
          167
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "range": [
                133,
                136
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
                    }
                  },
                  "range": [
                    145,
                    155
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "range": [
                        147,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 9
                        },
                        "start": {
                          "column": 18,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      147,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 18,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  137,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 9
                },
                "start": {
                  "column": 27,
                  "line": 9
                }
              },
              "range": [
                156,
                164
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  158,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 9
                  },
                  "start": {
                    "column": 29,
                    "line": 9
                  }
                }
              }
            },
            "static": false,
            "range": [
              133,
              165
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
            "column": 14,
            "line": 8
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "range": [
          123,
          126
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "range": [
        113,
        167
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "barbaz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 10,
                  "line": 12
                }
              },
              "range": [
                179,
                184
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "range": [
                    181,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  181,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 12,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              173,
              184
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
          },
          "init": null,
          "range": [
            173,
            184
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
      "declare": false,
      "kind": "var",
      "range": [
        169,
        185
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              },
              "range": [
                194,
                199
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    196,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 13
                    },
                    "start": {
                      "column": 10,
                      "line": 13
                    }
                  }
                },
                "range": [
                  196,
                  199
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              190,
              199
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            190,
            199
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        186,
        200
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "FunctionExpression",
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          238,
                          239
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "FunctionExpression",
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "range": [
                                265,
                                268
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 16
                                },
                                "start": {
                                  "column": 35,
                                  "line": 16
                                }
                              }
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "range": [
                              253,
                              268
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 16
                              },
                              "start": {
                                "column": 23,
                                "line": 16
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
                            "name": "barbaz",
                            "optional": false,
                            "range": [
                              242,
                              248
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 16
                              },
                              "start": {
                                "column": 12,
                                "line": 16
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "range": [
                              249,
                              252
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 16
                              },
                              "start": {
                                "column": 19,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            242,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 16
                            },
                            "start": {
                              "column": 12,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          242,
                          269
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 16
                          },
                          "start": {
                            "column": 12,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        238,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    234,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                228,
                272
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 17
                },
                "start": {
                  "column": 26,
                  "line": 15
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
                "name": "param",
                "optional": false,
                "range": [
                  221,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 15
                  },
                  "start": {
                    "column": 19,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              211,
              272
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 9,
                "line": 15
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
            "name": "test",
            "optional": false,
            "range": [
              202,
              206
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 15
              },
              "start": {
                "column": 0,
                "line": 15
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "get",
            "optional": false,
            "range": [
              207,
              210
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 5,
                "line": 15
              }
            }
          },
          "range": [
            202,
            210
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          202,
          273
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        202,
        274
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          303,
          306
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 19
          },
          "start": {
            "column": 27,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          285,
          287
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
              }
            },
            "range": [
              289,
              301
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 19
                  },
                  "start": {
                    "column": 18,
                    "line": 19
                  }
                },
                "range": [
                  294,
                  301
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    297,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 19
                    },
                    "start": {
                      "column": 21,
                      "line": 19
                    }
                  }
                }
              },
              "range": [
                291,
                301
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            }
          },
          "range": [
            288,
            301
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 19
            },
            "start": {
              "column": 12,
              "line": 19
            }
          }
        }
      ],
      "range": [
        276,
        306
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          326,
                          327
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 21
                          },
                          "start": {
                            "column": 8,
                            "line": 21
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          330,
                          332
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 21
                          },
                          "start": {
                            "column": 12,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        326,
                        332
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    322,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 21
                    },
                    "start": {
                      "column": 4,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        338,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 22
                        },
                        "start": {
                          "column": 4,
                          "line": 22
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        342,
                        343
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      338,
                      343
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 22
                      },
                      "start": {
                        "column": 4,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    338,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                316,
                346
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              310,
              346
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 3,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "range": [
            307,
            309
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          307,
          347
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        307,
        348
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          392,
          395
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 25
          },
          "start": {
            "column": 42,
            "line": 25
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          359,
          361
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 25
              },
              "start": {
                "column": 13,
                "line": 25
              }
            },
            "range": [
              363,
              390
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      367,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 25
                      },
                      "start": {
                        "column": 17,
                        "line": 25
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
                        "column": 26,
                        "line": 25
                      },
                      "start": {
                        "column": 18,
                        "line": 25
                      }
                    },
                    "range": [
                      368,
                      376
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        370,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 25
                        },
                        "start": {
                          "column": 20,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    367,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 25
                    },
                    "start": {
                      "column": 17,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      378,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 25
                      },
                      "start": {
                        "column": 28,
                        "line": 25
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
                        "column": 37,
                        "line": 25
                      },
                      "start": {
                        "column": 29,
                        "line": 25
                      }
                    },
                    "range": [
                      379,
                      387
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        381,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 25
                        },
                        "start": {
                          "column": 31,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    378,
                    388
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 25
                    },
                    "start": {
                      "column": 28,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                365,
                390
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 25
                }
              }
            }
          },
          "range": [
            362,
            390
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 25
            },
            "start": {
              "column": 12,
              "line": 25
            }
          }
        }
      ],
      "range": [
        350,
        395
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    402,
                    403
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 27
                    },
                    "start": {
                      "column": 5,
                      "line": 27
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    405,
                    406
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "range": [
                  402,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 27
                  },
                  "start": {
                    "column": 5,
                    "line": 27
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    408,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 27
                    },
                    "start": {
                      "column": 11,
                      "line": 27
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    411,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 27
                    },
                    "start": {
                      "column": 14,
                      "line": 27
                    }
                  }
                },
                "range": [
                  408,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 27
                  },
                  "start": {
                    "column": 11,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              400,
              414
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 27
              },
              "start": {
                "column": 3,
                "line": 27
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "range": [
            397,
            399
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "range": [
          397,
          415
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        397,
        416
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callb",
        "optional": false,
        "range": [
          428,
          433
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 30
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 30
              },
              "start": {
                "column": 18,
                "line": 30
              }
            },
            "range": [
              437,
              457
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 30
                      },
                      "start": {
                        "column": 21,
                        "line": 30
                      }
                    },
                    "range": [
                      440,
                      448
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        442,
                        448
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 30
                        },
                        "start": {
                          "column": 23,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    439,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 30
                    },
                    "start": {
                      "column": 20,
                      "line": 30
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 30
                  },
                  "start": {
                    "column": 31,
                    "line": 30
                  }
                },
                "range": [
                  450,
                  457
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    453,
                    457
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 30
                    },
                    "start": {
                      "column": 34,
                      "line": 30
                    }
                  }
                }
              },
              "range": [
                438,
                457
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 30
                },
                "start": {
                  "column": 19,
                  "line": 30
                }
              }
            }
          },
          "range": [
            434,
            457
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 30
            },
            "start": {
              "column": 15,
              "line": 30
            }
          }
        }
      ],
      "range": [
        419,
        460
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callb",
        "optional": false,
        "range": [
          470,
          475
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 31
              },
              "start": {
                "column": 18,
                "line": 31
              }
            },
            "range": [
              479,
              497
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 31
                      },
                      "start": {
                        "column": 21,
                        "line": 31
                      }
                    },
                    "range": [
                      482,
                      490
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        484,
                        490
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 31
                        },
                        "start": {
                          "column": 23,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    481,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 31
                    },
                    "start": {
                      "column": 20,
                      "line": 31
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 31
                  },
                  "start": {
                    "column": 30,
                    "line": 31
                  }
                },
                "range": [
                  491,
                  497
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    493,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 31
                    },
                    "start": {
                      "column": 32,
                      "line": 31
                    }
                  }
                }
              },
              "range": [
                480,
                497
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 31
                },
                "start": {
                  "column": 19,
                  "line": 31
                }
              }
            }
          },
          "range": [
            476,
            497
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 31
            },
            "start": {
              "column": 15,
              "line": 31
            }
          }
        }
      ],
      "range": [
        461,
        499
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          518,
          521
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 32
          },
          "start": {
            "column": 18,
            "line": 32
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callb",
        "optional": false,
        "range": [
          509,
          514
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 32
          },
          "start": {
            "column": 9,
            "line": 32
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            515,
            516
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 32
            },
            "start": {
              "column": 15,
              "line": 32
            }
          }
        }
      ],
      "range": [
        500,
        521
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        537,
                        538
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 34
                        },
                        "start": {
                          "column": 14,
                          "line": 34
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "range": [
                        539,
                        545
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 34
                        },
                        "start": {
                          "column": 16,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      537,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 34
                      },
                      "start": {
                        "column": 14,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    537,
                    546
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 34
                    },
                    "start": {
                      "column": 14,
                      "line": 34
                    }
                  }
                }
              ],
              "range": [
                535,
                548
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 34
                },
                "start": {
                  "column": 12,
                  "line": 34
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
                "name": "a",
                "optional": false,
                "range": [
                  530,
                  531
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 34
                  },
                  "start": {
                    "column": 7,
                    "line": 34
                  }
                }
              }
            ],
            "range": [
              529,
              548
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callb",
          "optional": false,
          "range": [
            523,
            528
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "optional": false,
        "range": [
          523,
          549
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        523,
        550
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 37
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
