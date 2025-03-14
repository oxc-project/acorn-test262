__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    292
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          40,
          43
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 19,
            "line": 4
          },
          "start": {
            "column": 16,
            "line": 4
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          38,
          39
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 4
          },
          "start": {
            "column": 14,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        24,
        43
      ],
      "loc": {
        "end": {
          "column": 19,
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
          70,
          73
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 26,
            "line": 5
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          58,
          59
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
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          68,
          69
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 5
          },
          "start": {
            "column": 24,
            "line": 5
          }
        }
      },
      "range": [
        44,
        73
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          104,
          200
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "optional": true,
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "descendants",
                      "optional": false,
                      "range": [
                        112,
                        123
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 9
                        },
                        "start": {
                          "column": 6,
                          "line": 9
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
                      "name": "descendants",
                      "optional": false,
                      "range": [
                        112,
                        123
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 9
                        },
                        "start": {
                          "column": 6,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      112,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 9
                      },
                      "start": {
                        "column": 6,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "read",
                      "optional": false,
                      "range": [
                        125,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 9
                        },
                        "start": {
                          "column": 19,
                          "line": 9
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
                      "name": "read",
                      "optional": false,
                      "range": [
                        125,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 9
                        },
                        "start": {
                          "column": 19,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      125,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 12
                    },
                    "start": {
                      "column": 25,
                      "line": 9
                    }
                  },
                  "range": [
                    131,
                    191
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "descendants",
                          "optional": false,
                          "range": [
                            143,
                            154
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
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 10
                            },
                            "start": {
                              "column": 20,
                              "line": 10
                            }
                          },
                          "range": [
                            155,
                            164
                          ],
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "range": [
                              157,
                              164
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 10
                              },
                              "start": {
                                "column": 22,
                                "line": 10
                              }
                            }
                          }
                        },
                        "range": [
                          143,
                          165
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "read",
                          "optional": false,
                          "range": [
                            174,
                            178
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 11
                            }
                          }
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 11
                            },
                            "start": {
                              "column": 13,
                              "line": 11
                            }
                          },
                          "range": [
                            179,
                            184
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              181,
                              184
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
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
                          174,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 11
                          },
                          "start": {
                            "column": 8,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      133,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 12
                      },
                      "start": {
                        "column": 27,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  111,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 5,
                    "line": 9
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              },
              "range": [
                192,
                197
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  194,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              110,
              198
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 12,
            "line": 8
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
          102,
          103
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "range": [
        92,
        200
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          232,
          261
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
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
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                239,
                247
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  241,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              238,
              248
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                249,
                250
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
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
                  "column": 24,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              },
              "range": [
                250,
                258
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  252,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              249,
              259
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 18
              },
              "start": {
                "column": 15,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 14,
            "line": 17
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          228,
          231
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 17
          },
          "start": {
            "column": 10,
            "line": 17
          }
        }
      },
      "range": [
        218,
        261
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        262,
        291
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      275,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      275,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    275,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 20
                    },
                    "start": {
                      "column": 13,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      281,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 20
                      },
                      "start": {
                        "column": 19,
                        "line": 20
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    278,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  }
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 20
                  },
                  "start": {
                    "column": 23,
                    "line": 20
                  }
                },
                "range": [
                  285,
                  290
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      287,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 20
                      },
                      "start": {
                        "column": 25,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    287,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 20
                    },
                    "start": {
                      "column": 25,
                      "line": 20
                    }
                  }
                }
              },
              "range": [
                273,
                290
              ],
              "loc": {
                "end": {
                  "column": 28,
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
              273,
              290
            ],
            "loc": {
              "end": {
                "column": 28,
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
          269,
          291
        ],
        "loc": {
          "end": {
            "column": 29,
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
          "column": 29,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 21
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
    292
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                54,
                57
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 9,
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
                52,
                53
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              46,
              57
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 1,
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
                77,
                80
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                65,
                66
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                75,
                76
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              }
            },
            "range": [
              59,
              80
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 5
              },
              "start": {
                "column": 1,
                "line": 5
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                113,
                196
              ],
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": true,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "descendants",
                            "optional": false,
                            "range": [
                              119,
                              130
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 9
                              },
                              "start": {
                                "column": 4,
                                "line": 9
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
                            "name": "descendants",
                            "optional": false,
                            "range": [
                              119,
                              130
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 9
                              },
                              "start": {
                                "column": 4,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            119,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 9
                            },
                            "start": {
                              "column": 4,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "read",
                            "optional": false,
                            "range": [
                              132,
                              136
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 9
                              },
                              "start": {
                                "column": 17,
                                "line": 9
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
                            "name": "read",
                            "optional": false,
                            "range": [
                              132,
                              136
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 9
                              },
                              "start": {
                                "column": 17,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            132,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 12
                          },
                          "start": {
                            "column": 23,
                            "line": 9
                          }
                        },
                        "range": [
                          138,
                          186
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "descendants",
                                "optional": false,
                                "range": [
                                  145,
                                  156
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 10
                                  }
                                }
                              },
                              "optional": true,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 10
                                  }
                                },
                                "range": [
                                  157,
                                  166
                                ],
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "range": [
                                    159,
                                    166
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 10
                                    }
                                  }
                                }
                              },
                              "range": [
                                145,
                                167
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 10
                                },
                                "start": {
                                  "column": 3,
                                  "line": 10
                                }
                              }
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "read",
                                "optional": false,
                                "range": [
                                  171,
                                  175
                                ],
                                "loc": {
                                  "end": {
                                    "column": 7,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 11
                                  }
                                }
                              },
                              "optional": true,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 11
                                  }
                                },
                                "range": [
                                  176,
                                  181
                                ],
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    178,
                                    181
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 11
                                    }
                                  }
                                }
                              },
                              "range": [
                                171,
                                182
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 11
                                },
                                "start": {
                                  "column": 3,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "range": [
                            140,
                            186
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 12
                            },
                            "start": {
                              "column": 25,
                              "line": 9
                            }
                          }
                        }
                      },
                      "range": [
                        118,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 12
                        },
                        "start": {
                          "column": 3,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 12
                      },
                      "start": {
                        "column": 4,
                        "line": 12
                      }
                    },
                    "range": [
                      187,
                      192
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        189,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 6,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    117,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 12
                    },
                    "start": {
                      "column": 2,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 13
                },
                "start": {
                  "column": 13,
                  "line": 8
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
                111,
                112
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
              101,
              196
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 13
              },
              "start": {
                "column": 1,
                "line": 8
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                230,
                258
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      234,
                      235
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
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 18
                      },
                      "start": {
                        "column": 3,
                        "line": 18
                      }
                    },
                    "range": [
                      235,
                      243
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        237,
                        243
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 18
                        },
                        "start": {
                          "column": 5,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    234,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 18
                    },
                    "start": {
                      "column": 2,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      245,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 18
                      },
                      "start": {
                        "column": 13,
                        "line": 18
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
                        "column": 22,
                        "line": 18
                      },
                      "start": {
                        "column": 14,
                        "line": 18
                      }
                    },
                    "range": [
                      246,
                      254
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        248,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 18
                        },
                        "start": {
                          "column": 16,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    245,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 18
                    },
                    "start": {
                      "column": 13,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 17
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                226,
                229
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "range": [
              216,
              258
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 19
              },
              "start": {
                "column": 1,
                "line": 17
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              260,
              289
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            273,
                            274
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 20
                            },
                            "start": {
                              "column": 14,
                              "line": 20
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            273,
                            274
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 20
                            },
                            "start": {
                              "column": 14,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          273,
                          274
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 20
                          },
                          "start": {
                            "column": 14,
                            "line": 20
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            279,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 20
                            },
                            "start": {
                              "column": 20,
                              "line": 20
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "range": [
                          276,
                          280
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 20
                          },
                          "start": {
                            "column": 17,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 20
                        },
                        "start": {
                          "column": 24,
                          "line": 20
                        }
                      },
                      "range": [
                        283,
                        288
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "range": [
                            285,
                            288
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 20
                            },
                            "start": {
                              "column": 26,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          285,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 20
                          },
                          "start": {
                            "column": 26,
                            "line": 20
                          }
                        }
                      }
                    },
                    "range": [
                      271,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 20
                      },
                      "start": {
                        "column": 12,
                        "line": 20
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    271,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 20
                    },
                    "start": {
                      "column": 12,
                      "line": 20
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                267,
                289
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 30,
                "line": 20
              },
              "start": {
                "column": 1,
                "line": 20
              }
            }
          }
        ],
        "range": [
          31,
          291
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 20,
            "line": 2
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          29,
          30
        ],
        "decorators": [],
        "name": "N",
        "optional": false,
        "loc": {
          "end": {
            "column": 19,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "kind": "namespace",
      "range": [
        11,
        291
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
      "line": 22
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
    726
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        66
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
          "name": "__extends",
          "optional": false,
          "range": [
            24,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 35,
                  "line": 1
                }
              },
              "range": [
                35,
                45
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    37,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 1
                    },
                    "start": {
                      "column": 37,
                      "line": 1
                    }
                  }
                },
                "range": [
                  37,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 1
                  },
                  "start": {
                    "column": 37,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              34,
              45
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 34,
                "line": 1
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 1
                },
                "start": {
                  "column": 48,
                  "line": 1
                }
              },
              "range": [
                48,
                58
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    50,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 1
                    },
                    "start": {
                      "column": 50,
                      "line": 1
                    }
                  }
                },
                "range": [
                  50,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              47,
              58
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 47,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 65,
              "line": 1
            },
            "start": {
              "column": 59,
              "line": 1
            }
          },
          "range": [
            59,
            65
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              61,
              65
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 1
              },
              "start": {
                "column": 61,
                "line": 1
              }
            }
          }
        },
        "range": [
          7,
          66
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 1
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
          "column": 66,
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
        67,
        132
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
          "name": "__assign",
          "optional": false,
          "range": [
            91,
            99
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 2
            },
            "start": {
              "column": 24,
              "line": 2
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 34,
                  "line": 2
                }
              },
              "range": [
                101,
                106
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  103,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 2
                  },
                  "start": {
                    "column": 36,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              100,
              106
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 33,
                "line": 2
              }
            }
          },
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "sources",
              "optional": false,
              "range": [
                111,
                118
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 2
                },
                "start": {
                  "column": 44,
                  "line": 2
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 2
                },
                "start": {
                  "column": 51,
                  "line": 2
                }
              },
              "range": [
                118,
                125
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    120,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 2
                    },
                    "start": {
                      "column": 53,
                      "line": 2
                    }
                  }
                },
                "range": [
                  120,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 2
                  },
                  "start": {
                    "column": 53,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              108,
              125
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 2
              },
              "start": {
                "column": 41,
                "line": 2
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 64,
              "line": 2
            },
            "start": {
              "column": 59,
              "line": 2
            }
          },
          "range": [
            126,
            131
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              128,
              131
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 2
              },
              "start": {
                "column": 61,
                "line": 2
              }
            }
          }
        },
        "range": [
          74,
          132
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 65,
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
        133,
        202
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
          "name": "__rest",
          "optional": false,
          "range": [
            157,
            163
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              },
              "range": [
                165,
                170
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  167,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              164,
              170
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "propertyNames",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 62,
                  "line": 3
                },
                "start": {
                  "column": 52,
                  "line": 3
                }
              },
              "range": [
                185,
                195
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    187,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 3
                    },
                    "start": {
                      "column": 54,
                      "line": 3
                    }
                  }
                },
                "range": [
                  187,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 3
                  },
                  "start": {
                    "column": 54,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              172,
              195
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 3
              },
              "start": {
                "column": 39,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 68,
              "line": 3
            },
            "start": {
              "column": 63,
              "line": 3
            }
          },
          "range": [
            196,
            201
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              198,
              201
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 3
              },
              "start": {
                "column": 65,
                "line": 3
              }
            }
          }
        },
        "range": [
          140,
          202
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 69,
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
        203,
        315
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
          "name": "__decorate",
          "optional": false,
          "range": [
            227,
            237
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 4
            },
            "start": {
              "column": 24,
              "line": 4
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "decorators",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 4
                },
                "start": {
                  "column": 45,
                  "line": 4
                }
              },
              "range": [
                248,
                260
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "range": [
                      250,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 4
                      },
                      "start": {
                        "column": 47,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    250,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 4
                    },
                    "start": {
                      "column": 47,
                      "line": 4
                    }
                  }
                },
                "range": [
                  250,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 4
                  },
                  "start": {
                    "column": 47,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              238,
              260
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 4
              },
              "start": {
                "column": 35,
                "line": 4
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 70,
                  "line": 4
                },
                "start": {
                  "column": 65,
                  "line": 4
                }
              },
              "range": [
                268,
                273
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  270,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 4
                  },
                  "start": {
                    "column": 67,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              262,
              273
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 4
              },
              "start": {
                "column": 59,
                "line": 4
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 93,
                  "line": 4
                },
                "start": {
                  "column": 76,
                  "line": 4
                }
              },
              "range": [
                279,
                296
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      281,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 4
                      },
                      "start": {
                        "column": 78,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "range": [
                      290,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 4
                      },
                      "start": {
                        "column": 87,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  281,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 4
                  },
                  "start": {
                    "column": 78,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              275,
              296
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 4
              },
              "start": {
                "column": 72,
                "line": 4
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "desc",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 105,
                  "line": 4
                },
                "start": {
                  "column": 100,
                  "line": 4
                }
              },
              "range": [
                303,
                308
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  305,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 105,
                    "line": 4
                  },
                  "start": {
                    "column": 102,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              298,
              308
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 4
              },
              "start": {
                "column": 95,
                "line": 4
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 111,
              "line": 4
            },
            "start": {
              "column": 106,
              "line": 4
            }
          },
          "range": [
            309,
            314
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              311,
              314
            ],
            "loc": {
              "end": {
                "column": 111,
                "line": 4
              },
              "start": {
                "column": 108,
                "line": 4
              }
            }
          }
        },
        "range": [
          210,
          315
        ],
        "loc": {
          "end": {
            "column": 112,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 112,
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
        316,
        399
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
          "name": "__param",
          "optional": false,
          "range": [
            340,
            347
          ],
          "loc": {
            "end": {
              "column": 31,
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
            "name": "paramIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 5
                },
                "start": {
                  "column": 42,
                  "line": 5
                }
              },
              "range": [
                358,
                366
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  360,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 5
                  },
                  "start": {
                    "column": 44,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              348,
              366
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 32,
                "line": 5
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 71,
                  "line": 5
                },
                "start": {
                  "column": 61,
                  "line": 5
                }
              },
              "range": [
                377,
                387
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    379,
                    387
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 5
                    },
                    "start": {
                      "column": 63,
                      "line": 5
                    }
                  }
                },
                "range": [
                  379,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 5
                  },
                  "start": {
                    "column": 63,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              368,
              387
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 5
              },
              "start": {
                "column": 52,
                "line": 5
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 82,
              "line": 5
            },
            "start": {
              "column": 72,
              "line": 5
            }
          },
          "range": [
            388,
            398
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "range": [
                390,
                398
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 5
                },
                "start": {
                  "column": 74,
                  "line": 5
                }
              }
            },
            "range": [
              390,
              398
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 5
              },
              "start": {
                "column": 74,
                "line": 5
              }
            }
          }
        },
        "range": [
          323,
          399
        ],
        "loc": {
          "end": {
            "column": 83,
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
          "column": 83,
          "line": 5
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
        400,
        483
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
          "name": "__metadata",
          "optional": false,
          "range": [
            424,
            434
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 6
            },
            "start": {
              "column": 24,
              "line": 6
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "metadataKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 6
                },
                "start": {
                  "column": 46,
                  "line": 6
                }
              },
              "range": [
                446,
                451
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  448,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 6
                  },
                  "start": {
                    "column": 48,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              435,
              451
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 6
              },
              "start": {
                "column": 35,
                "line": 6
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "metadataValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 71,
                  "line": 6
                },
                "start": {
                  "column": 66,
                  "line": 6
                }
              },
              "range": [
                466,
                471
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  468,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 6
                  },
                  "start": {
                    "column": 68,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              453,
              471
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 6
              },
              "start": {
                "column": 53,
                "line": 6
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 82,
              "line": 6
            },
            "start": {
              "column": 72,
              "line": 6
            }
          },
          "range": [
            472,
            482
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "range": [
                474,
                482
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 6
                },
                "start": {
                  "column": 74,
                  "line": 6
                }
              }
            },
            "range": [
              474,
              482
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 6
              },
              "start": {
                "column": 74,
                "line": 6
              }
            }
          }
        },
        "range": [
          407,
          483
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 83,
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
        484,
        588
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
          "name": "__awaiter",
          "optional": false,
          "range": [
            508,
            517
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 7
                },
                "start": {
                  "column": 41,
                  "line": 7
                }
              },
              "range": [
                525,
                530
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  527,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 7
                  },
                  "start": {
                    "column": 43,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              518,
              530
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 7
              },
              "start": {
                "column": 34,
                "line": 7
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_arguments",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 7
                },
                "start": {
                  "column": 58,
                  "line": 7
                }
              },
              "range": [
                542,
                547
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  544,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 7
                  },
                  "start": {
                    "column": 60,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              532,
              547
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 7
              },
              "start": {
                "column": 48,
                "line": 7
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 76,
                  "line": 7
                },
                "start": {
                  "column": 66,
                  "line": 7
                }
              },
              "range": [
                550,
                560
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    552,
                    560
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 7
                    },
                    "start": {
                      "column": 68,
                      "line": 7
                    }
                  }
                },
                "range": [
                  552,
                  560
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 7
                  },
                  "start": {
                    "column": 68,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              549,
              560
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 7
              },
              "start": {
                "column": 65,
                "line": 7
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 97,
                  "line": 7
                },
                "start": {
                  "column": 87,
                  "line": 7
                }
              },
              "range": [
                571,
                581
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    573,
                    581
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 7
                    },
                    "start": {
                      "column": 89,
                      "line": 7
                    }
                  }
                },
                "range": [
                  573,
                  581
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 7
                  },
                  "start": {
                    "column": 89,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              562,
              581
            ],
            "loc": {
              "end": {
                "column": 97,
                "line": 7
              },
              "start": {
                "column": 78,
                "line": 7
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 103,
              "line": 7
            },
            "start": {
              "column": 98,
              "line": 7
            }
          },
          "range": [
            582,
            587
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              584,
              587
            ],
            "loc": {
              "end": {
                "column": 103,
                "line": 7
              },
              "start": {
                "column": 100,
                "line": 7
              }
            }
          }
        },
        "range": [
          491,
          588
        ],
        "loc": {
          "end": {
            "column": 104,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 104,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        589,
        660
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
          "name": "__generator",
          "optional": false,
          "range": [
            613,
            624
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 8
            },
            "start": {
              "column": 24,
              "line": 8
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 8
                },
                "start": {
                  "column": 43,
                  "line": 8
                }
              },
              "range": [
                632,
                637
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  634,
                  637
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 8
                  },
                  "start": {
                    "column": 45,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              625,
              637
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 8
              },
              "start": {
                "column": 36,
                "line": 8
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "body",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 64,
                  "line": 8
                },
                "start": {
                  "column": 54,
                  "line": 8
                }
              },
              "range": [
                643,
                653
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    645,
                    653
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 8
                    },
                    "start": {
                      "column": 56,
                      "line": 8
                    }
                  }
                },
                "range": [
                  645,
                  653
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 8
                  },
                  "start": {
                    "column": 56,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              639,
              653
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 8
              },
              "start": {
                "column": 50,
                "line": 8
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 70,
              "line": 8
            },
            "start": {
              "column": 65,
              "line": 8
            }
          },
          "range": [
            654,
            659
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              656,
              659
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 8
              },
              "start": {
                "column": 67,
                "line": 8
              }
            }
          }
        },
        "range": [
          596,
          660
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 71,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        661,
        726
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
          "name": "__exportStar",
          "optional": false,
          "range": [
            685,
            697
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 9
            },
            "start": {
              "column": 24,
              "line": 9
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 38,
                  "line": 9
                }
              },
              "range": [
                699,
                704
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  701,
                  704
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 9
                  },
                  "start": {
                    "column": 40,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              698,
              704
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 9
              },
              "start": {
                "column": 37,
                "line": 9
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 9
                },
                "start": {
                  "column": 52,
                  "line": 9
                }
              },
              "range": [
                713,
                718
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  715,
                  718
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 9
                  },
                  "start": {
                    "column": 54,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              706,
              718
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 9
              },
              "start": {
                "column": 45,
                "line": 9
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 64,
              "line": 9
            },
            "start": {
              "column": 58,
              "line": 9
            }
          },
          "range": [
            719,
            725
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              721,
              725
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 9
              },
              "start": {
                "column": 60,
                "line": 9
              }
            }
          }
        },
        "range": [
          668,
          726
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 65,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 65,
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
