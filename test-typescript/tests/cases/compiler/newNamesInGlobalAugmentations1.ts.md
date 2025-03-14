__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    223
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              38,
              59
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      },
                      "range": [
                        50,
                        58
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          52,
                          58
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 4
                          },
                          "start": {
                            "column": 18,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      49,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    49,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                45,
                59
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 25,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          32,
          61
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 20,
            "line": 3
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          27,
          31
        ],
        "left": {
          "type": "Identifier",
          "range": [
            27,
            28
          ],
          "decorators": [],
          "name": "M",
          "optional": false,
          "loc": {
            "end": {
              "column": 16,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            29,
            31
          ],
          "decorators": [],
          "name": "M1",
          "optional": false,
          "loc": {
            "end": {
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 17,
              "line": 3
            }
          }
        },
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "kind": "module",
      "range": [
        12,
        61
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                111,
                146
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "observable",
                    "optional": false,
                    "range": [
                      121,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
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
                        "line": 8
                      },
                      "start": {
                        "column": 18,
                        "line": 8
                      }
                    },
                    "range": [
                      131,
                      139
                    ],
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "range": [
                        133,
                        139
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
                  },
                  "range": [
                    121,
                    140
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
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 32,
                  "line": 7
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SymbolConstructor",
              "optional": false,
              "range": [
                93,
                110
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            },
            "range": [
              83,
              146
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                161,
                164
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      162,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": null,
                  "range": [
                    162,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 15,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "range": [
                157,
                160
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              151,
              164
            ],
            "loc": {
              "end": {
                "column": 17,
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        174,
                        175
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 11
                        },
                        "start": {
                          "column": 9,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        177,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 11
                        },
                        "start": {
                          "column": 12,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 11
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    },
                    "range": [
                      179,
                      189
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          181,
                          187
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 11
                          },
                          "start": {
                            "column": 16,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        181,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    173,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "init": null,
                "range": [
                  173,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              169,
              190
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              195,
              220
            ],
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "range": [
                  209,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 12
                  }
                }
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "range": [
                      213,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 22,
                        "line": 12
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M1",
                    "optional": false,
                    "range": [
                      215,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 12
                      },
                      "start": {
                        "column": 24,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    213,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 12
                    },
                    "start": {
                      "column": 22,
                      "line": 12
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    218,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 12
                    },
                    "start": {
                      "column": 27,
                      "line": 12
                    }
                  }
                },
                "range": [
                  213,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 22,
                    "line": 12
                  }
                }
              },
              "range": [
                202,
                220
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 29,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          77,
          222
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 15,
            "line": 6
          }
        }
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "range": [
          70,
          76
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 6
          },
          "start": {
            "column": 8,
            "line": 6
          }
        }
      },
      "kind": "global",
      "range": [
        62,
        222
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
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
    49
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "range": [
            0,
            6
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 1
            },
            "start": {
              "column": 0,
              "line": 1
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "observable",
          "optional": false,
          "range": [
            7,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        },
        "range": [
          0,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        18
      ],
      "loc": {
        "end": {
          "column": 18,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "NewExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "range": [
              23,
              26
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
          "range": [
            19,
            28
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            29,
            30
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 10,
              "line": 2
            }
          }
        },
        "range": [
          19,
          30
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        19,
        30
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "c",
            "optional": false,
            "range": [
              35,
              36
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  39,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  43,
                  44
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
              "range": [
                39,
                44
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "range": [
                47,
                48
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "range": [
              39,
              48
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            35,
            48
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        31,
        49
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 18,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
