__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    55,
    1034
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          70,
          86
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
                72,
                75
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
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
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              },
              "range": [
                75,
                83
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  77,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              72,
              84
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          65,
          69
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        55,
        86
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          118,
          134
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
                120,
                123
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
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
                  "column": 44,
                  "line": 4
                },
                "start": {
                  "column": 36,
                  "line": 4
                }
              },
              "range": [
                123,
                131
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  125,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 4
                  },
                  "start": {
                    "column": 38,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              120,
              132
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 33,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 4
          },
          "start": {
            "column": 31,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              113,
              117
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            }
          },
          "range": [
            113,
            117
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 4
            },
            "start": {
              "column": 26,
              "line": 4
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          97,
          104
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        87,
        134
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          170,
          186
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
                172,
                175
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 37,
                  "line": 5
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
                  "column": 48,
                  "line": 5
                },
                "start": {
                  "column": 40,
                  "line": 5
                }
              },
              "range": [
                175,
                183
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  177,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 5
                  },
                  "start": {
                    "column": 42,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              172,
              184
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 5
          },
          "start": {
            "column": 35,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "range": [
              162,
              169
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            }
          },
          "range": [
            162,
            169
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 5
            },
            "start": {
              "column": 27,
              "line": 5
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "range": [
          145,
          153
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        135,
        186
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          196,
          222
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 6,
                      "line": 8
                    }
                  },
                  "range": [
                    204,
                    212
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      206,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  203,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 8
                  },
                  "start": {
                    "column": 5,
                    "line": 8
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              },
              "range": [
                213,
                219
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    215,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 8
                    },
                    "start": {
                      "column": 17,
                      "line": 8
                    }
                  }
                },
                "range": [
                  215,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 17,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              202,
              220
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 8,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          194,
          195
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        188,
        222
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 11
                }
              },
              "range": [
                229,
                232
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    231,
                    232
                  ],
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
                "range": [
                  231,
                  232
                ],
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
              }
            },
            "range": [
              228,
              232
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            228,
            232
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        224,
        233
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              },
              "range": [
                240,
                267
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 13
                            },
                            "start": {
                              "column": 11,
                              "line": 13
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
                                "column": 19,
                                "line": 13
                              },
                              "start": {
                                "column": 13,
                                "line": 13
                              }
                            }
                          }
                        },
                        "range": [
                          245,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 13
                          },
                          "start": {
                            "column": 10,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 13
                        },
                        "start": {
                          "column": 20,
                          "line": 13
                        }
                      },
                      "range": [
                        255,
                        264
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "range": [
                            257,
                            264
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 13
                            },
                            "start": {
                              "column": 22,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          257,
                          264
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 13
                          },
                          "start": {
                            "column": 22,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      244,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 13
                      },
                      "start": {
                        "column": 9,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  242,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              239,
              267
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            239,
            267
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        235,
        267
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            268,
            269
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            272,
            273
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "range": [
          268,
          273
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        268,
        274
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            281,
            282
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 0,
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
            285,
            286
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        "range": [
          281,
          286
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        281,
        287
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 15
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 17
                },
                "start": {
                  "column": 6,
                  "line": 17
                }
              },
              "range": [
                304,
                332
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 17
                            },
                            "start": {
                              "column": 12,
                              "line": 17
                            }
                          },
                          "range": [
                            310,
                            318
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              312,
                              318
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 17
                              },
                              "start": {
                                "column": 14,
                                "line": 17
                              }
                            }
                          }
                        },
                        "range": [
                          309,
                          318
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 17
                          },
                          "start": {
                            "column": 11,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 17
                        },
                        "start": {
                          "column": 21,
                          "line": 17
                        }
                      },
                      "range": [
                        319,
                        329
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "range": [
                            321,
                            329
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 17
                            },
                            "start": {
                              "column": 23,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          321,
                          329
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 17
                          },
                          "start": {
                            "column": 23,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      308,
                      330
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 17
                      },
                      "start": {
                        "column": 10,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  306,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              302,
              332
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            302,
            332
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        298,
        332
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            333,
            334
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "range": [
            337,
            339
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        },
        "range": [
          333,
          339
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        333,
        340
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "range": [
            347,
            349
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            352,
            353
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 19
            },
            "start": {
              "column": 5,
              "line": 19
            }
          }
        },
        "range": [
          347,
          353
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        347,
        354
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
                411,
                442
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 23
                          },
                          "start": {
                            "column": 10,
                            "line": 23
                          }
                        },
                        "range": [
                          423,
                          431
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            425,
                            431
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 23
                            },
                            "start": {
                              "column": 12,
                              "line": 23
                            }
                          }
                        }
                      },
                      "range": [
                        422,
                        431
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 23
                        },
                        "start": {
                          "column": 9,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 23
                      },
                      "start": {
                        "column": 19,
                        "line": 23
                      }
                    },
                    "range": [
                      432,
                      435
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          434,
                          435
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 23
                          },
                          "start": {
                            "column": 21,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        434,
                        435
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 23
                        },
                        "start": {
                          "column": 21,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    421,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 28,
                  "line": 22
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                393,
                394
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 10,
                  "line": 22
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              },
              "range": [
                394,
                410
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "range": [
                        405,
                        409
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 22
                        },
                        "start": {
                          "column": 22,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      405,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 22
                      },
                      "start": {
                        "column": 22,
                        "line": 22
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      395,
                      396
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    395,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                }
              ]
            },
            "range": [
              387,
              442
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                472,
                515
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 27
                          },
                          "start": {
                            "column": 10,
                            "line": 27
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
                              "column": 18,
                              "line": 27
                            },
                            "start": {
                              "column": 12,
                              "line": 27
                            }
                          }
                        }
                      },
                      "range": [
                        483,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 27
                        },
                        "start": {
                          "column": 9,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 27
                      },
                      "start": {
                        "column": 19,
                        "line": 27
                      }
                    },
                    "range": [
                      493,
                      502
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          495,
                          502
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 27
                          },
                          "start": {
                            "column": 21,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        495,
                        502
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 27
                        },
                        "start": {
                          "column": 21,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    482,
                    503
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 28,
                  "line": 26
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
                454,
                455
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 10,
                  "line": 26
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                464,
                465
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 26
                },
                "start": {
                  "column": 20,
                  "line": 26
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                465,
                471
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "range": [
                      466,
                      470
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 26
                      },
                      "start": {
                        "column": 22,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    466,
                    470
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 26
                    },
                    "start": {
                      "column": 22,
                      "line": 26
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 26
                },
                "start": {
                  "column": 21,
                  "line": 26
                }
              }
            },
            "range": [
              448,
              515
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 26
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
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 30
                      },
                      "start": {
                        "column": 10,
                        "line": 30
                      }
                    },
                    "range": [
                      527,
                      554
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 30
                                  }
                                },
                                "range": [
                                  533,
                                  541
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    535,
                                    541
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 30
                                    }
                                  }
                                }
                              },
                              "range": [
                                532,
                                541
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 30
                                },
                                "start": {
                                  "column": 15,
                                  "line": 30
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 30
                              },
                              "start": {
                                "column": 25,
                                "line": 30
                              }
                            },
                            "range": [
                              542,
                              551
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "range": [
                                  544,
                                  551
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                544,
                                551
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 30
                                },
                                "start": {
                                  "column": 27,
                                  "line": 30
                                }
                              }
                            }
                          },
                          "range": [
                            531,
                            552
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 30
                            },
                            "start": {
                              "column": 14,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        529,
                        554
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 30
                        },
                        "start": {
                          "column": 12,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    525,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "init": null,
                "range": [
                  525,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              521,
              555
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 31
                      },
                      "start": {
                        "column": 10,
                        "line": 31
                      }
                    },
                    "range": [
                      566,
                      575
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          569,
                          575
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "range": [
                                570,
                                574
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 31
                                },
                                "start": {
                                  "column": 14,
                                  "line": 31
                                }
                              }
                            },
                            "range": [
                              570,
                              574
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 31
                              },
                              "start": {
                                "column": 14,
                                "line": 31
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 31
                          },
                          "start": {
                            "column": 13,
                            "line": 31
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          568,
                          569
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 31
                          },
                          "start": {
                            "column": 12,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        568,
                        575
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 31
                        },
                        "start": {
                          "column": 12,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    564,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                },
                "init": null,
                "range": [
                  564,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              560,
              576
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "range": [
                  581,
                  583
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "range": [
                  586,
                  588
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 32
                  },
                  "start": {
                    "column": 9,
                    "line": 32
                  }
                }
              },
              "range": [
                581,
                588
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              581,
              589
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "range": [
                  600,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "range": [
                  605,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 33
                  },
                  "start": {
                    "column": 9,
                    "line": 33
                  }
                }
              },
              "range": [
                600,
                607
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "range": [
              600,
              608
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                648,
                692
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 36
                          },
                          "start": {
                            "column": 10,
                            "line": 36
                          }
                        },
                        "range": [
                          660,
                          668
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            662,
                            668
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 36
                            },
                            "start": {
                              "column": 12,
                              "line": 36
                            }
                          }
                        }
                      },
                      "range": [
                        659,
                        668
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 36
                        },
                        "start": {
                          "column": 9,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 36
                      },
                      "start": {
                        "column": 19,
                        "line": 36
                      }
                    },
                    "range": [
                      669,
                      679
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "range": [
                          671,
                          679
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 36
                          },
                          "start": {
                            "column": 21,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        671,
                        679
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 36
                        },
                        "start": {
                          "column": 21,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    658,
                    680
                  ],
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
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 29,
                  "line": 35
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "range": [
                629,
                631
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 35
                },
                "start": {
                  "column": 10,
                  "line": 35
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                640,
                641
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 35
                },
                "start": {
                  "column": 21,
                  "line": 35
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                641,
                647
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "range": [
                      642,
                      646
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 35
                      },
                      "start": {
                        "column": 23,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    642,
                    646
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 35
                    },
                    "start": {
                      "column": 23,
                      "line": 35
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 35
                },
                "start": {
                  "column": 22,
                  "line": 35
                }
              }
            },
            "range": [
              623,
              692
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
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
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 39
                      },
                      "start": {
                        "column": 10,
                        "line": 39
                      }
                    },
                    "range": [
                      704,
                      732
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 39
                                  }
                                },
                                "range": [
                                  710,
                                  718
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    712,
                                    718
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 39
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 39
                                    }
                                  }
                                }
                              },
                              "range": [
                                709,
                                718
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 39
                                },
                                "start": {
                                  "column": 15,
                                  "line": 39
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 39
                              },
                              "start": {
                                "column": 25,
                                "line": 39
                              }
                            },
                            "range": [
                              719,
                              729
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "range": [
                                  721,
                                  729
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 39
                                  }
                                }
                              },
                              "range": [
                                721,
                                729
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 39
                                },
                                "start": {
                                  "column": 27,
                                  "line": 39
                                }
                              }
                            }
                          },
                          "range": [
                            708,
                            730
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 39
                            },
                            "start": {
                              "column": 14,
                              "line": 39
                            }
                          }
                        }
                      ],
                      "range": [
                        706,
                        732
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 39
                        },
                        "start": {
                          "column": 12,
                          "line": 39
                        }
                      }
                    }
                  },
                  "range": [
                    702,
                    732
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                },
                "init": null,
                "range": [
                  702,
                  732
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              698,
              733
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "range": [
                  738,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "range": [
                  743,
                  745
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 40
                  },
                  "start": {
                    "column": 9,
                    "line": 40
                  }
                }
              },
              "range": [
                738,
                745
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "range": [
              738,
              746
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "range": [
                  757,
                  759
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "range": [
                  762,
                  764
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 41
                  },
                  "start": {
                    "column": 9,
                    "line": 41
                  }
                }
              },
              "range": [
                757,
                764
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            "range": [
              757,
              765
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 44
                            },
                            "start": {
                              "column": 14,
                              "line": 44
                            }
                          },
                          "range": [
                            827,
                            854
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 44
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 44
                                        }
                                      },
                                      "range": [
                                        833,
                                        841
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "range": [
                                          835,
                                          841
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 44
                                          },
                                          "start": {
                                            "column": 22,
                                            "line": 44
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      832,
                                      841
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 44
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 44
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 44
                                    }
                                  },
                                  "range": [
                                    842,
                                    851
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "range": [
                                        844,
                                        851
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 44
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 44
                                        }
                                      }
                                    },
                                    "range": [
                                      844,
                                      851
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 44
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 44
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  831,
                                  852
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 44
                                  }
                                }
                              }
                            ],
                            "range": [
                              829,
                              854
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 44
                              },
                              "start": {
                                "column": 16,
                                "line": 44
                              }
                            }
                          }
                        },
                        "range": [
                          825,
                          854
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 44
                          },
                          "start": {
                            "column": 12,
                            "line": 44
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        825,
                        854
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
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
                    821,
                    855
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
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
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 45
                            },
                            "start": {
                              "column": 14,
                              "line": 45
                            }
                          },
                          "range": [
                            870,
                            876
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                873,
                                876
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      874,
                                      875
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 45
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 45
                                      }
                                    }
                                  },
                                  "range": [
                                    874,
                                    875
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 45
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 45
                                },
                                "start": {
                                  "column": 17,
                                  "line": 45
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                872,
                                873
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 45
                                },
                                "start": {
                                  "column": 16,
                                  "line": 45
                                }
                              }
                            },
                            "range": [
                              872,
                              876
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 45
                              },
                              "start": {
                                "column": 16,
                                "line": 45
                              }
                            }
                          }
                        },
                        "range": [
                          868,
                          876
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 45
                          },
                          "start": {
                            "column": 12,
                            "line": 45
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        868,
                        876
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
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
                    864,
                    877
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "range": [
                        886,
                        888
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 46
                        },
                        "start": {
                          "column": 8,
                          "line": 46
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "range": [
                        891,
                        893
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 46
                        },
                        "start": {
                          "column": 13,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      886,
                      893
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    886,
                    894
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "range": [
                        912,
                        914
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 47
                        },
                        "start": {
                          "column": 8,
                          "line": 47
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "range": [
                        917,
                        919
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 47
                        },
                        "start": {
                          "column": 13,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      912,
                      919
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    912,
                    920
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
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
                        "name": "b4",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 49
                            },
                            "start": {
                              "column": 14,
                              "line": 49
                            }
                          },
                          "range": [
                            945,
                            973
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 49
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 49
                                        }
                                      },
                                      "range": [
                                        951,
                                        959
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "range": [
                                          953,
                                          959
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 49
                                          },
                                          "start": {
                                            "column": 22,
                                            "line": 49
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      950,
                                      959
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 49
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 49
                                    }
                                  },
                                  "range": [
                                    960,
                                    970
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "range": [
                                        962,
                                        970
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 39,
                                          "line": 49
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 49
                                        }
                                      }
                                    },
                                    "range": [
                                      962,
                                      970
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 49
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  949,
                                  971
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 49
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 49
                                  }
                                }
                              }
                            ],
                            "range": [
                              947,
                              973
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 49
                              },
                              "start": {
                                "column": 16,
                                "line": 49
                              }
                            }
                          }
                        },
                        "range": [
                          943,
                          973
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 49
                          },
                          "start": {
                            "column": 12,
                            "line": 49
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        943,
                        973
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 49
                        },
                        "start": {
                          "column": 12,
                          "line": 49
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    939,
                    974
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "range": [
                        983,
                        985
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 50
                        },
                        "start": {
                          "column": 8,
                          "line": 50
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b4",
                      "optional": false,
                      "range": [
                        988,
                        990
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 50
                        },
                        "start": {
                          "column": 13,
                          "line": 50
                        }
                      }
                    },
                    "range": [
                      983,
                      990
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    983,
                    991
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b4",
                      "optional": false,
                      "range": [
                        1009,
                        1011
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 51
                        },
                        "start": {
                          "column": 8,
                          "line": 51
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "range": [
                        1014,
                        1016
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 51
                        },
                        "start": {
                          "column": 13,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1009,
                      1016
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1009,
                    1017
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                }
              ],
              "range": [
                811,
                1032
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 35,
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
              "name": "foo",
              "optional": false,
              "range": [
                789,
                792
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 43
                },
                "start": {
                  "column": 13,
                  "line": 43
                }
              }
            },
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 43
                },
                "start": {
                  "column": 16,
                  "line": 43
                }
              },
              "range": [
                792,
                808
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "range": [
                        803,
                        807
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 43
                        },
                        "start": {
                          "column": 27,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      803,
                      807
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 43
                      },
                      "start": {
                        "column": 27,
                        "line": 43
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      793,
                      794
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 43
                      },
                      "start": {
                        "column": 17,
                        "line": 43
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    793,
                    807
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 43
                    },
                    "start": {
                      "column": 17,
                      "line": 43
                    }
                  }
                }
              ]
            },
            "range": [
              780,
              1032
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          }
        ],
        "range": [
          381,
          1034
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 16,
            "line": 21
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          372,
          380
        ],
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "loc": {
          "end": {
            "column": 15,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 21
          }
        }
      },
      "kind": "module",
      "range": [
        365,
        1034
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 53
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
