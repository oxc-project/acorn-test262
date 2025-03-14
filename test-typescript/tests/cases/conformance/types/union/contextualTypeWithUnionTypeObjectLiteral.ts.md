__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    2146
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              },
              "range": [
                8,
                16
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  10,
                  16
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 1
                  },
                  "start": {
                    "column": 10,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              5,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 5,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            5,
            16
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 1
            },
            "start": {
              "column": 5,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1,
        17
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 1
        },
        "start": {
          "column": 1,
          "line": 1
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                25,
                33
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  27,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              22,
              33
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            22,
            33
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        18,
        34
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "strOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              },
              "range": [
                50,
                67
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      52,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 17,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      61,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  52,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              39,
              67
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "range": [
                70,
                73
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 35,
                  "line": 3
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "range": [
                77,
                80
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 42,
                  "line": 3
                }
              }
            },
            "range": [
              70,
              80
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 3
              }
            }
          },
          "range": [
            39,
            80
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        35,
        81
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "objStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              },
              "range": [
                92,
                110
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
                      "name": "prop",
                      "optional": false,
                      "range": [
                        96,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 4
                        },
                        "start": {
                          "column": 14,
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
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 18,
                          "line": 4
                        }
                      },
                      "range": [
                        100,
                        108
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          102,
                          108
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 4
                          },
                          "start": {
                            "column": 20,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      96,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  94,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              86,
              110
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            86,
            110
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        82,
        111
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "objNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              },
              "range": [
                122,
                140
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
                      "name": "prop",
                      "optional": false,
                      "range": [
                        126,
                        130
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 14,
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
                          "column": 26,
                          "line": 5
                        },
                        "start": {
                          "column": 18,
                          "line": 5
                        }
                      },
                      "range": [
                        130,
                        138
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          132,
                          138
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      126,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 5
                      },
                      "start": {
                        "column": 14,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  124,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              116,
              140
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            116,
            140
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        112,
        141
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objStrOrNum1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              },
              "range": [
                158,
                195
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            162,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
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
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 24,
                              "line": 6
                            }
                          },
                          "range": [
                            166,
                            174
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              168,
                              174
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 6
                              },
                              "start": {
                                "column": 26,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          162,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 6
                          },
                          "start": {
                            "column": 20,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      160,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 18,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            181,
                            185
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 6
                            },
                            "start": {
                              "column": 39,
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
                              "column": 51,
                              "line": 6
                            },
                            "start": {
                              "column": 43,
                              "line": 6
                            }
                          },
                          "range": [
                            185,
                            193
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              187,
                              193
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 6
                              },
                              "start": {
                                "column": 45,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          181,
                          193
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 6
                          },
                          "start": {
                            "column": 39,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      179,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 6
                      },
                      "start": {
                        "column": 37,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  160,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              146,
              195
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "objStr",
              "optional": false,
              "range": [
                198,
                204
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 6
                },
                "start": {
                  "column": 56,
                  "line": 6
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "objNum",
              "optional": false,
              "range": [
                208,
                214
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 6
                },
                "start": {
                  "column": 66,
                  "line": 6
                }
              }
            },
            "range": [
              198,
              214
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 6
              },
              "start": {
                "column": 56,
                "line": 6
              }
            }
          },
          "range": [
            146,
            214
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        142,
        215
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "objStrOrNum2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              },
              "range": [
                232,
                259
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
                      "name": "prop",
                      "optional": false,
                      "range": [
                        236,
                        240
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 7
                        },
                        "start": {
                          "column": 20,
                          "line": 7
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
                          "column": 41,
                          "line": 7
                        },
                        "start": {
                          "column": 24,
                          "line": 7
                        }
                      },
                      "range": [
                        240,
                        257
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              242,
                              248
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
                          },
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              251,
                              257
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 7
                              },
                              "start": {
                                "column": 35,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          242,
                          257
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
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
                      236,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 7
                      },
                      "start": {
                        "column": 20,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  234,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 7
                  },
                  "start": {
                    "column": 18,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              220,
              259
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "objStr",
              "optional": false,
              "range": [
                262,
                268
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 7
                },
                "start": {
                  "column": 46,
                  "line": 7
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "objNum",
              "optional": false,
              "range": [
                272,
                278
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 7
                },
                "start": {
                  "column": 56,
                  "line": 7
                }
              }
            },
            "range": [
              262,
              278
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 7
              },
              "start": {
                "column": 46,
                "line": 7
              }
            }
          },
          "range": [
            220,
            278
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        216,
        279
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 7
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
            "name": "objStrOrNum3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 14
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              },
              "range": [
                786,
                823
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            790,
                            794
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 14
                            },
                            "start": {
                              "column": 20,
                              "line": 14
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
                              "column": 32,
                              "line": 14
                            },
                            "start": {
                              "column": 24,
                              "line": 14
                            }
                          },
                          "range": [
                            794,
                            802
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              796,
                              802
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 14
                              },
                              "start": {
                                "column": 26,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          790,
                          802
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 14
                          },
                          "start": {
                            "column": 20,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      788,
                      804
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 14
                      },
                      "start": {
                        "column": 18,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            809,
                            813
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 14
                            },
                            "start": {
                              "column": 39,
                              "line": 14
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
                              "column": 51,
                              "line": 14
                            },
                            "start": {
                              "column": 43,
                              "line": 14
                            }
                          },
                          "range": [
                            813,
                            821
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              815,
                              821
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 14
                              },
                              "start": {
                                "column": 45,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          809,
                          821
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 14
                          },
                          "start": {
                            "column": 39,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      807,
                      823
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 14
                      },
                      "start": {
                        "column": 37,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  788,
                  823
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              774,
              823
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    832,
                    836
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "range": [
                    838,
                    849
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                },
                "range": [
                  832,
                  849
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              826,
              851
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 16
              },
              "start": {
                "column": 56,
                "line": 14
              }
            }
          },
          "range": [
            774,
            851
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        770,
        852
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "objStrOrNum4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
                }
              },
              "range": [
                869,
                896
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
                      "name": "prop",
                      "optional": false,
                      "range": [
                        873,
                        877
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 17
                        },
                        "start": {
                          "column": 20,
                          "line": 17
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
                          "column": 41,
                          "line": 17
                        },
                        "start": {
                          "column": 24,
                          "line": 17
                        }
                      },
                      "range": [
                        877,
                        894
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              879,
                              885
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 17
                              },
                              "start": {
                                "column": 26,
                                "line": 17
                              }
                            }
                          },
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              888,
                              894
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 17
                              },
                              "start": {
                                "column": 35,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "range": [
                          879,
                          894
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 17
                          },
                          "start": {
                            "column": 26,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      873,
                      894
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 17
                      },
                      "start": {
                        "column": 20,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  871,
                  896
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              857,
              896
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    905,
                    909
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "range": [
                    911,
                    922
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 18
                    },
                    "start": {
                      "column": 10,
                      "line": 18
                    }
                  }
                },
                "range": [
                  905,
                  922
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              899,
              924
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 19
              },
              "start": {
                "column": 46,
                "line": 17
              }
            }
          },
          "range": [
            857,
            924
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 19
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
        853,
        925
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 19
        },
        "start": {
          "column": 0,
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
            "name": "objStrOrNum5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 72,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              },
              "range": [
                942,
                998
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            946,
                            950
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 20
                            },
                            "start": {
                              "column": 20,
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
                              "column": 32,
                              "line": 20
                            },
                            "start": {
                              "column": 24,
                              "line": 20
                            }
                          },
                          "range": [
                            950,
                            958
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              952,
                              958
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
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
                          946,
                          959
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 20
                          },
                          "start": {
                            "column": 20,
                            "line": 20
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "range": [
                            960,
                            968
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 20
                            },
                            "start": {
                              "column": 34,
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
                              "column": 50,
                              "line": 20
                            },
                            "start": {
                              "column": 42,
                              "line": 20
                            }
                          },
                          "range": [
                            968,
                            976
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              970,
                              976
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 20
                              },
                              "start": {
                                "column": 44,
                                "line": 20
                              }
                            }
                          }
                        },
                        "range": [
                          960,
                          977
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 20
                          },
                          "start": {
                            "column": 34,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "range": [
                      944,
                      979
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 20
                      },
                      "start": {
                        "column": 18,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            984,
                            988
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 20
                            },
                            "start": {
                              "column": 58,
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
                              "column": 70,
                              "line": 20
                            },
                            "start": {
                              "column": 62,
                              "line": 20
                            }
                          },
                          "range": [
                            988,
                            996
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              990,
                              996
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 20
                              },
                              "start": {
                                "column": 64,
                                "line": 20
                              }
                            }
                          }
                        },
                        "range": [
                          984,
                          996
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 20
                          },
                          "start": {
                            "column": 58,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "range": [
                      982,
                      998
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 20
                      },
                      "start": {
                        "column": 56,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  944,
                  998
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 20
                  },
                  "start": {
                    "column": 18,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              930,
              998
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    1003,
                    1007
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 20
                    },
                    "start": {
                      "column": 77,
                      "line": 20
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "range": [
                    1009,
                    1020
                  ],
                  "loc": {
                    "end": {
                      "column": 94,
                      "line": 20
                    },
                    "start": {
                      "column": 83,
                      "line": 20
                    }
                  }
                },
                "range": [
                  1003,
                  1020
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 20
                  },
                  "start": {
                    "column": 77,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              1001,
              1022
            ],
            "loc": {
              "end": {
                "column": 96,
                "line": 20
              },
              "start": {
                "column": 75,
                "line": 20
              }
            }
          },
          "range": [
            930,
            1022
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        926,
        1023
      ],
      "loc": {
        "end": {
          "column": 97,
          "line": 20
        },
        "start": {
          "column": 0,
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
            "name": "objStrOrNum6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 72,
                  "line": 21
                },
                "start": {
                  "column": 16,
                  "line": 21
                }
              },
              "range": [
                1040,
                1096
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            1044,
                            1048
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 21
                            },
                            "start": {
                              "column": 20,
                              "line": 21
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
                              "column": 32,
                              "line": 21
                            },
                            "start": {
                              "column": 24,
                              "line": 21
                            }
                          },
                          "range": [
                            1048,
                            1056
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1050,
                              1056
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 21
                              },
                              "start": {
                                "column": 26,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          1044,
                          1057
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 21
                          },
                          "start": {
                            "column": 20,
                            "line": 21
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "range": [
                            1058,
                            1066
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 21
                            },
                            "start": {
                              "column": 34,
                              "line": 21
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
                              "column": 50,
                              "line": 21
                            },
                            "start": {
                              "column": 42,
                              "line": 21
                            }
                          },
                          "range": [
                            1066,
                            1074
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1068,
                              1074
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 21
                              },
                              "start": {
                                "column": 44,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          1058,
                          1075
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 21
                          },
                          "start": {
                            "column": 34,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "range": [
                      1042,
                      1077
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 21
                      },
                      "start": {
                        "column": 18,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            1082,
                            1086
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 21
                            },
                            "start": {
                              "column": 58,
                              "line": 21
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
                              "column": 70,
                              "line": 21
                            },
                            "start": {
                              "column": 62,
                              "line": 21
                            }
                          },
                          "range": [
                            1086,
                            1094
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1088,
                              1094
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 21
                              },
                              "start": {
                                "column": 64,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          1082,
                          1094
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 21
                          },
                          "start": {
                            "column": 58,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "range": [
                      1080,
                      1096
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 21
                      },
                      "start": {
                        "column": 56,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  1042,
                  1096
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 21
                  },
                  "start": {
                    "column": 18,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              1028,
              1096
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    1105,
                    1109
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "range": [
                    1111,
                    1122
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 22
                    },
                    "start": {
                      "column": 10,
                      "line": 22
                    }
                  }
                },
                "range": [
                  1105,
                  1122
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "range": [
                    1128,
                    1136
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 23
                    },
                    "start": {
                      "column": 4,
                      "line": 23
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "range": [
                    1138,
                    1141
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 23
                    },
                    "start": {
                      "column": 14,
                      "line": 23
                    }
                  }
                },
                "range": [
                  1128,
                  1141
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              1099,
              1143
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 24
              },
              "start": {
                "column": 75,
                "line": 21
              }
            }
          },
          "range": [
            1028,
            1143
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1024,
        1144
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "objStrOrNum7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 91,
                  "line": 25
                },
                "start": {
                  "column": 16,
                  "line": 25
                }
              },
              "range": [
                1161,
                1236
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            1165,
                            1169
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 25
                            },
                            "start": {
                              "column": 20,
                              "line": 25
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
                              "column": 32,
                              "line": 25
                            },
                            "start": {
                              "column": 24,
                              "line": 25
                            }
                          },
                          "range": [
                            1169,
                            1177
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1171,
                              1177
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 25
                              },
                              "start": {
                                "column": 26,
                                "line": 25
                              }
                            }
                          }
                        },
                        "range": [
                          1165,
                          1178
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 25
                          },
                          "start": {
                            "column": 20,
                            "line": 25
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "range": [
                            1179,
                            1187
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 25
                            },
                            "start": {
                              "column": 34,
                              "line": 25
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
                              "column": 50,
                              "line": 25
                            },
                            "start": {
                              "column": 42,
                              "line": 25
                            }
                          },
                          "range": [
                            1187,
                            1195
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1189,
                              1195
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 25
                              },
                              "start": {
                                "column": 44,
                                "line": 25
                              }
                            }
                          }
                        },
                        "range": [
                          1179,
                          1196
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 25
                          },
                          "start": {
                            "column": 34,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "range": [
                      1163,
                      1198
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 25
                      },
                      "start": {
                        "column": 18,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            1203,
                            1207
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 25
                            },
                            "start": {
                              "column": 58,
                              "line": 25
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
                              "column": 70,
                              "line": 25
                            },
                            "start": {
                              "column": 62,
                              "line": 25
                            }
                          },
                          "range": [
                            1207,
                            1215
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1209,
                              1215
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 25
                              },
                              "start": {
                                "column": 64,
                                "line": 25
                              }
                            }
                          }
                        },
                        "range": [
                          1203,
                          1216
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 25
                          },
                          "start": {
                            "column": 58,
                            "line": 25
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP1",
                          "optional": false,
                          "range": [
                            1217,
                            1226
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 25
                            },
                            "start": {
                              "column": 72,
                              "line": 25
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
                              "column": 89,
                              "line": 25
                            },
                            "start": {
                              "column": 81,
                              "line": 25
                            }
                          },
                          "range": [
                            1226,
                            1234
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1228,
                              1234
                            ],
                            "loc": {
                              "end": {
                                "column": 89,
                                "line": 25
                              },
                              "start": {
                                "column": 83,
                                "line": 25
                              }
                            }
                          }
                        },
                        "range": [
                          1217,
                          1234
                        ],
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 25
                          },
                          "start": {
                            "column": 72,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "range": [
                      1201,
                      1236
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 25
                      },
                      "start": {
                        "column": 56,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  1163,
                  1236
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 25
                  },
                  "start": {
                    "column": 18,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              1149,
              1236
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    1245,
                    1249
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 26
                    },
                    "start": {
                      "column": 4,
                      "line": 26
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "range": [
                    1251,
                    1262
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                },
                "range": [
                  1245,
                  1262
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "range": [
                    1268,
                    1276
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 27
                    },
                    "start": {
                      "column": 4,
                      "line": 27
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "range": [
                    1278,
                    1281
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 27
                    },
                    "start": {
                      "column": 14,
                      "line": 27
                    }
                  }
                },
                "range": [
                  1268,
                  1281
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              1239,
              1283
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 28
              },
              "start": {
                "column": 94,
                "line": 25
              }
            }
          },
          "range": [
            1149,
            1283
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1145,
        1284
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 28
        },
        "start": {
          "column": 0,
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
            "name": "objStrOrNum8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 91,
                  "line": 29
                },
                "start": {
                  "column": 16,
                  "line": 29
                }
              },
              "range": [
                1301,
                1376
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            1305,
                            1309
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 29
                            },
                            "start": {
                              "column": 20,
                              "line": 29
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
                              "column": 32,
                              "line": 29
                            },
                            "start": {
                              "column": 24,
                              "line": 29
                            }
                          },
                          "range": [
                            1309,
                            1317
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1311,
                              1317
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 29
                              },
                              "start": {
                                "column": 26,
                                "line": 29
                              }
                            }
                          }
                        },
                        "range": [
                          1305,
                          1318
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "range": [
                            1319,
                            1327
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 29
                            },
                            "start": {
                              "column": 34,
                              "line": 29
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
                              "column": 50,
                              "line": 29
                            },
                            "start": {
                              "column": 42,
                              "line": 29
                            }
                          },
                          "range": [
                            1327,
                            1335
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1329,
                              1335
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 29
                              },
                              "start": {
                                "column": 44,
                                "line": 29
                              }
                            }
                          }
                        },
                        "range": [
                          1319,
                          1336
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 29
                          },
                          "start": {
                            "column": 34,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "range": [
                      1303,
                      1338
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 29
                      },
                      "start": {
                        "column": 18,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            1343,
                            1347
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 29
                            },
                            "start": {
                              "column": 58,
                              "line": 29
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
                              "column": 70,
                              "line": 29
                            },
                            "start": {
                              "column": 62,
                              "line": 29
                            }
                          },
                          "range": [
                            1347,
                            1355
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1349,
                              1355
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 29
                              },
                              "start": {
                                "column": 64,
                                "line": 29
                              }
                            }
                          }
                        },
                        "range": [
                          1343,
                          1356
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 29
                          },
                          "start": {
                            "column": 58,
                            "line": 29
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP1",
                          "optional": false,
                          "range": [
                            1357,
                            1366
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 29
                            },
                            "start": {
                              "column": 72,
                              "line": 29
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
                              "column": 89,
                              "line": 29
                            },
                            "start": {
                              "column": 81,
                              "line": 29
                            }
                          },
                          "range": [
                            1366,
                            1374
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1368,
                              1374
                            ],
                            "loc": {
                              "end": {
                                "column": 89,
                                "line": 29
                              },
                              "start": {
                                "column": 83,
                                "line": 29
                              }
                            }
                          }
                        },
                        "range": [
                          1357,
                          1374
                        ],
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 29
                          },
                          "start": {
                            "column": 72,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "range": [
                      1341,
                      1376
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 29
                      },
                      "start": {
                        "column": 56,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  1303,
                  1376
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 29
                  },
                  "start": {
                    "column": 18,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              1289,
              1376
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    1385,
                    1389
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 30
                    },
                    "start": {
                      "column": 4,
                      "line": 30
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "range": [
                    1391,
                    1402
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 30
                    },
                    "start": {
                      "column": 10,
                      "line": 30
                    }
                  }
                },
                "range": [
                  1385,
                  1402
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "range": [
                    1408,
                    1416
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 31
                    },
                    "start": {
                      "column": 4,
                      "line": 31
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "range": [
                    1418,
                    1421
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 31
                    },
                    "start": {
                      "column": 14,
                      "line": 31
                    }
                  }
                },
                "range": [
                  1408,
                  1421
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 31
                  },
                  "start": {
                    "column": 4,
                    "line": 31
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP1",
                  "optional": false,
                  "range": [
                    1427,
                    1436
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 32
                    },
                    "start": {
                      "column": 4,
                      "line": 32
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "range": [
                    1438,
                    1441
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 32
                    },
                    "start": {
                      "column": 15,
                      "line": 32
                    }
                  }
                },
                "range": [
                  1427,
                  1441
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
                  }
                }
              }
            ],
            "range": [
              1379,
              1443
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 33
              },
              "start": {
                "column": 94,
                "line": 29
              }
            }
          },
          "range": [
            1289,
            1443
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1285,
        1444
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1459,
          1529
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "range": [
                1465,
                1496
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 35
                    },
                    "start": {
                      "column": 37,
                      "line": 35
                    }
                  },
                  "range": [
                    1498,
                    1506
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1500,
                      1506
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 35
                      },
                      "start": {
                        "column": 39,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  1497,
                  1506
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 35
                  },
                  "start": {
                    "column": 36,
                    "line": 35
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
                      "column": 56,
                      "line": 35
                    },
                    "start": {
                      "column": 48,
                      "line": 35
                    }
                  },
                  "range": [
                    1509,
                    1517
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1511,
                      1517
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 35
                      },
                      "start": {
                        "column": 50,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  1508,
                  1517
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 35
                  },
                  "start": {
                    "column": 47,
                    "line": 35
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 35
                },
                "start": {
                  "column": 57,
                  "line": 35
                }
              },
              "range": [
                1518,
                1526
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1520,
                  1526
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 35
                  },
                  "start": {
                    "column": 59,
                    "line": 35
                  }
                }
              }
            },
            "static": false,
            "range": [
              1465,
              1527
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 14,
            "line": 34
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I11",
        "optional": false,
        "range": [
          1455,
          1458
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 34
          },
          "start": {
            "column": 10,
            "line": 34
          }
        }
      },
      "range": [
        1445,
        1529
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1544,
          1614
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "range": [
                1550,
                1581
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 38
                    },
                    "start": {
                      "column": 37,
                      "line": 38
                    }
                  },
                  "range": [
                    1583,
                    1591
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1585,
                      1591
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 38
                      },
                      "start": {
                        "column": 39,
                        "line": 38
                      }
                    }
                  }
                },
                "range": [
                  1582,
                  1591
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 38
                  },
                  "start": {
                    "column": 36,
                    "line": 38
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
                      "column": 56,
                      "line": 38
                    },
                    "start": {
                      "column": 48,
                      "line": 38
                    }
                  },
                  "range": [
                    1594,
                    1602
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1596,
                      1602
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 38
                      },
                      "start": {
                        "column": 50,
                        "line": 38
                      }
                    }
                  }
                },
                "range": [
                  1593,
                  1602
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 38
                  },
                  "start": {
                    "column": 47,
                    "line": 38
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 38
                },
                "start": {
                  "column": 57,
                  "line": 38
                }
              },
              "range": [
                1603,
                1611
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1605,
                  1611
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 38
                  },
                  "start": {
                    "column": 59,
                    "line": 38
                  }
                }
              }
            },
            "static": false,
            "range": [
              1550,
              1612
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 14,
            "line": 37
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I21",
        "optional": false,
        "range": [
          1540,
          1543
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 37
          },
          "start": {
            "column": 10,
            "line": 37
          }
        }
      },
      "range": [
        1530,
        1614
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
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
            "name": "i11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 40
                },
                "start": {
                  "column": 7,
                  "line": 40
                }
              },
              "range": [
                1622,
                1627
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I11",
                  "optional": false,
                  "range": [
                    1624,
                    1627
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 40
                    },
                    "start": {
                      "column": 9,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1624,
                  1627
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 40
                  },
                  "start": {
                    "column": 9,
                    "line": 40
                  }
                }
              }
            },
            "range": [
              1619,
              1627
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
          "init": null,
          "range": [
            1619,
            1627
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1615,
        1628
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "i21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 41
                },
                "start": {
                  "column": 7,
                  "line": 41
                }
              },
              "range": [
                1636,
                1641
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I21",
                  "optional": false,
                  "range": [
                    1638,
                    1641
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 41
                    },
                    "start": {
                      "column": 9,
                      "line": 41
                    }
                  }
                },
                "range": [
                  1638,
                  1641
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 41
                  },
                  "start": {
                    "column": 9,
                    "line": 41
                  }
                }
              }
            },
            "range": [
              1633,
              1641
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
          "init": null,
          "range": [
            1633,
            1641
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1629,
        1642
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 42
                },
                "start": {
                  "column": 12,
                  "line": 42
                }
              },
              "range": [
                1655,
                1666
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "range": [
                        1657,
                        1660
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 42
                        },
                        "start": {
                          "column": 14,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      1657,
                      1660
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 42
                      },
                      "start": {
                        "column": 14,
                        "line": 42
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "range": [
                        1663,
                        1666
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 42
                        },
                        "start": {
                          "column": 20,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      1663,
                      1666
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 42
                      },
                      "start": {
                        "column": 20,
                        "line": 42
                      }
                    }
                  }
                ],
                "range": [
                  1657,
                  1666
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 42
                  },
                  "start": {
                    "column": 14,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              1647,
              1666
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i11",
            "optional": false,
            "range": [
              1669,
              1672
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 42
              },
              "start": {
                "column": 26,
                "line": 42
              }
            }
          },
          "range": [
            1647,
            1672
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1643,
        1673
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 43
                },
                "start": {
                  "column": 12,
                  "line": 43
                }
              },
              "range": [
                1686,
                1697
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "range": [
                        1688,
                        1691
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 43
                        },
                        "start": {
                          "column": 14,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      1688,
                      1691
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 43
                      },
                      "start": {
                        "column": 14,
                        "line": 43
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "range": [
                        1694,
                        1697
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 43
                        },
                        "start": {
                          "column": 20,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      1694,
                      1697
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 43
                      },
                      "start": {
                        "column": 20,
                        "line": 43
                      }
                    }
                  }
                ],
                "range": [
                  1688,
                  1697
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 43
                  },
                  "start": {
                    "column": 14,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              1678,
              1697
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i21",
            "optional": false,
            "range": [
              1700,
              1703
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 43
              },
              "start": {
                "column": 26,
                "line": 43
              }
            }
          },
          "range": [
            1678,
            1703
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1674,
        1704
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 43
        },
        "start": {
          "column": 0,
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 44
                },
                "start": {
                  "column": 12,
                  "line": 44
                }
              },
              "range": [
                1717,
                1728
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "range": [
                        1719,
                        1722
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 44
                        },
                        "start": {
                          "column": 14,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      1719,
                      1722
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 44
                      },
                      "start": {
                        "column": 14,
                        "line": 44
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "range": [
                        1725,
                        1728
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 44
                        },
                        "start": {
                          "column": 20,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      1725,
                      1728
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 44
                      },
                      "start": {
                        "column": 20,
                        "line": 44
                      }
                    }
                  }
                ],
                "range": [
                  1719,
                  1728
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 44
                  },
                  "start": {
                    "column": 14,
                    "line": 44
                  }
                }
              }
            },
            "range": [
              1709,
              1728
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "range": [
                    1748,
                    1779
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 45
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
                              "name": "z",
                              "optional": false,
                              "range": [
                                1805,
                                1806
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 46
                                },
                                "start": {
                                  "column": 12,
                                  "line": 46
                                }
                              }
                            },
                            "init": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "range": [
                                    1818,
                                    1819
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 46
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    1809,
                                    1810
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 46
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "charAt",
                                  "optional": false,
                                  "range": [
                                    1811,
                                    1817
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 46
                                    }
                                  }
                                },
                                "range": [
                                  1809,
                                  1817
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 46
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1809,
                                1820
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 46
                                },
                                "start": {
                                  "column": 16,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              1805,
                              1820
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 46
                              },
                              "start": {
                                "column": 12,
                                "line": 46
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          1801,
                          1821
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 46
                          },
                          "start": {
                            "column": 8,
                            "line": 46
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "range": [
                            1837,
                            1838
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 47
                            },
                            "start": {
                              "column": 15,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1830,
                          1839
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 47
                          },
                          "start": {
                            "column": 8,
                            "line": 47
                          }
                        }
                      }
                    ],
                    "range": [
                      1791,
                      1845
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 48
                      },
                      "start": {
                        "column": 47,
                        "line": 45
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        1782,
                        1783
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 45
                        },
                        "start": {
                          "column": 38,
                          "line": 45
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        1785,
                        1786
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 45
                        },
                        "start": {
                          "column": 41,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "range": [
                    1781,
                    1845
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 48
                    },
                    "start": {
                      "column": 37,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1748,
                  1845
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 48
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              }
            ],
            "range": [
              1731,
              1848
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 49
              },
              "start": {
                "column": 26,
                "line": 44
              }
            }
          },
          "range": [
            1709,
            1848
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 49
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1705,
        1849
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 49
        },
        "start": {
          "column": 0,
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 50
                },
                "start": {
                  "column": 12,
                  "line": 50
                }
              },
              "range": [
                1862,
                1873
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "range": [
                        1864,
                        1867
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 50
                        },
                        "start": {
                          "column": 14,
                          "line": 50
                        }
                      }
                    },
                    "range": [
                      1864,
                      1867
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 50
                      },
                      "start": {
                        "column": 14,
                        "line": 50
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "range": [
                        1870,
                        1873
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 50
                        },
                        "start": {
                          "column": 20,
                          "line": 50
                        }
                      }
                    },
                    "range": [
                      1870,
                      1873
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 50
                      },
                      "start": {
                        "column": 20,
                        "line": 50
                      }
                    }
                  }
                ],
                "range": [
                  1864,
                  1873
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 50
                  },
                  "start": {
                    "column": 14,
                    "line": 50
                  }
                }
              }
            },
            "range": [
              1854,
              1873
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "range": [
                    1893,
                    1924
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 51
                    },
                    "start": {
                      "column": 4,
                      "line": 51
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
                              "name": "z",
                              "optional": false,
                              "range": [
                                1950,
                                1951
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 52
                                },
                                "start": {
                                  "column": 12,
                                  "line": 52
                                }
                              }
                            },
                            "init": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "range": [
                                    1967,
                                    1968
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 52
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 52
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    1954,
                                    1955
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 52
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 52
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "charCodeAt",
                                  "optional": false,
                                  "range": [
                                    1956,
                                    1966
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 52
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 52
                                    }
                                  }
                                },
                                "range": [
                                  1954,
                                  1966
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 52
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 52
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1954,
                                1969
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 52
                                },
                                "start": {
                                  "column": 16,
                                  "line": 52
                                }
                              }
                            },
                            "range": [
                              1950,
                              1969
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
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
                          1946,
                          1970
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 52
                          },
                          "start": {
                            "column": 8,
                            "line": 52
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "range": [
                            1986,
                            1987
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 53
                            },
                            "start": {
                              "column": 15,
                              "line": 53
                            }
                          }
                        },
                        "range": [
                          1979,
                          1988
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 53
                          },
                          "start": {
                            "column": 8,
                            "line": 53
                          }
                        }
                      }
                    ],
                    "range": [
                      1936,
                      1994
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 54
                      },
                      "start": {
                        "column": 47,
                        "line": 51
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        1927,
                        1928
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 51
                        },
                        "start": {
                          "column": 38,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        1930,
                        1931
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 51
                        },
                        "start": {
                          "column": 41,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "range": [
                    1926,
                    1994
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 54
                    },
                    "start": {
                      "column": 37,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1893,
                  1994
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 54
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              }
            ],
            "range": [
              1876,
              1997
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 55
              },
              "start": {
                "column": 26,
                "line": 50
              }
            }
          },
          "range": [
            1854,
            1997
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 55
            },
            "start": {
              "column": 4,
              "line": 50
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1850,
        1998
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 55
        },
        "start": {
          "column": 0,
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
            "name": "strOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 56
                },
                "start": {
                  "column": 15,
                  "line": 56
                }
              },
              "range": [
                2014,
                2031
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      2016,
                      2022
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 56
                      },
                      "start": {
                        "column": 17,
                        "line": 56
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      2025,
                      2031
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 56
                      },
                      "start": {
                        "column": 26,
                        "line": 56
                      }
                    }
                  }
                ],
                "range": [
                  2016,
                  2031
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 56
                  },
                  "start": {
                    "column": 17,
                    "line": 56
                  }
                }
              }
            },
            "range": [
              2003,
              2031
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          "init": null,
          "range": [
            2003,
            2031
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 56
            },
            "start": {
              "column": 4,
              "line": 56
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1999,
        2032
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 57
                },
                "start": {
                  "column": 12,
                  "line": 57
                }
              },
              "range": [
                2045,
                2056
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "range": [
                        2047,
                        2050
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 57
                        },
                        "start": {
                          "column": 14,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      2047,
                      2050
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 57
                      },
                      "start": {
                        "column": 14,
                        "line": 57
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "range": [
                        2053,
                        2056
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 57
                        },
                        "start": {
                          "column": 20,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      2053,
                      2056
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 57
                      },
                      "start": {
                        "column": 20,
                        "line": 57
                      }
                    }
                  }
                ],
                "range": [
                  2047,
                  2056
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 57
                  },
                  "start": {
                    "column": 14,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              2037,
              2056
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "range": [
                    2088,
                    2119
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 58
                    },
                    "start": {
                      "column": 4,
                      "line": 58
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrNumber",
                    "optional": false,
                    "range": [
                      2131,
                      2142
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 58
                      },
                      "start": {
                        "column": 47,
                        "line": 58
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        2122,
                        2123
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 58
                        },
                        "start": {
                          "column": 38,
                          "line": 58
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        2125,
                        2126
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 58
                        },
                        "start": {
                          "column": 41,
                          "line": 58
                        }
                      }
                    }
                  ],
                  "range": [
                    2121,
                    2142
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 58
                    },
                    "start": {
                      "column": 37,
                      "line": 58
                    }
                  }
                },
                "range": [
                  2088,
                  2142
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
                  }
                }
              }
            ],
            "range": [
              2059,
              2145
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 59
              },
              "start": {
                "column": 26,
                "line": 57
              }
            }
          },
          "range": [
            2037,
            2145
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 59
            },
            "start": {
              "column": 4,
              "line": 57
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        2033,
        2146
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 2,
      "line": 59
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
