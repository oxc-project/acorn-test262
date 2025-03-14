__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    98
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./boxedBox\"",
        "value": "./boxedBox",
        "range": [
          25,
          37
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "boxedBox",
            "optional": false,
            "range": [
              9,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "boxedBox",
            "optional": false,
            "range": [
              9,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        40,
        66
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
              "name": "_",
              "optional": false,
              "range": [
                53,
                54
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "boxedBox",
              "optional": false,
              "range": [
                57,
                65
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "range": [
              53,
              65
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          47,
          66
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 26,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    154
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        96
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
              "name": "boxedBox",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 1
                  }
                },
                "range": [
                  29,
                  95
                ],
                "typeAnnotation": {
                  "type": "TSImportType",
                  "range": [
                    31,
                    95
                  ],
                  "argument": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"./box\"",
                      "value": "./box",
                      "range": [
                        38,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 1
                        },
                        "start": {
                          "column": 38,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      38,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 1
                      },
                      "start": {
                        "column": 38,
                        "line": 1
                      }
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "range": [
                      47,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 1
                      },
                      "start": {
                        "column": 47,
                        "line": 1
                      }
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      50,
                      95
                    ],
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "boxed",
                              "optional": false,
                              "range": [
                                57,
                                62
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
                                  "column": 38,
                                  "line": 2
                                },
                                "start": {
                                  "column": 9,
                                  "line": 2
                                }
                              },
                              "range": [
                                62,
                                91
                              ],
                              "typeAnnotation": {
                                "type": "TSImportType",
                                "range": [
                                  64,
                                  91
                                ],
                                "argument": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "\"./box\"",
                                    "value": "./box",
                                    "range": [
                                      71,
                                      78
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "range": [
                                    71,
                                    78
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 2
                                    }
                                  }
                                },
                                "options": null,
                                "qualifier": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Box",
                                  "optional": false,
                                  "range": [
                                    80,
                                    83
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 2
                                    }
                                  }
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    83,
                                    91
                                  ],
                                  "params": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "range": [
                                        84,
                                        90
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 2
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 2
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 2
                                    }
                                  }
                                },
                                "loc": {
                                  "end": {
                                    "column": 38,
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
                              57,
                              92
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 2
                              },
                              "start": {
                                "column": 4,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "range": [
                          51,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 1,
                            "line": 3
                          },
                          "start": {
                            "column": 51,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 2,
                        "line": 3
                      },
                      "start": {
                        "column": 50,
                        "line": 1
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 3
                    },
                    "start": {
                      "column": 31,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                21,
                95
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "init": null,
            "range": [
              21,
              95
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          7,
          96
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 3,
          "line": 3
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
      "line": 4
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
    122
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        72
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            28,
            72
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
                "name": "value",
                "optional": false,
                "range": [
                  34,
                  39
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
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                },
                "range": [
                  39,
                  42
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      41,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    41,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                }
              },
              "value": null,
              "range": [
                34,
                43
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  48,
                  59
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  59,
                  70
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 3
                        },
                        "start": {
                          "column": 21,
                          "line": 3
                        }
                      },
                      "range": [
                        65,
                        68
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            67,
                            68
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 3
                            },
                            "start": {
                              "column": 23,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          67,
                          68
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 3
                          },
                          "start": {
                            "column": 23,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      60,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 3
                      },
                      "start": {
                        "column": 16,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              },
              "range": [
                48,
                70
              ],
              "loc": {
                "end": {
                  "column": 26,
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
              "column": 28,
              "line": 1
            }
          }
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "range": [
            21,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          },
          "range": [
            24,
            27
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  25,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 1
                  },
                  "start": {
                    "column": 25,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                25,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          72
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        73,
        122
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "box",
          "optional": false,
          "range": [
            97,
            100
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 5
                },
                "start": {
                  "column": 36,
                  "line": 5
                }
              },
              "range": [
                109,
                112
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    111,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 5
                    },
                    "start": {
                      "column": 38,
                      "line": 5
                    }
                  }
                },
                "range": [
                  111,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 5
                  },
                  "start": {
                    "column": 38,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              104,
              112
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 5
              },
              "start": {
                "column": 31,
                "line": 5
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 48,
              "line": 5
            },
            "start": {
              "column": 40,
              "line": 5
            }
          },
          "range": [
            113,
            121
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                118,
                121
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      119,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 5
                      },
                      "start": {
                        "column": 46,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    119,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 5
                    },
                    "start": {
                      "column": 46,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 5
                },
                "start": {
                  "column": 45,
                  "line": 5
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "range": [
                115,
                118
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 42,
                  "line": 5
                }
              }
            },
            "range": [
              115,
              121
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 5
              },
              "start": {
                "column": 42,
                "line": 5
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 27,
              "line": 5
            }
          },
          "range": [
            100,
            103
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  101,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 28,
                    "line": 5
                  }
                }
              },
              "out": false,
              "range": [
                101,
                102
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 28,
                  "line": 5
                }
              }
            }
          ]
        },
        "range": [
          80,
          122
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 49,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 49,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
