__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    55,
    1050
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          200,
          226
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
                    208,
                    216
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      210,
                      216
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
                  207,
                  216
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
                217,
                223
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    219,
                    223
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
                  219,
                  223
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
              206,
              224
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
            "column": 12,
            "line": 7
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
          198,
          199
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        188,
        226
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
                233,
                236
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    235,
                    236
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
                  235,
                  236
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
              232,
              236
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
            232,
            236
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
        228,
        237
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
                244,
                271
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
                          249,
                          258
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
                        259,
                        268
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "range": [
                            261,
                            268
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
                          261,
                          268
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
                      248,
                      269
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
                  246,
                  271
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
              243,
              271
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
            243,
            271
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
        239,
        271
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
            272,
            273
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
            276,
            277
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
          272,
          277
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
        272,
        278
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
            285,
            286
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
            289,
            290
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
          285,
          290
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
        285,
        291
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
                308,
                336
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
                            314,
                            322
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              316,
                              322
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
                          313,
                          322
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
                        323,
                        333
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "range": [
                            325,
                            333
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
                          325,
                          333
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
                      312,
                      334
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
                  310,
                  336
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
              306,
              336
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
            306,
            336
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
        302,
        336
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
            337,
            338
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
            341,
            343
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
          337,
          343
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
        337,
        344
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
            351,
            353
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
            356,
            357
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
          351,
          357
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
        351,
        358
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
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                419,
                450
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
                          431,
                          439
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            433,
                            439
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
                        430,
                        439
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
                      440,
                      443
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          442,
                          443
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
                        442,
                        443
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
                    429,
                    444
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
                  "column": 32,
                  "line": 22
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
                401,
                402
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 14,
                  "line": 22
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 22
                },
                "start": {
                  "column": 15,
                  "line": 22
                }
              },
              "range": [
                402,
                418
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
                        413,
                        417
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 22
                        },
                        "start": {
                          "column": 26,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      413,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 22
                      },
                      "start": {
                        "column": 26,
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
                      403,
                      404
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 22
                      },
                      "start": {
                        "column": 16,
                        "line": 22
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    403,
                    417
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
                    }
                  }
                }
              ]
            },
            "range": [
              391,
              450
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
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                484,
                527
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
                          496,
                          504
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            498,
                            504
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
                        495,
                        504
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
                      505,
                      514
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          507,
                          514
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
                        507,
                        514
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
                    494,
                    515
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
                  "column": 32,
                  "line": 26
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
                  "name": "A",
                  "optional": false,
                  "range": [
                    476,
                    477
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 26
                    },
                    "start": {
                      "column": 24,
                      "line": 26
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    477,
                    483
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
                          478,
                          482
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 26
                          },
                          "start": {
                            "column": 26,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        478,
                        482
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 26
                        },
                        "start": {
                          "column": 26,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 26
                    },
                    "start": {
                      "column": 25,
                      "line": 26
                    }
                  }
                },
                "range": [
                  476,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 26
                  },
                  "start": {
                    "column": 24,
                    "line": 26
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                466,
                467
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 26
                },
                "start": {
                  "column": 14,
                  "line": 26
                }
              }
            },
            "range": [
              456,
              527
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
                      539,
                      566
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
                                  545,
                                  553
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    547,
                                    553
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
                                544,
                                553
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
                              554,
                              563
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "range": [
                                  556,
                                  563
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
                                556,
                                563
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
                            543,
                            564
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
                        541,
                        566
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
                    537,
                    566
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
                  537,
                  566
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
              533,
              567
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
                      578,
                      587
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          581,
                          587
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
                                582,
                                586
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
                              582,
                              586
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
                          580,
                          581
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
                        580,
                        587
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
                    576,
                    587
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
                  576,
                  587
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
              572,
              588
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
                  593,
                  595
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
                  598,
                  600
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
                593,
                600
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
              593,
              601
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
                  612,
                  614
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
                  617,
                  619
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
                612,
                619
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
              612,
              620
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
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                664,
                708
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
                          676,
                          684
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            678,
                            684
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
                        675,
                        684
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
                      685,
                      695
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "range": [
                          687,
                          695
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
                        687,
                        695
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
                    674,
                    696
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
                  "column": 33,
                  "line": 35
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
                  "name": "A",
                  "optional": false,
                  "range": [
                    656,
                    657
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 35
                    },
                    "start": {
                      "column": 25,
                      "line": 35
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    657,
                    663
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
                          658,
                          662
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 35
                          },
                          "start": {
                            "column": 27,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        658,
                        662
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 35
                        },
                        "start": {
                          "column": 27,
                          "line": 35
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 35
                    },
                    "start": {
                      "column": 26,
                      "line": 35
                    }
                  }
                },
                "range": [
                  656,
                  663
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 35
                  },
                  "start": {
                    "column": 25,
                    "line": 35
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "range": [
                645,
                647
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 35
                },
                "start": {
                  "column": 14,
                  "line": 35
                }
              }
            },
            "range": [
              635,
              708
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
                      720,
                      748
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
                                  726,
                                  734
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    728,
                                    734
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
                                725,
                                734
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
                              735,
                              745
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "range": [
                                  737,
                                  745
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
                                737,
                                745
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
                            724,
                            746
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
                        722,
                        748
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
                    718,
                    748
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
                  718,
                  748
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
              714,
              749
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
                  754,
                  756
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
                  759,
                  761
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
                754,
                761
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
              754,
              762
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
                  773,
                  775
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
                  778,
                  780
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
                773,
                780
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
              773,
              781
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
                            843,
                            870
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
                                        849,
                                        857
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "range": [
                                          851,
                                          857
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
                                      848,
                                      857
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
                                    858,
                                    867
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "range": [
                                        860,
                                        867
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
                                      860,
                                      867
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
                                  847,
                                  868
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
                              845,
                              870
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
                          841,
                          870
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
                        841,
                        870
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
                    837,
                    871
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
                            886,
                            892
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                889,
                                892
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
                                      890,
                                      891
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
                                    890,
                                    891
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
                                888,
                                889
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
                              888,
                              892
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
                          884,
                          892
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
                        884,
                        892
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
                    880,
                    893
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
                        902,
                        904
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
                        907,
                        909
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
                      902,
                      909
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
                    902,
                    910
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
                        928,
                        930
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
                        933,
                        935
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
                      928,
                      935
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
                    928,
                    936
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
                            961,
                            989
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
                                        967,
                                        975
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "range": [
                                          969,
                                          975
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
                                      966,
                                      975
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
                                    976,
                                    986
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "range": [
                                        978,
                                        986
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
                                      978,
                                      986
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
                                  965,
                                  987
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
                              963,
                              989
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
                          959,
                          989
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
                        959,
                        989
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
                    955,
                    990
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
                        999,
                        1001
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
                        1004,
                        1006
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
                      999,
                      1006
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
                    999,
                    1007
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
                        1025,
                        1027
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
                        1030,
                        1032
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
                      1025,
                      1032
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
                    1025,
                    1033
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
                827,
                1048
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
                805,
                808
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
                808,
                824
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
                        819,
                        823
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
                      819,
                      823
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
                      809,
                      810
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
                    809,
                    823
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
              796,
              1048
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
          385,
          1050
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
          376,
          384
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
        369,
        1050
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
