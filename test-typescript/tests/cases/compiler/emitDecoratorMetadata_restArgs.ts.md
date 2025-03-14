__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    340
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
            "name": "MyClassDecorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              },
              "range": [
                30,
                46
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassDecorator",
                  "optional": false,
                  "range": [
                    32,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 1
                    },
                    "start": {
                      "column": 32,
                      "line": 1
                    }
                  }
                },
                "range": [
                  32,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 1
                  },
                  "start": {
                    "column": 32,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              46
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            46
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "MyMethodDecorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 2
                },
                "start": {
                  "column": 31,
                  "line": 2
                }
              },
              "range": [
                79,
                96
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MethodDecorator",
                  "optional": false,
                  "range": [
                    81,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 2
                    },
                    "start": {
                      "column": 33,
                      "line": 2
                    }
                  }
                },
                "range": [
                  81,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 2
                  },
                  "start": {
                    "column": 33,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              62,
              96
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            62,
            96
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 2
            },
            "start": {
              "column": 14,
              "line": 2
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        48,
        97
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          125,
          202
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                131,
                142
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                142,
                154
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  152,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 6
                  },
                  "start": {
                    "column": 25,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      146,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 6
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    143,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              131,
              154
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyMethodDecorator",
                  "optional": false,
                  "range": [
                    160,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 7
                    },
                    "start": {
                      "column": 5,
                      "line": 7
                    }
                  }
                },
                "range": [
                  159,
                  177
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                182,
                188
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                188,
                200
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  198,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      192,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 14,
                        "line": 8
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    189,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            },
            "range": [
              159,
              200
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
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
            "line": 9
          },
          "start": {
            "column": 8,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClassDecorator",
            "optional": false,
            "range": [
              100,
              116
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 1,
                "line": 4
              }
            }
          },
          "range": [
            99,
            116
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          123,
          124
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        99,
        202
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          230,
          339
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                236,
                247
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                247,
                269
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  267,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 13
                  },
                  "start": {
                    "column": 35,
                    "line": 13
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      251,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 13
                      },
                      "start": {
                        "column": 23,
                        "line": 13
                      }
                    },
                    "range": [
                      255,
                      265
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          257,
                          263
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 13
                          },
                          "start": {
                            "column": 25,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        257,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 13
                        },
                        "start": {
                          "column": 25,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    248,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 13
                    },
                    "start": {
                      "column": 16,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "range": [
              236,
              269
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyMethodDecorator",
                  "optional": false,
                  "range": [
                    275,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 14
                    },
                    "start": {
                      "column": 5,
                      "line": 14
                    }
                  }
                },
                "range": [
                  274,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                297,
                303
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
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
                303,
                337
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  335,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 15
                  },
                  "start": {
                    "column": 42,
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
                      }
                    },
                    "range": [
                      308,
                      314
                    ],
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "range": [
                        310,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 15
                        },
                        "start": {
                          "column": 17,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    304,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      319,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 15
                      },
                      "start": {
                        "column": 26,
                        "line": 15
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 15
                      },
                      "start": {
                        "column": 30,
                        "line": 15
                      }
                    },
                    "range": [
                      323,
                      333
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          325,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 15
                          },
                          "start": {
                            "column": 32,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        325,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 15
                        },
                        "start": {
                          "column": 32,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    316,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 15
                    },
                    "start": {
                      "column": 23,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 15
                },
                "start": {
                  "column": 10,
                  "line": 15
                }
              }
            },
            "range": [
              274,
              337
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 8,
            "line": 12
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClassDecorator",
            "optional": false,
            "range": [
              205,
              221
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 11
              },
              "start": {
                "column": 1,
                "line": 11
              }
            }
          },
          "range": [
            204,
            221
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          228,
          229
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        204,
        339
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 11
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
