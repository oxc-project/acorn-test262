__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    773
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
            "name": "x",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            9
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
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
      "type": "ExportNamedDeclaration",
      "range": [
        11,
        35
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
                  24,
                  34
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      33,
                      34
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
                    26,
                    34
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
                22,
                34
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
              22,
              34
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
          18,
          35
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
              40,
              41
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
                    46,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
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
                    51,
                    53
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                },
                "range": [
                  46,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              44,
              55
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            40,
            55
          ],
          "loc": {
            "end": {
              "column": 19,
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
      "kind": "var",
      "range": [
        36,
        56
      ],
      "loc": {
        "end": {
          "column": 20,
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
        57,
        81
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
                  70,
                  80
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      79,
                      80
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
                    72,
                    80
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
                68,
                80
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
              68,
              80
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
          64,
          81
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          90,
          110
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
                96,
                99
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
                99,
                107
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  101,
                  107
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
              96,
              108
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
            "column": 8,
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
          88,
          89
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
        82,
        110
      ],
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
        111,
        127
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
                  123,
                  126
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      125,
                      126
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
                    125,
                    126
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
                122,
                126
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
              122,
              126
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
          118,
          127
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
                134,
                137
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    136,
                    137
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
                  136,
                  137
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
              132,
              137
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
            132,
            137
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
        128,
        138
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
        140,
        164
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
                  153,
                  163
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      162,
                      163
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
                    155,
                    163
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
                151,
                163
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
              151,
              163
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
          147,
          164
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
        165,
        189
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
                  178,
                  188
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      187,
                      188
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
                    180,
                    188
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
                176,
                188
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
              176,
              188
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
          172,
          189
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
        190,
        216
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
                  204,
                  215
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "range": [
                      213,
                      215
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
                    206,
                    215
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
                201,
                215
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
              201,
              215
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
          197,
          216
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          230,
          250
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
                236,
                239
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
                239,
                247
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  241,
                  247
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
              236,
              248
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
            "column": 12,
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
          228,
          229
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "range": [
        218,
        250
      ],
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
        251,
        267
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
                  263,
                  266
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      265,
                      266
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
                    265,
                    266
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
                262,
                266
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
              262,
              266
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
          258,
          267
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
                274,
                277
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    276,
                    277
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
                  276,
                  277
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
              272,
              277
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
            272,
            277
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
        268,
        278
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
        279,
        303
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
                  292,
                  302
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      301,
                      302
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
                    294,
                    302
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
                290,
                302
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
              290,
              302
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
          286,
          303
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
        304,
        329
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
                  317,
                  328
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i2",
                    "optional": false,
                    "range": [
                      326,
                      328
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
                    319,
                    328
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
                315,
                328
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
              315,
              328
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
          311,
          329
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              346,
              366
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
                      357,
                      360
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
                      363,
                      365
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
                    357,
                    365
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
                353,
                366
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
              371,
              414
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  386,
                  414
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
                        396,
                        399
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
                        399,
                        407
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          401,
                          407
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
                      396,
                      408
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
                  384,
                  385
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
                378,
                414
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
          340,
          416
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 9,
            "line": 23
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          338,
          339
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 23
          }
        }
      },
      "kind": "module",
      "range": [
        331,
        416
      ],
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
        417,
        441
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
                  430,
                  440
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "range": [
                      439,
                      440
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
                    432,
                    440
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
                428,
                440
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
              428,
              440
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
          424,
          441
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
        442,
        470
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
                  455,
                  469
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
                        464,
                        465
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
                        466,
                        469
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
                      464,
                      469
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
                    457,
                    469
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
                453,
                469
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
              453,
              469
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
          449,
          470
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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "range": [
          479,
          480
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 32
          },
          "start": {
            "column": 7,
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
          483,
          484
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 32
          },
          "start": {
            "column": 11,
            "line": 32
          }
        }
      },
      "range": [
        472,
        485
      ],
      "loc": {
        "end": {
          "column": 13,
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
        486,
        510
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
                  499,
                  509
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "range": [
                      508,
                      509
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
                    501,
                    509
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
                497,
                509
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
              497,
              509
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
          493,
          510
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
        511,
        539
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
                  524,
                  538
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
                        533,
                        534
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
                        535,
                        538
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
                      533,
                      538
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
                    526,
                    538
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
                522,
                538
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
              522,
              538
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
          518,
          539
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
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          548,
          557
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
                554,
                555
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
              554,
              555
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
            "column": 7,
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
          546,
          547
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 36
          },
          "start": {
            "column": 5,
            "line": 36
          }
        }
      },
      "range": [
        541,
        557
      ],
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
        558,
        583
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
                  572,
                  582
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "range": [
                      581,
                      582
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
                    574,
                    582
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
                569,
                582
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
              569,
              582
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
          565,
          583
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
        584,
        611
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
                  598,
                  610
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
                        607,
                        608
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
                        609,
                        610
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
                      607,
                      610
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
                    600,
                    610
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
                595,
                610
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
              595,
              610
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
          591,
          611
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
        613,
        640
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
                  627,
                  639
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r12",
                    "optional": false,
                    "range": [
                      636,
                      639
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
                    629,
                    639
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
                624,
                639
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
              624,
              639
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
          620,
          640
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          657,
          660
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 44
          },
          "start": {
            "column": 15,
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
          651,
          654
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 44
          }
        }
      },
      "params": [],
      "range": [
        642,
        660
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
              678,
              695
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
                      689,
                      690
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
                      693,
                      694
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
                    689,
                    694
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
                685,
                695
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
              700,
              743
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  715,
                  743
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
                        725,
                        728
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
                        728,
                        736
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          730,
                          736
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
                      725,
                      737
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
                  713,
                  714
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
                707,
                743
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
          672,
          745
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 11,
            "line": 45
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          668,
          671
        ],
        "decorators": [],
        "name": "foo",
        "optional": false,
        "loc": {
          "end": {
            "column": 10,
            "line": 45
          },
          "start": {
            "column": 7,
            "line": 45
          }
        }
      },
      "kind": "module",
      "range": [
        661,
        745
      ],
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
        746,
        773
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
                  760,
                  772
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      769,
                      772
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
                    762,
                    772
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
                757,
                772
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
              757,
              772
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
          753,
          773
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
