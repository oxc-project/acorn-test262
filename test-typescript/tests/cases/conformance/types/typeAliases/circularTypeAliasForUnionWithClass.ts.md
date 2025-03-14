__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    199
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
            "name": "v0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 6,
                  "line": 1
                }
              },
              "range": [
                6,
                10
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T0",
                  "optional": false,
                  "range": [
                    8,
                    10
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 1
                    },
                    "start": {
                      "column": 8,
                      "line": 1
                    }
                  }
                },
                "range": [
                  8,
                  10
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 1
                  },
                  "start": {
                    "column": 8,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            10
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "range": [
          17,
          19
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              22,
              28
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I0",
              "optional": false,
              "range": [
                31,
                33
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "range": [
              31,
              33
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          }
        ],
        "range": [
          22,
          33
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        12,
        34
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          44,
          58
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
              "name": "x",
              "optional": false,
              "range": [
                50,
                51
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
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
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                51,
                55
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T0",
                  "optional": false,
                  "range": [
                    53,
                    55
                  ],
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
                "range": [
                  53,
                  55
                ],
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
              }
            },
            "value": null,
            "range": [
              50,
              56
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I0",
        "optional": false,
        "range": [
          41,
          43
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        35,
        58
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              },
              "range": [
                66,
                70
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "range": [
                    68,
                    70
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
                  68,
                  70
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
              }
            },
            "range": [
              64,
              70
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            64,
            70
          ],
          "loc": {
            "end": {
              "column": 10,
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
        60,
        71
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "range": [
          77,
          79
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              82,
              88
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 10,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "range": [
                91,
                93
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              }
            },
            "range": [
              91,
              93
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 19,
                "line": 8
              }
            }
          }
        ],
        "range": [
          82,
          93
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "range": [
        72,
        94
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          104,
          128
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
                      "line": 10
                    },
                    "start": {
                      "column": 6,
                      "line": 10
                    }
                  },
                  "range": [
                    112,
                    120
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      114,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  111,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 10
                  },
                  "start": {
                    "column": 5,
                    "line": 10
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
                  "column": 19,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              },
              "range": [
                121,
                125
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "range": [
                    123,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 10
                    },
                    "start": {
                      "column": 17,
                      "line": 10
                    }
                  }
                },
                "range": [
                  123,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
              110,
              126
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "range": [
          101,
          103
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        95,
        128
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
                }
              },
              "range": [
                136,
                140
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T4",
                  "optional": false,
                  "range": [
                    138,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "range": [
                  138,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              134,
              140
            ],
            "loc": {
              "end": {
                "column": 10,
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
            134,
            140
          ],
          "loc": {
            "end": {
              "column": 10,
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
        130,
        141
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "range": [
          147,
          149
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              152,
              158
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 14
              },
              "start": {
                "column": 10,
                "line": 14
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "range": [
                161,
                163
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 14
                },
                "start": {
                  "column": 19,
                  "line": 14
                }
              }
            },
            "range": [
              161,
              163
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 14
              },
              "start": {
                "column": 19,
                "line": 14
              }
            }
          }
        ],
        "range": [
          152,
          163
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "range": [
        142,
        164
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          174,
          198
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
                      "line": 16
                    },
                    "start": {
                      "column": 6,
                      "line": 16
                    }
                  },
                  "range": [
                    182,
                    190
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      184,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  }
                },
                "range": [
                  181,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 16
                  },
                  "start": {
                    "column": 5,
                    "line": 16
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
                  "column": 19,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              },
              "range": [
                191,
                195
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T4",
                  "optional": false,
                  "range": [
                    193,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                },
                "range": [
                  193,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              180,
              196
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "range": [
          171,
          173
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 15
          },
          "start": {
            "column": 6,
            "line": 15
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        165,
        198
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
