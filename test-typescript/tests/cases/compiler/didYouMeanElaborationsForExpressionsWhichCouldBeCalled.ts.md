__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    357
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          29
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                16,
                17
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
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              },
              "range": [
                18,
                26
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  20,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              16,
              27
            ],
            "loc": {
              "end": {
                "column": 15,
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
        "name": "Bar",
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
        29
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getNum",
        "optional": false,
        "range": [
          48,
          54
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 5
          },
          "start": {
            "column": 25,
            "line": 5
          }
        },
        "range": [
          56,
          64
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            58,
            64
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 5
            },
            "start": {
              "column": 27,
              "line": 5
            }
          }
        }
      },
      "range": [
        31,
        65
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          84,
          87
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 7
              },
              "start": {
                "column": 24,
                "line": 7
              }
            },
            "range": [
              91,
              112
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      95,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 28,
                        "line": 7
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
                        "line": 7
                      },
                      "start": {
                        "column": 29,
                        "line": 7
                      }
                    },
                    "range": [
                      96,
                      101
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "range": [
                          98,
                          101
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 7
                          },
                          "start": {
                            "column": 31,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        98,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 7
                        },
                        "start": {
                          "column": 31,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    95,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 7
                    },
                    "start": {
                      "column": 28,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      103,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 7
                      },
                      "start": {
                        "column": 36,
                        "line": 7
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
                        "column": 43,
                        "line": 7
                      },
                      "start": {
                        "column": 37,
                        "line": 7
                      }
                    },
                    "range": [
                      104,
                      110
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "range": [
                          106,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 7
                          },
                          "start": {
                            "column": 39,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        106,
                        110
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 7
                        },
                        "start": {
                          "column": 39,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    103,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 7
                    },
                    "start": {
                      "column": 36,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                93,
                112
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 7
                },
                "start": {
                  "column": 26,
                  "line": 7
                }
              }
            }
          },
          "range": [
            88,
            112
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 7
            },
            "start": {
              "column": 21,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 7
              },
              "start": {
                "column": 51,
                "line": 7
              }
            },
            "range": [
              118,
              126
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                120,
                126
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 7
                },
                "start": {
                  "column": 53,
                  "line": 7
                }
              }
            }
          },
          "range": [
            114,
            126
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 7
            },
            "start": {
              "column": 47,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 93,
                "line": 7
              },
              "start": {
                "column": 67,
                "line": 7
              }
            },
            "range": [
              134,
              160
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    137,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 7
                    },
                    "start": {
                      "column": 70,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    145,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 7
                    },
                    "start": {
                      "column": 78,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    153,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 7
                    },
                    "start": {
                      "column": 86,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                136,
                160
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 7
                },
                "start": {
                  "column": 69,
                  "line": 7
                }
              }
            }
          },
          "range": [
            128,
            160
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 7
            },
            "start": {
              "column": 61,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 100,
            "line": 7
          },
          "start": {
            "column": 94,
            "line": 7
          }
        },
        "range": [
          161,
          167
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            163,
            167
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 7
            },
            "start": {
              "column": 96,
              "line": 7
            }
          }
        }
      },
      "range": [
        67,
        168
      ],
      "loc": {
        "end": {
          "column": 101,
          "line": 7
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    180,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "range": [
                    183,
                    186
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 7,
                      "line": 10
                    }
                  }
                },
                "range": [
                  180,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    192,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "range": [
                    195,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 11
                    },
                    "start": {
                      "column": 7,
                      "line": 11
                    }
                  }
                },
                "range": [
                  192,
                  199
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              174,
              201
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getNum",
              "optional": false,
              "range": [
                203,
                209
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 3,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              203,
              211
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 3,
                "line": 12
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
            170,
            173
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          170,
          212
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        170,
        213
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 9
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    225,
                    226
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "range": [
                      232,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 15
                      },
                      "start": {
                        "column": 11,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    228,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 15
                    },
                    "start": {
                      "column": 7,
                      "line": 15
                    }
                  }
                },
                "range": [
                  225,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    243,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "range": [
                      250,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 16
                      },
                      "start": {
                        "column": 11,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    246,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                },
                "range": [
                  243,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 17,
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
              219,
              258
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "getNum",
            "optional": false,
            "range": [
              260,
              266
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 17
              },
              "start": {
                "column": 3,
                "line": 17
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
            215,
            218
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "optional": false,
        "range": [
          215,
          267
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        215,
        268
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 14
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    281,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 21
                    },
                    "start": {
                      "column": 4,
                      "line": 21
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "range": [
                      288,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 21
                      },
                      "start": {
                        "column": 11,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    284,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 7,
                      "line": 21
                    }
                  }
                },
                "range": [
                  281,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    299,
                    300
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "range": [
                      306,
                      310
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 22
                      },
                      "start": {
                        "column": 11,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    302,
                    312
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 22
                    },
                    "start": {
                      "column": 7,
                      "line": 22
                    }
                  }
                },
                "range": [
                  299,
                  312
                ],
                "loc": {
                  "end": {
                    "column": 17,
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
              275,
              314
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getNum",
              "optional": false,
              "range": [
                316,
                322
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 23
                },
                "start": {
                  "column": 3,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              316,
              324
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 23
              },
              "start": {
                "column": 3,
                "line": 23
              }
            }
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  332,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 24
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  339,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "getNum",
                "optional": false,
                "range": [
                  346,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              }
            ],
            "range": [
              326,
              354
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 27
              },
              "start": {
                "column": 13,
                "line": 23
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
            271,
            274
          ],
          "loc": {
            "end": {
              "column": 3,
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
          271,
          355
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        271,
        356
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
