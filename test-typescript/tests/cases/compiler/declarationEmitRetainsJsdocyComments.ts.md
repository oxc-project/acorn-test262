__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    33,
    595
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        33,
        279
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
                46,
                49
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              155,
                              158
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 11
                              },
                              "start": {
                                "column": 8,
                                "line": 11
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "range": [
                                175,
                                177
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 11
                                },
                                "start": {
                                  "column": 28,
                                  "line": 11
                                }
                              }
                            },
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 11
                                    }
                                  },
                                  "range": [
                                    162,
                                    170
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      164,
                                      170
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 11
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  161,
                                  170
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 11
                                  }
                                }
                              }
                            ],
                            "range": [
                              160,
                              177
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 11
                              },
                              "start": {
                                "column": 13,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            155,
                            177
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar2",
                            "optional": false,
                            "range": [
                              252,
                              256
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 16
                              },
                              "start": {
                                "column": 8,
                                "line": 16
                              }
                            }
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "range": [
                              256,
                              270
                            ],
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "range": [
                                268,
                                270
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 16
                                },
                                "start": {
                                  "column": 24,
                                  "line": 16
                                }
                              }
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 16
                                    }
                                  },
                                  "range": [
                                    258,
                                    266
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      260,
                                      266
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 16
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  257,
                                  266
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 16
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 16
                              },
                              "start": {
                                "column": 12,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            252,
                            270
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 16
                            },
                            "start": {
                              "column": 8,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        80,
                        277
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 17
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      73,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 17
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  67,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 18
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 5
                      },
                      "start": {
                        "column": 21,
                        "line": 5
                      }
                    },
                    "range": [
                      54,
                      62
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        56,
                        62
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 5
                        },
                        "start": {
                          "column": 23,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    53,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 5
                    },
                    "start": {
                      "column": 20,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                52,
                279
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 18
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "range": [
              46,
              279
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          40,
          279
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
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
          "line": 18
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
        281,
        378
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            298,
            378
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  354,
                  357
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
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
                  357,
                  376
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    369,
                    376
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 26
                    },
                    "start": {
                      "column": 19,
                      "line": 25
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 25
                        },
                        "start": {
                          "column": 9,
                          "line": 25
                        }
                      },
                      "range": [
                        359,
                        367
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          361,
                          367
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 25
                          },
                          "start": {
                            "column": 11,
                            "line": 25
                          }
                        }
                      }
                    },
                    "range": [
                      358,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 7,
                    "line": 25
                  }
                }
              },
              "range": [
                354,
                376
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 27
            },
            "start": {
              "column": 17,
              "line": 20
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            294,
            297
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 20
            },
            "start": {
              "column": 13,
              "line": 20
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          288,
          378
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
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
          "column": 1,
          "line": 27
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
        380,
        454
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "range": [
                      427,
                      437
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 33
                      },
                      "start": {
                        "column": 4,
                        "line": 33
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "range": [
                      427,
                      437
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 33
                      },
                      "start": {
                        "column": 4,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    427,
                    437
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 33
                    },
                    "start": {
                      "column": 4,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                391,
                439
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  442,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  450,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 34
                  },
                  "start": {
                    "column": 12,
                    "line": 34
                  }
                }
              },
              "range": [
                442,
                453
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              391,
              453
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 34
              },
              "start": {
                "column": 11,
                "line": 29
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          387,
          454
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 34
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
          "column": 16,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 29
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
                495,
                592
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
                      547,
                      557
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "collection",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 41
                          },
                          "start": {
                            "column": 29,
                            "line": 41
                          }
                        },
                        "range": [
                          568,
                          575
                        ],
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "range": [
                              570,
                              573
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 41
                              },
                              "start": {
                                "column": 31,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            570,
                            575
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 41
                            },
                            "start": {
                              "column": 31,
                              "line": 41
                            }
                          }
                        }
                      },
                      "range": [
                        558,
                        575
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 41
                        },
                        "start": {
                          "column": 19,
                          "line": 41
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 41
                      },
                      "start": {
                        "column": 37,
                        "line": 41
                      }
                    },
                    "range": [
                      576,
                      585
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        578,
                        585
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 41
                        },
                        "start": {
                          "column": 39,
                          "line": 41
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    547,
                    586
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 22,
                  "line": 37
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExtFunc",
              "optional": false,
              "range": [
                487,
                494
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 37
                },
                "start": {
                  "column": 14,
                  "line": 37
                }
              }
            },
            "range": [
              477,
              592
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          471,
          594
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 15,
            "line": 36
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
          464,
          470
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 36
          },
          "start": {
            "column": 8,
            "line": 36
          }
        }
      },
      "kind": "global",
      "range": [
        456,
        594
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 44
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
