__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    836
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        17
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
              "range": [
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
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
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
    {
      "type": "ExportNamedDeclaration",
      "range": [
        18,
        42
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
              "name": "r1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                },
                "range": [
                  31,
                  41
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      40,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 2
                      },
                      "start": {
                        "column": 22,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    33,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                29,
                41
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "init": null,
            "range": [
              29,
              41
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          25,
          42
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 2
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
          "column": 24,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        43,
        70
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
              "name": "y",
              "optional": false,
              "range": [
                54,
                55
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      60,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 3
                      },
                      "start": {
                        "column": 17,
                        "line": 3
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "''",
                    "value": "",
                    "range": [
                      65,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 3
                      },
                      "start": {
                        "column": 22,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    60,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 3
                    },
                    "start": {
                      "column": 17,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                58,
                69
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
              54,
              69
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          50,
          70
        ],
        "loc": {
          "end": {
            "column": 27,
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
          "column": 27,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        71,
        95
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
              "name": "r2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                },
                "range": [
                  84,
                  94
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      93,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    86,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                82,
                94
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "init": null,
            "range": [
              82,
              94
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          78,
          95
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 24,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        96,
        131
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            111,
            131
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
                "name": "foo",
                "optional": false,
                "range": [
                  117,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
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
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                },
                "range": [
                  120,
                  128
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    122,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 6
                    },
                    "start": {
                      "column": 9,
                      "line": 6
                    }
                  }
                }
              },
              "value": null,
              "range": [
                117,
                129
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 15,
              "line": 5
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            109,
            110
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          103,
          131
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        132,
        148
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
              "name": "c",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                },
                "range": [
                  144,
                  147
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      146,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 8
                      },
                      "start": {
                        "column": 14,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    146,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 8
                    },
                    "start": {
                      "column": 14,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                143,
                147
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "init": null,
            "range": [
              143,
              147
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          139,
          148
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 16,
          "line": 8
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 9
                }
              },
              "range": [
                155,
                158
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    157,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "range": [
                  157,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              153,
              158
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
          "init": null,
          "range": [
            153,
            158
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        149,
        159
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        161,
        185
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
              "name": "r3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 11
                  }
                },
                "range": [
                  174,
                  184
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      183,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 11
                      },
                      "start": {
                        "column": 22,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    176,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                172,
                184
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "init": null,
            "range": [
              172,
              184
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          168,
          185
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 24,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        186,
        210
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
              "name": "r4",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 12
                  },
                  "start": {
                    "column": 13,
                    "line": 12
                  }
                },
                "range": [
                  199,
                  209
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      208,
                      209
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
                  "range": [
                    201,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                197,
                209
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "init": null,
            "range": [
              197,
              209
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 12
              },
              "start": {
                "column": 11,
                "line": 12
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          193,
          210
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 24,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        211,
        237
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
              "name": "r4b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 13
                  },
                  "start": {
                    "column": 14,
                    "line": 13
                  }
                },
                "range": [
                  225,
                  236
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "range": [
                      234,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 23,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    227,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 13
                    },
                    "start": {
                      "column": 16,
                      "line": 13
                    }
                  }
                }
              },
              "range": [
                222,
                236
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "init": null,
            "range": [
              222,
              236
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 13
              },
              "start": {
                "column": 11,
                "line": 13
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          218,
          237
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 26,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        239,
        278
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            258,
            278
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  264,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
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
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 7,
                    "line": 16
                  }
                },
                "range": [
                  267,
                  275
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    269,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 16
                    },
                    "start": {
                      "column": 9,
                      "line": 16
                    }
                  }
                }
              },
              "range": [
                264,
                276
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 19,
              "line": 15
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "range": [
            256,
            257
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 15
            },
            "start": {
              "column": 17,
              "line": 15
            }
          }
        },
        "range": [
          246,
          278
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        279,
        295
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
              "name": "i",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 18
                  },
                  "start": {
                    "column": 12,
                    "line": 18
                  }
                },
                "range": [
                  291,
                  294
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      293,
                      294
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 18
                      },
                      "start": {
                        "column": 14,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    293,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 18
                    },
                    "start": {
                      "column": 14,
                      "line": 18
                    }
                  }
                }
              },
              "range": [
                290,
                294
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "init": null,
            "range": [
              290,
              294
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 18
              },
              "start": {
                "column": 11,
                "line": 18
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          286,
          295
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 18
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 16,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              },
              "range": [
                302,
                305
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    304,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "range": [
                  304,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              300,
              305
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            300,
            305
          ],
          "loc": {
            "end": {
              "column": 9,
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
        296,
        306
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        307,
        331
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
              "name": "r5",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 20
                  },
                  "start": {
                    "column": 13,
                    "line": 20
                  }
                },
                "range": [
                  320,
                  330
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      329,
                      330
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 20
                      },
                      "start": {
                        "column": 22,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    322,
                    330
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 20
                    },
                    "start": {
                      "column": 15,
                      "line": 20
                    }
                  }
                }
              },
              "range": [
                318,
                330
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "init": null,
            "range": [
              318,
              330
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 20
              },
              "start": {
                "column": 11,
                "line": 20
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          314,
          331
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 20
          },
          "start": {
            "column": 7,
            "line": 20
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 24,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        332,
        357
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
              "name": "r5",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 21
                  },
                  "start": {
                    "column": 13,
                    "line": 21
                  }
                },
                "range": [
                  345,
                  356
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i2",
                    "optional": false,
                    "range": [
                      354,
                      356
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 21
                      },
                      "start": {
                        "column": 22,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    347,
                    356
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 21
                    },
                    "start": {
                      "column": 15,
                      "line": 21
                    }
                  }
                }
              },
              "range": [
                343,
                356
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "init": null,
            "range": [
              343,
              356
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 21
              },
              "start": {
                "column": 11,
                "line": 21
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          339,
          357
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 21
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 25,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        359,
        451
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                381,
                401
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        392,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        398,
                        400
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 24
                        },
                        "start": {
                          "column": 21,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      392,
                      400
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 24
                      },
                      "start": {
                        "column": 15,
                        "line": 24
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  388,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                406,
                449
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    421,
                    449
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
                        "name": "foo",
                        "optional": false,
                        "range": [
                          431,
                          434
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 26
                          },
                          "start": {
                            "column": 8,
                            "line": 26
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
                            "column": 19,
                            "line": 26
                          },
                          "start": {
                            "column": 11,
                            "line": 26
                          }
                        },
                        "range": [
                          434,
                          442
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            436,
                            442
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 26
                            },
                            "start": {
                              "column": 13,
                              "line": 26
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        431,
                        443
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 27
                    },
                    "start": {
                      "column": 19,
                      "line": 25
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    419,
                    420
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
                "implements": [],
                "superClass": null,
                "range": [
                  413,
                  449
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 11,
                    "line": 25
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            }
          ],
          "range": [
            375,
            451
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 28
            },
            "start": {
              "column": 16,
              "line": 23
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            373,
            374
          ],
          "decorators": [],
          "name": "M",
          "optional": false,
          "loc": {
            "end": {
              "column": 15,
              "line": 23
            },
            "start": {
              "column": 14,
              "line": 23
            }
          }
        },
        "kind": "module",
        "range": [
          366,
          451
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 23
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        452,
        476
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
              "name": "r6",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 29
                  },
                  "start": {
                    "column": 13,
                    "line": 29
                  }
                },
                "range": [
                  465,
                  475
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "range": [
                      474,
                      475
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 29
                      },
                      "start": {
                        "column": 22,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    467,
                    475
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 29
                    },
                    "start": {
                      "column": 15,
                      "line": 29
                    }
                  }
                }
              },
              "range": [
                463,
                475
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "init": null,
            "range": [
              463,
              475
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 29
              },
              "start": {
                "column": 11,
                "line": 29
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          459,
          476
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 29
          },
          "start": {
            "column": 7,
            "line": 29
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 24,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        477,
        505
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
              "name": "r7",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 30
                  },
                  "start": {
                    "column": 13,
                    "line": 30
                  }
                },
                "range": [
                  490,
                  504
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        499,
                        500
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 30
                        },
                        "start": {
                          "column": 22,
                          "line": 30
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        501,
                        504
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 30
                        },
                        "start": {
                          "column": 24,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      499,
                      504
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 30
                      },
                      "start": {
                        "column": 22,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    492,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 30
                    },
                    "start": {
                      "column": 15,
                      "line": 30
                    }
                  }
                }
              },
              "range": [
                488,
                504
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 30
                },
                "start": {
                  "column": 11,
                  "line": 30
                }
              }
            },
            "init": null,
            "range": [
              488,
              504
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 30
              },
              "start": {
                "column": 11,
                "line": 30
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          484,
          505
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 30
          },
          "start": {
            "column": 7,
            "line": 30
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 28,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        507,
        527
      ],
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "range": [
            521,
            522
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 32
            },
            "start": {
              "column": 14,
              "line": 32
            }
          }
        },
        "importKind": "value",
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "range": [
            525,
            526
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 32
            },
            "start": {
              "column": 18,
              "line": 32
            }
          }
        },
        "range": [
          514,
          527
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 32
          },
          "start": {
            "column": 7,
            "line": 32
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 20,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        528,
        552
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
              "name": "r8",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 33
                  },
                  "start": {
                    "column": 13,
                    "line": 33
                  }
                },
                "range": [
                  541,
                  551
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "range": [
                      550,
                      551
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 33
                      },
                      "start": {
                        "column": 22,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    543,
                    551
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 33
                    },
                    "start": {
                      "column": 15,
                      "line": 33
                    }
                  }
                }
              },
              "range": [
                539,
                551
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 33
                },
                "start": {
                  "column": 11,
                  "line": 33
                }
              }
            },
            "init": null,
            "range": [
              539,
              551
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 33
              },
              "start": {
                "column": 11,
                "line": 33
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          535,
          552
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 33
          },
          "start": {
            "column": 7,
            "line": 33
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 24,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        553,
        581
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
              "name": "r9",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 34
                  },
                  "start": {
                    "column": 13,
                    "line": 34
                  }
                },
                "range": [
                  566,
                  580
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "range": [
                        575,
                        576
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 34
                        },
                        "start": {
                          "column": 22,
                          "line": 34
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        577,
                        580
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 34
                        },
                        "start": {
                          "column": 24,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      575,
                      580
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 34
                      },
                      "start": {
                        "column": 22,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    568,
                    580
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 34
                    },
                    "start": {
                      "column": 15,
                      "line": 34
                    }
                  }
                }
              },
              "range": [
                564,
                580
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 34
                }
              }
            },
            "init": null,
            "range": [
              564,
              580
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 34
              },
              "start": {
                "column": 11,
                "line": 34
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          560,
          581
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 34
          },
          "start": {
            "column": 7,
            "line": 34
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 28,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        583,
        606
      ],
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "body": {
          "type": "TSEnumBody",
          "range": [
            597,
            606
          ],
          "members": [
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  603,
                  604
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              },
              "range": [
                603,
                604
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 38
            },
            "start": {
              "column": 14,
              "line": 36
            }
          }
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "range": [
            595,
            596
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 36
            },
            "start": {
              "column": 12,
              "line": 36
            }
          }
        },
        "range": [
          590,
          606
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 7,
            "line": 36
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        607,
        632
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
              "name": "r10",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 39
                  },
                  "start": {
                    "column": 14,
                    "line": 39
                  }
                },
                "range": [
                  621,
                  631
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "range": [
                      630,
                      631
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 39
                      },
                      "start": {
                        "column": 23,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    623,
                    631
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 39
                    },
                    "start": {
                      "column": 16,
                      "line": 39
                    }
                  }
                }
              },
              "range": [
                618,
                631
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 39
                },
                "start": {
                  "column": 11,
                  "line": 39
                }
              }
            },
            "init": null,
            "range": [
              618,
              631
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 39
              },
              "start": {
                "column": 11,
                "line": 39
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          614,
          632
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 39
          },
          "start": {
            "column": 7,
            "line": 39
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 25,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        633,
        660
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
              "name": "r11",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 40
                  },
                  "start": {
                    "column": 14,
                    "line": 40
                  }
                },
                "range": [
                  647,
                  659
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        656,
                        657
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 40
                        },
                        "start": {
                          "column": 23,
                          "line": 40
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        658,
                        659
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 40
                        },
                        "start": {
                          "column": 25,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      656,
                      659
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 40
                      },
                      "start": {
                        "column": 23,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    649,
                    659
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 40
                    },
                    "start": {
                      "column": 16,
                      "line": 40
                    }
                  }
                }
              },
              "range": [
                644,
                659
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 40
                },
                "start": {
                  "column": 11,
                  "line": 40
                }
              }
            },
            "init": null,
            "range": [
              644,
              659
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 40
              },
              "start": {
                "column": 11,
                "line": 40
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          640,
          660
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 40
          },
          "start": {
            "column": 7,
            "line": 40
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 27,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        662,
        689
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
              "name": "r12",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 42
                  },
                  "start": {
                    "column": 14,
                    "line": 42
                  }
                },
                "range": [
                  676,
                  688
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r12",
                    "optional": false,
                    "range": [
                      685,
                      688
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 42
                      },
                      "start": {
                        "column": 23,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    678,
                    688
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 42
                    },
                    "start": {
                      "column": 16,
                      "line": 42
                    }
                  }
                }
              },
              "range": [
                673,
                688
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 42
                },
                "start": {
                  "column": 11,
                  "line": 42
                }
              }
            },
            "init": null,
            "range": [
              673,
              688
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 42
              },
              "start": {
                "column": 11,
                "line": 42
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          669,
          689
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 42
          },
          "start": {
            "column": 7,
            "line": 42
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 27,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        691,
        716
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            713,
            716
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 44
            },
            "start": {
              "column": 22,
              "line": 44
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
            707,
            710
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 44
            },
            "start": {
              "column": 16,
              "line": 44
            }
          }
        },
        "params": [],
        "range": [
          698,
          716
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 44
          },
          "start": {
            "column": 7,
            "line": 44
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 25,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        717,
        808
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                741,
                758
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        752,
                        753
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 46
                        },
                        "start": {
                          "column": 15,
                          "line": 46
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        756,
                        757
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 46
                        },
                        "start": {
                          "column": 19,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      752,
                      757
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 46
                      },
                      "start": {
                        "column": 15,
                        "line": 46
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  748,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 46
                  },
                  "start": {
                    "column": 11,
                    "line": 46
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                763,
                806
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    778,
                    806
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
                        "name": "foo",
                        "optional": false,
                        "range": [
                          788,
                          791
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 48
                          },
                          "start": {
                            "column": 8,
                            "line": 48
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
                            "column": 19,
                            "line": 48
                          },
                          "start": {
                            "column": 11,
                            "line": 48
                          }
                        },
                        "range": [
                          791,
                          799
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            793,
                            799
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 48
                            },
                            "start": {
                              "column": 13,
                              "line": 48
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        788,
                        800
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 48
                        },
                        "start": {
                          "column": 8,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 49
                    },
                    "start": {
                      "column": 19,
                      "line": 47
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    776,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 47
                    },
                    "start": {
                      "column": 17,
                      "line": 47
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  770,
                  806
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 11,
                    "line": 47
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            }
          ],
          "range": [
            735,
            808
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 50
            },
            "start": {
              "column": 18,
              "line": 45
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            731,
            734
          ],
          "decorators": [],
          "name": "foo",
          "optional": false,
          "loc": {
            "end": {
              "column": 17,
              "line": 45
            },
            "start": {
              "column": 14,
              "line": 45
            }
          }
        },
        "kind": "module",
        "range": [
          724,
          808
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 7,
            "line": 45
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        809,
        836
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
              "name": "r13",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 51
                  },
                  "start": {
                    "column": 14,
                    "line": 51
                  }
                },
                "range": [
                  823,
                  835
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      832,
                      835
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 51
                      },
                      "start": {
                        "column": 23,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    825,
                    835
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 51
                    },
                    "start": {
                      "column": 16,
                      "line": 51
                    }
                  }
                }
              },
              "range": [
                820,
                835
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 51
                },
                "start": {
                  "column": 11,
                  "line": 51
                }
              }
            },
            "init": null,
            "range": [
              820,
              835
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 51
              },
              "start": {
                "column": 11,
                "line": 51
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          816,
          836
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 51
          },
          "start": {
            "column": 7,
            "line": 51
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 27,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 27,
      "line": 51
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
