__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    659
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Named",
        "optional": false,
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                27
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  21,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
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
              15,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          }
        ],
        "range": [
          13,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 1
        },
        "start": {
          "column": 0,
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
            "name": "notReferenced",
            "optional": false,
            "range": [
              73,
              86
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                117,
                120
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 3
                },
                "start": {
                  "column": 48,
                  "line": 3
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        92,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 3
                        },
                        "start": {
                          "column": 23,
                          "line": 3
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
                      "name": "alias",
                      "optional": false,
                      "range": [
                        98,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 3
                        },
                        "start": {
                          "column": 29,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      92,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 3
                    },
                    "start": {
                      "column": 36,
                      "line": 3
                    }
                  },
                  "range": [
                    105,
                    112
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        107,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 3
                        },
                        "start": {
                          "column": 38,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      107,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 3
                      },
                      "start": {
                        "column": 38,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  90,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              89,
              120
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          },
          "range": [
            73,
            120
          ],
          "loc": {
            "end": {
              "column": 51,
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
      "kind": "let",
      "range": [
        69,
        120
      ],
      "loc": {
        "end": {
          "column": 51,
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
            "name": "duplicateIndetifiers",
            "optional": false,
            "range": [
              261,
              281
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                326,
                329
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 8
                },
                "start": {
                  "column": 71,
                  "line": 8
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        287,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 8
                        },
                        "start": {
                          "column": 32,
                          "line": 8
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
                      "name": "alias",
                      "optional": false,
                      "range": [
                        293,
                        298
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 8
                        },
                        "start": {
                          "column": 38,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      287,
                      298
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 8
                      },
                      "start": {
                        "column": 32,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "range": [
                        300,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 8
                        },
                        "start": {
                          "column": 45,
                          "line": 8
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
                      "name": "alias2",
                      "optional": false,
                      "range": [
                        306,
                        312
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 8
                        },
                        "start": {
                          "column": 51,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      300,
                      312
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 8
                      },
                      "start": {
                        "column": 45,
                        "line": 8
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 8
                    },
                    "start": {
                      "column": 59,
                      "line": 8
                    }
                  },
                  "range": [
                    314,
                    321
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        316,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 8
                        },
                        "start": {
                          "column": 61,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      316,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 8
                      },
                      "start": {
                        "column": 61,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  285,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 8
                  },
                  "start": {
                    "column": 30,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              284,
              329
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 8
              },
              "start": {
                "column": 29,
                "line": 8
              }
            }
          },
          "range": [
            261,
            329
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        255,
        329
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "duplicateIndetifiers2",
            "optional": false,
            "range": [
              336,
              357
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                402,
                405
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 9
                },
                "start": {
                  "column": 72,
                  "line": 9
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
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 9
                    },
                    "start": {
                      "column": 35,
                      "line": 9
                    }
                  },
                  "range": [
                    365,
                    373
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      367,
                      373
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
                  }
                },
                "range": [
                  361,
                  373
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 9
                  },
                  "start": {
                    "column": 31,
                    "line": 9
                  }
                }
              },
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        377,
                        381
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 9
                        },
                        "start": {
                          "column": 47,
                          "line": 9
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
                      "name": "alias",
                      "optional": false,
                      "range": [
                        383,
                        388
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 9
                        },
                        "start": {
                          "column": 53,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      377,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 9
                      },
                      "start": {
                        "column": 47,
                        "line": 9
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 9
                    },
                    "start": {
                      "column": 60,
                      "line": 9
                    }
                  },
                  "range": [
                    390,
                    397
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        392,
                        397
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 9
                        },
                        "start": {
                          "column": 62,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      392,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 9
                      },
                      "start": {
                        "column": 62,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  375,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 9
                  },
                  "start": {
                    "column": 45,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              360,
              405
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 9
              },
              "start": {
                "column": 30,
                "line": 9
              }
            }
          },
          "range": [
            336,
            405
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        330,
        405
      ],
      "loc": {
        "end": {
          "column": 75,
          "line": 9
        },
        "start": {
          "column": 0,
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
            "name": "duplicateIndetifiers3",
            "optional": false,
            "range": [
              412,
              433
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                489,
                492
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 10
                },
                "start": {
                  "column": 83,
                  "line": 10
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        439,
                        443
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 10
                        },
                        "start": {
                          "column": 33,
                          "line": 10
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
                      "name": "alias",
                      "optional": false,
                      "range": [
                        445,
                        450
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 10
                        },
                        "start": {
                          "column": 39,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      439,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 10
                      },
                      "start": {
                        "column": 33,
                        "line": 10
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 10
                    },
                    "start": {
                      "column": 46,
                      "line": 10
                    }
                  },
                  "range": [
                    452,
                    459
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        454,
                        459
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 10
                        },
                        "start": {
                          "column": 48,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      454,
                      459
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 10
                      },
                      "start": {
                        "column": 48,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  437,
                  459
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 10
                  },
                  "start": {
                    "column": 31,
                    "line": 10
                  }
                }
              },
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        463,
                        467
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 10
                        },
                        "start": {
                          "column": 57,
                          "line": 10
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
                      "name": "alias2",
                      "optional": false,
                      "range": [
                        469,
                        475
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 10
                        },
                        "start": {
                          "column": 63,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      463,
                      475
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 10
                      },
                      "start": {
                        "column": 57,
                        "line": 10
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 10
                    },
                    "start": {
                      "column": 71,
                      "line": 10
                    }
                  },
                  "range": [
                    477,
                    484
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        479,
                        484
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 10
                        },
                        "start": {
                          "column": 73,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      479,
                      484
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 10
                      },
                      "start": {
                        "column": 73,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  461,
                  484
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 10
                  },
                  "start": {
                    "column": 55,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              436,
              492
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 10
              },
              "start": {
                "column": 30,
                "line": 10
              }
            }
          },
          "range": [
            412,
            492
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        406,
        492
      ],
      "loc": {
        "end": {
          "column": 86,
          "line": 10
        },
        "start": {
          "column": 0,
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
            "name": "value",
            "optional": false,
            "range": [
              498,
              503
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              506,
              508
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 12
              },
              "start": {
                "column": 12,
                "line": 12
              }
            }
          },
          "range": [
            498,
            508
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        494,
        509
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "shadowedVariable",
            "optional": false,
            "range": [
              579,
              595
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                653,
                658
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 14
                },
                "start": {
                  "column": 80,
                  "line": 14
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        601,
                        606
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 14
                        },
                        "start": {
                          "column": 28,
                          "line": 14
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
                      "name": "alias",
                      "optional": false,
                      "range": [
                        608,
                        613
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 14
                        },
                        "start": {
                          "column": 35,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      601,
                      613
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 14
                      },
                      "start": {
                        "column": 28,
                        "line": 14
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 14
                    },
                    "start": {
                      "column": 42,
                      "line": 14
                    }
                  },
                  "range": [
                    615,
                    634
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
                          "name": "value",
                          "optional": false,
                          "range": [
                            619,
                            624
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 14
                            },
                            "start": {
                              "column": 46,
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
                              "column": 59,
                              "line": 14
                            },
                            "start": {
                              "column": 51,
                              "line": 14
                            }
                          },
                          "range": [
                            624,
                            632
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              626,
                              632
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 14
                              },
                              "start": {
                                "column": 53,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          619,
                          632
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 14
                          },
                          "start": {
                            "column": 46,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      617,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 14
                      },
                      "start": {
                        "column": 44,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  599,
                  634
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 14
                  },
                  "start": {
                    "column": 26,
                    "line": 14
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 76,
                  "line": 14
                },
                "start": {
                  "column": 62,
                  "line": 14
                }
              },
              "range": [
                635,
                649
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    644,
                    649
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 14
                    },
                    "start": {
                      "column": 71,
                      "line": 14
                    }
                  }
                },
                "range": [
                  637,
                  649
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 14
                  },
                  "start": {
                    "column": 64,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              598,
              658
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 14
              },
              "start": {
                "column": 25,
                "line": 14
              }
            }
          },
          "range": [
            579,
            658
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        573,
        659
      ],
      "loc": {
        "end": {
          "column": 86,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 86,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
