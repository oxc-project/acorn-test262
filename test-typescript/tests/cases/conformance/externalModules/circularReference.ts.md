__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    212
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          7,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "raw": "'./foo2'",
          "value": "./foo2",
          "range": [
            22,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        },
        "range": [
          14,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
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
        33,
        211
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
                53,
                209
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    69,
                    209
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
                        "name": "m1",
                        "optional": false,
                        "range": [
                          73,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 4,
                            "line": 4
                          },
                          "start": {
                            "column": 2,
                            "line": 4
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
                            "column": 16,
                            "line": 4
                          },
                          "start": {
                            "column": 4,
                            "line": 4
                          }
                        },
                        "range": [
                          75,
                          87
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo2",
                                "optional": false,
                                "range": [
                                  77,
                                  81
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 4
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M1",
                                "optional": false,
                                "range": [
                                  82,
                                  84
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                77,
                                84
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 4
                                },
                                "start": {
                                  "column": 6,
                                  "line": 4
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1",
                              "optional": false,
                              "range": [
                                85,
                                87
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
                            "range": [
                              77,
                              87
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 4
                              },
                              "start": {
                                "column": 6,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            77,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 4
                            },
                            "start": {
                              "column": 6,
                              "line": 4
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        73,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 4
                        },
                        "start": {
                          "column": 2,
                          "line": 4
                        }
                      }
                    },
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
                          91,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 5
                          },
                          "start": {
                            "column": 2,
                            "line": 5
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
                            "column": 11,
                            "line": 5
                          },
                          "start": {
                            "column": 3,
                            "line": 5
                          }
                        },
                        "range": [
                          92,
                          100
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            94,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 5
                            },
                            "start": {
                              "column": 5,
                              "line": 5
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        91,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 5
                        },
                        "start": {
                          "column": 2,
                          "line": 5
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
                          104,
                          115
                        ],
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 6
                          },
                          "start": {
                            "column": 2,
                            "line": 6
                          }
                        }
                      },
                      "kind": "constructor",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          115,
                          206
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      122,
                                      126
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 7,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 3,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m1",
                                    "optional": false,
                                    "range": [
                                      127,
                                      129
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 10,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 8,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    122,
                                    129
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 10,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 7
                                    }
                                  }
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "foo2",
                                        "optional": false,
                                        "range": [
                                          136,
                                          140
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 21,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 7
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "range": [
                                          141,
                                          143
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 22,
                                            "line": 7
                                          }
                                        }
                                      },
                                      "range": [
                                        136,
                                        143
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C1",
                                      "optional": false,
                                      "range": [
                                        144,
                                        146
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      136,
                                      146
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    132,
                                    148
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  122,
                                  148
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                122,
                                149
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 7
                                },
                                "start": {
                                  "column": 3,
                                  "line": 7
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        153,
                                        157
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 7,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 3,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "range": [
                                        158,
                                        160
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 10,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "range": [
                                      153,
                                      160
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 10,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 3,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "range": [
                                      161,
                                      162
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 12,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    153,
                                    162
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 12,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 8
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "10",
                                  "value": 10,
                                  "range": [
                                    165,
                                    167
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  153,
                                  167
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                153,
                                168
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 8
                                },
                                "start": {
                                  "column": 3,
                                  "line": 8
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        178,
                                        182
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 7,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 3,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "range": [
                                        183,
                                        185
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 10,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "range": [
                                      178,
                                      185
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 10,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 3,
                                        "line": 9
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
                                      186,
                                      187
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 12,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    178,
                                    187
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 12,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 9
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "20",
                                  "value": 20,
                                  "range": [
                                    190,
                                    192
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  178,
                                  192
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                178,
                                193
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 9
                                },
                                "start": {
                                  "column": 3,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "range": [
                            117,
                            206
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 10
                            },
                            "start": {
                              "column": 15,
                              "line": 6
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 10
                          },
                          "start": {
                            "column": 13,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        104,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 10
                        },
                        "start": {
                          "column": 2,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 11
                    },
                    "start": {
                      "column": 17,
                      "line": 3
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "range": [
                    66,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 14,
                      "line": 3
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  60,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 11
                },
                "start": {
                  "column": 1,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            50,
            211
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            47,
            49
          ],
          "decorators": [],
          "name": "M1",
          "optional": false,
          "loc": {
            "end": {
              "column": 16,
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
          40,
          211
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
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
          "line": 12
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
      "line": 13
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
    286
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          7,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "raw": "'./foo1'",
          "value": "./foo1",
          "range": [
            22,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        },
        "range": [
          14,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
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
        33,
        285
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
                53,
                283
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    69,
                    283
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
                        "name": "m1",
                        "optional": false,
                        "range": [
                          73,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 4,
                            "line": 4
                          },
                          "start": {
                            "column": 2,
                            "line": 4
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
                            "column": 16,
                            "line": 4
                          },
                          "start": {
                            "column": 4,
                            "line": 4
                          }
                        },
                        "range": [
                          75,
                          87
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo1",
                                "optional": false,
                                "range": [
                                  77,
                                  81
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 4
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M1",
                                "optional": false,
                                "range": [
                                  82,
                                  84
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                77,
                                84
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 4
                                },
                                "start": {
                                  "column": 6,
                                  "line": 4
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1",
                              "optional": false,
                              "range": [
                                85,
                                87
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
                            "range": [
                              77,
                              87
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 4
                              },
                              "start": {
                                "column": 6,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            77,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 4
                            },
                            "start": {
                              "column": 6,
                              "line": 4
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        73,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 4
                        },
                        "start": {
                          "column": 2,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "PropertyDefinition",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          91,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 5
                          },
                          "start": {
                            "column": 2,
                            "line": 5
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
                            "column": 11,
                            "line": 5
                          },
                          "start": {
                            "column": 3,
                            "line": 5
                          }
                        },
                        "range": [
                          92,
                          100
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            94,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 5
                            },
                            "start": {
                              "column": 5,
                              "line": 5
                            }
                          }
                        }
                      },
                      "value": null,
                      "range": [
                        91,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 5
                        },
                        "start": {
                          "column": 2,
                          "line": 5
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
                          103,
                          114
                        ],
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 6
                          },
                          "start": {
                            "column": 2,
                            "line": 6
                          }
                        }
                      },
                      "kind": "constructor",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          114,
                          280
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      121,
                                      125
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 7,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 3,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m1",
                                    "optional": false,
                                    "range": [
                                      126,
                                      128
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 10,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 8,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    121,
                                    128
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 10,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 7
                                    }
                                  }
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "foo1",
                                        "optional": false,
                                        "range": [
                                          135,
                                          139
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 21,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 7
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "range": [
                                          140,
                                          142
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 22,
                                            "line": 7
                                          }
                                        }
                                      },
                                      "range": [
                                        135,
                                        142
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C1",
                                      "optional": false,
                                      "range": [
                                        143,
                                        145
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      135,
                                      145
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    131,
                                    147
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  121,
                                  147
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                121,
                                148
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 7
                                },
                                "start": {
                                  "column": 3,
                                  "line": 7
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        152,
                                        156
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 7,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 3,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "range": [
                                        157,
                                        159
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 10,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "range": [
                                      152,
                                      159
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 10,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 3,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "range": [
                                      160,
                                      161
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 12,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    152,
                                    161
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 12,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 8
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "10",
                                  "value": 10,
                                  "range": [
                                    164,
                                    166
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  152,
                                  166
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                152,
                                167
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 8
                                },
                                "start": {
                                  "column": 3,
                                  "line": 8
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        180,
                                        184
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 7,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 3,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "range": [
                                        185,
                                        187
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 10,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "range": [
                                      180,
                                      187
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 10,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 3,
                                        "line": 9
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
                                      188,
                                      189
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 12,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    180,
                                    189
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 12,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 9
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "20",
                                  "value": 20,
                                  "range": [
                                    192,
                                    194
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  180,
                                  194
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                180,
                                195
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 9
                                },
                                "start": {
                                  "column": 3,
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
                                    "name": "tmp",
                                    "optional": false,
                                    "range": [
                                      210,
                                      213
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 10,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "range": [
                                          220,
                                          222
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 19,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "C1",
                                        "optional": false,
                                        "range": [
                                          223,
                                          225
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "range": [
                                        220,
                                        225
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      216,
                                      227
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    210,
                                    227
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
                                }
                              ],
                              "declare": false,
                              "kind": "var",
                              "range": [
                                206,
                                228
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 11
                                },
                                "start": {
                                  "column": 3,
                                  "line": 11
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "range": [
                                      232,
                                      235
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 6,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 3,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "range": [
                                      236,
                                      237
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 8,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    232,
                                    237
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 8,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 12
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "10",
                                  "value": 10,
                                  "range": [
                                    240,
                                    242
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 12
                                    }
                                  }
                                },
                                "range": [
                                  232,
                                  242
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                232,
                                243
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 12
                                },
                                "start": {
                                  "column": 3,
                                  "line": 12
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "range": [
                                      253,
                                      256
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 6,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 3,
                                        "line": 13
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
                                      257,
                                      258
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 8,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    253,
                                    258
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 8,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 13
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "20",
                                  "value": 20,
                                  "range": [
                                    261,
                                    263
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  253,
                                  263
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                253,
                                264
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 13
                                },
                                "start": {
                                  "column": 3,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "range": [
                            116,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 14
                            },
                            "start": {
                              "column": 15,
                              "line": 6
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 14
                          },
                          "start": {
                            "column": 13,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        103,
                        280
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 14
                        },
                        "start": {
                          "column": 2,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 3
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "range": [
                    66,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 14,
                      "line": 3
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  60,
                  283
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 15
                },
                "start": {
                  "column": 1,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            50,
            285
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            47,
            49
          ],
          "decorators": [],
          "name": "M1",
          "optional": false,
          "loc": {
            "end": {
              "column": 16,
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
          40,
          285
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
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
          "line": 16
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
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
