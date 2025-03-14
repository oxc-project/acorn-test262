__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    347
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        42
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
                22,
                40
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        33,
                        34
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 2
                        },
                        "start": {
                          "column": 15,
                          "line": 2
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        37,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      33,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  29,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 22,
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
            16,
            42
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
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            14,
            15
          ],
          "decorators": [],
          "name": "m",
          "optional": false,
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "kind": "module",
        "range": [
          7,
          42
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
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
      "type": "ExportNamedDeclaration",
      "range": [
        43,
        66
      ],
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "range": [
            57,
            59
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              62,
              63
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              64,
              65
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 21,
                "line": 4
              }
            }
          },
          "range": [
            62,
            65
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 4
            },
            "start": {
              "column": 19,
              "line": 4
            }
          }
        },
        "range": [
          50,
          66
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "column": 23,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "range": [
          74,
          76
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "range": [
            79,
            80
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            81,
            82
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        },
        "range": [
          79,
          82
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        }
      },
      "range": [
        67,
        83
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "name": "x",
            "optional": false,
            "range": [
              88,
              89
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "range": [
                92,
                94
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "range": [
                97,
                99
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "range": [
              92,
              99
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
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
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        84,
        100
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        101,
        213
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
                124,
                147
              ],
              "attributes": [],
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "range": [
                    138,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 8
                    },
                    "start": {
                      "column": 18,
                      "line": 8
                    }
                  }
                },
                "importKind": "value",
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      143,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      145,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 25,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    143,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 23,
                      "line": 8
                    }
                  }
                },
                "range": [
                  131,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a4",
                "optional": false,
                "range": [
                  159,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "range": [
                    164,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    166,
                    167
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
                    }
                  }
                },
                "range": [
                  164,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
                    "line": 9
                  }
                }
              },
              "range": [
                152,
                168
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      177,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "range": [
                        181,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "range": [
                        186,
                        188
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 10
                        },
                        "start": {
                          "column": 17,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      181,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 10
                      },
                      "start": {
                        "column": 12,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    177,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
                173,
                189
              ],
              "loc": {
                "end": {
                  "column": 20,
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
                    "name": "x2",
                    "optional": false,
                    "range": [
                      198,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "range": [
                        203,
                        205
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
                          "line": 11
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a4",
                      "optional": false,
                      "range": [
                        208,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 18,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      203,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 13,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    198,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
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
              "kind": "var",
              "range": [
                194,
                211
              ],
              "loc": {
                "end": {
                  "column": 21,
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
            118,
            213
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 17,
              "line": 7
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            115,
            117
          ],
          "decorators": [],
          "name": "m1",
          "optional": false,
          "loc": {
            "end": {
              "column": 16,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 7
            }
          }
        },
        "kind": "module",
        "range": [
          108,
          213
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 7
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
              230,
              253
            ],
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a3",
                "optional": false,
                "range": [
                  244,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 14
                  }
                }
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "range": [
                    249,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 14
                    },
                    "start": {
                      "column": 23,
                      "line": 14
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    251,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 14
                    },
                    "start": {
                      "column": 25,
                      "line": 14
                    }
                  }
                },
                "range": [
                  249,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 14
                  },
                  "start": {
                    "column": 23,
                    "line": 14
                  }
                }
              },
              "range": [
                237,
                253
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 27,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "range": [
                265,
                267
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  270,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 15
                  },
                  "start": {
                    "column": 16,
                    "line": 15
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  272,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 15
                  },
                  "start": {
                    "column": 18,
                    "line": 15
                  }
                }
              },
              "range": [
                270,
                273
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            },
            "range": [
              258,
              274
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    283,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "range": [
                      287,
                      289
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 16
                      },
                      "start": {
                        "column": 12,
                        "line": 16
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "range": [
                      292,
                      294
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 16
                      },
                      "start": {
                        "column": 17,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    287,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                },
                "range": [
                  283,
                  294
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              279,
              295
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 4,
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
                  "name": "x2",
                  "optional": false,
                  "range": [
                    304,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "range": [
                      309,
                      311
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "range": [
                      314,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 17
                      },
                      "start": {
                        "column": 18,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    309,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                },
                "range": [
                  304,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              300,
              317
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                  "name": "x4",
                  "optional": false,
                  "range": [
                    326,
                    328
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "range": [
                        331,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 18
                        },
                        "start": {
                          "column": 13,
                          "line": 18
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "range": [
                        334,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 18
                        },
                        "start": {
                          "column": 16,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      331,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 18
                      },
                      "start": {
                        "column": 13,
                        "line": 18
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "range": [
                        339,
                        341
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 18
                        },
                        "start": {
                          "column": 21,
                          "line": 18
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "range": [
                        342,
                        344
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 18
                        },
                        "start": {
                          "column": 24,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      339,
                      344
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 18
                      },
                      "start": {
                        "column": 21,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    331,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 18
                    },
                    "start": {
                      "column": 13,
                      "line": 18
                    }
                  }
                },
                "range": [
                  326,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              322,
              345
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          224,
          347
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          221,
          223
        ],
        "decorators": [],
        "name": "m2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "kind": "module",
      "range": [
        214,
        347
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
