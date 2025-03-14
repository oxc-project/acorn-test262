__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    281
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          18,
          41
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "range": [
                24,
                28
              ],
              "loc": {
                "end": {
                  "column": 8,
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
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                28,
                38
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    30,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                },
                "range": [
                  30,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              24,
              39
            ],
            "loc": {
              "end": {
                "column": 19,
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
            "column": 18,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Series",
        "optional": false,
        "range": [
          10,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
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
        41
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "series",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              },
              "range": [
                53,
                61
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Series",
                  "optional": false,
                  "range": [
                    55,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                },
                "range": [
                  55,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              47,
              61
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            47,
            61
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        43,
        62
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "seriesExtent",
                  "optional": false,
                  "range": [
                    91,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      118,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 10
                      },
                      "start": {
                        "column": 35,
                        "line": 10
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "series",
                      "optional": false,
                      "range": [
                        107,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 10
                        },
                        "start": {
                          "column": 24,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    106,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                },
                "range": [
                  91,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              87,
              123
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
                  "name": "series2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    },
                    "range": [
                      140,
                      150
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          142,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 12
                          },
                          "start": {
                            "column": 17,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        142,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 12
                        },
                        "start": {
                          "column": 17,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    133,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "init": null,
                "range": [
                  133,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              129,
              151
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 12
              },
              "start": {
                "column": 4,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "seriesExtent",
                  "optional": false,
                  "range": [
                    169,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 14
                    },
                    "start": {
                      "column": 16,
                      "line": 14
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
                  "name": "series2",
                  "optional": false,
                  "range": [
                    157,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    165,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 12,
                      "line": 14
                    }
                  }
                },
                "range": [
                  157,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                157,
                182
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              157,
              183
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
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                195,
                199
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              188,
              200
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
          }
        ],
        "range": [
          80,
          202
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 15,
            "line": 8
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
          74,
          77
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [],
      "range": [
        65,
        202
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
            "name": "keyExtent2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              },
              "range": [
                219,
                226
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    221,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 19
                    },
                    "start": {
                      "column": 16,
                      "line": 19
                    }
                  }
                },
                "range": [
                  221,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 19
                  },
                  "start": {
                    "column": 16,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              209,
              226
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "range": [
                          275,
                          276
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 19
                          },
                          "start": {
                            "column": 70,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        268,
                        277
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 19
                        },
                        "start": {
                          "column": 63,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "range": [
                    266,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 19
                    },
                    "start": {
                      "column": 61,
                      "line": 19
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 19
                        },
                        "start": {
                          "column": 51,
                          "line": 19
                        }
                      },
                      "range": [
                        256,
                        264
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          258,
                          264
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 19
                          },
                          "start": {
                            "column": 53,
                            "line": 19
                          }
                        }
                      }
                    },
                    "range": [
                      255,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 19
                      },
                      "start": {
                        "column": 50,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  245,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 19
                  },
                  "start": {
                    "column": 40,
                    "line": 19
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "series",
                  "optional": false,
                  "range": [
                    229,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 19
                    },
                    "start": {
                      "column": 24,
                      "line": 19
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    236,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 19
                    },
                    "start": {
                      "column": 31,
                      "line": 19
                    }
                  }
                },
                "range": [
                  229,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 19
                  },
                  "start": {
                    "column": 24,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  241,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 19
                  },
                  "start": {
                    "column": 36,
                    "line": 19
                  }
                }
              },
              "range": [
                229,
                244
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 19
                },
                "start": {
                  "column": 24,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              229,
              280
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 19
              },
              "start": {
                "column": 24,
                "line": 19
              }
            }
          },
          "range": [
            209,
            280
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        205,
        281
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 76,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
