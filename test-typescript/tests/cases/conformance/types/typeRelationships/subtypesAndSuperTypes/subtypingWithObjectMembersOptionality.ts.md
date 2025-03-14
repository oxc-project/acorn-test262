__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    68,
    1600
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          83,
          99
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
                85,
                88
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
                88,
                96
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  90,
                  96
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
              85,
              97
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
          78,
          82
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
        68,
        99
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
          131,
          147
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
                133,
                136
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
                136,
                144
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  138,
                  144
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
              133,
              145
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
              126,
              130
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
            126,
            130
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
          110,
          117
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
        100,
        147
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
          183,
          199
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
                185,
                188
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
                188,
                196
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  190,
                  196
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
              185,
              197
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
              175,
              182
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
            175,
            182
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
          158,
          166
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
        148,
        199
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
          823,
          842
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                829,
                832
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              },
              "range": [
                833,
                839
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    835,
                    839
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 16
                    },
                    "start": {
                      "column": 10,
                      "line": 16
                    }
                  }
                },
                "range": [
                  835,
                  839
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              829,
              840
            ],
            "loc": {
              "end": {
                "column": 15,
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
            "column": 12,
            "line": 15
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "range": [
          821,
          822
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "range": [
        811,
        842
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          866,
          886
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                872,
                875
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 20
                },
                "start": {
                  "column": 4,
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
                  "column": 16,
                  "line": 20
                },
                "start": {
                  "column": 7,
                  "line": 20
                }
              },
              "range": [
                875,
                884
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "range": [
                    877,
                    884
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 9,
                      "line": 20
                    }
                  }
                },
                "range": [
                  877,
                  884
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 20
                  },
                  "start": {
                    "column": 9,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              872,
              884
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 22,
            "line": 19
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
            "name": "T",
            "optional": false,
            "range": [
              864,
              865
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 19
              },
              "start": {
                "column": 20,
                "line": 19
              }
            }
          },
          "range": [
            864,
            865
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 19
            },
            "start": {
              "column": 20,
              "line": 19
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "range": [
          854,
          855
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 10,
            "line": 19
          }
        }
      },
      "range": [
        844,
        886
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          901,
          919
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                907,
                908
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
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
                  "column": 12,
                  "line": 24
                },
                "start": {
                  "column": 6,
                  "line": 24
                }
              },
              "range": [
                909,
                915
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    911,
                    915
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "range": [
                  911,
                  915
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              907,
              916
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 13,
            "line": 23
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "range": [
          898,
          900
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        }
      },
      "range": [
        888,
        919
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          945,
          964
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                951,
                952
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 4,
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
                  "column": 14,
                  "line": 28
                },
                "start": {
                  "column": 5,
                  "line": 28
                }
              },
              "range": [
                952,
                961
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "range": [
                    954,
                    961
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 28
                    },
                    "start": {
                      "column": 7,
                      "line": 28
                    }
                  }
                },
                "range": [
                  954,
                  961
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 28
                  },
                  "start": {
                    "column": 7,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              951,
              962
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 24,
            "line": 27
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
            "name": "T2",
            "optional": false,
            "range": [
              942,
              944
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 27
              },
              "start": {
                "column": 21,
                "line": 27
              }
            }
          },
          "range": [
            942,
            944
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 27
            },
            "start": {
              "column": 21,
              "line": 27
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S2",
        "optional": false,
        "range": [
          931,
          933
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 27
          },
          "start": {
            "column": 10,
            "line": 27
          }
        }
      },
      "range": [
        921,
        964
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          979,
          998
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "'1'",
              "value": "1",
              "range": [
                985,
                988
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
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
                  "column": 14,
                  "line": 32
                },
                "start": {
                  "column": 8,
                  "line": 32
                }
              },
              "range": [
                989,
                995
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    991,
                    995
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 32
                    },
                    "start": {
                      "column": 10,
                      "line": 32
                    }
                  }
                },
                "range": [
                  991,
                  995
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 32
                  },
                  "start": {
                    "column": 10,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              985,
              996
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 13,
            "line": 31
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "range": [
          976,
          978
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 31
          },
          "start": {
            "column": 10,
            "line": 31
          }
        }
      },
      "range": [
        966,
        998
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1024,
          1046
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "'1.'",
              "value": "1.",
              "range": [
                1030,
                1034
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
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
                  "column": 17,
                  "line": 36
                },
                "start": {
                  "column": 8,
                  "line": 36
                }
              },
              "range": [
                1034,
                1043
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "range": [
                    1036,
                    1043
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 36
                    },
                    "start": {
                      "column": 10,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1036,
                  1043
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 36
                  },
                  "start": {
                    "column": 10,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              1030,
              1044
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 24,
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
            "name": "T3",
            "optional": false,
            "range": [
              1021,
              1023
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 35
              },
              "start": {
                "column": 21,
                "line": 35
              }
            }
          },
          "range": [
            1021,
            1023
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 35
            },
            "start": {
              "column": 21,
              "line": 35
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S3",
        "optional": false,
        "range": [
          1010,
          1012
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
      "range": [
        1000,
        1046
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 40
                },
                "start": {
                  "column": 5,
                  "line": 40
                }
              },
              "range": [
                1076,
                1093
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
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1080,
                        1083
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
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 40
                        },
                        "start": {
                          "column": 13,
                          "line": 40
                        }
                      },
                      "range": [
                        1084,
                        1090
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "range": [
                            1086,
                            1090
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 40
                            },
                            "start": {
                              "column": 15,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          1086,
                          1090
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 40
                          },
                          "start": {
                            "column": 15,
                            "line": 40
                          }
                        }
                      }
                    },
                    "range": [
                      1080,
                      1091
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 40
                      },
                      "start": {
                        "column": 9,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  1078,
                  1093
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 40
                  },
                  "start": {
                    "column": 7,
                    "line": 40
                  }
                }
              }
            },
            "range": [
              1075,
              1093
            ],
            "loc": {
              "end": {
                "column": 22,
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
            1075,
            1093
          ],
          "loc": {
            "end": {
              "column": 22,
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
        1071,
        1094
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "b",
            "optional": false,
            "range": [
              1099,
              1100
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
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
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    1105,
                    1108
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 41
                    },
                    "start": {
                      "column": 10,
                      "line": 41
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "expression": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      1119,
                      1123
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 41
                      },
                      "start": {
                        "column": 24,
                        "line": 41
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "range": [
                        1111,
                        1118
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 41
                        },
                        "start": {
                          "column": 16,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1111,
                      1118
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 41
                      },
                      "start": {
                        "column": 16,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1110,
                    1123
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 41
                    },
                    "start": {
                      "column": 15,
                      "line": 41
                    }
                  }
                },
                "range": [
                  1105,
                  1123
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 41
                  },
                  "start": {
                    "column": 10,
                    "line": 41
                  }
                }
              }
            ],
            "range": [
              1103,
              1125
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 41
              },
              "start": {
                "column": 8,
                "line": 41
              }
            }
          },
          "range": [
            1099,
            1125
          ],
          "loc": {
            "end": {
              "column": 30,
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
        1095,
        1126
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "r",
            "optional": false,
            "range": [
              1131,
              1132
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1146,
                1147
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 42
                },
                "start": {
                  "column": 19,
                  "line": 42
                }
              }
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1142,
                1143
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 42
                },
                "start": {
                  "column": 15,
                  "line": 42
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                1135,
                1139
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 42
                },
                "start": {
                  "column": 8,
                  "line": 42
                }
              }
            },
            "range": [
              1135,
              1147
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 42
              },
              "start": {
                "column": 8,
                "line": 42
              }
            }
          },
          "range": [
            1131,
            1147
          ],
          "loc": {
            "end": {
              "column": 20,
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
        1127,
        1148
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 42
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
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1185,
                1212
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      1195,
                      1198
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
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
                        "line": 46
                      },
                      "start": {
                        "column": 12,
                        "line": 46
                      }
                    },
                    "range": [
                      1199,
                      1205
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          1201,
                          1205
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 46
                          },
                          "start": {
                            "column": 14,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        1201,
                        1205
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 46
                        },
                        "start": {
                          "column": 14,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    1195,
                    1206
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 47
                },
                "start": {
                  "column": 16,
                  "line": 45
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1183,
                1184
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 45
                },
                "start": {
                  "column": 14,
                  "line": 45
                }
              }
            },
            "range": [
              1173,
              1212
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1240,
                1270
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      1250,
                      1253
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
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
                        "column": 21,
                        "line": 50
                      },
                      "start": {
                        "column": 11,
                        "line": 50
                      }
                    },
                    "range": [
                      1253,
                      1263
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "range": [
                          1255,
                          1263
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 50
                          },
                          "start": {
                            "column": 13,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1255,
                        1263
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 50
                        },
                        "start": {
                          "column": 13,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    1250,
                    1263
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 51
                },
                "start": {
                  "column": 26,
                  "line": 49
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
                  "name": "T",
                  "optional": false,
                  "range": [
                    1238,
                    1239
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 49
                    },
                    "start": {
                      "column": 24,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1238,
                  1239
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 49
                  },
                  "start": {
                    "column": 24,
                    "line": 49
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                1228,
                1229
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 49
                },
                "start": {
                  "column": 14,
                  "line": 49
                }
              }
            },
            "range": [
              1218,
              1270
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1289,
                1314
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1299,
                      1300
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 54
                      },
                      "start": {
                        "column": 8,
                        "line": 54
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
                        "column": 16,
                        "line": 54
                      },
                      "start": {
                        "column": 10,
                        "line": 54
                      }
                    },
                    "range": [
                      1301,
                      1307
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          1303,
                          1307
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 54
                          },
                          "start": {
                            "column": 12,
                            "line": 54
                          }
                        }
                      },
                      "range": [
                        1303,
                        1307
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 54
                        },
                        "start": {
                          "column": 12,
                          "line": 54
                        }
                      }
                    }
                  },
                  "range": [
                    1299,
                    1308
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 54
                    },
                    "start": {
                      "column": 8,
                      "line": 54
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 55
                },
                "start": {
                  "column": 17,
                  "line": 53
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "range": [
                1286,
                1288
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 53
                },
                "start": {
                  "column": 14,
                  "line": 53
                }
              }
            },
            "range": [
              1276,
              1314
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1344,
                1372
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1354,
                      1355
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
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
                        "line": 58
                      },
                      "start": {
                        "column": 9,
                        "line": 58
                      }
                    },
                    "range": [
                      1355,
                      1365
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "range": [
                          1357,
                          1365
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 58
                          },
                          "start": {
                            "column": 11,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        1357,
                        1365
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 58
                        },
                        "start": {
                          "column": 11,
                          "line": 58
                        }
                      }
                    }
                  },
                  "range": [
                    1354,
                    1366
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 59
                },
                "start": {
                  "column": 28,
                  "line": 57
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
                  "name": "T2",
                  "optional": false,
                  "range": [
                    1341,
                    1343
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 57
                    },
                    "start": {
                      "column": 25,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1341,
                  1343
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 57
                  },
                  "start": {
                    "column": 25,
                    "line": 57
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "range": [
                1330,
                1332
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 57
                },
                "start": {
                  "column": 14,
                  "line": 57
                }
              }
            },
            "range": [
              1320,
              1372
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1391,
                1418
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      1401,
                      1404
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
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 62
                      },
                      "start": {
                        "column": 12,
                        "line": 62
                      }
                    },
                    "range": [
                      1405,
                      1411
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          1407,
                          1411
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 62
                          },
                          "start": {
                            "column": 14,
                            "line": 62
                          }
                        }
                      },
                      "range": [
                        1407,
                        1411
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 62
                        },
                        "start": {
                          "column": 14,
                          "line": 62
                        }
                      }
                    }
                  },
                  "range": [
                    1401,
                    1412
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 63
                },
                "start": {
                  "column": 17,
                  "line": 61
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T3",
              "optional": false,
              "range": [
                1388,
                1390
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 61
                },
                "start": {
                  "column": 14,
                  "line": 61
                }
              }
            },
            "range": [
              1378,
              1418
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1448,
                1479
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1.'",
                    "value": "1.",
                    "range": [
                      1458,
                      1462
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 66
                      },
                      "start": {
                        "column": 8,
                        "line": 66
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
                        "line": 66
                      },
                      "start": {
                        "column": 12,
                        "line": 66
                      }
                    },
                    "range": [
                      1462,
                      1472
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "range": [
                          1464,
                          1472
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 66
                          },
                          "start": {
                            "column": 14,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1464,
                        1472
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 66
                        },
                        "start": {
                          "column": 14,
                          "line": 66
                        }
                      }
                    }
                  },
                  "range": [
                    1458,
                    1473
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 67
                },
                "start": {
                  "column": 28,
                  "line": 65
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
                  "name": "T3",
                  "optional": false,
                  "range": [
                    1445,
                    1447
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 65
                    },
                    "start": {
                      "column": 25,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1445,
                  1447
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 65
                  },
                  "start": {
                    "column": 25,
                    "line": 65
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S3",
              "optional": false,
              "range": [
                1434,
                1436
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 65
                },
                "start": {
                  "column": 14,
                  "line": 65
                }
              }
            },
            "range": [
              1424,
              1479
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 65
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
                        "column": 26,
                        "line": 70
                      },
                      "start": {
                        "column": 9,
                        "line": 70
                      }
                    },
                    "range": [
                      1517,
                      1534
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
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              1521,
                              1524
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 70
                              },
                              "start": {
                                "column": 13,
                                "line": 70
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
                                "column": 23,
                                "line": 70
                              },
                              "start": {
                                "column": 17,
                                "line": 70
                              }
                            },
                            "range": [
                              1525,
                              1531
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "range": [
                                  1527,
                                  1531
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 70
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 70
                                  }
                                }
                              },
                              "range": [
                                1527,
                                1531
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 70
                                },
                                "start": {
                                  "column": 19,
                                  "line": 70
                                }
                              }
                            }
                          },
                          "range": [
                            1521,
                            1532
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 70
                            },
                            "start": {
                              "column": 13,
                              "line": 70
                            }
                          }
                        }
                      ],
                      "range": [
                        1519,
                        1534
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 70
                        },
                        "start": {
                          "column": 11,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    1516,
                    1534
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 70
                    }
                  }
                },
                "init": null,
                "range": [
                  1516,
                  1534
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 70
                  },
                  "start": {
                    "column": 8,
                    "line": 70
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1512,
              1535
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 70
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
                  "range": [
                    1544,
                    1545
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
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
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          1550,
                          1553
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 71
                          },
                          "start": {
                            "column": 14,
                            "line": 71
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "TSTypeAssertion",
                        "expression": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            1565,
                            1569
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 71
                            },
                            "start": {
                              "column": 29,
                              "line": 71
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived2",
                            "optional": false,
                            "range": [
                              1556,
                              1564
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 71
                              },
                              "start": {
                                "column": 20,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1556,
                            1564
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 71
                            },
                            "start": {
                              "column": 20,
                              "line": 71
                            }
                          }
                        },
                        "range": [
                          1555,
                          1569
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 71
                          },
                          "start": {
                            "column": 19,
                            "line": 71
                          }
                        }
                      },
                      "range": [
                        1550,
                        1569
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 71
                        },
                        "start": {
                          "column": 14,
                          "line": 71
                        }
                      }
                    }
                  ],
                  "range": [
                    1548,
                    1571
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 71
                    },
                    "start": {
                      "column": 12,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1544,
                  1571
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 71
                  },
                  "start": {
                    "column": 8,
                    "line": 71
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1540,
              1572
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
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
                  "name": "r",
                  "optional": false,
                  "range": [
                    1581,
                    1582
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      1596,
                      1597
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 72
                      },
                      "start": {
                        "column": 23,
                        "line": 72
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1592,
                      1593
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 72
                      },
                      "start": {
                        "column": 19,
                        "line": 72
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      1585,
                      1589
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 72
                      },
                      "start": {
                        "column": 12,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    1585,
                    1597
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 72
                    },
                    "start": {
                      "column": 12,
                      "line": 72
                    }
                  }
                },
                "range": [
                  1581,
                  1597
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 72
                  },
                  "start": {
                    "column": 8,
                    "line": 72
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1577,
              1598
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          }
        ],
        "range": [
          1167,
          1600
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 17,
            "line": 44
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1157,
          1166
        ],
        "decorators": [],
        "name": "TwoLevels",
        "optional": false,
        "loc": {
          "end": {
            "column": 16,
            "line": 44
          },
          "start": {
            "column": 7,
            "line": 44
          }
        }
      },
      "kind": "module",
      "range": [
        1150,
        1600
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 73
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
