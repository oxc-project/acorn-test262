__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    362
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          16,
          53
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "thunk",
              "optional": false,
              "range": [
                22,
                27
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 32,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                27,
                50
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 2
                        },
                        "start": {
                          "column": 15,
                          "line": 2
                        }
                      },
                      "range": [
                        33,
                        41
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          35,
                          41
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 2
                          },
                          "start": {
                            "column": 17,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      30,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 2
                      },
                      "start": {
                        "column": 12,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 2
                    },
                    "start": {
                      "column": 25,
                      "line": 2
                    }
                  },
                  "range": [
                    43,
                    50
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      46,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 2
                      },
                      "start": {
                        "column": 28,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  29,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              22,
              51
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "range": [
          10,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        53
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"str\"",
                  "value": "str",
                  "range": [
                    100,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
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
                  "name": "thing",
                  "optional": false,
                  "range": [
                    88,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunk",
                  "optional": false,
                  "range": [
                    94,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 5
                    },
                    "start": {
                      "column": 10,
                      "line": 5
                    }
                  }
                },
                "range": [
                  88,
                  99
                ],
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
              "optional": false,
              "range": [
                88,
                106
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              88,
              107
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          82,
          109
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 28,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          63,
          67
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            },
            "range": [
              73,
              80
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "range": [
                  75,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 21,
                    "line": 4
                  }
                }
              },
              "range": [
                75,
                80
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              }
            }
          },
          "range": [
            68,
            80
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        }
      ],
      "range": [
        54,
        109
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
                  "name": "thunk",
                  "optional": false,
                  "range": [
                    174,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 8
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
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
                        "column": 30,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
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
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        },
                        "range": [
                          185,
                          193
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            187,
                            193
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        }
                      },
                      "range": [
                        182,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 8
                        },
                        "start": {
                          "column": 12,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    181,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "range": [
                  174,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunk",
                  "optional": false,
                  "range": [
                    206,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 9
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      230,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 9
                      },
                      "start": {
                        "column": 28,
                        "line": 9
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
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 9
                          },
                          "start": {
                            "column": 15,
                            "line": 9
                          }
                        },
                        "range": [
                          217,
                          225
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            219,
                            225
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        }
                      },
                      "range": [
                        214,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "range": [
                    213,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                },
                "range": [
                  206,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              115,
              234
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 5,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            110,
            114
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          110,
          235
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        110,
        236
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
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
                  "name": "thunk",
                  "optional": false,
                  "range": [
                    299,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      323,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 13
                      },
                      "start": {
                        "column": 28,
                        "line": 13
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
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 13
                          },
                          "start": {
                            "column": 15,
                            "line": 13
                          }
                        },
                        "range": [
                          310,
                          318
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            312,
                            318
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 13
                            },
                            "start": {
                              "column": 17,
                              "line": 13
                            }
                          }
                        }
                      },
                      "range": [
                        307,
                        318
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 13
                        },
                        "start": {
                          "column": 12,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    306,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  }
                },
                "range": [
                  299,
                  325
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunk",
                  "optional": false,
                  "range": [
                    331,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      355,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 14
                      },
                      "start": {
                        "column": 28,
                        "line": 14
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
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 14
                          },
                          "start": {
                            "column": 15,
                            "line": 14
                          }
                        },
                        "range": [
                          342,
                          350
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            344,
                            350
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 14
                            },
                            "start": {
                              "column": 17,
                              "line": 14
                            }
                          }
                        }
                      },
                      "range": [
                        339,
                        350
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 14
                        },
                        "start": {
                          "column": 12,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    338,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  331,
                  357
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              243,
              359
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 5,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            238,
            242
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          238,
          360
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        238,
        361
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
