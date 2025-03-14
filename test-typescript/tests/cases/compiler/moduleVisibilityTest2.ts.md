__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1238
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
              19,
              73
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          69,
                          70
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 2
                          },
                          "start": {
                            "column": 51,
                            "line": 2
                          }
                        }
                      },
                      "operator": "-",
                      "prefix": true,
                      "range": [
                        68,
                        70
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 2
                        },
                        "start": {
                          "column": 50,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      61,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 2
                      },
                      "start": {
                        "column": 43,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  59,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "someExportedOuterFunc",
                "optional": false,
                "range": [
                  35,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              },
              "params": [],
              "range": [
                26,
                73
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 55,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              76,
              173
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
                      108,
                      170
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "\"foo\"",
                              "value": "foo",
                              "range": [
                                162,
                                167
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 5
                                },
                                "start": {
                                  "column": 56,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              155,
                              168
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
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
                          153,
                          170
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 5
                          },
                          "start": {
                            "column": 47,
                            "line": 5
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someExportedOuterInnerFunc",
                        "optional": false,
                        "range": [
                          124,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 5
                          },
                          "start": {
                            "column": 18,
                            "line": 5
                          }
                        }
                      },
                      "params": [],
                      "range": [
                        115,
                        170
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 5
                        },
                        "start": {
                          "column": 9,
                          "line": 5
                        }
                      }
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 5
                      },
                      "start": {
                        "column": 2,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  104,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 6
                  },
                  "start": {
                    "column": 29,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  90,
                  103
                ],
                "decorators": [],
                "name": "OuterInnerMod",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              "kind": "module",
              "range": [
                83,
                173
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 6
              },
              "start": {
                "column": 1,
                "line": 4
              }
            }
          }
        ],
        "range": [
          16,
          175
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
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
          7,
          15
        ],
        "decorators": [],
        "name": "OuterMod",
        "optional": false,
        "loc": {
          "end": {
            "column": 15,
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
        175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
        "name": "OuterInnerAlias",
        "optional": false,
        "range": [
          184,
          199
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 9
          },
          "start": {
            "column": 7,
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
          "name": "OuterMod",
          "optional": false,
          "range": [
            202,
            210
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 9
            },
            "start": {
              "column": 25,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "OuterInnerMod",
          "optional": false,
          "range": [
            211,
            224
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 9
            },
            "start": {
              "column": 34,
              "line": 9
            }
          }
        },
        "range": [
          202,
          224
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 9
          },
          "start": {
            "column": 25,
            "line": 9
          }
        }
      },
      "range": [
        177,
        225
      ],
      "loc": {
        "end": {
          "column": 48,
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
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    260,
                    314
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                310,
                                311
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 14
                                },
                                "start": {
                                  "column": 52,
                                  "line": 14
                                }
                              }
                            },
                            "operator": "-",
                            "prefix": true,
                            "range": [
                              309,
                              311
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 14
                              },
                              "start": {
                                "column": 51,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            302,
                            312
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 14
                            },
                            "start": {
                              "column": 44,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        300,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 14
                        },
                        "start": {
                          "column": 42,
                          "line": 14
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someExportedInnerFunc",
                      "optional": false,
                      "range": [
                        276,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 14
                        },
                        "start": {
                          "column": 18,
                          "line": 14
                        }
                      }
                    },
                    "params": [],
                    "range": [
                      267,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 14
                    },
                    "start": {
                      "column": 2,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                256,
                317
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 15
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                247,
                255
              ],
              "decorators": [],
              "name": "InnerMod",
              "optional": false,
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "kind": "module",
            "range": [
              240,
              317
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 15
              },
              "start": {
                "column": 1,
                "line": 13
              }
            }
          },
          {
            "type": "TSEnumDeclaration",
            "body": {
              "type": "TSEnumBody",
              "range": [
                327,
                346
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
                      331,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 18
                      },
                      "start": {
                        "column": 2,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    331,
                    332
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 18
                    },
                    "start": {
                      "column": 2,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSEnumMember",
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      336,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 19
                      },
                      "start": {
                        "column": 2,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    336,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 19
                    },
                    "start": {
                      "column": 2,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSEnumMember",
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      341,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 20
                      },
                      "start": {
                        "column": 2,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    341,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 20
                    },
                    "start": {
                      "column": 2,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 17
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
                325,
                326
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 17
                },
                "start": {
                  "column": 6,
                  "line": 17
                }
              }
            },
            "range": [
              320,
              346
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 21
              },
              "start": {
                "column": 1,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    353,
                    354
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 23
                    },
                    "start": {
                      "column": 5,
                      "line": 23
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    357,
                    358
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 23
                    },
                    "start": {
                      "column": 9,
                      "line": 23
                    }
                  }
                },
                "range": [
                  353,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 23
                  },
                  "start": {
                    "column": 5,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              349,
              359
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 23
              },
              "start": {
                "column": 1,
                "line": 23
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              361,
              393
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
                    "name": "exported_var",
                    "optional": false,
                    "range": [
                      380,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 24
                      },
                      "start": {
                        "column": 20,
                        "line": 24
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    380,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 24
                    },
                    "start": {
                      "column": 20,
                      "line": 24
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                368,
                393
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 33,
                "line": 24
              },
              "start": {
                "column": 1,
                "line": 24
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
                    400,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 26
                    },
                    "start": {
                      "column": 5,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      404,
                      405
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 26
                      },
                      "start": {
                        "column": 9,
                        "line": 26
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      408,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 26
                      },
                      "start": {
                        "column": 13,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    404,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 26
                    },
                    "start": {
                      "column": 9,
                      "line": 26
                    }
                  }
                },
                "range": [
                  400,
                  409
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 26
                  },
                  "start": {
                    "column": 5,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              396,
              410
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 26
              },
              "start": {
                "column": 1,
                "line": 26
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                426,
                453
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "range": [
                      430,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 30
                      },
                      "start": {
                        "column": 2,
                        "line": 30
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 30
                      },
                      "start": {
                        "column": 14,
                        "line": 30
                      }
                    },
                    "range": [
                      442,
                      449
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        443,
                        449
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 30
                        },
                        "start": {
                          "column": 15,
                          "line": 30
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    430,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 30
                    },
                    "start": {
                      "column": 2,
                      "line": 30
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 31
                },
                "start": {
                  "column": 13,
                  "line": 29
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
                424,
                425
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "range": [
              414,
              453
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 31
              },
              "start": {
                "column": 1,
                "line": 29
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                465,
                480
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      473,
                      474
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 33
                      },
                      "start": {
                        "column": 18,
                        "line": 33
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      477,
                      478
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
                    466,
                    479
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 33
                    },
                    "start": {
                      "column": 11,
                      "line": 33
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 33
                },
                "start": {
                  "column": 10,
                  "line": 33
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                463,
                464
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 33
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              457,
              480
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 33
              },
              "start": {
                "column": 2,
                "line": 33
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              484,
              958
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  512,
                  958
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethodThatCallsAnOuterMethod",
                      "optional": false,
                      "range": [
                        523,
                        555
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 36
                        },
                        "start": {
                          "column": 9,
                          "line": 36
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        555,
                        612
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OuterInnerAlias",
                                  "optional": false,
                                  "range": [
                                    566,
                                    581
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 67,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 36
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedOuterInnerFunc",
                                  "optional": false,
                                  "range": [
                                    582,
                                    608
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 94,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 68,
                                      "line": 36
                                    }
                                  }
                                },
                                "range": [
                                  566,
                                  608
                                ],
                                "loc": {
                                  "end": {
                                    "column": 94,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 36
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                566,
                                610
                              ],
                              "loc": {
                                "end": {
                                  "column": 96,
                                  "line": 36
                                },
                                "start": {
                                  "column": 52,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              559,
                              611
                            ],
                            "loc": {
                              "end": {
                                "column": 97,
                                "line": 36
                              },
                              "start": {
                                "column": 45,
                                "line": 36
                              }
                            }
                          }
                        ],
                        "range": [
                          558,
                          612
                        ],
                        "loc": {
                          "end": {
                            "column": 98,
                            "line": 36
                          },
                          "start": {
                            "column": 44,
                            "line": 36
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
                          "column": 98,
                          "line": 36
                        },
                        "start": {
                          "column": 41,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      516,
                      612
                    ],
                    "loc": {
                      "end": {
                        "column": 98,
                        "line": 36
                      },
                      "start": {
                        "column": 2,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethodThatCallsAnInnerMethod",
                      "optional": false,
                      "range": [
                        622,
                        654
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 37
                        },
                        "start": {
                          "column": 9,
                          "line": 37
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        654,
                        699
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "InnerMod",
                                  "optional": false,
                                  "range": [
                                    665,
                                    673
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 37
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedInnerFunc",
                                  "optional": false,
                                  "range": [
                                    674,
                                    695
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 82,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 61,
                                      "line": 37
                                    }
                                  }
                                },
                                "range": [
                                  665,
                                  695
                                ],
                                "loc": {
                                  "end": {
                                    "column": 82,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 37
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                665,
                                697
                              ],
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 37
                                },
                                "start": {
                                  "column": 52,
                                  "line": 37
                                }
                              }
                            },
                            "range": [
                              658,
                              698
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 37
                              },
                              "start": {
                                "column": 45,
                                "line": 37
                              }
                            }
                          }
                        ],
                        "range": [
                          657,
                          699
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 37
                          },
                          "start": {
                            "column": 44,
                            "line": 37
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
                          "column": 86,
                          "line": 37
                        },
                        "start": {
                          "column": 41,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      615,
                      699
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 37
                      },
                      "start": {
                        "column": 2,
                        "line": 37
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethodThatCallsAnOuterInnerMethod",
                      "optional": false,
                      "range": [
                        709,
                        746
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 38
                        },
                        "start": {
                          "column": 9,
                          "line": 38
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        746,
                        791
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OuterMod",
                                  "optional": false,
                                  "range": [
                                    757,
                                    765
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 65,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 57,
                                      "line": 38
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedOuterFunc",
                                  "optional": false,
                                  "range": [
                                    766,
                                    787
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 87,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 66,
                                      "line": 38
                                    }
                                  }
                                },
                                "range": [
                                  757,
                                  787
                                ],
                                "loc": {
                                  "end": {
                                    "column": 87,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 57,
                                    "line": 38
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                757,
                                789
                              ],
                              "loc": {
                                "end": {
                                  "column": 89,
                                  "line": 38
                                },
                                "start": {
                                  "column": 57,
                                  "line": 38
                                }
                              }
                            },
                            "range": [
                              750,
                              790
                            ],
                            "loc": {
                              "end": {
                                "column": 90,
                                "line": 38
                              },
                              "start": {
                                "column": 50,
                                "line": 38
                              }
                            }
                          }
                        ],
                        "range": [
                          749,
                          791
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 38
                          },
                          "start": {
                            "column": 49,
                            "line": 38
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
                          "column": 91,
                          "line": 38
                        },
                        "start": {
                          "column": 46,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      702,
                      791
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 38
                      },
                      "start": {
                        "column": 2,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethod",
                      "optional": false,
                      "range": [
                        801,
                        811
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 39
                        },
                        "start": {
                          "column": 9,
                          "line": 39
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        811,
                        827
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                823,
                                824
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
                            "range": [
                              816,
                              825
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 39
                              },
                              "start": {
                                "column": 24,
                                "line": 39
                              }
                            }
                          }
                        ],
                        "range": [
                          814,
                          827
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 39
                          },
                          "start": {
                            "column": 22,
                            "line": 39
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
                          "column": 35,
                          "line": 39
                        },
                        "start": {
                          "column": 19,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      794,
                      827
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 39
                      },
                      "start": {
                        "column": 2,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someProp",
                      "optional": false,
                      "range": [
                        837,
                        845
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 40
                        },
                        "start": {
                          "column": 9,
                          "line": 40
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        848,
                        849
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 40
                        },
                        "start": {
                          "column": 20,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      830,
                      850
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 40
                      },
                      "start": {
                        "column": 2,
                        "line": 40
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
                        854,
                        865
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 42
                        },
                        "start": {
                          "column": 2,
                          "line": 42
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
                        865,
                        952
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "raw": "2",
                                    "value": 2,
                                    "range": [
                                      910,
                                      911
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 43
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 43
                                      }
                                    }
                                  },
                                  "range": [
                                    903,
                                    912
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 43
                                    }
                                  }
                                }
                              ],
                              "range": [
                                901,
                                914
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 43
                                },
                                "start": {
                                  "column": 31,
                                  "line": 43
                                }
                              }
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "someInnerFunc",
                              "optional": false,
                              "range": [
                                885,
                                898
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 43
                                },
                                "start": {
                                  "column": 15,
                                  "line": 43
                                }
                              }
                            },
                            "params": [],
                            "range": [
                              876,
                              914
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 43
                              },
                              "start": {
                                "column": 6,
                                "line": 43
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
                                  "name": "someInnerVar",
                                  "optional": false,
                                  "range": [
                                    931,
                                    943
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 44
                                    }
                                  }
                                },
                                "init": {
                                  "type": "Literal",
                                  "raw": "3",
                                  "value": 3,
                                  "range": [
                                    946,
                                    947
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 44
                                    }
                                  }
                                },
                                "range": [
                                  931,
                                  947
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 44
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              927,
                              948
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 44
                              },
                              "start": {
                                "column": 12,
                                "line": 44
                              }
                            }
                          }
                        ],
                        "range": [
                          868,
                          952
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 45
                          },
                          "start": {
                            "column": 16,
                            "line": 42
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
                          "line": 45
                        },
                        "start": {
                          "column": 13,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      854,
                      952
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 45
                      },
                      "start": {
                        "column": 2,
                        "line": 42
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 47
                  },
                  "start": {
                    "column": 30,
                    "line": 35
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
                  497,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 35
                  },
                  "start": {
                    "column": 15,
                    "line": 35
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      510,
                      511
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 35
                      },
                      "start": {
                        "column": 28,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    510,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 35
                    },
                    "start": {
                      "column": 28,
                      "line": 35
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                491,
                958
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 47
                },
                "start": {
                  "column": 9,
                  "line": 35
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 47
              },
              "start": {
                "column": 2,
                "line": 35
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
                  "name": "someModuleVar",
                  "optional": false,
                  "range": [
                    965,
                    978
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 49
                    },
                    "start": {
                      "column": 5,
                      "line": 49
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    981,
                    982
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 49
                    },
                    "start": {
                      "column": 21,
                      "line": 49
                    }
                  }
                },
                "range": [
                  965,
                  982
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 49
                  },
                  "start": {
                    "column": 5,
                    "line": 49
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              961,
              983
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 49
              },
              "start": {
                "column": 1,
                "line": 49
              }
            }
          },
          {
            "type": "FunctionDeclaration",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "5",
                    "value": 5,
                    "range": [
                      1025,
                      1026
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 51
                      },
                      "start": {
                        "column": 40,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1018,
                    1027
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 51
                    },
                    "start": {
                      "column": 33,
                      "line": 51
                    }
                  }
                }
              ],
              "range": [
                1016,
                1028
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 51
                },
                "start": {
                  "column": 31,
                  "line": 51
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "someModuleFunction",
              "optional": false,
              "range": [
                995,
                1013
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 51
                },
                "start": {
                  "column": 10,
                  "line": 51
                }
              }
            },
            "params": [],
            "range": [
              986,
              1028
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 51
              },
              "start": {
                "column": 1,
                "line": 51
              }
            }
          }
        ],
        "range": [
          236,
          1030
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          234,
          235
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "kind": "module",
      "range": [
        227,
        1030
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
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
            "type": "ExportNamedDeclaration",
            "range": [
              1044,
              1061
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
                      1055,
                      1056
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 55
                      },
                      "start": {
                        "column": 12,
                        "line": 55
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1059,
                      1060
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 55
                      },
                      "start": {
                        "column": 16,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1055,
                    1060
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 55
                    },
                    "start": {
                      "column": 12,
                      "line": 55
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1051,
                1061
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 55
                },
                "start": {
                  "column": 8,
                  "line": 55
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 18,
                "line": 55
              },
              "start": {
                "column": 1,
                "line": 55
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1063,
              1086
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
                    "name": "meb",
                    "optional": false,
                    "range": [
                      1074,
                      1077
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 56
                      },
                      "start": {
                        "column": 12,
                        "line": 56
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
                          1080,
                          1081
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 56
                          },
                          "start": {
                            "column": 18,
                            "line": 56
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "range": [
                          1082,
                          1083
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 56
                          },
                          "start": {
                            "column": 20,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1080,
                        1083
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 56
                        },
                        "start": {
                          "column": 18,
                          "line": 56
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        1084,
                        1085
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 56
                        },
                        "start": {
                          "column": 22,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      1080,
                      1085
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 56
                      },
                      "start": {
                        "column": 18,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    1074,
                    1085
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 56
                    },
                    "start": {
                      "column": 12,
                      "line": 56
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1070,
                1086
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 56
                },
                "start": {
                  "column": 8,
                  "line": 56
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 24,
                "line": 56
              },
              "start": {
                "column": 1,
                "line": 56
              }
            }
          }
        ],
        "range": [
          1041,
          1088
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 9,
            "line": 54
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1039,
          1040
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 54
          },
          "start": {
            "column": 7,
            "line": 54
          }
        }
      },
      "kind": "module",
      "range": [
        1032,
        1088
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 54
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
            "name": "cprime",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 59
                },
                "start": {
                  "column": 11,
                  "line": 59
                }
              },
              "range": [
                1101,
                1106
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "range": [
                      1103,
                      1104
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 59
                      },
                      "start": {
                        "column": 13,
                        "line": 59
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      1105,
                      1106
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 59
                      },
                      "start": {
                        "column": 15,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1103,
                    1106
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 59
                    },
                    "start": {
                      "column": 13,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1103,
                  1106
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 59
                  },
                  "start": {
                    "column": 13,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1094,
              1106
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                1114,
                1118
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 59
                },
                "start": {
                  "column": 24,
                  "line": 59
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "range": [
                    1110,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 59
                    },
                    "start": {
                      "column": 20,
                      "line": 59
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    1112,
                    1113
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 59
                    },
                    "start": {
                      "column": 22,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1110,
                  1113
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 59
                  },
                  "start": {
                    "column": 20,
                    "line": 59
                  }
                }
              },
              "range": [
                1110,
                1113
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 59
                },
                "start": {
                  "column": 20,
                  "line": 59
                }
              }
            },
            "range": [
              1109,
              1118
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 59
              },
              "start": {
                "column": 19,
                "line": 59
              }
            }
          },
          "range": [
            1094,
            1118
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 59
            },
            "start": {
              "column": 4,
              "line": 59
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1090,
        1119
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
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
              1125,
              1126
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
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
                "name": "M",
                "optional": false,
                "range": [
                  1133,
                  1134
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 61
                  },
                  "start": {
                    "column": 12,
                    "line": 61
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  1135,
                  1136
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 61
                  },
                  "start": {
                    "column": 14,
                    "line": 61
                  }
                }
              },
              "range": [
                1133,
                1136
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 61
                },
                "start": {
                  "column": 12,
                  "line": 61
                }
              }
            },
            "range": [
              1129,
              1138
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 61
              },
              "start": {
                "column": 8,
                "line": 61
              }
            }
          },
          "range": [
            1125,
            1138
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 61
            },
            "start": {
              "column": 4,
              "line": 61
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1121,
        1139
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
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
            "name": "z",
            "optional": false,
            "range": [
              1144,
              1145
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
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
                1148,
                1149
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 62
                },
                "start": {
                  "column": 8,
                  "line": 62
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
                1150,
                1151
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 62
                },
                "start": {
                  "column": 10,
                  "line": 62
                }
              }
            },
            "range": [
              1148,
              1151
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 62
              },
              "start": {
                "column": 8,
                "line": 62
              }
            }
          },
          "range": [
            1144,
            1151
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 62
            },
            "start": {
              "column": 4,
              "line": 62
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1140,
        1152
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
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
            "name": "alpha",
            "optional": false,
            "range": [
              1157,
              1162
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
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
                  1165,
                  1166
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 63
                  },
                  "start": {
                    "column": 12,
                    "line": 63
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  1167,
                  1168
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 63
                  },
                  "start": {
                    "column": 14,
                    "line": 63
                  }
                }
              },
              "range": [
                1165,
                1168
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 63
                },
                "start": {
                  "column": 12,
                  "line": 63
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1169,
                1170
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 63
                },
                "start": {
                  "column": 16,
                  "line": 63
                }
              }
            },
            "range": [
              1165,
              1170
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 63
              },
              "start": {
                "column": 12,
                "line": 63
              }
            }
          },
          "range": [
            1157,
            1170
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 63
            },
            "start": {
              "column": 4,
              "line": 63
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1153,
        1171
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
            "name": "omega",
            "optional": false,
            "range": [
              1176,
              1181
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
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
                1184,
                1185
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 64
                },
                "start": {
                  "column": 12,
                  "line": 64
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exported_var",
              "optional": false,
              "range": [
                1186,
                1198
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 64
                },
                "start": {
                  "column": 14,
                  "line": 64
                }
              }
            },
            "range": [
              1184,
              1198
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 64
              },
              "start": {
                "column": 12,
                "line": 64
              }
            }
          },
          "range": [
            1176,
            1198
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 64
            },
            "start": {
              "column": 4,
              "line": 64
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1172,
        1199
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              1200,
              1201
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 65
              },
              "start": {
                "column": 0,
                "line": 65
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someMethodThatCallsAnOuterMethod",
            "optional": false,
            "range": [
              1202,
              1234
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 65
              },
              "start": {
                "column": 2,
                "line": 65
              }
            }
          },
          "range": [
            1200,
            1234
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 65
            },
            "start": {
              "column": 0,
              "line": 65
            }
          }
        },
        "optional": false,
        "range": [
          1200,
          1236
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 65
          },
          "start": {
            "column": 0,
            "line": 65
          }
        }
      },
      "range": [
        1200,
        1237
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 66
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
