__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    405
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"react\"",
        "value": "react",
        "range": [
          80,
          87
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 2
          },
          "start": {
            "column": 36,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            51,
            56
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              51,
              56
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 7,
                "line": 2
              }
            }
          },
          "loc": {
            "end": {
              "column": 12,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "range": [
              60,
              72
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "range": [
              60,
              72
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "range": [
            60,
            72
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        }
      ],
      "range": [
        44,
        88
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
        "name": "NotHappy",
        "optional": false,
        "range": [
          107,
          115
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 4
              },
              "start": {
                "column": 31,
                "line": 4
              }
            },
            "range": [
              121,
              165
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fixed",
                        "optional": false,
                        "range": [
                          126,
                          131
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 4
                          },
                          "start": {
                            "column": 36,
                            "line": 4
                          }
                        }
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 4
                          },
                          "start": {
                            "column": 42,
                            "line": 4
                          }
                        },
                        "range": [
                          132,
                          141
                        ],
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "range": [
                            134,
                            141
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 4
                            },
                            "start": {
                              "column": 44,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        126,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 4
                        },
                        "start": {
                          "column": 36,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    124,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 4
                    },
                    "start": {
                      "column": 34,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          148,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 4
                          },
                          "start": {
                            "column": 58,
                            "line": 4
                          }
                        }
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 4
                          },
                          "start": {
                            "column": 64,
                            "line": 4
                          }
                        },
                        "range": [
                          154,
                          162
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            156,
                            162
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 4
                            },
                            "start": {
                              "column": 66,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        148,
                        162
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 4
                        },
                        "start": {
                          "column": 58,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    146,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 4
                    },
                    "start": {
                      "column": 56,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                124,
                164
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 4
                },
                "start": {
                  "column": 34,
                  "line": 4
                }
              }
            }
          },
          "range": [
            116,
            165
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 4
            },
            "start": {
              "column": 26,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 95,
            "line": 4
          },
          "start": {
            "column": 76,
            "line": 4
          }
        },
        "range": [
          166,
          185
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              180,
              185
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  181,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 4
                  },
                  "start": {
                    "column": 91,
                    "line": 4
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 4
              },
              "start": {
                "column": 90,
                "line": 4
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "range": [
              168,
              180
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 4
              },
              "start": {
                "column": 78,
                "line": 4
              }
            }
          },
          "range": [
            168,
            185
          ],
          "loc": {
            "end": {
              "column": 95,
              "line": 4
            },
            "start": {
              "column": 78,
              "line": 4
            }
          }
        }
      },
      "range": [
        90,
        186
      ],
      "loc": {
        "end": {
          "column": 96,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
        "name": "Happy",
        "optional": false,
        "range": [
          204,
          209
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 5
              },
              "start": {
                "column": 28,
                "line": 5
              }
            },
            "range": [
              215,
              252
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
                    "name": "fixed",
                    "optional": false,
                    "range": [
                      219,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 5
                      },
                      "start": {
                        "column": 32,
                        "line": 5
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 5
                      },
                      "start": {
                        "column": 38,
                        "line": 5
                      }
                    },
                    "range": [
                      225,
                      234
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        227,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 5
                        },
                        "start": {
                          "column": 40,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    219,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 5
                    },
                    "start": {
                      "column": 32,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      236,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 5
                      },
                      "start": {
                        "column": 49,
                        "line": 5
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 5
                      },
                      "start": {
                        "column": 55,
                        "line": 5
                      }
                    },
                    "range": [
                      242,
                      250
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        244,
                        250
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 5
                        },
                        "start": {
                          "column": 57,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    236,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 5
                    },
                    "start": {
                      "column": 49,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                217,
                252
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 5
                },
                "start": {
                  "column": 30,
                  "line": 5
                }
              }
            }
          },
          "range": [
            210,
            252
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 5
            },
            "start": {
              "column": 23,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 85,
            "line": 5
          },
          "start": {
            "column": 66,
            "line": 5
          }
        },
        "range": [
          253,
          272
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              267,
              272
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  268,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 5
                  },
                  "start": {
                    "column": 81,
                    "line": 5
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 5
              },
              "start": {
                "column": 80,
                "line": 5
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "range": [
              255,
              267
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 5
              },
              "start": {
                "column": 68,
                "line": 5
              }
            }
          },
          "range": [
            255,
            272
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 5
            },
            "start": {
              "column": 68,
              "line": 5
            }
          }
        }
      },
      "range": [
        187,
        273
      ],
      "loc": {
        "end": {
          "column": 86,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "RootNotHappy",
            "optional": false,
            "range": [
              281,
              293
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "JSXElement",
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "range": [
                  303,
                  340
                ],
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "data-testid",
                      "range": [
                        313,
                        324
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 7
                        },
                        "start": {
                          "column": 38,
                          "line": 7
                        }
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "raw": "\"my-test-id\"",
                      "value": "my-test-id",
                      "range": [
                        325,
                        337
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 7
                        },
                        "start": {
                          "column": 50,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      313,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 7
                      },
                      "start": {
                        "column": 38,
                        "line": 7
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "NotHappy",
                  "range": [
                    304,
                    312
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 7
                    },
                    "start": {
                      "column": 29,
                      "line": 7
                    }
                  }
                },
                "selfClosing": true,
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 7
                  },
                  "start": {
                    "column": 28,
                    "line": 7
                  }
                }
              },
              "range": [
                303,
                340
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              296,
              341
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            }
          },
          "range": [
            281,
            341
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        275,
        342
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "RootHappy",
            "optional": false,
            "range": [
              349,
              358
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "JSXElement",
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "range": [
                  368,
                  402
                ],
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "data-testid",
                      "range": [
                        375,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 8
                        },
                        "start": {
                          "column": 32,
                          "line": 8
                        }
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "raw": "\"my-test-id\"",
                      "value": "my-test-id",
                      "range": [
                        387,
                        399
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 8
                        },
                        "start": {
                          "column": 44,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      375,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 8
                      },
                      "start": {
                        "column": 32,
                        "line": 8
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "Happy",
                  "range": [
                    369,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 8
                    },
                    "start": {
                      "column": 26,
                      "line": 8
                    }
                  }
                },
                "selfClosing": true,
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 8
                  },
                  "start": {
                    "column": 25,
                    "line": 8
                  }
                }
              },
              "range": [
                368,
                402
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 8
                },
                "start": {
                  "column": 25,
                  "line": 8
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              361,
              403
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 8
              },
              "start": {
                "column": 18,
                "line": 8
              }
            }
          },
          "range": [
            349,
            403
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        343,
        404
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
