__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    46
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
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                44
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "range": [
                        25,
                        29
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 1
                        },
                        "start": {
                          "column": 25,
                          "line": 1
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 1
                        },
                        "start": {
                          "column": 29,
                          "line": 1
                        }
                      },
                      "range": [
                        29,
                        36
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "range": [
                            31,
                            34
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 1
                            },
                            "start": {
                              "column": 31,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          31,
                          36
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 1
                          },
                          "start": {
                            "column": 31,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      22,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 1
                      },
                      "start": {
                        "column": 22,
                        "line": 1
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 1
                    },
                    "start": {
                      "column": 38,
                      "line": 1
                    }
                  },
                  "range": [
                    38,
                    44
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      41,
                      44
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 1
                      },
                      "start": {
                        "column": 41,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  21,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            44
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        45
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 1
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
      "line": 2
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
    248
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              26,
              96
            ],
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "readFileSync",
                "optional": false,
                "range": [
                  42,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 2
                      },
                      "start": {
                        "column": 37,
                        "line": 2
                      }
                    },
                    "range": [
                      59,
                      67
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        61,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 2
                        },
                        "start": {
                          "column": 39,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    55,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 2
                    },
                    "start": {
                      "column": 33,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "encoding",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 2
                      },
                      "start": {
                        "column": 56,
                        "line": 2
                      }
                    },
                    "range": [
                      78,
                      86
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        80,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 2
                        },
                        "start": {
                          "column": 58,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    69,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 2
                    },
                    "start": {
                      "column": 47,
                      "line": 2
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 2
                  },
                  "start": {
                    "column": 65,
                    "line": 2
                  }
                },
                "range": [
                  87,
                  95
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    89,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 2
                    },
                    "start": {
                      "column": 67,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                33,
                96
              ],
              "loc": {
                "end": {
                  "column": 74,
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
                "column": 74,
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
          20,
          98
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"fs\"",
        "value": "fs",
        "range": [
          15,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        98
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
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fs",
              "optional": false,
              "range": [
                134,
                136
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "raw": "\"fs\"",
                "value": "fs",
                "range": [
                  147,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 5
                  }
                }
              },
              "range": [
                139,
                152
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "range": [
              127,
              153
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
                    189,
                    214
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
                          "name": "sep",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 7
                              },
                              "start": {
                                "column": 24,
                                "line": 7
                              }
                            },
                            "range": [
                              205,
                              213
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                207,
                                213
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
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
                            202,
                            213
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 7
                            },
                            "start": {
                              "column": 21,
                              "line": 7
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          202,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 7
                          },
                          "start": {
                            "column": 21,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      196,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 33,
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
                179,
                220
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                174,
                178
              ],
              "decorators": [],
              "name": "path",
              "optional": false,
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            },
            "kind": "namespace",
            "range": [
              164,
              220
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "path",
              "optional": false,
              "range": [
                234,
                238
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
                }
              }
            },
            "range": [
              225,
              239
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          121,
          247
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 22,
            "line": 4
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"path\"",
        "value": "path",
        "range": [
          114,
          120
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 4
          },
          "start": {
            "column": 15,
            "line": 4
          }
        }
      },
      "range": [
        99,
        247
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
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
    101
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./a\"",
        "value": "./a",
        "range": [
          15,
          20
        ],
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
      "specifiers": [],
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_",
        "optional": false,
        "range": [
          29,
          30
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./a\"",
          "value": "./a",
          "range": [
            41,
            46
          ],
          "loc": {
            "end": {
              "column": 24,
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
          47
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 2
          },
          "start": {
            "column": 11,
            "line": 2
          }
        }
      },
      "range": [
        22,
        48
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          77,
          79
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "range": [
        68,
        80
      ],
      "loc": {
        "end": {
          "column": 12,
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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        90,
        100
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    22
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        21
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
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "\"a\"",
              "value": "a",
              "range": [
                17,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
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
          "column": 21,
          "line": 1
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
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
