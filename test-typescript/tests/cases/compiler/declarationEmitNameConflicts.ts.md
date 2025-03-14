__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    44
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              11,
              29
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  26,
                  29
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
                    "line": 1
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  24,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                18,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "range": [
          9,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          8
        ],
        "decorators": [],
        "name": "f",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          41,
          42
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "range": [
        32,
        43
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1070
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im",
        "optional": false,
        "range": [
          7,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'./declarationEmit_nameConflicts_1'",
          "value": "./declarationEmit_nameConflicts_1",
          "range": [
            20,
            55
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "range": [
          12,
          56
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "range": [
        0,
        57
      ],
      "loc": {
        "end": {
          "column": 57,
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
        58,
        326
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
                80,
                103
              ],
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    100,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    96,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 3
                    },
                    "start": {
                      "column": 20,
                      "line": 3
                    }
                  }
                },
                "params": [],
                "range": [
                  87,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
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
                  "column": 4,
                  "line": 3
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                108,
                126
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    123,
                    126
                  ],
                  "body": [],
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
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    121,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  115,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 22,
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
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                131,
                218
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
                        157,
                        180
                      ],
                      "attributes": [],
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            177,
                            180
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 6
                            },
                            "start": {
                              "column": 28,
                              "line": 6
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "range": [
                            173,
                            174
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 6
                            },
                            "start": {
                              "column": 24,
                              "line": 6
                            }
                          }
                        },
                        "params": [],
                        "range": [
                          164,
                          180
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 6
                          },
                          "start": {
                            "column": 15,
                            "line": 6
                          }
                        }
                      },
                      "exportKind": "value",
                      "source": null,
                      "specifiers": [],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "EmptyStatement",
                      "range": [
                        180,
                        181
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 6
                        },
                        "start": {
                          "column": 31,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "range": [
                        190,
                        212
                      ],
                      "attributes": [],
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "body": {
                          "type": "TSInterfaceBody",
                          "range": [
                            209,
                            212
                          ],
                          "body": [],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 7
                            },
                            "start": {
                              "column": 27,
                              "line": 7
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
                            207,
                            208
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 7
                            },
                            "start": {
                              "column": 25,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          197,
                          212
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 7
                          },
                          "start": {
                            "column": 15,
                            "line": 7
                          }
                        }
                      },
                      "exportKind": "type",
                      "source": null,
                      "specifiers": [],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    147,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 5
                    }
                  }
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "range": [
                    145,
                    146
                  ],
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 18,
                      "line": 5
                    }
                  }
                },
                "kind": "module",
                "range": [
                  138,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                224,
                246
              ],
              "attributes": [],
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    238,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 10
                    },
                    "start": {
                      "column": 18,
                      "line": 10
                    }
                  }
                },
                "importKind": "value",
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "range": [
                      242,
                      243
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 10
                      },
                      "start": {
                        "column": 22,
                        "line": 10
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      244,
                      245
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 10
                      },
                      "start": {
                        "column": 24,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    242,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 10
                    },
                    "start": {
                      "column": 22,
                      "line": 10
                    }
                  }
                },
                "range": [
                  231,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                251,
                273
              ],
              "attributes": [],
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    265,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 11
                    },
                    "start": {
                      "column": 18,
                      "line": 11
                    }
                  }
                },
                "importKind": "value",
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "range": [
                      269,
                      270
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
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      271,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 24,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    269,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 11
                    },
                    "start": {
                      "column": 22,
                      "line": 11
                    }
                  }
                },
                "range": [
                  258,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 26,
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
                278,
                298
              ],
              "attributes": [],
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    292,
                    293
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "range": [
                    296,
                    297
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
                  285,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 24,
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
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                303,
                324
              ],
              "attributes": [],
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "range": [
                    317,
                    318
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 18,
                      "line": 13
                    }
                  }
                },
                "importKind": "value",
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im",
                  "optional": false,
                  "range": [
                    321,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 13
                    },
                    "start": {
                      "column": 22,
                      "line": 13
                    }
                  }
                },
                "range": [
                  310,
                  324
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
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            74,
            326
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            72,
            73
          ],
          "decorators": [],
          "name": "M",
          "optional": false,
          "loc": {
            "end": {
              "column": 15,
              "line": 2
            },
            "start": {
              "column": 14,
              "line": 2
            }
          }
        },
        "kind": "module",
        "range": [
          65,
          326
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
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
          "column": 1,
          "line": 14
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
        328,
        733
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
                352,
                375
              ],
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    372,
                    375
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 17
                    },
                    "start": {
                      "column": 24,
                      "line": 17
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    368,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 17
                    },
                    "start": {
                      "column": 20,
                      "line": 17
                    }
                  }
                },
                "params": [],
                "range": [
                  359,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                380,
                398
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    395,
                    398
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 18
                    },
                    "start": {
                      "column": 19,
                      "line": 18
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
                    393,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 18
                    },
                    "start": {
                      "column": 17,
                      "line": 18
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  387,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 18
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                403,
                490
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
                        429,
                        452
                      ],
                      "attributes": [],
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            449,
                            452
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 20
                            },
                            "start": {
                              "column": 28,
                              "line": 20
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "range": [
                            445,
                            446
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 20
                            },
                            "start": {
                              "column": 24,
                              "line": 20
                            }
                          }
                        },
                        "params": [],
                        "range": [
                          436,
                          452
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 20
                          },
                          "start": {
                            "column": 15,
                            "line": 20
                          }
                        }
                      },
                      "exportKind": "value",
                      "source": null,
                      "specifiers": [],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    {
                      "type": "EmptyStatement",
                      "range": [
                        452,
                        453
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 20
                        },
                        "start": {
                          "column": 31,
                          "line": 20
                        }
                      }
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "range": [
                        462,
                        484
                      ],
                      "attributes": [],
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "body": {
                          "type": "TSInterfaceBody",
                          "range": [
                            481,
                            484
                          ],
                          "body": [],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 21
                            },
                            "start": {
                              "column": 27,
                              "line": 21
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
                            479,
                            480
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 21
                            },
                            "start": {
                              "column": 25,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          469,
                          484
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 21
                          },
                          "start": {
                            "column": 15,
                            "line": 21
                          }
                        }
                      },
                      "exportKind": "type",
                      "source": null,
                      "specifiers": [],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    419,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 22
                    },
                    "start": {
                      "column": 20,
                      "line": 19
                    }
                  }
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "range": [
                    417,
                    418
                  ],
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 19
                    },
                    "start": {
                      "column": 18,
                      "line": 19
                    }
                  }
                },
                "kind": "module",
                "range": [
                  410,
                  490
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 11,
                    "line": 19
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                495,
                520
              ],
              "attributes": [],
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im",
                  "optional": false,
                  "range": [
                    509,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 23
                    },
                    "start": {
                      "column": 18,
                      "line": 23
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
                        514,
                        515
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 23
                        },
                        "start": {
                          "column": 23,
                          "line": 23
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        516,
                        517
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 23
                        },
                        "start": {
                          "column": 25,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      514,
                      517
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 23
                      },
                      "start": {
                        "column": 23,
                        "line": 23
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      518,
                      519
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 23
                      },
                      "start": {
                        "column": 27,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    514,
                    519
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 23
                    },
                    "start": {
                      "column": 23,
                      "line": 23
                    }
                  }
                },
                "range": [
                  502,
                  520
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 23
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                525,
                544
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
                        536,
                        537
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      }
                    },
                    "init": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          540,
                          541
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 24
                          },
                          "start": {
                            "column": 19,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          542,
                          543
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 24
                          },
                          "start": {
                            "column": 21,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        540,
                        543
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 24
                        },
                        "start": {
                          "column": 19,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      536,
                      543
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
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
                  532,
                  544
                ],
                "loc": {
                  "end": {
                    "column": 23,
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
                  "column": 23,
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
                584,
                603
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
                      "name": "b",
                      "optional": false,
                      "range": [
                        595,
                        596
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 25
                        },
                        "start": {
                          "column": 15,
                          "line": 25
                        }
                      }
                    },
                    "init": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          599,
                          600
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 25
                          },
                          "start": {
                            "column": 19,
                            "line": 25
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          601,
                          602
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 25
                          },
                          "start": {
                            "column": 21,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        599,
                        602
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 25
                        },
                        "start": {
                          "column": 19,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      595,
                      602
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  591,
                  603
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 25
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
                  "column": 23,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                614,
                633
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
                      "range": [
                        625,
                        626
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 26
                        },
                        "start": {
                          "column": 15,
                          "line": 26
                        }
                      }
                    },
                    "init": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          629,
                          630
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 26
                          },
                          "start": {
                            "column": 19,
                            "line": 26
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          631,
                          632
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 26
                          },
                          "start": {
                            "column": 21,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        629,
                        632
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 26
                        },
                        "start": {
                          "column": 19,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      625,
                      632
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 26
                      },
                      "start": {
                        "column": 15,
                        "line": 26
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  621,
                  633
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 26
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                644,
                665
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
                      "name": "g",
                      "optional": false,
                      "range": [
                        655,
                        656
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 27
                        },
                        "start": {
                          "column": 15,
                          "line": 27
                        }
                      }
                    },
                    "init": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "range": [
                            659,
                            660
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 27
                            },
                            "start": {
                              "column": 19,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            661,
                            662
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 27
                            },
                            "start": {
                              "column": 21,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          659,
                          662
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 27
                          },
                          "start": {
                            "column": 19,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "range": [
                          663,
                          664
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 27
                          },
                          "start": {
                            "column": 23,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        659,
                        664
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 27
                        },
                        "start": {
                          "column": 19,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      655,
                      664
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 27
                      },
                      "start": {
                        "column": 15,
                        "line": 27
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  651,
                  665
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 27
                  },
                  "start": {
                    "column": 11,
                    "line": 27
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                676,
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
                      "name": "d",
                      "optional": false,
                      "range": [
                        687,
                        688
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 28
                        },
                        "start": {
                          "column": 15,
                          "line": 28
                        }
                      }
                    },
                    "init": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          691,
                          692
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 28
                          },
                          "start": {
                            "column": 19,
                            "line": 28
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "range": [
                          693,
                          694
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 28
                          },
                          "start": {
                            "column": 21,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        691,
                        694
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 28
                        },
                        "start": {
                          "column": 19,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      687,
                      694
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 28
                      },
                      "start": {
                        "column": 15,
                        "line": 28
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  683,
                  695
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 28
                  },
                  "start": {
                    "column": 11,
                    "line": 28
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            }
          ],
          "range": [
            346,
            733
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 29
            },
            "start": {
              "column": 18,
              "line": 16
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "TSQualifiedName",
          "range": [
            342,
            345
          ],
          "left": {
            "type": "Identifier",
            "range": [
              342,
              343
            ],
            "decorators": [],
            "name": "M",
            "optional": false,
            "loc": {
              "end": {
                "column": 15,
                "line": 16
              },
              "start": {
                "column": 14,
                "line": 16
              }
            }
          },
          "right": {
            "type": "Identifier",
            "range": [
              344,
              345
            ],
            "decorators": [],
            "name": "P",
            "optional": false,
            "loc": {
              "end": {
                "column": 17,
                "line": 16
              },
              "start": {
                "column": 16,
                "line": 16
              }
            }
          },
          "loc": {
            "end": {
              "column": 17,
              "line": 16
            },
            "start": {
              "column": 14,
              "line": 16
            }
          }
        },
        "kind": "module",
        "range": [
          335,
          733
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        735,
        1070
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
                759,
                782
              ],
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    779,
                    782
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 32
                    },
                    "start": {
                      "column": 24,
                      "line": 32
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    775,
                    776
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 32
                    },
                    "start": {
                      "column": 20,
                      "line": 32
                    }
                  }
                },
                "params": [],
                "range": [
                  766,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 32
                  },
                  "start": {
                    "column": 11,
                    "line": 32
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                787,
                805
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    802,
                    805
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 33
                    },
                    "start": {
                      "column": 19,
                      "line": 33
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
                    800,
                    801
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 33
                    },
                    "start": {
                      "column": 17,
                      "line": 33
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  794,
                  805
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 33
                  },
                  "start": {
                    "column": 11,
                    "line": 33
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                810,
                897
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
                        836,
                        859
                      ],
                      "attributes": [],
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            856,
                            859
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 35
                            },
                            "start": {
                              "column": 28,
                              "line": 35
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "range": [
                            852,
                            853
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 35
                            },
                            "start": {
                              "column": 24,
                              "line": 35
                            }
                          }
                        },
                        "params": [],
                        "range": [
                          843,
                          859
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 35
                          },
                          "start": {
                            "column": 15,
                            "line": 35
                          }
                        }
                      },
                      "exportKind": "value",
                      "source": null,
                      "specifiers": [],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    {
                      "type": "EmptyStatement",
                      "range": [
                        859,
                        860
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 35
                        },
                        "start": {
                          "column": 31,
                          "line": 35
                        }
                      }
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "range": [
                        869,
                        891
                      ],
                      "attributes": [],
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "body": {
                          "type": "TSInterfaceBody",
                          "range": [
                            888,
                            891
                          ],
                          "body": [],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 36
                            },
                            "start": {
                              "column": 27,
                              "line": 36
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
                            886,
                            887
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 36
                            },
                            "start": {
                              "column": 25,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          876,
                          891
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 36
                          },
                          "start": {
                            "column": 15,
                            "line": 36
                          }
                        }
                      },
                      "exportKind": "type",
                      "source": null,
                      "specifiers": [],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 36
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "range": [
                    826,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 37
                    },
                    "start": {
                      "column": 20,
                      "line": 34
                    }
                  }
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "range": [
                    824,
                    825
                  ],
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 34
                    },
                    "start": {
                      "column": 18,
                      "line": 34
                    }
                  }
                },
                "kind": "module",
                "range": [
                  817,
                  897
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 37
                  },
                  "start": {
                    "column": 11,
                    "line": 34
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                902,
                936
              ],
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "body": {
                  "type": "TSInterfaceBody",
                  "range": [
                    933,
                    936
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 38
                    },
                    "start": {
                      "column": 35,
                      "line": 38
                    }
                  }
                },
                "declare": false,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          929,
                          930
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 38
                          },
                          "start": {
                            "column": 31,
                            "line": 38
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          931,
                          932
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 38
                          },
                          "start": {
                            "column": 33,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        929,
                        932
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 38
                        },
                        "start": {
                          "column": 31,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      929,
                      932
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 38
                      },
                      "start": {
                        "column": 31,
                        "line": 38
                      }
                    }
                  }
                ],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    919,
                    920
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 38
                    },
                    "start": {
                      "column": 21,
                      "line": 38
                    }
                  }
                },
                "range": [
                  909,
                  936
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 38
                  },
                  "start": {
                    "column": 11,
                    "line": 38
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                947,
                983
              ],
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "body": {
                  "type": "TSInterfaceBody",
                  "range": [
                    980,
                    983
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 39
                    },
                    "start": {
                      "column": 37,
                      "line": 39
                    }
                  }
                },
                "declare": false,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "range": [
                            974,
                            975
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 39
                            },
                            "start": {
                              "column": 31,
                              "line": 39
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            976,
                            977
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 39
                            },
                            "start": {
                              "column": 33,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          974,
                          977
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 39
                          },
                          "start": {
                            "column": 31,
                            "line": 39
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "range": [
                          978,
                          979
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 39
                          },
                          "start": {
                            "column": 35,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        974,
                        979
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 39
                        },
                        "start": {
                          "column": 31,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      974,
                      979
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 39
                      },
                      "start": {
                        "column": 31,
                        "line": 39
                      }
                    }
                  }
                ],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    964,
                    965
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 39
                    },
                    "start": {
                      "column": 21,
                      "line": 39
                    }
                  }
                },
                "range": [
                  954,
                  983
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 39
                  },
                  "start": {
                    "column": 11,
                    "line": 39
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                994,
                1068
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
                        1020,
                        1056
                      ],
                      "attributes": [],
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "body": {
                          "type": "TSInterfaceBody",
                          "range": [
                            1053,
                            1056
                          ],
                          "body": [],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 41
                            },
                            "start": {
                              "column": 41,
                              "line": 41
                            }
                          }
                        },
                        "declare": false,
                        "extends": [
                          {
                            "type": "TSInterfaceHeritage",
                            "expression": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "M",
                                  "optional": false,
                                  "range": [
                                    1047,
                                    1048
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 41
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "range": [
                                    1049,
                                    1050
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 41
                                    }
                                  }
                                },
                                "range": [
                                  1047,
                                  1050
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 41
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "range": [
                                  1051,
                                  1052
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 41
                                  }
                                }
                              },
                              "range": [
                                1047,
                                1052
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 41
                                },
                                "start": {
                                  "column": 35,
                                  "line": 41
                                }
                              }
                            },
                            "range": [
                              1047,
                              1052
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 41
                              },
                              "start": {
                                "column": 35,
                                "line": 41
                              }
                            }
                          }
                        ],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "range": [
                            1037,
                            1038
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 41
                            },
                            "start": {
                              "column": 25,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          1027,
                          1056
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 41
                          },
                          "start": {
                            "column": 15,
                            "line": 41
                          }
                        }
                      },
                      "exportKind": "type",
                      "source": null,
                      "specifiers": [],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    }
                  ],
                  "range": [
                    1010,
                    1068
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 42
                    },
                    "start": {
                      "column": 20,
                      "line": 40
                    }
                  }
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "range": [
                    1008,
                    1009
                  ],
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 40
                    },
                    "start": {
                      "column": 18,
                      "line": 40
                    }
                  }
                },
                "kind": "module",
                "range": [
                  1001,
                  1068
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 11,
                    "line": 40
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            }
          ],
          "range": [
            753,
            1070
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 43
            },
            "start": {
              "column": 18,
              "line": 31
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "TSQualifiedName",
          "range": [
            749,
            752
          ],
          "left": {
            "type": "Identifier",
            "range": [
              749,
              750
            ],
            "decorators": [],
            "name": "M",
            "optional": false,
            "loc": {
              "end": {
                "column": 15,
                "line": 31
              },
              "start": {
                "column": 14,
                "line": 31
              }
            }
          },
          "right": {
            "type": "Identifier",
            "range": [
              751,
              752
            ],
            "decorators": [],
            "name": "Q",
            "optional": false,
            "loc": {
              "end": {
                "column": 17,
                "line": 31
              },
              "start": {
                "column": 16,
                "line": 31
              }
            }
          },
          "loc": {
            "end": {
              "column": 17,
              "line": 31
            },
            "start": {
              "column": 14,
              "line": 31
            }
          }
        },
        "kind": "module",
        "range": [
          742,
          1070
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 7,
            "line": 31
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
