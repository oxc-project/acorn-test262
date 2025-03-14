__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    450
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          151
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "protec",
              "optional": false,
              "range": [
                24,
                30
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "'bar'",
              "value": "bar",
              "range": [
                33,
                38
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              39
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privat",
              "optional": false,
              "range": [
                50,
                56
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "''",
              "value": "",
              "range": [
                59,
                61
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "range": [
              42,
              62
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "copy",
              "optional": false,
              "range": [
                65,
                69
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                70,
                78
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  72,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              65,
              78
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                81,
                92
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 2,
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
                92,
                149
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
                          "type": "ThisExpression",
                          "range": [
                            115,
                            119
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 6
                            },
                            "start": {
                              "column": 18,
                              "line": 6
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
                          "name": "bindCopy",
                          "optional": false,
                          "range": [
                            101,
                            109
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 6
                            },
                            "start": {
                              "column": 4,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "range": [
                            110,
                            114
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
                        "range": [
                          101,
                          114
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 6
                          },
                          "start": {
                            "column": 4,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        101,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 6
                        },
                        "start": {
                          "column": 4,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      101,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "range": [
                            140,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 7
                            },
                            "start": {
                              "column": 19,
                              "line": 7
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
                          "name": "bindCopy2",
                          "optional": false,
                          "range": [
                            125,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 7
                            },
                            "start": {
                              "column": 4,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "range": [
                            135,
                            139
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 7
                            },
                            "start": {
                              "column": 14,
                              "line": 7
                            }
                          }
                        },
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
                      "range": [
                        125,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 7
                        },
                        "start": {
                          "column": 4,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      125,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
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
                  95,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 8
                  },
                  "start": {
                    "column": 16,
                    "line": 5
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
                  "column": 3,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "range": [
              81,
              149
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        151
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
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    186,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 12
                    },
                    "start": {
                      "column": 2,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "copy",
                  "optional": false,
                  "range": [
                    191,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 12
                    },
                    "start": {
                      "column": 7,
                      "line": 12
                    }
                  }
                },
                "range": [
                  186,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 12
                  },
                  "start": {
                    "column": 2,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    198,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 12
                    },
                    "start": {
                      "column": 14,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protec",
                  "optional": false,
                  "range": [
                    203,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 12
                    },
                    "start": {
                      "column": 19,
                      "line": 12
                    }
                  }
                },
                "range": [
                  198,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 12
                  },
                  "start": {
                    "column": 14,
                    "line": 12
                  }
                }
              },
              "range": [
                186,
                209
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
                }
              }
            },
            "range": [
              186,
              210
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "range": [
                      238,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 13
                      },
                      "start": {
                        "column": 14,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privat",
                    "optional": false,
                    "range": [
                      243,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    238,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 13
                    },
                    "start": {
                      "column": 14,
                      "line": 13
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
                    226,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 2,
                      "line": 13
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
                    234,
                    237
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
                  226,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 2,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "range": [
                226,
                250
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
                }
              }
            },
            "range": [
              226,
              251
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          }
        ],
        "range": [
          182,
          269
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 29,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bindCopy",
        "optional": false,
        "range": [
          162,
          170
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 22,
                "line": 11
              }
            },
            "range": [
              175,
              180
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  177,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              },
              "range": [
                177,
                180
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 11
                },
                "start": {
                  "column": 24,
                  "line": 11
                }
              }
            }
          },
          "range": [
            171,
            180
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 11
            },
            "start": {
              "column": 18,
              "line": 11
            }
          }
        }
      ],
      "range": [
        153,
        269
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BindingFunction",
        "optional": false,
        "range": [
          276,
          291
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 16
                },
                "start": {
                  "column": 28,
                  "line": 16
                }
              },
              "range": [
                299,
                304
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    301,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 16
                    },
                    "start": {
                      "column": 30,
                      "line": 16
                    }
                  }
                },
                "range": [
                  301,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 16
                  },
                  "start": {
                    "column": 30,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              295,
              304
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 16
              },
              "start": {
                "column": 24,
                "line": 16
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 42,
              "line": 16
            },
            "start": {
              "column": 35,
              "line": 16
            }
          },
          "range": [
            306,
            313
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              309,
              313
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 16
              },
              "start": {
                "column": 38,
                "line": 16
              }
            }
          }
        },
        "range": [
          294,
          313
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 16
          },
          "start": {
            "column": 23,
            "line": 16
          }
        }
      },
      "range": [
        271,
        314
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "bindCopy2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              },
              "range": [
                331,
                348
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BindingFunction",
                  "optional": false,
                  "range": [
                    333,
                    348
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 18
                    },
                    "start": {
                      "column": 17,
                      "line": 18
                    }
                  }
                },
                "range": [
                  333,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 18
                  },
                  "start": {
                    "column": 17,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              322,
              348
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          367,
                          371
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 19
                          },
                          "start": {
                            "column": 2,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "copy",
                        "optional": false,
                        "range": [
                          372,
                          376
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 19
                          },
                          "start": {
                            "column": 7,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        367,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 19
                        },
                        "start": {
                          "column": 2,
                          "line": 19
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          379,
                          383
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 19
                          },
                          "start": {
                            "column": 14,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protec",
                        "optional": false,
                        "range": [
                          384,
                          390
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 19
                          },
                          "start": {
                            "column": 19,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        379,
                        390
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 19
                        },
                        "start": {
                          "column": 14,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      367,
                      390
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 19
                      },
                      "start": {
                        "column": 2,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    367,
                    391
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 19
                    },
                    "start": {
                      "column": 2,
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            419,
                            423
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 20
                            },
                            "start": {
                              "column": 14,
                              "line": 20
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privat",
                          "optional": false,
                          "range": [
                            424,
                            430
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 20
                            },
                            "start": {
                              "column": 19,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          419,
                          430
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 20
                          },
                          "start": {
                            "column": 14,
                            "line": 20
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
                          407,
                          414
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 20
                          },
                          "start": {
                            "column": 2,
                            "line": 20
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
                          415,
                          418
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 20
                          },
                          "start": {
                            "column": 10,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        407,
                        418
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 20
                        },
                        "start": {
                          "column": 2,
                          "line": 20
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      407,
                      431
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 20
                      },
                      "start": {
                        "column": 2,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    407,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 20
                    },
                    "start": {
                      "column": 2,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                363,
                450
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 21
                },
                "start": {
                  "column": 47,
                  "line": 18
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              351,
              450
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 21
              },
              "start": {
                "column": 35,
                "line": 18
              }
            }
          },
          "range": [
            322,
            450
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        316,
        450
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
