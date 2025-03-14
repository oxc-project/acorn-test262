__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    106,
    751
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
              203
            ],
            "loc": {
              "end": {
                "column": 18,
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
                    212,
                    214
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
                      217,
                      218
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
                      219,
                      222
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
                    217,
                    222
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
                  212,
                  222
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
              208,
              223
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
          225
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
        225
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
              243,
              290
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  262,
                  290
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
                        272,
                        275
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
                        275,
                        283
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          277,
                          283
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
                      272,
                      284
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
                  260,
                  261
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
                250,
                290
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
                        "line": 19
                      },
                      "start": {
                        "column": 9,
                        "line": 19
                      }
                    },
                    "range": [
                      301,
                      304
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          303,
                          304
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 19
                          },
                          "start": {
                            "column": 11,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        303,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 19
                        },
                        "start": {
                          "column": 11,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    300,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": null,
                "range": [
                  300,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              296,
              305
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 19
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
                  "name": "r1",
                  "optional": false,
                  "range": [
                    314,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
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
                      319,
                      320
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      321,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 15,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    319,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 20
                    },
                    "start": {
                      "column": 13,
                      "line": 20
                    }
                  }
                },
                "range": [
                  314,
                  324
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              310,
              324
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                    333,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
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
                      338,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 21
                      },
                      "start": {
                        "column": 13,
                        "line": 21
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
                      340,
                      343
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 21
                      },
                      "start": {
                        "column": 15,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    338,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 21
                    },
                    "start": {
                      "column": 13,
                      "line": 21
                    }
                  }
                },
                "range": [
                  333,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              329,
              344
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          237,
          346
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
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
          234,
          236
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
        227,
        346
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
              421,
              575
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
                      448,
                      503
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "body": {
                        "type": "TSInterfaceBody",
                        "range": [
                          467,
                          503
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
                                481,
                                484
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 28
                                },
                                "start": {
                                  "column": 12,
                                  "line": 28
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
                                  "line": 28
                                },
                                "start": {
                                  "column": 15,
                                  "line": 28
                                }
                              },
                              "range": [
                                484,
                                492
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  486,
                                  492
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 28
                                  }
                                }
                              }
                            },
                            "range": [
                              481,
                              493
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 28
                              },
                              "start": {
                                "column": 12,
                                "line": 28
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 29
                          },
                          "start": {
                            "column": 27,
                            "line": 27
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
                          465,
                          466
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 27
                          },
                          "start": {
                            "column": 25,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        455,
                        503
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 29
                        },
                        "start": {
                          "column": 15,
                          "line": 27
                        }
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 27
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
                                "line": 31
                              },
                              "start": {
                                "column": 13,
                                "line": 31
                              }
                            },
                            "range": [
                              518,
                              521
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  520,
                                  521
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 31
                                  }
                                }
                              },
                              "range": [
                                520,
                                521
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 31
                                },
                                "start": {
                                  "column": 15,
                                  "line": 31
                                }
                              }
                            }
                          },
                          "range": [
                            517,
                            521
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 31
                            },
                            "start": {
                              "column": 12,
                              "line": 31
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          517,
                          521
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 31
                          },
                          "start": {
                            "column": 12,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      513,
                      522
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
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
                            535,
                            537
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 32
                            },
                            "start": {
                              "column": 12,
                              "line": 32
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
                              540,
                              541
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 32
                              },
                              "start": {
                                "column": 17,
                                "line": 32
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
                              542,
                              545
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 32
                              },
                              "start": {
                                "column": 19,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            540,
                            545
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 32
                            },
                            "start": {
                              "column": 17,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          535,
                          545
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 32
                          },
                          "start": {
                            "column": 12,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      531,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 32
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
                          "name": "r2",
                          "optional": false,
                          "range": [
                            558,
                            560
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 33
                            },
                            "start": {
                              "column": 12,
                              "line": 33
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
                              563,
                              564
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
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              565,
                              568
                            ],
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
                          "range": [
                            563,
                            568
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 33
                            },
                            "start": {
                              "column": 17,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          558,
                          568
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 33
                          },
                          "start": {
                            "column": 12,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      554,
                      569
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  438,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 34
                  },
                  "start": {
                    "column": 21,
                    "line": 26
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  435,
                  437
                ],
                "decorators": [],
                "name": "M3",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 18,
                    "line": 26
                  }
                }
              },
              "kind": "module",
              "range": [
                428,
                575
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
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
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          415,
          577
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 10,
            "line": 25
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          412,
          414
        ],
        "decorators": [],
        "name": "M2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 25
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "kind": "module",
      "range": [
        405,
        577
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 25
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
              595,
              749
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
                      622,
                      677
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "body": {
                        "type": "TSInterfaceBody",
                        "range": [
                          641,
                          677
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
                                655,
                                658
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 40
                                },
                                "start": {
                                  "column": 12,
                                  "line": 40
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
                                  "line": 40
                                },
                                "start": {
                                  "column": 15,
                                  "line": 40
                                }
                              },
                              "range": [
                                658,
                                666
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  660,
                                  666
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 40
                                  }
                                }
                              }
                            },
                            "range": [
                              655,
                              667
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 40
                              },
                              "start": {
                                "column": 12,
                                "line": 40
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 41
                          },
                          "start": {
                            "column": 27,
                            "line": 39
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
                          639,
                          640
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 39
                          },
                          "start": {
                            "column": 25,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        629,
                        677
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 41
                        },
                        "start": {
                          "column": 15,
                          "line": 39
                        }
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 39
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
                                "line": 43
                              },
                              "start": {
                                "column": 13,
                                "line": 43
                              }
                            },
                            "range": [
                              692,
                              695
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  694,
                                  695
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 43
                                  }
                                }
                              },
                              "range": [
                                694,
                                695
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 43
                                },
                                "start": {
                                  "column": 15,
                                  "line": 43
                                }
                              }
                            }
                          },
                          "range": [
                            691,
                            695
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 43
                            },
                            "start": {
                              "column": 12,
                              "line": 43
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          691,
                          695
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 43
                          },
                          "start": {
                            "column": 12,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      687,
                      696
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
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
                          "name": "r1",
                          "optional": false,
                          "range": [
                            709,
                            711
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 44
                            },
                            "start": {
                              "column": 12,
                              "line": 44
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
                              714,
                              715
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 44
                              },
                              "start": {
                                "column": 17,
                                "line": 44
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
                              716,
                              719
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 44
                              },
                              "start": {
                                "column": 19,
                                "line": 44
                              }
                            }
                          },
                          "range": [
                            714,
                            719
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 44
                            },
                            "start": {
                              "column": 17,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          709,
                          719
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 44
                          },
                          "start": {
                            "column": 12,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      705,
                      719
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 44
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
                          "name": "r2",
                          "optional": false,
                          "range": [
                            732,
                            734
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 45
                            },
                            "start": {
                              "column": 12,
                              "line": 45
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
                              737,
                              738
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 45
                              },
                              "start": {
                                "column": 17,
                                "line": 45
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
                              739,
                              742
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 45
                              },
                              "start": {
                                "column": 19,
                                "line": 45
                              }
                            }
                          },
                          "range": [
                            737,
                            742
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 45
                            },
                            "start": {
                              "column": 17,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          732,
                          742
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 45
                          },
                          "start": {
                            "column": 12,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      728,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  }
                ],
                "range": [
                  612,
                  749
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 21,
                    "line": 38
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  609,
                  611
                ],
                "decorators": [],
                "name": "M3",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 38
                  },
                  "start": {
                    "column": 18,
                    "line": 38
                  }
                }
              },
              "kind": "module",
              "range": [
                602,
                749
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          589,
          751
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 10,
            "line": 37
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          586,
          588
        ],
        "decorators": [],
        "name": "M2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 37
          },
          "start": {
            "column": 7,
            "line": 37
          }
        }
      },
      "kind": "module",
      "range": [
        579,
        751
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 47
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
