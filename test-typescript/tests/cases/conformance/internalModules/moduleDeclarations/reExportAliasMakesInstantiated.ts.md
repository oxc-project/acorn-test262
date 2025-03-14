__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    388
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 13,
                        "line": 2
                      }
                    },
                    "range": [
                      36,
                      44
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        38,
                        44
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
                  },
                  "range": [
                    31,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": null,
                "range": [
                  31,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              25,
              45
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "range": [
                    57,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 11,
                      "line": 3
                    }
                  }
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "range": [
                    57,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 11,
                      "line": 3
                    }
                  }
                },
                "range": [
                  57,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              48,
              65
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "range": [
          21,
          67
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 21,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          15,
          20
        ],
        "decorators": [],
        "name": "pack1",
        "optional": false,
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        67
      ],
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "range": [
                100,
                105
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "pack1",
                "optional": false,
                "range": [
                  108,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "test1",
                "optional": false,
                "range": [
                  114,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 23,
                    "line": 6
                  }
                }
              },
              "range": [
                108,
                119
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 6
                }
              }
            },
            "range": [
              93,
              120
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "range": [
                    132,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "range": [
                    132,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                },
                "range": [
                  132,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              123,
              140
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          }
        ],
        "range": [
          89,
          142
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 21,
            "line": 5
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          83,
          88
        ],
        "decorators": [],
        "name": "pack2",
        "optional": false,
        "loc": {
          "end": {
            "column": 20,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "kind": "module",
      "range": [
        68,
        142
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
        143,
        177
      ],
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "range": [
            157,
            162
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 9
            },
            "start": {
              "column": 14,
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
            "name": "pack2",
            "optional": false,
            "range": [
              165,
              170
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 22,
                "line": 9
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "test1",
            "optional": false,
            "range": [
              171,
              176
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 9
              },
              "start": {
                "column": 28,
                "line": 9
              }
            }
          },
          "range": [
            165,
            176
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 9
            },
            "start": {
              "column": 22,
              "line": 9
            }
          }
        },
        "range": [
          150,
          177
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 34,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "range": [
                208,
                213
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 12
                },
                "start": {
                  "column": 7,
                  "line": 12
                }
              }
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                216,
                222
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "range": [
              203,
              223
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "range": [
                    235,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  }
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "range": [
                    235,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  }
                },
                "range": [
                  235,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              226,
              243
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          }
        ],
        "range": [
          199,
          245
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 20,
            "line": 11
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          194,
          198
        ],
        "decorators": [],
        "name": "mod1",
        "optional": false,
        "loc": {
          "end": {
            "column": 19,
            "line": 11
          },
          "start": {
            "column": 15,
            "line": 11
          }
        }
      },
      "kind": "module",
      "range": [
        179,
        245
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "range": [
                277,
                282
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mod1",
                "optional": false,
                "range": [
                  285,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 16
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "test1",
                "optional": false,
                "range": [
                  290,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 16
                  },
                  "start": {
                    "column": 22,
                    "line": 16
                  }
                }
              },
              "range": [
                285,
                295
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
                }
              }
            },
            "range": [
              270,
              296
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "range": [
                    308,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 17
                    },
                    "start": {
                      "column": 11,
                      "line": 17
                    }
                  }
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "range": [
                    308,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 17
                    },
                    "start": {
                      "column": 11,
                      "line": 17
                    }
                  }
                },
                "range": [
                  308,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              299,
              316
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 17
              },
              "start": {
                "column": 2,
                "line": 17
              }
            }
          }
        ],
        "range": [
          266,
          318
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 20,
            "line": 15
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          261,
          265
        ],
        "decorators": [],
        "name": "mod2",
        "optional": false,
        "loc": {
          "end": {
            "column": 19,
            "line": 15
          },
          "start": {
            "column": 15,
            "line": 15
          }
        }
      },
      "kind": "module",
      "range": [
        246,
        318
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
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
            "name": "test2",
            "optional": false,
            "range": [
              325,
              330
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod2",
            "optional": false,
            "range": [
              333,
              337
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 19
              },
              "start": {
                "column": 14,
                "line": 19
              }
            }
          },
          "range": [
            325,
            337
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        319,
        338
      ],
      "loc": {
        "end": {
          "column": 19,
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
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
