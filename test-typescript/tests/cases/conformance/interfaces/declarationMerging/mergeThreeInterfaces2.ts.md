__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    106,
    1082
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
              122,
              169
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  141,
                  169
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
                        151,
                        154
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
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
                          "column": 19,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      },
                      "range": [
                        154,
                        162
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          156,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 6
                          },
                          "start": {
                            "column": 13,
                            "line": 6
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
                        "column": 20,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  139,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                129,
                169
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    },
                    "range": [
                      180,
                      183
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          182,
                          183
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
                        182,
                        183
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
                    }
                  },
                  "range": [
                    179,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": null,
                "range": [
                  179,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              175,
              184
            ],
            "loc": {
              "end": {
                "column": 13,
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
                  "name": "r1",
                  "optional": false,
                  "range": [
                    193,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      198,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      200,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    198,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  193,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              189,
              204
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  "name": "r2",
                  "optional": false,
                  "range": [
                    213,
                    215
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      218,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 11
                      },
                      "start": {
                        "column": 13,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      220,
                      223
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
                  },
                  "range": [
                    218,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                },
                "range": [
                  213,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              209,
              224
            ],
            "loc": {
              "end": {
                "column": 19,
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
          116,
          226
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          113,
          115
        ],
        "decorators": [],
        "name": "M2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "kind": "module",
      "range": [
        106,
        226
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 4
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
              244,
              291
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  263,
                  291
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        273,
                        276
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
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
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 11,
                          "line": 16
                        }
                      },
                      "range": [
                        276,
                        284
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          278,
                          284
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 16
                          },
                          "start": {
                            "column": 13,
                            "line": 16
                          }
                        }
                      }
                    },
                    "range": [
                      273,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 23,
                    "line": 15
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  261,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 15
                  },
                  "start": {
                    "column": 21,
                    "line": 15
                  }
                }
              },
              "range": [
                251,
                291
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              297,
              345
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  316,
                  345
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "range": [
                        326,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
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
                          "column": 20,
                          "line": 20
                        },
                        "start": {
                          "column": 11,
                          "line": 20
                        }
                      },
                      "range": [
                        329,
                        338
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          331,
                          338
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 20
                          },
                          "start": {
                            "column": 13,
                            "line": 20
                          }
                        }
                      }
                    },
                    "range": [
                      326,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 23,
                    "line": 19
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  314,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 19
                  },
                  "start": {
                    "column": 21,
                    "line": 19
                  }
                }
              },
              "range": [
                304,
                345
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 19
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 23
                      },
                      "start": {
                        "column": 9,
                        "line": 23
                      }
                    },
                    "range": [
                      356,
                      359
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          358,
                          359
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 23
                          },
                          "start": {
                            "column": 11,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        358,
                        359
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 23
                        },
                        "start": {
                          "column": 11,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    355,
                    359
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": null,
                "range": [
                  355,
                  359
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              351,
              360
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                  "name": "r1",
                  "optional": false,
                  "range": [
                    369,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      374,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 24
                      },
                      "start": {
                        "column": 13,
                        "line": 24
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      376,
                      379
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
                  "range": [
                    374,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  }
                },
                "range": [
                  369,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              365,
              380
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 24
              },
              "start": {
                "column": 4,
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
                  "name": "r2",
                  "optional": false,
                  "range": [
                    389,
                    391
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      394,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 25
                      },
                      "start": {
                        "column": 13,
                        "line": 25
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      396,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    394,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 25
                    },
                    "start": {
                      "column": 13,
                      "line": 25
                    }
                  }
                },
                "range": [
                  389,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              385,
              400
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
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
                  "name": "r3",
                  "optional": false,
                  "range": [
                    409,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      414,
                      415
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "range": [
                      416,
                      419
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 26
                      },
                      "start": {
                        "column": 15,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    414,
                    419
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 26
                    },
                    "start": {
                      "column": 13,
                      "line": 26
                    }
                  }
                },
                "range": [
                  409,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              405,
              420
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          238,
          423
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          235,
          237
        ],
        "decorators": [],
        "name": "M2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 14
          }
        }
      },
      "kind": "module",
      "range": [
        228,
        423
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 14
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
              527,
              682
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
                      554,
                      609
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "body": {
                        "type": "TSInterfaceBody",
                        "range": [
                          573,
                          609
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
                                587,
                                590
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 33
                                },
                                "start": {
                                  "column": 12,
                                  "line": 33
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
                                  "column": 23,
                                  "line": 33
                                },
                                "start": {
                                  "column": 15,
                                  "line": 33
                                }
                              },
                              "range": [
                                590,
                                598
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  592,
                                  598
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 33
                                  }
                                }
                              }
                            },
                            "range": [
                              587,
                              599
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 33
                              },
                              "start": {
                                "column": 12,
                                "line": 33
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 34
                          },
                          "start": {
                            "column": 27,
                            "line": 32
                          }
                        }
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          571,
                          572
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 32
                          },
                          "start": {
                            "column": 25,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        561,
                        609
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 34
                        },
                        "start": {
                          "column": 15,
                          "line": 32
                        }
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 32
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 36
                              },
                              "start": {
                                "column": 13,
                                "line": 36
                              }
                            },
                            "range": [
                              624,
                              627
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  626,
                                  627
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 36
                                  }
                                }
                              },
                              "range": [
                                626,
                                627
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 36
                                },
                                "start": {
                                  "column": 15,
                                  "line": 36
                                }
                              }
                            }
                          },
                          "range": [
                            623,
                            627
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 36
                            },
                            "start": {
                              "column": 12,
                              "line": 36
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          623,
                          627
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 36
                          },
                          "start": {
                            "column": 12,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      619,
                      628
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
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
                          "name": "r1",
                          "optional": false,
                          "range": [
                            641,
                            643
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 37
                            },
                            "start": {
                              "column": 12,
                              "line": 37
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              646,
                              647
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 37
                              },
                              "start": {
                                "column": 17,
                                "line": 37
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              648,
                              651
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 37
                              },
                              "start": {
                                "column": 19,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            646,
                            651
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 37
                            },
                            "start": {
                              "column": 17,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          641,
                          651
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 37
                          },
                          "start": {
                            "column": 12,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      637,
                      652
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
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
                          "name": "r2",
                          "optional": false,
                          "range": [
                            665,
                            667
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 38
                            },
                            "start": {
                              "column": 12,
                              "line": 38
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              670,
                              671
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 38
                              },
                              "start": {
                                "column": 17,
                                "line": 38
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              672,
                              675
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 38
                              },
                              "start": {
                                "column": 19,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            670,
                            675
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 38
                            },
                            "start": {
                              "column": 17,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          665,
                          675
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 38
                          },
                          "start": {
                            "column": 12,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      661,
                      676
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
                      }
                    }
                  }
                ],
                "range": [
                  544,
                  682
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 21,
                    "line": 31
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  541,
                  543
                ],
                "decorators": [],
                "name": "M3",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 31
                  },
                  "start": {
                    "column": 18,
                    "line": 31
                  }
                }
              },
              "kind": "module",
              "range": [
                534,
                682
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 39
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          521,
          684
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 10,
            "line": 30
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          518,
          520
        ],
        "decorators": [],
        "name": "M2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 30
          },
          "start": {
            "column": 7,
            "line": 30
          }
        }
      },
      "kind": "module",
      "range": [
        511,
        684
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 30
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
              702,
              881
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
                      729,
                      784
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "body": {
                        "type": "TSInterfaceBody",
                        "range": [
                          748,
                          784
                        ],
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "range": [
                                762,
                                765
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 45
                                },
                                "start": {
                                  "column": 12,
                                  "line": 45
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
                                  "column": 23,
                                  "line": 45
                                },
                                "start": {
                                  "column": 15,
                                  "line": 45
                                }
                              },
                              "range": [
                                765,
                                773
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  767,
                                  773
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 45
                                  }
                                }
                              }
                            },
                            "range": [
                              762,
                              774
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 45
                              },
                              "start": {
                                "column": 12,
                                "line": 45
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 46
                          },
                          "start": {
                            "column": 27,
                            "line": 44
                          }
                        }
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          746,
                          747
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 44
                          },
                          "start": {
                            "column": 25,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        736,
                        784
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 46
                        },
                        "start": {
                          "column": 15,
                          "line": 44
                        }
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 44
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 48
                              },
                              "start": {
                                "column": 13,
                                "line": 48
                              }
                            },
                            "range": [
                              799,
                              802
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  801,
                                  802
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 48
                                  }
                                }
                              },
                              "range": [
                                801,
                                802
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 48
                                },
                                "start": {
                                  "column": 15,
                                  "line": 48
                                }
                              }
                            }
                          },
                          "range": [
                            798,
                            802
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 48
                            },
                            "start": {
                              "column": 12,
                              "line": 48
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          798,
                          802
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 48
                          },
                          "start": {
                            "column": 12,
                            "line": 48
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      794,
                      803
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
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
                          "name": "r1",
                          "optional": false,
                          "range": [
                            817,
                            819
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 50
                            },
                            "start": {
                              "column": 12,
                              "line": 50
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              822,
                              823
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 50
                              },
                              "start": {
                                "column": 17,
                                "line": 50
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              824,
                              827
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 50
                              },
                              "start": {
                                "column": 19,
                                "line": 50
                              }
                            }
                          },
                          "range": [
                            822,
                            827
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 50
                            },
                            "start": {
                              "column": 17,
                              "line": 50
                            }
                          }
                        },
                        "range": [
                          817,
                          827
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 50
                          },
                          "start": {
                            "column": 12,
                            "line": 50
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      813,
                      827
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
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
                          "name": "r2",
                          "optional": false,
                          "range": [
                            840,
                            842
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 51
                            },
                            "start": {
                              "column": 12,
                              "line": 51
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              845,
                              846
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 51
                              },
                              "start": {
                                "column": 17,
                                "line": 51
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              847,
                              850
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 51
                              },
                              "start": {
                                "column": 19,
                                "line": 51
                              }
                            }
                          },
                          "range": [
                            845,
                            850
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 51
                            },
                            "start": {
                              "column": 17,
                              "line": 51
                            }
                          }
                        },
                        "range": [
                          840,
                          850
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 51
                          },
                          "start": {
                            "column": 12,
                            "line": 51
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      836,
                      851
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
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
                          "name": "r3",
                          "optional": false,
                          "range": [
                            864,
                            866
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 52
                            },
                            "start": {
                              "column": 12,
                              "line": 52
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              869,
                              870
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 52
                              },
                              "start": {
                                "column": 17,
                                "line": 52
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "baz",
                            "optional": false,
                            "range": [
                              871,
                              874
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 52
                              },
                              "start": {
                                "column": 19,
                                "line": 52
                              }
                            }
                          },
                          "range": [
                            869,
                            874
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 52
                            },
                            "start": {
                              "column": 17,
                              "line": 52
                            }
                          }
                        },
                        "range": [
                          864,
                          874
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 52
                          },
                          "start": {
                            "column": 12,
                            "line": 52
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      860,
                      875
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
                      }
                    }
                  }
                ],
                "range": [
                  719,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 53
                  },
                  "start": {
                    "column": 21,
                    "line": 43
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  716,
                  718
                ],
                "decorators": [],
                "name": "M3",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 43
                  },
                  "start": {
                    "column": 18,
                    "line": 43
                  }
                }
              },
              "kind": "module",
              "range": [
                709,
                881
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 53
                },
                "start": {
                  "column": 11,
                  "line": 43
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          }
        ],
        "range": [
          696,
          883
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 10,
            "line": 42
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          693,
          695
        ],
        "decorators": [],
        "name": "M2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 42
          },
          "start": {
            "column": 7,
            "line": 42
          }
        }
      },
      "kind": "module",
      "range": [
        686,
        883
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 42
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
              901,
              1080
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
                      928,
                      984
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "body": {
                        "type": "TSInterfaceBody",
                        "range": [
                          947,
                          984
                        ],
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "baz",
                              "optional": false,
                              "range": [
                                961,
                                964
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 59
                                },
                                "start": {
                                  "column": 12,
                                  "line": 59
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
                                  "line": 59
                                },
                                "start": {
                                  "column": 15,
                                  "line": 59
                                }
                              },
                              "range": [
                                964,
                                973
                              ],
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "range": [
                                  966,
                                  973
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 59
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 59
                                  }
                                }
                              }
                            },
                            "range": [
                              961,
                              974
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 59
                              },
                              "start": {
                                "column": 12,
                                "line": 59
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 60
                          },
                          "start": {
                            "column": 27,
                            "line": 58
                          }
                        }
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          945,
                          946
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 58
                          },
                          "start": {
                            "column": 25,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        935,
                        984
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 60
                        },
                        "start": {
                          "column": 15,
                          "line": 58
                        }
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 58
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 62
                              },
                              "start": {
                                "column": 13,
                                "line": 62
                              }
                            },
                            "range": [
                              999,
                              1002
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  1001,
                                  1002
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 62
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 62
                                  }
                                }
                              },
                              "range": [
                                1001,
                                1002
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 62
                                },
                                "start": {
                                  "column": 15,
                                  "line": 62
                                }
                              }
                            }
                          },
                          "range": [
                            998,
                            1002
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 62
                            },
                            "start": {
                              "column": 12,
                              "line": 62
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          998,
                          1002
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 62
                          },
                          "start": {
                            "column": 12,
                            "line": 62
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      994,
                      1003
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 62
                      },
                      "start": {
                        "column": 8,
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
                          "name": "r1",
                          "optional": false,
                          "range": [
                            1016,
                            1018
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 63
                            },
                            "start": {
                              "column": 12,
                              "line": 63
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1021,
                              1022
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 63
                              },
                              "start": {
                                "column": 17,
                                "line": 63
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              1023,
                              1026
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 63
                              },
                              "start": {
                                "column": 19,
                                "line": 63
                              }
                            }
                          },
                          "range": [
                            1021,
                            1026
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 63
                            },
                            "start": {
                              "column": 17,
                              "line": 63
                            }
                          }
                        },
                        "range": [
                          1016,
                          1026
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 63
                          },
                          "start": {
                            "column": 12,
                            "line": 63
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1012,
                      1026
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 63
                      },
                      "start": {
                        "column": 8,
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
                          "name": "r2",
                          "optional": false,
                          "range": [
                            1039,
                            1041
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 64
                            },
                            "start": {
                              "column": 12,
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              1044,
                              1045
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 64
                              },
                              "start": {
                                "column": 17,
                                "line": 64
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              1046,
                              1049
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 64
                              },
                              "start": {
                                "column": 19,
                                "line": 64
                              }
                            }
                          },
                          "range": [
                            1044,
                            1049
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 64
                            },
                            "start": {
                              "column": 17,
                              "line": 64
                            }
                          }
                        },
                        "range": [
                          1039,
                          1049
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 64
                          },
                          "start": {
                            "column": 12,
                            "line": 64
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1035,
                      1050
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 64
                      },
                      "start": {
                        "column": 8,
                        "line": 64
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
                          "name": "r3",
                          "optional": false,
                          "range": [
                            1063,
                            1065
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 65
                            },
                            "start": {
                              "column": 12,
                              "line": 65
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1068,
                              1069
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 65
                              },
                              "start": {
                                "column": 17,
                                "line": 65
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "baz",
                            "optional": false,
                            "range": [
                              1070,
                              1073
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 65
                              },
                              "start": {
                                "column": 19,
                                "line": 65
                              }
                            }
                          },
                          "range": [
                            1068,
                            1073
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 65
                            },
                            "start": {
                              "column": 17,
                              "line": 65
                            }
                          }
                        },
                        "range": [
                          1063,
                          1073
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 65
                          },
                          "start": {
                            "column": 12,
                            "line": 65
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1059,
                      1074
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 65
                      }
                    }
                  }
                ],
                "range": [
                  918,
                  1080
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 66
                  },
                  "start": {
                    "column": 21,
                    "line": 57
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  915,
                  917
                ],
                "decorators": [],
                "name": "M3",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 57
                  },
                  "start": {
                    "column": 18,
                    "line": 57
                  }
                }
              },
              "kind": "module",
              "range": [
                908,
                1080
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 66
                },
                "start": {
                  "column": 11,
                  "line": 57
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          }
        ],
        "range": [
          895,
          1082
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 10,
            "line": 56
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          892,
          894
        ],
        "decorators": [],
        "name": "M2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 56
          },
          "start": {
            "column": 7,
            "line": 56
          }
        }
      },
      "kind": "module",
      "range": [
        885,
        1082
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 67
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
